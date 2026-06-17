"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Menu, X, ChevronDown, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  const solutions = [
    { name: "AI Patient Portal Platform", href: "/solutions/ai-patient-portal" },
    { name: "Smart Dental Patient Portal", href: "/solutions/smart-dental-portal" },
    { name: "AI Medical Receptionist System", href: "/solutions/ai-medical-receptionist" },
  ];

  const services = [
    { name: "Healthcare Websites", href: "/services/healthcare-websites" },
    { name: "AI Healthcare Solutions", href: "/services/ai-healthcare-solutions" },
    { name: "Patient Portal Development", href: "/services/patient-portal-development" },
    { name: "Healthcare SaaS Development", href: "/services/healthcare-saas-development" },
    { name: "Telemedicine Solutions", href: "/services/telemedicine-solutions" },
    { name: "Healthcare Automation", href: "/services/healthcare-automation" },
    { name: "Mobile Healthcare Apps", href: "/services/mobile-healthcare-apps" },
    { name: "Healthcare SEO & Growth", href: "/services/healthcare-seo-growth" },
  ];

  const toggleSolutionsDropdown = () => setSolutionsDropdownOpen(!solutionsDropdownOpen);
  const toggleServicesDropdown = () => setServicesDropdownOpen(!servicesDropdownOpen);
  const closeAll = () => {
    setIsOpen(false);
    setSolutionsDropdownOpen(false);
    setServicesDropdownOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8"
    >
      <nav className="max-w-7xl mx-auto glass-panel rounded-2xl px-6 py-3.5 flex items-center justify-between shadow-xl">
        {/* Logo */}
        <Link href="/" onClick={closeAll} className="flex items-center space-x-2 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-cyan to-brand-indigo shadow-md shadow-brand-cyan/20">
            <Activity className="w-5.5 h-5.5 text-white animate-pulse" />
            <div className="absolute inset-0 rounded-xl bg-brand-cyan opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-brand-cyan transition-colors duration-300">
            Med Clinic <span className="text-brand-cyan">X</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Solutions Dropdown */}
          <div 
            className="relative"
            onMouseLeave={() => setSolutionsDropdownOpen(false)}
          >
            <button
              onClick={toggleSolutionsDropdown}
              onMouseEnter={() => {
                setSolutionsDropdownOpen(true);
                setServicesDropdownOpen(false);
              }}
              className="flex items-center space-x-1 font-medium text-sm text-gray-300 hover:text-white transition-colors py-2"
            >
              <span>Solutions</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionsDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Panel */}
            <AnimatePresence>
              {solutionsDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 mt-2 w-64 glass-panel rounded-xl shadow-2xl p-2 z-50 border border-brand-border"
                >
                  {solutions.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeAll}
                      className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-brand-cyan/10 hover:border-l-2 hover:border-brand-cyan transition-all"
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              onClick={toggleServicesDropdown}
              onMouseEnter={() => {
                setServicesDropdownOpen(true);
                setSolutionsDropdownOpen(false);
              }}
              className={`flex items-center space-x-1 font-medium text-sm transition-colors py-2 ${
                pathname?.startsWith("/services") ? "text-brand-cyan font-semibold" : "text-gray-300 hover:text-white"
              }`}
            >
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Panel */}
            <AnimatePresence>
              {servicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 mt-2 w-[520px] glass-panel rounded-xl shadow-2xl p-3 z-50 border border-brand-border grid grid-cols-2 gap-2"
                >
                  {services.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeAll}
                      className="block px-3.5 py-2.5 text-xs font-medium text-gray-300 hover:text-white rounded-lg hover:bg-brand-cyan/10 hover:border-l-2 hover:border-brand-cyan transition-all"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="col-span-2 border-t border-brand-border/60 mt-1 pt-2">
                    <Link
                      href="/services"
                      onClick={closeAll}
                      className="block text-center text-xs font-bold text-brand-cyan hover:text-white transition-colors"
                    >
                      All Services Directory &rarr;
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/website-development"
            onMouseEnter={() => {
              setSolutionsDropdownOpen(false);
              setServicesDropdownOpen(false);
            }}
            className={`font-medium text-sm transition-colors ${
              pathname === "/website-development" ? "text-brand-cyan font-semibold" : "text-gray-300 hover:text-white"
            }`}
          >
            Website Development
          </Link>

          <Link
            href="/blog"
            onMouseEnter={() => {
              setSolutionsDropdownOpen(false);
              setServicesDropdownOpen(false);
            }}
            className={`font-medium text-sm transition-colors ${
              pathname === "/blog" ? "text-brand-cyan font-semibold" : "text-gray-300 hover:text-white"
            }`}
          >
            Blog
          </Link>

          <Link
            href="/about"
            onMouseEnter={() => {
              setSolutionsDropdownOpen(false);
              setServicesDropdownOpen(false);
            }}
            className={`font-medium text-sm transition-colors ${
              pathname === "/about" ? "text-brand-cyan font-semibold" : "text-gray-300 hover:text-white"
            }`}
          >
            About
          </Link>

          <Link
            href="/contact"
            onMouseEnter={() => {
              setSolutionsDropdownOpen(false);
              setServicesDropdownOpen(false);
            }}
            className={`font-medium text-sm transition-colors ${
              pathname === "/contact" ? "text-brand-cyan font-semibold" : "text-gray-300 hover:text-white"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/demo"
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold rounded-xl group bg-gradient-to-br from-brand-cyan to-brand-indigo hover:text-white focus:ring-2 focus:outline-none focus:ring-brand-cyan/50 transition-all"
          >
            <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-[#030712] rounded-[10px] group-hover:bg-opacity-0 text-white flex items-center space-x-1.5">
              <Sparkles className="w-4 h-4 text-brand-cyan group-hover:text-white transition-colors" />
              <span>Explore Demos</span>
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-400 hover:text-white p-2 focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-2 glass-panel rounded-2xl overflow-hidden shadow-2xl border border-brand-border"
          >
            <div className="px-4 py-5 space-y-4">
              <div>
                <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Solutions</p>
                <div className="mt-2 space-y-1">
                  {solutions.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeAll}
                      className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-brand-cyan/10 rounded-lg transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-t border-brand-border my-2" />

              <div>
                <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Services</p>
                <div className="mt-2 space-y-1">
                  <Link
                    href="/services"
                    onClick={closeAll}
                    className="block px-3 py-2 text-sm font-bold text-white hover:text-brand-cyan hover:bg-brand-cyan/10 rounded-lg transition-colors"
                  >
                    All Services Directory &rarr;
                  </Link>
                  {services.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeAll}
                      className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-brand-cyan/10 rounded-lg transition-colors pl-6"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/website-development"
                onClick={closeAll}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-brand-cyan/10 rounded-lg transition-colors"
              >
                Website Development
              </Link>

              <Link
                href="/blog"
                onClick={closeAll}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-brand-cyan/10 rounded-lg transition-colors"
              >
                Blog
              </Link>

              <Link
                href="/about"
                onClick={closeAll}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-brand-cyan/10 rounded-lg transition-colors"
              >
                About
              </Link>

              <Link
                href="/faq"
                onClick={closeAll}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-brand-cyan/10 rounded-lg transition-colors"
              >
                FAQ
              </Link>

              <Link
                href="/contact"
                onClick={closeAll}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-brand-cyan/10 rounded-lg transition-colors"
              >
                Get In Touch
              </Link>

              <div className="pt-2">
                <Link
                  href="/demo"
                  onClick={closeAll}
                  className="w-full text-center block px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-brand-cyan to-brand-indigo rounded-xl shadow-lg shadow-brand-cyan/20 active:scale-[0.98] transition-transform"
                >
                  Explore Demos
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
