import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Med Clinic X — Healthcare AI Company Founded by Clinicians",
  description:
    "Learn about Med Clinic X — the healthcare AI company founded by clinicians and engineers. We build HIPAA-compliant patient portals, AI medical receptionists, and clinic automation for modern medical practices.",
  keywords: [
    "about Med Clinic X",
    "healthcare AI company",
    "HIPAA compliant software company",
    "medical software development team",
    "patient portal company",
    "healthcare technology startup",
    "clinical AI founders",
  ],
  alternates: {
    canonical: "https://medclinicx.com/about",
  },
  openGraph: {
    title: "About Med Clinic X — Healthcare AI Company Founded by Clinicians",
    description:
      "Learn about Med Clinic X — the healthcare AI company founded by clinicians and engineers building the future of patient-first medical software.",
    url: "https://medclinicx.com/about",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Med Clinic X",
      },
    ],
  },
};

export default function AboutPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://medclinicx.com/about" },
    ],
  };

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://medclinicx.com/about",
    name: "About Med Clinic X",
    description:
      "Med Clinic X was founded on a simple belief: healthcare technology should serve patients first. We build AI-powered patient portals, clinical automation, and HIPAA-compliant digital solutions.",
    url: "https://medclinicx.com/about",
    publisher: { "@id": "https://medclinicx.com/#organization" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <AboutClient />
    </>
  );
}
