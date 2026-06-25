import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "IT Operations Manager Jobs | Med Clinic X Careers",
  description: "Join Med Clinic X as an IT Operations Manager. Lead healthcare IT operations, cloud systems, and technology infrastructure for US healthcare platforms.",
  keywords: ["IT Operations Manager","IT Operations Manager Jobs USA","Healthcare IT Operations Manager","Technology Operations Manager Healthcare","IT Infrastructure Manager Healthcare","Healthcare Systems Operations Manager","SaaS Operations Manager","Cloud Operations Manager Healthcare","Digital Health Operations Jobs","Healthcare IT Leadership Jobs","US Healthcare Technology Operations"],
  alternates: { canonical: "https://medclinicx.com/careers/it-operations-manager" },
  openGraph: { title: "IT Operations Manager Jobs | Med Clinic X Careers", description: "Join Med Clinic X as an IT Operations Manager. Lead healthcare IT operations, cloud systems, and technology infrastructure for US healthcare platforms.", url: "https://medclinicx.com/careers/it-operations-manager", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "IT Operations Manager Job at Med Clinic X" }] },
};

export default function JobPage() {
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },{ "@type": "ListItem", position: 2, name: "Careers", item: "https://medclinicx.com/careers" },{ "@type": "ListItem", position: 3, name: "IT Operations Manager", item: "https://medclinicx.com/careers/it-operations-manager" }] };
  const jobPosting = { "@context": "https://schema.org", "@type": "JobPosting", title: "IT Operations Manager", description: "Lead and optimize technology operations, infrastructure management, and IT service delivery across Med Clinic X platforms.", datePosted: "2026-06-26", employmentType: "FULL_TIME", hiringOrganization: { "@type": "Organization", name: "Med Clinic X", sameAs: "https://medclinicx.com", logo: "https://medclinicx.com/og-image.png" }, jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Austin", addressRegion: "TX", postalCode: "78701", addressCountry: "US" } }, jobLocationType: "TELECOMMUTE", applicantLocationRequirements: { "@type": "Country", name: "United States" } };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPosting) }} /><JobClient /></>);
}
