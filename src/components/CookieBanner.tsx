"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, Check, X, Shield, Settings } from "lucide-react";

export default function CookieBanner() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: true,
    analytics: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem("goreela_consent");
    if (!saved) {
      setIsOpen(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(
      "goreela_consent",
      JSON.stringify({ necessary: true, functional: true, analytics: true })
    );
    setIsOpen(false);
  };

  const handleReject = () => {
    localStorage.setItem(
      "goreela_consent",
      JSON.stringify({ necessary: true, functional: false, analytics: false })
    );
    setIsOpen(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("goreela_consent", JSON.stringify(preferences));
    setShowPreferences(false);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      role="region"
      aria-label="Gestione Consenso Cookie"
      style={{
        position: "fixed",
        bottom: "24px",
        left: "24px",
        right: "24px",
        maxWidth: "520px",
        backgroundColor: "rgba(18, 18, 22, 0.96)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid var(--border-card)",
        borderRadius: "16px",
        padding: "24px",
        zIndex: 5000,
        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.9)",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", marginBottom: "14px" }}>
        <div
          style={{
            width: "38px",
            height: "38px",
            borderRadius: "8px",
            backgroundColor: "var(--color-orange-subtle)",
            border: "1px solid var(--color-orange-border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--color-orange)",
            flexShrink: 0,
          }}
        >
          <Cookie size={20} />
        </div>
        <div>
          <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-white)", marginBottom: "4px" }}>
            Informativa sui Cookie
          </h4>
          <p style={{ fontSize: "0.85rem", color: "var(--color-gray-subtle)", lineHeight: "1.5" }}>
            Utilizziamo cookie tecnici per garantire le funzionalità del sito e cookie opzionali per migliorare la tua esperienza di navigazione.
            Leggi la nostra{" "}
            <Link href="/cookie-policy" style={{ color: "var(--color-orange)", textDecoration: "underline" }}>
              Cookie Policy
            </Link>.
          </p>
        </div>
      </div>

      {showPreferences ? (
        <div style={{ marginBottom: "16px", padding: "16px", backgroundColor: "var(--bg-black)", borderRadius: "8px", border: "1px solid var(--border-subtle)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.85rem" }}>
            <label style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>Cookie Tecnici (Necessari)</span>
              <input type="checkbox" checked disabled style={{ accentColor: "var(--color-orange)" }} />
            </label>
            <label style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>Preferenze Audio & UI</span>
              <input
                type="checkbox"
                checked={preferences.functional}
                onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                style={{ accentColor: "var(--color-orange)" }}
              />
            </label>
            <label style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>Statistiche Anonime</span>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                style={{ accentColor: "var(--color-orange)" }}
              />
            </label>
          </div>
          <button
            onClick={handleSavePreferences}
            className="btn btn-primary btn-sm"
            style={{ width: "100%", marginTop: "14px" }}
          >
            Salva Preferenze
          </button>
        </div>
      ) : null}

      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        <button
          onClick={handleAcceptAll}
          className="btn btn-primary btn-sm"
          style={{ flex: 1, minWidth: "120px" }}
        >
          Accetta Tutti
        </button>
        <button
          onClick={handleReject}
          className="btn btn-secondary btn-sm"
          style={{ flex: 1, minWidth: "120px" }}
        >
          Solo Necessari
        </button>
        <button
          onClick={() => setShowPreferences(!showPreferences)}
          aria-label="Personalizza cookie"
          style={{
            padding: "8px 12px",
            borderRadius: "8px",
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border-card)",
            color: "var(--color-gray-subtle)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          title="Personalizza preferenze"
        >
          <Settings size={16} />
        </button>
      </div>
    </div>
  );
}
