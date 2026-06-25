import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "Integration Engineer Jobs | Med Clinic X Healthcare Careers",
  description: "Join Med Clinic X as an Integration Engineer. Build healthcare APIs, EHR integrations, and scalable data exchange systems for US healthcare platforms.",
  keywords: ["Integration Engineer","Integration Engineer Jobs USA","Healthcare Integration Engineer","API Integration Engineer Healthcare","EHR Integration Engineer Jobs","Healthcare Systems Integration Specialist","SaaS Integration Engineer Healthcare","HL7 FHIR Integration Engineer","Digital Health Integration Engineer","US Healthcare API Engineer","Clinical Systems Integration Jobs"],
  alternates: { canonical: "https://medclinicx.com/careers/integration-engineer" },
  openGraph: { title: "Integration Engineer Jobs | Med Clinic X Healthcare Careers", description: "Join Med Clinic X as an Integration Engineer. Build healthcare APIs, EHR integrations, and scalable data exchange systems for US healthcare platforms.", url: "https://medclinicx.com/careers/integration-engineer", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Integration Engineer Job at Med Clinic X" }] },
};

export default function JobPage() {
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },{ "@type": "ListItem", position: 2, name: "Careers", item: "https://medclinicx.com/careers" },{ "@type": "ListItem", position: 3, name: "Integration Engineer", item: "https://medclinicx.com/careers/integration-engineer" }] };
  const jobPosting = { "@context": "https://schema.org", "@type": "JobPosting", title: "Integration Engineer", description: "Design, build, and maintain integrations between healthcare SaaS platforms, EHR/EMR systems, APIs, and third-party healthcare tools.", datePosted: "2026-06-26", employmentType: "FULL_TIME", hiringOrganization: { "@type": "Organization", name: "Med Clinic X", sameAs: "https://medclinicx.com", logo: "https://medclinicx.com/og-image.png" }, jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Austin", addressRegion: "TX", postalCode: "78701", addressCountry: "US" } }, jobLocationType: "TELECOMMUTE", applicantLocationRequirements: { "@type": "Country", name: "United States" } };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPosting) }} /><JobClient /></>);
}
