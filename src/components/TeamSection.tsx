"use client";

import Image from "next/image";
import {
  Users,
  Film,
  Camera,
  Sliders,
  Sparkles,
  Award,
} from "lucide-react";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Giacomo Czerny",
      role: "D.O.P. & Operatore Video",
      subrole: "Direttore della Fotografia & Video Editor",
      image: "/images/team/giacomo-czerny.jpg",
      bio: "Cura la fotografia della produzione video, gestendo tutti i dettagli di ogni singola inquadratura con precisione millimetrica. Plasma la luce e le ombre per dare ad ogni scena un'impronta cinematografica inconfondibile.",
      gear: "Sony FX9 CineAlta &bull; Atlas Orion Anamorphic",
      icon: Camera,
      credits: "Highsnob Kintsugi, Samuel Costa",
    },
    {
      name: "Giorgio Innocenti",
      role: "Lead Editor & Motion Designer",
      subrole: "Operatore Video & VFX Artist",
      image: "/images/team/giorgio-innocenti.jpg",
      bio: "Gestisce in prima persona il montaggio video, gli effetti speciali e le animazioni 2D e 3D. È il regista e montatore dello Showreel 2024 di Goreela e dei video moda internazionali.",
      gear: "DaVinci Resolve Studio &bull; After Effects &bull; Cinema 4D",
      icon: Sliders,
      credits: "Showreel Ufficiale, Milan & Paris FW SS24",
    },
    {
      name: "Rocco Malfanti",
      role: "Regista & Storyboarder",
      subrole: "Creative Direction & Operatore Video",
      image: "/images/team/rocco-malfanti.jpg",
      bio: "Ha sempre l'idea più fresca e funzionale per raccontare il prodotto o il servizio del cliente. Sul set dirige il team e gli attori per portare a casa tutto il materiale necessario senza lasciare nulla al caso.",
      gear: "Regia Cinematografica &bull; Storyboard & Script",
      icon: Film,
      credits: "Italcaffè 1969, Essentiae Lunae",
    },
    {
      name: "Luca Pompei",
      role: "Executive Producer & Colorist",
      subrole: "Organizzazione Set & Operatore Video",
      image: "/images/team/luca-pompei.webp",
      bio: "Trova location, attori e comparse. Gestisce il rapporto tra il team di editor ed il cliente, garantendo sempre consegne puntuali entro le deadline stabilite con massima trasparenza.",
      gear: "Produzione Esecutiva &bull; Location Scouting & Casting",
      icon: Award,
      credits: "9T Labs Switzerland, Spezia Calcio",
    },
    {
      name: "Edoardo Vanoli",
      role: "Ass. Operatore & Jr. Video Editor",
      subrole: "DIT & Preparazione Progetti",
      image: "/images/team/edoardo.webp",
      bio: "Aiuta l'operatore video a portare a casa le riprese più complesse, mentre in studio si occupa di avviare tutti i progetti di montaggio, ingest RAW e sincronizzazione audio multitraccia.",
      gear: "Camera Rig Setup &bull; Gimbal Ronin &bull; Ingest RAW",
      icon: Sparkles,
      credits: "Irene Effe, Spot Commerciali Social",
    },
  ];

  return (
    <section
      id="team"
      style={{
        padding: "100px 0 120px",
        backgroundColor: "var(--bg-surface)",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px" }}>
          <div className="section-badge">
            <Users size={14} />
            La Nostra Troupe &bull; Goreela Crew
          </div>
          <h2 className="section-title">
            Un professionista per ogni <span className="highlight">ruolo della produzione</span>.
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Crediamo nel talento verticale. Zero improvvisazione: ogni membro del team ha una
            specializzazione precisa per garantire la massima qualità in ogni reparto.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "28px",
          }}
          className="team-grid"
        >
          {teamMembers.map((member, idx) => {
            const Icon = member.icon;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "16px",
                  overflow: "hidden",
                  transition: "var(--transition-smooth)",
                  display: "flex",
                  flexDirection: "column",
                }}
                className="team-card"
              >
                {/* Photo Header Frame */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "260px",
                    backgroundColor: "var(--bg-black)",
                  }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{
                      objectFit: "cover",
                      objectPosition: "center 20%",
                      filter: "brightness(0.92) contrast(1.05)",
                    }}
                    draggable={false}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, transparent 40%, rgba(27,27,34,0.95) 100%)",
                    }}
                  />

                  {/* Role Icon Tag */}
                  <div
                    style={{
                      position: "absolute",
                      top: "16px",
                      right: "16px",
                      width: "38px",
                      height: "38px",
                      borderRadius: "8px",
                      backgroundColor: "rgba(12, 12, 14, 0.85)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid var(--border-subtle)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-orange)",
                    }}
                  >
                    <Icon size={18} />
                  </div>
                </div>

                {/* Card Body */}
                <div style={{ padding: "24px 28px 28px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      color: "var(--color-orange)",
                      letterSpacing: "0.06em",
                      marginBottom: "4px",
                    }}
                  >
                    {member.role}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.45rem",
                      fontWeight: 800,
                      color: "var(--text-white)",
                      marginBottom: "4px",
                    }}
                  >
                    {member.name}
                  </h3>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--color-gray-subtle)",
                      marginBottom: "14px",
                    }}
                  >
                    {member.subrole}
                  </div>

                  <p
                    style={{
                      fontSize: "0.92rem",
                      color: "#c4c4cc",
                      lineHeight: "1.65",
                      marginBottom: "20px",
                      flexGrow: 1,
                    }}
                  >
                    {member.bio}
                  </p>

                  {/* Gear & Credits Bar */}
                  <div
                    style={{
                      paddingTop: "16px",
                      borderTop: "1px solid var(--border-subtle)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                      fontSize: "0.82rem",
                    }}
                  >
                    <div style={{ color: "var(--text-white)" }}>
                      <strong style={{ color: "var(--color-gray-subtle)" }}>Specialty: </strong>
                      {member.gear}
                    </div>
                    <div style={{ color: "var(--color-orange)" }}>
                      <strong style={{ color: "var(--color-gray-subtle)" }}>Credits: </strong>
                      {member.credits}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .team-card:hover {
          transform: translateY(-4px);
          border-color: var(--color-orange-border);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.7);
        }
        @media (max-width: 768px) {
          .team-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
