"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Volume2, VolumeX } from "lucide-react";

interface NavbarProps {
  isMuted: boolean;
  onToggleSound: () => void;
}

export default function Navbar({ isMuted, onToggleSound }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ["lavori", "processo", "studio", "team", "clienti", "contatti"];
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 180 && rect.bottom >= 180;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Lavori", href: "#lavori" },
    { name: "Processo", href: "#processo" },
    { name: "Lo Studio", href: "#studio" },
    { name: "Team", href: "#team" },
    { name: "Clienti", href: "#clienti" },
    { name: "Contatti", href: "#contatti" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "var(--header-height)",
        zIndex: 1000,
        backgroundColor: isScrolled
          ? "rgba(12, 12, 14, 0.94)"
          : "rgba(12, 12, 14, 0.5)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: isScrolled
          ? "1px solid var(--border-subtle)"
          : "1px solid transparent",
        transition: "var(--transition-smooth)",
      }}
    >
      <div
        className="container"
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Official Brand Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            outline: "none",
          }}
          aria-label="Goreela Videomaking Studio Home"
        >
          <div style={{ position: "relative", width: "160px", height: "55px" }}>
            <Image
              src="/images/logo_official.webp"
              alt="Goreela Videomaking Studio"
              fill
              style={{ objectFit: "contain", objectPosition: "left" }}
              draggable={false}
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "32px",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontSize: "0.92rem",
                  fontWeight: 600,
                  color: isActive ? "var(--color-orange)" : "var(--text-soft)",
                  position: "relative",
                  padding: "6px 0",
                  transition: "var(--transition-smooth)",
                }}
              >
                {link.name}
                {isActive && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      backgroundColor: "var(--color-orange)",
                      borderRadius: "2px",
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Actions & CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {/* Ambient Sound Toggle */}
          <button
            onClick={onToggleSound}
            aria-label={isMuted ? "Attiva suono ambientale" : "Disattiva audio"}
            title={isMuted ? "Audio reel disattivato" : "Audio reel attivo"}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              borderRadius: "8px",
              background: isMuted ? "var(--bg-card)" : "var(--color-orange-subtle)",
              border: `1px solid ${isMuted ? "var(--border-card)" : "var(--color-orange-border)"}`,
              color: isMuted ? "var(--color-gray-subtle)" : "var(--color-orange)",
              transition: "var(--transition-smooth)",
              cursor: "pointer",
            }}
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>

          {/* Desktop Contact CTA */}
          <a
            href="#contatti"
            className="btn btn-primary btn-sm desktop-cta"
            style={{ display: "none" }}
          >
            Richiedi Preventivo
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Chiudi menu" : "Apri menu di navigazione"}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "42px",
              height: "42px",
              borderRadius: "8px",
              background: "var(--bg-card)",
              border: "1px solid var(--border-card)",
              color: "var(--text-white)",
              cursor: "pointer",
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "var(--header-height)",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(12, 12, 14, 0.98)",
            backdropFilter: "blur(20px)",
            padding: "32px 24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            zIndex: 999,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  fontFamily: "var(--font-heading)",
                  color: "var(--text-white)",
                  padding: "10px 0",
                  borderBottom: "1px solid var(--border-subtle)",
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div style={{ paddingTop: "24px", borderTop: "1px solid var(--border-subtle)" }}>
            <a
              href="#contatti"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary"
              style={{ width: "100%", marginBottom: "16px" }}
            >
              Richiedi Preventivo
              <ArrowUpRight size={18} />
            </a>
            <p style={{ fontSize: "0.85rem", color: "var(--color-gray-subtle)", textAlign: "center" }}>
              info@goreela.it &bull; +39 338 745 1858
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-cta {
            display: inline-flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
