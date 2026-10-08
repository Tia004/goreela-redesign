"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Building2,
  Camera,
  Monitor,
  Coffee,
  CheckCircle2,
  Sliders,
  Sparkles,
  MapPin,
} from "lucide-react";

export default function StudioSection() {
  const [activeRoom, setActiveRoom] = useState(0);

  const rooms = [
    {
      id: "shooting-stage",
      title: "Shooting Stage & Limbo",
      label: "Sala Posa Cinematografica",
      description:
        "Sala posa attrezzata e climatizzata, ideale per interviste, spot, still life commerciali e videoclip musicali. Dispone di un set completo di luci professionali cinema ad alto CRI (Aputure e Nanlite), fondali motorizzati Colorama in molteplici colorazioni e vasta gamma di oggetti di scena. Il cuore operativo per le riprese ad alta precisione.",
      image: "/images/studio/shooting-stage.webp",
      icon: Camera,
      specs: [
        "Limbo ciclorama bianco e fondali Colorama intercambiabili",
        "Parco luci cinema: Aputure 600d Pro, 300x, Nanlite Pavotube RGBWW",
        "Climatizzazione autonoma silenziosa certificata per riprese audio",
        "C-Stand Matthews, stativi pesanti, bandiere e diffusori 8x8",
        "Connessione in fibra FTTH 1Gbps simmetrica per live streaming",
      ],
      area: "85 mq",
    },
    {
      id: "meetup-room",
      title: "Meet Up Room",
      label: "Spazio Progettazione & Briefing",
      description:
        "Un ampio spazio dedicato ad accogliere clienti, agenzie e registi. Qui ci incontriamo per conoscerti, visionare lo showreel sul maxischermo calibrato, discutere lo storyboard e pianificare la produzione nei minimi particolari prima di entrare sul set.",
      image: "/images/studio/meetup-room.webp",
      icon: Building2,
      specs: [
        "Tavolo meeting in legno massello per 10 postazioni",
        "Schermo 4K 75 pollici calibrato per anteprime registiche",
        "Impianto audio surround per ascolto anteprima brani e spot",
        "Libreria props, texture e campionari scenografici",
        "Spazio riservato per video-call con agenzie e clienti remoti",
      ],
      area: "35 mq",
    },
    {
      id: "editing-rooftop",
      title: "Editing Rooftop",
      label: "Suite Post-Produzione & Color",
      description:
        "Un piano sopraelevato che ospita 6 postazioni dedicate al montaggio video, visual effects e color grading professionale. Qui le riprese prendono forma definitiva grazie a macchine ad altissime prestazioni, monitor di riferimento Flanders Scientific e console di gradazione DaVinci Resolve.",
      image: "/images/studio/editing-rooftop.webp",
      icon: Monitor,
      specs: [
        "6 Postazioni Apple Mac Studio M2 Ultra con storage NVMe RAID",
        "Monitor Flanders Scientific 10-bit certificati DCI-P3 / Rec.709",
        "Console hardware DaVinci Resolve Mini Panel",
        "Ambiente ad illuminazione controllata D65 per colorimetria esatta",
        "Server NAS 10GbE centralizzato per editing simultaneo in team",
      ],
      area: "30 mq",
    },
    {
      id: "chill-cave",
      title: "Chill-out Cave",
      label: "Area Relax & Brainstorming",
      description:
        "Un ambiente confortevole progettato per staccare la mente tra una sessione di ripresa e l'altra. Dotato di coffee corner con macchina espresso professionale, divani e vinili musicali. Il luogo ideale dove nascono le intuizioni creative più audaci.",
      image: "/images/studio/chill-cave.webp",
      icon: Coffee,
      specs: [
        "Zona lounge con divani e postazione trucco/camerino attori",
        "Espresso bar artigianale e frigobar a disposizione della troupe",
        "Impianto hi-fi analogico per ascolto dischi in vinile",
        "Ambiente insonorizzato e rilassante per pause sul set",
      ],
      area: "20 mq",
    },
  ];

  const current = rooms[activeRoom];

  return (
    <section
      id="studio"
      style={{
        padding: "100px 0 120px",
        backgroundColor: "var(--bg-black)",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "820px", margin: "0 auto 60px" }}>
          <div className="section-badge">
            <Building2 size={14} />
            Hub Produttivo &bull; Sarzana (SP)
          </div>
          <h2 className="section-title">
            LO STUDIO. <span className="highlight">170mq progettati</span> per la produzione video.
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Uno spazio modulare studiato nei dettagli per ospitare troupe cinematografiche,
            clienti e agenzie. Dalla sala posa con limbo alle suite di montaggio.
          </p>
        </div>

        {/* Room Switcher Pills */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap",
            marginBottom: "40px",
          }}
        >
          {rooms.map((r, idx) => {
            const Icon = r.icon;
            const isSelected = activeRoom === idx;
            return (
              <button
                key={r.id}
                onClick={() => setActiveRoom(idx)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "12px 24px",
                  borderRadius: "30px",
                  fontSize: "0.92rem",
                  fontWeight: 700,
                  backgroundColor: isSelected
                    ? "var(--color-orange)"
                    : "var(--bg-card)",
                  color: isSelected ? "#ffffff" : "var(--color-gray-subtle)",
                  border: isSelected
                    ? "1px solid var(--color-orange)"
                    : "1px solid var(--border-subtle)",
                  cursor: "pointer",
                  transition: "var(--transition-smooth)",
                  boxShadow: isSelected ? "0 8px 20px var(--color-orange-glow)" : "none",
                }}
              >
                <Icon size={16} />
                <span>{r.title}</span>
              </button>
            );
          })}
        </div>

        {/* Bento Grid Showcase for Active Room */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "32px",
            backgroundColor: "var(--bg-surface)",
            border: "1px solid var(--border-card)",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 24px 60px rgba(0, 0, 0, 0.8)",
          }}
          className="studio-bento-grid"
        >
          {/* Room Image Frame */}
          <div
            style={{
              position: "relative",
              minHeight: "440px",
              width: "100%",
            }}
          >
            <Image
              src={current.image}
              alt={current.title}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(12,12,14,0.1) 0%, rgba(12,12,14,0.7) 100%)",
              }}
            />

            {/* Room Area Badge */}
            <div
              style={{
                position: "absolute",
                top: "24px",
                left: "24px",
                background: "rgba(12, 12, 14, 0.85)",
                backdropFilter: "blur(12px)",
                padding: "8px 16px",
                borderRadius: "8px",
                border: "1px solid var(--border-subtle)",
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "var(--color-orange)",
              }}
            >
              Superficie: {current.area}
            </div>
          </div>

          {/* Room Description & Specs */}
          <div
            style={{
              padding: "40px 36px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "var(--color-orange)",
                  letterSpacing: "0.06em",
                  marginBottom: "8px",
                }}
              >
                {current.label}
              </div>
              <h3
                style={{
                  fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                  fontWeight: 800,
                  color: "var(--text-white)",
                  marginBottom: "16px",
                }}
              >
                {current.title}
              </h3>
              <p
                style={{
                  color: "#c4c4cc",
                  fontSize: "0.95rem",
                  lineHeight: "1.7",
                  marginBottom: "28px",
                }}
              >
                {current.description}
              </p>

              {/* Technical equipment highlights */}
              <h4
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: "var(--text-white)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Sparkles size={14} color="var(--color-orange)" />
                Attrezzature & Dotazioni
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {current.specs.map((spec, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      fontSize: "0.88rem",
                      color: "#d0d0d8",
                      lineHeight: "1.4",
                    }}
                  >
                    <CheckCircle2
                      size={15}
                      color="var(--color-orange)"
                      style={{ marginTop: "3px", flexShrink: 0 }}
                    />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visit Studio CTA */}
            <div
              style={{
                marginTop: "32px",
                paddingTop: "24px",
                borderTop: "1px solid var(--border-subtle)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.82rem", color: "var(--color-gray-subtle)" }}>
                <MapPin size={15} color="var(--color-orange)" />
                Via B. Partigiana U. Muccini 18, Sarzana (SP)
              </div>
              <a href="#contatti" className="btn btn-secondary btn-sm">
                Prenota una Visita
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .studio-bento-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
