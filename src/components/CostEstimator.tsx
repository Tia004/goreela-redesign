"use client";

import { useState } from "react";
import {
  Calculator,
  Check,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
} from "lucide-react";

interface CostEstimatorProps {
  onSelectEstimate: (summary: string) => void;
}

export default function CostEstimator({ onSelectEstimate }: CostEstimatorProps) {
  const [videoType, setVideoType] = useState("spot");
  const [shootingDays, setShootingDays] = useState(1);
  const [includeDrone, setIncludeDrone] = useState(false);
  const [includeActors, setIncludeActors] = useState(false);
  const [includeSoundDesign, setIncludeSoundDesign] = useState(true);
  const [expressDelivery, setExpressDelivery] = useState(false);

  // Pricing formula
  const basePrices: Record<string, { min: number; max: number; label: string }> = {
    spot: { min: 2800, max: 4800, label: "Spot Pubblicitario & Commercial" },
    music: { min: 2200, max: 4200, label: "Videoclip Musicale" },
    corporate: { min: 2400, max: 4000, label: "Corporate Video Aziendale" },
    fashion: { min: 1800, max: 3200, label: "Fashion Film & Event Recap" },
  };

  const selectedBase = basePrices[videoType];

  let minEstimate = selectedBase.min + (shootingDays - 1) * 900;
  let maxEstimate = selectedBase.max + (shootingDays - 1) * 1500;

  if (includeDrone) {
    minEstimate += 450;
    maxEstimate += 750;
  }
  if (includeActors) {
    minEstimate += 600;
    maxEstimate += 1200;
  }
  if (includeSoundDesign) {
    minEstimate += 350;
    maxEstimate += 600;
  }
  if (expressDelivery) {
    minEstimate += 500;
    maxEstimate += 900;
  }

  const handleApplyEstimate = () => {
    const summary = `${selectedBase.label} | ${shootingDays} gg shooting | Drone: ${
      includeDrone ? "Sì" : "No"
    } | Casting: ${includeActors ? "Sì" : "No"} | Sound Design: ${
      includeSoundDesign ? "Sì" : "No"
    } | Stima: €${minEstimate.toLocaleString()} - €${maxEstimate.toLocaleString()}`;
    onSelectEstimate(summary);

    const contactSection = document.getElementById("contatti");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      style={{
        padding: "80px 0 100px",
        backgroundColor: "var(--bg-surface)",
        position: "relative",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 50px" }}>
          <div className="section-badge">
            <Calculator size={14} />
            Preventivatore Istantaneo &bull; Massima Trasparenza
          </div>
          <h2 className="section-title">
            Stima il tuo <span className="highlight">investimento video</span>.
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Seleziona la tipologia di produzione e le opzioni desiderate per ottenere
            una fascia indicativa di costo in tempo reale.
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div
          style={{
            maxWidth: "1060px",
            margin: "0 auto",
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border-card)",
            borderRadius: "20px",
            padding: "40px",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6)",
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "40px",
          }}
          className="estimator-grid"
        >
          {/* Options Column */}
          <div>
            {/* Step 1: Video Type */}
            <div style={{ marginBottom: "28px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "var(--text-white)",
                  letterSpacing: "0.05em",
                  marginBottom: "12px",
                }}
              >
                1. Tipologia di Produzione
              </label>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "10px",
                }}
                className="btn-opt-grid"
              >
                {[
                  { id: "spot", label: "Spot & Commercial" },
                  { id: "music", label: "Videoclip Musicale" },
                  { id: "corporate", label: "Corporate Aziendale" },
                  { id: "fashion", label: "Fashion / Evento" },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setVideoType(opt.id)}
                    style={{
                      padding: "12px 14px",
                      borderRadius: "8px",
                      textAlign: "left",
                      fontSize: "0.88rem",
                      fontWeight: 600,
                      backgroundColor:
                        videoType === opt.id
                          ? "var(--color-orange-subtle)"
                          : "var(--bg-surface)",
                      border:
                        videoType === opt.id
                          ? "1px solid var(--color-orange)"
                          : "1px solid var(--border-subtle)",
                      color:
                        videoType === opt.id ? "var(--color-orange)" : "var(--text-soft)",
                      cursor: "pointer",
                      transition: "var(--transition-smooth)",
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Shooting Days */}
            <div style={{ marginBottom: "28px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "var(--text-white)",
                  letterSpacing: "0.05em",
                  marginBottom: "12px",
                }}
              >
                2. Giornate di Ripresa (Shooting)
              </label>
              <div style={{ display: "flex", gap: "10px" }}>
                {[1, 2, 3, 4].map((days) => (
                  <button
                    key={days}
                    onClick={() => setShootingDays(days)}
                    style={{
                      flex: 1,
                      padding: "10px",
                      borderRadius: "8px",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      backgroundColor:
                        shootingDays === days
                          ? "var(--color-orange)"
                          : "var(--bg-surface)",
                      color: shootingDays === days ? "#ffffff" : "var(--text-soft)",
                      border:
                        shootingDays === days
                          ? "1px solid var(--color-orange)"
                          : "1px solid var(--border-subtle)",
                      cursor: "pointer",
                      transition: "var(--transition-smooth)",
                    }}
                  >
                    {days} {days === 1 ? "Giorno" : "Giorni"}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Add-on Modules */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "var(--text-white)",
                  letterSpacing: "0.05em",
                  marginBottom: "12px",
                }}
              >
                3. Moduli Aggiuntivi Speciali
              </label>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  {
                    checked: includeDrone,
                    setter: setIncludeDrone,
                    title: "Riprese Aeree con Drone Certificato ENAC",
                    price: "+ €450",
                  },
                  {
                    checked: includeActors,
                    setter: setIncludeActors,
                    title: "Casting Attori / Modelli / Comparse",
                    price: "+ €600",
                  },
                  {
                    checked: includeSoundDesign,
                    setter: setIncludeSoundDesign,
                    title: "Sound Design d'Autore & Mix Audio Stereo",
                    price: "+ €350",
                  },
                  {
                    checked: expressDelivery,
                    setter: setExpressDelivery,
                    title: "Consegna Express Master (entro 5 giorni)",
                    price: "+ €500",
                  },
                ].map((addon, i) => (
                  <label
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "12px 16px",
                      borderRadius: "8px",
                      backgroundColor: "var(--bg-surface)",
                      border: addon.checked
                        ? "1px solid var(--color-orange-border)"
                        : "1px solid var(--border-subtle)",
                      cursor: "pointer",
                      transition: "var(--transition-smooth)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <input
                        type="checkbox"
                        checked={addon.checked}
                        onChange={(e) => addon.setter(e.target.checked)}
                        style={{ accentColor: "var(--color-orange)", width: "16px", height: "16px" }}
                      />
                      <span style={{ fontSize: "0.9rem", color: "var(--text-white)" }}>
                        {addon.title}
                      </span>
                    </div>
                    <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--color-orange)" }}>
                      {addon.price}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Result Card Column */}
          <div
            style={{
              backgroundColor: "var(--bg-black)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "16px",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "var(--color-orange)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: "8px",
                }}
              >
                <Sparkles size={14} />
                Stima Indicativa Progetto
              </div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "8px" }}>
                Range di Investimento
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--color-gray-subtle)", marginBottom: "24px" }}>
                Comprende pre-produzione, riprese in camera 6K, attrezzature cinema e post-produzione con 2 round di modifica inclusi.
              </p>

              {/* Price Range Display */}
              <div
                style={{
                  padding: "20px",
                  backgroundColor: "var(--bg-surface)",
                  borderRadius: "12px",
                  border: "1px solid var(--border-card)",
                  textAlign: "center",
                  marginBottom: "24px",
                }}
              >
                <div style={{ fontSize: "0.8rem", color: "var(--color-gray-subtle)", marginBottom: "4px" }}>
                  DA / A (IVA esclusa)
                </div>
                <div
                  style={{
                    fontSize: "clamp(1.75rem, 2.8vw, 2.25rem)",
                    fontWeight: 800,
                    fontFamily: "var(--font-heading)",
                    color: "var(--color-orange)",
                  }}
                >
                  €{minEstimate.toLocaleString()} - €{maxEstimate.toLocaleString()}
                </div>
              </div>

              {/* Inclusions summary */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.82rem", color: "#d0d0d8" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <ShieldCheck size={14} color="var(--color-orange)" />
                  Riprese con corpi macchina cinema Full-Frame
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <ShieldCheck size={14} color="var(--color-orange)" />
                  Uso dello studio 170mq incluso se necessario
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <ShieldCheck size={14} color="var(--color-orange)" />
                  Master in 4K DCI + formati verticali social
                </div>
              </div>
            </div>

            <div style={{ marginTop: "28px" }}>
              <button
                onClick={handleApplyEstimate}
                className="btn btn-primary"
                style={{ width: "100%", padding: "14px 20px" }}
              >
                Richiedi Questa Configurazione
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .estimator-grid {
            grid-template-columns: 1fr !important;
          }
          .btn-opt-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
