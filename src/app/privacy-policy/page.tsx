import Link from "next/link";
import { ArrowLeft, Shield, Lock, FileText, Mail, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Goreela Videomaking Studio",
  description:
    "Informativa sulla Privacy di Goreela Videomaking Studio redatta ai sensi del Regolamento UE 2016/679 (GDPR).",
};

export default function PrivacyPolicyPage() {
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
            <Shield size={14} />
            Documento Legale
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", marginBottom: "16px" }}>
            Informativa sulla Privacy
          </h1>
          <p style={{ color: "var(--color-gray-subtle)", fontSize: "0.95rem" }}>
            Ultimo aggiornamento: Ottobre 2026 | Ai sensi dell&apos;art. 13 del Regolamento (UE) 2016/679 (GDPR)
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
              <Lock size={20} color="var(--color-orange)" />
              1. Titolare del Trattamento dei Dati
            </h2>
            <p>
              Il Titolare del trattamento dei dati personali raccolti tramite questo sito web è:
            </p>
            <div style={{ marginTop: "12px", padding: "16px", background: "var(--bg-card)", borderRadius: "8px", border: "1px solid var(--border-subtle)" }}>
              <p><strong>Goreela Videomaking Studio</strong></p>
              <p style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "4px" }}>
                <MapPin size={16} color="var(--color-orange)" />
                Sede legale: Via Brigata Partigiana Ugo Muccini 18, 19038 Sarzana (SP), Italia
              </p>
              <p>Partita IVA: 01423070117</p>
              <p style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "4px" }}>
                <Mail size={16} color="var(--color-orange)" />
                Email di contatto: <a href="mailto:info@goreela.it" style={{ color: "var(--color-orange)", textDecoration: "underline" }}>info@goreela.it</a>
              </p>
            </div>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "1.4rem", color: "var(--text-white)", marginBottom: "12px" }}>
              2. Tipologie di Dati Raccolti
            </h2>
            <p>
              Fra i Dati Personali raccolti da questa Applicazione, in modo autonomo o tramite terze parti, ci sono:
            </p>
            <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
              <li>Dati anagrafici e di contatto (nome, cognome, indirizzo email, recapito telefonico, azienda) forniti volontariamente tramite il modulo di contatto o preventivo;</li>
              <li>Dati tecnici di navigazione e log di sistema (indirizzo IP, tipo di browser, orari di accesso, pagine visitate) raccolti per finalità di sicurezza e ottimizzazione delle performance;</li>
              <li>Dati sull&apos;utilizzo del sito e preferenze di consenso raccolti tramite cookie tecnici necessari.</li>
            </ul>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "1.4rem", color: "var(--text-white)", marginBottom: "12px" }}>
              3. Finalità e Base Giuridica del Trattamento
            </h2>
            <p>
              I dati forniti dall&apos;Utente vengono trattati per:
            </p>
            <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
              <li><strong>Rispondere a richieste di preventivo o informazioni:</strong> Base giuridica: esecuzione di misure precontrattuali o contrattuali (art. 6, par. 1, lett. b GDPR);</li>
              <li><strong>Sicurezza del sito e prevenzione abusi:</strong> Base giuridica: legittimo interesse del titolare a garantire l&apos;integrità e la sicurezza dell&apos;infrastruttura (art. 6, par. 1, lett. f GDPR);</li>
              <li><strong>Adempimenti fiscali e obblighi di legge:</strong> Base giuridica: adempimento di obblighi legali a cui è soggetto il titolare (art. 6, par. 1, lett. c GDPR).</li>
            </ul>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "1.4rem", color: "var(--text-white)", marginBottom: "12px" }}>
              4. Modalità di Trattamento e Sicurezza
            </h2>
            <p>
              Il Titolare adotta le opportune misure di sicurezza volte ad impedire l&apos;accesso, la divulgazione, la modifica o la distruzione non autorizzate dei Dati Personali. Il trattamento viene effettuato mediante strumenti informatici e/o telematici con protocolli crittografici avanzati (HTTPS, TLS 1.3) e severi controlli di accesso.
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "1.4rem", color: "var(--text-white)", marginBottom: "12px" }}>
              5. Periodo di Conservazione
            </h2>
            <p>
              I Dati sono trattati e conservati per il tempo richiesto dalle finalità per le quali sono stati raccolti. I dati inviati tramite i moduli di richiesta preventivo saranno conservati per il periodo necessario a gestire la trattativa e, in caso di mancata instaurazione del rapporto commerciale, per un massimo di 24 mesi.
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "1.4rem", color: "var(--text-white)", marginBottom: "12px" }}>
              6. Diritti dell&apos;Interessato (Artt. 15-22 GDPR)
            </h2>
            <p>
              Gli Utenti possono esercitare in qualsiasi momento i diritti previsti dal Regolamento UE 2016/679, tra cui:
            </p>
            <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
              <li>Diritto di accesso ai propri dati personali;</li>
              <li>Diritto di rettifica o cancellazione (diritto all&apos;oblio);</li>
              <li>Diritto di limitazione del trattamento o opposizione;</li>
              <li>Diritto alla portabilità dei dati in formato strutturato e leggibile;</li>
              <li>Diritto di proporre reclamo all&apos;Autorità Garante per la Protezione dei Dati Personali (www.garanteprivacy.it).</li>
            </ul>
            <p style={{ marginTop: "12px" }}>
              Per esercitare tali diritti, è sufficiente inviare un&apos;email a <a href="mailto:info@goreela.it" style={{ color: "var(--color-orange)" }}>info@goreela.it</a> con oggetto &quot;Esercizio Diritti Privacy&quot;.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
