import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "Medical Informatics Specialist Jobs | Med Clinic X",
  description:
    "Join Med Clinic X as a Medical Informatics Specialist. Improve clinical systems, EHR workflows, and healthcare data intelligence across US healthcare.",
  keywords: [
    "Medical Informatics Specialist",
    "Medical Informatics Specialist Jobs",
    "Healthcare Informatics Specialist",
    "Clinical Informatics Jobs USA",
    "Health Informatics Analyst",
    "EHR Informatics Specialist",
    "Healthcare IT Informatics Roles",
    "Digital Health Informatics Careers",
    "Clinical Data Informatics Jobs",
    "Healthcare Systems Informatics",
    "US Healthcare Informatics Jobs"
  ],
  alternates: {
    canonical: "https://medclinicx.com/careers/medical-informatics-specialist",
  },
  openGraph: {
    title: "Medical Informatics Specialist Jobs | Med Clinic X",
    description:
      "Join Med Clinic X as a Medical Informatics Specialist. Improve clinical systems, EHR workflows, and healthcare data intelligence across US healthcare.",
    url: "https://medclinicx.com/careers/medical-informatics-specialist",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Medical Informatics Specialist Job at Med Clinic X",
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
      { "@type": "ListItem", position: 3, name: "Medical Informatics Specialist", item: "https://medclinicx.com/careers/medical-informatics-specialist" },
    ],
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Medical Informatics Specialist",
    "description": "We are seeking a Medical Informatics Specialist to support the design, implementation, and optimization of healthcare information systems across digital health platforms.",
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
