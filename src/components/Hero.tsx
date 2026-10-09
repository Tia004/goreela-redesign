"use client";

import Image from "next/image";
import { Play, Sparkles, Film, Camera, Layers, CheckCircle } from "lucide-react";

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
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: "980px", margin: "0 auto", textAlign: "center" }}>
          {/* Studio Badge */}
          <div className="section-badge" style={{ margin: "0 auto 24px" }}>
            <Sparkles size={14} />
            The Wildest Storytellers &bull; Sarzana &bull; In tutta Italia
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

          {/* Subtitle with authentic Goreela humor */}
          <p
            style={{
              fontSize: "clamp(1.05rem, 1.4vw, 1.25rem)",
              color: "var(--color-gray-subtle)",
              maxWidth: "780px",
              margin: "0 auto 36px",
              lineHeight: "1.65",
            }}
          >
            Niente presentazioni noiose da 80 pagine: il metodo più efficace per raccontarsi
            è una produzione video. Spot, videoclip e contenuti corporate con estetica cinematografica
            e zero compromessi.
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
              Guarda lo Showreel Ufficiale
            </button>
            <a
              href="#lavori"
              className="btn btn-secondary"
              style={{ padding: "16px 28px" }}
            >
              <Film size={18} />
              Esplora i Nostri Lavori
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
            boxShadow: "0 24px 60px rgba(0, 0, 0, 0.8)",
            background: "var(--bg-surface)",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "21 / 9",
              minHeight: "280px",
            }}
          >
            <Image
              src="/images/projects/highsnob-kintsugi.webp"
              alt="Goreela Showreel 2024 Teaser"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              draggable={false}
              priority
            />
            {/* Dark Vignette Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(12,12,14,0.2) 0%, rgba(12,12,14,0.85) 100%)",
              }}
            />

            {/* Floating Play Trigger */}
            <button
              onClick={onOpenReel}
              aria-label="Riproduci lo Showreel 2024"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "84px",
                height: "84px",
                borderRadius: "50%",
                background: "rgba(255, 85, 5, 0.95)",
                backdropFilter: "blur(8px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                boxShadow: "0 0 35px var(--color-orange-glow)",
                transition: "var(--transition-smooth)",
                cursor: "pointer",
              }}
              className="play-pulse-btn"
            >
              <Play size={34} fill="#ffffff" style={{ marginLeft: "4px" }} />
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
                  background: "rgba(12, 12, 14, 0.85)",
                  backdropFilter: "blur(12px)",
                  padding: "6px 14px",
                  borderRadius: "6px",
                  border: "1px solid var(--border-subtle)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                }}
              >
                <Camera size={15} color="var(--color-orange)" />
                SHOWREEL 2024 &bull; In 16:9, perché abbiamo fatto troppe cose in verticale!
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(12, 12, 14, 0.85)",
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

        {/* Live Metrics Grid */}
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
            { number: "170mq", label: "Studio di Posa a Sarzana", sub: "Limbo ciclorama e postazioni post" },
            { number: "4K / 6K", label: "Cinema RAW", sub: "Sensori Full-Frame & ottiche cinema" },
            { number: "100%", label: "In-House Creative", sub: "Zero intermediari, solo registi e artigiani" },
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
