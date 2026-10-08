import Link from "next/link";
import { ArrowLeft, FileCheck, Film, Award, AlertTriangle, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termini di Servizio | Goreela Videomaking Studio",
  description:
    "Termini e Condizioni generali di servizio per produzioni video, shooting, noleggio studio e post-produzione di Goreela Videomaking Studio.",
};

export default function TermsOfServicePage() {
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
            <FileCheck size={14} />
            Condizioni Contrattuali
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", marginBottom: "16px" }}>
            Termini di Servizio
          </h1>
          <p style={{ color: "var(--color-gray-subtle)", fontSize: "0.95rem" }}>
            Ultimo aggiornamento: Ottobre 2026 | Condizioni generali applicabili a tutti i servizi di produzione video
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
              <Film size={20} color="var(--color-orange)" />
              1. Oggetto del Servizio
            </h2>
            <p>
              Goreela Videomaking Studio (P.IVA 01423070117) offre servizi professionali di ideazione creativa, pre-produzione, riprese video cinematografiche, riprese aeree con droni, noleggio sala posa (170mq) e post-produzione (montaggio, color grading, sound design, VFX). L&apos;accettazione di un preventivo o ordine formalizza il contratto tra Goreela e il Cliente.
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "1.4rem", color: "var(--text-white)", marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
              <Award size={20} color="var(--color-orange)" />
              2. Proprietà Intellettuale e Diritti d&apos;Autore
            </h2>
            <p>
              Ai sensi della Legge sul Diritto d&apos;Autore (L. 633/1941 e succ. mod.):
            </p>
            <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
              <li>Il materiale master finale consegnato è concesso in licenza d&apos;uso al Cliente per le finalità e i canali concordati nel preventivo (es. canali web, social media, broadcast tv o cinema);</li>
              <li>I file sorgente di progetto (.prproj, .drp, asset RAW non montati) rimangono di esclusiva proprietà intellettuale di Goreela Videomaking Studio, salvo accordo scritto contrario;</li>
              <li>Goreela si riserva il diritto morale e promozionale di includere estratti dell&apos;opera nel proprio showreel, sito web e canali portfolio.</li>
            </ul>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "1.4rem", color: "var(--text-white)", marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
              <ShieldCheck size={20} color="var(--color-orange)" />
              3. Revisioni e Approvazioni
            </h2>
            <p>
              Salvo diversamente specificato nel preventivo:
            </p>
            <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
              <li>Ogni produzione include fino a 2 (due) sessioni di revisione e modifica sul primo montaggio consegnato (rough cut);</li>
              <li>Le richieste di revisione devono pervenire per iscritto entro 7 giorni lavorativi dalla ricezione del link di anteprima;</li>
              <li>Modifiche strutturali o creative che alterino lo storyboard precedentemente approvato comporteranno un adeguamento di spesa concordato.</li>
            </ul>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "1.4rem", color: "var(--text-white)", marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
              <AlertTriangle size={20} color="var(--color-orange)" />
              4. Riprese in Esterna e Weather Day Policy
            </h2>
            <p>
              In caso di condizioni meteo avverse che impediscano le riprese all&apos;aperto o le operazioni di volo drone in conformità ai regolamenti ENAC/EASA, la data di shooting verrà ripianificata di comune accordo senza penali aggiuntive di regia, salvo eventuali costi vivi documentati non rimborsabili (es. permessi comunali, noleggio mezzi speciali, compensi comparse).
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.4rem", color: "var(--text-white)", marginBottom: "12px" }}>
              5. Foro Competente
            </h2>
            <p>
              Per qualunque controversia relativa all&apos;interpretazione o esecuzione dei presenti termini contrattuali sarà competente in via esclusiva il Foro di La Spezia, con espressa esclusione di qualsiasi altro foro concorrente.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
