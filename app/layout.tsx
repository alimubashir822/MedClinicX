import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://medclinicx.com"),
  applicationName: "Med Clinic X",
  title: {
    default: "Med Clinic X — AI-Powered Healthcare Digital Solutions",
    template: "%s",
  },
  description:
    "Transform your healthcare business with next-generation AI agents, advanced patient portals, doctor workflows, and clinic automation. HIPAA-compliant. Built for doctors, clinics & hospitals.",
  keywords: [
    "healthcare AI",
    "AI medical receptionist",
    "patient portal development",
    "doctor dashboard",
    "clinic automation",
    "medical website development",
    "HIPAA compliant AI",
    "healthcare software company",
    "telemedicine solutions",
    "healthcare SaaS",
  ],
  authors: [{ name: "Med Clinic X", url: "https://medclinicx.com" }],
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Med Clinic X — AI-Powered Healthcare Digital Solutions",
    description:
      "SaaS-based AI-powered digital systems for modern doctors, clinics, and hospitals. Patient portals, AI receptionists, telemedicine & more.",
    url: "https://medclinicx.com",
    siteName: "Med Clinic X",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Med Clinic X — AI-Powered Healthcare Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Med Clinic X — AI-Powered Healthcare Digital Solutions",
    description:
      "AI patient portals, clinical automation, telemedicine & HIPAA-compliant healthcare software for modern medical practices.",
    images: ["/og-image.png"],
    creator: "@medclinicx",
  },
  alternates: {
    canonical: "https://medclinicx.com",
  },
  category: "Healthcare Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://medclinicx.com/#organization",
    name: "Med Clinic X",
    url: "https://medclinicx.com",
    logo: {
      "@type": "ImageObject",
      url: "https://medclinicx.com/og-image.png",
      width: 1200,
      height: 630,
    },
    description:
      "Med Clinic X builds AI-powered healthcare software — patient portals, clinical automation, telemedicine platforms, and HIPAA-compliant websites for doctors and hospitals.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-800-555-6329",
      contactType: "customer support",
      availableLanguage: "English",
    },
    sameAs: [
      "https://linkedin.com/company/medclinicx",
      "https://twitter.com/medclinicx",
    ],
    areaServed: "US",
    foundingDate: "2022",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://medclinicx.com/#website",
    url: "https://medclinicx.com",
    name: "Med Clinic X",
    description: "AI-Powered Healthcare Digital Solutions",
    publisher: { "@id": "https://medclinicx.com/#organization" },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://medclinicx.com/blog?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#0a0f1e" />
        <meta name="color-scheme" content="dark" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="antialiased bg-brand-bg text-gray-100 min-h-screen flex flex-col" suppressHydrationWarning>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FG5681QWE1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FG5681QWE1');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xc8btcpa7b");
          `}
        </Script>

        <Navbar />
        <main className="flex-grow pt-24 md:pt-28">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
