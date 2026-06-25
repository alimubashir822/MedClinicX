import { Metadata } from "next";
import JobClient from "./JobClient";
export const metadata: Metadata = {
  title: "Backend Engineer Jobs | Med Clinic X Healthcare Careers",
  description: "Join Med Clinic X as a Backend Engineer. Build scalable APIs, microservices, and healthcare SaaS systems for US digital health platforms.",
  keywords: ["Backend Engineer","Backend Engineer Jobs USA","Healthcare Backend Engineer","API Backend Developer Healthcare","SaaS Backend Engineer Healthcare","Microservices Engineer Healthcare","Clinical Systems Backend Engineer","Java Backend Engineer Healthcare","Node.js Backend Engineer Healthcare","US Healthcare Software Engineer","Digital Health Backend Developer"],
  alternates: { canonical: "https://medclinicx.com/careers/backend-engineer" },
  openGraph: { title: "Backend Engineer Jobs | Med Clinic X Healthcare Careers", description: "Join Med Clinic X as a Backend Engineer. Build scalable APIs, microservices, and healthcare SaaS systems for US digital health platforms.", url: "https://medclinicx.com/careers/backend-engineer", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Backend Engineer Job at Med Clinic X" }] },
};
export default function JobPage() {
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },{ "@type": "ListItem", position: 2, name: "Careers", item: "https://medclinicx.com/careers" },{ "@type": "ListItem", position: 3, name: "Backend Engineer", item: "https://medclinicx.com/careers/backend-engineer" }] };
  const jobPosting = { "@context": "https://schema.org", "@type": "JobPosting", title: "Backend Engineer", description: "Design, develop, and maintain scalable backend services for healthcare SaaS and digital health platforms across the United States.", datePosted: "2026-06-26", employmentType: "FULL_TIME", hiringOrganization: { "@type": "Organization", name: "Med Clinic X", sameAs: "https://medclinicx.com", logo: "https://medclinicx.com/og-image.png" }, jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Austin", addressRegion: "TX", postalCode: "78701", addressCountry: "US" } }, jobLocationType: "TELECOMMUTE", applicantLocationRequirements: { "@type": "Country", name: "United States" } };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPosting) }} /><JobClient /></>);
}