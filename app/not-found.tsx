"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Search, Stethoscope, ChevronRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-[75vh] flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background glowing decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-brand-cyan/10 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-brand-indigo/10 rounded-full blur-[100px] -z-10 animate-pulse-slow" />

      <div className="max-w-xl w-full text-center relative z-10">
        {/* Animated Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan mb-8 relative group"
        >
          {/* Pulsing ring */}
          <div className="absolute inset-0 rounded-3xl bg-brand-cyan/20 animate-ping opacity-25 -z-10" />
          <Stethoscope className="w-12 h-12 group-hover:rotate-12 transition-transform duration-300" />
        </motion.div>

        {/* 404 Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <span className="text-[10px] font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-3 py-1.5 rounded-full border border-brand-cyan/15">
            Diagnostic Code: 404
          </span>
          <h1 className="font-display font-black text-7xl sm:text-9xl text-white mt-4 tracking-tight">
            4<span className="text-gradient-cyan-indigo">0</span>4
          </h1>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mt-4">
            System Error: Page Offline
          </h2>
          <p className="text-sm text-gray-400 mt-4 max-w-md mx-auto leading-relaxed">
            The resource you are looking for has been moved, archived, or is temporarily out of service. We&apos;ve run a system check, and this route is not registered.
          </p>
        </motion.div>

        {/* ECG Line Decoration */}
        <div className="w-48 h-12 mx-auto my-8 opacity-45 relative flex items-center justify-center">
          <svg className="w-full h-full stroke-brand-cyan fill-none" viewBox="0 0 100 30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M 0 15 L 20 15 L 30 5 L 35 25 L 40 15 L 45 15 L 50 20 L 52 10 L 55 15 L 100 15" />
          </svg>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 bg-brand-indigo hover:bg-brand-indigo/90 text-white font-semibold rounded-xl transition-all shadow-md shadow-brand-indigo/15 hover:shadow-brand-indigo/25 hover:-translate-y-0.5 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Go Back Home</span>
          </Link>
          <Link
            href="/blog"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 glass-panel glass-panel-hover text-white font-semibold rounded-xl hover:-translate-y-0.5 cursor-pointer"
          >
            <Search className="w-4 h-4 text-brand-cyan" />
            <span>Search Articles</span>
          </Link>
        </motion.div>

        {/* Popular pages links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12 pt-8 border-t border-brand-border/40 text-xs text-gray-500"
        >
          <p className="mb-3">Looking for something else? Try these popular channels:</p>
          <div className="flex flex-wrap gap-4 justify-center items-center text-gray-400">
            <Link href="/services" className="hover:text-brand-cyan transition-colors flex items-center">
              Services <ChevronRight className="w-3 h-3 ml-0.5" />
            </Link>
            <span>•</span>
            <Link href="/hipaa" className="hover:text-brand-cyan transition-colors flex items-center">
              HIPAA Compliance <ChevronRight className="w-3 h-3 ml-0.5" />
            </Link>
            <span>•</span>
            <Link href="/faq" className="hover:text-brand-cyan transition-colors flex items-center">
              FAQs <ChevronRight className="w-3 h-3 ml-0.5" />
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-brand-cyan transition-colors flex items-center">
              Contact Support <ChevronRight className="w-3 h-3 ml-0.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
