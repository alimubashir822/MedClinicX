import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "Customer Success Engineer Jobs | Med Clinic X Careers",
  description: "Join Med Clinic X as a Customer Success Engineer. Support healthcare SaaS clients, integrations, and technical solutions for US healthcare organizations.",
  keywords: [
    "Customer Success Engineer",
    "Customer Success Engineer Jobs USA",
    "Healthcare Customer Success Engineer",
    "Technical Customer Success Manager Healthcare",
    "SaaS Customer Success Engineer",
    "Healthcare SaaS Support Engineer",
    "Client Success Engineer Jobs",
    "Digital Health Customer Success",
    "Healthcare Implementation Engineer",
    "Technical Account Success Manager",
    "US Healthcare Technology Jobs"
  ],
  alternates: { canonical: "https://medclinicx.com/careers/customer-success-engineer" },
  openGraph: {
    title: "Customer Success Engineer Jobs | Med Clinic X Careers",
    description: "Join Med Clinic X as a Customer Success Engineer. Support healthcare SaaS clients, integrations, and technical solutions for US healthcare organizations.",
    url: "https://medclinicx.com/careers/customer-success-engineer",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Customer Success Engineer Job at Med Clinic X" }]
  },
};

export default function JobPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },
      { "@type": "ListItem", position: 2, name: "Careers", item: "https://medclinicx.com/careers" },
      { "@type": "ListItem", position: 3, name: "Customer Success Engineer", item: "https://medclinicx.com/careers/customer-success-engineer" }
    ]
  };

  const jobPosting = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Customer Success Engineer",
    description: "Support healthcare clients through technical onboarding, platform adoption, troubleshooting, and ongoing success.",
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
