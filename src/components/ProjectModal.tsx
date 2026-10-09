"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  X,
  Play,
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
  youtubeId: string;
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
        backgroundColor: "rgba(8, 8, 10, 0.94)",
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
          maxWidth: "1020px",
          backgroundColor: "var(--bg-surface)",
          border: "1px solid var(--border-card)",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 30px 80px rgba(0, 0, 0, 0.95)",
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
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
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
              {project.client} &bull; {project.year} &bull; {project.duration}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Chiudi finestra modale del progetto"
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-white)",
              background: "var(--bg-card)",
              border: "1px solid var(--border-card)",
              cursor: "pointer",
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Real YouTube Video Player Screen */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 9",
            backgroundColor: "#000000",
            overflow: "hidden",
          }}
        >
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              display: "block",
            }}
          />
        </div>

        {/* Project Detailed Sheet */}
        <div style={{ padding: "32px", maxHeight: "42vh", overflowY: "auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px", marginBottom: "8px" }}>
            <div>
              <h2
                id="modal-title"
                style={{
                  fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)",
                  marginBottom: "4px",
                }}
              >
                {project.title}
              </h2>
              <p
                style={{
                  color: "var(--color-orange)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  marginBottom: "16px",
                }}
              >
                {project.subtitle}
              </p>
            </div>

            <a
              href={`https://www.youtube.com/watch?v=${project.youtubeId}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary btn-sm"
              style={{ display: "inline-flex", gap: "6px" }}
            >
              Apri su YouTube
              <ExternalLink size={14} />
            </a>
          </div>

          <p
            style={{
              color: "#c4c4cc",
              fontSize: "0.95rem",
              lineHeight: "1.7",
              marginBottom: "24px",
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
                fontSize: "0.9rem",
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
