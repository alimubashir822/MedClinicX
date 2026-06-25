import { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers & Open Job Openings | Med Clinic X",
  description:
    "Explore career opportunities at Med Clinic X. Build clinical SaaS platforms, EHR database integrations, patient portals, and healthcare AI solutions.",
  keywords: [
    "Med Clinic X careers",
    "healthcare IT jobs",
    "digital health career opportunities",
    "healthcare SaaS roles",
    "clinical software jobs",
    "healthcare data analyst jobs",
    "clinical informatics specialist jobs",
    "remote healthcare jobs"
  ],
  alternates: {
    canonical: "https://medclinicx.com/careers",
  },
  openGraph: {
    title: "Careers & Open Job Openings | Med Clinic X",
    description:
      "Explore open roles and build clinical SaaS systems, patient portals, and health AI software at Med Clinic X.",
    url: "https://medclinicx.com/careers",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Med Clinic X Careers Directory",
      },
    ],
  },
};

export default function CareersPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "Careers", item: "https://medclinicx.com/careers" },
    ],
  };

  const jobListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Med Clinic X Open Job Postings",
    "description": "Complete directory of active career opportunities at Med Clinic X.",
    "url": "https://medclinicx.com/careers",
    "numberOfItems": 2,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "JobPosting",
          "name": "Healthcare Data Analyst",
          "url": "https://medclinicx.com/careers/healthcare-data-analyst",
          "description": "Transform raw healthcare datasets into actionable clinical and operational insights. Support analytics requirements for healthcare SaaS platforms."
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "JobPosting",
          "name": "Clinical Informatics Specialist",
          "url": "https://medclinicx.com/careers/clinical-informatics-specialist",
          "description": "Optimize healthcare data mapping, EHR/EMR workflows, and systems interoperability. Work at the intersection of clinical operations and engineering."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobListSchema) }}
      />
      <div className="pt-24 md:pt-28">
        <CareersClient />
      </div>
    </>
  );
}
