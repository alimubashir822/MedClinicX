import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "Technical Architect Jobs | Med Clinic X Careers",
  description: "Join Med Clinic X as a Technical Architect. Design scalable healthcare SaaS architectures, cloud systems, and digital health platforms in the USA.",
  keywords: ["Technical Architect","Technical Architect Jobs USA","Healthcare Technical Architect","Solutions Architect Healthcare","Cloud Architect Healthcare","Software Architect Healthcare SaaS","Digital Health Architect Jobs","Enterprise Architect Healthcare IT","Healthcare Platform Architect","SaaS Architecture Engineer","US Healthcare Technology Architect"],
  alternates: { canonical: "https://medclinicx.com/careers/technical-architect" },
  openGraph: { title: "Technical Architect Jobs | Med Clinic X Careers", description: "Join Med Clinic X as a Technical Architect. Design scalable healthcare SaaS architectures, cloud systems, and digital health platforms in the USA.", url: "https://medclinicx.com/careers/technical-architect", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Technical Architect Job at Med Clinic X" }] },
};

export default function JobPage() {
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },{ "@type": "ListItem", position: 2, name: "Careers", item: "https://medclinicx.com/careers" },{ "@type": "ListItem", position: 3, name: "Technical Architect", item: "https://medclinicx.com/careers/technical-architect" }] };
  const jobPosting = { "@context": "https://schema.org", "@type": "JobPosting", title: "Technical Architect", description: "Design and guide the architecture of healthcare SaaS platforms, cloud systems, and enterprise digital health solutions.", datePosted: "2026-06-26", employmentType: "FULL_TIME", hiringOrganization: { "@type": "Organization", name: "Med Clinic X", sameAs: "https://medclinicx.com", logo: "https://medclinicx.com/og-image.png" }, jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Austin", addressRegion: "TX", postalCode: "78701", addressCountry: "US" } }, jobLocationType: "TELECOMMUTE", applicantLocationRequirements: { "@type": "Country", name: "United States" } };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPosting) }} /><JobClient /></>);
}
