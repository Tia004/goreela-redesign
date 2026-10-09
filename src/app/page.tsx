"use client";

import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AnimatedBackground from "@/components/AnimatedBackground";
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

// Official Real Showreel from goreela.it (YouTube ID: Y4l3XmXVVIA)
const showreelProject: Project = {
  id: "showreel-official",
  title: "GOREELA SHOWREEL 2024",
  subtitle: "In 16:9, perché abbiamo fatto troppe cose in verticale!",
  category: "Showreel Ufficiale",
  client: "Goreela Videomaking Studio",
  year: "2024",
  duration: "02:15",
  image: "/images/projects/highsnob-kintsugi.webp",
  youtubeId: "Y4l3XmXVVIA",
  aspectRatio: "16:9 DCI Cinema",
  camera: "Sony FX9 CineAlta & RED Gemini 5K",
  lenses: "Atlas Orion Anamorphic & Zeiss Supreme Primes",
  role: "Regia, Direzione della Fotografia, Montaggio, Color Grading & Sound",
  synopsis:
    "Il metodo più efficace per raccontarsi è una produzione video. Con Goreela Videomaking Studio puoi concentrarti sul tuo progetto, a farti conoscere ci pensiamo noi. Il nostro showreel raccoglie il meglio dei videoclip musicali, spot TV e campagne internazionali girate in tutta Italia.",
  deliverables: [
    "Master 4K DCI Apple ProRes 4444 XQ",
    "Audio Mix Cinema Stereo & 5.1 Surround",
    "Formato Widescreen 16:9 & Cutdown 9:16 Social",
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
        const AudioCtx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext })
            .webkitAudioContext;
        if (AudioCtx) {
          const ctx = new AudioCtx();
          audioContextRef.current = ctx;
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(110, ctx.currentTime);
          gain.gain.setValueAtTime(0.015, ctx.currentTime);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
        }
      } catch {
        // Fallback
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
      {/* React Bits Style Interactive Canvas Background */}
      <AnimatedBackground />

      {/* Sticky Glassmorphic Navbar */}
      <Navbar isMuted={isMuted} onToggleSound={handleToggleSound} />

      <main id="main-content" style={{ position: "relative", zIndex: 1 }}>
        {/* 1. Cinematic Hero Section */}
        <Hero onOpenReel={() => setShowreelOpen(true)} />

        {/* 2. Before / After Color Grading Interactive Comparison */}
        <ColorGradeCompare />

        {/* 3. Sezione Lavori con Slider Avanzato */}
        <WorksSlider />

        {/* 4. Il Processo di Produzione Video (estratto da goreela.it) */}
        <ProductionProcess />

        {/* 5. Sezione Studio 170mq (Solo foto delle sale dello studio) */}
        <StudioSection />

        {/* 6. Sezione Team Troupe (I 5 veri professionisti di Goreela) */}
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

      {/* Real Showreel 2024 Lightbox Modal */}
      {showreelOpen && (
        <ProjectModal
          project={showreelProject}
          onClose={() => setShowreelOpen(false)}
        />
      )}
    </>
  );
}
