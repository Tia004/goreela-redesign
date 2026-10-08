"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Quanto costa una produzione video con Goreela Studio?",
      a: "Ogni progetto è unico e calibrato sulle reali esigenze del brand. Produzioni social essenziali partono indicativamente da €1.800, mentre spot pubblicitari completi o videoclip complessi con troupe estesa e studio si collocano tipicamente tra €2.500 e €6.000+. Utilizza il nostro preventivatore interattivo o contattaci per una quotazione analitica trasparente.",
    },
    {
      q: "Quali sono i tempi medi tra l'approvazione del concept e la consegna finale?",
      a: "Generalmente una produzione video standard richiede tra le 2 e le 4 settimane complessive: 1 settimana di pre-produzione (script, storyboard, location), le giornate di shooting concordate, e 1-2 settimane per montaggio, color grading e sound design. Su richiesta offriamo anche servizi 'Express' con consegna montaggi per eventi o sfilate entro 24/48 ore.",
    },
    {
      q: "Quante revisioni del montaggio sono incluse nel preventivo?",
      a: "Tutti i nostri contratti includono di default 2 (due) cicli completi di revisione sul montaggio (rough cut e fine cut). Condividiamo il video tramite la piattaforma professionale Frame.io, che ti permette di commentare e inserire appunti direttamente sul singolo fotogramma in modo intuitivo e veloce.",
    },
    {
      q: "Chi si occupa delle autorizzazioni per il volo con drone e le location?",
      a: "Ci occupiamo noi di ogni aspetto burocratico. I nostri piloti sono certificati ENAC/EASA per operazioni in scenari critici urbani e rurali, con assicurazione professionale dedicata. Gestiamo direttamente le richieste di occupazione suolo pubblico e i permessi con gli enti comunali preposti.",
    },
    {
      q: "Come vengono gestiti i diritti musicali e la licenza delle immagini?",
      a: "Forniamo esclusivamente colonne sonore con licenza commerciale illimitata globale per tutti i canali concordati (web, social, tv), eliminando qualsiasi rischio di copyright strike o contestazione. In alternativa, componiamo colonne sonore originali su misura con il nostro team di sound designer.",
    },
    {
      q: "Operate solo a Sarzana e in Liguria o effettuate trasferte in tutta Italia?",
      a: "La nostra sede centrale e il nostro studio di posa da 170mq si trovano a Sarzana (SP), ma la nostra troupe viaggia costantemente in tutta Italia e all'estero. Abbiamo realizzato produzioni a Milano, Parigi, Roma, Firenze, Zurigo e nelle principali capitali europee.",
    },
  ];

  return (
    <section
      style={{
        padding: "100px 0 120px",
        backgroundColor: "var(--bg-black)",
        position: "relative",
      }}
    >
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 50px" }}>
          <div className="section-badge">
            <HelpCircle size={14} />
            FAQ &bull; Domande Frequenti
          </div>
          <h2 className="section-title">
            Tutto ciò che <span className="highlight">devi sapere</span>.
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Risposte chiare e trasparenti alle domande più comuni sulle nostre produzioni video.
          </p>
        </div>

        <div style={{ maxWidth: "860px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "14px" }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: "var(--bg-surface)",
                  border: isOpen ? "1px solid var(--color-orange-border)" : "1px solid var(--border-subtle)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  transition: "var(--transition-smooth)",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    padding: "22px 28px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "16px",
                    textAlign: "left",
                    color: "var(--text-white)",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    backgroundColor: "transparent",
                  }}
                >
                  <span>{faq.q}</span>
                  <div
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                      color: isOpen ? "var(--color-orange)" : "var(--color-gray-subtle)",
                      flexShrink: 0,
                    }}
                  >
                    <ChevronDown size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 28px 24px",
                      color: "#c4c4cc",
                      fontSize: "0.95rem",
                      lineHeight: "1.7",
                      borderTop: "1px solid var(--border-subtle)",
                      paddingTop: "16px",
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
