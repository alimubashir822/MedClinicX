import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "IT Service Manager Jobs | Med Clinic X Healthcare Careers",
  description: "Join Med Clinic X as an IT Service Manager. Lead healthcare IT service operations, SaaS support, and infrastructure reliability for US healthcare systems.",
  keywords: [
    "IT Service Manager",
    "IT Service Manager Jobs USA",
    "Healthcare IT Service Manager",
    "IT Service Delivery Manager Healthcare",
    "SaaS IT Service Manager",
    "IT Operations Service Manager Healthcare",
    "Healthcare IT Support Manager",
    "Digital Health IT Service Manager",
    "Cloud Service Manager Healthcare",
    "US Healthcare IT Management Jobs",
    "ITIL Service Manager Healthcare"
  ],
  alternates: { canonical: "https://medclinicx.com/careers/it-service-manager" },
  openGraph: {
    title: "IT Service Manager Jobs | Med Clinic X Healthcare Careers",
    description: "Join Med Clinic X as an IT Service Manager. Lead healthcare IT service operations, SaaS support, and infrastructure reliability for US healthcare systems.",
    url: "https://medclinicx.com/careers/it-service-manager",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "IT Service Manager Job at Med Clinic X" }]
  },
};

export default function JobPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "Careers", item: "https://medclinicx.com/careers" },
      { "@type": "ListItem", position: 3, name: "IT Service Manager", item: "https://medclinicx.com/careers/it-service-manager" }
    ]
  };

  const jobPosting = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "IT Service Manager",
    description: "Oversee IT service delivery, support operations, and system reliability across healthcare SaaS and digital health platforms.",
    datePosted: "2026-06-26",
    employmentType: "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: "Med Clinic X",
      sameAs: "https://medclinicx.com",
      logo: "https://medclinicx.com/og-image.png"
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Austin",
        addressRegion: "TX",
        postalCode: "78701",
        addressCountry: "US"
      }
    },
    jobLocationType: "TELECOMMUTE",
    applicantLocationRequirements: {
      "@type": "Country",
      name: "United States"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPosting) }} />
      <JobClient />
    </>
  );
}
