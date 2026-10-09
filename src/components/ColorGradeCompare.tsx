"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Sliders, Sparkles, Film, Eye } from "lucide-react";

export default function ColorGradeCompare() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  return (
    <section
      style={{
        padding: "80px 0",
        backgroundColor: "var(--bg-black)",
        position: "relative",
      }}
    >
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 36px" }}>
          <div className="section-badge">
            <Sliders size={14} />
            Post-Produzione &bull; Color Grading Cinema
          </div>
          <h2 className="section-title">
            Dalla camera grezza al <span className="highlight">look cinematografico</span>.
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Trascina il cursore per confrontare il profilo piatto LOG della camera
            con il color grading finale masterizzato in DaVinci Resolve Studio.
          </p>
        </div>

        {/* Permanent Top Comparison HUD Bar - Text Width NEVER changes */}
        <div
          style={{
            maxWidth: "1060px",
            margin: "0 auto 14px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          {/* Left Label: RAW Flat */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              borderRadius: "8px",
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
              color: "var(--text-white)",
              fontSize: "0.85rem",
              fontWeight: 700,
              whiteSpace: "nowrap",
            }}
          >
            <Eye size={16} color="var(--color-gray-subtle)" />
            <span>RAW / S-LOG3 FLAT (RIPRESA SENSORE)</span>
          </div>

          <span
            style={{
              fontSize: "0.8rem",
              color: "var(--color-gray-subtle)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontWeight: 600,
            }}
          >
            Trascina per confrontare
          </span>

          {/* Right Label: Cinema Grade */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              borderRadius: "8px",
              backgroundColor: "var(--color-orange-subtle)",
              border: "1px solid var(--color-orange-border)",
              color: "var(--color-orange)",
              fontSize: "0.85rem",
              fontWeight: 700,
              whiteSpace: "nowrap",
            }}
          >
            <Sparkles size={16} color="var(--color-orange)" />
            <span>FINAL CINEMA GRADE (DAVINCI RESOLVE / ACES)</span>
          </div>
        </div>

        {/* Split Comparison Interactive Container */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "1060px",
            aspectRatio: "21 / 10",
            minHeight: "320px",
            margin: "0 auto",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid var(--border-card)",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.8)",
            cursor: "ew-resize",
            userSelect: "none",
          }}
        >
          {/* Base Layer: Graded Master */}
          <div style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
            <Image
              src="/images/projects/samuel-costa.webp"
              alt="DaVinci Resolve Final Cinema Grade"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 1200px) 100vw, 1060px"
              draggable={false}
              priority
            />
          </div>

          {/* Top Layer: LOG / RAW Flat Image clipped with clip-path (NEVER resizes or squishes) */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
              WebkitClipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
              pointerEvents: "none",
            }}
          >
            <Image
              src="/images/projects/samuel-costa.webp"
              alt="Camera RAW Log Flat Footage"
              fill
              style={{
                objectFit: "cover",
                filter: "saturate(0.18) contrast(0.68) brightness(1.22)",
              }}
              sizes="(max-width: 1200px) 100vw, 1060px"
              draggable={false}
              priority
            />
          </div>

          {/* Central Handle Slider Separator */}
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: `${sliderPosition}%`,
              transform: "translateX(-50%)",
              width: "3px",
              backgroundColor: "#ffffff",
              boxShadow: "0 0 12px rgba(0, 0, 0, 0.9)",
              pointerEvents: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#ffffff",
                boxShadow: "0 4px 16px rgba(0,0,0,0.7)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-gray-dark)",
              }}
            >
              <Sliders size={18} />
            </div>
          </div>
        </div>

        {/* Technical specs strip below */}
        <div
          style={{
            maxWidth: "1060px",
            margin: "24px auto 0",
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            flexWrap: "wrap",
            fontSize: "0.85rem",
            color: "var(--color-gray-subtle)",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Film size={14} color="var(--color-orange)" />
            Monitor Calibrati Flanders Scientific 10-bit
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Film size={14} color="var(--color-orange)" />
            Spazio Colore DCI-P3 & Rec.709
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Film size={14} color="var(--color-orange)" />
            Pannelli DaVinci Mini Panel Dedicated
          </span>
        </div>
      </div>
    </section>
  );
}
