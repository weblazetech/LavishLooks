import fs from 'fs';
import path from 'path';
import https from 'https';

const IMAGES = [
  {
    target: 'public/images/hero/hero-main.jpg',
    url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85',
  },
  {
    target: 'public/images/bridal/bridal-hero.jpg',
    url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85',
  },
  {
    target: 'public/images/gallery/hair-01.jpg',
    url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=85',
  },
  {
    target: 'public/images/gallery/bridal-01.jpg',
    url: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=85',
  },
  {
    target: 'public/images/gallery/mehndi-01.jpg',
    url: 'https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=85',
  },
  {
    target: 'public/images/gallery/makeup-01.jpg',
    url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=85',
  },
  {
    target: 'public/images/gallery/grooming-01.jpg',
    url: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1200&q=85',
  },
  {
    target: 'public/images/gallery/bridal-02.jpg',
    url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85',
  },
  {
    target: 'public/images/gallery/hair-02.jpg',
    url: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=85',
  },
  {
    target: 'public/images/gallery/makeup-02.jpg',
    url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=85',
  },
  {
    target: 'public/images/gallery/mehndi-02.jpg',
    url: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1200&q=85',
  },
  {
    target: 'public/images/gallery/grooming-02.jpg',
    url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=85',
  },
];

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      // Follow redirects
      if (response.statusCode === 301 || response.statusCode === 302 || response.statusCode === 307) {
        return downloadImage(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        return reject(new Error(`Failed with status ${response.statusCode}`));
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          console.log(`Saved: ${dest}`);
          resolve();
        });
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  for (const item of IMAGES) {
    try {
      await downloadImage(item.url, item.target);
    } catch (e) {
      console.error(`Error downloading ${item.target}:`, e.message);
    }
  }
  console.log('All images processed!');
}

run();
