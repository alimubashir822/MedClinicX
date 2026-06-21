"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeartPulse,
  Smile,
  Calculator,
  Users,
  Activity,
  Droplet,
  DollarSign,
  ArrowRight,
  CheckCircle,
  Sparkles
} from "lucide-react";
import { calculatorData } from "./calculatorData";

const iconMap: Record<string, React.ReactNode> = {
  HeartPulse: <HeartPulse className="w-5 h-5 text-brand-cyan" />,
  Smile: <Smile className="w-5 h-5 text-brand-cyan" />,
  Calculator: <Calculator className="w-5 h-5 text-brand-cyan" />,
  Users: <Users className="w-5 h-5 text-brand-cyan" />,
  Activity: <Activity className="w-5 h-5 text-brand-cyan" />,
  Droplet: <Droplet className="w-5 h-5 text-brand-cyan" />,
  DollarSign: <DollarSign className="w-5 h-5 text-brand-cyan" />,
};

const categories = [
  "All",
  "Cardiovascular & Vitals",
  "Metabolic & Lab",
  "Body Composition & Hydration",
  "Financial & Pricing"
];

export default function CalculatorClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredCalculators = calculatorData.filter(
    (calc) => selectedCategory === "All" || calc.category === selectedCategory
  );

  return (
    <div className="max-w-6xl mx-auto px-5 py-12 md:py-20">
      {/* Background glows */}
      <div className="fixed top-0 right-1/4 w-[500px] h-[500px] bg-brand-cyan/4 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 left-1/4 w-[500px] h-[500px] bg-brand-indigo/4 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-4 py-1.5 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
          <span className="text-[11px] font-bold text-brand-cyan uppercase tracking-widest">Medical & Cost Tools</span>
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight leading-tight mb-4">
          Clinical & Treatment Estimators
        </h1>
        <p className="text-gray-400 text-sm leading-relaxed">
          Access our suite of clinical calculators, dosage indexes, corrected parameters generators, and regional dental procedure cost calculators designed for physicians and patients.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
              selectedCategory === cat
                ? "bg-brand-cyan text-brand-bg border-brand-cyan shadow-sm shadow-brand-cyan/20"
                : "glass-panel text-gray-400 hover:text-white border-brand-border hover:border-brand-border/60"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Calculators List — 3-column grid card layout */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        <AnimatePresence mode="popLayout">
          {filteredCalculators.map((calc, idx) => (
            <motion.article
              key={calc.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, delay: idx * 0.03 }}
              className="glass-panel rounded-2xl border border-brand-border hover:border-brand-cyan/20 hover:shadow-lg hover:shadow-brand-cyan/5 transition-all overflow-hidden group flex flex-col justify-between"
            >
              {/* Image Header */}
              <div className="relative h-44 w-full overflow-hidden bg-brand-bg/60 shrink-0">
                <Image
                  src={calc.image}
                  alt={`${calc.title} — Med Clinic X`}
                  width={320}
                  height={180}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                />
                {/* Badge Overlay */}
                {calc.badge && (
                  <div className="absolute top-3 left-3">
                    <span className="text-[9px] font-bold text-brand-cyan uppercase tracking-wider bg-brand-bg/80 border border-brand-cyan/25 px-2.5 py-1 rounded-full backdrop-blur-sm">
                      {calc.badge}
                    </span>
                  </div>
                )}
                {/* Stat overlay */}
                <div className="absolute bottom-3 left-3 bg-brand-bg/85 backdrop-blur-sm border border-brand-cyan/20 rounded-lg px-2.5 py-1">
                  <p className="font-display font-extrabold text-sm text-brand-cyan leading-none">{calc.stat}</p>
                  <p className="text-[8px] font-medium text-gray-400 mt-0.5">{calc.statLabel}</p>
                </div>
              </div>

              {/* Content and details */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0">
                      {iconMap[calc.iconName] || <Calculator className="w-4.5 h-4.5 text-brand-cyan" />}
                    </div>
                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">{calc.category}</span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white group-hover:text-brand-cyan transition-colors leading-tight">
                    {calc.title}
                  </h3>

                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                    {calc.desc}
                  </p>

                  <ul className="space-y-1.5 pt-2 border-t border-brand-border/40">
                    {calc.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-gray-300 font-medium">
                        <CheckCircle className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex items-center">
                  <Link
                    href={calc.href}
                    className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-brand-cyan to-brand-indigo hover:opacity-95 text-white font-bold text-xs py-3 px-4 rounded-xl transition-all shadow-md shadow-brand-cyan/10"
                  >
                    <span>Open Calculator</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* CTA Banner */}
      <section className="relative rounded-2xl overflow-hidden p-8 sm:p-12 border border-brand-cyan/20 bg-gradient-cyber text-center">
        <div className="absolute -top-16 -left-16 w-40 h-40 bg-brand-cyan/8 rounded-full blur-[60px] pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-brand-indigo/8 rounded-full blur-[60px] pointer-events-none" />

        <div className="relative max-w-xl mx-auto space-y-4">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
            Need Custom Medical Calculators Developed?
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            We design, develop, and integrate secure medical tools, medication calculators, and custom diagnostic algorithms for clinical portals.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg shadow-brand-cyan/15 hover:scale-[1.01] active:scale-[0.99] transition-all"
            >
              Contact Our Engineers
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
