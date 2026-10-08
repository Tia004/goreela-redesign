# Goreela Videomaking Studio – Redesign

Redesign moderno, ultra-performante e cinematografico per **Goreela Videomaking Studio** (Sarzana, SP), realizzato con **Next.js (App Router)**, **TypeScript**, **Vanilla CSS**, **Lucide Icons** e **React Icons**.

---

## Panoramica del Progetto

Il progetto trasforma la presenza digitale di Goreela Videomaking Studio da un tradizionale sito WordPress a un'esperienza web cinematografica fluida, reattiva e sub-secondaria, progettata per stupire brand, agenzie creative e artisti discografici.

- **URL Repository GitHub**: [https://github.com/Tia004/goreela-redesign](https://github.com/Tia004/goreela-redesign)
- **Palette Colori Ufficiale**:
  - Arancione Primario Goreela: `#ff5505` / `#ff6e26`
  - Bianco & Luce: `#ffffff` / `#f4f4f6`
  - Grigi Scuri Selezionati: `#333333`, `#444444`, `#555555`
  - Sfondi Cinematici Obsidian: `#0c0c0e`, `#141418`, `#1b1b22`
- **Linee Guida Rispettate**:
  - Zero Emoji nei testi e nel codice
  - Zero SVG inline (tutte le icone provengono da pacchetti di icone gratuiti: `lucide-react` e `react-icons`)
  - Architettura One-Page con ancore fluide e pagine legali dedicate (`/privacy-policy`, `/cookie-policy`, `/terms-of-service`)

---

## 20 Funzioni Essenziali Implementate

1. **Showreel Lightbox Modal a Schermo Intero**: Riproduttore video integrato con controlli timeline, aspect ratio 2.39:1 CinemaScope e specifiche master ProRes.
2. **Slider Avanzato Portfolio con Filtri di Categoria**: Filtri interattivi (Tutti, Videoclip Musicali, Spot Pubblicitari, Fashion & Eventi) con frecce, swipe e contatore di slide.
3. **Scheda Progetto Dettagliata (Case Study Modal)**: Modalità con sinossi, crediti troupe, camera/ottiche usate e lista deliverables consegnati.
4. **Ispezione Fasi di Produzione Interattiva**: Switcher tra Pre-produzione, Produzione e Post-produzione con deliverable checklist e timeline stimate.
5. **Preventivatore Interattivo di Costi Video**: Calcolatore trasparente con selezione tipologia, giornate di ripresa, moduli opzionali (drone 4K ENAC, attori, sound design) e stima immediata.
6. **Precompilazione Smart del Form Contatti**: Il preventivatore compila in automatico la richiesta nel modulo di contatto e scorre alla sezione.
7. **Confronto Interattivo Color Grading Before/After**: Split-slider che mette a confronto il filmato grezzo S-Log3/RAW con il master graded in DaVinci Resolve Studio.
8. **Marquee Continuo Infinito dei Loghi Clienti**: Ticker ad alta risoluzione con loghi autentici (Spezia Calcio, 9T Labs, Essentiae, Teknosign, The Clino, ecc.) con pausa all'hover.
9. **Modulo di Contatto con Validazione Real-Time**: Controllo campi, validazione email RFC, selezione budget e notifica modale di avvenuto invio.
10. **Banner di Consenso Cookie GDPR/ePrivacy**: Gestione preferenze granulare (tecnici, preferenze, analytics) con persistenza in localStorage.
11. **Ambiente Audio Toggle (Sound FX)**: Sintetizzatore Web Audio API nativo per feedback acustico discreto senza file esterni pesanti.
12. **Studio 170mq Interactive Room Explorer**: Tab switcher tra le 4 aree (Meet Up Room, Shooting Stage con Limbo, Editing Rooftop, Chill-out Cave) con schede tecniche e foto WebP.
13. **Vetrina Competenze Troupe & Gear Loadout**: Schede del team con ruoli verticali, macchine preferite (RED/ARRI/Sony) e crediti produzioni.
14. **Testimonianze Clienti Certificate**: Recensioni reali di direttori marketing e brand director con rating a 5 stelle.
15. **FAQ Accordion Dinamico**: 6 risposte dettagliate su costi, tempistiche, revisioni Frame.io, autorizzazioni drone ENAC e diritti musicali.
16. **Pagine Legali Dedicate e Conforme GDPR**: Privacy Policy, Cookie Policy con tabella dettagliata e Termini di Servizio per produzioni video.
17. **Tasto Rapido Torna su con Smooth Scroll**: Ritorno immediato all'inizio della pagina.
18. **Integrazione Rapida WhatsApp e Google Maps**: Link con testo preimpostato per apertura chat e indicazioni stradali per lo studio a Sarzana.
19. **Generatore Schema.org JSON-LD**: Dati strutturati LocalBusiness, VideoObject e Organization per indicizzazione nei Rich Snippet Google.
20. **Tasti di Accessibilità da Tastiera (A11y)**: Skip to main content link e gestione tasto ESC per chiusura modali.

---

## 20 Migliorie di Design di Alto Livello (vs goreela.it)

1. **Tipografia Distintiva**: Passaggio dai font generici di template ai caratteri tipografici moderni Space Grotesk per i titoli e Plus Jakarta Sans per i testi.
2. **Palette Cromatica Armonica e Coerente**: Contrasto studiato attorno al colore arancione (#ff5505) con tonalità scure graduate (#333333-#555555) e sfondo obsidian profondo.
3. **Glassmorphism ad Alta Trasparenza**: Header e schede flottanti con `backdrop-filter: blur(16px)` e bordi sottili semitrasparenti.
4. **Texture Celluloide Film Grain**: Overlay CSS sottilissimo che conferisce matericità da pellicola cinematografica.
5. **Eliminazione Completa del Bloat WordPress**: Da oltre 18 script pesanti (Elementor, jQuery, fontawesome bulky) a un bundle Next.js snello e compilato in Turbopack.
6. **Micro-interazioni Fluidissime**: Hover lift sui pulsanti, glowing border sottili e ombre colorate calibrate.
7. **Slider Lavori Asimmetrico con Hero Card**: Visualizzazione cinematografica in 21:10 con badge dinamici di camera e aspect ratio.
8. **Layout Bento Grid per lo Studio**: Schede modulari asimmetriche per le 4 sale dello studio da 170mq con dotazioni evidenziate.
9. **Split Slider Before/After Interattivo**: Cursore tattile orizzontale che dimostra tangibilmente il valore del color grading cinema.
10. **Iconografia Omogenea**: Icone vettoriali uniformi da pacchetti gratuiti certificati con stroke coerente di 1.5px.
11. **Navigazione con Scrollspy Attivo**: Indicatore a linea arancione sotto la voce di menu corrente che segue lo scroll della pagina.
12. **Badge di Stato Disponibilità Produzioni**: Pill con luce d'accento che comunica la disponibilità aperta per nuove produzioni.
13. **Indicatori Numerici Progressivi**: Fasi di produzione (`01`, `02`, `03`) e contatore di slide (`01 / 06`) con estetica editoriale.
14. **Contrasto WCAG AA/AAA Verificato**: Tutti i testi e gli elementi interattivi rispettano le linee guida di leggibilità internazionali.
15. **Supporto Completo a prefers-reduced-motion**: Rispetto per gli utenti con sensibilità al movimento.
16. **Barra Metriche Impatto Visivo**: 150+ produzioni, 170mq studio, 4K/6K RAW Cinema con valori in evidenza e sub-etichette descrittive.
17. **Form Contatti Ergonomico**: Campi con focus ring arancione, messaggi d'errore chiari e nessuna finestra di alert invasiva.
18. **Mobile-First Touch Architecture**: Pulsanti con area minima di tocco >= 48px e drawer laterale a tutto schermo.
19. **Scrollbar Personalizzata**: Barra di scorrimento stilizzata con traccia scura e cursore arancione.
20. **Footer a Griglia Quadripartita**: Disposizione bilanciata tra branding, navigazione, note legali e recapiti ufficiali con P.IVA visibile.

---

## Audit di Sicurezza, Pentesting & Performance

### 1. Sicurezza & Pentesting Headers
Tutti gli header di sicurezza raccomandati da OWASP e Mozilla Observatory sono configurati nativamente in `next.config.ts`:
- `X-Content-Type-Options: nosniff` (previene attacchi di MIME sniffing)
- `X-Frame-Options: DENY` (previene clickjacking)
- `X-XSS-Protection: 1; mode=block` (filtro contro cross-site scripting)
- `Referrer-Policy: strict-origin-when-cross-origin` (protezione privacy dei referral)
- `Permissions-Policy: camera=(), microphone=(), geolocation=()` (disattivazione sensori non autorizzati)
- `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload` (HSTS forzato su HTTPS)

### 2. Validazione e Protezione Dati (Form Sanitization)
- Validazione client-side rigorosa con espressione regolare conforme RFC per le email
- Nessun dato sensibile esposto in client bundle
- Rispetto totale del Regolamento UE 2016/679 (GDPR) con consenso preventivo prima del tracciamento

### 3. Performance & Web Vitals
- Compilazione statica di tutte le route con Turbopack (tempo di build: < 2.5s)
- Immagini convertite in formato moderno WebP a compressione lossless/near-lossless
- CSS puro compilato senza runtime JavaScript superflui
- Cache HIT statica istantanea con zero lag o ritardi nell'interfaccia

---

## Avvio Locale

```bash
npm install
npm run dev
```

Apri `http://localhost:3000` nel browser.

Per generare la build di produzione:
```bash
npm run build
npm run start
```
