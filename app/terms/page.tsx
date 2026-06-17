"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, Scale, Mail, Clock, AlertCircle } from "lucide-react";

const sections = [
  {
    id: "agreement",
    title: "Agreement to Terms",
    content: `These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and Med Clinic X, Inc. ("Med Clinic X," "we," "our," or "us") governing your use of the Med Clinic X platform, including the patient portal, AI features, appointment tools, document vault, and all related services (collectively, the "Platform").

By creating an account, accessing, or using the Platform, you confirm that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you are using the Platform on behalf of a healthcare organization, you represent that you have authority to bind that organization to these Terms.

If you do not agree to these Terms, do not use the Platform.`,
  },
  {
    id: "eligibility",
    title: "Eligibility & Account Registration",
    content: `**Eligibility**
You must be at least 18 years of age to create an account independently. Minors may be added to the Platform by a parent or legal guardian through the Family Hub feature.

**Account Accuracy**
You agree to provide accurate, current, and complete information during registration and to keep your account information updated. Providing false or misleading information may result in immediate account termination.

**Account Security**
You are responsible for maintaining the confidentiality of your login credentials. You agree to notify us immediately at security@medclinicx.com if you suspect unauthorized access to your account. We are not liable for any loss arising from unauthorized use of your credentials.

**One Account Per Person**
Each individual patient should maintain only one account. Creating duplicate accounts or using another person's account without authorization is prohibited.`,
  },
  {
    id: "platform-use",
    title: "Acceptable Use of the Platform",
    content: `You agree to use the Platform only for lawful purposes and in accordance with these Terms. You agree NOT to:

- Use the Platform to transmit any false, misleading, or fraudulent health information
- Attempt to gain unauthorized access to any part of the Platform, other user accounts, or our systems
- Upload or transmit any malicious code, viruses, or harmful software
- Interfere with or disrupt the integrity or performance of the Platform
- Use automated bots, scrapers, or data extraction tools to access Platform content
- Reverse engineer, decompile, or disassemble any part of the Platform
- Use the Platform in any manner that could violate applicable laws, including HIPAA
- Impersonate any person, including another patient, doctor, or Platform administrator
- Use the Platform for any commercial purpose without our express written permission`,
  },
  {
    id: "medical-disclaimer",
    title: "Medical Disclaimer",
    content: `IMPORTANT — PLEASE READ CAREFULLY.

The Platform is a healthcare information management and communication tool. It is NOT a medical device, clinical diagnostic service, or substitute for professional medical advice, diagnosis, or treatment.

**The AI Health Companion, AI Document Reader, AI Health Score, AI Pre-Appointment Brief, and all other AI-powered features are designed to assist with health information management. They do not diagnose medical conditions, prescribe medications, or provide clinical medical advice.**

Always seek the advice of your physician, specialist, or other qualified healthcare provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay seeking it because of information you have read or received through the Platform.

In an emergency, call your local emergency services (e.g., 911 in the United States) immediately. The Platform is not an emergency service.

Med Clinic X expressly disclaims all liability for any adverse outcomes arising from decisions made based solely on information provided through the Platform without independent verification by a licensed healthcare professional.`,
  },
  {
    id: "hipaa-phi",
    title: "HIPAA & Protected Health Information",
    content: `**Business Associate Relationships**
When Med Clinic X processes Protected Health Information (PHI) on behalf of a Covered Entity (a healthcare provider using our Platform), we act as a Business Associate under HIPAA. We enter into a Business Associate Agreement (BAA) with all healthcare provider clients.

**Patient Rights**
As an individual accessing your own health information through the Platform, you retain all rights provided under HIPAA's Privacy Rule, including:
- The right to access and obtain a copy of your PHI
- The right to request corrections to your PHI
- The right to receive an accounting of disclosures of your PHI
- The right to request restrictions on how your PHI is used

**Minimum Necessary Standard**
We access, use, and disclose PHI only to the minimum extent necessary to fulfill the purposes described in our Privacy Policy and applicable Business Associate Agreements.

For full details on how we handle PHI, see our HIPAA Compliance Policy at /hipaa.`,
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: `**Our IP**
The Platform, including all software, algorithms, AI models, user interface designs, logos, and content created by Med Clinic X, is our exclusive property or licensed to us. These are protected by copyright, trademark, patent, trade secret, and other intellectual property laws.

**Your Content**
You retain ownership of all health information, documents, and content you upload to the Platform ("Your Content"). By uploading content, you grant Med Clinic X a limited, non-exclusive, royalty-free license to store, process, and display Your Content solely for the purpose of providing the Platform services to you.

**License to Use the Platform**
Subject to these Terms, Med Clinic X grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Platform for your personal health management. This license does not include the right to resell, sublicense, or commercially exploit the Platform.

**Feedback**
If you provide suggestions, feedback, or ideas about the Platform, you grant Med Clinic X the right to use such feedback without restriction and without compensation to you.`,
  },
  {
    id: "third-party",
    title: "Third-Party Services",
    content: `The Platform may integrate with or contain links to third-party services, including:

- Electronic Health Record (EHR) systems (Epic, Cerner, etc.)
- Cloud infrastructure providers (AWS, Cloudflare)
- AI model providers for language processing
- Payment processors for subscription billing
- Communication services (email, SMS)

Your use of third-party services is governed by those services' own terms and privacy policies. Med Clinic X is not responsible for the practices, content, or reliability of third-party services. We encourage you to review the privacy policies of any third-party services you interact with.`,
  },
  {
    id: "payment",
    title: "Subscriptions & Payment (Clinic Administrators)",
    content: `**Applicability**
This section applies to healthcare organizations and clinic administrators who subscribe to Med Clinic X as a paid service. It does not apply to individual patients accessing the Platform through their healthcare provider.

**Billing**
Subscription fees are billed monthly or annually as agreed in your service contract. All fees are in USD unless otherwise stated.

**Cancellation**
You may cancel your subscription with 30 days written notice. Upon cancellation, you will retain access until the end of your current billing period. We will provide a complete data export upon request.

**Refunds**
Subscription fees are generally non-refundable. Exceptions may be made at our discretion for service outages or material failures to deliver contracted features.

**Price Changes**
We will provide 60 days advance notice of any pricing changes. Your continued use after the effective date constitutes acceptance of the new pricing.`,
  },
  {
    id: "disclaimers",
    title: "Disclaimers & Limitation of Liability",
    content: `**Disclaimer of Warranties**
THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE PLATFORM WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS.

**Limitation of Liability**
TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, MED CLINIC X SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, LOSS OF DATA, PERSONAL INJURY, OR PROPERTY DAMAGE, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE PLATFORM.

OUR TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING UNDER THESE TERMS SHALL NOT EXCEED THE AMOUNT YOU PAID US (IF ANY) IN THE 12 MONTHS PRECEDING THE CLAIM.

**Indemnification**
You agree to indemnify and hold harmless Med Clinic X, its officers, directors, employees, and agents from any claims, damages, losses, and expenses (including reasonable attorneys' fees) arising out of your use of the Platform in violation of these Terms.`,
  },
  {
    id: "termination",
    title: "Termination",
    content: `**By You**
You may close your account at any time from your account settings or by contacting support@medclinicx.com. Upon closure, you may request a full data export before deletion. Account data is retained per our data retention schedule described in the Privacy Policy.

**By Med Clinic X**
We reserve the right to suspend or terminate your account immediately, without notice, if:
- You violate these Terms
- We receive credible reports of fraudulent, harmful, or illegal activity
- Your healthcare provider's contract with Med Clinic X is terminated
- You provide false identity or health information that poses a risk to others

**Effect of Termination**
Upon termination, your license to use the Platform ends immediately. Provisions of these Terms that by their nature should survive termination — including the Medical Disclaimer, IP provisions, disclaimers, and limitation of liability — shall survive.`,
  },
  {
    id: "governing-law",
    title: "Governing Law & Disputes",
    content: `**Governing Law**
These Terms are governed by the laws of the State of California, United States, without regard to its conflict of law provisions.

**Dispute Resolution**
Before filing any legal claim, you agree to contact us at legal@medclinicx.com to attempt to resolve the dispute informally. We will make reasonable efforts to resolve disputes within 30 days.

**Arbitration**
For disputes that cannot be resolved informally, both parties agree to binding arbitration under the rules of the American Arbitration Association (AAA), conducted in San Francisco, California. Each party bears its own legal fees unless the arbitrator determines otherwise.

**Class Action Waiver**
YOU AND MED CLINIC X AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE ACTION.

**Exceptions**
Either party may seek injunctive or other equitable relief in court for claims involving intellectual property infringement or unauthorized access.`,
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    content: `We reserve the right to modify these Terms at any time. When we make material changes, we will:

- Notify you by email at least 30 days before the changes take effect
- Display a prominent notice within the Platform
- Update the "Last Updated" date at the top of this page

Your continued use of the Platform after the effective date of revised Terms constitutes your acceptance of the changes. If you do not agree to the new Terms, you must close your account before the effective date.`,
  },
  {
    id: "contact",
    title: "Contact Information",
    content: `For questions about these Terms:

**Legal Team**
Email: legal@medclinicx.com

**General Support**
Email: support@medclinicx.com
Phone: +1 (800) 555-MDCX
Hours: Monday–Friday, 9am–6pm PT

**Mailing Address**
Med Clinic X, Inc.
Attn: Legal Department
San Francisco, CA, United States`,
  },
];

export default function TermsPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="fixed top-0 right-1/3 w-[600px] h-[600px] bg-brand-indigo/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">

        {/* Breadcrumb */}
        <div className="mb-8 flex items-center space-x-2 text-xs">
          <Link href="/" className="text-gray-500 hover:text-brand-cyan transition-colors">Home</Link>
          <span className="text-gray-600">/</span>
          <span className="text-white">Terms of Service</span>
        </div>

        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12">
          <div className="inline-flex items-center space-x-2 bg-brand-indigo/10 border border-brand-indigo/20 rounded-full px-4 py-1.5 mb-6">
            <Scale className="w-4 h-4 text-brand-indigo" />
            <span className="text-xs font-semibold text-brand-indigo uppercase tracking-widest">Legal</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white mb-4">
            Terms of <span className="text-gradient-cyan-indigo">Service</span>
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

        {/* Medical Disclaimer Banner */}
        <div className="glass-panel rounded-2xl border border-amber-400/20 bg-amber-400/5 p-5 mb-10 flex items-start space-x-4">
          <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-amber-400 mb-1">Important Medical Disclaimer</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Med Clinic X is a health information management platform — not a medical service provider. Our AI features assist with organizing and understanding your health records. They do not diagnose, treat, or replace professional medical advice. Always consult a licensed healthcare provider for medical decisions.
            </p>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="glass-panel rounded-2xl border border-brand-border p-6 mb-12">
          <h2 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">Table of Contents</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {sections.map((s, i) => (
              <a key={s.id} href={`#${s.id}`} className="text-sm text-gray-400 hover:text-brand-cyan transition-colors flex items-center space-x-2 py-0.5">
                <span className="text-xs text-gray-600 w-4">{i + 1}.</span>
                <span>{s.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8 mb-16">
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
                <span className="text-xs text-brand-indigo font-mono bg-brand-indigo/10 rounded px-2 py-0.5">{String(i + 1).padStart(2, "0")}</span>
                <span>{s.title}</span>
              </h2>
              <div className="text-sm text-gray-400 leading-relaxed">
                {s.content.split("\n").map((line, li) => {
                  if (line.startsWith("**") && line.endsWith("**")) {
                    return <p key={li} className="font-semibold text-white mt-4 mb-1">{line.replace(/\*\*/g, "")}</p>;
                  }
                  if (line.startsWith("- ")) {
                    return <p key={li} className="flex items-start space-x-2 mt-1.5"><span className="text-brand-indigo flex-shrink-0">•</span><span>{line.slice(2)}</span></p>;
                  }
                  if (line === line.toUpperCase() && line.trim().length > 10) {
                    return <p key={li} className="text-xs text-amber-400/80 leading-relaxed mt-3 font-mono">{line}</p>;
                  }
                  return line ? <p key={li} className="mt-2">{line}</p> : <div key={li} className="mt-2" />;
                })}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Footer Note */}
        <div className="glass-panel rounded-2xl border border-brand-border p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-brand-indigo/10 text-brand-indigo flex items-center justify-center flex-shrink-0">
            <Mail className="w-5 h-5" />
          </div>
          <div className="flex-grow">
            <p className="text-sm font-semibold text-white mb-0.5">Legal questions?</p>
            <p className="text-xs text-gray-400">Contact our legal team at <a href="mailto:legal@medclinicx.com" className="text-brand-cyan hover:underline">legal@medclinicx.com</a></p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link href="/privacy" className="text-xs font-semibold text-brand-cyan hover:underline">Privacy Policy</Link>
            <Link href="/hipaa" className="text-xs font-semibold text-brand-indigo hover:underline">HIPAA Policy</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
