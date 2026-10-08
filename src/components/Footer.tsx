"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        backgroundColor: "var(--bg-black)",
        color: "var(--text-soft)",
        borderTop: "1px solid var(--border-subtle)",
        position: "relative",
        paddingTop: "80px",
      }}
    >
      <div className="container">
        {/* Top Footer Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1.2fr",
            gap: "48px",
            paddingBottom: "60px",
            borderBottom: "1px solid var(--border-subtle)",
          }}
          className="footer-top-grid"
        >
          {/* Col 1: Brand & Slogan */}
          <div>
            <div style={{ position: "relative", width: "140px", height: "45px", marginBottom: "20px" }}>
              <Image
                src="/images/logo.png"
                alt="Goreela Videomaking Studio"
                fill
                style={{ objectFit: "contain", objectPosition: "left" }}
              />
            </div>
            <p
              style={{
                color: "var(--color-gray-subtle)",
                fontSize: "0.92rem",
                lineHeight: "1.65",
                marginBottom: "24px",
                maxWidth: "320px",
              }}
            >
              The wildest storytellers. Casa di produzione video e studio di posa da 170mq a Sarzana.
              Realizziamo spot commerciali, videoclip e contenuti corporate in tutta Italia.
            </p>

            {/* Social Icons Bar */}
            <div style={{ display: "flex", gap: "12px" }}>
              {[
                {
                  href: "https://www.facebook.com/goreela.it",
                  icon: FaFacebookF,
                  label: "Facebook",
                },
                {
                  href: "https://www.instagram.com/goreela.it/",
                  icon: FaInstagram,
                  label: "Instagram",
                },
                {
                  href: "https://www.linkedin.com/company/goreela-videomaking-studio/",
                  icon: FaLinkedinIn,
                  label: "LinkedIn",
                },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visita la nostra pagina ${social.label}`}
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "8px",
                      backgroundColor: "var(--bg-card)",
                      border: "1px solid var(--border-card)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--text-white)",
                      transition: "var(--transition-smooth)",
                    }}
                    className="social-btn"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4
              style={{
                fontSize: "0.9rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-white)",
                marginBottom: "20px",
              }}
            >
              Navigazione
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.92rem" }}>
              <a href="#hero" style={{ color: "var(--color-gray-subtle)" }} className="footer-link">Home</a>
              <a href="#lavori" style={{ color: "var(--color-gray-subtle)" }} className="footer-link">Portfolio Lavori</a>
              <a href="#processo" style={{ color: "var(--color-gray-subtle)" }} className="footer-link">Processo di Produzione</a>
              <a href="#studio" style={{ color: "var(--color-gray-subtle)" }} className="footer-link">Lo Studio 170mq</a>
              <a href="#team" style={{ color: "var(--color-gray-subtle)" }} className="footer-link">Troupe & Team</a>
              <a href="#clienti" style={{ color: "var(--color-gray-subtle)" }} className="footer-link">Clienti & Testimonianze</a>
              <a href="#contatti" style={{ color: "var(--color-gray-subtle)" }} className="footer-link">Contattaci</a>
            </div>
          </div>

          {/* Col 3: Legal Pages */}
          <div>
            <h4
              style={{
                fontSize: "0.9rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-white)",
                marginBottom: "20px",
              }}
            >
              Note Legali
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.92rem" }}>
              <Link href="/privacy-policy" style={{ color: "var(--color-gray-subtle)" }} className="footer-link">
                Privacy Policy
              </Link>
              <Link href="/cookie-policy" style={{ color: "var(--color-gray-subtle)" }} className="footer-link">
                Cookie Policy
              </Link>
              <Link href="/terms-of-service" style={{ color: "var(--color-gray-subtle)" }} className="footer-link">
                Termini di Servizio
              </Link>
              <span style={{ fontSize: "0.85rem", color: "var(--color-gray-mid)", marginTop: "8px" }}>
                Conformità GDPR UE 2016/679
              </span>
            </div>
          </div>

          {/* Col 4: Dati Aziendali */}
          <div>
            <h4
              style={{
                fontSize: "0.9rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-white)",
                marginBottom: "20px",
              }}
            >
              Sede & Contatti
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.9rem", color: "var(--color-gray-subtle)" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <MapPin size={16} color="var(--color-orange)" style={{ marginTop: "3px", flexShrink: 0 }} />
                <span>Via Brigata Partigiana Ugo Muccini 18, 19038 Sarzana (SP)</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Mail size={16} color="var(--color-orange)" style={{ flexShrink: 0 }} />
                <a href="mailto:info@goreela.it" style={{ color: "var(--text-white)" }}>info@goreela.it</a>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Phone size={16} color="var(--color-orange)" style={{ flexShrink: 0 }} />
                <a href="tel:+393387451858" style={{ color: "var(--text-white)" }}>+39 338 745 1858</a>
              </div>
              <div style={{ paddingTop: "8px", borderTop: "1px solid var(--border-subtle)", fontSize: "0.82rem", color: "var(--color-gray-light)" }}>
                P.IVA: 01423070117
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back-to-Top Bar */}
        <div
          style={{
            padding: "24px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            fontSize: "0.85rem",
            color: "var(--color-gray-light)",
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} Goreela Videomaking Studio. Tutti i diritti riservati.
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Torna all'inizio della pagina"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              borderRadius: "8px",
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-card)",
              color: "var(--text-white)",
              fontSize: "0.82rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "var(--transition-smooth)",
            }}
            className="top-btn"
          >
            <span>Torna su</span>
            <ArrowUp size={14} color="var(--color-orange)" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .social-btn:hover {
          background-color: var(--color-orange) !important;
          border-color: var(--color-orange) !important;
          transform: translateY(-2px);
        }
        .footer-link:hover {
          color: var(--color-orange) !important;
          padding-left: 4px;
        }
        .top-btn:hover {
          border-color: var(--color-orange);
          color: var(--color-orange);
        }
        @media (max-width: 900px) {
          .footer-top-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 580px) {
          .footer-top-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
