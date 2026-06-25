import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "ERP Developer Jobs | Med Clinic X Healthcare Careers",
  description: "Join Med Clinic X as an ERP Developer. Build and customize healthcare ERP systems, integrations, and automation for US healthcare organizations.",
  keywords: [
    "ERP Developer",
    "ERP Developer Jobs USA",
    "Healthcare ERP Developer",
    "ERP Software Developer Healthcare",
    "Odoo Developer Healthcare",
    "SAP Healthcare Developer",
    "ERP Integration Engineer Healthcare",
    "Enterprise Systems Developer Healthcare",
    "Healthcare ERP Customization Jobs",
    "US ERP Developer Jobs",
    "Healthcare Automation Developer"
  ],
  alternates: { canonical: "https://medclinicx.com/careers/erp-developer" },
  openGraph: {
    title: "ERP Developer Jobs | Med Clinic X Healthcare Careers",
    description: "Join Med Clinic X as an ERP Developer. Build and customize healthcare ERP systems, integrations, and automation for US healthcare organizations.",
    url: "https://medclinicx.com/careers/erp-developer",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ERP Developer Job at Med Clinic X" }]
  },
};

export default function JobPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "Careers", item: "https://medclinicx.com/careers" },
      { "@type": "ListItem", position: 3, name: "ERP Developer", item: "https://medclinicx.com/careers/erp-developer" }
    ]
  };

  const jobPosting = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "ERP Developer",
    description: "Design, customize, and maintain enterprise resource planning systems for healthcare organizations and internal operations.",
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
