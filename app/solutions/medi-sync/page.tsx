"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Sparkles, Brain, Shield, Users, Activity,
  CheckCircle, TrendingUp, Lock, ChevronDown, LayoutDashboard,
  Stethoscope, Globe, Database, Clock, Building2, AlertTriangle,
  ShieldCheck, Eye, ExternalLink, Terminal, Network, Workflow, Play
} from "lucide-react";

/* --- Types --- */
interface Feature { icon: React.ReactNode; title: string; desc: string; badge?: string; }
interface Differentiator { icon: React.ReactNode; title: string; subtitle: string; desc: string; color: string; glow: string; }
interface FAQ { q: string; a: string; }

interface PatientRecord {
  id: string;
  name: string;
  dob: string;
  recordId: string;
  gender: string;
  conditions: string[];
  allergies: string[];
  medications: string[];
  notes: string;
  timeline: { year: string; title: string; desc: string; }[];
}

interface AuditLog {
  id: string;
  user: string;
  action: string;
  time: string;
  ipHash: string;
  status: "Success" | "Flagged";
}

/* =======================================================
   DATA
  ======================================================= */

const stats = [
  { value: "25,000+", label: "Records Synced Daily", icon: <Database className="w-5 h-5" /> },
  { value: "120K+", label: "API Operations / Hour", icon: <Activity className="w-5 h-5" /> },
  { value: "< 1.2s", label: "Average Sync Latency", icon: <Clock className="w-5 h-5" /> },
  { value: "99.98%", label: "Sync Success Rate", icon: <TrendingUp className="w-5 h-5" /> },
  { value: "450+", label: "Developer Sandbox Keys", icon: <Lock className="w-5 h-5" /> },
  { value: "100%", label: "HIPAA & FHIR Compliant", icon: <Shield className="w-5 h-5" /> }
];

const coreFeatures: Feature[] = [
  { icon: <Brain className="w-5 h-5" />, title: "AI Clinical Copilot", desc: "Allows clinicians to execute natural language queries across EHR databases and generate automated patient summaries.", badge: "Flagship" },
  { icon: <Network className="w-5 h-5" />, title: "HL7 & FHIR Gateway", desc: "Translates and synchronizes data natively with Epic, Cerner, eClinicalWorks, and Athenahealth databases.", badge: "Standard" },
  { icon: <Sparkles className="w-5 h-5" />, title: "Smart Normalization Engine", desc: "Auto-maps raw incoming data payloads into standardized FHIR resources without manual mapping rules.", badge: "Smart" },
  { icon: <Activity className="w-5 h-5" />, title: "Real-time Sync Monitor", desc: "Displays transaction volumes, active pipelines, and logs sync failures with immediate rollback protocols.", badge: "Smart" },
  { icon: <AlertTriangle className="w-5 h-5" />, title: "AI Data Quality Checker", desc: "Scans medical records, highlighting incomplete formats, duplicate IDs, and missing allergy parameters.", badge: "New" },
  { icon: <Users className="w-5 h-5" />, title: "Patient Portal Bridge", desc: "Provides bidirectional synchronization of records, lab reports, and appointment records back to the portal UI.", badge: "Bidirectional" },
  { icon: <LayoutDashboard className="w-5 h-5" />, title: "Developer API Console", desc: "Includes live sandbox environment, API key rotations, request logs, and interactive endpoint docs.", badge: "Developer" },
  { icon: <Workflow className="w-5 h-5" />, title: "Smart Workflows", desc: "Executes rule-based triggers like dispatching SMS reminders or updating CRMs upon patient discharge events.", badge: "Workflow" },
  { icon: <Lock className="w-5 h-5" />, title: "eSign Consent Vault", desc: "Maintains cryptographically secured patient consent logs authorizing records transfers.", badge: "HIPAA" },
  { icon: <ShieldCheck className="w-5 h-5" />, title: "IP Audit Logging", desc: "Records every single PHI access action permanently with secure hashes to verify compliance status." },
  { icon: <Building2 className="w-5 h-5" />, title: "Multi-Clinic Architecture", desc: "Isolates clinical departments and organizations logically, preventing database leaks." },
  { icon: <Eye className="w-5 h-5" />, title: "Access Log Examiner", desc: "Allows security officers to inspect which doctor, developer, or patient read specific charts." }
];

const differentiators: Differentiator[] = [
  { icon: <Brain className="w-7 h-7" />, title: "AI Healthcare Data Copilot", subtitle: "Dialogue-based chart discovery", desc: "Clinicians search patient records, ask details about historical trends, and request diagnosis Summaries using medical NLP models.", color: "from-brand-cyan/20 to-brand-indigo/10", glow: "rgba(6,182,212,0.15)" },
  { icon: <Network className="w-7 h-7" />, title: "Universal EHR Middleware", subtitle: "Connect once, route everywhere", desc: "A singular integration endpoint translates disparate data formats (HL7 v2, CCDA, custom REST/SOAP) into standardized FHIR resources.", color: "from-brand-indigo/20 to-purple-500/10", glow: "rgba(99,102,241,0.15)" },
  { icon: <Sparkles className="w-7 h-7" />, title: "Automated Data Normalization", subtitle: "Zero code schemas mapping", desc: "AI engine detects field headers (e.g. birth_date vs. DOB) and normalizes them into standard schema paths automatically on save.", color: "from-brand-emerald/20 to-brand-cyan/10", glow: "rgba(16,185,129,0.15)" },
  { icon: <Workflow className="w-7 h-7" />, title: "SaaS Workflow Engine", subtitle: "Automate clinical pipelines", desc: "Configure event-driven triggers: when lab reports post, notify the primary practitioner, schedule follow-ups, and update billing charts.", color: "from-amber-500/20 to-orange-500/10", glow: "rgba(245,158,11,0.15)" },
  { icon: <AlertTriangle className="w-7 h-7" />, title: "AI Quality & Completeness Audit", subtitle: "Identify clinical data gaps", desc: "Scans incoming records and scores overall data quality (e.g. 96%), alerting receptionists to collect missing details before patient check-ins.", color: "from-rose-500/20 to-pink-500/10", glow: "rgba(244,63,94,0.15)" },
  { icon: <LayoutDashboard className="w-7 h-7" />, title: "Developer Center & Sandbox", subtitle: "API infrastructure built for scale", desc: "SaaS developers register, acquire API credentials, configure webhook routes, and inspect call histories inside a secure environment.", color: "from-violet-500/20 to-brand-indigo/10", glow: "rgba(139,92,246,0.15)" }
];

const faqs: FAQ[] = [
  { q: "What standard protocols does MediSync AI support?", a: "MediSync AI supports HL7 v2, HL7 v3, C-CDA, FHIR R4, DICOM, and custom JSON/XML REST/SOAP API payload translations natively." },
  { q: "Is the platform HIPAA and SOC2 compliant?", a: "Yes. All Protected Health Information (PHI) is encrypted using AES-256 at rest and TLS 1.3 in transit. Full access trails are tracked and secured permanently with cryptographic hashes." },
  { q: "How does the AI Clinical Copilot work?", a: "It utilizes a secure, clinically-tuned medical NLP engine to process natural language queries. Clinicians can request patient journey summaries or query records without clicking multiple tabs." },
  { q: "Can we connect custom clinic software to EHR systems?", a: "Absolutely. MediSync AI serves as a middleware layer, exposing clean RESTful APIs and webhooks that allow developers to connect patient portals, booking forms, and mobile apps." },
  { q: "What is the Universal FHIR Normalization Engine?", a: "Different EHRs and software store data using different fields (e.g., patient_name vs. fullName). Our normalization engine dynamically maps and standardizes these into standard FHIR resource structures." },
  { q: "How are webhook retries managed?", a: "Webhooks utilize an exponential backoff retry mechanism. If a target server drops, MediSync retries up to 10 times over a 24-hour period, logging delivery payloads." },
  { q: "Does the system support multi-organization layouts?", a: "Yes. MediSync handles multi-tenant deployments, allowing hospital groups to manage separate clinics under separate permission scopes with strict logical database isolation." },
  { q: "How does the sync monitoring dashboard help clinic staff?", a: "It provides real-time transaction graphs, success metrics, and logs error codes. If a sync fails, receptionists see which data fields (e.g. missing phone numbers) blocked the transaction." },
  { q: "Can patients control which medical history is shared?", a: "Yes. The platform is designed to connect to consent gateways, giving patients direct controls to grant or revoke specific document, note, and lab access authorizations." },
  { q: "How do we generate API keys for developers?", a: "Clinic administrators or developers create keys in the Developer Portal, configure webhook triggers, and set granular read/write scopes for specific EHR databases." },
  { q: "What EHR databases are supported out of the box?", a: "We support integrations for Epic, Cerner, Athenahealth, eClinicalWorks, Allscripts, Practice Fusion, and legacy SQL databases." },
  { q: "Is there a local sandbox environment?", a: "Yes. Developers get full access to a mock EHR database sandbox, enabling them to test GET and POST endpoints without editing live patient records." },
  { q: "How does the AI Data Quality Score work?", a: "It evaluates records for completeness (e.g., matching IDs, contact fields, allergy parameters) and outputs a percentage score, highlighting database fields needing rectification." },
  { q: "Does MediSync support custom database mapping fields?", a: "Yes. The Mapping Engine allows you to define custom JSON paths to map system-specific attributes (e.g. custom membership cards) to internal storage objects." },
  { q: "How does the workflow automation engine integrate with SMS?", a: "You can define n8n-style event rules. For example, triggering a 'patient.discharged' event fires a webhook that sends follow-up instructions via Twilio SMS." },
  { q: "Are document uploads encrypted?", a: "Reports, clinical PDFs, and scan images are uploaded directly to private AWS S3 buckets. MediSync serves these files using secure pre-signed URLs that expire after 5 minutes." },
  { q: "What is the clinical data query limit?", a: "The REST APIs support standard offset pagination, request throttling, and caching strategies via Redis to handle enterprise transaction volumes." },
  { q: "Can doctors modify patient histories synced via MediSync?", a: "Write-back queries are governed by role permissions. Doctors can add medical notes and diagnoses, which MediSync syncs to the primary EHR." },
  { q: "How long does a clinic integration take?", a: "Standard API setups take under 48 hours. Enterprise EHR middleware bridges with legacy systems are completed in 2-3 weeks." },
  { q: "What hosting options are supported?", a: "MediSync is hosted in highly secure AWS clinical zones. We also offer on-premise Docker deployments for enterprise networks requiring local firewalls." }
];

const patientRecords: PatientRecord[] = [
  {
    id: "sarah-smith",
    name: "Sarah Smith",
    dob: "01/10/1995",
    recordId: "REC-12345",
    gender: "Female",
    conditions: ["Chronic Lower Back Pain", "Mild Asthma"],
    allergies: ["Penicillin", "Sulfa Drugs"],
    medications: ["Albuterol HFA", "Ibuprofen 400mg"],
    notes: "Patient reports localized pain in the lumbar region following heavy lifting. Asthma is well-controlled.",
    timeline: [
      { year: "2024", title: "Initial Diagnosis", desc: "Diagnosed with mild asthma and chronic lower back strain." },
      { year: "2025", title: "Medication Adjustment", desc: "Prescribed Ibuprofen for pain flare-ups. Inhaler dosage checked." },
      { year: "2026", title: "Follow-up Completed", desc: "Reported 40% pain reduction following physical therapy sessions." }
    ]
  },
  {
    id: "john-miller",
    name: "John Miller",
    dob: "11/12/1982",
    recordId: "REC-78901",
    gender: "Male",
    conditions: ["Type 2 Diabetes", "Hypertension"],
    allergies: ["Aspirin"],
    medications: ["Metformin 500mg", "Lisinopril 10mg"],
    notes: "A1C levels checked at 6.8%. BP metrics stable at 128/80. Adhering to diet modifications.",
    timeline: [
      { year: "2024", title: "Diabetes Triage", desc: "Elevated blood glucose levels checked. Started Metformin therapy." },
      { year: "2025", title: "Cardiology Review", desc: "Hypertension checked. Started Lisinopril medication rules." },
      { year: "2026", title: "Annual Screen", desc: "Stable A1C check. Recommended eye checkup and exercise routine." }
    ]
  },
  {
    id: "emily-chen",
    name: "Emily Chen",
    dob: "05/24/1990",
    recordId: "REC-34567",
    gender: "Female",
    conditions: ["Seasonal Allergies", "Hypothyroidism"],
    allergies: ["None reported"],
    medications: ["Levothyroxine 50mg", "Fluticasone spray"],
    notes: "Thyroid metrics within normal limits (TSH 2.1). Seasonal allergy flares under control with nasal spray.",
    timeline: [
      { year: "2024", title: "Endocrine Screening", desc: "Diagnosed with Hypothyroidism. Initiated Levothyroxine treatment." },
      { year: "2025", title: "Dosage Adjust", desc: "Thyroid panels checked. Levothyroxine dose increased from 25mg to 50mg." },
      { year: "2026", title: "Allergy Assessment", desc: "Seasonal rhinitis logged. Prescribed Fluticasone nasal spray." }
    ]
  }
];

const mockAuditLogs: AuditLog[] = [
  { id: "1", user: "Dr. Gregory House", action: "Viewed patient medical chart (sarah-smith)", time: "10:30 AM", ipHash: "192.168.1.*** (SHA-256)", status: "Success" },
  { id: "2", user: "System Scheduler", action: "Synchronized appointment calendar with Cerner EHR", time: "10:32 AM", ipHash: "System Pipeline", status: "Success" },
  { id: "3", user: "Dev API Key (Auth: write)", action: "Created new patient record (john-miller) via POST", time: "10:35 AM", ipHash: "44.204.**.** (SHA-256)", status: "Success" },
  { id: "4", user: "Dr. Gregory House", action: "Edited clinical notes on patient record (emily-chen)", time: "10:38 AM", ipHash: "192.168.1.*** (SHA-256)", status: "Success" },
  { id: "5", user: "Unverified Developer API Key", action: "Attempted access to clinical summaries (Access Denied)", time: "10:41 AM", ipHash: "185.220.***.** (SHA-256)", status: "Flagged" }
];

/* =======================================================
   COMPONENT
  ======================================================= */

export default function MediSyncPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("AICopilot");

  // Tab 1: AI Copilot States
  const [copilotHistory, setCopilotHistory] = useState([
    { role: "assistant", text: "MediSync AI Data Assistant active. Ask a question regarding connected clinical records or patient metrics." }
  ]);
  const [copilotLoading, setCopilotLoading] = useState(false);

  // Tab 2: Sync Monitor States
  const [systems, setSystems] = useState([
    { name: "Hospital EHR Database", status: "Connected", icon: <Database className="w-4 h-4" /> },
    { name: "Lab Gateway API", status: "Connected", icon: <Building2 className="w-4 h-4" /> },
    { name: "Billing & Insurance portal", status: "Connected", icon: <Lock className="w-4 h-4" /> },
    { name: "Patient Client App", status: "Connected", icon: <Globe className="w-4 h-4" /> }
  ]);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncProgress, setSyncProgress] = useState(0);
  const [syncLogs, setSyncLogs] = useState<string[]>([
    "Ready to initiate data synchronization pipeline..."
  ]);

  // Tab 3: Patient Journey States
  const [selectedPatientId, setSelectedPatientId] = useState("sarah-smith");

  // Tab 4: Webhooks States
  const [webhookUrl, setWebhookUrl] = useState("https://api.myclinic.org/webhooks");
  const [webhookTrigger, setWebhookTrigger] = useState("patient.updated");
  const [webhookConsole, setWebhookConsole] = useState<string[]>([]);
  const [webhookTesting, setWebhookTesting] = useState(false);

  // AI Copilot Actions
  const handleCopilotQuery = (query: string, reply: string) => {
    if (copilotLoading) return;
    setCopilotHistory(prev => [...prev, { role: "user", text: query }]);
    setCopilotLoading(true);

    setTimeout(() => {
      setCopilotHistory(prev => [...prev, { role: "assistant", text: reply }]);
      copilotLoadingChecked();
    }, 700);
  };

  const copilotLoadingChecked = () => {
    setCopilotLoading(false);
  };

  // Sync Simulation Run
  const handleTriggerSync = () => {
    if (isSyncing) return;
    setIsSyncing(true);
    setSyncProgress(0);
    setSyncLogs([
      "[Sync Info] Activating secure HL7/FHIR connection channels...",
      "[Sync Info] Verifying organization database credentials... Checked."
    ]);

    const steps = [
      { p: 25, log: "[Sync Info] Fetching un-synced patient data records from Epic EHR database..." },
      { p: 50, log: "[Sync Info] Running AI Field Normalization: full_name <- patient_name; dob <- birth_date." },
      { p: 75, log: "[Sync Info] Checking medical record completeness: validated allergies lists & diagnoses schemas." },
      { p: 100, log: "[Sync Success] Successfully synchronized 14 records with external patient database." }
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setSyncProgress(step.p);
        setSyncLogs(prev => [...prev, step.log]);
        if (step.p === 100) {
          setIsSyncing(false);
        }
      }, (idx + 1) * 800);
    });
  };

  // System status toggle
  const toggleSystemConnection = (index: number) => {
    setSystems(prev =>
      prev.map((sys, idx) => {
        if (idx === index) {
          return { ...sys, status: sys.status === "Connected" ? "Disconnected" : "Connected" };
        }
        return sys;
      })
    );
  };

  // Webhook Test Trigger
  const handleTestWebhook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!webhookUrl.trim() || webhookTesting) return;
    setWebhookTesting(true);
    setWebhookConsole(prev => [...prev, `[Webhook Call] Dispatching POST payload to ${webhookUrl}...`]);

    setTimeout(() => {
      const mockPayload = {
        event: webhookTrigger,
        timestamp: new Date().toISOString(),
        data: {
          patientId: "REC-12345",
          full_name: "Sarah Smith",
          dob: "01/10/1995",
          updatedFields: {
            conditions: ["Chronic Lower Back Pain", "Mild Asthma", "Lumbar strain updated"]
          }
        }
      };
      setWebhookConsole(prev => [
        ...prev,
        `[Webhook Response] Target endpoint answered with HTTP 200 OK.`,
        `[Webhook Data] Payload delivered:\n${JSON.stringify(mockPayload, null, 2)}`
      ]);
      setWebhookTesting(false);
    }, 900);
  };

  const selectedPatient = patientRecords.find(p => p.id === selectedPatientId) || patientRecords[0];

  return (
    <div className="relative overflow-hidden">
      {/* Glow Effects */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[130px] -z-10 pointer-events-none" />
      <div className="fixed top-1/3 right-0 w-[500px] h-[500px] bg-brand-indigo/5 rounded-full blur-[130px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[400px] h-[400px] bg-brand-emerald/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        
        {/* -- BREADCRUMB -- */}
        <div className="mb-8 flex items-center space-x-2 text-xs">
          <Link href="/" className="text-gray-500 hover:text-brand-cyan transition-colors">Home</Link>
          <span className="text-gray-600">/</span>
          <Link href="/#solutions" className="text-gray-500 hover:text-brand-cyan transition-colors">Solutions</Link>
          <span className="text-gray-600">/</span>
          <span className="text-white">MediSync AI</span>
        </div>

        {/* -- HERO SECTION -- */}
        <section className="relative mb-24 pt-8 md:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headline */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col space-y-6 text-left"
            >
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 self-start bg-gradient-to-r from-brand-cyan/15 to-brand-indigo/15 border border-brand-cyan/20 rounded-full px-4.5 py-1.5 shadow-lg shadow-brand-cyan/5">
                <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">MediSync AI Platform</span>
                <Sparkles className="w-3 h-3 text-brand-cyan" />
              </div>

              {/* Title */}
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl xl:text-5xl text-white leading-[1.15] tracking-tight">
                Secure Healthcare Data.<br />
                <span className="text-gradient-cyan-indigo">AI Normalization.</span><br />
                <span className="text-gradient-emerald-cyan">EHR Synced.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Connect your medical applications, portals, and websites with major EHR systems. Normalize data payloads automatically using AI clinical middleware engines.
              </p>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="#simulator"
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold px-5 py-3.5 rounded-xl hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-brand-cyan/25 text-xs whitespace-nowrap"
                >
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  <span>Try Simulator</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <a
                  href="https://medi-sync-topaz.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 glass-panel border border-brand-border text-white font-semibold px-5 py-3.5 rounded-xl hover:border-brand-cyan/40 hover:scale-[1.02] active:scale-[0.98] transition-all text-xs whitespace-nowrap"
                >
                  <Globe className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>Launch Live App</span>
                </a>
                <a
                  href="https://github.com/alimubashir822/MediSync"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 glass-panel border border-brand-border text-gray-300 font-semibold px-5 py-3.5 rounded-xl hover:border-brand-cyan/40 hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all text-xs whitespace-nowrap"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-brand-indigo" />
                  <span>View Source</span>
                </a>
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2.5 pt-4">
                {[
                  { icon: <Shield className="w-3.5 h-3.5 text-brand-emerald" />, label: "HIPAA Compliant Data Layer", bg: "bg-brand-emerald/10 border-brand-emerald/20" },
                  { icon: <Lock className="w-3.5 h-3.5 text-brand-cyan" />, label: "AES-256 PHI Hashing", bg: "bg-brand-cyan/10 border-brand-cyan/20" },
                  { icon: <CheckCircle className="w-3.5 h-3.5 text-brand-indigo" />, label: "Epic/Cerner FHIR APIs", bg: "bg-brand-indigo/10 border-brand-indigo/20" },
                ].map((tag) => (
                  <div key={tag.label} className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full border ${tag.bg}`}>
                    {tag.icon}
                    <span className="text-[10px] font-semibold text-gray-300">{tag.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Sandbox Dashboard Container */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-7 relative"
            >
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-cyan to-brand-indigo rounded-2xl blur-xl opacity-20 transition-all duration-1000 -z-10" />

              <div className="glass-panel rounded-2xl border border-brand-border overflow-hidden">
                
                {/* Simulator Header */}
                <div className="border-b border-brand-border px-5 py-3 flex items-center justify-between bg-white/2">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-6.5 h-6.5 rounded-lg bg-gradient-to-br from-brand-cyan to-brand-indigo flex items-center justify-center">
                      <Database className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="font-display font-bold text-white text-xs tracking-wide">MediSync AI Sandbox</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-brand-emerald/10 border border-brand-emerald/25 rounded-full px-2.5 py-1">
                    <div className="w-1.5 h-1.5 bg-brand-emerald rounded-full animate-pulse" />
                    <span className="text-[10px] text-brand-emerald font-semibold">Sandbox Console</span>
                  </div>
                </div>

                {/* Dashboard Inner Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-brand-border h-[490px]">
                  
                  {/* Left Tab selector */}
                  <div className="md:col-span-4 p-4 space-y-1.5 bg-white/[0.01]">
                    <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-2 px-2">Ecosystem Layers</p>
                    {[
                      { id: "AICopilot", label: "AI Data Copilot", icon: <Brain className="w-3.5 h-3.5" /> },
                      { id: "SyncMonitor", label: "Sync Monitor", icon: <Activity className="w-3.5 h-3.5" /> },
                      { id: "PatientTimeline", label: "Patient Journey", icon: <Stethoscope className="w-3.5 h-3.5" /> },
                      { id: "DevGateway", label: "Developer APIs", icon: <Terminal className="w-3.5 h-3.5" /> }
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center space-x-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                          activeTab === tab.id
                            ? "bg-gradient-to-r from-brand-cyan/15 to-brand-indigo/15 text-white border border-brand-cyan/20"
                            : "text-gray-400 hover:text-gray-200 hover:bg-white/5 border border-transparent"
                        }`}
                      >
                        {tab.icon}
                        <span>{tab.label}</span>
                      </button>
                    ))}
                    
                    <div className="pt-6">
                      <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-2 px-2">API Security</p>
                      <div className="flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-gray-400">
                        <Lock className="w-3.5 h-3.5" />
                        <span>AES Hashing</span>
                      </div>
                      <div className="flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-gray-400">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>FHIR Auth Guard</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Contents pane */}
                  <div className="md:col-span-8 p-5 overflow-y-auto flex flex-col justify-between h-full bg-brand-bg/20">
                    
                    {/* Tab 1: AI Clinical Copilot */}
                    {activeTab === "AICopilot" && (
                      <div className="flex flex-col h-full justify-between flex-grow">
                        <div className="flex justify-between items-center border-b border-brand-border/60 pb-2 mb-2">
                          <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider flex items-center">
                            <Brain className="w-3.5 h-3.5 text-brand-cyan mr-1.5" />
                            <span>AI Clinical Copilot</span>
                          </span>
                        </div>

                        {/* Conversational messages */}
                        <div className="space-y-3 flex-grow overflow-y-auto max-h-[190px] pr-1 mb-2 font-sans">
                          {copilotHistory.map((msg, i) => (
                            <div key={i} className={`flex space-x-2 ${msg.role === "user" ? "justify-end" : ""}`}>
                              {msg.role === "assistant" && (
                                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-cyan to-brand-indigo flex-shrink-0 flex items-center justify-center text-[8px] text-white">
                                  AI
                                </div>
                              )}
                              <div className={`rounded-xl px-3 py-2 text-[10px] leading-snug border max-w-[85%] ${
                                msg.role === "user"
                                  ? "bg-brand-indigo/15 border-brand-indigo/25 text-white rounded-tr-sm"
                                  : "bg-brand-cyan/8 border-brand-cyan/15 text-gray-200 rounded-tl-sm"
                              }`}>
                                {msg.text}
                              </div>
                            </div>
                          ))}

                          {copilotLoading && (
                            <div className="flex space-x-2">
                              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-cyan to-brand-indigo flex-shrink-0 flex items-center justify-center text-[8px] text-white">
                                AI
                              </div>
                              <div className="bg-brand-cyan/8 border border-brand-cyan/15 rounded-xl rounded-tl-sm px-3 py-2 text-[10px] text-gray-400">
                                <div className="flex items-center space-x-1">
                                  <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-bounce" />
                                  <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-bounce [animation-delay:0.2s]" />
                                  <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-bounce [animation-delay:0.4s]" />
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Seed questions */}
                        <div className="space-y-2 border-t border-brand-border/60 pt-2.5 flex flex-col justify-end">
                          <p className="text-[8px] text-gray-500 font-bold uppercase tracking-wider">Select Clinical Query:</p>
                          <div className="flex flex-col space-y-1.5">
                            <button
                              onClick={() => handleCopilotQuery(
                                "Show records summary for Sarah Smith.",
                                "Patient Sarah Smith (DOB: 01/10/1995, REC-12345). Active Conditions: Chronic Lower Back Pain, Mild Asthma. Medications: Albuterol, Ibuprofen. Lumbar strain reports show asthma is well-controlled.",
                              )}
                              className="text-[9px] border border-brand-cyan/20 bg-brand-cyan/5 hover:bg-brand-cyan/10 text-brand-cyan rounded-lg px-2.5 py-1 text-left flex items-center justify-between"
                            >
                              <span>&quot;Summarize Sarah Smith&apos;s history&quot;</span>
                              <ArrowRight className="w-2.5 h-2.5" />
                            </button>
                            <button
                              onClick={() => handleCopilotQuery(
                                "Find diabetic patients with no appointments.",
                                "Checked connected Epic EHR database. Found 1 patient matches criteria: John Miller (REC-78901). Last annual checkup was completed in 2026. Suggest scheduling follow-up consultation.",
                              )}
                              className="text-[9px] border border-brand-cyan/20 bg-brand-cyan/5 hover:bg-brand-cyan/10 text-brand-cyan rounded-lg px-2.5 py-1 text-left flex items-center justify-between"
                            >
                              <span>&quot;Show diabetic checkups needed&quot;</span>
                              <ArrowRight className="w-2.5 h-2.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Tab 2: Sync Monitor & Connections */}
                    {activeTab === "SyncMonitor" && (
                      <div className="flex flex-col h-full justify-between flex-grow">
                        <div>
                          <div className="flex justify-between items-center border-b border-brand-border/60 pb-2 mb-3">
                            <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider">FHIR Connection Manager</span>
                            <span className="text-[8px] text-gray-400">Real-time status</span>
                          </div>

                          {/* Systems list toggles */}
                          <div className="grid grid-cols-2 gap-2 mb-3">
                            {systems.map((sys, idx) => (
                              <button
                                key={sys.name}
                                onClick={() => toggleSystemConnection(idx)}
                                className={`p-2 border rounded-xl flex items-center justify-between transition-colors text-left ${
                                  sys.status === "Connected"
                                    ? "bg-slate-900/60 border-brand-emerald/20 hover:border-brand-emerald/40"
                                    : "bg-slate-900/30 border-red-500/10 hover:border-red-500/30"
                                }`}
                              >
                                <div className="flex items-center space-x-2">
                                  <div className={sys.status === "Connected" ? "text-brand-emerald" : "text-red-400"}>
                                    {sys.icon}
                                  </div>
                                  <span className="text-[9px] font-semibold text-gray-200 truncate max-w-[90px]">{sys.name}</span>
                                </div>
                                <span className={`text-[8px] font-bold uppercase ${sys.status === "Connected" ? "text-brand-emerald" : "text-red-400"}`}>
                                  {sys.status === "Connected" ? "ON" : "OFF"}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Progress and sync log output */}
                        <div className="bg-black/45 border border-brand-border rounded-xl p-3 flex-grow flex flex-col justify-between font-mono text-[9px] max-h-[170px] overflow-y-auto mb-2.5">
                          <div className="space-y-1 overflow-y-auto max-h-[110px] text-gray-400 pr-1">
                            {syncLogs.map((log, i) => (
                              <p key={i}>{log}</p>
                            ))}
                          </div>
                          
                          {isSyncing && (
                            <div className="pt-2">
                              <div className="flex justify-between text-[8px] text-brand-cyan mb-1 font-bold">
                                <span>PROCESSING FHIR SYNC PIPELINE...</span>
                                <span>{syncProgress}%</span>
                              </div>
                              <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
                                <div className="bg-brand-cyan h-full transition-all duration-300" style={{ width: `${syncProgress}%` }} />
                              </div>
                            </div>
                          )}
                        </div>

                        <button
                          onClick={handleTriggerSync}
                          disabled={isSyncing}
                          className="w-full bg-gradient-to-r from-brand-cyan to-brand-indigo hover:opacity-90 disabled:opacity-50 text-white font-bold py-2 rounded-xl text-[10px] transition-all flex items-center justify-center space-x-1.5"
                        >
                          <Play className="w-3 h-3" />
                          <span>{isSyncing ? "Syncing..." : "Simulate Live EHR Sync Pipeline"}</span>
                        </button>
                      </div>
                    )}

                    {/* Tab 3: Patient Journey Timeline */}
                    {activeTab === "PatientTimeline" && (
                      <div className="flex flex-col h-full justify-between flex-grow">
                        <div className="flex justify-between items-center border-b border-brand-border/60 pb-2 mb-2.5">
                          <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider flex items-center">
                            <Stethoscope className="w-3.5 h-3.5 text-brand-cyan mr-1.5" />
                            <span>EHR Clinical Timeline</span>
                          </span>

                          {/* Patient Selector */}
                          <select
                            value={selectedPatientId}
                            onChange={(e) => setSelectedPatientId(e.target.value)}
                            className="bg-slate-900 border border-brand-border text-[9px] text-gray-300 rounded px-1.5 py-0.5 focus:outline-none"
                          >
                            <option value="sarah-smith">Sarah Smith (Asthma)</option>
                            <option value="john-miller">John Miller (Diabetes)</option>
                            <option value="emily-chen">Emily Chen (Thyroid)</option>
                          </select>
                        </div>

                        {/* Selected Patient Details */}
                        <div className="space-y-3 text-[10px] flex-grow overflow-y-auto max-h-[310px] pr-1">
                          
                          {/* Profile Box */}
                          <div className="bg-slate-950/40 border border-brand-border p-2.5 rounded-xl grid grid-cols-2 gap-2">
                            <div>
                              <p className="text-[8px] text-gray-500 uppercase font-bold">Patient Identification</p>
                              <p className="font-bold text-white">{selectedPatient.name} &bull; {selectedPatient.gender}</p>
                              <p className="text-gray-400 text-[9px]">{selectedPatient.dob} ({selectedPatient.recordId})</p>
                            </div>
                            <div>
                              <p className="text-[8px] text-gray-500 uppercase font-bold">Allergies Alerts</p>
                              <div className="flex flex-wrap gap-1 mt-0.5">
                                {selectedPatient.allergies.map(all => (
                                  <span key={all} className={`px-1.5 py-0.5 rounded text-[8px] font-bold border ${
                                    all === "None reported"
                                      ? "bg-brand-emerald/10 border-brand-emerald/20 text-brand-emerald"
                                      : "bg-red-500/10 border-red-500/20 text-red-400"
                                  }`}>
                                    {all}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Medical Timeline */}
                          <div className="space-y-2">
                            <p className="font-bold text-white flex items-center">
                              <Clock className="w-3.5 h-3.5 text-brand-cyan mr-1.5" />
                              <span>Clinical Journey Timeline</span>
                            </p>
                            
                            <div className="relative border-l border-brand-border pl-4 ml-2.5 space-y-3.5 py-1">
                              {selectedPatient.timeline.map((item, idx) => (
                                <div key={idx} className="relative">
                                  {/* Dot */}
                                  <div className="absolute -left-[20.5px] top-1 w-2.5 h-2.5 rounded-full bg-brand-cyan border-2 border-brand-bg shadow-md shadow-brand-cyan/30" />
                                  
                                  <div>
                                    <span className="text-[8px] font-bold text-brand-cyan font-mono">{item.year}</span>
                                    <h4 className="text-white font-bold text-[10px]">{item.title}</h4>
                                    <p className="text-gray-400 text-[9px] leading-relaxed">{item.desc}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Tab 4: Developer Webhooks & Field Mapper */}
                    {activeTab === "DevGateway" && (
                      <div className="flex flex-col h-full justify-between flex-grow text-[10px]">
                        <div>
                          <div className="flex justify-between items-center border-b border-brand-border/60 pb-2 mb-2.5">
                            <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider">Webhooks Sandbox Integration</span>
                          </div>

                          {/* Webhook Form */}
                          <form onSubmit={handleTestWebhook} className="space-y-2 bg-slate-900/40 border border-brand-border p-2.5 rounded-xl mb-2.5">
                            <div className="grid grid-cols-2 gap-2">
                              <div>
                                <label className="text-[8px] text-gray-500 uppercase font-bold tracking-wider mb-1 block">Trigger Event</label>
                                <select
                                  value={webhookTrigger}
                                  onChange={(e) => setWebhookTrigger(e.target.value)}
                                  className="w-full bg-slate-950 border border-brand-border text-gray-300 rounded-lg px-1.5 py-1.5 focus:outline-none text-[9px]"
                                >
                                  <option value="patient.updated">patient.updated</option>
                                  <option value="appointment.scheduled">appointment.scheduled</option>
                                  <option value="lab_results.uploaded">lab_results.uploaded</option>
                                </select>
                              </div>
                              <div>
                                <label className="text-[8px] text-gray-500 uppercase font-bold tracking-wider mb-1 block">Authentication Scopes</label>
                                <div className="text-gray-400 font-mono text-[9px] py-1.5 bg-slate-950 border border-brand-border rounded px-2">
                                  Scope: write_phi_logs
                                </div>
                              </div>
                            </div>
                            
                            <div>
                              <label className="text-[8px] text-gray-500 uppercase font-bold tracking-wider mb-1 block">Endpoint URL Target</label>
                              <div className="flex gap-1.5">
                                <input
                                  type="text"
                                  value={webhookUrl}
                                  onChange={(e) => setWebhookUrl(e.target.value)}
                                  placeholder="https://api.myclinic.org/webhooks"
                                  className="flex-grow bg-slate-950 border border-brand-border text-gray-300 rounded-lg px-2.5 py-1 focus:outline-none focus:border-brand-cyan text-[9px] font-mono"
                                />
                                <button
                                  type="submit"
                                  disabled={webhookTesting}
                                  className="bg-brand-cyan hover:bg-brand-cyan/90 disabled:opacity-50 text-brand-bg font-extrabold px-3 py-1 rounded-lg text-[9px] transition-colors whitespace-nowrap"
                                >
                                  {webhookTesting ? "Delivering..." : "Test Event"}
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>

                        {/* Webhook Output Console */}
                        <div className="bg-black/55 border border-brand-border rounded-xl p-3 flex-grow overflow-y-auto max-h-[170px] font-mono text-[8px] text-gray-400">
                          <p className="text-brand-indigo font-bold mb-1">{"// Event delivery console output:"}</p>
                          {webhookConsole.length === 0 ? (
                            <p className="text-gray-600 italic">No events generated yet. Register endpoint and click &quot;Test Event&quot;.</p>
                          ) : (
                            <div className="space-y-1.5 whitespace-pre-wrap">
                              {webhookConsole.map((log, i) => (
                                <p key={i}>{log}</p>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                  </div>

                </div>

              </div>
            </motion.div>

          </div>
        </section>

        {/* -- STATS GRID -- */}
        <section className="mb-24 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {stats.map((s, idx) => (
              <div key={idx} className="glass-panel border border-brand-border rounded-xl p-4.5 text-center flex flex-col items-center justify-between">
                <div className="w-9 h-9 rounded-lg bg-white/[0.02] border border-brand-border flex items-center justify-center text-brand-cyan mb-3.5">
                  {s.icon}
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-white text-lg leading-tight mb-1">{s.value}</h3>
                  <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider leading-snug">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-brand-border mb-20" />

        {/* -- 12 CORE PLATFORM FEATURES -- */}
        <section className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-bold text-3xl text-white tracking-tight">
              Enterprise Data Integration Features
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Standardize, route, and audit clinical information across all connected apps with developer gateways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFeatures.map((f, idx) => (
              <div key={idx} className="glass-panel border border-brand-border rounded-2xl p-5 hover:border-brand-cyan/20 transition-all flex flex-col justify-between bg-white/[0.01]">
                <div>
                  <div className="flex justify-between items-start mb-4.5">
                    <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-brand-cyan">
                      {f.icon}
                    </div>
                    {f.badge && (
                      <span className="px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/25">
                        {f.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2">{f.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-brand-border mb-20" />

        {/* -- ADVANCED DIFFERENTIATORS -- */}
        <section className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-bold text-3xl text-white tracking-tight">
              Platform Differentiators
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Why MediSync AI serves as an clinical intelligence middleware layer, not just a static data bridge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((d, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-2xl border border-brand-border hover:border-brand-cyan/30 transition-all duration-300 p-6 bg-gradient-to-b from-white/[0.02] to-transparent">
                {/* Glow on hover */}
                <div
                  className="absolute -right-20 -bottom-20 w-44 h-44 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"
                  style={{ backgroundColor: d.glow }}
                />
                
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-brand-cyan group-hover:scale-105 transition-transform duration-300">
                    {d.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm">{d.title}</h3>
                    {d.subtitle && <p className="text-[9px] text-brand-cyan font-bold">{d.subtitle}</p>}
                  </div>
                </div>
                
                <p className="text-gray-400 text-xs leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-brand-border mb-20" />

        {/* -- PRISMA DATABASE SCHEMATICS -- */}
        <section className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-bold text-3xl text-white tracking-tight">
              Database Architecture (PostgreSQL Schema)
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Relational schema layout mapping active connections, clinical records, doctor summaries, developer keys, and webhook channels.
            </p>
          </div>

          <div className="glass-panel border border-brand-border rounded-2xl overflow-hidden p-6 md:p-8 bg-slate-950/40">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              
              {/* Left Side: Schema Tables info */}
              <div className="md:col-span-4 space-y-2">
                <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-2 px-1">Prisma Models Index</p>
                {[
                  { name: "User & Organization", desc: "Granular credential profiles separating clinic administrators, doctors, and developers." },
                  { name: "Patient & MedicalRecord", desc: "Structured clinical resources holding patient details, allergies, and diagnoses fields." },
                  { name: "Integration & SyncJob", desc: "Tracks active database sync streams, transaction statuses, and API retry logs." },
                  { name: "APIKey & Webhook", desc: "Secures developer keys authorizations and event triggers configuration paths." },
                ].map((schema, idx) => (
                  <div key={idx} className="p-3 border border-brand-border/60 hover:border-brand-cyan/20 bg-slate-900/30 rounded-xl">
                    <p className="text-xs font-bold text-white flex items-center">
                      <Database className="w-3.5 h-3.5 text-brand-cyan mr-1.5" />
                      <span>{schema.name}</span>
                    </p>
                    <p className="text-[10px] text-gray-400 mt-1 leading-snug">{schema.desc}</p>
                  </div>
                ))}
              </div>

              {/* Right Side: Code Block */}
              <div className="md:col-span-8 overflow-x-auto text-[10px] font-mono leading-relaxed text-gray-300 border border-brand-border/60 bg-black/40 rounded-xl p-5">
                <p className="text-brand-cyan mb-2">{"// Prisma database schemas (MediSync AI)"}</p>
                <div className="space-y-4">
                  <div>
                    <span className="text-brand-indigo">model</span> <span className="text-white font-bold">Patient</span> &#123;
                    <div className="pl-4 text-gray-400">
                      id            String           @id @default(uuid())<br />
                      fullName      String<br />
                      dob           DateTime<br />
                      recordId      String           @unique<br />
                      records       MedicalRecord[]<br />
                      appointments  Appointment[]
                    </div>
                    &#125;
                  </div>
                  <div>
                    <span className="text-brand-indigo">model</span> <span className="text-white font-bold">MedicalRecord</span> &#123;
                    <div className="pl-4 text-gray-400">
                      id            String           @id @default(uuid())<br />
                      patientId     String<br />
                      conditions    String[]<br />
                      allergies     String[]<br />
                      medications   String[]<br />
                      patient       Patient          @relation(fields: [patientId], references: [id])
                    </div>
                    &#125;
                  </div>
                  <div>
                    <span className="text-brand-indigo">model</span> <span className="text-white font-bold">Webhook</span> &#123;
                    <div className="pl-4 text-gray-400">
                      id            String           @id @default(uuid())<br />
                      url           String<br />
                      triggerEvent  String           @default(&quot;patient.updated&quot;)<br />
                      active        Boolean          @default(true)
                    </div>
                    &#125;
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <hr className="border-brand-border mb-20" />

        {/* -- AUDIT TRAIL SECURITY PANEL -- */}
        <section className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-bold text-3xl text-white tracking-tight">
              HIPAA Audit Trails & Logs
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Maintains permanent audit log trails documenting database queries, EHR edits, and key calls.
            </p>
          </div>

          <div className="glass-panel border border-brand-border rounded-2xl overflow-hidden bg-slate-900/5 p-4.5">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-[10px] font-sans">
                <thead>
                  <tr className="border-b border-brand-border/60 text-gray-400 font-semibold">
                    <th className="py-2.5 px-4">Operator User</th>
                    <th className="py-2.5 px-4">Action Log</th>
                    <th className="py-2.5 px-4">Timestamp</th>
                    <th className="py-2.5 px-4">IP Coordinates</th>
                    <th className="py-2.5 px-4 text-right">Access Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-border/40 text-gray-300">
                  {mockAuditLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-white/[0.01]">
                      <td className="py-3 px-4 font-bold text-white">{log.user}</td>
                      <td className="py-3 px-4 text-gray-400 font-mono text-[9px]">{log.action}</td>
                      <td className="py-3 px-4">{log.time}</td>
                      <td className="py-3 px-4 font-mono text-gray-500">{log.ipHash}</td>
                      <td className="py-3 px-4 text-right">
                        <span className={`inline-block px-2 py-0.5 rounded text-[8px] font-bold border ${
                          log.status === "Success"
                            ? "bg-brand-emerald/10 border-brand-emerald/20 text-brand-emerald"
                            : "bg-red-500/10 border-red-500/20 text-red-400"
                        }`}>
                          {log.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <hr className="border-brand-border mb-20" />

        {/* -- FAQs ACCORDION -- */}
        <section className="mb-24 max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display font-bold text-3xl text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Find detailed explanations regarding HL7 synchronization, audit trail locks, data migrations, and schema mappings.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-brand-border rounded-2xl overflow-hidden glass-panel bg-slate-900/10"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-white hover:text-brand-cyan transition-colors"
                >
                  <span className="font-semibold text-xs sm:text-sm pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform duration-300 flex-shrink-0 ${
                      openFaq === idx ? "rotate-180 text-brand-cyan" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-5 pt-0 text-xs sm:text-sm text-gray-400 border-t border-brand-border/60 leading-relaxed bg-black/10">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
