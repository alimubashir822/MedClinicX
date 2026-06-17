"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield, Lock, Eye, Database, FileText, Mail, Clock,
  CheckCircle, AlertTriangle, Server, Key, BookOpen, Phone,
} from "lucide-react";

const safeguards = [
  {
    category: "Administrative Safeguards",
    color: "brand-cyan",
    icon: <BookOpen className="w-5 h-5" />,
    items: [
      "Designated HIPAA Security Officer and Privacy Officer",
      "Annual HIPAA training for all staff with access to PHI",
      "Documented policies and procedures for PHI handling",
      "Background checks for personnel with PHI access",
      "Documented sanction policy for policy violations",
      "Risk analysis and risk management program",
      "Contingency plan for data breaches and disaster recovery",
      "Business Associate Agreements (BAAs) with all sub-processors",
    ],
  },
  {
    category: "Physical Safeguards",
    color: "brand-indigo",
    icon: <Server className="w-5 h-5" />,
    items: [
      "PHI hosted exclusively on HIPAA-eligible cloud infrastructure (AWS)",
      "Data centers with SOC 2 Type II certifications",
      "No PHI stored on local workstations or removable media",
      "Workstation use policies requiring automatic screen lock",
      "Secure disposal procedures for any physical media",
      "Controlled facility access to data infrastructure",
    ],
  },
  {
    category: "Technical Safeguards",
    color: "brand-emerald",
    icon: <Key className="w-5 h-5" />,
    items: [
      "AES-256 encryption for all PHI at rest",
      "TLS 1.3 encryption for all data in transit",
      "Role-Based Access Control (RBAC) — minimum necessary access",
      "Multi-Factor Authentication (MFA) available for all accounts",
      "Automatic session timeout after inactivity",
      "Complete audit logging of all PHI access events",
      "Unique user identification for every platform account",
      "Encrypted database backups with tested recovery procedures",
      "API security with signed, expiring tokens",
    ],
  },
];

const patientRights = [
  {
    right: "Right of Access",
    desc: "You have the right to inspect and obtain a copy of your PHI maintained by your healthcare provider. Request it through your patient portal or directly from your clinic. We process access requests within 30 days.",
    icon: <Eye className="w-5 h-5" />,
    color: "brand-cyan",
  },
  {
    right: "Right to Amendment",
    desc: "If you believe your PHI is inaccurate or incomplete, you have the right to request an amendment. Amendments are documented and attached to the original record; the original is preserved as required by HIPAA.",
    icon: <FileText className="w-5 h-5" />,
    color: "brand-indigo",
  },
  {
    right: "Right to an Accounting of Disclosures",
    desc: "You can request a report of disclosures of your PHI made outside of treatment, payment, and healthcare operations for the 6 years prior to the date of your request.",
    icon: <Database className="w-5 h-5" />,
    color: "brand-emerald",
  },
  {
    right: "Right to Restrict Disclosures",
    desc: "You may request restrictions on how your PHI is used or disclosed. While we are not always required to agree, we will accommodate reasonable requests and document all agreed restrictions.",
    icon: <Lock className="w-5 h-5" />,
    color: "amber-400",
  },
  {
    right: "Right to Confidential Communications",
    desc: "You may request that we communicate with you about your PHI by alternative means or to an alternative location — for example, by phone only at your work number rather than your home address.",
    icon: <Phone className="w-5 h-5" />,
    color: "brand-cyan",
  },
  {
    right: "Right to a Paper Copy of Privacy Notice",
    desc: "You have the right to receive a paper copy of this HIPAA Compliance Notice upon request, even if you have agreed to receive it electronically. Contact us at privacy@medclinicx.com to request a copy.",
    icon: <BookOpen className="w-5 h-5" />,
    color: "brand-indigo",
  },
];

const breachProtocol = [
  { step: "01", title: "Detection", desc: "Our automated monitoring systems detect anomalies and potential breaches 24/7, triggering immediate alerts to our security team." },
  { step: "02", title: "Containment", desc: "Within hours of detection, we contain the incident, preserve evidence, and prevent further unauthorized access." },
  { step: "03", title: "Assessment", desc: "We assess the nature of the breach, which PHI was affected, and who was impacted — within 48 hours of discovery." },
  { step: "04", title: "Notification", desc: "Affected individuals are notified within 60 days. HHS is notified per HIPAA requirements. If 500+ patients are affected, media notification is provided." },
  { step: "05", title: "Remediation", desc: "We implement corrective measures, update policies, and conduct additional staff training to prevent recurrence." },
];

export default function HIPAAPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="fixed top-0 left-1/3 w-[600px] h-[600px] bg-brand-emerald/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">

        {/* Breadcrumb */}
        <div className="mb-8 flex items-center space-x-2 text-xs">
          <Link href="/" className="text-gray-500 hover:text-brand-cyan transition-colors">Home</Link>
          <span className="text-gray-600">/</span>
          <span className="text-white">HIPAA Compliance</span>
        </div>

        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12">
          <div className="inline-flex items-center space-x-2 bg-brand-emerald/10 border border-brand-emerald/20 rounded-full px-4 py-1.5 mb-6">
            <Shield className="w-4 h-4 text-brand-emerald" />
            <span className="text-xs font-semibold text-brand-emerald uppercase tracking-widest">Compliance</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white mb-4">
            HIPAA <span className="text-gradient-emerald-cyan">Compliance</span>
          </h1>
          <p className="text-gray-400 max-w-2xl leading-relaxed mb-4">
            Med Clinic X is designed from the ground up to support HIPAA-aligned operations. This page describes how we implement the HIPAA Privacy Rule, Security Rule, and Breach Notification Rule to protect Protected Health Information (PHI).
          </p>
          <div className="flex flex-wrap gap-4 items-center text-xs text-gray-500">
            <div className="flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Effective Date: January 1, 2025</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <FileText className="w-3.5 h-3.5" />
              <span>Last Updated: June 1, 2026</span>
            </div>
          </div>
        </motion.div>

        {/* HIPAA Role Banner */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-panel rounded-2xl border border-brand-emerald/20 p-6 mb-10">
          <h2 className="font-display font-bold text-white text-base mb-3 flex items-center space-x-2">
            <Shield className="w-4 h-4 text-brand-emerald" />
            <span>Our Role Under HIPAA</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-400">
            <div>
              <p className="font-semibold text-white mb-1">As a Business Associate</p>
              <p>When we process PHI on behalf of a healthcare provider (Covered Entity), we act as a <span className="text-brand-emerald font-semibold">Business Associate</span>. We execute a Business Associate Agreement (BAA) with every clinic client, defining our obligations, permitted uses of PHI, and breach notification responsibilities.</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-1">As a Technology Provider</p>
              <p>As the technology provider powering the patient portal, we are responsible for the <span className="text-brand-emerald font-semibold">technical and physical safeguards</span> that protect PHI at the infrastructure level — encryption, access control, audit logging, and secure hosting.</p>
            </div>
          </div>
        </motion.div>

        {/* HIPAA Safeguards */}
        <section className="mb-16">
          <h2 className="font-display font-extrabold text-2xl text-white mb-8">
            HIPAA <span className="text-gradient-emerald-cyan">Safeguards</span>
          </h2>
          <div className="space-y-5">
            {safeguards.map((sg, i) => (
              <motion.div
                key={sg.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-panel rounded-2xl border border-brand-border p-7"
              >
                <div className="flex items-center space-x-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl bg-${sg.color}/10 text-${sg.color} flex items-center justify-center`}>
                    {sg.icon}
                  </div>
                  <h3 className="font-display font-bold text-white text-lg">{sg.category}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {sg.items.map((item, j) => (
                    <div key={j} className="flex items-start space-x-2.5">
                      <CheckCircle className={`w-4 h-4 text-${sg.color} flex-shrink-0 mt-0.5`} />
                      <span className="text-sm text-gray-400 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Patient Rights */}
        <section className="mb-16">
          <h2 className="font-display font-extrabold text-2xl text-white mb-3">Your HIPAA <span className="text-gradient-cyan-indigo">Rights</span></h2>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">
            Under the HIPAA Privacy Rule, you have the following rights with respect to your Protected Health Information. These rights apply to PHI held by your healthcare provider and, where applicable, to Med Clinic X as their Business Associate.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {patientRights.map((r, i) => (
              <motion.div
                key={r.right}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="glass-panel rounded-2xl border border-brand-border p-6"
              >
                <div className={`w-10 h-10 rounded-xl bg-${r.color}/10 text-${r.color} flex items-center justify-center mb-4`}>
                  {r.icon}
                </div>
                <h3 className="font-display font-bold text-white mb-2 text-sm">{r.right}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Business Associate Agreements */}
        <section className="mb-16">
          <div className="glass-panel rounded-2xl border border-brand-emerald/20 p-7">
            <h2 className="font-display font-bold text-white text-xl mb-4 flex items-center space-x-2">
              <FileText className="w-5 h-5 text-brand-emerald" />
              <span>Business Associate Agreements</span>
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Med Clinic X executes a Business Associate Agreement (BAA) with every healthcare provider that uses our Platform. The BAA defines:
            </p>
            <div className="space-y-2 mb-5">
              {[
                "The permitted uses and disclosures of PHI by Med Clinic X",
                "Our obligation to implement appropriate safeguards",
                "Requirements for reporting breaches and security incidents",
                "Procedures for returning or destroying PHI upon contract termination",
                "Sub-contractor BAA requirements for all downstream processors",
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-2.5">
                  <CheckCircle className="w-4 h-4 text-brand-emerald flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-400">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-400">
              Healthcare providers wishing to execute a BAA should contact us at{" "}
              <a href="mailto:compliance@medclinicx.com" className="text-brand-emerald hover:underline">compliance@medclinicx.com</a>.
            </p>
          </div>
        </section>

        {/* Breach Notification */}
        <section className="mb-16">
          <h2 className="font-display font-extrabold text-2xl text-white mb-3">
            Breach <span className="text-gradient-emerald-cyan">Notification Protocol</span>
          </h2>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">
            In the event of a breach of unsecured PHI, we follow a structured response protocol in compliance with the HIPAA Breach Notification Rule (45 CFR Part 164, Subpart D).
          </p>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-emerald via-brand-cyan to-brand-indigo hidden lg:block" />
            <div className="space-y-5">
              {breachProtocol.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass-panel rounded-2xl border border-brand-border p-6 lg:ml-20 relative"
                >
                  <div className="absolute -left-[64px] top-6 w-8 h-8 rounded-full bg-brand-emerald border-4 border-brand-bg hidden lg:flex items-center justify-center text-[10px] font-bold text-white font-mono">
                    {step.step}
                  </div>
                  <h3 className="font-display font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Retention Under HIPAA */}
        <section className="mb-16">
          <div className="glass-panel rounded-2xl border border-brand-border p-7">
            <h2 className="font-display font-bold text-white text-xl mb-4 flex items-center space-x-2">
              <Database className="w-5 h-5 text-brand-indigo" />
              <span>PHI Retention Requirements</span>
            </h2>
            <div className="space-y-3">
              {[
                { period: "6 years", label: "HIPAA policies, procedures, and BAAs", color: "brand-cyan" },
                { period: "6 years", label: "Audit logs and access records", color: "brand-indigo" },
                { period: "7 years", label: "Patient health records (minimum, from last date of service)", color: "brand-emerald" },
                { period: "10 years", label: "Minor patient records (from age of majority)", color: "amber-400" },
                { period: "30 days", label: "Voice command transcriptions (then auto-deleted)", color: "brand-cyan" },
              ].map((r, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <span className={`text-xs font-bold font-mono text-${r.color} bg-${r.color}/10 rounded px-3 py-1 w-24 text-center flex-shrink-0`}>{r.period}</span>
                  <span className="text-sm text-gray-400">{r.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Warning */}
        <div className="glass-panel rounded-2xl border border-amber-400/20 bg-amber-400/5 p-5 mb-10 flex items-start space-x-4">
          <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-amber-400 mb-1">Important Note for Healthcare Providers</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              While Med Clinic X implements HIPAA-aligned infrastructure and supports HIPAA compliance, ultimate responsibility for HIPAA compliance remains with the Covered Entity (your clinic). Compliance requires proper configuration, staff training, and operational policies on your part. Contact our compliance team for implementation guidance.
            </p>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="glass-panel rounded-2xl border border-brand-border p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-brand-emerald/10 text-brand-emerald flex items-center justify-center flex-shrink-0">
            <Mail className="w-5 h-5" />
          </div>
          <div className="flex-grow">
            <p className="text-sm font-semibold text-white mb-0.5">HIPAA or compliance questions?</p>
            <p className="text-xs text-gray-400">Contact our Compliance team at <a href="mailto:compliance@medclinicx.com" className="text-brand-emerald hover:underline">compliance@medclinicx.com</a> or request a BAA at <a href="mailto:legal@medclinicx.com" className="text-brand-cyan hover:underline">legal@medclinicx.com</a></p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link href="/privacy" className="text-xs font-semibold text-brand-cyan hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="text-xs font-semibold text-brand-indigo hover:underline">Terms of Service</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
