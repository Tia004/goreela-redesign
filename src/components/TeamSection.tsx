"use client";

import Image from "next/image";
import {
  Users,
  Film,
  Camera,
  Sliders,
  Headphones,
  Sparkles,
  Layers,
  Award,
} from "lucide-react";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Edoardo",
      role: "Founder & Regista",
      subrole: "Creative Direction & Storytelling",
      image: "/images/team/edoardo.webp",
      bio: "Fondatore di Goreela Videomaking Studio. Guida la visione creativa e registica di ogni progetto, trasformando brief aziendali ed emozioni musicali in narrazioni visive audaci e memorabili.",
      gear: "Director's Viewfinder &bull; RED & Sony CineAlta",
      icon: Film,
      credits: "Highsnob, Without FW, Spezia Calcio",
    },
    {
      name: "Marco",
      role: "Direttore della Fotografia (DoP)",
      subrole: "Lighting Design & Camera Operator",
      image: "/images/projects/highsnob-kintsugi.webp",
      bio: "Maestro della luce e della composizione scenica. Plasma l'atmosfera visiva sul set combinando ottiche vintage anamorfiche e moderni corpi macchina ad altissima gamma dinamica.",
      gear: "Atlas Orion Anamorphic &bull; Aputure 600d Pro",
      icon: Camera,
      credits: "Samuel Costa, Italcaffè 1969, Cantine Lunae",
    },
    {
      name: "Andrea",
      role: "Lead Video Editor & Colorist",
      subrole: "Post-Production Supervisor",
      image: "/images/studio/editing-rooftop.webp",
      bio: "Responsabile del ritmo narrativo e dell'armonia cromatica. Certificato DaVinci Resolve Studio, conferisce a ogni inquadratura una gradazione cinema coerente con la visione registica.",
      gear: "DaVinci Mini Panel &bull; Flanders 10-bit",
      icon: Sliders,
      credits: "Essentiae Lunae, Irene Effe, 9T Labs",
    },
    {
      name: "Chiara",
      role: "Executive Producer",
      subrole: "Project Manager & Line Producer",
      image: "/images/studio/meetup-room.webp",
      bio: "La mente organizzativa dietro ogni set. Gestisce casting, location scouting, permessi comunali, cronoprogrammi di shooting e garantisce il rispetto millimetrico dei tempi di consegna.",
      gear: "Produzione Esecutiva &bull; Budgeting & Casting",
      icon: Award,
      credits: "Milan Fashion Week, Corporate 9T Labs",
    },
    {
      name: "Luca",
      role: "Sound Designer & Fonico",
      subrole: "Audio Recordist & Mastering 5.1",
      image: "/images/projects/italcaffe.webp",
      bio: "Il suono è il 50% dell'esperienza cinematografica. Cattura dialoghi cristallini sul set in 32-bit float e costruisce ambienti sonori immersivi capaci di amplificare ogni emozione visiva.",
      gear: "Sound Devices 833 &bull; Schoeps CMC6 &bull; Pro Tools",
      icon: Headphones,
      credits: "Commercial TV, Soundtracks Spot, Podcast",
    },
    {
      name: "Matteo",
      role: "Motion Designer & 3D Artist",
      subrole: "VFX & Compositing Lead",
      image: "/images/projects/fashion-week.webp",
      bio: "Dà vita a loghi animati, visualizzazioni tridimensionali fotorealistiche per spot industriali ed effetti visivi integrati in post-produzione per brand contemporanei.",
      gear: "Cinema 4D &bull; After Effects &bull; Unreal Engine",
      icon: Layers,
      credits: "9T Labs 3D Composites, Title Sequences",
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
            La Nostra Troupe &bull; Competenze Dedicate
          </div>
          <h2 className="section-title">
            Un professionista per ogni <span className="highlight">ruolo della produzione</span>.
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Crediamo nel talento verticale. Dalla regia al sound design, un team coeso
            di specialisti al servizio della tua visione.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
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
                    height: "220px",
                    backgroundColor: "var(--bg-black)",
                  }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{
                      objectFit: "cover",
                      objectPosition: "center 25%",
                      filter: "brightness(0.9) contrast(1.05)",
                    }}
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
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      backgroundColor: "rgba(12, 12, 14, 0.8)",
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
                      lineHeight: "1.6",
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
                      fontSize: "0.8rem",
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
