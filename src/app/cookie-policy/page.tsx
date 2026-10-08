import Link from "next/link";
import { ArrowLeft, Cookie, Info, CheckCircle2, Sliders, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Goreela Videomaking Studio",
  description:
    "Informativa estesa sull'utilizzo dei Cookie e tecnologie similari di Goreela Videomaking Studio ai sensi della normativa vigente.",
};

export default function CookiePolicyPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--bg-black)", color: "var(--text-soft)", padding: "120px 24px 80px" }}>
      <div className="container" style={{ maxWidth: "860px" }}>
        <Link
          href="/"
          className="btn btn-secondary btn-sm"
          style={{ marginBottom: "32px", display: "inline-flex" }}
        >
          <ArrowLeft size={16} />
          Torna alla Home
        </Link>

        <div style={{ marginBottom: "40px" }}>
          <div className="section-badge">
            <Cookie size={14} />
            Politica Cookie
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", marginBottom: "16px" }}>
            Cookie Policy
          </h1>
          <p style={{ color: "var(--color-gray-subtle)", fontSize: "0.95rem" }}>
            Ultimo aggiornamento: Ottobre 2026 | Direttiva ePrivacy 2002/58/CE e Linee Guida Garante Privacy
          </p>
        </div>

        <div
          style={{
            background: "var(--bg-surface)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "16px",
            padding: "36px",
            lineHeight: "1.75",
            fontSize: "0.98rem",
            color: "#d0d0d8",
          }}
        >
          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "1.4rem", color: "var(--text-white)", marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
              <Info size={20} color="var(--color-orange)" />
              1. Cosa sono i Cookie?
            </h2>
            <p>
              I cookie sono piccoli file di testo che i siti visitati dall&apos;utente inviano al suo terminale (computer, tablet, smartphone), dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla successiva visita del medesimo utente. I cookie consentono al sito web di riconoscere il dispositivo dell&apos;utente e ricordarne preferenze, scelte o sessioni aperte.
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "1.4rem", color: "var(--text-white)", marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
              <CheckCircle2 size={20} color="var(--color-orange)" />
              2. Cookie utilizzati da questo sito
            </h2>
            <p>
              Questo sito web utilizza cookie tecnici strettamente necessari al corretto funzionamento della navigazione e per memorizzare le tue preferenze di consenso.
            </p>

            <div style={{ marginTop: "16px", overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem", textAlign: "left" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--border-card)", color: "var(--text-white)" }}>
                    <th style={{ padding: "12px 8px" }}>Nome Cookie</th>
                    <th style={{ padding: "12px 8px" }}>Tipologia</th>
                    <th style={{ padding: "12px 8px" }}>Scadenza</th>
                    <th style={{ padding: "12px 8px" }}>Finalità</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                    <td style={{ padding: "10px 8px", fontFamily: "monospace", color: "var(--color-orange)" }}>goreela_consent</td>
                    <td style={{ padding: "10px 8px" }}>Tecnico / Prima parte</td>
                    <td style={{ padding: "10px 8px" }}>12 Mesi</td>
                    <td style={{ padding: "10px 8px" }}>Memorizza la scelta di consenso cookie dell&apos;utente.</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                    <td style={{ padding: "10px 8px", fontFamily: "monospace", color: "var(--color-orange)" }}>next_session</td>
                    <td style={{ padding: "10px 8px" }}>Tecnico / Funzionale</td>
                    <td style={{ padding: "10px 8px" }}>Sessione</td>
                    <td style={{ padding: "10px 8px" }}>Mantiene lo stato della sessione per navigazione fluida.</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                    <td style={{ padding: "10px 8px", fontFamily: "monospace", color: "var(--color-orange)" }}>audio_state</td>
                    <td style={{ padding: "10px 8px" }}>Tecnico / Preferenze</td>
                    <td style={{ padding: "10px 8px" }}>Persistente</td>
                    <td style={{ padding: "10px 8px" }}>Memorizza lo stato di muto/attivazione dell&apos;audio reel.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "1.4rem", color: "var(--text-white)", marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
              <Sliders size={20} color="var(--color-orange)" />
              3. Come gestire o disabilitare i Cookie nel Browser
            </h2>
            <p>
              L&apos;utente può gestire le preferenze relative ai cookie direttamente all&apos;interno del proprio browser ed impedire, ad esempio, che terze parti possano installarne. Tramite le preferenze del browser è inoltre possibile eliminare i Cookie installati in passato.
            </p>
            <p style={{ marginTop: "8px" }}>
              Istruzioni per la gestione dei cookie nei principali browser:
            </p>
            <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
              <li><strong>Google Chrome:</strong> Impostazioni &gt; Privacy e sicurezza &gt; Cookie e altri dati dei siti.</li>
              <li><strong>Mozilla Firefox:</strong> Opzioni &gt; Privacy e sicurezza &gt; Cookie e dati dei siti web.</li>
              <li><strong>Apple Safari:</strong> Preferenze &gt; Privacy &gt; Blocca tutti i cookie.</li>
              <li><strong>Microsoft Edge:</strong> Impostazioni &gt; Privacy, ricerca e servizi &gt; Cancella dati di navigazione.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: "1.4rem", color: "var(--text-white)", marginBottom: "12px" }}>
              4. Contatti del Titolare
            </h2>
            <p>
              Per qualunque domanda o chiarimento riguardante la Cookie Policy di Goreela Videomaking Studio, puoi scrivere all&apos;indirizzo email: <a href="mailto:info@goreela.it" style={{ color: "var(--color-orange)", textDecoration: "underline" }}>info@goreela.it</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
