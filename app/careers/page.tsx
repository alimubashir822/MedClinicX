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

  const hiringOrg = {
    "@type": "Organization",
    "name": "Med Clinic X",
    "sameAs": "https://medclinicx.com",
    "logo": "https://medclinicx.com/og-image.png"
  };

  const jobLocation = {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94105",
      "addressCountry": "US"
    }
  };

  const jobListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Med Clinic X Open Job Postings",
    "description": "Complete directory of active career opportunities at Med Clinic X.",
    "url": "https://medclinicx.com/careers",
    "numberOfItems": 4,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "JobPosting",
          "title": "Healthcare Data Analyst",
          "name": "Healthcare Data Analyst",
          "url": "https://medclinicx.com/careers/healthcare-data-analyst",
          "description": "Transform raw healthcare datasets into actionable clinical and operational insights. Support analytics requirements for healthcare SaaS platforms and prepare datasets for AI solutions.",
          "datePosted": "2026-06-25",
          "employmentType": "FULL_TIME",
          "jobLocationType": "TELECOMMUTE",
          "hiringOrganization": hiringOrg,
          "jobLocation": jobLocation,
          "applicantLocationRequirements": { "@type": "Country", "name": "United States" }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "JobPosting",
          "title": "Clinical Informatics Specialist",
          "name": "Clinical Informatics Specialist",
          "url": "https://medclinicx.com/careers/clinical-informatics-specialist",
          "description": "Optimize healthcare data mapping, EHR/EMR workflows, and systems interoperability. Work at the intersection of clinical operations and engineering.",
          "datePosted": "2026-06-25",
          "employmentType": "FULL_TIME",
          "jobLocationType": "TELECOMMUTE",
          "hiringOrganization": hiringOrg,
          "jobLocation": jobLocation,
          "applicantLocationRequirements": { "@type": "Country", "name": "United States" }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "JobPosting",
          "title": "Healthcare Operations Manager",
          "name": "Healthcare Operations Manager",
          "url": "https://medclinicx.com/careers/healthcare-operations-manager",
          "description": "Optimize daily healthcare SaaS and digital health operations. Map clinical and administrative workflows, monitor operational KPIs, and guide systems onboarding for US clinics and hospitals.",
          "datePosted": "2026-06-25",
          "employmentType": "FULL_TIME",
          "jobLocationType": "TELECOMMUTE",
          "hiringOrganization": hiringOrg,
          "jobLocation": jobLocation,
          "applicantLocationRequirements": { "@type": "Country", "name": "United States" }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "JobPosting",
          "title": "Chief Medical Information Officer (CMIO)",
          "name": "Chief Medical Information Officer (CMIO)",
          "url": "https://medclinicx.com/careers/chief-medical-information-officer",
          "description": "Lead clinical informatics strategy, guide medical AI safety governance, optimize EHR integrations, and advise hospital C-suite stakeholders on enterprise digital health transformation.",
          "datePosted": "2026-06-25",
          "employmentType": "FULL_TIME",
          "jobLocationType": "TELECOMMUTE",
          "hiringOrganization": hiringOrg,
          "jobLocation": jobLocation,
          "applicantLocationRequirements": { "@type": "Country", "name": "United States" }
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
