import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { SITE, absoluteUrl, siteUrl } from "./site";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: SITE.themeColor },
    { media: "(prefers-color-scheme: light)", color: SITE.themeColor },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [...SITE.keywords],
  authors: [{ name: "Astar Media", url: SITE.origin }],
  creator: "Astar Media",
  publisher: "Astar Media",
  category: "Research",
  referrer: "origin-when-cross-origin",
  formatDetection: { telephone: false, email: false, address: false },
  alternates: { canonical: absoluteUrl("/") },
  icons: {
    icon: [
      { url: absoluteUrl("/favicon.ico"), sizes: "any" },
      { url: absoluteUrl("/favicon.svg"), type: "image/svg+xml" },
      { url: absoluteUrl("/favicon-16x16.png"), sizes: "16x16", type: "image/png" },
      { url: absoluteUrl("/favicon-32x32.png"), sizes: "32x32", type: "image/png" },
      { url: absoluteUrl("/icon-192.png"), sizes: "192x192", type: "image/png" },
      { url: absoluteUrl("/icon-512.png"), sizes: "512x512", type: "image/png" },
    ],
    shortcut: [absoluteUrl("/favicon.ico")],
    apple: [{ url: absoluteUrl("/apple-touch-icon.png"), sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: absoluteUrl("/favicon.svg"), color: "#e0a458" }],
  },
  manifest: absoluteUrl("/manifest.webmanifest"),
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: absoluteUrl("/"),
    siteName: SITE.name,
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
    images: [
      {
        url: absoluteUrl("/og-1200.png"),
        width: 1200,
        height: 630,
        alt: `${SITE.name} — ${SITE.tagline}`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
    images: [absoluteUrl("/og-1200.png")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  appleWebApp: {
    capable: true,
    title: SITE.shortName,
    statusBarStyle: "black-translucent",
  },
  other: {
    "msapplication-TileColor": SITE.themeColor,
    "msapplication-config": absoluteUrl("/browserconfig.xml"),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: SITE.name,
        url: siteUrl,
        description: SITE.description,
        inLanguage: "en-US",
        publisher: { "@id": `${SITE.origin}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${SITE.origin}/#organization`,
        name: "Astar Media",
        url: SITE.origin,
        logo: absoluteUrl("/icon-512.png"),
      },
    ],
  };

  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Script
          async
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9167552007992876"
        />
      </body>
    </html>
  );
}
