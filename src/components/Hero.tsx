"use client";

import Image from "next/image";
import { Play, Sparkles, Film, ArrowDown, Camera, Layers, CheckCircle } from "lucide-react";

interface HeroProps {
  onOpenReel: () => void;
}

export default function Hero({ onOpenReel }: HeroProps) {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "calc(var(--header-height) + 40px)",
        paddingBottom: "80px",
        overflow: "hidden",
      }}
    >
      {/* Cinematic Ambient Glow Orbs */}
      <div
        className="glow-ambient"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, var(--color-orange-glow) 0%, transparent 70%)",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 0,
        }}
      />
      <div
        className="glow-ambient"
        style={{
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(255, 85, 5, 0.15) 0%, transparent 70%)",
          bottom: "10%",
          right: "5%",
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "980px", margin: "0 auto", textAlign: "center" }}>
          {/* Studio Badge */}
          <div className="section-badge" style={{ margin: "0 auto 24px" }}>
            <Sparkles size={14} />
            Videomaking Studio &bull; Sarzana &bull; Attivi in tutta Italia
          </div>

          {/* Main Hero Headline */}
          <h1
            style={{
              fontSize: "clamp(2.4rem, 5.5vw, 4.75rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              marginBottom: "24px",
            }}
          >
            The wildest storytellers.
            <br />
            <span className="highlight">Produzioni video</span> che lasciano il segno.
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "clamp(1.05rem, 1.4vw, 1.25rem)",
              color: "var(--color-gray-subtle)",
              maxWidth: "760px",
              margin: "0 auto 36px",
              lineHeight: 1.6,
            }}
          >
            Diamo vita a spot pubblicitari, videoclip musicali e corporate video
            dall&apos;impatto cinematografico. Dallo storyboard al color grading
            master in 170mq di studio attrezzato.
          </p>

          {/* Action CTAs */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
              marginBottom: "56px",
            }}
          >
            <button
              onClick={onOpenReel}
              className="btn btn-primary"
              style={{ padding: "16px 32px" }}
            >
              <Play size={18} fill="currentColor" />
              Guarda lo Showreel 2026
            </button>
            <a
              href="#lavori"
              className="btn btn-secondary"
              style={{ padding: "16px 28px" }}
            >
              <Film size={18} />
              Esplora i Lavori
            </a>
          </div>
        </div>

        {/* Hero Video Teaser Banner with Cinematic Frame */}
        <div
          style={{
            position: "relative",
            maxWidth: "1160px",
            margin: "0 auto 60px",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid var(--border-card)",
            boxShadow: "0 24px 60px rgba(0, 0, 0, 0.7)",
            background: "var(--bg-surface)",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "21 / 9",
              minHeight: "260px",
            }}
          >
            <Image
              src="/images/projects/highsnob-kintsugi.webp"
              alt="Goreela Showreel Teaser Frame"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
            {/* Dark Vignette & Gradient Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(12,12,14,0.3) 0%, rgba(12,12,14,0.7) 100%)",
              }}
            />

            {/* Floating Play Trigger */}
            <button
              onClick={onOpenReel}
              aria-label="Riproduci reel a schermo intero"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "rgba(255, 85, 5, 0.9)",
                backdropFilter: "blur(8px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                boxShadow: "0 0 35px var(--color-orange-glow)",
                transition: "var(--transition-smooth)",
              }}
              className="play-pulse-btn"
            >
              <Play size={32} fill="#ffffff" style={{ marginLeft: "4px" }} />
            </button>

            {/* Badges on bottom of frame */}
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "24px",
                right: "24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(12, 12, 14, 0.75)",
                  backdropFilter: "blur(12px)",
                  padding: "6px 14px",
                  borderRadius: "6px",
                  border: "1px solid var(--border-subtle)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                }}
              >
                <Camera size={15} color="var(--color-orange)" />
                RED &bull; ARRI Cinema RAW &bull; DaVinci Resolve
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(12, 12, 14, 0.75)",
                  backdropFilter: "blur(12px)",
                  padding: "6px 14px",
                  borderRadius: "6px",
                  border: "1px solid var(--border-subtle)",
                  fontSize: "0.85rem",
                  color: "#ff884d",
                  fontWeight: 600,
                }}
              >
                <CheckCircle size={15} />
                Disponibilità nuove produzioni aperte
              </div>
            </div>
          </div>
        </div>

        {/* Live Metrics Grid (I nostri numeri - fedeli a goreela.it) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            maxWidth: "1160px",
            margin: "0 auto",
          }}
        >
          {[
            { number: "150+", label: "Produzioni Video", sub: "Commercial, videoclip e branded" },
            { number: "170mq", label: "Studio di Posa", sub: "Limbo ciclorama e postazioni post" },
            { number: "4K / 6K", label: "Cinema RAW", sub: "Workflow nativo ad altissima gamma" },
            { number: "100%", label: "In-House Creative", sub: "Dal concept alla master delivery" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "12px",
                padding: "24px",
                textAlign: "left",
                transition: "var(--transition-smooth)",
              }}
              className="stat-card"
            >
              <div
                style={{
                  fontSize: "2.25rem",
                  fontWeight: 800,
                  fontFamily: "var(--font-heading)",
                  color: "var(--color-orange)",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--text-white)",
                  marginBottom: "4px",
                }}
              >
                {stat.label}
              </div>
              <div style={{ fontSize: "0.82rem", color: "var(--color-gray-subtle)" }}>
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .play-pulse-btn:hover {
          transform: translate(-50%, -50%) scale(1.1);
          background: #ff6e26;
        }
        .stat-card:hover {
          border-color: var(--color-orange-border);
          transform: translateY(-3px);
          background: var(--bg-card);
        }
      `}</style>
    </section>
  );
}
