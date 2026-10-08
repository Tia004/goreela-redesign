"use client";

import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ColorGradeCompare from "@/components/ColorGradeCompare";
import WorksSlider from "@/components/WorksSlider";
import ProductionProcess from "@/components/ProductionProcess";
import StudioSection from "@/components/StudioSection";
import TeamSection from "@/components/TeamSection";
import ClientMarquee from "@/components/ClientMarquee";
import CostEstimator from "@/components/CostEstimator";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import ProjectModal, { Project } from "@/components/ProjectModal";

// Default Showreel case study object
const showreelProject: Project = {
  id: "showreel-2026",
  title: "GOREELA SHOWREEL 2026",
  subtitle: "The Wildest Storytellers Master Reel",
  category: "Showreel Ufficiale",
  client: "Goreela Videomaking Studio",
  year: "2026",
  duration: "02:18",
  image: "/images/projects/highsnob-kintsugi.webp",
  aspectRatio: "2.39:1 CinemaScope",
  camera: "RED Gemini 5K & Sony FX9 CineAlta",
  lenses: "Atlas Orion Anamorphic & Zeiss Supreme Primes",
  role: "Direzione Creativa, Regia, Montaggio, Color Grading & Sound Design",
  synopsis:
    "Una sintesi ad alto impatto dei migliori progetti realizzati in tutta Italia: videoclip musicali di artisti di primo piano, spot commerciali per marchi d'eccellenza, riprese backstage alle Fashion Week di Milano e Parigi, e branded content industriale.",
  deliverables: [
    "Master 4K DCI Apple ProRes 4444 XQ",
    "Audio Mix Cinema 5.1 Surround & Stereo Master",
    "Versione Verticale 9:16 per Distribuzione Social",
    "Color Grade ACES DaVinci Resolve Studio",
  ],
};

export default function Home() {
  const [isMuted, setIsMuted] = useState(true);
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [prefilledMessage, setPrefilledMessage] = useState("");
  const audioContextRef = useRef<AudioContext | null>(null);

  // Subtle web audio ambient sound effect
  const handleToggleSound = () => {
    if (isMuted) {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioCtx) {
          const ctx = new AudioCtx();
          audioContextRef.current = ctx;
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(110, ctx.currentTime); // Low A ambient drone
          gain.gain.setValueAtTime(0.015, ctx.currentTime);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
        }
      } catch {
        // Fallback gracefully
      }
      setIsMuted(false);
    } else {
      if (audioContextRef.current) {
        audioContextRef.current.close().catch(() => {});
        audioContextRef.current = null;
      }
      setIsMuted(true);
    }
  };

  const handleEstimateSelected = (summary: string) => {
    setPrefilledMessage(`Richiesta basata su configuratore:\n${summary}`);
  };

  return (
    <>
      <Navbar isMuted={isMuted} onToggleSound={handleToggleSound} />

      <main id="main-content">
        {/* 1. Cinematic Hero Section */}
        <Hero onOpenReel={() => setShowreelOpen(true)} />

        {/* 2. Before / After Color Grading Interactive Comparison */}
        <ColorGradeCompare />

        {/* 3. Sezione Lavori con Slider Avanzato */}
        <WorksSlider />

        {/* 4. Il Processo di Produzione Video (estratto da goreela.it) */}
        <ProductionProcess />

        {/* 5. Sezione Studio 170mq */}
        <StudioSection />

        {/* 6. Sezione Team Troupe Cinematografica */}
        <TeamSection />

        {/* 7. Slider dei Clienti con Loghi e Recensioni */}
        <ClientMarquee />

        {/* 8. Preventivatore Costi Interattivo */}
        <CostEstimator onSelectEstimate={handleEstimateSelected} />

        {/* 9. Sezione Domande Frequenti (FAQ) */}
        <FaqSection />

        {/* 10. Sezione Contatti con Form Validato */}
        <ContactSection initialMessage={prefilledMessage} />
      </main>

      {/* 11. Footer con Social e Dati Aziendali */}
      <Footer />

      {/* 12. Gestione Consenso Cookie GDPR */}
      <CookieBanner />

      {/* Showreel Lightbox Modal */}
      {showreelOpen && (
        <ProjectModal
          project={showreelProject}
          onClose={() => setShowreelOpen(false)}
        />
      )}
    </>
  );
}
