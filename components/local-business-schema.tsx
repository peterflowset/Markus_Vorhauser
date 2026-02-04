export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Rechtsanwaltskanzlei Markus Vorhauser",
    description: "Rechtsanwalt in Meran - Ihr Experte für Erbrecht, Immobilienrecht, Familienrecht und Zivilrecht in Südtirol",
    url: "https://vorhauser.eu",
    telephone: "+390473491053",
    email: "info@vorhauser.eu",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Freiheitsstraße 132",
      addressLocality: "Meran",
      addressRegion: "Südtirol",
      postalCode: "39012",
      addressCountry: "IT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 46.6713,
      longitude: 11.1597,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "12:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "14:30",
        closes: "18:00",
      },
    ],
    priceRange: "$$",
    areaServed: {
      "@type": "State",
      name: "Südtirol",
    },
    knowsLanguage: ["de", "it"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Rechtsdienstleistungen",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Erbrecht",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Immobilienrecht",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Familienrecht",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Zivilrecht",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Strafrecht",
          },
        },
      ],
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
