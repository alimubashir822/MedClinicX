"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Sparkles, Brain, HeartPulse, FileText, Calendar,
  MessageSquare, Shield, Users, Activity, FlaskConical, Upload,
  CheckCircle, Star, TrendingUp, Lock, Bell, Zap, ChevronDown,
  LayoutDashboard, Microscope, Stethoscope, BookOpen, Phone,
  Globe, Database, HardDrive, Clock, X, Wallet, Mic, BookMarked,
  RefreshCw, BarChart3, Building2, Syringe, Smile, Heart,
  AlertTriangle, CloudUpload, ShieldCheck, Eye, UserCog,
  Video, ChevronRight, Download, Search, Share2, DollarSign,
  Check, Paperclip, MessagesSquare, ExternalLink, Mail, MessageCircle
} from "lucide-react";

/* --- Types --- */
interface Feature { icon: React.ReactNode; title: string; desc: string; badge?: string; }
interface Differentiator { icon: React.ReactNode; title: string; subtitle: string; desc: string; color: string; glow: string; }
interface FAQ { q: string; a: string; }

interface CampaignTemplate {
  title: string;
  audience: string;
  emailBody: string;
  smsBody: string;
  timeline: string[];
}

/* =======================================================
   DATA
 ======================================================= */

const coreFeatures: Feature[] = [
  { icon: <Zap className="w-5 h-5" />, title: "AI Front Desk Receptionist", desc: "An intelligent chatbot widget that greets visitors, explains procedures, pre-qualifies budgets, and books appointments.", badge: "Flagship" },
  { icon: <Activity className="w-5 h-5" />, title: "Lead Qualification Engine", desc: "Scores incoming clinic inquiries based on patient intent, treatment urgency, and estimated treatment value.", badge: "Smart" },
  { icon: <TrendingUp className="w-5 h-5" />, title: "Healthcare Pipeline CRM", desc: "A medical-specific opportunity tracker mapping patients from first contact to treatment confirmation.", badge: "Unique" },
  { icon: <Bell className="w-5 h-5" />, title: "AI Follow-Up Campaigns", desc: "Automates SMS and email outreach schedules to recover inactive leads who drop off before scheduling consultations.", badge: "Premium" },
  { icon: <RefreshCw className="w-5 h-5" />, title: "Patient Recall Reactivation", desc: "Scans patient history databases for records without recent visits, automatically triggering checkup reminders.", badge: "Unique" },
  { icon: <Mail className="w-5 h-5" />, title: "Marketing Campaign Creator", desc: "An integrated AI writer that drafts localized email promos, SMS messages, and landing page content.", badge: "New" },
  { icon: <Calendar className="w-5 h-5" />, title: "Smart Scheduling Engine", desc: "Automates calendar slots booking and sends confirmations linked directly into the clinic's local schedules." },
  { icon: <Star className="w-5 h-5" />, title: "Reputation Builder", desc: "Automatically requests post-consultation reviews, funneling positive remarks to Google and keeping constructive notes private." },
  { icon: <Users className="w-5 h-5" />, title: "Patient 360 Records", desc: "Centralizes contact parameters, payment records, treatment briefs, communications logs, and document PDFs." },
  { icon: <Building2 className="w-5 h-5" />, title: "Multi-Clinic Management", desc: "Aggregates billing metrics, physician schedules, lead allocations, and staff tasks across multiple clinic locations.", badge: "Enterprise" },
  { icon: <MessagesSquare className="w-5 h-5" />, title: "Unified Communication Hub", desc: "Unifies email inbox folders, text message panels, and live web chat logs into a single feed with audit logs." },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Revenue Intelligence Analytics", desc: "Measures customer acquisition costs, conversion timelines, campaign ROI, and no-show predictors." }
];

const differentiators: Differentiator[] = [
  { icon: <Zap className="w-7 h-7" />, title: "AI Front Desk Receptionist", subtitle: "Turn casual traffic into booked patients", desc: "Replaces basic static contact forms with an interactive assistant that answers complex pricing questions, handles eligibility checks, and books consultations 24/7.", color: "from-brand-cyan/20 to-brand-indigo/10", glow: "rgba(6,182,212,0.15)" },
  { icon: <Activity className="w-7 h-7" />, title: "AI Lead Qualification", subtitle: "Focus resources on high-value options", desc: "Dynamically parses incoming leads, scoring them on urgency and budget (e.g. Veneers vs Routine cleaning) to instruct the staff on who to contact immediately.", color: "from-brand-indigo/20 to-purple-500/10", glow: "rgba(99,102,241,0.15)" },
  { icon: <TrendingUp className="w-7 h-7" />, title: "Healthcare Conversion Pipeline", subtitle: "Visualize treatment progress in dollars", desc: "Tracks lead status through clinic-specific pipelines, calculating revenue slippage at every drop-off stage to pinpoint bottleneck locations.", color: "from-brand-emerald/20 to-brand-cyan/10", glow: "rgba(16,185,129,0.15)" },
  { icon: <Bell className="w-7 h-7" />, title: "Treatment Follow-Up Loops", subtitle: "Recover patients who disappear", desc: "AI detects when a patient requests pricing but fails to book, starting an automated follow-up sequence on Day 1, 3, and 7 containing customized answers and slots.", color: "from-amber-500/20 to-orange-500/10", glow: "rgba(245,158,11,0.15)" },
  { icon: <RefreshCw className="w-7 h-7" />, title: "Patient Reactivation Engine", subtitle: "Turn past charts into recurring revenue", desc: "Automatically monitors your patient list and reactivates inactive charts (no visit for 12-18 months) by sending checkup recall prompts tailored to their history.", color: "from-rose-500/20 to-pink-500/10", glow: "rgba(244,63,94,0.15)" },
  { icon: <Brain className="w-7 h-7" />, title: "AI Campaign & Growth Advisor", subtitle: "Your digital practice consultant", desc: "Enter a prompt and the AI generates targeted patient list segments, email copy, and SMS scripts, while recommending budget allocation shifts based on ROI.", color: "from-violet-500/20 to-brand-indigo/10", glow: "rgba(139,92,246,0.15)" }
];

const portalModules = [
  { icon: <LayoutDashboard className="w-5 h-5" />, title: "Patient Acquisition", items: ["AI receptionist chatbot widget", "Lead qualification forms", "Cost estimator automation", "Website layout personalization"] },
  { icon: <TrendingUp className="w-5 h-5" />, title: "Lead Pipeline CRM", items: ["Visual pipeline boards", "Patient 360 folders", "Lead intent scoring indicators", "Internal task triggers"] },
  { icon: <Mail className="w-5 h-5" />, title: "Campaigns & Marketing", items: ["AI campaign copy creator", "Sms outreach panels", "Recall automation builder", "Patient lists segmentation"] },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Revenue Analytics", items: ["Location ROI comparison", "No-show predictor charts", "Source attribution insights", "Physician slot optimization"] }
];

const techStack = [
  { category: "Frontend Core", items: ["Next.js 15 App Router", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion"], icon: <Globe className="w-5 h-5" /> },
  { category: "Backend Infrastructure", items: ["Next.js Server Actions", "API Handlers", "Zod Schemas", "React Hook Form"], icon: <HardDrive className="w-5 h-5" /> },
  { category: "Database Layer", items: ["PostgreSQL database", "Prisma ORM", "Logical database isolation", "Detailed audit log records"], icon: <Database className="w-5 h-5" /> },
  { category: "AI & Automations", items: ["OpenAI GPT-4o API", "Twilio (SMS & Calls)", "Resend (Emails)", "Stripe Connect Payments"], icon: <Lock className="w-5 h-5" /> }
];

const useCases = [
  {
    icon: <Smile className="w-6 h-6" />,
    specialty: "Dental Practices",
    color: "brand-cyan",
    scenario: "Tracking and converting dental implant leads",
    journey: [
      "Visitor searches for 'implant costs' and triggers personalized landing copy",
      "AI Web Chatbot qualifies the lead: intent high, budget prepared, ready in 2 weeks",
      "CRM scores the lead (94%) and routes alert task to reception staff",
      "Automated SMS goes out inviting patient to book consult via custom scheduler",
      "Stripe takes pre-authorized deposits; appointment confirmed",
      "Patient converts; post-visit system triggers request for Google review"
    ],
    outcome: "Dental offices see a 50% increase in high-value cosmetic treatment approvals."
  },
  {
    icon: <Heart className="w-6 h-6" />,
    specialty: "Aesthetic Skin & Dermatology",
    color: "rose-400",
    scenario: "Launching summer promotions and checkups",
    journey: [
      "Practice manager requests campaign for 'Laser Skin Peel summer discount'",
      "AI Campaign Builder writes email template and segmented target criteria",
      "Outreach is dispatched to inactive patients who haven't visited in 9 months",
      "Patients click direct schedule links, booking open slots",
      "Analytics counts conversions, revenue, and marketing ROI percentages",
      "Automatic follow-up loops send skincare checkups on Day 7"
    ],
    outcome: "Dermatology clinics achieve 32% return rates from previously dormant patient databases."
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    specialty: "Multi-Location Clinic Groups",
    color: "brand-indigo",
    scenario: "Managing leads and revenue splits across branches",
    journey: [
      "Centralized group configures CRM profiles for branch A, B, and C",
      "Incoming regional web leads are auto-assigned to locations by zip code",
      "Management checks operational analytics and doctor occupancy rates by branch",
      "Review Automation maps reviews to location-specific Google business pages",
      "Unified Communication Hub feeds staff message notifications from all locations",
      "Practice Growth Consultant identifies Instagram leads convert 40% better at Branch B"
    ],
    outcome: "Healthcare group operators reduce administrative overhead by 45% using a single dashboard."
  },
  {
    icon: <Users className="w-6 h-6" />,
    specialty: "Private Practice Clinicians",
    color: "brand-emerald",
    scenario: "Automating booking and recall calls to reduce front-desk labor",
    journey: [
      "Private GP clinic sets up recall triggers for yearly checks",
      "AI finds 150 patients whose annual physicals are overdue",
      "Reactivation engine sends customized text links to targeted charts",
      "Patients book available slots in GPs' calendar automatically",
      "No-show engine flags 3 patients as high risk, triggering manual call reminders",
      "Feedback automation records ratings privately, routing positive ones to Google"
    ],
    outcome: "Solo clinics secure 85% yearly checkup compliance without adding phone staff."
  }
];

const securityFeatures = [
  { icon: <Lock className="w-5 h-5" />, title: "HIPAA Compliant Data", desc: "Patient details are encrypted at rest with AES-256 and in transit with TLS 1.3. Logic isolation partitions clinic tables." },
  { icon: <ShieldCheck className="w-5 h-5" />, title: "Auditable Action Records", desc: "Detailed records log all database reads, writes, updates, and exports alongside user IP coordinates." },
  { icon: <Eye className="w-5 h-5" />, title: "Role-Based Staff Access", desc: "Limits dashboard access scopes. Receptionists see lead logs, owners see revenues, and marketers configure campaigns." },
  { icon: <UserCog className="w-5 h-5" />, title: "Secure Data Portability", desc: "Import and export profiles safely in HL7 FHIR-compliant JSON structures, preserving patient data ownership." },
  { icon: <CloudUpload className="w-5 h-5" />, title: "Signed Document S3 Vault", desc: "Medical records and billing agreements are held in AWS S3 buckets with URLs signed for short lifespans." },
  { icon: <AlertTriangle className="w-5 h-5" />, title: "Anomalous Login Block", desc: "Blocks credentials instantly in the event of successive authorization failures or mass data reviews." },
  { icon: <Database className="w-5 h-5" />, title: "Logical Schema Isolation", desc: "Multi-tenant logic guarantees that clinic parameters and patient records are logical partitions that never bleed." },
  { icon: <RefreshCw className="w-5 h-5" />, title: "Audit Trail Compliance", desc: "Ensures that every compliance checkpoint matches national security frameworks for clinical SaaS deployments." }
];

const integrations = [
  { name: "OpenAI GPT-4o", category: "AI Services", desc: "Drives the front-desk widget dialogs, qualifies inquiry parameters, and writes custom marketing copy." },
  { name: "Prisma & PostgreSQL", category: "Database Layer", desc: "Delivers type-safe relational schemas, robust transactional records, and secure migration stability." },
  { name: "Stripe Connect", category: "Billing Engine", desc: "Manages appointment reservation fees, splits payments, and creates invoice logs." },
  { name: "Twilio API", category: "SMS & Calls", desc: "Powers automated recall texts, scheduling links, follow-up messages, and voice integrations." },
  { name: "Resend", category: "Email Service", desc: "Dispatches clinic promotion emails, monthly newsletters, and booking confirmations." },
  { name: "n8n / Zapier", category: "Workflow Automation", desc: "Integrates with existing clinic software engines, syncing calendars and triggers." },
  { name: "Google Analytics & Ads", category: "Marketing Tracker", desc: "Connects conversion events from Google Ads directly into CRM profiles for source tracking." },
  { name: "Auth.js / Clerk", category: "Access Control", desc: "Secures organization login views with multi-factor authenticators and session controls." },
  { name: "AWS Cloud S3", category: "Document Vault", desc: "Maintains encryption standards for patient consent records, invoices, and documents." }
];

const stats = [
  { value: "$12,400+", label: "Avg. Monthly Lost Revenue Recovered", icon: <TrendingUp className="w-5 h-5" /> },
  { value: "48%", label: "Conversion Rate Increase", icon: <CheckCircle className="w-5 h-5" /> },
  { value: "100%", label: "HIPAA & SOC2 Aligned", icon: <Shield className="w-5 h-5" /> },
  { value: "32%", label: "Past Patient Reactivation Rate", icon: <RefreshCw className="w-5 h-5" /> },
  { value: "2.4 hrs", label: "Staff Time Saved Daily", icon: <Clock className="w-5 h-5" /> },
  { value: "15+", label: "Growth Integrations", icon: <Zap className="w-5 h-5" /> }
];

const faqs: FAQ[] = [
  { q: "Is CareFlow AI HIPAA-compliant?", a: "Yes. The platform is built following strict HIPAA and SOC2 security rules. All Protected Health Information (PHI) is encrypted at rest (AES-256) and in transit (TLS 1.3). We also maintain immutable audit logging for every single data read, write, or export action." },
  { q: "What is the difference between CareFlow AI and a normal generic CRM?", a: "Generic CRMs manage names and email addresses. CareFlow AI is a medical-specific growth system. It features a front-desk chatbot that qualifies clinical cases, scores lead intent (e.g. high-value implants vs general cleaning), tracks revenue leakages by treatment department, manages checkup recall loops, and conforms to HIPAA standards." },
  { q: "How does the AI Front Desk Receptionist qualify leads?", a: "The widget sits on your website. When a visitor asks about treatments (e.g. 'How much do dental implants cost?'), the AI explains the procedure, explains pricing ranges, checks insurance eligibility, pre-qualifies their budget intent, and logs their details as a high-intent prospect in the CRM." },
  { q: "How does the AI Patient Reactivation Engine work?", a: "The system monitors patient records in your database. If it detects a patient has not booked an appointment for 12 to 18 months, it automatically schedules a recall campaign. It drafts a personalized email and SMS based on their past treatment (e.g. 'Time for your annual dental checkup') and provides scheduling options." },
  { q: "Can we track lead attribution source?", a: "Yes. CareFlow AI tracks the source of every inquiry—whether from Google Ads, Facebook Ads, Instagram, Organic search, or referrals. It integrates with UTM parameters to calculate exact patient acquisition costs and campaign ROI." },
  { q: "How does the Lead Scoring logic operate?", a: "Incoming prospects are analyzed by our clinical NLP parser. The AI calculates an intent score (0-100%) based on criteria such as the requested procedure value, urgency timeline (e.g., 'immediately' vs 'just looking'), location coordinates, and budget availability, signaling high-value cases to the staff." },
  { q: "What automated follow-up intervals does the CRM support?", a: "By default, CareFlow AI sets a follow-up chain for unconverted prospects: Day 1 (answer procedure questions), Day 3 (offer open calendar slots), and Day 7 (specialist availability updates). This sequence immediately pauses once an appointment is booked." },
  { q: "Can we manage multiple clinic locations?", a: "Yes. CareFlow AI supports multi-location organizations. Clinic groups can switch dashboards to check conversion metrics, review staff logs, monitor location-specific calendars, and compare revenue ROI side-by-side." },
  { q: "How are patient reviews automated?", a: "Following an appointment, the CRM automatically texts the patient requesting feedback. If the review is highly positive, the system prompts them to write a Google review. If the feedback notes room for improvement, it directs the note to internal staff privately to preserve clinic reputation." },
  { q: "What is the AI Growth Advisor?", a: "It is a built-in virtual business consultant. Clinic owners can ask questions like: 'Why are cosmetic bookings down?' The AI analyzes lead volumes, conversion histories, ads budgets, and local ratings to outline specific improvement steps." },
  { q: "Does the system sync with our existing Electronic Health Record (EHR)?", a: "Yes. The platform includes a FHIR-compliant API layer designed to sync demographics, scheduling blocks, and treatment notes securely with major EHR engines such as Epic, Cerner, Dentrix, or Athenahealth." },
  { q: "What email and SMS services are integrated?", a: "We integrate Twilio for secure text messages and Resend for modern, beautifully structured email campaigns. You can connect your own API keys to run communications directly under your clinic domain." },
  { q: "How are payments and deposits handled?", a: "We utilize Stripe Connect. You can configure the system to take reservation deposits during online booking, capture co-pays during check-ins, or manage monthly recurring subscriptions for cosmetic maintenance packages." },
  { q: "What roles and permissions are available?", a: "We configure five user roles: Owner (full revenue control), Doctor (clinical logs and schedule), Manager (leads pipeline and staff assignments), Receptionist (booking and task items), and Marketer (campaign design and analytics)." },
  { q: "Can we white-label the software?", a: "Yes. CareFlow AI is designed with white-label capabilities for hospital groups and franchises. You can customize portal domains, brand color hex codes, clinic logos, and custom legal disclaimers." },
  { q: "What databases and ORMs are used?", a: "We build with PostgreSQL as the relational database layer and Prisma ORM for safe type-checking. Schemas include Assessments, Symptoms, AIResponses, Users, Patients, Doctors, and Clinics." },
  { q: "What is the Practice Experience Score?", a: "It is a metric calculating clinic performance. It aggregates receptionist message response times, appointment compliance, user satisfaction ratings, and review indexes to display a unified rating out of 100." },
  { q: "Can family profiles be managed together?", a: "Yes. The Family Hub allows a parent or coordinator to switch between profiles for children, spouse, or parents. Each profile maintains its own history and appointments." },
  { q: "How is file upload security managed?", a: "Patient reports are stored in secure AWS S3 buckets. Public read access is blocked. Files can only be retrieved using secure pre-signed URLs that expire automatically after 10 minutes." },
  { q: "How long does implementation take?", a: "A standard white-label setup (Phase 1, including web widgets, pipeline boards, and basic booking) deploys in 4-6 weeks. Custom enterprise EHR integrations and voice agents deploy in 3-4 months." }
];

/* =======================================================
   COMPONENT
 ======================================================= */
export default function CareFlowAIPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeUseCase, setActiveUseCase] = useState(0);

  // Interactive Simulator States
  const [activeTab, setActiveTab] = useState("CRM");
  const [pipelineTotal, setPipelineTotal] = useState(13200);
  const [leadsList, setLeadsList] = useState([
    { id: 1, name: "John Doe", service: "Whitening", source: "Google Ads", score: 82, status: "New", budget: "Standard", phone: "+1-555-0100" },
    { id: 2, name: "Sarah Connor", service: "Dental Implants", source: "Facebook Ads", score: 94, status: "Qualified", budget: "High", phone: "+1-555-0199" },
    { id: 3, name: "David Webb", service: "Veneers Consult", source: "Organic Search", score: 91, status: "Scheduled", budget: "High", phone: "+1-555-0143" },
    { id: 4, name: "Emily Stone", service: "Teeth Align", source: "Instagram Referral", score: 88, status: "Converted", budget: "High", phone: "+1-555-0188" },
  ]);

  // Campaign builder state
  const [activeCampaign, setActiveCampaign] = useState<string | null>(null);
  const [campaignDeploying, setCampaignDeploying] = useState(false);
  const [campaignSuccess, setCampaignSuccess] = useState(false);

  // Reactivation Engine state
  const [reactivatedIds, setReactivatedIds] = useState<number[]>([]);

  // CRM Simulation functions
  const handleQualifyLead = (id: number) => {
    setLeadsList(prev => prev.map(lead => {
      if (lead.id === id) {
        return { ...lead, status: "Qualified", score: Math.min(100, lead.score + 5) };
      }
      return lead;
    }));
  };

  const handleScheduleConsult = (id: number) => {
    setLeadsList(prev => prev.map(lead => {
      if (lead.id === id) {
        return { ...lead, status: "Scheduled" };
      }
      return lead;
    }));
  };

  const handleMarkConverted = (id: number, value: number) => {
    setLeadsList(prev => prev.map(lead => {
      if (lead.id === id) {
        return { ...lead, status: "Converted" };
      }
      return lead;
    }));
    setPipelineTotal(prev => prev + value);
  };

  // Campaign templates
  const campaignsTemplates: Record<string, CampaignTemplate> = {
    "implants": {
      title: "Dental Implant Special Offer",
      audience: "Patients Age 35-65 showing interest in cosmetic treatments",
      emailBody: "Subject: Complete Your Smile at Apex Dental\n\nDear [Patient Name],\n\nAre you missing teeth or struggling with uncomfortable dentures? Discover the life-changing difference of dental implants. For this month only, we are offering a complimentary consultation and 3D digital imaging (a $350 value).\n\nSpots are limited. Click below to secure your consultation.",
      smsBody: "Apex Dental: Reclaim your smile. Free implant consultation and 3D imaging this month. Click here to schedule: http://apx.dl/implants",
      timeline: ["Send Day 1 (10 AM)", "Recall text Day 4 (3 PM)", "Final reminder Day 7 (12 PM)"]
    },
    "invisalign": {
      title: "Clear Aligners Spring Drive",
      audience: "Patients Age 18-40 seeking orthodontics",
      emailBody: "Subject: Get the Smile You've Always Wanted – Comfortably\n\nDear [Patient Name],\n\nStraighten your teeth without wires or brackets. Invisalign clear aligners are virtually invisible, removable, and custom-designed for you. Book an evaluation this week to lock in $500 off your treatment plan.\n\nSchedule online today.",
      smsBody: "Apex Dental: Get $500 off Invisalign aligners this week! Book your orthodontic assessment here: http://apx.dl/align",
      timeline: ["Send Day 1 (9 AM)", "Recall text Day 3 (2 PM)", "Call follow-up Day 5 (5 PM)"]
    },
    "noshow": {
      title: "No-Show Recall Loop",
      audience: "Patients who missed consultations in the last 30 days",
      emailBody: "Subject: We Missed You! Let's Rebook Your Consultation\n\nDear [Patient Name],\n\nWe missed you at your scheduled consultation. We understand that plans change and life gets busy! We would love to help you get back on track. Simply click the link below to find an open slot that fits your schedule.",
      smsBody: "Apex Dental: We missed you! Easily rebook your consultation in one click: http://apx.dl/rebook",
      timeline: ["Send Day 1 (8 AM)", "SMS Follow-up Day 3 (10 AM)", "Archive lead Day 10 (4 PM)"]
    }
  };

  const handleDeployCampaign = () => {
    if (!activeCampaign) return;
    setCampaignDeploying(true);
    setCampaignSuccess(false);
    setTimeout(() => {
      setCampaignDeploying(false);
      setCampaignSuccess(true);
    }, 1200);
  };

  // Reactivation Engine functions
  const handleReactivate = (id: number) => {
    if (reactivatedIds.includes(id)) return;
    setReactivatedIds(prev => [...prev, id]);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Ambient glows */}
      <div className="fixed top-0 left-1/3 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="fixed top-1/2 right-0 w-[500px] h-[500px] bg-brand-indigo/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[400px] h-[400px] bg-brand-emerald/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">

        {/* -- BREADCRUMB -- */}
        <div className="mb-8 flex items-center space-x-2 text-xs">
          <Link href="/" className="text-gray-500 hover:text-brand-cyan transition-colors">Home</Link>
          <span className="text-gray-600">/</span>
          <Link href="/#solutions" className="text-gray-500 hover:text-brand-cyan transition-colors">Solutions</Link>
          <span className="text-gray-600">/</span>
          <span className="text-white">CareFlow AI</span>
        </div>

        {/* -- HERO SECTION -- */}
        <section className="relative mb-24 pt-8 md:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left side: Heading and content (5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col space-y-6 text-left"
            >
              {/* Top Badge */}
              <div className="inline-flex items-center space-x-2 self-start bg-gradient-to-r from-brand-cyan/15 to-brand-indigo/15 border border-brand-cyan/20 rounded-full px-4.5 py-1.5 shadow-lg shadow-brand-cyan/5">
                <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">Healthcare Growth CRM & OS</span>
                <Sparkles className="w-3 h-3 text-brand-cyan" />
              </div>

              {/* Headline */}
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl xl:text-5xl text-white leading-[1.15] tracking-tight">
                Attract Patients.<br />
                <span className="text-gradient-cyan-indigo">Automate CRM Pipelines.</span><br />
                <span className="text-gradient-emerald-cyan">Maximize Practice ROI.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                The AI-powered growth and operations platform that helps healthcare practices acquire more patients, automate communication workflows, and Reactivate dormant files.
              </p>

              {/* CTA Buttons */}
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
                  href="https://apex-dental-eight.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 glass-panel border border-brand-border text-white font-semibold px-5 py-3.5 rounded-xl hover:border-brand-cyan/40 hover:scale-[1.02] active:scale-[0.98] transition-all text-xs whitespace-nowrap"
                >
                  <Globe className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>Launch Live App</span>
                </a>
                <a
                  href="https://github.com/alimubashir822/ApexDental"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 glass-panel border border-brand-border text-gray-300 font-semibold px-5 py-3.5 rounded-xl hover:border-brand-cyan/40 hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all text-xs whitespace-nowrap"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-brand-indigo" />
                  <span>View Source</span>
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2.5 pt-4">
                {[
                  { icon: <Shield className="w-3.5 h-3.5 text-brand-emerald" />, label: "HIPAA Compliant", bg: "bg-brand-emerald/10 border-brand-emerald/20" },
                  { icon: <Lock className="w-3.5 h-3.5 text-brand-cyan" />, label: "AES-256 Encrypted", bg: "bg-brand-cyan/10 border-brand-cyan/20" },
                  { icon: <CheckCircle className="w-3.5 h-3.5 text-brand-indigo" />, label: "Stripe Split Billing", bg: "bg-brand-indigo/10 border-brand-indigo/20" },
                ].map((t) => (
                  <div key={t.label} className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full border ${t.bg}`}>
                    {t.icon}
                    <span className="text-[10px] font-semibold text-gray-300">{t.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right side: High-Fidelity Mock Dashboard (7 cols) */}
            <motion.div
              id="simulator"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-7 relative"
            >
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-cyan to-brand-indigo rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-1000 -z-10" />
              
              {/* Mock Dashboard container */}
              <div className="glass-panel rounded-2xl border border-brand-border overflow-hidden">
                
                {/* Top header nav */}
                <div className="border-b border-brand-border px-5 py-3 flex items-center justify-between bg-white/2">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-6.5 h-6.5 rounded-lg bg-gradient-to-br from-brand-cyan to-brand-indigo flex items-center justify-center">
                      <Zap className="w-3.5 h-3.5 text-white animate-bounce" />
                    </div>
                    <span className="font-display font-bold text-white text-xs tracking-wide">CareFlow AI Operating Sandbox</span>
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/25 rounded-full px-2.5 py-1">
                    <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse" />
                    <span className="text-[10px] text-brand-cyan font-semibold">Active Pipeline</span>
                  </div>
                </div>

                {/* Dashboard Inner Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-brand-border h-[460px]">
                  
                  {/* Sidebar (4 cols) */}
                  <div className="md:col-span-4 p-4 space-y-1.5 bg-white/[0.01]">
                    <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-2 px-2">Growth Modules</p>
                    {[
                      { id: "CRM", label: "Pipeline CRM", icon: <TrendingUp className="w-3.5 h-3.5" /> },
                      { id: "Campaigns", label: "Campaigns Builder", icon: <Mail className="w-3.5 h-3.5" /> },
                      { id: "Reactivation", label: "Reactivation Hub", icon: <RefreshCw className="w-3.5 h-3.5" /> },
                      { id: "Analytics", label: "Practice Analytics", icon: <BarChart3 className="w-3.5 h-3.5" /> },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => {
                          setActiveTab(tab.id);
                          setCampaignSuccess(false);
                        }}
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
                      <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-2 px-2">CRM Health</p>
                      <div className="flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-gray-400">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>HIPAA Vault Active</span>
                      </div>
                      <div className="flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-gray-400">
                        <Users className="w-3.5 h-3.5" />
                        <span>Org Location: Main</span>
                      </div>
                    </div>
                  </div>

                  {/* Main Display (8 cols) */}
                  <div className="md:col-span-8 p-5 overflow-y-auto flex flex-col justify-between h-full bg-brand-bg/20">
                    
                    {/* Active tab: CRM Pipeline */}
                    {activeTab === "CRM" && (
                      <div className="flex flex-col h-full justify-between flex-grow">
                        <div className="flex justify-between items-center border-b border-brand-border/60 pb-2 mb-3">
                          <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider flex items-center space-x-1">
                            <TrendingUp className="w-3.5 h-3.5 text-brand-cyan mr-1" />
                            <span>Patient Conversion Pipeline</span>
                          </span>
                          <span className="text-[10px] text-brand-emerald font-bold font-mono">
                            Total: ${pipelineTotal.toLocaleString()}
                          </span>
                        </div>

                        {/* Kanban stages list */}
                        <div className="space-y-3 flex-grow overflow-y-auto max-h-[290px] pr-1 mb-2">
                          {leadsList.map((lead) => (
                            <div key={lead.id} className="bg-slate-900/60 border border-brand-border rounded-xl p-3 space-y-2 flex flex-col justify-between">
                              <div className="flex justify-between items-start">
                                <div>
                                  <div className="flex items-center space-x-2">
                                    <span className="text-xs font-bold text-white">{lead.name}</span>
                                    <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded uppercase ${
                                      lead.status === "New" ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" :
                                      lead.status === "Qualified" ? "bg-purple-500/10 text-purple-400 border border-purple-500/20" :
                                      lead.status === "Scheduled" ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" :
                                      "bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20"
                                    }`}>
                                      {lead.status}
                                    </span>
                                  </div>
                                  <p className="text-[10px] text-gray-400 mt-0.5">
                                    {lead.service} &bull; Source: <span className="text-gray-300">{lead.source}</span>
                                  </p>
                                </div>
                                <div className="text-right">
                                  <span className="text-[9px] text-gray-500 font-bold block">Intent Score</span>
                                  <span className={`text-xs font-mono font-bold ${lead.score >= 90 ? "text-brand-emerald" : "text-brand-cyan"}`}>{lead.score}%</span>
                                </div>
                              </div>

                              {/* Action controls based on status */}
                              <div className="border-t border-brand-border/60 pt-2 flex justify-between items-center">
                                <span className="text-[9px] text-gray-500 font-bold uppercase">Budget: {lead.budget}</span>
                                <div className="flex space-x-1.5">
                                  {lead.status === "New" && (
                                    <button
                                      onClick={() => handleQualifyLead(lead.id)}
                                      className="text-[9px] bg-brand-cyan/15 hover:bg-brand-cyan/25 text-brand-cyan border border-brand-cyan/35 rounded px-2.5 py-1 font-semibold transition-colors"
                                    >
                                      Qualify with AI
                                    </button>
                                  )}
                                  {lead.status === "Qualified" && (
                                    <button
                                      onClick={() => handleScheduleConsult(lead.id)}
                                      className="text-[9px] bg-brand-indigo/15 hover:bg-brand-indigo/25 text-white border border-brand-indigo/35 rounded px-2.5 py-1 font-semibold transition-colors"
                                    >
                                      Schedule Consult
                                    </button>
                                  )}
                                  {lead.status === "Scheduled" && (
                                    <button
                                      onClick={() => handleMarkConverted(lead.id, lead.service === "Veneers Consult" ? 3500 : 1500)}
                                      className="text-[9px] bg-brand-emerald/15 hover:bg-brand-emerald/25 text-brand-emerald border border-brand-emerald/35 rounded px-2.5 py-1 font-bold transition-colors"
                                    >
                                      Mark Converted
                                    </button>
                                  )}
                                  {lead.status === "Converted" && (
                                    <span className="text-[9px] text-brand-emerald flex items-center font-bold">
                                      <Check className="w-3 h-3 mr-1" /> Converted
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Active tab: AI Campaign Builder */}
                    {activeTab === "Campaigns" && (
                      <div className="flex flex-col h-full justify-between flex-grow">
                        <div className="flex justify-between items-center border-b border-brand-border/60 pb-2 mb-2">
                          <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider flex items-center space-x-1">
                            <Mail className="w-3.5 h-3.5 text-brand-cyan mr-1" />
                            <span>AI Marketing Campaign Builder</span>
                          </span>
                        </div>

                        {/* Select campaign templates */}
                        {!activeCampaign ? (
                          <div className="space-y-2.5 flex-grow flex flex-col justify-center">
                            <p className="text-[11px] text-gray-400 text-center mb-1">Select a campaign scenario to generate outreach content:</p>
                            {[
                              { id: "implants", title: "Dental Implants Drive Promotion", desc: "Targeting age 35+ looking for cosmetic enhancements" },
                              { id: "invisalign", title: "Invisalign Clear Aligners Spring Drive", desc: "Targeting age 18-40 looking for teeth alignment" },
                              { id: "noshow", title: "Consultation No-Show Recall Loop", desc: "Targeting leads who missed visits in the last 30 days" },
                            ].map((c) => (
                              <button
                                key={c.id}
                                onClick={() => setActiveCampaign(c.id)}
                                className="w-full text-left p-3 rounded-xl border border-brand-border hover:border-brand-cyan/40 bg-slate-900/40 hover:bg-slate-900/80 transition-all"
                              >
                                <p className="text-xs font-bold text-white flex items-center">
                                  <Sparkles className="w-3 h-3 text-brand-cyan mr-1.5" />
                                  <span>{c.title}</span>
                                </p>
                                <p className="text-[10px] text-gray-400 mt-0.5">{c.desc}</p>
                              </button>
                            ))}
                          </div>
                        ) : (
                          <div className="space-y-3 flex-grow overflow-y-auto max-h-[300px] pr-1 flex flex-col justify-between">
                            <div className="space-y-2">
                              {/* Header */}
                              <div className="flex justify-between items-center bg-slate-900/60 p-2 rounded-lg border border-brand-border">
                                <div>
                                  <p className="text-[8px] text-gray-500 uppercase font-bold">Campaign Segment Target</p>
                                  <p className="text-[10px] font-bold text-white">{campaignsTemplates[activeCampaign].title}</p>
                                </div>
                                <button
                                  onClick={() => {
                                    setActiveCampaign(null);
                                    setCampaignSuccess(false);
                                  }}
                                  className="text-[9px] text-gray-400 hover:text-white"
                                >
                                  Back
                                </button>
                              </div>

                              {/* Campaign contents */}
                              <div className="glass-panel border border-brand-border rounded-xl p-3 space-y-2 text-[10px]">
                                <div>
                                  <span className="text-[8px] text-brand-cyan font-bold uppercase block">AI Drafted Email Copy</span>
                                  <pre className="text-[9px] text-gray-300 mt-1 whitespace-pre-wrap font-sans bg-black/30 p-2 rounded border border-brand-border/60">
                                    {campaignsTemplates[activeCampaign].emailBody}
                                  </pre>
                                </div>

                                <div className="border-t border-brand-border/40 pt-2">
                                  <span className="text-[8px] text-brand-indigo font-bold uppercase block">AI Drafted SMS Blurb</span>
                                  <p className="text-[9px] text-gray-300 mt-1 bg-black/30 p-2 rounded border border-brand-border/60">
                                    {campaignsTemplates[activeCampaign].smsBody}
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Trigger Deploy */}
                            <div className="border-t border-brand-border/60 pt-2 flex items-center justify-between">
                              <span className="text-[8px] text-gray-500 font-bold uppercase">Audience: {campaignsTemplates[activeCampaign].audience}</span>
                              <div className="flex items-center space-x-2">
                                {campaignSuccess ? (
                                  <span className="text-[10px] text-brand-emerald font-bold flex items-center">
                                    <Check className="w-3.5 h-3.5 mr-1" /> Deployed Success
                                  </span>
                                ) : (
                                  <button
                                    onClick={handleDeployCampaign}
                                    disabled={campaignDeploying}
                                    className="text-[10px] bg-brand-cyan/20 hover:bg-brand-cyan/35 text-white border border-brand-cyan/40 px-3 py-1.5 rounded font-bold transition-colors disabled:opacity-40"
                                  >
                                    {campaignDeploying ? "Deploying..." : "Deploy Campaign"}
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Active tab: Patient Reactivation Hub */}
                    {activeTab === "Reactivation" && (
                      <div className="flex flex-col h-full justify-between flex-grow">
                        <div className="flex justify-between items-center border-b border-brand-border/60 pb-2 mb-2">
                          <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider flex items-center space-x-1">
                            <RefreshCw className="w-3.5 h-3.5 text-brand-cyan mr-1" />
                            <span>AI Patient Reactivation Hub</span>
                          </span>
                        </div>

                        {/* Inactive Patients List */}
                        <div className="space-y-3 flex-grow overflow-y-auto max-h-[300px] pr-1">
                          <p className="text-[10px] text-gray-400">AI identified 3 inactive patients who are overdue for maintenance checkups:</p>
                          {[
                            { id: 101, name: "Robert Downey", lastVisit: "15 Months Ago", lastService: "Root Canal", phone: "+1-555-0198" },
                            { id: 102, name: "Jane Margolis", lastVisit: "18 Months Ago", lastService: "Teeth Cleaning", phone: "+1-555-0145" },
                            { id: 103, name: "Marcus Aurelius", lastVisit: "22 Months Ago", lastService: "Ortho Adjust", phone: "+1-555-0122" },
                          ].map((patient) => {
                            const isSent = reactivatedIds.includes(patient.id);
                            return (
                              <div key={patient.id} className="bg-slate-900/60 border border-brand-border rounded-xl p-3 flex justify-between items-center">
                                <div>
                                  <p className="text-xs font-bold text-white">{patient.name}</p>
                                  <p className="text-[9px] text-gray-400 mt-0.5">
                                    Last Visit: <span className="text-gray-300">{patient.lastVisit}</span> &bull; Treatment: <span className="text-gray-300">{patient.lastService}</span>
                                  </p>
                                </div>
                                <button
                                  onClick={() => handleReactivate(patient.id)}
                                  className={`text-[9px] px-2.5 py-1.5 rounded font-bold border transition-colors ${
                                    isSent
                                      ? "bg-brand-emerald/15 border-brand-emerald/30 text-brand-emerald"
                                      : "bg-brand-cyan/15 hover:bg-brand-cyan/25 border-brand-cyan/35 text-brand-cyan"
                                  }`}
                                >
                                  {isSent ? "Recall SMS Sent ✓" : "Trigger AI Recall"}
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Active tab: Practice Analytics */}
                    {activeTab === "Analytics" && (
                      <div className="flex flex-col h-full justify-between flex-grow">
                        <div className="flex justify-between items-center border-b border-brand-border/60 pb-2 mb-3">
                          <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider flex items-center space-x-1">
                            <BarChart3 className="w-3.5 h-3.5 text-brand-cyan mr-1" />
                            <span>Growth & Source ROI Analytics</span>
                          </span>
                        </div>

                        {/* Interactive analytical rings / data splits */}
                        <div className="space-y-4 flex-grow overflow-y-auto max-h-[290px] pr-1">
                          
                          {/* Acquisition sources card */}
                          <div className="grid grid-cols-3 gap-2.5">
                            {[
                              { label: "Google Ads Leads", count: 250, conversion: "36%", revenue: "$32,500", color: "text-brand-cyan border-brand-cyan/25 bg-brand-cyan/5" },
                              { label: "Facebook Ads Leads", count: 180, conversion: "22%", revenue: "$18,000", color: "text-brand-indigo border-brand-indigo/25 bg-brand-indigo/5" },
                              { label: "Organic Search", count: 90, conversion: "48%", revenue: "$24,500", color: "text-brand-emerald border-brand-emerald/25 bg-brand-emerald/5" },
                            ].map((source, i) => (
                              <div key={i} className={`border rounded-xl p-2.5 text-center ${source.color}`}>
                                <p className="text-[8px] text-gray-400 uppercase font-bold leading-none mb-1">{source.label}</p>
                                <p className="text-xs font-mono font-bold text-white mt-1">{source.count} leads</p>
                                <p className="text-[10px] font-bold mt-1 text-white">{source.conversion} conv.</p>
                                <p className="text-[9px] text-gray-400 mt-0.5">{source.revenue}</p>
                              </div>
                            ))}
                          </div>

                          {/* AI recommendations */}
                          <div className="border border-brand-indigo/35 bg-brand-indigo/5 rounded-xl p-3 space-y-2">
                            <div className="flex items-center space-x-2">
                              <Sparkles className="w-4 h-4 text-brand-cyan" />
                              <span className="text-[9px] text-brand-indigo font-bold uppercase block">AI Growth Advisor Recommendations</span>
                            </div>
                            <div className="text-[10px] text-gray-300 space-y-2 leading-relaxed font-sans">
                              <p>
                                <strong className="text-white">Insight:</strong> Google Ads generates 60% of your leads, but Organic Search has double the conversion rate. 
                              </p>
                              <p>
                                <strong className="text-white">Actionable Plan:</strong> Increase content SEO efforts. Deploy the <span className="text-brand-cyan">AI Healthcare Content Engine</span> to build educational guide pages for implants and aligners to attract more organic visitors.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </section>

        {/* -- STATS SECTION -- */}
        <section className="relative mb-24">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="glass-panel border border-brand-border rounded-2xl p-4.5 text-center flex flex-col justify-between items-center hover:border-brand-cyan/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center mb-3.5 text-brand-cyan">
                  {s.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="font-display font-extrabold text-lg text-white leading-none">{s.value}</h3>
                  <p className="text-[9px] text-gray-400 uppercase font-semibold leading-tight">{s.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <hr className="border-brand-border mb-20" />

        {/* -- FEATURES SECTION -- */}
        <section className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-bold text-3xl text-white tracking-tight">
              A Complete Practice Growth Suite
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Every workflow needed to attract leads, verify intent, automatically recover lost bookings, and retain existing patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFeatures.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.03 }}
                className="glass-panel border border-brand-border rounded-xl p-5 hover:border-brand-cyan/20 transition-all flex flex-col justify-between relative group"
              >
                {f.badge && (
                  <span className="absolute top-4 right-4 text-[8px] font-bold px-1.5 py-0.5 rounded bg-brand-cyan/10 text-brand-cyan uppercase tracking-wider">
                    {f.badge}
                  </span>
                )}
                <div>
                  <div className="w-10 h-10 rounded-lg bg-slate-900/60 border border-brand-border flex items-center justify-center text-brand-cyan mb-4 group-hover:scale-105 transition-transform duration-300">
                    {f.icon}
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2">{f.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <hr className="border-brand-border mb-20" />

        {/* -- DIFFERENTIATORS -- */}
        <section className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-bold text-3xl text-white tracking-tight">
              Why CareFlow AI is Different
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Traditional CRMs just hold directories. Our system acts as an operational employee that executes campaign deployments, qualifies leads, and secures recurring practice revenues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                style={{
                  boxShadow: `0 10px 30px -10px ${d.glow}`
                }}
                className={`rounded-2xl border border-brand-border/60 bg-gradient-to-br ${d.color} p-6 space-y-4 hover:border-brand-cyan/30 transition-all flex flex-col justify-between`}
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-950/60 border border-brand-border flex items-center justify-center text-brand-cyan">
                    {d.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base leading-snug">{d.title}</h3>
                    <p className="text-[10px] text-brand-cyan font-bold tracking-wider uppercase mt-0.5">{d.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <hr className="border-brand-border mb-20" />

        {/* -- SYSTEM ARCHITECTURE / MODULES -- */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Information */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="font-display font-bold text-3xl text-white tracking-tight leading-tight">
                Modular Architecture Built for Clinic Scale
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                The CareFlow platform partitions patient engagement channels, pipeline management tools, campaign deployment interfaces, and location analytics into separate micro-applications.
              </p>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                This enables organization administrators to configure individual staff permissions, limit regional EHR scopes, and manage multiple sub-locations from a single dashboard.
              </p>

              <div className="pt-4 border-t border-brand-border/60 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-brand-emerald/10 border border-brand-emerald/30 flex items-center justify-center text-brand-emerald flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-xs">EHR / FHIR Compatible</h4>
                    <p className="text-gray-400 text-xs mt-0.5">Syncs qualified lead parameters directly into clinical EHR schedules.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-xs">Twilio SMS Recall Automation</h4>
                    <p className="text-gray-400 text-xs mt-0.5">Automates text checkups for inactive files, securing booking appointments hands-free.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Modules Accordion/Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {portalModules.map((m, idx) => (
                <div key={idx} className="glass-panel border border-brand-border rounded-2xl p-5 space-y-4 bg-white/[0.01]">
                  <div className="flex items-center space-x-3 text-brand-cyan">
                    <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center">
                      {m.icon}
                    </div>
                    <h3 className="text-white font-bold text-sm leading-none">{m.title}</h3>
                  </div>

                  <ul className="space-y-2">
                    {m.items.map((item, i) => (
                      <li key={i} className="text-xs text-gray-400 flex items-start">
                        <span className="text-brand-cyan mr-2 mt-1 flex-shrink-0">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>
        </section>

        <hr className="border-brand-border mb-20" />

        {/* -- USE CASES -- */}
        <section className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-bold text-3xl text-white tracking-tight">
              Enterprise Use Case Scenarios
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Discover how dental centers, aesthetic dermatologists, multi-location healthcare franchises, and private GPs utilize our pipeline systems to drive revenue growth.
            </p>
          </div>

          {/* Tabs header */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {useCases.map((uc, idx) => (
              <button
                key={idx}
                onClick={() => setActiveUseCase(idx)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold border transition-all ${
                  activeUseCase === idx
                    ? "bg-gradient-to-r from-brand-cyan/20 to-brand-indigo/20 border-brand-cyan/40 text-white"
                    : "bg-slate-900/40 border-brand-border text-gray-400 hover:text-gray-200"
                }`}
              >
                {uc.specialty}
              </button>
            ))}
          </div>

          {/* Active Tab View */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeUseCase}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="glass-panel border border-brand-border rounded-3xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left side: details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-brand-cyan">
                    {useCases[activeUseCase].icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{useCases[activeUseCase].specialty} Scenario</h3>
                    <p className="text-xs text-brand-cyan font-bold mt-0.5">{useCases[activeUseCase].scenario}</p>
                  </div>
                </div>

                {/* Workflow timeline */}
                <div className="relative pl-6 space-y-4 border-l border-brand-border/60">
                  {useCases[activeUseCase].journey.map((step, idx) => (
                    <div key={idx} className="relative">
                      <div className="absolute -left-[30px] top-1.5 w-2 h-2 rounded-full bg-brand-cyan" />
                      <p className="text-xs text-gray-300 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side: Outcome metrics */}
              <div className="lg:col-span-5 border border-brand-indigo/20 bg-brand-indigo/5 rounded-2xl p-6 text-center space-y-4">
                <h4 className="text-[10px] text-brand-cyan font-bold uppercase tracking-widest leading-none">Measured Clinic Outcome</h4>
                <p className="text-sm font-semibold text-white leading-relaxed">
                  &ldquo;{useCases[activeUseCase].outcome}&rdquo;
                </p>
                <div className="pt-4 border-t border-brand-border/60 flex justify-center space-x-6">
                  <div>
                    <p className="text-xs font-mono font-bold text-white">100%</p>
                    <p className="text-[9px] text-gray-500 uppercase mt-0.5">HIPAA Safe</p>
                  </div>
                  <div>
                    <p className="text-xs font-mono font-bold text-white">FHIR</p>
                    <p className="text-[9px] text-gray-500 uppercase mt-0.5">Ready Sync</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>

        <hr className="border-brand-border mb-20" />

        {/* -- INTEGRATIONS & TECH STACK -- */}
        <section className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Tech stack lists (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-display font-bold text-2xl text-white tracking-tight leading-tight">
              Next-Gen Tech Stack
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              CareFlow AI utilizes a type-safe Next.js architecture coupled with a secure database layer, providing performance and reliability.
            </p>

            <div className="space-y-4">
              {techStack.map((category, idx) => (
                <div key={idx} className="border border-brand-border rounded-xl p-4 bg-slate-900/30 flex items-start space-x-3">
                  <div className="text-brand-cyan mt-0.5">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white leading-none mb-2">{category.category}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {category.items.map((item, i) => (
                        <span key={i} className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 border border-brand-border text-gray-300">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Integrations checklist (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display font-bold text-2xl text-white tracking-tight leading-tight">
              Enterprise Ecosystem Connectors
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Designed to connect directly with your active channels, processing emails, SMS outreach schedules, payment checks, and database calls seamlessly.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {integrations.map((int, idx) => (
                <div key={idx} className="glass-panel border border-brand-border rounded-xl p-3 flex flex-col justify-between hover:border-brand-cyan/20 transition-colors bg-white/[0.01]">
                  <div>
                    <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-brand-cyan/10 text-brand-cyan uppercase tracking-wider block w-max mb-2">
                      {int.category}
                    </span>
                    <h3 className="text-xs font-bold text-white leading-none mb-1">{int.name}</h3>
                  </div>
                  <p className="text-[10px] text-gray-400 leading-snug mt-1.5">{int.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </section>

        <hr className="border-brand-border mb-20" />

        {/* -- DATABASE SCHEMA DIAGRAM -- */}
        <section className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-bold text-3xl text-white tracking-tight">
              Database Architecture (PostgreSQL Schema)
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Fully normalized relational tables linked via Prisma schemas, ensuring logical multi-tenant partitioning and absolute audit trail tracking.
            </p>
          </div>

          {/* Schematic table representation */}
          <div className="glass-panel border border-brand-border rounded-2xl overflow-hidden p-6 md:p-8 bg-slate-950/40">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              
              {/* Left sidebar: schema models index */}
              <div className="md:col-span-4 space-y-2">
                <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-2 px-1">Prisma Core Models</p>
                {[
                  { name: "Users & Staff", desc: "Access credentials, organization links, role permissions." },
                  { name: "Patients & Leads", desc: "Contact demographics, intent scores, status codes." },
                  { name: "Campaigns & Recall", desc: "Target list queries, outreach copy, Twilio trigger clocks." },
                  { name: "Clinical & Audit", desc: "Appointments logs, signed forms, compliance actions." },
                ].map((s, idx) => (
                  <div key={idx} className="p-3 border border-brand-border/60 hover:border-brand-cyan/20 bg-slate-900/30 rounded-xl">
                    <p className="text-xs font-bold text-white flex items-center">
                      <Database className="w-3.5 h-3.5 text-brand-cyan mr-1.5" />
                      <span>{s.name}</span>
                    </p>
                    <p className="text-[10px] text-gray-400 mt-1 leading-snug">{s.desc}</p>
                  </div>
                ))}
              </div>

              {/* Right side: Database diagram display */}
              <div className="md:col-span-8 overflow-x-auto text-[10px] font-mono leading-relaxed text-gray-300 border border-brand-border/60 bg-black/40 rounded-xl p-5">
                <p className="text-brand-cyan mb-2">{"// Prisma schema mappings (Logical Isolation)"}</p>
                <div className="space-y-4">
                  <div>
                    <span className="text-brand-indigo">model</span> <span className="text-white font-bold">User</span> &#123;
                    <div className="pl-4 text-gray-400">
                      id        String @id @default(uuid())<br />
                      email     String @unique<br />
                      role      Role   @default(RECEPTIONIST)<br />
                      clinicId  String<br />
                      clinic    Clinic @relation(fields: [clinicId], references: [id])
                    </div>
                    &#125;
                  </div>
                  <div>
                    <span className="text-brand-indigo">model</span> <span className="text-white font-bold">Lead</span> &#123;
                    <div className="pl-4 text-gray-400">
                      id         String       @id @default(uuid())<br />
                      name       String<br />
                      phone      String<br />
                      service    String<br />
                      status     LeadStatus   @default(NEW)<br />
                      intentCode Int          @default(80)<br />
                      campaignId String?<br />
                      campaign   Campaign?    @relation(fields: [campaignId], references: [id])
                    </div>
                    &#125;
                  </div>
                  <div>
                    <span className="text-brand-indigo">model</span> <span className="text-white font-bold">AuditLog</span> &#123;
                    <div className="pl-4 text-gray-400">
                      id        String   @id @default(uuid())<br />
                      actorId   String<br />
                      action    String<br />
                      targetId  String<br />
                      ipAddr    String<br />
                      createdAt DateTime @default(now())
                    </div>
                    &#125;
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <hr className="border-brand-border mb-20" />

        {/* -- SECURITY SECTION -- */}
        <section className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-bold text-3xl text-white tracking-tight">
              HIPAA & SOC2 Compliance Safeguards
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Every profile parameter, message log, and billing invoice is audited, protected, and fully isolated at rest and in transit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((s, idx) => (
              <div key={idx} className="glass-panel border border-brand-border rounded-xl p-5 hover:border-brand-cyan/20 transition-all bg-white/[0.01]">
                <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-brand-cyan mb-4">
                  {s.icon}
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{s.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
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
              Get answers to your inquiries about database security, marketing campaigns setup, EHR triggers, and compliance measures.
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
