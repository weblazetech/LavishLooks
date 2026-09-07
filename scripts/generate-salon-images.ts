import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const OUT_DIR = '/home/z/my-project/public/salon';

type Job = {
  filename: string;
  prompt: string;
  size: '1024x1024' | '768x1344' | '864x1152' | '1344x768' | '1152x864' | '1440x720' | '720x1440';
};

// Editorial warm-daylight salon photography. NO people, NO faces.
// Focus on interiors, tools, products, fabric, and still-life compositions.
// All prompts explicitly avoid pink/lavender/purple/blue, stock corporate looks.
const JOBS: Job[] = [
  {
    filename: 'hero-styling-chair.png',
    size: '864x1152',
    prompt:
      'Editorial warm-daylight photograph of an elegant unisex beauty salon interior, a single empty styling chair in soft focus, ivory and sand-toned walls, a large round mirror framed in warm brass, peacock teal accent wall in the far background, soft morning light streaming through a window, glossy editorial grade, warm ivory color palette, no people, no text, premium atelier atmosphere, shallow depth of field, 85mm lens, photorealistic, high quality',
  },
  {
    filename: 'bridal-still-life.png',
    size: '768x1344',
    prompt:
      'Editorial still-life photograph of bridal accessories arranged on ivory silk fabric, intricate gold temple jewelry, deep maroon bangles, a small pot of henna, soft warm daylight, glossy editorial product photography, warm ivory background, peacock teal accent cloth in soft focus, no people, no text, premium atelier mood, shallow depth of field, photorealistic, high quality',
  },
  {
    filename: 'gallery-hair-1.png',
    size: '1024x1024',
    prompt:
      'Editorial back-view photograph of glossy long black hair draped over an ivory salon cape, fresh blow-dry finish, soft warm salon daylight, warm gold tones, peacock teal accent in soft-focus background, glossy editorial salon transformation photograph, warm ivory palette, no face, no person visible, no text, premium atelier mood, photorealistic, high quality',
  },
  {
    filename: 'gallery-hair-2.png',
    size: '1024x1024',
    prompt:
      'Editorial still-life photograph of professional hairdressing scissors, a tortoiseshell comb, and a brass clip arranged on an ivory marble surface, soft warm daylight, gold accents, glossy editorial product photography, warm ivory palette, no people, no text, premium atelier mood, shallow depth of field, photorealistic, high quality',
  },
  {
    filename: 'gallery-mehndi-1.png',
    size: '1024x1024',
    prompt:
      'Editorial close-up of intricate paisley and peacock henna (mehndi) patterns freshly applied on an ivory silk cloth, deep maroon henna paste, gold bangles resting beside, soft warm daylight, glossy editorial beauty still-life photograph, warm ivory background, no hands visible, no person, no text, premium atelier mood, photorealistic, high quality',
  },
  {
    filename: 'gallery-makeup-1.png',
    size: '1024x1024',
    prompt:
      'Editorial flat-lay photograph of a professional makeup kit arranged on an ivory marble surface, brushes in a brass holder, warm gold and ivory powder compacts, soft warm daylight, glossy editorial product photography, warm ivory palette, no people, no text, premium atelier mood, photorealistic, high quality',
  },
  {
    filename: 'gallery-grooming-1.png',
    size: '1024x1024',
    prompt:
      'Editorial still-life photograph of men\'s grooming tools arranged on an ivory marble surface, a straight razor, a badger-hair shaving brush, a brass bowl with warm lather, soft warm daylight, gold accents, glossy editorial product photography, warm ivory palette, no people, no text, premium atelier mood, shallow depth of field, photorealistic, high quality',
  },
  {
    filename: 'gallery-styling-1.png',
    size: '1024x1024',
    prompt:
      'Editorial close-up photograph of a professional hair dryer and round brush in motion over long dark hair draped on an ivory cape, warm airflow, soft warm daylight, ivory walls, gold accents, glossy editorial salon transformation photograph, warm ivory palette, no face, no person visible, no text, premium atelier mood, photorealistic, high quality',
  },
];

async function run() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  const zai = await ZAI.create();

  for (const job of JOBS) {
    const outPath = path.join(OUT_DIR, job.filename);
    if (fs.existsSync(outPath) && fs.statSync(outPath).size > 1024) {
      console.log(`SKIP (exists): ${job.filename}`);
      continue;
    }
    process.stdout.write(`Generating ${job.filename} ... `);
    try {
      const resp = await zai.images.generations.create({
        prompt: job.prompt,
        size: job.size,
      });
      const b64 = resp.data[0].base64;
      fs.writeFileSync(outPath, Buffer.from(b64, 'base64'));
      console.log(`OK (${(fs.statSync(outPath).size / 1024).toFixed(0)} KB)`);
    } catch (e: any) {
      console.log(`FAIL: ${e?.message ?? e}`);
    }
  }
  console.log('Done.');
}

run().catch((e) => {
  console.error('Fatal:', e);
  process.exit(1);
});
