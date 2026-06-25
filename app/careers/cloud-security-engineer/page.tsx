import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "Cloud Security Engineer Jobs | Med Clinic X Careers",
  description:
    "Join Med Clinic X as a Cloud Security Engineer. Secure healthcare SaaS, cloud infrastructure, and patient data systems across US healthcare platforms.",
  keywords: [
    "Cloud Security Engineer",
    "Cloud Security Engineer Jobs USA",
    "Healthcare Cloud Security Engineer",
    "AWS Security Engineer Healthcare",
    "Azure Security Engineer Healthcare",
    "DevSecOps Engineer Healthcare",
    "Healthcare Security Engineer Jobs",
    "SaaS Cloud Security Engineer",
    "HIPAA Cloud Security Engineer",
    "Healthcare Infrastructure Security Engineer",
    "Digital Health Security Engineer"
  ],
  alternates: {
    canonical: "https://medclinicx.com/careers/cloud-security-engineer",
  },
  openGraph: {
    title: "Cloud Security Engineer Jobs | Med Clinic X Careers",
    description:
      "Join Med Clinic X as a Cloud Security Engineer. Secure healthcare SaaS, cloud infrastructure, and patient data systems across US healthcare platforms.",
    url: "https://medclinicx.com/careers/cloud-security-engineer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cloud Security Engineer Job at Med Clinic X",
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
      { "@type": "ListItem", position: 3, name: "Cloud Security Engineer", item: "https://medclinicx.com/careers/cloud-security-engineer" },
    ],
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Cloud Security Engineer",
    "description": "We are seeking a Cloud Security Engineer to design, implement, and maintain secure cloud environments for healthcare SaaS platforms and digital health systems.",
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
