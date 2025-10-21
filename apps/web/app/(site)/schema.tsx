"use client";
export const Schema = () => {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "IngeNova Ingeniería",
    url: typeof window !== "undefined" ? window.location.origin : "",
    logo: "/favicon.ico",
    sameAs: []
  };
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Ingeniería y Automatización",
    provider: { "@type": "Organization", name: "IngeNova Ingeniería" },
    areaServed: "LatAm"
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "¿Cómo inician un proyecto?", acceptedAnswer: { "@type": "Answer", text: "Diagnóstico en 10 días, roadmap y quick wins." } },
      { "@type": "Question", name: "¿Trabajan por hitos?", acceptedAnswer: { "@type": "Answer", text: "Sí, con entregables verificables y control de cambios." } }
    ]
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
};
