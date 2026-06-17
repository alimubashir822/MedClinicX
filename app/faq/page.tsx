"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown, HelpCircle, ArrowRight, MessageSquare } from "lucide-react";

const faqCategories = [
  {
    label: "Platform & Product",
    color: "brand-cyan",
    faqs: [
      {
        q: "What exactly is Med Clinic X?",
        a: "Med Clinic X is an AI-powered patient portal platform built for healthcare clinics. It transforms the typical 'records store' portal into an intelligent health companion — with features like AI document understanding, a visual health timeline, smart appointment booking, and an AI health companion that answers patient questions in plain language.",
      },
      {
        q: "Is this a white-label product or a custom build?",
        a: "Both. We offer a configurable platform that clinics can deploy with their own branding, domain, and content — typically ready in 4–6 weeks for Phase 1. For complex hospital networks or EHR integrations, we scope a custom build. Contact us to discuss your specific needs.",
      },
      {
        q: "Can this work for a single clinic or a hospital network?",
        a: "Yes. The platform scales from a solo practitioner to a multi-clinic hospital network. Our multi-tenant architecture supports separate workspaces for each clinic while sharing infrastructure. Phase 4 of our roadmap includes full multi-clinic support with a centralized admin layer.",
      },
      {
        q: "What specialties does the platform support?",
        a: "All specialties. We have active deployments in cardiology, dental, pediatrics, and general practice. The platform is specialty-agnostic — appointment flows, lab result templates, and AI briefing prompts are configured per department.",
      },
      {
        q: "Is there a mobile app?",
        a: "The platform is built as a Progressive Web App (PWA) with full mobile-responsive design. It installs on iOS and Android like a native app. A dedicated React Native app is planned for a later phase with push notifications and offline access to key records.",
      },
    ],
  },
  {
    label: "AI & Features",
    color: "brand-indigo",
    faqs: [
      {
        q: "Will the AI diagnose medical conditions?",
        a: "No — and this is a firm design principle. The AI Health Companion is positioned as a healthcare information assistant. It explains reports, defines medical terms, and helps patients prepare questions for their doctor. It explicitly does not diagnose, prescribe medication, or replace professional medical advice.",
      },
      {
        q: "How does the AI Health Companion work?",
        a: "The AI Health Companion is powered by GPT-4o via LangChain. It has access to the patient's medical history, documents, lab results, and appointment history. When a patient asks a question — 'Why did my doctor prescribe this?' — the AI answers with full context: 'You started this after your June 2025 visit for back pain.'",
      },
      {
        q: "How does the AI Appointment Brief work?",
        a: "Before each appointment, the AI sends a short interview to the patient asking about symptom changes, new medications, and questions for the doctor. The AI compiles responses into a structured brief — Chief Complaint, Symptom History, Medication Status, Patient Questions — and shares it with the doctor's dashboard automatically.",
      },
      {
        q: "What file types can be uploaded to the document vault?",
        a: "PDFs (lab reports, prescriptions, discharge summaries), images (X-rays, MRI scans, ultrasounds), and standard document formats. The AI reads uploaded PDFs, extracts key values, flags abnormal results, and creates a patient-readable summary card.",
      },
      {
        q: "How is the AI Health Score calculated?",
        a: "The AI Health Score is based on: medication adherence, preventive care status, pending lab reviews, appointment frequency, and documented conditions. It is a general wellness indicator to help patients understand their engagement with their own care — not a clinical diagnostic score.",
      },
    ],
  },
  {
    label: "Security & Compliance",
    color: "brand-emerald",
    faqs: [
      {
        q: "Is patient data secure and HIPAA compliant?",
        a: "Yes. All data is encrypted at rest and in transit using AES-256. We implement role-based access control, a full audit log of every data access event, and patient-controlled sharing permissions. Patients own their data and can export or delete it at any time. Our architecture is designed to meet HIPAA alignment from the ground up.",
      },
      {
        q: "Who can access patient data?",
        a: "Access is strictly role-based. Patients see only their own data. Doctors see only their assigned patients. Admins can manage the clinic but cannot read message content. Every access event is logged with a timestamp, user ID, and IP address — and patients can view their own audit trail at any time.",
      },
      {
        q: "Where is data stored?",
        a: "Patient data is stored in PostgreSQL with per-clinic database namespacing. Medical documents are stored in AWS S3 or Cloudflare R2 with signed, expiring URLs — no public file access. The platform is deployable on HIPAA-eligible infrastructure on AWS or GCP.",
      },
      {
        q: "Can patients delete or export their data?",
        a: "Yes. Patient data portability is a core feature. Patients can export their complete health record as a portable PDF or HL7 FHIR-compatible bundle at any time. Data deletion requests are processed within 30 days and cascade through all associated records.",
      },
    ],
  },
  {
    label: "Implementation & Pricing",
    color: "amber-400",
    faqs: [
      {
        q: "How long does implementation take?",
        a: "For a single clinic MVP (Phase 1 — auth, dashboard, appointments, documents), implementation takes 4–6 weeks. Full platform with AI layer (Phase 3) takes 3–4 months. Enterprise multi-clinic rollout is scoped individually based on data migration requirements and existing EHR systems.",
      },
      {
        q: "What does implementation include?",
        a: "Implementation includes: platform configuration and branding, clinic-specific department and doctor setup, data migration from existing systems (where applicable), staff onboarding sessions, go-live support, and a 30-day post-launch SLA window.",
      },
      {
        q: "Do you integrate with existing EHR systems?",
        a: "Yes. We have a FHIR-compatible API layer that allows integration with existing Electronic Health Record systems (Epic, Cerner, etc.). The depth of integration is scoped on a per-client basis. Most Phase 1 deployments use manual data input; EHR sync is typically a Phase 3 feature.",
      },
      {
        q: "How is pricing structured?",
        a: "Pricing is scoped based on clinic size, features required, and deployment complexity. We do not publish fixed pricing for enterprise deployments because every clinic's needs are different. Contact us for a detailed proposal tailored to your practice.",
      },
    ],
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="relative overflow-hidden">
      <div className="fixed top-0 left-1/3 w-[600px] h-[600px] bg-brand-indigo/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">

        {/* Breadcrumb */}
        <div className="mb-8 flex items-center space-x-2 text-xs">
          <Link href="/" className="text-gray-500 hover:text-brand-cyan transition-colors">Home</Link>
          <span className="text-gray-600">/</span>
          <span className="text-white">FAQ</span>
        </div>

        {/* Hero */}
        <section className="mb-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-4 py-1.5 mb-6">
              <HelpCircle className="w-4 h-4 text-brand-cyan" />
              <span className="text-xs font-semibold text-brand-cyan uppercase tracking-widest">FAQ</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white mb-4">
              Frequently Asked{" "}
              <span className="text-gradient-cyan-indigo">Questions</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about the Med Clinic X platform — from AI features and security to implementation timelines and pricing.
            </p>
          </motion.div>
        </section>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {faqCategories.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => { setActiveCategory(i); setOpenFaq(null); }}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
                activeCategory === i
                  ? `bg-${cat.color}/15 text-${cat.color} border-${cat.color}/30`
                  : "border-brand-border text-gray-400 hover:text-white hover:border-brand-border/60"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <section className="mb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-3"
            >
              {faqCategories[activeCategory].faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                const color = faqCategories[activeCategory].color;
                return (
                  <motion.div
                    key={faq.q}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className={`glass-panel rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen ? `border-${color}/30` : "border-brand-border hover:border-brand-border/60"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between px-6 py-5 text-left"
                    >
                      <span className="font-semibold text-white pr-4 leading-snug">{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 flex-shrink-0 text-${color} transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className={`px-6 pb-5 border-t border-${color}/10`}>
                            <p className="text-gray-400 leading-relaxed pt-4 text-sm">{faq.a}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </section>

        {/* Still have questions CTA */}
        <section>
          <div className="relative rounded-3xl overflow-hidden p-10 text-center border border-brand-border bg-gradient-cyber">
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-brand-cyan/10 rounded-full blur-[80px] -z-10" />
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-cyan to-brand-indigo flex items-center justify-center mx-auto mb-5">
              <MessageSquare className="w-7 h-7 text-white" />
            </div>
            <h2 className="font-display font-extrabold text-2xl text-white mb-3">
              Still have questions?
            </h2>
            <p className="text-gray-400 max-w-md mx-auto mb-7 text-sm leading-relaxed">
              Our team is happy to walk you through the platform, answer technical questions, or discuss how we can tailor Med Clinic X to your clinic&apos;s needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity text-sm"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center space-x-2 glass-panel border border-brand-border text-gray-300 font-semibold px-7 py-3.5 rounded-xl hover:border-brand-cyan/40 hover:text-white transition-all text-sm"
              >
                <span>Explore Live Demo</span>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
