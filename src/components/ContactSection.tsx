"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Clock,
  Sparkles,
  ExternalLink,
} from "lucide-react";

interface ContactSectionProps {
  initialMessage?: string;
}

export default function ContactSection({ initialMessage = "" }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "spot",
    budget: "3000-5000",
    message: initialMessage,
    privacyAccepted: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Inserisci il tuo nome o referente";
    if (!formData.email.trim()) {
      errs.email = "Inserisci un indirizzo email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Indirizzo email non valido";
    }
    if (!formData.message.trim()) {
      errs.message = "Descrivi brevemente il tuo progetto o la tua richiesta";
    }
    if (!formData.privacyAccepted) {
      errs.privacy = "È necessario accettare l'informativa sulla privacy per procedere";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      projectType: "spot",
      budget: "3000-5000",
      message: "",
      privacyAccepted: false,
    });
    setIsSuccess(false);
  };

  return (
    <section
      id="contatti"
      style={{
        padding: "100px 0 120px",
        backgroundColor: "var(--bg-surface)",
        position: "relative",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px" }}>
          <div className="section-badge">
            <Mail size={14} />
            Iniziamo a Creare &bull; Contattaci
          </div>
          <h2 className="section-title">
            Possiamo aiutarti? <span className="highlight">Parliamone</span>.
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Siamo un team di creativi che non vede l&apos;ora di raccontare la tua storia.
            In anni di attività abbiamo aiutato decine di aziende ed artisti a farsi notare online.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div
          style={{
            maxWidth: "1140px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.3fr",
            gap: "48px",
          }}
          className="contact-layout-grid"
        >
          {/* Studio Direct Info Column */}
          <div>
            <h3 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: "16px" }}>
              Vieni a trovarci in studio o scrivici.
            </h3>
            <p style={{ color: "#c4c4cc", fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "36px" }}>
              Il nostro studio è a Sarzana (La Spezia), a pochi minuti dall&apos;uscita autostradale.
              Siamo disponibili per meeting dal vivo o video call conoscitive per esplorare la tua visione.
            </p>

            {/* Contact Direct Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "36px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  padding: "18px 20px",
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "12px",
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
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
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: "0.82rem", color: "var(--color-gray-subtle)", textTransform: "uppercase" }}>
                    Sede & Studio di Posa
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-white)", marginTop: "2px" }}>
                    Via Brigata Partigiana Ugo Muccini 18
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "var(--text-soft)" }}>
                    19038 Sarzana (SP), Italia
                  </div>
                  <a
                    href="https://maps.google.com/?q=Via+Brigata+Partigiana+Ugo+Muccini+18+Sarzana"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "0.8rem",
                      color: "var(--color-orange)",
                      marginTop: "6px",
                      fontWeight: 600,
                    }}
                  >
                    Apri su Google Maps
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  padding: "18px 20px",
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "12px",
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
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
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: "0.82rem", color: "var(--color-gray-subtle)", textTransform: "uppercase" }}>
                    Email Diretta
                  </div>
                  <a
                    href="mailto:info@goreela.it"
                    style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-white)", display: "block", marginTop: "2px" }}
                  >
                    info@goreela.it
                  </a>
                  <div style={{ fontSize: "0.82rem", color: "var(--color-gray-subtle)", marginTop: "2px" }}>
                    Risposta media entro 24 ore lavorative
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  padding: "18px 20px",
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "12px",
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
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
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: "0.82rem", color: "var(--color-gray-subtle)", textTransform: "uppercase" }}>
                    Telefono & WhatsApp
                  </div>
                  <a
                    href="tel:+393387451858"
                    style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-white)", display: "block", marginTop: "2px" }}
                  >
                    +39 338 745 1858
                  </a>
                  <div style={{ fontSize: "0.82rem", color: "var(--color-gray-subtle)", marginTop: "2px" }}>
                    Lun - Ven: 09:30 - 18:30
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action */}
            <a
              href="https://wa.me/393387451858?text=Ciao%20Goreela%2C%20vorrei%20informazioni%20su%20una%20produzione%20video."
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <MessageSquare size={18} color="var(--color-orange)" />
              Scrivici direttamente su WhatsApp
            </a>
          </div>

          {/* Smart Interactive Form Column */}
          <div
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-card)",
              borderRadius: "20px",
              padding: "40px",
              boxShadow: "0 24px 60px rgba(0, 0, 0, 0.7)",
            }}
          >
            {isSuccess ? (
              <div style={{ textAlign: "center", padding: "40px 20px" }}>
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-orange-subtle)",
                    border: "2px solid var(--color-orange)",
                    color: "var(--color-orange)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: "12px" }}>
                  Richiesta Inviata con Successo!
                </h3>
                <p style={{ color: "var(--color-gray-subtle)", fontSize: "0.95rem", lineHeight: "1.6", maxWidth: "420px", margin: "0 auto 28px" }}>
                  Grazie per averci contattato. Il team di Goreela esaminerà la tua richiesta
                  e ti ricontatterà entro 24 ore con un piano di produzione dedicato.
                </p>
                <button onClick={handleReset} className="btn btn-secondary btn-sm">
                  Invia un&apos;altra richiesta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "8px" }}>
                  Compila il Brief di Progetto
                </h3>
                <p style={{ fontSize: "0.88rem", color: "var(--color-gray-subtle)", marginBottom: "28px" }}>
                  Raccontaci la tua idea per ricevere una stima su misura senza impegno.
                </p>

                {/* Name & Company */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "18px" }} className="form-row-2">
                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-white)", marginBottom: "6px" }}>
                      Nome e Cognome *
                    </label>
                    <input
                      type="text"
                      placeholder="Mario Rossi"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: "8px",
                        backgroundColor: "var(--bg-surface)",
                        border: errors.name ? "1px solid #ef4444" : "1px solid var(--border-subtle)",
                        color: "var(--text-white)",
                        fontSize: "0.92rem",
                      }}
                    />
                    {errors.name && (
                      <span style={{ fontSize: "0.78rem", color: "#ef4444", marginTop: "4px", display: "block" }}>
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-white)", marginBottom: "6px" }}>
                      Azienda / Brand / Artista
                    </label>
                    <input
                      type="text"
                      placeholder="Nome Azienda o Progetto"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: "8px",
                        backgroundColor: "var(--bg-surface)",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--text-white)",
                        fontSize: "0.92rem",
                      }}
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "18px" }} className="form-row-2">
                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-white)", marginBottom: "6px" }}>
                      Email di Contatto *
                    </label>
                    <input
                      type="email"
                      placeholder="mario@azienda.it"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: "8px",
                        backgroundColor: "var(--bg-surface)",
                        border: errors.email ? "1px solid #ef4444" : "1px solid var(--border-subtle)",
                        color: "var(--text-white)",
                        fontSize: "0.92rem",
                      }}
                    />
                    {errors.email && (
                      <span style={{ fontSize: "0.78rem", color: "#ef4444", marginTop: "4px", display: "block" }}>
                        {errors.email}
                      </span>
                    )}
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-white)", marginBottom: "6px" }}>
                      Telefono
                    </label>
                    <input
                      type="tel"
                      placeholder="+39 333 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: "8px",
                        backgroundColor: "var(--bg-surface)",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--text-white)",
                        fontSize: "0.92rem",
                      }}
                    />
                  </div>
                </div>

                {/* Project Type & Budget */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "18px" }} className="form-row-2">
                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-white)", marginBottom: "6px" }}>
                      Tipologia Video
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: "8px",
                        backgroundColor: "var(--bg-surface)",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--text-white)",
                        fontSize: "0.92rem",
                      }}
                    >
                      <option value="spot">Spot Pubblicitario & Commercial</option>
                      <option value="music">Videoclip Musicale</option>
                      <option value="corporate">Video Corporate Aziendale</option>
                      <option value="fashion">Fashion & Runway Recap</option>
                      <option value="studio">Noleggio Studio 170mq</option>
                      <option value="other">Altro / Progetto Speciale</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-white)", marginBottom: "6px" }}>
                      Budget Indicativo
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: "8px",
                        backgroundColor: "var(--bg-surface)",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--text-white)",
                        fontSize: "0.92rem",
                      }}
                    >
                      <option value="2000-3000">€2.000 - €3.000</option>
                      <option value="3000-5000">€3.000 - €5.000</option>
                      <option value="5000-10000">€5.000 - €10.000</option>
                      <option value="10000+">&gt; €10.000 (Produzione Cinema)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div style={{ marginBottom: "20px" }}>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-white)", marginBottom: "6px" }}>
                    Dettagli del Progetto *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Raccontaci la tua idea, la data prevista o il concept desiderato..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: "8px",
                      backgroundColor: "var(--bg-surface)",
                      border: errors.message ? "1px solid #ef4444" : "1px solid var(--border-subtle)",
                      color: "var(--text-white)",
                      fontSize: "0.92rem",
                      resize: "vertical",
                    }}
                  />
                  {errors.message && (
                    <span style={{ fontSize: "0.78rem", color: "#ef4444", marginTop: "4px", display: "block" }}>
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Privacy Policy Acceptance */}
                <div style={{ marginBottom: "24px" }}>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      fontSize: "0.82rem",
                      color: "var(--color-gray-subtle)",
                      cursor: "pointer",
                      lineHeight: "1.5",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={formData.privacyAccepted}
                      onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                      style={{ accentColor: "var(--color-orange)", marginTop: "2px" }}
                    />
                    <span>
                      Dichiaro di aver letto e compreso l&apos;
                      <Link href="/privacy-policy" style={{ color: "var(--color-orange)", textDecoration: "underline" }}>
                        Informativa sulla Privacy
                      </Link>{" "}
                      e acconsento al trattamento dei miei dati personali ai sensi del GDPR. *
                    </span>
                  </label>
                  {errors.privacy && (
                    <span style={{ fontSize: "0.78rem", color: "#ef4444", marginTop: "4px", display: "block" }}>
                      {errors.privacy}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{ width: "100%", padding: "16px", cursor: isSubmitting ? "not-allowed" : "pointer" }}
                >
                  {isSubmitting ? (
                    <span>Invio in corso...</span>
                  ) : (
                    <>
                      <span>Invia Richiesta di Preventivo</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .contact-layout-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row-2 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
