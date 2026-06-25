import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "DevOps Engineer Jobs | Med Clinic X Healthcare Careers",
  description:
    "Join Med Clinic X as a DevOps Engineer. Build CI/CD pipelines, cloud infrastructure, and scalable healthcare SaaS systems for US healthcare organizations.",
  keywords: [
    "DevOps Engineer",
    "DevOps Engineer Jobs USA",
    "Healthcare DevOps Engineer",
    "AWS DevOps Engineer Healthcare",
    "Cloud DevOps Engineer Healthcare",
    "Site Reliability Engineer Healthcare",
    "Healthcare SaaS DevOps Jobs",
    "CI/CD Engineer Healthcare",
    "Kubernetes Engineer Healthcare",
    "Infrastructure Engineer Healthcare",
    "Digital Health DevOps Jobs"
  ],
  alternates: {
    canonical: "https://medclinicx.com/careers/devops-engineer",
  },
  openGraph: {
    title: "DevOps Engineer Jobs | Med Clinic X Healthcare Careers",
    description:
      "Join Med Clinic X as a DevOps Engineer. Build CI/CD pipelines, cloud infrastructure, and scalable healthcare SaaS systems for US healthcare organizations.",
    url: "https://medclinicx.com/careers/devops-engineer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DevOps Engineer Job at Med Clinic X",
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
      { "@type": "ListItem", position: 3, name: "DevOps Engineer", item: "https://medclinicx.com/careers/devops-engineer" },
    ],
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "DevOps Engineer",
    "description": "We are seeking a DevOps Engineer to design, build, and maintain scalable infrastructure and automation systems for healthcare SaaS and digital health platforms.",
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
