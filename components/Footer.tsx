"use client";

import { useState } from "react";
import Link from "next/link";
import { Activity, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "Footer Newsletter" }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Newsletter submission error:", err);
      setStatus("error");
    }
  };
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-border bg-brand-bg/80 relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-cyan to-brand-indigo">
                <Activity className="w-4.5 h-4.5 text-white" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-white">
                Med Clinic <span className="text-brand-cyan">X</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Empowering healthcare clinics and providers with next-generation AI agents, clinical automation systems, and high-performance patient portals.
            </p>
            <div className="space-y-2.5 pt-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4.5 h-4.5 text-brand-cyan" />
                <span>+1 (800) 555-MDCX</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4.5 h-4.5 text-brand-cyan" />
                <span>support@medclinicx.com</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <MapPin className="w-4.5 h-4.5 text-brand-cyan" />
                <span>San Francisco, CA (HQ)</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-semibold font-display text-sm tracking-wider uppercase mb-4">Services</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/services" style={{ color: "#06b6d4" }} className="font-semibold hover:text-white transition-colors">
                  All Services Hub &rarr;
                </Link>
              </li>
              <li>
                <Link href="/services/healthcare-websites" className="hover:text-brand-cyan transition-colors">
                  Healthcare Websites
                </Link>
              </li>
              <li>
                <Link href="/services/ai-healthcare-solutions" className="hover:text-brand-cyan transition-colors">
                  AI Healthcare Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/patient-portal-development" className="hover:text-brand-cyan transition-colors">
                  Patient Portal Development
                </Link>
              </li>
              <li>
                <Link href="/services/healthcare-saas-development" className="hover:text-brand-cyan transition-colors">
                  Healthcare SaaS Development
                </Link>
              </li>
              <li>
                <Link href="/services/telemedicine-solutions" className="hover:text-brand-cyan transition-colors">
                  Telemedicine Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/healthcare-automation" className="hover:text-brand-cyan transition-colors">
                  Healthcare Automation
                </Link>
              </li>
              <li>
                <Link href="/services" style={{ color: "#06b6d4" }} className="font-bold hover:text-white transition-colors">
                  More +
                </Link>
              </li>
            </ul>
          </div>

          {/* Calculators Column */}
          <div>
            <h3 className="text-white font-semibold font-display text-sm tracking-wider uppercase mb-4">Calculators</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/calculator" style={{ color: "#06b6d4" }} className="font-semibold hover:text-white transition-colors">
                  All Calculators Hub &rarr;
                </Link>
              </li>
              <li>
                <Link href="/calculator/a1c-calculator" className="hover:text-brand-cyan transition-colors">
                  A1C Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculator/water-calculator" className="hover:text-brand-cyan transition-colors">
                  Water Intake Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculator/lean-body-mass-calculator" className="hover:text-brand-cyan transition-colors">
                  Lean Body Mass Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculator/qtc-calculator" className="hover:text-brand-cyan transition-colors">
                  QTc Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculator/anion-gap-calculator" className="hover:text-brand-cyan transition-colors">
                  Anion Gap Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculator/dental-implant-cost-calculator" className="hover:text-brand-cyan transition-colors">
                  Dental Implant Cost Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculator" style={{ color: "#06b6d4" }} className="font-bold hover:text-white transition-colors">
                  More+
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-white font-semibold font-display text-sm tracking-wider uppercase mb-4">Solutions</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/solutions" style={{ color: "#06b6d4" }} className="font-semibold hover:text-white transition-colors">
                  All Solutions Hub &rarr;
                </Link>
              </li>
              <li>
                <Link href="/solutions/ai-patient-portal" className="hover:text-brand-cyan transition-colors">
                  AI Patient Portal Platform
                </Link>
              </li>
              <li>
                <Link href="/solutions/smart-dental-portal" className="hover:text-brand-cyan transition-colors">
                  Smart Dental Patient Portal
                </Link>
              </li>
              <li>
                <Link href="/solutions/ai-medical-receptionist" className="hover:text-brand-cyan transition-colors">
                  AI Medical Receptionist System
                </Link>
              </li>
              <li>
                <Link href="/solutions/ai-healthcare-navigator" className="hover:text-brand-cyan transition-colors">
                  AI Healthcare Navigator
                </Link>
              </li>
              <li>
                <Link href="/solutions/virtual-clinic-os" className="hover:text-brand-cyan transition-colors">
                  Virtual Clinic OS
                </Link>
              </li>
              <li>
                <Link href="/solutions/carematch-ai" className="hover:text-brand-cyan transition-colors">
                  CareMatch AI Marketplace
                </Link>
              </li>
              <li>
                <Link href="/solutions" style={{ color: "#06b6d4" }} className="font-bold hover:text-white transition-colors">
                  More +
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold font-display text-sm tracking-wider uppercase mb-1">Stay Connected</h3>
            <p className="text-xs text-gray-400 leading-normal">
              Subscribe to our weekly brief on AI developments in medicine and healthcare business optimization.
            </p>
            {status === "success" ? (
              <div className="bg-brand-cyan/10 border border-brand-cyan/35 text-brand-cyan text-xs rounded-lg p-3 text-center font-medium animate-pulse">
                ✓ Subscribed! Welcome to our brief.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex space-x-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    className="bg-brand-bg/50 border border-brand-border rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan w-full"
                    disabled={status === "loading"}
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="bg-brand-cyan hover:bg-brand-cyan/90 text-brand-bg font-semibold text-xs px-4 py-2 rounded-lg transition-colors disabled:opacity-50 whitespace-nowrap cursor-pointer"
                  >
                    {status === "loading" ? "Joining..." : "Join"}
                  </button>
                </div>
                {status === "error" && (
                  <p className="text-[10px] text-red-400">Failed to subscribe. Please try again.</p>
                )}
              </form>
            )}
            <div className="pt-2">
              <Link href="/blog" className="text-xs text-brand-cyan hover:underline font-semibold">
                Read our Healthcare AI Blog &rarr;
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <div>
            &copy; {currentYear} Med Clinic X Inc. All rights reserved. Built for future healthcare systems.
          </div>
          <div className="flex space-x-6">
            <Link href="/faq" className="hover:text-gray-400 transition-colors">FAQ</Link>
            <Link href="/privacy" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
            <Link href="/hipaa" className="hover:text-gray-400 transition-colors">HIPAA Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
