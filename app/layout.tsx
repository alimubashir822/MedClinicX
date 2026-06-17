import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

export const metadata: Metadata = {
  title: "Med Clinic X - AI-Powered Healthcare Digital Solutions",
  description: "Transform your healthcare business with next-generation AI agents, advanced patient portals, doctor workflows, and clinic automation systems.",
  keywords: "healthcare AI, AI medical receptionist, patient portal, doctor dashboard, clinic automation, medical website development, HIPAA compliant AI",
  openGraph: {
    title: "Med Clinic X - AI-Powered Healthcare Platform",
    description: "SaaS-based AI-powered digital systems for modern doctors, clinics, and hospitals.",
    url: "https://medclinicx.com",
    siteName: "Med Clinic X",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-brand-bg text-gray-100 min-h-screen flex flex-col">
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
