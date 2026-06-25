import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "Technical Product Manager Jobs | Med Clinic X",
  description:
    "Join Med Clinic X as a Technical Product Manager. Lead healthcare SaaS, AI, and digital health product development for US healthcare organizations.",
  keywords: [
    "Technical Product Manager",
    "Technical Product Manager Jobs USA",
    "Healthcare Product Manager Jobs",
    "SaaS Product Manager Healthcare",
    "Digital Health Product Manager",
    "Clinical Product Manager Jobs",
    "Healthcare Technology Product Manager",
    "AI Healthcare Product Manager",
    "Healthcare Platform Product Manager",
    "US Healthcare SaaS Product Jobs",
    "Product Manager Healthcare IT"
  ],
  alternates: {
    canonical: "https://medclinicx.com/careers/technical-product-manager",
  },
  openGraph: {
    title: "Technical Product Manager Jobs | Med Clinic X",
    description:
      "Join Med Clinic X as a Technical Product Manager. Lead healthcare SaaS, AI, and digital health product development for US healthcare organizations.",
    url: "https://medclinicx.com/careers/technical-product-manager",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Technical Product Manager Job at Med Clinic X",
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
      { "@type": "ListItem", position: 3, name: "Technical Product Manager", item: "https://medclinicx.com/careers/technical-product-manager" },
    ],
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Technical Product Manager",
    "description": "We are seeking a Technical Product Manager to lead the strategy, development, and execution of healthcare SaaS and AI-powered digital health products.",
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
