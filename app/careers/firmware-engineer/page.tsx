import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "Firmware Engineer Jobs | Med Clinic X Healthcare Careers",
  description:
    "Join Med Clinic X as a Firmware Engineer. Build secure embedded firmware for healthcare devices, IoT systems, and connected medical platforms in the USA.",
  keywords: [
    "Firmware Engineer",
    "Firmware Engineer Jobs USA",
    "Healthcare Firmware Engineer",
    "Embedded Firmware Developer Healthcare",
    "Medical Device Firmware Engineer",
    "IoT Firmware Engineer Healthcare",
    "Healthcare Embedded Systems Jobs",
    "Real-Time Firmware Engineer",
    "Digital Health Device Firmware Jobs",
    "Medical IoT Software Engineer",
    "US Healthcare Embedded Engineer"
  ],
  alternates: {
    canonical: "https://medclinicx.com/careers/firmware-engineer",
  },
  openGraph: {
    title: "Firmware Engineer Jobs | Med Clinic X Healthcare Careers",
    description:
      "Join Med Clinic X as a Firmware Engineer. Build secure embedded firmware for healthcare devices, IoT systems, and connected medical platforms in the USA.",
    url: "https://medclinicx.com/careers/firmware-engineer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Firmware Engineer Job at Med Clinic X",
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
      { "@type": "ListItem", position: 3, name: "Firmware Engineer", item: "https://medclinicx.com/careers/firmware-engineer" },
    ],
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Firmware Engineer",
    "description": "We are seeking a Firmware Engineer to design, develop, and optimize firmware for healthcare devices and IoT-enabled medical systems.",
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
        "addressLocality": "Austin",
        "addressRegion": "TX",
        "postalCode": "78701",
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
