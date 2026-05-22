export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "Photographer"],
        "@id": "https://darahcoelhofotografia.com.br/#business",
        name: "Darah Coelho Fotografia",
        url: "https://darahcoelhofotografia.com.br",
        telephone: "+55-62-98293-3266",
        email: "darahtrabalho@icloud.com",
        description:
          "Fotógrafa profissional em Goiânia especializada em ensaio de moda, casamento, gestante, newborn e fotografia para e-commerce.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Goiânia",
          addressRegion: "GO",
          addressCountry: "BR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "-16.6864",
          longitude: "-49.2643",
        },
        areaServed: [
          { "@type": "City", name: "Goiânia" },
          { "@type": "City", name: "Aparecida de Goiânia" },
          { "@type": "City", name: "Anápolis" },
          { "@type": "City", name: "São Paulo" },
        ],
        priceRange: "$$",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "18:00",
        },
        sameAs: [
          "https://www.instagram.com/darahcoelho/",
          "https://www.tiktok.com/@darahcoelho0",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Serviços de Fotografia",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Book de Moda Goiânia" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ensaio Pessoal Goiânia" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fotografia de Casamento Goiânia" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ensaio de Gestante Goiânia" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ensaio Newborn Goiânia" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ensaio de Família Goiânia" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fotografia de Batismo Goiânia" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fotografia de Produto E-commerce Goiânia" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fotografia de Eventos Corporativos Goiânia" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Videomaker Goiânia" } },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://darahcoelhofotografia.com.br/#website",
        url: "https://darahcoelhofotografia.com.br",
        name: "Darah Coelho Fotografia",
        publisher: { "@id": "https://darahcoelhofotografia.com.br/#business" },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://darahcoelhofotografia.com.br/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
