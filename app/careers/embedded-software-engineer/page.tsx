import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "Embedded Software Engineer Jobs | Med Clinic X",
  description:
    "Join Med Clinic X as an Embedded Software Engineer. Build secure healthcare devices, IoT systems, and connected medical software for US healthcare.",
  keywords: [
    "Embedded Software Engineer",
    "Embedded Software Engineer Jobs USA",
    "Healthcare Embedded Systems Engineer",
    "Medical Device Software Engineer",
    "IoT Healthcare Engineer Jobs",
    "Firmware Engineer Healthcare Devices",
    "Healthcare Systems Engineer Embedded",
    "Real-Time Systems Engineer Healthcare",
    "Digital Health Device Engineer",
    "Medical IoT Software Engineer",
    "US Healthcare Embedded Engineering Jobs"
  ],
  alternates: {
    canonical: "https://medclinicx.com/careers/embedded-software-engineer",
  },
  openGraph: {
    title: "Embedded Software Engineer Jobs | Med Clinic X",
    description:
      "Join Med Clinic X as an Embedded Software Engineer. Build secure healthcare devices, IoT systems, and connected medical software for US healthcare.",
    url: "https://medclinicx.com/careers/embedded-software-engineer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Embedded Software Engineer Job at Med Clinic X",
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
      { "@type": "ListItem", position: 3, name: "Embedded Software Engineer", item: "https://medclinicx.com/careers/embedded-software-engineer" },
    ],
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Embedded Software Engineer",
    "description": "We are seeking an Embedded Software Engineer to design and develop firmware and embedded systems for healthcare-related devices and connected digital health solutions.",
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
