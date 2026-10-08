import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Goreela Videomaking Studio | The Wildest Storytellers - Produzioni Video",
  description:
    "Casa di produzione video cinematografica attiva in tutta Italia. Spot commerciali, videoclip musicali, video corporate e fashion. Studio di 170mq a Sarzana (SP).",
  keywords: [
    "produzione video",
    "videomaking studio",
    "spot pubblicitari",
    "videoclip musicali",
    "video corporate",
    "sala posa sarzana",
    "goreela",
    "la spezia",
    "color grading cinema",
  ],
  authors: [{ name: "Goreela Videomaking Studio", url: "https://goreela.it" }],
  creator: "Goreela Videomaking Studio",
  publisher: "Goreela Videomaking Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://goreela-redesign.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Goreela Videomaking Studio | The Wildest Storytellers",
    description:
      "Raccontiamo storie con impatto visivo cinematografico. Spot, videoclip, produzioni corporate ed eventi in tutta Italia.",
    url: "https://goreela-redesign.vercel.app",
    siteName: "Goreela Videomaking Studio",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/images/studio/shooting-stage.webp",
        width: 1200,
        height: 630,
        alt: "Goreela Videomaking Studio - Shooting Stage & Production Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Goreela Videomaking Studio | The Wildest Storytellers",
    description:
      "Casa di produzione video a Sarzana (SP) attiva in tutta Italia. Spot, videoclip e branded content.",
    images: ["/images/studio/shooting-stage.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://goreela-redesign.vercel.app/#localbusiness",
      name: "Goreela Videomaking Studio",
      image: "https://goreela-redesign.vercel.app/images/logo.png",
      telephone: "+39 338 745 1858",
      email: "info@goreela.it",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Via Brigata Partigiana Ugo Muccini 18",
        addressLocality: "Sarzana",
        addressRegion: "SP",
        postalCode: "19038",
        addressCountry: "IT",
      },
      vatID: "01423070117",
      description:
        "Casa di produzione video cinematografica attiva in tutta Italia. 170mq di studio con limbo ciclorama e postazioni di post-produzione.",
      priceRange: "$$$",
      sameAs: [
        "https://www.facebook.com/goreela.it",
        "https://www.instagram.com/goreela.it/",
        "https://www.linkedin.com/company/goreela-videomaking-studio/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://goreela-redesign.vercel.app/#website",
      url: "https://goreela-redesign.vercel.app",
      name: "Goreela Videomaking Studio",
      publisher: {
        "@id": "https://goreela-redesign.vercel.app/#localbusiness",
      },
      inLanguage: "it-IT",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Salta al contenuto principale
        </a>
        {children}
      </body>
    </html>
  );
}
