"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Eye,
  Sliders,
  Sparkles,
  Camera,
  Film,
} from "lucide-react";
import ProjectModal, { Project } from "./ProjectModal";

const projectsData: Project[] = [
  {
    id: "highsnob-kintsugi",
    title: "HIGHSNOB – Kintsugi",
    subtitle: "Videoclip Musicale Ufficiale",
    category: "Videoclip Musicali",
    client: "Warner Music / Highsnob",
    year: "2024",
    duration: "03:22",
    image: "/images/projects/highsnob-kintsugi.webp",
    aspectRatio: "2.39:1 CinemaScope",
    camera: "Sony FX9 CineAlta Full-Frame 6K",
    lenses: "Zeiss Supreme Prime 25/50/85mm",
    role: "Regia, Direzione della Fotografia, Montaggio, Color Grading",
    synopsis:
      "Una narrazione visiva cruda ed evocativa ispirata all'antica arte giapponese del Kintsugi, che ripara le fratture con l'oro. Atmosfere notturne, contrasti netti ed un uso espressivo del colore per accompagnare l'intensa poetica del brano.",
    deliverables: [
      "Master 4K DCI YouTube/Vevo",
      "Teaser 9:16 Instagram Reels / TikTok",
      "Foto di Scena High-Res per Copertina e Promo",
      "Cutdown 30s per Campagna Social Media",
    ],
  },
  {
    id: "samuel-costa",
    title: "Samuel Costa – Mi ha punto un serpente",
    subtitle: "Videoclip Musicale Sperimentale",
    category: "Videoclip Musicali",
    client: "Samuel Costa",
    year: "2023",
    duration: "02:54",
    image: "/images/projects/samuel-costa.webp",
    aspectRatio: "16:9 DCI Cinema",
    camera: "RED Gemini 5K S35 Dual ISO",
    lenses: "Atlas Orion Anamorphic 2x Lenses",
    role: "Ideazione, Regia, Set Design, Post-Produzione Completa",
    synopsis:
      "Set dinamico con cambi di luce continui e scenografie realizzate su misura all'interno del nostro studio di posa da 170mq. Un crescendo visivo ipnotico che mescola performance live e surrealismo visivo.",
    deliverables: [
      "Master Cinema 4K Apple ProRes 4444",
      "Vertical Master 9:16 per Social Feed",
      "Sound Design & Stems Mix 24-bit 48kHz",
      "Color Grade ACES DaVinci Resolve",
    ],
  },
  {
    id: "without-production-fw",
    title: "Without Production – Milan & Paris FW",
    subtitle: "Fashion Editorial & Runway Film",
    category: "Fashion & Eventi",
    client: "Without Production",
    year: "2024",
    duration: "01:45",
    image: "/images/projects/fashion-week.webp",
    aspectRatio: "9:16 Vertical & 16:9 Cinema",
    camera: "Sony FX6 & Gimbal Ronin RS3 Pro",
    lenses: "Sony G-Master 24-70mm f/2.8 II & 50mm f/1.2",
    role: "Shooting Reportage, Backstage, Montaggio Express Same-Day",
    synopsis:
      "Copertura frenetica ed esclusiva durante le settimane della moda di Milano e Parigi per il collettivo creativo Without. Montaggio ritmato e color grading haute-couture con consegna di reel in tempo reale a poche ore dalle sfilate.",
    deliverables: [
      "12x Reel Verticali 4K Mobile-First",
      "Full Recap Film Orizzontale per YouTube",
      "Selezione Still Stampa Editoriale",
      "Archiviazione Cloud RAW Footage",
    ],
  },
  {
    id: "italcaffe-1969",
    title: "Italcaffè 1969 – Heritage & Aroma",
    subtitle: "Commercial & Spot Pubblicitario Brand",
    category: "Spot Pubblicitari",
    client: "Italcaffè S.p.A.",
    year: "2023",
    duration: "01:10",
    image: "/images/projects/italcaffe.webp",
    aspectRatio: "16:9 4K UHD",
    camera: "Sony FX9 + Macro Probe Laowa 24mm",
    lenses: "Laowa 24mm f/14 2X Macro Probe + Sigma Cine",
    role: "Concept, Food Styling, Riprese Macro ad Alta Velocità, Color",
    synopsis:
      "Lo storytelling di oltre cinquant'anni di passione per il caffè tostato a legna. Dettagli macro ultra-ravvicinati sui chicchi di caffè, vapore in slow motion e la perfetta cremosità della tazza d'espresso.",
    deliverables: [
      "Spot TV / Cinema 60s & 30s",
      "Formati Social 1:1 e 9:16",
      "Audio Voiceover Multilingua (ITA/ENG)",
      "Sound Design Frequenze Tazze e Chicchi",
    ],
  },
  {
    id: "essentiae-lunae",
    title: "Essentiae Lunae – Liquoreria Ligure",
    subtitle: "Docu-Spot d'Autore & Brand Story",
    category: "Spot Pubblicitari",
    client: "Cantine Lunae / Essentiae",
    year: "2024",
    duration: "02:15",
    image: "/images/projects/essentiae-lunae.webp",
    aspectRatio: "2.39:1 CinemaScope",
    camera: "ARRI Alexa Mini / Cooke Speed Panchro",
    lenses: "Cooke Speed Panchro Vintage 1950s Glass",
    role: "Sceneggiatura, Riprese Botaniche, Interviste, Montaggio d'Autore",
    synopsis:
      "Un viaggio poetico tra le colline di Ortonovo e i profumi delle erbe liguri raccolte a mano per la produzione di liquori artigianali. Luce naturale all'alba e toni caldi d'altri tempi per esaltare l'eccellenza botanica.",
    deliverables: [
      "Brand Documentary 2m15s",
      "Short Cut 45s per Inserzioni Meta e YouTube",
      "Color grading film print emulation",
      "Master DCI compliant per proiezioni fieristiche",
    ],
  },
  {
    id: "irene-effe-stanze",
    title: "Irene Effe – Stanze",
    subtitle: "Videoclip Musicale Coreografico",
    category: "Videoclip Musicali",
    client: "Irene Effe (Irene Fornaciari)",
    year: "2024",
    duration: "03:40",
    image: "/images/projects/irene-effe.webp",
    aspectRatio: "2.0:1 Univisium",
    camera: "Sony FX9 Cinema Full-Frame",
    lenses: "Carl Zeiss Master Prime Lenses",
    role: "Regia, Coreografia Luci Teatrali, Post-Produzione",
    synopsis:
      "Una performance intima costruita attorno alla voce e al movimento, ambientata in spazi minimalisti dove i fasci di luce disegnano stanze immaginarie della mente. Premiato dalla critica per la ricerca fotografica.",
    deliverables: [
      "Master Ufficiale Vevo / YouTube 4K",
      "Stills Fotografici per Rassegna Stampa Nazionale",
      "Clip Verticali 9:16 con Testo Sincronizzato",
      "Mix Audio Dolby Atmos e Stereo PCM",
    ],
  },
];

const categories = [
  "Tutti",
  "Videoclip Musicali",
  "Spot Pubblicitari",
  "Fashion & Eventi",
];

export default function WorksSlider() {
  const [activeCategory, setActiveCategory] = useState("Tutti");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isAutoplay, setIsAutoplay] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const filteredProjects =
    activeCategory === "Tutti"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  // Autoplay handler
  useEffect(() => {
    if (isAutoplay && filteredProjects.length > 1) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoplay, filteredProjects.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const currentProject = filteredProjects[currentIndex] || filteredProjects[0];

  return (
    <section
      id="lavori"
      style={{
        padding: "100px 0 120px",
        backgroundColor: "var(--bg-black)",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "24px",
            marginBottom: "36px",
          }}
        >
          <div>
            <div className="section-badge">
              <Film size={14} />
              Portfolio Selezionato &bull; Showroom Lavori
            </div>
            <h2 className="section-title" style={{ marginBottom: "12px" }}>
              I nostri progetti <span className="highlight">più recenti</span>.
            </h2>
            <p className="section-subtitle" style={{ marginBottom: 0 }}>
              Ogni produzione è un viaggio su misura. Esplora le opere che hanno
              definito il nostro standard visivo.
            </p>
          </div>

          {/* Slider Arrows & Index Display */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                fontFamily: "var(--font-heading)",
                color: "var(--color-orange)",
              }}
            >
              {String(currentIndex + 1).padStart(2, "0")}
              <span style={{ color: "var(--color-gray-subtle)", fontWeight: 400 }}>
                {" "}
                / {String(filteredProjects.length).padStart(2, "0")}
              </span>
            </span>

            <div style={{ display: "flex", gap: "8px" }}>
              <button
                onClick={handlePrev}
                aria-label="Progetto precedente"
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "8px",
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-card)",
                  color: "var(--text-white)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "var(--transition-smooth)",
                }}
                className="arrow-btn"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={handleNext}
                aria-label="Progetto successivo"
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "8px",
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-card)",
                  color: "var(--text-white)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "var(--transition-smooth)",
                }}
                className="arrow-btn"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </div>

        {/* Category Filters Pills */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "36px",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "8px 18px",
                borderRadius: "30px",
                fontSize: "0.88rem",
                fontWeight: 600,
                backgroundColor:
                  activeCategory === cat
                    ? "var(--color-orange)"
                    : "var(--bg-card)",
                color:
                  activeCategory === cat ? "#ffffff" : "var(--color-gray-subtle)",
                border:
                  activeCategory === cat
                    ? "1px solid var(--color-orange)"
                    : "1px solid var(--border-subtle)",
                transition: "var(--transition-smooth)",
                cursor: "pointer",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Advanced Slider Hero Showcase Card */}
        {currentProject && (
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "21 / 10",
              minHeight: "360px",
              backgroundColor: "var(--bg-surface)",
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid var(--border-card)",
              boxShadow: "0 24px 60px rgba(0, 0, 0, 0.8)",
              cursor: "pointer",
            }}
            onClick={() => setSelectedProject(currentProject)}
            className="slider-card-container"
          >
            <Image
              src={currentProject.image}
              alt={currentProject.title}
              fill
              style={{
                objectFit: "cover",
                transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              className="slider-main-img"
              priority
            />

            {/* Dark Cinematic Gradient Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(12,12,14,0.1) 0%, rgba(12,12,14,0.4) 50%, rgba(12,12,14,0.92) 100%)",
              }}
            />

            {/* Center Hover Action Pill */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "rgba(255, 85, 5, 0.9)",
                backdropFilter: "blur(10px)",
                color: "#ffffff",
                padding: "14px 28px",
                borderRadius: "30px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontWeight: 700,
                fontSize: "0.95rem",
                boxShadow: "0 10px 30px var(--color-orange-glow)",
                opacity: 0.95,
                transition: "var(--transition-smooth)",
              }}
              className="center-play-pill"
            >
              <Play size={18} fill="#ffffff" />
              Apri Scheda & Video Progetto
            </div>

            {/* Bottom Meta Information Details */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "36px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                flexWrap: "wrap",
                gap: "20px",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "8px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      padding: "4px 10px",
                      background: "var(--color-orange)",
                      color: "#ffffff",
                      borderRadius: "4px",
                    }}
                  >
                    {currentProject.category}
                  </span>
                  <span
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--color-gray-subtle)",
                    }}
                  >
                    {currentProject.client} &bull; {currentProject.year}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "clamp(1.6rem, 3.2vw, 2.5rem)",
                    fontWeight: 800,
                    color: "var(--text-white)",
                    marginBottom: "6px",
                  }}
                >
                  {currentProject.title}
                </h3>
                <p style={{ color: "#d0d0d8", fontSize: "1rem" }}>
                  {currentProject.subtitle}
                </p>
              </div>

              {/* Technical Badges in Card */}
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    padding: "6px 14px",
                    borderRadius: "6px",
                    background: "rgba(12, 12, 14, 0.8)",
                    border: "1px solid var(--border-subtle)",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <Camera size={14} color="var(--color-orange)" />
                  {currentProject.camera}
                </div>
                <div
                  style={{
                    padding: "6px 14px",
                    borderRadius: "6px",
                    background: "rgba(12, 12, 14, 0.8)",
                    border: "1px solid var(--border-subtle)",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                  }}
                >
                  {currentProject.aspectRatio}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Slider Bottom Progress Track & Thumbnails Grid */}
        <div style={{ marginTop: "24px" }}>
          {/* Progress Bar */}
          <div
            style={{
              width: "100%",
              height: "4px",
              backgroundColor: "rgba(255,255,255,0.08)",
              borderRadius: "2px",
              marginBottom: "24px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${((currentIndex + 1) / filteredProjects.length) * 100}%`,
                height: "100%",
                backgroundColor: "var(--color-orange)",
                transition: "width 0.4s ease",
              }}
            />
          </div>

          {/* Mini Thumbnails Selector Strip */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${filteredProjects.length}, 1fr)`,
              gap: "12px",
            }}
          >
            {filteredProjects.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setCurrentIndex(idx)}
                style={{
                  position: "relative",
                  aspectRatio: "16 / 9",
                  borderRadius: "8px",
                  overflow: "hidden",
                  border:
                    currentIndex === idx
                      ? "2px solid var(--color-orange)"
                      : "1px solid var(--border-subtle)",
                  opacity: currentIndex === idx ? 1 : 0.45,
                  cursor: "pointer",
                  transition: "var(--transition-smooth)",
                }}
                className="thumb-btn"
                aria-label={`Vai alla slide ${p.title}`}
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <style jsx>{`
        .arrow-btn:hover {
          background-color: var(--color-orange) !important;
          border-color: var(--color-orange) !important;
        }
        .slider-card-container:hover .slider-main-img {
          transform: scale(1.03);
        }
        .slider-card-container:hover .center-play-pill {
          transform: translate(-50%, -50%) scale(1.08);
          background-color: #ff6e26 !important;
        }
        .thumb-btn:hover {
          opacity: 0.9 !important;
        }
      `}</style>
    </section>
  );
}
