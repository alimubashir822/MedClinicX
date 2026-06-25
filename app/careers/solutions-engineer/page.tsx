import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "Solutions Engineer Jobs | Med Clinic X Healthcare Careers",
  description:
    "Join Med Clinic X as a Solutions Engineer. Design healthcare SaaS integrations, APIs, and digital health solutions for US healthcare organizations.",
  keywords: [
    "Solutions Engineer",
    "Solutions Engineer Jobs USA",
    "Healthcare Solutions Engineer",
    "SaaS Solutions Engineer Healthcare",
    "Technical Solutions Engineer Healthcare",
    "Healthcare Integration Engineer Jobs",
    "API Solutions Engineer Healthcare",
    "Digital Health Solutions Engineer",
    "Healthcare Implementation Engineer",
    "Clinical Systems Solutions Engineer",
    "US Healthcare SaaS Engineer"
  ],
  alternates: {
    canonical: "https://medclinicx.com/careers/solutions-engineer",
  },
  openGraph: {
    title: "Solutions Engineer Jobs | Med Clinic X Healthcare Careers",
    description:
      "Join Med Clinic X as a Solutions Engineer. Design healthcare SaaS integrations, APIs, and digital health solutions for US healthcare organizations.",
    url: "https://medclinicx.com/careers/solutions-engineer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Solutions Engineer Job at Med Clinic X",
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
      { "@type": "ListItem", position: 3, name: "Solutions Engineer", item: "https://medclinicx.com/careers/solutions-engineer" },
    ],
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Solutions Engineer",
    "description": "We are seeking a Solutions Engineer to design, implement, and support technical solutions for healthcare SaaS platforms and digital health systems.",
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
