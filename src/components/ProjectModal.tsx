"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  X,
  Play,
  Pause,
  Film,
  Camera,
  Award,
  Clock,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  client: string;
  year: string;
  duration: string;
  image: string;
  aspectRatio: string;
  camera: string;
  lenses: string;
  role: string;
  synopsis: string;
  deliverables: string[];
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(24);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2000,
        backgroundColor: "rgba(8, 8, 10, 0.92)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        overflowY: "auto",
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "960px",
          backgroundColor: "var(--bg-surface)",
          border: "1px solid var(--border-card)",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 30px 80px rgba(0, 0, 0, 0.9)",
          margin: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 24px",
            borderBottom: "1px solid var(--border-subtle)",
            backgroundColor: "var(--bg-black)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "var(--color-orange)",
                background: "var(--color-orange-subtle)",
                padding: "4px 10px",
                borderRadius: "4px",
              }}
            >
              {project.category}
            </span>
            <span style={{ fontSize: "0.9rem", color: "var(--color-gray-subtle)" }}>
              {project.client} &bull; {project.year}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Chiudi finestra modale del progetto"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-white)",
              background: "var(--bg-card)",
              border: "1px solid var(--border-card)",
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Video Player Showcase Screen */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 9",
            backgroundColor: "#000000",
            overflow: "hidden",
          }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{
              objectFit: "cover",
              filter: isPlaying ? "none" : "brightness(0.85)",
            }}
          />

          {/* Simulation Overlay Controls */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "20px",
              background: isPlaying
                ? "transparent"
                : "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)",
            }}
          >
            <div />

            {/* Play Button Trigger */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? "Metti in pausa video" : "Riproduci video"}
                style={{
                  width: "68px",
                  height: "68px",
                  borderRadius: "50%",
                  backgroundColor: "var(--color-orange)",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 30px var(--color-orange-glow)",
                  cursor: "pointer",
                  transition: "var(--transition-smooth)",
                }}
              >
                {isPlaying ? (
                  <Pause size={28} />
                ) : (
                  <Play size={28} fill="#ffffff" style={{ marginLeft: "3px" }} />
                )}
              </button>
            </div>

            {/* Video Timeline & Bottom Bar */}
            <div
              style={{
                background: "rgba(12, 12, 14, 0.8)",
                backdropFilter: "blur(10px)",
                padding: "10px 16px",
                borderRadius: "8px",
                border: "1px solid var(--border-subtle)",
              }}
            >
              {/* Progress Scrubber */}
              <div
                style={{
                  width: "100%",
                  height: "4px",
                  backgroundColor: "rgba(255,255,255,0.2)",
                  borderRadius: "2px",
                  marginBottom: "8px",
                  position: "relative",
                  cursor: "pointer",
                }}
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const pct = ((e.clientX - rect.left) / rect.width) * 100;
                  setProgress(Math.round(pct));
                }}
              >
                <div
                  style={{
                    width: `${progress}%`,
                    height: "100%",
                    backgroundColor: "var(--color-orange)",
                    borderRadius: "2px",
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "0.8rem",
                  color: "var(--text-soft)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>01:14 / {project.duration}</span>
                  <span style={{ color: "var(--color-gray-subtle)" }}>&bull;</span>
                  <span style={{ color: "var(--color-orange)", fontWeight: 700 }}>
                    4K DCI MASTER
                  </span>
                </div>
                <span>{project.aspectRatio}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project Detailed Sheet */}
        <div style={{ padding: "32px", maxHeight: "40vh", overflowY: "auto" }}>
          <h2
            id="modal-title"
            style={{
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              marginBottom: "8px",
            }}
          >
            {project.title}
          </h2>
          <p
            style={{
              color: "var(--color-orange)",
              fontSize: "1rem",
              fontWeight: 600,
              marginBottom: "20px",
            }}
          >
            {project.subtitle}
          </p>

          <p
            style={{
              color: "#c4c4cc",
              fontSize: "0.95rem",
              lineHeight: "1.7",
              marginBottom: "28px",
            }}
          >
            {project.synopsis}
          </p>

          {/* Technical Specs Bento Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
              padding: "20px",
              backgroundColor: "var(--bg-black)",
              borderRadius: "12px",
              border: "1px solid var(--border-subtle)",
              marginBottom: "24px",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.78rem",
                  color: "var(--color-gray-subtle)",
                  textTransform: "uppercase",
                  marginBottom: "4px",
                }}
              >
                <Camera size={14} color="var(--color-orange)" />
                Sensore & Camera
              </div>
              <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--text-white)" }}>
                {project.camera}
              </div>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.78rem",
                  color: "var(--color-gray-subtle)",
                  textTransform: "uppercase",
                  marginBottom: "4px",
                }}
              >
                <Film size={14} color="var(--color-orange)" />
                Ottiche
              </div>
              <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--text-white)" }}>
                {project.lenses}
              </div>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.78rem",
                  color: "var(--color-gray-subtle)",
                  textTransform: "uppercase",
                  marginBottom: "4px",
                }}
              >
                <Award size={14} color="var(--color-orange)" />
                Ruolo Goreela
              </div>
              <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--text-white)" }}>
                {project.role}
              </div>
            </div>
          </div>

          {/* Deliverables Checklist */}
          <div>
            <h4
              style={{
                fontSize: "0.95rem",
                color: "var(--text-white)",
                marginBottom: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Output & Master Consegnati
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {project.deliverables.map((del, i) => (
                <span
                  key={i}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "0.82rem",
                    padding: "6px 12px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "6px",
                    color: "var(--text-soft)",
                  }}
                >
                  <CheckCircle2 size={13} color="var(--color-orange)" />
                  {del}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
