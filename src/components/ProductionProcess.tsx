"use client";

import { useState } from "react";
import {
  Lightbulb,
  Video,
  Sliders,
  CheckCircle2,
  Clock,
  Layers,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function ProductionProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      badge: "La prima fase della realizzazione video",
      title: "Pre-produzione & Concept",
      subtitle: "Briefing, Storyboard e Moodboard visiva",
      description:
        "In questo primo step per noi è fondamentale conoscere a fondo la tua storia, quella della tua azienda o del tuo prodotto. Conoscerne ogni singolo dettaglio ci permette di individuare i punti di forza da esaltare nella campagna di marketing. Creiamo l'affinità necessaria a rendere vincente la collaborazione e ti guidiamo con uno storyboard dettagliato e una moodboard emozionale che anticipa con precisione il risultato finale.",
      icon: Lightbulb,
      duration: "1 - 2 Settimane",
      deliverables: [
        "Incontro conoscitivo e definizione obiettivi di comunicazione",
        "Sceneggiatura e script narrativo",
        "Storyboard inquadratura per inquadratura",
        "Moodboard fotografica e palette cromatica",
        "Location scouting e casting comparse / attori",
        "Pianificazione piano di lavorazione e permessi riprese",
      ],
      gearHighlights: "Final Draft &bull; Milanote &bull; Shot Designer 3D",
    },
    {
      number: "02",
      badge: "La fase principale della produzione video",
      title: "Produzione & Shooting sul Set",
      subtitle: "Riprese cinematografiche in studio o in location",
      description:
        "Ci troveremo sul set per realizzare tutte le riprese necessarie a raccontare la tua storia. Dal nostro studio di posa da 170mq a Sarzana con limbo ciclorama fino a location d'eccezione in tutta Italia. Regia, direzione della fotografia (DoP), set di luci cinema ad alto CRI, riprese aeree con droni brevettati ENAC e presa diretta audio multitraccia per una resa da grande schermo.",
      icon: Video,
      duration: "1 - 5 Giorni di Shooting",
      deliverables: [
        "Regia cinematografica e conduzione del set",
        "Direzione della fotografia (DoP) e lighting design",
        "Riprese 4K/6K Cinema RAW con sensori Full Frame",
        "Riprese aeree certificate con drone 4K",
        "Registrazione audio multitraccia 32-bit float",
        "Backup in tempo reale e ridondanza dei girati su doppio SSD",
      ],
      gearHighlights: "RED Gemini &bull; Sony FX9/FX6 &bull; Aputure Lights &bull; DJI Ronin",
    },
    {
      number: "03",
      badge: "La fase finale della realizzazione video",
      title: "Post-produzione & Master",
      subtitle: "Montaggio, Color Grading, Sound Design e Consegna",
      description:
        "Tutte le riprese vengono affidate al nostro team di video editor all'Editing Rooftop. Creiamo in tempi rapidi una prima bozza del montaggio (rough cut) da condividere sulla nostra piattaforma di revisione. Integrando i tuoi feedback, rifiniamo il ritmo, perfezioniamo il color grading in DaVinci Resolve, curiamo sound design, mix audio e inseriamo grafiche animate VFX fino alla consegna del master.",
      icon: Sliders,
      duration: "1 - 3 Settimane",
      deliverables: [
        "Montaggio narrativo e rough cut condiviso per feedback",
        "Color correction e color grading cinematografico (ACES / DaVinci)",
        "Sound design, pulizia vocale e mixaggio audio stereo / 5.1",
        "Motion graphics, animazioni logo e inserti testuali",
        "Fino a 2 round di revisione inclusi nel progetto",
        "Esportazione master ottimizzati per TV, Cinema, YouTube e Social 9:16",
      ],
      gearHighlights: "DaVinci Resolve Studio &bull; Frame.io &bull; Pro Tools Suite",
    },
  ];

  const current = steps[activeStep];
  const StepIcon = current.icon;

  return (
    <section
      id="processo"
      style={{
        padding: "100px 0 120px",
        backgroundColor: "var(--bg-surface)",
        position: "relative",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px" }}>
          <div className="section-badge">
            <Layers size={14} />
            Metodo Goreela &bull; Workflow Certificato
          </div>
          <h2 className="section-title">
            Come gestiamo una <span className="highlight">produzione video</span>.
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Un processo collaudato in centinaia di progetti. Dalla prima idea alla
            consegna finale, ogni fase è trasparente, pianificata e curata nei minimi dettagli.
          </p>
        </div>

        {/* Phase Navigation Tabs */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
            marginBottom: "40px",
          }}
          className="process-tabs-grid"
        >
          {steps.map((st, idx) => {
            const Icon = st.icon;
            const isSelected = activeStep === idx;
            return (
              <button
                key={st.number}
                onClick={() => setActiveStep(idx)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "20px 24px",
                  backgroundColor: isSelected ? "var(--bg-card)" : "var(--bg-black)",
                  border: isSelected
                    ? "2px solid var(--color-orange)"
                    : "1px solid var(--border-subtle)",
                  borderRadius: "14px",
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "var(--transition-smooth)",
                  boxShadow: isSelected ? "0 10px 30px var(--color-orange-glow)" : "none",
                }}
                className="step-nav-btn"
              >
                <div
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: 800,
                    fontFamily: "var(--font-heading)",
                    color: isSelected ? "var(--color-orange)" : "var(--color-gray-mid)",
                  }}
                >
                  {st.number}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      color: isSelected ? "var(--color-orange)" : "var(--color-gray-subtle)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Fase {idx + 1}
                  </div>
                  <div
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: isSelected ? "var(--text-white)" : "var(--text-soft)",
                    }}
                  >
                    {st.title.split("&")[0]}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Deep-Dive Card */}
        <div
          style={{
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border-card)",
            borderRadius: "20px",
            padding: "44px",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: "48px",
            }}
            className="process-detail-grid"
          >
            {/* Left Column: Description & Metadata */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "var(--color-orange)",
                  marginBottom: "12px",
                }}
              >
                <StepIcon size={16} />
                {current.badge}
              </div>

              <h3
                style={{
                  fontSize: "clamp(1.75rem, 2.5vw, 2.25rem)",
                  fontWeight: 800,
                  color: "var(--text-white)",
                  marginBottom: "8px",
                }}
              >
                {current.number}. {current.title}
              </h3>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "var(--color-orange)",
                  fontWeight: 600,
                  marginBottom: "20px",
                }}
              >
                {current.subtitle}
              </p>

              <p
                style={{
                  fontSize: "1rem",
                  color: "#c4c4cc",
                  lineHeight: "1.75",
                  marginBottom: "32px",
                }}
              >
                {current.description}
              </p>

              {/* Stats badges */}
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  flexWrap: "wrap",
                  padding: "16px 20px",
                  backgroundColor: "var(--bg-black)",
                  borderRadius: "10px",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Clock size={16} color="var(--color-orange)" />
                  <span style={{ fontSize: "0.88rem", color: "var(--text-white)" }}>
                    <strong>Tempistiche stimate:</strong> {current.duration}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Sparkles size={16} color="var(--color-orange)" />
                  <span style={{ fontSize: "0.88rem", color: "var(--text-white)" }}>
                    <strong>Software & Rig:</strong> {current.gearHighlights}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Deliverables Checklist */}
            <div
              style={{
                backgroundColor: "var(--bg-surface)",
                padding: "32px",
                borderRadius: "14px",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <h4
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "var(--text-white)",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <CheckCircle2 size={18} color="var(--color-orange)" />
                Cosa include questa fase:
              </h4>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {current.deliverables.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      fontSize: "0.92rem",
                      color: "#d0d0d8",
                      lineHeight: "1.5",
                    }}
                  >
                    <div
                      style={{
                        marginTop: "3px",
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        backgroundColor: "var(--color-orange-subtle)",
                        border: "1px solid var(--color-orange-border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <CheckCircle2 size={12} color="var(--color-orange)" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Next phase preview button */}
              <div style={{ marginTop: "28px", paddingTop: "20px", borderTop: "1px solid var(--border-subtle)" }}>
                <button
                  onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                  className="btn btn-secondary btn-sm"
                  style={{ width: "100%", justifyContent: "space-between" }}
                >
                  <span>
                    Passa alla Fase Successiva ({steps[(activeStep + 1) % steps.length].title.split("&")[0]})
                  </span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .process-tabs-grid {
            grid-template-columns: 1fr !important;
          }
          .process-detail-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
