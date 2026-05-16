import { Anton, Hanken_Grotesk } from "next/font/google";
import { SiteJsonLd } from "@/components/seo/json-ld";
import {
  contactEmail,
  defaultDescription,
  defaultTitle,
  keywords,
  locale,
  logoPath,
  ogDescription,
  ogTitle,
  siteName,
  siteTagline,
  siteUrl,
  titleTemplate,
} from "@/lib/site";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: titleTemplate,
  },
  description: defaultDescription,
  applicationName: siteName,
  generator: "Next.js",
  keywords,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "Sports",
  classification: "Sports turf and field booking platform",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-BD": "/",
      en: "/",
    },
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
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale,
    url: "/",
    siteName,
    title: ogTitle,
    description: ogDescription,
    images: [
      {
        url: logoPath,
        alt: `${siteName} — ${siteTagline}`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: ogDescription,
    images: [logoPath],
  },
  other: {
    "geo.region": "BD",
    "geo.placename": "Bangladesh",
    "content-language": "en-BD",
    "apple-mobile-web-app-title": siteName,
    "mobile-web-app-capable": "yes",
  },
  verification: {
    // google: "paste-search-console-token-here",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0a0f1a" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0f1a" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-BD"
      className={`dark ${anton.variable} ${hanken.variable} scroll-smooth h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
        <link rel="preload" as="image" href="/images/hero.jpg" fetchPriority="high" />
        <meta name="contact" content={contactEmail} />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-on-surface">
        <SiteJsonLd />
        {children}
      </body>
    </html>
  );
}
