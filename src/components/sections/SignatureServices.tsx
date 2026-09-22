import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

export default function SignatureServices() {
  const signatures = [
    {
      index: "01",
      title: "Bridal Makeup Artistry",
      subtitle: "Occasion Couture",
      description:
        "High-definition and airbrush techniques that capture natural luminosity and withstand the emotional grandeur of celebration. Tailored for muhurtham rites, sangeet, and reception spectacles.",
      image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1200&auto=format&fit=crop",
      link: "/bridal",
      aspect: "landscape",
    },
    {
      index: "02",
      title: "Hair Transformation & Couture Colour",
      subtitle: "Texture & Dimension",
      description:
        "From seamless dimensional balayage to restorative botoplex and keratin smoothing therapies. Precision geometry meets customized hair health for dramatic, weightless movement.",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop",
      link: "/services#hair",
      aspect: "portrait",
    },
    {
      index: "03",
      title: "Handcrafted Mehndi Artistry",
      subtitle: "Heritage & Symbolism",
      description:
        "Fine-line henna application blending traditional royal wedding motifs with contemporary floral jaali work. Deep, dark natural stains prepared with organic care.",
      image: "/images/services/handcrafted-mehndi.jpg",
      link: "/services#mehndi-bridal",
      aspect: "landscape",
    },
    {
      index: "04",
      title: "Men’s Executive Grooming Suite",
      subtitle: "Precision & Poise",
      description:
        "Scissor architecture, sharp razor line-ups, and hot-towel skin detox rituals. Designed for the modern gentleman who demands impeccable sharpness for weddings and everyday distinction.",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop",
      link: "/services#mens-grooming",
      aspect: "portrait",
    },
  ];

  return (
    <section className="section-spacing" style={{ backgroundColor: "var(--teal-950)" }}>
      <div className="container">
        <SectionHeader
          tag="Editorial Focus"
          number="03"
          title="Signature Service Chronicles"
          subtitle="A deeper study into our most requested disciplines. Each crafted with tailored technique, premium products, and unhurried craftsmanship."
          align="center"
        />

        {/* Magazine-Style Overlapping Rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6rem" }}>
          {signatures.map((item, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <div
                key={item.index}
                className={`signature-row ${isEven ? "signature-row-reversed" : ""}`}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: "2.5rem 4rem",
                  alignItems: "center",
                }}
              >
                {/* Large Editorial Image */}
                <div
                  className="signature-img-col"
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "440px",
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: "1px solid var(--gold-border)",
                    boxShadow: "0 20px 45px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                      transition: "transform 0.7s ease",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(4, 18, 18, 0.75) 0%, transparent 60%)",
                    }}
                  />

                  {/* Corner Accent */}
                  <div
                    style={{
                      position: "absolute",
                      top: "1.5rem",
                      left: "1.5rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.3rem 0.8rem",
                      borderRadius: "var(--radius-full)",
                      background: "rgba(7, 30, 30, 0.8)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid var(--gold-border)",
                      fontSize: "0.75rem",
                      fontFamily: "var(--font-sans)",
                      color: "var(--gold-300)",
                    }}
                  >
                    <Sparkles size={12} />
                    <span>{item.subtitle}</span>
                  </div>
                </div>

                {/* Overlapping Content Box */}
                <div
                  className="signature-text-col"
                  style={{
                    position: "relative",
                    padding: "1rem 0",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "2.8rem",
                        color: "var(--gold-400)",
                        lineHeight: 1,
                      }}
                    >
                      {item.index}
                    </span>
                    <span
                      style={{
                        height: "1px",
                        width: "50px",
                        backgroundColor: "var(--gold-border)",
                      }}
                    />
                  </div>

                  <h3
                    className="font-serif"
                    style={{
                      fontSize: "clamp(2rem, 3.2vw, 2.7rem)",
                      color: "var(--ivory-50)",
                      fontWeight: 400,
                      lineHeight: 1.2,
                      marginBottom: "1.2rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "1rem",
                      color: "var(--text-muted-dark)",
                      lineHeight: 1.75,
                      marginBottom: "2rem",
                      maxWidth: "500px",
                    }}
                  >
                    {item.description}
                  </p>

                  <Link
                    href={item.link}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--gold-300)",
                      borderBottom: "1px solid var(--gold-400)",
                      paddingBottom: "0.3rem",
                      transition: "all 0.25s ease",
                    }}
                  >
                    <span>Discover Details</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
