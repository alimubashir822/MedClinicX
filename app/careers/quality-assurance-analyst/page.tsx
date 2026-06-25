import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "Quality Assurance Analyst Jobs | Med Clinic X Careers",
  description:
    "Join Med Clinic X as a QA Analyst. Test healthcare SaaS, patient portals, and AI systems to ensure quality, reliability, and compliance in US healthcare.",
  keywords: [
    "Quality Assurance Analyst",
    "QA Analyst Jobs USA",
    "Healthcare QA Analyst",
    "Software QA Analyst Healthcare",
    "QA Engineer Healthcare SaaS",
    "Clinical Software Tester Jobs",
    "Healthcare Testing Analyst",
    "Manual QA Engineer Healthcare",
    "Automation QA Healthcare",
    "Digital Health QA Jobs",
    "US Healthcare Software Tester"
  ],
  alternates: {
    canonical: "https://medclinicx.com/careers/quality-assurance-analyst",
  },
  openGraph: {
    title: "Quality Assurance Analyst Jobs | Med Clinic X Careers",
    description:
      "Join Med Clinic X as a QA Analyst. Test healthcare SaaS, patient portals, and AI systems to ensure quality, reliability, and compliance in US healthcare.",
    url: "https://medclinicx.com/careers/quality-assurance-analyst",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Quality Assurance Analyst Job at Med Clinic X",
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
      { "@type": "ListItem", position: 3, name: "Quality Assurance Analyst", item: "https://medclinicx.com/careers/quality-assurance-analyst" },
    ],
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Quality Assurance Analyst",
    "description": "We are seeking a Quality Assurance Analyst to test and validate healthcare SaaS applications, patient portals, and AI-driven digital health systems.",
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
        "addressLocality": "Dallas",
        "addressRegion": "TX",
        "postalCode": "75201",
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
