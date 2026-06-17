"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, FileText, Mail, Clock } from "lucide-react";

const sections = [
  {
    id: "overview",
    title: "Overview",
    content: `Med Clinic X, Inc. ("Med Clinic X," "we," "our," or "us") is committed to protecting the privacy and security of your personal and health information. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you use our AI-powered patient portal platform and related services (collectively, the "Platform").

By accessing or using the Platform, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree, please do not use our Platform.`,
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: `We collect several types of information in connection with the Platform:

**Account & Identity Information**
When you register for an account, we collect your name, email address, date of birth, gender, and contact information. Clinics may also provide us with patient demographic data when onboarding to the Platform.

**Health & Medical Information**
Our Platform is designed to store and process Protected Health Information (PHI) as defined by HIPAA. This includes medical records, lab results, diagnoses, medications, appointment history, clinical notes, uploaded documents, and any information shared through the AI Health Companion.

**Usage Data**
We automatically collect certain information when you access the Platform, including IP address, browser type, device identifiers, pages visited, time and date of access, and session duration. This information is used for security, analytics, and platform improvement.

**Communications**
If you contact us directly (email, support tickets, contact forms), we retain the content of your communications and your contact details.

**Voice Data (where applicable)**
If you use Voice AI Commands, voice input is processed in real-time and is not permanently stored. Transcriptions may be retained for up to 30 days for quality assurance purposes before automatic deletion.`,
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    content: `We use the information we collect for the following purposes:

- **Providing the Platform** — to operate, maintain, and deliver the features of our patient portal, AI Health Companion, appointment booking, document management, and related services.
- **AI-Powered Features** — to power the AI Health Companion, document analysis, appointment briefings, health timeline, and other intelligent features using your health records as context.
- **Communications** — to send appointment reminders, health notifications, account alerts, and responses to your support inquiries.
- **Security & Compliance** — to detect, investigate, and prevent fraudulent activity, unauthorized access, and other security incidents. All access events are logged and auditable.
- **Analytics & Improvement** — to understand how our Platform is used and improve our features, using aggregated, de-identified data only.
- **Legal Obligations** — to comply with applicable laws, respond to legal process, and protect the rights, property, and safety of Med Clinic X, our users, and the public.

We do not sell your personal information or PHI to third parties. We do not use your health information for advertising purposes.`,
  },
  {
    id: "data-sharing",
    title: "How We Share Your Information",
    content: `We share your information only in the following circumstances:

**With Your Healthcare Providers**
Information you enter into the Platform is shared with your authorized care team — your assigned doctors and clinic staff — as part of delivering healthcare services. Sharing is governed by role-based access controls.

**Business Associates**
We engage third-party service providers (cloud infrastructure, AI model providers, email delivery) who access data only as necessary to deliver services on our behalf. All such providers are bound by Business Associate Agreements (BAAs) where required under HIPAA.

**With Your Consent**
You may choose to share specific records, documents, or your health timeline with family members, external specialists, or caregivers via the Family Hub or document sharing features. Such sharing is entirely under your control.

**Legal Requirements**
We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court order or government agency).

**Business Transfers**
In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction. We will notify you via email and provide notice on our Platform before your information is transferred and becomes subject to a different privacy policy.`,
  },
  {
    id: "data-retention",
    title: "Data Retention",
    content: `We retain your personal information and health records for as long as your account is active or as needed to provide services. After account closure:

- **Health Records & PHI** — retained for a minimum of 7 years following the last date of service, as required by applicable healthcare regulations. After this period, data is securely deleted.
- **Audit Logs** — retained for 6 years per HIPAA requirements.
- **Usage Data** — retained for 24 months in aggregated, de-identified form.
- **Voice Transcriptions** — automatically deleted after 30 days.
- **Deleted Accounts** — data deletion requests are processed within 30 days. A final data export is available upon request before deletion.

You may request a complete export of your data at any time from your account settings.`,
  },
  {
    id: "your-rights",
    title: "Your Rights",
    content: `Depending on your location, you may have the following rights regarding your personal information:

**Access & Portability**
You have the right to request a copy of your personal information and health records at any time. We provide data exports in PDF and FHIR-compatible formats.

**Correction**
You have the right to request correction of inaccurate personal information. For health record corrections, corrections are noted as amendments and the original record is preserved per HIPAA requirements.

**Deletion**
You have the right to request deletion of your personal information. Note that certain health records may be required to be retained by law. We will clearly inform you of any records we are legally obligated to retain.

**Restriction & Objection**
You may request that we restrict processing of your information or object to certain types of processing, including marketing communications.

**California Residents (CCPA)**
California residents have additional rights under the California Consumer Privacy Act, including the right to know what personal information is collected, the right to opt out of sale (we do not sell personal information), and the right to non-discrimination for exercising privacy rights.

To exercise any of these rights, contact us at privacy@medclinicx.com.`,
  },
  {
    id: "security",
    title: "Security",
    content: `We implement comprehensive security measures to protect your information:

- **Encryption** — all data is encrypted at rest using AES-256 and in transit using TLS 1.3.
- **Access Controls** — role-based access control (RBAC) ensures that users can only access data appropriate to their role. Patients see only their own data.
- **Audit Logging** — every data access event is logged with timestamp, user identity, action, and IP address. Patients can view their own audit trail at any time.
- **Multi-Factor Authentication** — MFA is available and strongly recommended for all accounts.
- **Penetration Testing** — we conduct regular third-party penetration tests and security audits.
- **Incident Response** — we maintain a documented incident response plan. In the event of a data breach affecting your PHI, we will notify you within 60 days as required by HIPAA.

No method of transmission over the Internet or electronic storage is 100% secure. However, we implement industry-standard security practices designed to protect your information.`,
  },
  {
    id: "cookies",
    title: "Cookies & Tracking",
    content: `We use cookies and similar tracking technologies to operate and improve our Platform:

- **Essential Cookies** — required for authentication, session management, and core Platform functionality. These cannot be disabled.
- **Analytics Cookies** — used to understand how the Platform is used (pages visited, session duration). These are anonymized and do not identify individual users.
- **Preference Cookies** — used to remember your settings and preferences within the Platform.

We do not use advertising or third-party tracking cookies. You can control cookie preferences through your browser settings, though disabling essential cookies may impair Platform functionality.`,
  },
  {
    id: "children",
    title: "Children's Privacy",
    content: `The Platform includes a Family Hub feature that allows parents or guardians to manage health records for minor children under their care. In these cases:

- A parent or legal guardian must create and manage the account for a child under 13.
- We collect only the minimum health information necessary to provide the service.
- Parents may request access to, correction of, or deletion of their child's health records at any time.

We do not knowingly collect personal information directly from children under 13 outside of the supervised Family Hub context.`,
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. When we make material changes, we will notify you by email (to the address associated with your account) and by posting a prominent notice on the Platform at least 30 days before the changes take effect.

Your continued use of the Platform after the effective date of the revised Privacy Policy constitutes your acceptance of the changes. If you do not agree to the changes, you may close your account and request a data export before the effective date.`,
  },
  {
    id: "contact",
    title: "Contact Us",
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:

**Med Clinic X Privacy Team**
Email: privacy@medclinicx.com
Mail: Med Clinic X, Inc., Attn: Privacy Officer, San Francisco, CA

**Data Protection Officer (DPO)**
For GDPR-related inquiries: dpo@medclinicx.com

We are committed to resolving privacy complaints promptly. If you are not satisfied with our response, you may have the right to lodge a complaint with your local data protection authority.`,
  },
];

const highlights = [
  { icon: <Lock className="w-5 h-5" />, text: "AES-256 encryption at rest and in transit", color: "brand-cyan" },
  { icon: <Shield className="w-5 h-5" />, text: "HIPAA-aligned architecture", color: "brand-indigo" },
  { icon: <Eye className="w-5 h-5" />, text: "We never sell your data", color: "brand-emerald" },
  { icon: <Database className="w-5 h-5" />, text: "You own your data — export anytime", color: "amber-400" },
];

export default function PrivacyPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="fixed top-0 left-1/3 w-[600px] h-[600px] bg-brand-indigo/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">

        {/* Breadcrumb */}
        <div className="mb-8 flex items-center space-x-2 text-xs">
          <Link href="/" className="text-gray-500 hover:text-brand-cyan transition-colors">Home</Link>
          <span className="text-gray-600">/</span>
          <span className="text-white">Privacy Policy</span>
        </div>

        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12">
          <div className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-4 py-1.5 mb-6">
            <Shield className="w-4 h-4 text-brand-cyan" />
            <span className="text-xs font-semibold text-brand-cyan uppercase tracking-widest">Legal</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white mb-4">
            Privacy <span className="text-gradient-cyan-indigo">Policy</span>
          </h1>
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

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {highlights.map((h, i) => (
            <motion.div
              key={h.text}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className={`glass-panel rounded-xl p-4 border border-${h.color}/20 flex items-center space-x-3`}
            >
              <div className={`w-9 h-9 rounded-lg bg-${h.color}/10 text-${h.color} flex items-center justify-center flex-shrink-0`}>
                {h.icon}
              </div>
              <span className="text-sm text-gray-300">{h.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Table of Contents */}
        <div className="glass-panel rounded-2xl border border-brand-border p-6 mb-12">
          <h2 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">Table of Contents</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {sections.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-sm text-gray-400 hover:text-brand-cyan transition-colors flex items-center space-x-2 py-0.5"
              >
                <span className="text-xs text-gray-600 w-4">{i + 1}.</span>
                <span>{s.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-10 mb-16">
          {sections.map((s, i) => (
            <motion.section
              key={s.id}
              id={s.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="glass-panel rounded-2xl border border-brand-border p-7"
            >
              <h2 className="font-display font-bold text-white text-xl mb-4 flex items-center space-x-2">
                <span className="text-xs text-brand-cyan font-mono bg-brand-cyan/10 rounded px-2 py-0.5">{String(i + 1).padStart(2, "0")}</span>
                <span>{s.title}</span>
              </h2>
              <div className="text-sm text-gray-400 leading-relaxed whitespace-pre-wrap">
                {s.content.split("\n").map((line, li) => {
                  if (line.startsWith("**") && line.endsWith("**")) {
                    return <p key={li} className="font-semibold text-white mt-4 mb-1">{line.replace(/\*\*/g, "")}</p>;
                  }
                  if (line.startsWith("- ")) {
                    return <p key={li} className="flex items-start space-x-2 mt-1"><span className="text-brand-cyan flex-shrink-0">•</span><span>{line.slice(2)}</span></p>;
                  }
                  return line ? <p key={li} className="mt-2">{line}</p> : <div key={li} className="mt-2" />;
                })}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Footer Note */}
        <div className="glass-panel rounded-2xl border border-brand-border p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center flex-shrink-0">
            <Mail className="w-5 h-5" />
          </div>
          <div className="flex-grow">
            <p className="text-sm font-semibold text-white mb-0.5">Questions about this policy?</p>
            <p className="text-xs text-gray-400">Contact our Privacy Team at <a href="mailto:privacy@medclinicx.com" className="text-brand-cyan hover:underline">privacy@medclinicx.com</a> — we respond within 2 business days.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link href="/hipaa" className="text-xs font-semibold text-brand-indigo hover:underline">HIPAA Policy</Link>
            <Link href="/terms" className="text-xs font-semibold text-brand-cyan hover:underline">Terms of Service</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
