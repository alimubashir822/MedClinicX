import { Metadata } from "next";
import JobClient from "./JobClient";

export const metadata: Metadata = {
  title: "Service Delivery Manager Jobs | Med Clinic X Careers",
  description: "Join Med Clinic X as a Service Delivery Manager. Lead healthcare technology delivery, client operations, and SaaS implementation for US healthcare.",
  keywords: ["Service Delivery Manager","Service Delivery Manager Jobs USA","Healthcare Service Delivery Manager","IT Service Delivery Manager Healthcare","SaaS Service Delivery Manager","Healthcare Technology Operations Manager","Client Delivery Manager Healthcare","Digital Health Delivery Manager","Healthcare IT Operations Manager","Software Delivery Manager Healthcare","US Healthcare Technology Jobs"],
  alternates: { canonical: "https://medclinicx.com/careers/service-delivery-manager" },
  openGraph: { title: "Service Delivery Manager Jobs | Med Clinic X Careers", description: "Join Med Clinic X as a Service Delivery Manager. Lead healthcare technology delivery, client operations, and SaaS implementation for US healthcare.", url: "https://medclinicx.com/careers/service-delivery-manager", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Service Delivery Manager Job at Med Clinic X" }] },
};

export default function JobPage() {
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://medclinicx.com" },{ "@type": "ListItem", position: 2, name: "Careers", item: "https://medclinicx.com/careers" },{ "@type": "ListItem", position: 3, name: "Service Delivery Manager", item: "https://medclinicx.com/careers/service-delivery-manager" }] };
  const jobPosting = { "@context": "https://schema.org", "@type": "JobPosting", title: "Service Delivery Manager", description: "Oversee the successful delivery, performance, and continuous improvement of healthcare technology services.", datePosted: "2026-06-26", employmentType: "FULL_TIME", hiringOrganization: { "@type": "Organization", name: "Med Clinic X", sameAs: "https://medclinicx.com", logo: "https://medclinicx.com/og-image.png" }, jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Austin", addressRegion: "TX", postalCode: "78701", addressCountry: "US" } }, jobLocationType: "TELECOMMUTE", applicantLocationRequirements: { "@type": "Country", name: "United States" } };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPosting) }} /><JobClient /></>);
}
