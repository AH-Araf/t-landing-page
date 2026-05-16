import {
  contactEmail,
  faqItems,
  logoPath,
  siteName,
  siteTagline,
  siteUrl,
} from "@/lib/site";

function JsonLdScript({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function SiteJsonLd() {
  const logoUrl = new URL(logoPath, siteUrl).toString();

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: siteName,
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
    },
    email: contactEmail,
    areaServed: {
      "@type": "Country",
      name: "Bangladesh",
    },
    description: siteTagline,
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteName,
    url: siteUrl,
    description: siteTagline,
    inLanguage: "en-BD",
    publisher: { "@id": `${siteUrl}/#organization` },
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/#service`,
    name: "Sports turf and field booking",
    serviceType: "Sports turf and playing field booking",
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: {
      "@type": "Country",
      name: "Bangladesh",
    },
    description:
      "Online booking for football turfs, cricket grounds, basketball courts, and multi-sport fields across Bangladesh.",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: siteUrl,
      serviceType: "Online booking platform",
    },
  };

  const webApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: siteName,
    url: siteUrl,
    applicationCategory: "SportsApplication",
    operatingSystem: "Web, iOS, Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BDT",
      description: "Players pay venue hourly rates when booking; no Turffin subscription to play.",
    },
    description: siteTagline,
    featureList: [
      "Search turfs by area, sport, and time",
      "Secure checkout and digital passes",
      "Venue dashboards for turf owners",
    ],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <JsonLdScript data={organization} />
      <JsonLdScript data={website} />
      <JsonLdScript data={service} />
      <JsonLdScript data={webApp} />
      <JsonLdScript data={faqPage} />
    </>
  );
}
