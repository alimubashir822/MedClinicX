import Link from "next/link";
import { Activity, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
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

          {/* Solutions Column */}
          <div>
            <h3 className="text-white font-semibold font-display text-sm tracking-wider uppercase mb-4">Solutions</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
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
                <Link href="/website-development" className="hover:text-brand-cyan transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/demo" className="hover:text-brand-cyan transition-colors">
                  Live Demos
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold font-display text-sm tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-brand-cyan transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-brand-cyan transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-brand-cyan transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-cyan transition-colors">
                  Get In Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Service & Tools */}
          <div>
            <h3 className="text-white font-semibold font-display text-sm tracking-wider uppercase mb-4">Services & Tools</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/website-development" className="hover:text-brand-cyan transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/demo?tab=audit" className="hover:text-brand-cyan transition-colors flex items-center space-x-1">
                  <span>AI Website Audit</span>
                  <ExternalLink className="w-3 h-3 text-brand-cyan" />
                </Link>
              </li>
              <li>
                <Link href="/demo?tab=roi" className="hover:text-brand-cyan transition-colors flex items-center space-x-1">
                  <span>ROI Calculator</span>
                  <ExternalLink className="w-3 h-3 text-brand-cyan" />
                </Link>
              </li>
              <li>
                <Link href="/demo?tab=content" className="hover:text-brand-cyan transition-colors flex items-center space-x-1">
                  <span>AI Content Generator</span>
                  <ExternalLink className="w-3 h-3 text-brand-cyan" />
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
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-brand-bg/50 border border-brand-border rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan w-full"
              />
              <button className="bg-brand-cyan hover:bg-brand-cyan/90 text-brand-bg font-semibold text-xs px-4 py-2 rounded-lg transition-colors">
                Join
              </button>
            </div>
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
            <Link href="/privacy" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
            <Link href="/hipaa" className="hover:text-gray-400 transition-colors">HIPAA Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
