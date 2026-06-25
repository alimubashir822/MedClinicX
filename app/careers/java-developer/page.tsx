import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "Java Developer Jobs | Med Clinic X Healthcare Careers",
  description:
    "Join Med Clinic X as a Java Developer. Build scalable healthcare SaaS, APIs, and backend systems for US healthcare platforms and digital health products.",
  keywords: [
    "Java Developer",
    "Java Developer Jobs USA",
    "Healthcare Java Developer",
    "Backend Java Developer Healthcare",
    "Spring Boot Developer Healthcare",
    "SaaS Java Developer Healthcare",
    "API Developer Healthcare Java",
    "Microservices Developer Healthcare",
    "Clinical Systems Java Developer",
    "Healthcare Backend Engineer Java",
    "US Healthcare Software Engineer"
  ],
  alternates: {
    canonical: "https://medclinicx.com/careers/java-developer",
  },
  openGraph: {
    title: "Java Developer Jobs | Med Clinic X Healthcare Careers",
    description:
      "Join Med Clinic X as a Java Developer. Build scalable healthcare SaaS, APIs, and backend systems for US healthcare platforms and digital health products.",
    url: "https://medclinicx.com/careers/java-developer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Java Developer Job at Med Clinic X",
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
      { "@type": "ListItem", position: 3, name: "Java Developer", item: "https://medclinicx.com/careers/java-developer" },
    ],
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Java Developer",
    "description": "We are seeking a Java Developer to design, develop, and maintain backend services and APIs for healthcare SaaS and digital health platforms.",
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
