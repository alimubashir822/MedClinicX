import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "Business Intelligence Developer Jobs | Med Clinic X",
  description:
    "Join Med Clinic X as a Business Intelligence Developer. Build healthcare dashboards, data models, and insights for US SaaS and clinical systems.",
  keywords: [
    "Business Intelligence Developer",
    "BI Developer Jobs USA",
    "Healthcare BI Developer",
    "Business Intelligence Analyst Healthcare",
    "Healthcare Data Warehouse Developer",
    "Power BI Developer Healthcare",
    "Clinical BI Developer Jobs",
    "Healthcare Analytics Developer",
    "SaaS BI Developer Healthcare",
    "Medical Data Intelligence Jobs",
    "Digital Health BI Engineer"
  ],
  alternates: {
    canonical: "https://medclinicx.com/careers/business-intelligence-developer",
  },
  openGraph: {
    title: "Business Intelligence Developer Jobs | Med Clinic X",
    description:
      "Join Med Clinic X as a Business Intelligence Developer. Build healthcare dashboards, data models, and insights for US SaaS and clinical systems.",
    url: "https://medclinicx.com/careers/business-intelligence-developer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Business Intelligence Developer Job at Med Clinic X",
      },
    ],
  },
};

export default function JobPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "Careers", item: "https://medclinicx.com/careers" },
      { "@type": "ListItem", position: 3, name: "Business Intelligence Developer", item: "https://medclinicx.com/careers/business-intelligence-developer" },
    ],
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Business Intelligence Developer",
    "description": "We are seeking a Business Intelligence Developer to design and build data models, dashboards, and reporting systems for healthcare SaaS and clinical platforms.",
    "datePosted": "2026-06-26",
    "employmentType": "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Med Clinic X",
      "sameAs": "https://medclinicx.com",
      "logo": "https://medclinicx.com/og-image.png"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Austin",
        "addressRegion": "TX",
        "postalCode": "78701",
        "addressCountry": "US"
      }
    },
    "jobLocationType": "TELECOMMUTE",
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "United States"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />
      <JobClient />
    </>
  );
}
