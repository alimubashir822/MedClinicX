import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "Chief Medical Information Officer (CMIO) Jobs | Med Clinic X",
  description:
    "Join Med Clinic X as CMIO. Lead healthcare informatics strategy, EHR systems, AI adoption, and digital transformation for US healthcare organizations.",
  keywords: [
    "Chief Medical Information Officer",
    "CMIO Jobs USA",
    "Chief Medical Information Officer Jobs",
    "Healthcare Informatics Executive",
    "Medical Informatics Leadership Roles",
    "Healthcare IT Leadership Jobs",
    "Digital Health Executive Roles",
    "EHR Strategy Leadership",
    "Healthcare Transformation Executive",
    "Clinical Informatics Leadership",
    "Healthcare SaaS Executive Roles"
  ],
  alternates: {
    canonical: "https://medclinicx.com/careers/chief-medical-information-officer",
  },
  openGraph: {
    title: "Chief Medical Information Officer (CMIO) Jobs | Med Clinic X",
    description:
      "Join Med Clinic X as CMIO. Lead healthcare informatics strategy, EHR systems, AI adoption, and digital transformation for US healthcare organizations.",
    url: "https://medclinicx.com/careers/chief-medical-information-officer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chief Medical Information Officer (CMIO) Job at Med Clinic X",
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
      { "@type": "ListItem", position: 3, name: "Chief Medical Information Officer", item: "https://medclinicx.com/careers/chief-medical-information-officer" },
    ],
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Chief Medical Information Officer (CMIO)",
    "description": "We are seeking a visionary Chief Medical Information Officer (CMIO) to lead the clinical informatics strategy and medical technology direction across Med Clinic X products and healthcare solutions.",
    "datePosted": "2026-06-25",
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
