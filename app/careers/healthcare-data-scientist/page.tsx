import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "Healthcare Data Scientist Jobs | Med Clinic X",
  description:
    "Join Med Clinic X as a Healthcare Data Scientist. Build AI models, predictive analytics, and healthcare SaaS intelligence for US healthcare systems.",
  keywords: [
    "Healthcare Data Scientist",
    "Healthcare Data Scientist Jobs",
    "Clinical Data Scientist",
    "Healthcare AI Data Scientist",
    "Healthcare Machine Learning Jobs",
    "Healthcare Analytics Scientist",
    "Healthcare AI Engineer Jobs",
    "Digital Health Data Scientist",
    "Healthcare Predictive Analytics Jobs",
    "US Healthcare Data Science Jobs",
    "Healthcare SaaS AI Roles"
  ],
  alternates: {
    canonical: "https://medclinicx.com/careers/healthcare-data-scientist",
  },
  openGraph: {
    title: "Healthcare Data Scientist Jobs | Med Clinic X",
    description:
      "Join Med Clinic X as a Healthcare Data Scientist. Build AI models, predictive analytics, and healthcare SaaS intelligence for US healthcare systems.",
    url: "https://medclinicx.com/careers/healthcare-data-scientist",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Healthcare Data Scientist Job at Med Clinic X",
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
      { "@type": "ListItem", position: 3, name: "Healthcare Data Scientist", item: "https://medclinicx.com/careers/healthcare-data-scientist" },
    ],
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Healthcare Data Scientist",
    "description": "We are seeking a Healthcare Data Scientist to design and build advanced analytics models, machine learning systems, and AI-driven healthcare solutions.",
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
