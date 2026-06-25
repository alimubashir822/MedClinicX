import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "Cybersecurity Engineer Jobs | Med Clinic X Healthcare",
  description:
    "Join Med Clinic X as a Cybersecurity Engineer. Secure healthcare SaaS, protect patient data, and build compliant cloud security systems in the USA.",
  keywords: [
    "Cybersecurity Engineer",
    "Cybersecurity Engineer Jobs USA",
    "Healthcare Cybersecurity Engineer",
    "Cloud Security Engineer Healthcare",
    "Application Security Engineer Healthcare",
    "Healthcare Security Engineer Jobs",
    "SOC Engineer Healthcare",
    "DevSecOps Engineer Healthcare",
    "HIPAA Security Engineer Jobs",
    "Healthcare Data Security Engineer",
    "Digital Health Cybersecurity Jobs"
  ],
  alternates: {
    canonical: "https://medclinicx.com/careers/cybersecurity-engineer",
  },
  openGraph: {
    title: "Cybersecurity Engineer Jobs | Med Clinic X Healthcare",
    description:
      "Join Med Clinic X as a Cybersecurity Engineer. Secure healthcare SaaS, protect patient data, and build compliant cloud security systems in the USA.",
    url: "https://medclinicx.com/careers/cybersecurity-engineer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cybersecurity Engineer Job at Med Clinic X",
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
      { "@type": "ListItem", position: 3, name: "Cybersecurity Engineer", item: "https://medclinicx.com/careers/cybersecurity-engineer" },
    ],
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Cybersecurity Engineer",
    "description": "We are seeking a Cybersecurity Engineer to design, implement, and maintain security systems that protect healthcare SaaS platforms and sensitive patient data.",
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
