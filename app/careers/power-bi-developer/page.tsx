import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "Power BI Developer Jobs | Med Clinic X Healthcare",
  description:
    "Join Med Clinic X as a Power BI Developer. Build healthcare dashboards, analytics reports, and data insights for US healthcare SaaS and clinical systems.",
  keywords: [
    "Power BI Developer",
    "Power BI Developer Jobs USA",
    "Healthcare Power BI Developer",
    "BI Developer Healthcare",
    "Healthcare Data Visualization Jobs",
    "Clinical Reporting Developer",
    "Healthcare Analytics Developer",
    "Power BI Healthcare Dashboard Jobs",
    "Medical Data Reporting Analyst",
    "Healthcare BI Analyst Jobs",
    "Digital Health Analytics Developer"
  ],
  alternates: {
    canonical: "https://medclinicx.com/careers/power-bi-developer",
  },
  openGraph: {
    title: "Power BI Developer Jobs | Med Clinic X Healthcare",
    description:
      "Join Med Clinic X as a Power BI Developer. Build healthcare dashboards, analytics reports, and data insights for US healthcare SaaS and clinical systems.",
    url: "https://medclinicx.com/careers/power-bi-developer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Power BI Developer Job at Med Clinic X",
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
      { "@type": "ListItem", position: 3, name: "Power BI Developer", item: "https://medclinicx.com/careers/power-bi-developer" },
    ],
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Power BI Developer",
    "description": "We are seeking a Power BI Developer to design and build interactive dashboards, reports, and data visualization systems for healthcare SaaS and clinical platforms.",
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
        "addressLocality": "San Francisco",
        "addressRegion": "CA",
        "postalCode": "94105",
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
