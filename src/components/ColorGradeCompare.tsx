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
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
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
        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 40px" }}>
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
            minHeight: "300px",
            margin: "0 auto",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid var(--border-card)",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.8)",
            cursor: "ew-resize",
            userSelect: "none",
          }}
        >
          {/* Base: Graded Master */}
          <div style={{ position: "absolute", inset: 0 }}>
            <Image
              src="/images/projects/samuel-costa.webp"
              alt="DaVinci Resolve Final Master"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 1200px) 100vw, 1060px"
            />
            {/* Graded Label */}
            <div
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "rgba(12, 12, 14, 0.85)",
                border: "1px solid var(--color-orange-border)",
                color: "var(--color-orange)",
                fontSize: "0.8rem",
                fontWeight: 700,
                padding: "6px 14px",
                borderRadius: "6px",
                backdropFilter: "blur(10px)",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <Sparkles size={14} />
              FINAL CINEMA GRADE (ACES)
            </div>
          </div>

          {/* Overlay: LOG / RAW Flat Image */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              width: `${sliderPosition}%`,
              overflow: "hidden",
              borderRight: "2px solid #ffffff",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: containerRef.current
                  ? `${containerRef.current.clientWidth}px`
                  : "100%",
                height: "100%",
              }}
            >
              <Image
                src="/images/projects/samuel-costa.webp"
                alt="Camera RAW Log Flat Footage"
                fill
                style={{
                  objectFit: "cover",
                  filter: "saturate(0.2) contrast(0.65) brightness(1.2)",
                }}
                sizes="(max-width: 1200px) 100vw, 1060px"
              />
            </div>

            {/* RAW Log Label */}
            <div
              style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                background: "rgba(12, 12, 14, 0.85)",
                border: "1px solid var(--border-subtle)",
                color: "var(--text-white)",
                fontSize: "0.8rem",
                fontWeight: 700,
                padding: "6px 14px",
                borderRadius: "6px",
                backdropFilter: "blur(10px)",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <Eye size={14} />
              RAW / S-LOG3 FLAT
            </div>
          </div>

          {/* Central Handle Slider */}
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: `${sliderPosition}%`,
              transform: "translateX(-50%)",
              width: "4px",
              backgroundColor: "#ffffff",
              boxShadow: "0 0 16px rgba(0, 0, 0, 0.8)",
              pointerEvents: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "#ffffff",
                boxShadow: "0 4px 14px rgba(0,0,0,0.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-gray-dark)",
              }}
            >
              <Sliders size={16} />
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
