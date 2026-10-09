"use client";

import Image from "next/image";
import { Star, Building } from "lucide-react";

export default function ClientMarquee() {
  const clientLogos = [
    { name: "Spezia Calcio", src: "/images/clients/spezia-calcio.webp", width: 110, height: 50 },
    { name: "9T Labs", src: "/images/clients/9t-labs.webp", width: 120, height: 60 },
    { name: "Essentiae", src: "/images/clients/essentiae.webp", width: 120, height: 60 },
    { name: "Teknosign", src: "/images/clients/teknosign.webp", width: 120, height: 60 },
    { name: "Blu Melange", src: "/images/clients/blumelange.webp", width: 110, height: 50 },
    { name: "The Clino", src: "/images/clients/theclino.webp", width: 130, height: 45 },
    { name: "Capitolare", src: "/images/clients/capitolare.webp", width: 100, height: 60 },
    { name: "Cocktail Fest", src: "/images/clients/cocktailfest.webp", width: 120, height: 60 },
    { name: "Outplayed", src: "/images/clients/outplayed.webp", width: 130, height: 45 },
    { name: "Cibiamoo", src: "/images/clients/cibiamoo.webp", width: 110, height: 50 },
  ];

  const testimonials = [
    {
      quote:
        "Goreela ha saputo catturare l'anima della nostra cantina con una sensibilità visiva d'altri tempi. La fotografia anamorfica ha valorizzato la nostra tradizione elevandola a livello internazionale.",
      author: "Cantine Lunae",
      role: "Direzione Marketing & Brand Identity",
      project: "Docu-Spot Essentiae Lunae",
    },
    {
      quote:
        "Precisione svizzera, creatività esplosiva e un montaggio dinamico che ha saputo spiegare la nostra tecnologia in composito 3D in modo chiaro e spettacolare per le fiere europee.",
      author: "9T Labs (Zurigo)",
      role: "Head of Communications",
      project: "Corporate Video & Fair Campaign",
    },
    {
      quote:
        "Professionalità sul set, rispetto maniacale dei tempi e un'energia contagiosa. Lo studio di 170mq a Sarzana è stata la location perfetta per le nostre interviste e still life.",
      author: "Without Production",
      role: "Creative Director",
      project: "Milan & Paris Fashion Week",
    },
  ];

  return (
    <section
      id="clienti"
      style={{
        padding: "100px 0 120px",
        backgroundColor: "var(--bg-black)",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 50px" }}>
          <div className="section-badge">
            <Building size={14} />
            Portfolio Clienti &bull; Partnership
          </div>
          <h2 className="section-title">
            Chi ha scelto <span className="highlight">Goreela Studio</span>.
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Collaboriamo con brand internazionali, eccellenze del Made in Italy,
            etichette discografiche e agenzie creative in tutta la penisola.
          </p>
        </div>

        {/* Infinite Logo Marquee Slider */}
        <div
          className="marquee-container"
          style={{
            padding: "36px 0",
            borderTop: "1px solid var(--border-subtle)",
            borderBottom: "1px solid var(--border-subtle)",
            backgroundColor: "rgba(20, 20, 24, 0.4)",
            marginBottom: "70px",
          }}
        >
          <div className="marquee-track">
            {[...clientLogos, ...clientLogos, ...clientLogos].map((c, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0 24px",
                  height: "70px",
                  filter: "brightness(0.9) contrast(1.1)",
                  opacity: 0.85,
                  transition: "var(--transition-smooth)",
                }}
                className="marquee-logo-item"
              >
                <div style={{ position: "relative", width: `${c.width}px`, height: `${c.height}px` }}>
                  <Image
                    src={c.src}
                    alt={c.name}
                    fill
                    style={{ objectFit: "contain" }}
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonials Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "16px",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                transition: "var(--transition-smooth)",
              }}
              className="testimonial-card"
            >
              <div>
                <div style={{ display: "flex", gap: "4px", marginBottom: "16px", color: "var(--color-orange)" }}>
                  {[...Array(5)].map((_, starIdx) => (
                    <Star key={starIdx} size={15} fill="currentColor" />
                  ))}
                </div>

                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "#d0d0d8",
                    lineHeight: "1.65",
                    fontStyle: "italic",
                    marginBottom: "24px",
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div style={{ paddingTop: "16px", borderTop: "1px solid var(--border-subtle)" }}>
                <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-white)" }}>
                  {t.author}
                </div>
                <div style={{ fontSize: "0.82rem", color: "var(--color-orange)", fontWeight: 600 }}>
                  {t.role}
                </div>
                <div style={{ fontSize: "0.78rem", color: "var(--color-gray-subtle)", marginTop: "2px" }}>
                  Progetto: {t.project}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-logo-item:hover {
          filter: brightness(1.2) !important;
          opacity: 1 !important;
          transform: scale(1.05);
        }
        .testimonial-card:hover {
          border-color: var(--color-orange-border);
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.6);
        }
      `}</style>
    </section>
  );
}
