"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Sparkles, Brain, HeartPulse, FileText, Calendar,
  MessageSquare, Shield, Users, Activity, CheckCircle, Star, 
  TrendingUp, Lock, Bell, Zap, ChevronDown, LayoutDashboard, 
  Stethoscope, BookOpen, Phone, Globe, Database, Clock, X, 
  Wallet, Mic, BookMarked, RefreshCw, BarChart3, Building2, 
  Smile, Heart, AlertTriangle, CloudUpload, ShieldCheck, Eye, 
  UserCog, Video, Volume2, Plus, Info
} from "lucide-react";

/* --- Types --- */
interface Feature { icon: React.ReactNode; title: string; desc: string; badge?: string; }
interface Differentiator { icon: React.ReactNode; title: string; subtitle: string; desc: string; color: string; glow: string; }
interface FAQ { q: string; a: string; }

/* =======================================================
   DATA
   ======================================================= */

const coreFeatures: Feature[] = [
  { icon: <Phone className="w-5 h-5" />, title: "AI Front Desk Receptionist", desc: "Replaces basic widgets to explain services, qualify incoming visitor interest, review availability, and book slots.", badge: "Receptionist" },
  { icon: <Brain className="w-5 h-5" />, title: "AI Lead Qualification", desc: "Algorithmic intent scoring (e.g. 94% Intent) parsing budgets, timeframes, and ready-to-book signals.", badge: "Analytics" },
  { icon: <TrendingUp className="w-5 h-5" />, title: "Patient Conversion Pipeline", desc: "Clinic CRM tracking pipelines from inquiry, booked slot, visited clinic, through lifetime treatment accepted.", badge: "Pipeline" },
  { icon: <Bell className="w-5 h-5" />, title: "AI Follow-Up Engine", desc: "Triggers personalized check-in tracks on Day 1, Day 3, and Day 7 for inactive or unconfirmed patient leads.", badge: "Retention" },
  { icon: <Activity className="w-5 h-5" />, title: "AI Patient Reactivation", desc: "Scans data archives to flag inactive patients (no consults for 12 months) and triggers custom recall campaigns.", badge: "Growth" },
  { icon: <Sparkles className="w-5 h-5" />, title: "AI Marketing Generator", desc: "Drafts email sequences, custom SMS copies, and targeted medical landing pages in seconds.", badge: "Marketing" },
  { icon: <Wallet className="w-5 h-5" />, title: "Lifetime Value Analytics", desc: "Calculates precise total patient expenditures, treatment plans, and future clinical opportunities.", badge: "Finance" },
  { icon: <Mic className="w-5 h-5" />, title: "AI Call Center Integration", desc: "Direct voice agent lines answering clinic hours, service prices, and scheduling patient intake logs." },
  { icon: <ShieldCheck className="w-5 h-5" />, title: "Reputation Automator", desc: "Automates feedback loops; directs positive scores to Google Reviews while routing negative cases to internal staff." },
  { icon: <Building2 className="w-5 h-5" />, title: "Multi-Clinic Management", desc: "Centralized franchise settings sharing patient records, staffing files, and advertising ROI metrics." },
  { icon: <BookMarked className="w-5 h-5" />, title: "SEO Content Engine", desc: "Creates SEO educational articles matching doctor specifications to build clinic web traffic." },
  { icon: <UserCog className="w-5 h-5" />, title: "Roles & Permissions", desc: "Granular access profiles for Owner, Doctor, Manager, Receptionist, and Marketing Staff roles." }
];

const differentiators: Differentiator[] = [
  { icon: <Phone className="w-7 h-7" />, title: "AI Front Desk Receptionist", subtitle: "24/7 Web Visitor Capture", desc: "Chats with website traffic, resolves pricing queries, checks doctor calendars, and creates clinic bookings.", color: "from-brand-cyan/20 to-brand-indigo/10", glow: "rgba(6,182,212,0.15)" },
  { icon: <Brain className="w-7 h-7" />, title: "Lead Intelligence", subtitle: "Scoring Intent & Conversion", desc: "Grades incoming inquiries based on urgency and budget, letting your receptionist call high-value patients first.", color: "from-brand-indigo/20 to-purple-500/10", glow: "rgba(99,102,241,0.15)" },
  { icon: <Bell className="w-7 h-7" />, title: "AI Follow-Up System", subtitle: "Automated Inquiry Care", desc: "Engages patients who requested treatment details but dropped off, delivering care guides across days.", color: "from-brand-emerald/20 to-brand-cyan/10", glow: "rgba(16,185,129,0.15)" },
  { icon: <Activity className="w-7 h-7" />, title: "Patient Reactivation", subtitle: "Automated Annual Recalls", desc: "Monitors EMR databases to identify past patients due for checkups, triggering scheduling campaigns.", color: "from-amber-500/20 to-orange-500/10", glow: "rgba(245,158,11,0.15)" }
];

const portalModules = [
  { icon: <Phone className="w-5 h-5" />, title: "Patient Intake Hub", items: ["AI conversational booking widget", "Lead score qualifier", "Specialty search filters", "Stripe payment deposit checks"] },
  { icon: <LayoutDashboard className="w-5 h-5" />, title: "Lead Management CRM", items: ["Custom pipeline boards", "Patient 360 profile files", "Campaign analytics dashboard", "Audit session log reviews"] },
  { icon: <Calendar className="w-5 h-5" />, title: "Appointment Scheduler", items: ["Multi-location calendar maps", "No-show probability calculator", "Auto-reminders (SMS/Email)", "Doctor break configurations"] },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Revenue Intelligence", items: ["Marketing spend ROI tracker", "Clinic value dashboards", "Franchise settings overview", "Review automation portals"] }
];

const techStack = [
  { category: "Frontend Core", items: ["Next.js 15 App Router", "TypeScript", "Tailwind CSS & shadcn/ui", "Framer Motion Animations"], icon: <Globe className="w-5 h-5" /> },
  { category: "Communications", items: ["Twilio SMS Gateway", "Resend Email Dispatcher", "Secure Websockets Inbox", "Daily.co video SDK"], icon: <Phone className="w-5 h-5" /> },
  { category: "Backend Infrastructure", items: ["PostgreSQL DB Cluster", "Prisma ORM Relations", "Next.js Server Actions", "Redis session caching"], icon: <Database className="w-5 h-5" /> },
  { category: "Intelligence Layer", items: ["OpenAI GPT-4o API", "LangChain Triage Maps", "n8n / Zapier Integrations", "AWS S3 HIPAA Storage"], icon: <Lock className="w-5 h-5" /> }
];

const useCases = [
  {
    icon: <Smile className="w-6 h-6" />,
    specialty: "Dental Clinic growth",
    color: "brand-cyan",
    scenario: "AI Front Desk books high-value dental implant consultation",
    journey: [
      "Visitor triggers AI chatbot: 'I want dental implants but need pricing.'",
      "AI explains service tiers, checks payment schedules, and logs high intent (94% score).",
      "Checks Dentist availability, books slot, and captures patient deposit.",
      "Creates receptionist task on CRM board with intake summary pre-filled."
    ],
    outcome: "Dental offices see a 50% increase in implant inquiries and save 6 receptionist hours daily."
  },
  {
    icon: <Heart className="w-6 h-6" />,
    specialty: "Cardiology Lead Routing",
    color: "rose-400",
    scenario: "Lead campaign schedules annual cardiac checkup recalls",
    journey: [
      "AI Reactivation engine flags patient: 'No visit for 14 months.'",
      "Sends SMS recall campaign: 'Your annual cardiology checkup is due.'",
      "Patient clicks link, scans open doctor slot times, and schedules checkup.",
      "Cardiologist's dashboard updates status to 'Confirmed Appointment'."
    ],
    outcome: "Cardiology practices capture $15k in additional annual care checkups without manual outreach."
  },
  {
    icon: <Users className="w-6 h-6" />,
    specialty: "Multi-Location Franchises",
    color: "brand-emerald",
    scenario: "Franchise owner compares ROI between Clinic A and Clinic B",
    journey: [
      "Franchise dashboard loads patient acquisition graphs for all locations.",
      "Owner checks Google Ads ROI (Clinic A: 4x ROI, Clinic B: 2.1x ROI).",
      "AI Growth Advisor recommends transferring ad budget from Clinic B to Clinic A.",
      "Owner updates budget variables directly in Campaign Board."
    ],
    outcome: "Healthcare franchises optimize marketing allocation dynamically, raising overall ROI by 28%."
  }
];

const databaseTables = [
  { table: "Users", fields: ["id", "email", "hashedPassword", "role (Owner/Doc/Receptionist)", "createdAt"] },
  { table: "Clinics", fields: ["id", "name", "locationsList", "whiteLabelSettings"] },
  { table: "Staff", fields: ["id", "userId", "clinicId", "permissionsMask"] },
  { table: "Patients", fields: ["id", "userId", "treatmentHistory", "lifetimeExpenditure"] },
  { table: "Leads", fields: ["id", "clinicId", "intentScore", "interestedService", "source"] },
  { table: "Appointments", fields: ["id", "patientId", "doctorId", "time", "noShowRiskScore"] },
  { table: "Campaigns", fields: ["id", "name", "medium (SMS/Email)", "cost", "conversionRate"] },
  { table: "Messages", fields: ["id", "leadId", "sender", "content", "timestamp"] },
  { table: "Tasks", fields: ["id", "staffId", "title", "status (Pending/Done)", "dueDate"] },
  { table: "FollowUps", fields: ["id", "leadId", "dayInterval", "messageContent", "status"] },
  { table: "Payments", fields: ["id", "patientId", "amount", "status", "stripeId"] },
  { table: "Reviews", fields: ["id", "patientId", "score", "comments", "pushedToGoogle"] }
];

const faqs: FAQ[] = [
  { q: "What is CareFlow AI?", a: "CareFlow AI is an AI-powered practice growth and operations operating system designed to help clinics generate leads, automate symptom intakes, manage follow-up tracks, run email/SMS campaigns, and increase patient retention." },
  { q: "How does the AI Receptionist book appointments?", a: "The receptionist widget answers pricing or service questions, collects patient contact details, rates customer intent, checks doctor slot timings, and hooks directly into the CRM calendar to reserve bookings." },
  { q: "How is lead scoring calculated?", a: "The AI qualifies leads by scanning text for urgency (e.g. 'needed this week'), budget signals, and specific premium treatments (like implants or cosmetics), calculating a conversion probability (e.g. 94%)." },
  { q: "Does the system support follow-up automations?", a: "Yes. The system schedules multi-day follow-up tracks. If a lead drops off, it dispatches care guides and scheduling links automatically on Day 1, Day 3, and Day 7." },
  { q: "How does the Patient Reactivation Engine work?", a: "CareFlow AI monitors past clinic records to search for inactive patients (e.g. no consultation for 12 months) and dispatches automated recall sequences inviting them for annual checkups." },
  { q: "Is the CRM platform HIPAA compliant?", a: "Yes. CareFlow AI features role-based access controls, encrypted patient files, secure database namespaces, and full administrative audit logging aligning with strict clinical standards." },
  { q: "Can we manage multiple clinic locations?", a: "Yes. CareFlow AI supports multi-clinic structures. Owners can configure separate schedules, manage distinct staff lists, and track independent location budgets from a central portal." },
  { q: "What is the Reputation Management system?", a: "After clinic visits, patients receive automated experience feedback requests. Positive ratings trigger Google Review links, while negative ratings are routed internally to staff for resolution." },
  { q: "Can we white-label CareFlow AI?", a: "Yes. Enterprise groups can customize CareFlow AI with their own colors, logo, and custom domain configuration to host patient interactions under their own brand." },
  { q: "How long does it take to integrate CareFlow AI?", a: "A standard setup (Web widgets, CRM pipelines, and scheduler) is completed in 3-4 weeks. EHR integrations using HL7 FHIR databases require approximately 2-3 months." }
];

const mockLeads = [
  { name: "Sarah Jenkins", interest: "Dental Implants", source: "Google Ads", score: "94% High Intent", status: "AI Qualified" },
  { name: "John Smith", interest: "Teeth Whitening", source: "SEO Blog", score: "82% Med Intent", status: "Contacted" },
  { name: "Elena Rostova", interest: "Veneers", source: "Instagram Ads", score: "96% High Intent", status: "Booking Set" }
];

/* =======================================================
   COMPONENT
   ======================================================= */
export default function CareFlowAiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeUseCase, setActiveUseCase] = useState(0);

  // OS Simulator States
  const [activeDashboardTab, setActiveDashboardTab] = useState("receptionist");

  // Tab 1: AI Receptionist Chat Simulator
  const [receptionistStep, setReceptionistStep] = useState(0);
  const [visitorInput, setVisitorInput] = useState("");
  const [chatLog, setChatLog] = useState<Array<{ sender: "ai" | "user", text: string }>>([
    { sender: "ai", text: "Welcome to Apex Dental! I am CareFlow AI front desk. Are you interested in scheduling a consultation, or do you have service questions?" }
  ]);
  const [chatLoading, setChatLoading] = useState(false);
  const [leadAddedAlert, setLeadAddedAlert] = useState(false);

  // Tab 2: CRM Pipeline
  const [leadsList, setLeadsList] = useState(mockLeads);
  const [newLeadName, setNewLeadName] = useState("");
  const [newLeadService, setNewLeadService] = useState("Dental Implants");

  // Tab 3: Marketing Automation Campaigns
  const [campaignBudget, setCampaignBudget] = useState(1500);
  const [campaignROI, setCampaignROI] = useState(4.2);

  const handleReceptionistChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitorInput || chatLoading) return;

    const userText = visitorInput;
    setChatLog(prev => [...prev, { sender: "user", text: userText }]);
    setVisitorInput("");
    setChatLoading(true);

    setTimeout(() => {
      if (receptionistStep === 0) {
        setChatLog(prev => [...prev, {
          sender: "ai",
          text: "Excellent choice. Our Dental Implants start with a free consultation. May I get your name and email to qualify your booking?"
        }]);
        setReceptionistStep(1);
      } else {
        setChatLog(prev => [...prev, {
          sender: "ai",
          text: "Thank you! I have qualified your lead with a 94% Intent Score and added you to our CRM pipeline. Dr. Sarah Ahmed has slots open at 10:00 AM today."
        }]);
        setLeadAddedAlert(true);
        // Add to CRM simulator list automatically
        const formattedName = userText.split(" ")[0] || "New Patient";
        setLeadsList(prev => [
          { name: formattedName, interest: "Dental Implants", source: "Website Chat", score: "94% High Intent", status: "AI Qualified" },
          ...prev
        ]);
      }
      setChatLoading(false);
    }, 1000);
  };

  const handleCreateLeadManually = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLeadName) return;
    setLeadsList(prev => [
      { name: newLeadName, interest: newLeadService, source: "Manual Input", score: "85% Med Intent", status: "AI Qualified" },
      ...prev
    ]);
    setNewLeadName("");
  };

  return (
    <div className="relative overflow-hidden bg-brand-bg text-white">
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
          <span className="text-white">CareFlow AI OS</span>
        </div>

        {/* ======================================
            HERO SECTION + SIMULATOR
        ====================================== */}
        <section className="relative mb-24 pt-8 md:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column (5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col space-y-6 text-left"
            >
              <div className="inline-flex items-center space-x-2 self-start bg-gradient-to-r from-brand-cyan/15 to-brand-indigo/15 border border-brand-cyan/20 rounded-full px-4.5 py-1.5 shadow-lg shadow-brand-cyan/5">
                <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">Healthcare Growth Operating System</span>
                <Sparkles className="w-3 h-3 text-brand-cyan" />
              </div>

              <h1 className="font-display font-extrabold text-3xl sm:text-4xl xl:text-5xl text-white leading-[1.15] tracking-tight">
                Healthcare CRM + AI.<br />
                <span className="text-gradient-cyan-indigo">Attract More Patients.</span><br />
                <span className="text-gradient-emerald-cyan">Automate Clinic Growth.</span>
              </h1>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                A clinic growth and relationship management platform. Integrates automated front desk receptionists, multi-day lead follow-up flows, marketing CRM lists, and patient lifetime value dashboards.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold px-8 py-4 rounded-xl hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-brand-cyan/25 text-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Request Custom Demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 glass-panel border border-brand-border text-gray-300 font-semibold px-8 py-4 rounded-xl hover:border-brand-cyan/40 hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all text-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>ROI Case Studies</span>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2.5 pt-4">
                {[
                  { icon: <Shield className="w-3.5 h-3.5 text-brand-emerald" />, label: "HIPAA Audited Data", bg: "bg-brand-emerald/10 border-brand-emerald/20" },
                  { icon: <Lock className="w-3.5 h-3.5 text-brand-cyan" />, label: "Stripe Payment Vault", bg: "bg-brand-cyan/10 border-brand-cyan/20" },
                  { icon: <CheckCircle className="w-3.5 h-3.5 text-brand-indigo" />, label: "n8n / Zapier Ready", bg: "bg-brand-indigo/10 border-brand-indigo/20" }
                ].map((t) => (
                  <div key={t.label} className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full border ${t.bg}`}>
                    {t.icon}
                    <span className="text-[10px] font-semibold text-gray-300">{t.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Interactive OS Simulator (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-7 relative"
            >
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-cyan to-brand-indigo rounded-2xl blur-xl opacity-20 transition-all duration-1000 -z-10" />
              
              <div className="glass-panel rounded-2xl border border-brand-border overflow-hidden bg-brand-bg/95">
                
                {/* Simulator Header */}
                <div className="border-b border-brand-border px-5 py-3 flex items-center justify-between bg-white/5">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-6.5 h-6.5 rounded-lg bg-gradient-to-br from-brand-cyan to-brand-indigo flex items-center justify-center">
                      <HeartPulse className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="font-display font-bold text-white text-xs tracking-wide">CareFlow AI OS Console</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 bg-brand-emerald/10 border border-brand-emerald/25 rounded-full px-2.5 py-1">
                    <div className="w-1.5 h-1.5 bg-brand-emerald rounded-full animate-pulse" />
                    <span className="text-[10px] text-brand-emerald font-semibold">Growth Analytics Online</span>
                  </div>
                </div>

                {/* Dashboard Inner Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-brand-border h-[450px]">
                  
                  {/* Left Navigation (4 cols) */}
                  <div className="md:col-span-4 p-4 space-y-1.5 bg-white/[0.01]">
                    <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-2 px-2">Operating TABS</p>
                    {[
                      { id: "receptionist", label: "AI Front Desk Chat", icon: <Phone className="w-3.5 h-3.5" /> },
                      { id: "pipeline", label: "Patient CRM Pipeline", icon: <Users className="w-3.5 h-3.5" /> },
                      { id: "campaign", label: "Marketing Campaigns", icon: <TrendingUp className="w-3.5 h-3.5" /> },
                      { id: "analytics", label: "Revenue Intelligence", icon: <Building2 className="w-3.5 h-3.5" /> }
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveDashboardTab(tab.id)}
                        className={`w-full flex items-center space-x-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                          activeDashboardTab === tab.id
                            ? "bg-gradient-to-r from-brand-cyan/15 to-brand-indigo/15 text-white border border-brand-cyan/20"
                            : "text-gray-400 hover:text-gray-200 hover:bg-white/5 border border-transparent"
                        }`}
                      >
                        {tab.icon}
                        <span>{tab.label}</span>
                      </button>
                    ))}

                    <div className="pt-6">
                      <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mb-2 px-2">Campaign Match</p>
                      <div className="flex items-center space-x-2 px-2 py-1 bg-white/2 border border-brand-border rounded-xl">
                        <div className="w-7 h-7 rounded-full bg-brand-cyan/15 flex items-center justify-center text-[10px] font-bold text-brand-cyan">
                          CF
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-white">Invisalign Promo</p>
                          <p className="text-[8px] text-gray-500">Active · 4.2x ROI</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Main Display (8 cols) */}
                  <div className="md:col-span-8 p-5 overflow-y-auto flex flex-col justify-between h-full bg-brand-bg/10">
                    
                    {/* Tab 1: AI Front Desk Chat */}
                    {activeDashboardTab === "receptionist" && (
                      <div className="flex-grow flex flex-col justify-between space-y-4">
                        <div className="flex items-center justify-between border-b border-brand-border/60 pb-2">
                          <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider flex items-center">
                            <Brain className="w-3.5 h-3.5 text-brand-cyan animate-pulse mr-1.5" />
                            <span>AI Assistant Chat Intake</span>
                          </span>
                          <span className="text-[8px] bg-brand-cyan/15 text-brand-cyan font-bold px-2 py-0.5 rounded-full border border-brand-cyan/10">Live Triage</span>
                        </div>

                        {/* Chat history */}
                        <div className="flex-grow overflow-y-auto max-h-[190px] space-y-3 pr-1 text-[11px] leading-relaxed">
                          {chatLog.map((msg, i) => (
                            <div key={i} className={`flex space-x-2 ${msg.sender === "user" ? "justify-end" : ""}`}>
                              {msg.sender === "ai" && (
                                <div className="w-5 h-5 rounded-full bg-brand-cyan/20 flex items-center justify-center text-[8px] font-bold text-brand-cyan flex-shrink-0">
                                  AI
                                </div>
                              )}
                              <div className={`p-2.5 rounded-xl border max-w-[80%] ${
                                msg.sender === "user"
                                  ? "bg-brand-indigo/15 border-brand-indigo/25 text-white rounded-tr-none"
                                  : "bg-brand-cyan/5 border-brand-cyan/15 text-gray-300 rounded-tl-none"
                              }`}>
                                {msg.text}
                              </div>
                            </div>
                          ))}

                          {chatLoading && (
                            <div className="flex space-x-2">
                              <div className="w-5 h-5 rounded-full bg-brand-cyan/20 flex items-center justify-center text-[8px] font-bold text-brand-cyan flex-shrink-0">
                                AI
                              </div>
                              <div className="bg-brand-cyan/5 border border-brand-cyan/15 rounded-xl rounded-tl-none p-2.5 text-gray-400">
                                <span className="animate-pulse">Qualifying incoming inquiry parameters...</span>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Qualified lead added alert */}
                        {leadAddedAlert && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-brand-emerald/10 border border-brand-emerald/20 rounded-xl p-3"
                          >
                            <div className="flex items-center space-x-1.5 mb-1">
                              <CheckCircle className="w-3.5 h-3.5 text-brand-emerald" />
                              <span className="text-[9px] text-brand-emerald font-bold uppercase">AI Lead Qualified</span>
                            </div>
                            <p className="text-[10px] text-gray-300 leading-normal">
                              <strong>Status:</strong> Transferred to CRM · <strong>Score:</strong> 94% Intent · <strong>Opportunity:</strong> Dental Implants ($4,500 LTV).
                            </p>
                          </motion.div>
                        )}

                        {/* Interactive Form Input */}
                        {!leadAddedAlert && (
                          <form onSubmit={handleReceptionistChatSubmit} className="flex gap-2">
                            <input
                              type="text"
                              required
                              value={visitorInput}
                              onChange={(e) => setVisitorInput(e.target.value)}
                              disabled={chatLoading}
                              placeholder={receptionistStep === 0 ? "e.g. I want teeth whitening pricing..." : "Enter details..."}
                              className="flex-grow bg-brand-bg/50 border border-brand-border rounded-xl px-3 py-2 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-brand-cyan"
                            />
                            <button
                              type="submit"
                              disabled={chatLoading}
                              className="bg-brand-cyan hover:bg-brand-cyan/90 text-brand-bg font-bold text-xs px-4 py-2 rounded-xl transition-colors disabled:opacity-50"
                            >
                              Send
                            </button>
                          </form>
                        )}

                        {leadAddedAlert && (
                          <button
                            onClick={() => {
                              setLeadAddedAlert(false);
                              setReceptionistStep(0);
                              setChatLog([{ sender: "ai", text: "Welcome to Apex Dental! I am CareFlow AI front desk. Are you interested in scheduling a consultation, or do you have service questions?" }]);
                            }}
                            className="text-[10px] text-brand-cyan hover:underline text-center block mt-1"
                          >
                            Restart Chat Intake Simulator
                          </button>
                        )}
                      </div>
                    )}

                    {/* Tab 2: Patient CRM Pipeline */}
                    {activeDashboardTab === "pipeline" && (
                      <div className="flex-grow flex flex-col justify-between space-y-4">
                        <div>
                          <div className="flex items-center justify-between border-b border-brand-border/60 pb-2 mb-3">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Patient 360 CRM Board</span>
                            <span className="text-[8px] bg-brand-cyan/15 text-brand-cyan font-bold px-2 py-0.5 rounded-full border border-brand-cyan/10">Pipeline Leads</span>
                          </div>

                          <div className="space-y-2 max-h-[190px] overflow-y-auto pr-1">
                            {leadsList.map((lead) => (
                              <div key={lead.name} className="glass-panel border border-brand-border rounded-xl p-3 flex items-center justify-between hover:border-brand-cyan/30 transition-all">
                                <div>
                                  <p className="text-[11px] font-bold text-white leading-none">{lead.name}</p>
                                  <p className="text-[9px] text-gray-500 mt-1">{lead.interest} · {lead.source}</p>
                                </div>
                                <div className="text-right">
                                  <span className="text-[8px] font-mono font-bold uppercase tracking-wide block text-brand-cyan">{lead.score}</span>
                                  <span className="text-[8px] bg-white/5 border border-brand-border px-1.5 py-0.5 rounded-full text-gray-400 inline-block mt-1 font-semibold">{lead.status}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Add manual lead */}
                        <form onSubmit={handleCreateLeadManually} className="flex gap-2">
                          <input
                            type="text"
                            required
                            value={newLeadName}
                            onChange={(e) => setNewLeadName(e.target.value)}
                            placeholder="Add manual patient lead name..."
                            className="flex-grow bg-brand-bg/50 border border-brand-border rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none"
                          />
                          <select
                            value={newLeadService}
                            onChange={(e) => setNewLeadService(e.target.value)}
                            className="bg-brand-bg/50 border border-brand-border rounded-lg px-2 text-xs text-white outline-none"
                          >
                            <option value="Dental Implants">Implants</option>
                            <option value="Teeth Whitening">Whitening</option>
                            <option value="Veneers">Veneers</option>
                          </select>
                          <button
                            type="submit"
                            className="bg-brand-cyan text-brand-bg font-bold text-xs px-3 py-1.5 rounded-lg"
                          >
                            Add
                          </button>
                        </form>
                      </div>
                    )}

                    {/* Tab 3: Marketing Automation Campaigns */}
                    {activeDashboardTab === "campaign" && (
                      <div className="flex-grow flex flex-col justify-between space-y-4">
                        <div>
                          <div className="flex items-center justify-between border-b border-brand-border/60 pb-2 mb-3">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">AI Marketing Campaign Builder</span>
                            <span className="text-[8px] bg-brand-indigo/15 text-brand-indigo font-bold px-2 py-0.5 rounded-full border border-brand-indigo/10">Active Tracks</span>
                          </div>

                          <div className="space-y-3">
                            <div className="p-3 bg-white/2 border border-brand-border rounded-xl">
                              <span className="text-[8px] text-gray-500 uppercase font-bold block">Target Promotion</span>
                              <span className="text-xs text-white font-bold block">Summer Invisalign Consultation Campaign</span>
                              <p className="text-[10px] text-gray-400 mt-1 leading-normal">
                                <strong>Message Track:</strong> Day 0 Intake &rarr; Day 3 Doctor Slot Offer &rarr; Day 7 Financing guides.
                              </p>
                            </div>

                            <div className="grid grid-cols-2 gap-3 text-center">
                              <div className="bg-white/2 border border-brand-border rounded-xl p-2.5">
                                <span className="text-[8px] text-gray-500 block uppercase">Campaign Spend</span>
                                <span className="text-sm font-extrabold text-white block mt-0.5">${campaignBudget}</span>
                              </div>
                              <div className="bg-white/2 border border-brand-border rounded-xl p-2.5">
                                <span className="text-[8px] text-gray-500 block uppercase">Attributed Revenue</span>
                                <span className="text-sm font-extrabold text-brand-emerald block mt-0.5">${Math.round(campaignBudget * campaignROI)}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Adjust Campaign slider simulation */}
                        <div className="space-y-1.5">
                          <div className="flex justify-between text-[10px] text-gray-400">
                            <span>Adjust Ad Budget:</span>
                            <span className="text-white font-bold">${campaignBudget}</span>
                          </div>
                          <input
                            type="range"
                            min="500"
                            max="5000"
                            step="500"
                            value={campaignBudget}
                            onChange={(e) => {
                              setCampaignBudget(Number(e.target.value));
                              setCampaignROI(Number((4.2 - (Number(e.target.value) / 10000)).toFixed(1)));
                            }}
                            className="w-full accent-brand-cyan bg-white/10 rounded-lg h-1"
                          />
                        </div>
                      </div>
                    )}

                    {/* Tab 4: Revenue Intelligence */}
                    {activeDashboardTab === "analytics" && (
                      <div className="flex-grow flex flex-col justify-between space-y-4">
                        <div>
                          <div className="flex items-center justify-between border-b border-brand-border/60 pb-2 mb-3">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Practice Profit Analytics</span>
                            <span className="text-[8px] bg-brand-cyan/15 text-brand-cyan font-bold px-2 py-0.5 rounded-full border border-brand-cyan/10">Clinic ROI</span>
                          </div>

                          <div className="grid grid-cols-2 gap-3 text-center">
                            <div className="bg-white/2 border border-brand-border rounded-xl p-3">
                              <span className="text-[8px] text-gray-500 block uppercase">Practice Revenue</span>
                              <span className="text-base font-extrabold text-white block mt-0.5">$54,840</span>
                            </div>
                            <div className="bg-white/2 border border-brand-border rounded-xl p-3">
                              <span className="text-[8px] text-gray-500 block uppercase">Ad Conversion Rate</span>
                              <span className="text-base font-extrabold text-brand-cyan block mt-0.5">28.5%</span>
                            </div>
                          </div>

                          <div className="p-3 bg-brand-emerald/10 border border-brand-emerald/20 rounded-xl mt-3 text-[10px] text-gray-300 leading-normal flex gap-1.5">
                            <TrendingUp className="w-4 h-4 text-brand-emerald flex-shrink-0 mt-0.5 animate-pulse" />
                            <span>AI Business Consultant: Google Ads drives 60% of leads, but organic SEO channels show a 3.4x higher patient conversion index. Recommend increasing SEO writing budgets.</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Navigation helper */}
                    <div className="text-[9px] text-gray-500 text-center border-t border-brand-border/60 pt-2 flex items-center justify-between mt-2">
                      <span>Click sidebar tabs to simulate practice growth workflows.</span>
                      <Brain className="w-3 h-3 text-brand-cyan" />
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </section>

        {/* ======================================
            STATS BAR
        ====================================== */}
        <section className="mb-28">
          <div className="glass-panel rounded-2xl border border-brand-border p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { value: "94%+", label: "Lead Conversion", icon: <TrendingUp className="w-5 h-5" /> },
                { value: "2.5x", label: "Patient LTV Growth", icon: <Wallet className="w-5 h-5" /> },
                { value: "5 hrs+", label: "Weekly Staff Saved", icon: <Clock className="w-5 h-5" /> },
                { value: "40%+", label: "Ad ROI Increase", icon: <BarChart3 className="w-5 h-5" /> },
                { value: "100%", label: "HIPAA Compliant", icon: <Shield className="w-5 h-5" /> },
                { value: "92/100", label: "Experience Score", icon: <Smile className="w-5 h-5" /> }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="text-center space-y-1.5"
                >
                  <div className="w-9 h-9 rounded-xl bg-brand-cyan/5 border border-brand-cyan/15 text-brand-cyan flex items-center justify-center mx-auto mb-1">
                    {stat.icon}
                  </div>
                  <h4 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight">{stat.value}</h4>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================
            DIFFERENTIATORS (4 Core Differentiators)
        ====================================== */}
        <section className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-4 py-1.5 mb-4">
              <Sparkles className="w-4 h-4 text-brand-cyan" />
              <span className="text-xs font-semibold text-brand-cyan uppercase tracking-widest">Growth Engines</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Why CareFlow is Different
            </h2>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-xl mx-auto">
              We upgrade basic patient records into full marketing conversion and clinical reactivation databases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="glass-panel rounded-2xl p-6 border border-brand-border flex flex-col justify-between relative group hover:border-brand-cyan/40 transition-colors"
              >
                <div className="absolute -inset-px bg-gradient-to-br from-brand-cyan/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center mb-5">
                    {d.icon}
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mb-1">{d.title}</h3>
                  <p className="text-xs text-brand-cyan font-mono mb-3">{d.subtitle}</p>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{d.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ======================================
            PORTAL MODULES GRID
        ====================================== */}
        <section className="mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Info (5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 text-left"
            >
              <div className="inline-flex items-center space-x-2 bg-brand-indigo/10 border border-brand-indigo/20 rounded-full px-4 py-1.5 mb-6">
                <LayoutDashboard className="w-4 h-4 text-brand-indigo" />
                <span className="text-xs font-semibold text-brand-indigo uppercase tracking-widest">SaaS Modules</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4">
                Clinical growth operating software
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Structured to streamline administrative checkups, automate campaign drafts, calculate patient LTV metrics, and coordinate multi-location schedules.
              </p>
              
              <div className="p-4 bg-brand-cyan/5 border border-brand-cyan/15 rounded-xl text-[11px] leading-relaxed text-gray-400 flex gap-2">
                <Info className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                <span>Features complete WebRTC audio integrations and Stripe payment setups to secure appointment consultation fees automatically.</span>
              </div>
            </motion.div>

            {/* Right Grid (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {portalModules.map((m) => (
                <div key={m.title} className="glass-panel rounded-xl p-5 border border-brand-border">
                  <div className="flex items-center space-x-2.5 mb-3">
                    <span className="text-brand-cyan">{m.icon}</span>
                    <h4 className="font-semibold text-white text-sm">{m.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {m.items.map((item) => (
                      <li key={item} className="flex items-start space-x-2">
                        <CheckCircle className="w-3.5 h-3.5 text-brand-emerald mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-gray-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ======================================
            SPECIALTIES USE CASES
        ====================================== */}
        <section className="mb-28">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-4 py-1.5 mb-4">
              <Stethoscope className="w-4 h-4 text-brand-cyan" />
              <span className="text-xs font-semibold text-brand-cyan uppercase tracking-widest">Practice ROI</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Clinic Use Cases
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              See how CareFlow AI scales patient acquisition and follow-up flows across distinct medical clinic specialties.
            </p>
          </div>

          {/* Tab selector */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {useCases.map((uc, i) => (
              <button
                key={uc.specialty}
                onClick={() => setActiveUseCase(i)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeUseCase === i
                    ? "bg-gradient-to-r from-brand-cyan/20 to-brand-indigo/15 text-white border border-brand-cyan/30"
                    : "glass-panel border border-brand-border text-gray-400 hover:text-white hover:border-brand-cyan/20"
                }`}
              >
                <span className="text-brand-cyan">{uc.icon}</span>
                <span>{uc.specialty}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeUseCase}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="glass-panel rounded-2xl border border-brand-border overflow-hidden text-left"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="p-8 border-b lg:border-b-0 lg:border-r border-brand-border">
                  <div className="w-14 h-14 rounded-2xl bg-brand-cyan/10 flex items-center justify-center mb-5 text-brand-cyan">
                    {useCases[activeUseCase].icon}
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mb-2">{useCases[activeUseCase].specialty}</h3>
                  <p className="text-sm text-gray-400 mb-6 italic">&ldquo;{useCases[activeUseCase].scenario}&rdquo;</p>
                  <div className="p-4 bg-brand-emerald/10 border border-brand-emerald/20 rounded-xl">
                    <p className="text-xs font-bold text-brand-emerald mb-1">Measured Clinic ROI</p>
                    <p className="text-sm text-gray-300">{useCases[activeUseCase].outcome}</p>
                  </div>
                </div>
                <div className="lg:col-span-2 p-8">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-5">Patient Conversion Steps</p>
                  <div className="space-y-4">
                    {useCases[activeUseCase].journey.map((step, i) => (
                      <div key={i} className="flex items-start space-x-4">
                        <div className="w-8 h-8 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan text-xs font-bold flex-shrink-0">
                          {i + 1}
                        </div>
                        <p className="text-sm text-gray-300 pt-1.5 leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* ======================================
            20 CORE SaaS CAPABILITIES
        ====================================== */}
        <section className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              20 Advanced Practice Capabilities
            </h2>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-xl mx-auto">
              Explore the complete growth and automation feature checklist that sets CareFlow AI apart as a practice operating platform.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              { num: "01", title: "AI Front Desk Receptionist", desc: "Automates web inquiries, maps treatment pricing, and schedules consultations." },
              { num: "02", title: "AI Lead Qualifier", desc: "Calculates intent scoring indexes to prioritize receptionist calls." },
              { num: "03", title: "Patient Conversion Pipeline", desc: "Tracks lead flows from initial inquiry to returning patient loyalty." },
              { num: "04", title: "AI Treatment Follow-Up", desc: "Automated Care triggers emailing guides on Day 1, Day 3, and Day 7." },
              { num: "05", title: "AI Website Personalization", desc: "Changes landing layouts dynamically based on search terms (e.g. costs)." },
              { num: "06", title: "AI Patient Reactivation", desc: "Monitors databases to recall past patients due for annual checkups." },
              { num: "07", title: "AI Campaign Builder", desc: "Writes target SMS, email copy, and creates landing layouts in seconds." },
              { num: "08", title: "Lifetime Value Tracker", desc: "Calculates total expenditure history and upcoming consult values." },
              { num: "09", title: "AI Call Center Integration", desc: "Direct voice agent lines answering FAQ queries and booking slots." },
              { num: "10", title: "Smart Slot Optimizer", desc: "Reduces clinic no-show rates with machine-learning timeline alerts." },
              { num: "11", title: "Clinic Growth Advisor", desc: "AI consultant evaluating EMR conversion rates to advise ad budgets." },
              { num: "12", title: "Patient Experience Score", desc: "Calculates satisfaction indexes based on staff response times." },
              { num: "13", title: "Reputation Automator", desc: "Collects reviews; routes positive scores to Google while flagging issues." },
              { num: "14", title: "Healthcare Content Engine", desc: "Drafts medical SEO blogs and FAQ pages dynamically." },
              { num: "15", title: "Multi-Clinic Management", desc: "Enterprise panels monitoring leads and staff across multiple locations." },
              { num: "16", title: "AI Patient Journey Map", desc: "Visualizes the clinical path from intake, consultation, to long-term care." },
              { num: "17", title: "Smart Internal Tasks", desc: "Auto-creates checklists for receptionists and notifications for doctors." },
              { num: "18", title: "Healthcare Integrations", desc: "Connects with calendars, EHR vaults, SMS gateways, and Stripe." },
              { num: "19", title: "White Label Options", desc: "Enables healthcare networks to insert their logo, styling, and domains." },
              { num: "20", title: "AI Practice Consultant", desc: "Interactive prompt evaluating practice analytics to outline growth tasks." }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="glass-panel rounded-xl p-5 border border-brand-border flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-brand-cyan/60 block mb-2">{item.num}</span>
                  <h4 className="font-display font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ======================================
            TECH STACK GRID
        ====================================== */}
        <section className="mb-28">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Enterprise Practice Growth Stack
            </h2>
            <p className="mt-3 text-gray-400 max-w-xl mx-auto">
              Modern framework technologies selected to maintain low WebRTC video latency and secure EMR database scaling.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
            {techStack.map((stack) => (
              <div key={stack.category} className="glass-panel rounded-xl p-5 border border-brand-border">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-brand-cyan">{stack.icon}</span>
                  <h4 className="font-display font-bold text-white">{stack.category}</h4>
                </div>
                <ul className="space-y-2">
                  {stack.items.map((item) => (
                    <li key={item} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan/60" />
                      <span className="text-sm text-gray-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================
            DATABASE SCHEMA DESIGN
        ====================================== */}
        <section className="mb-28">
          <div className="glass-panel rounded-2xl p-8 border border-brand-border text-left">
            <div className="flex items-x-3 mb-8">
              <Database className="w-6 h-6 text-brand-cyan mr-3" />
              <div>
                <h2 className="font-display font-bold text-2xl text-white">Prisma DB Schema Layout</h2>
                <p className="text-sm text-gray-400">PostgreSQL Relational Structures - fully typed, migration-safe, auditable records</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {databaseTables.map((t) => (
                <div key={t.table} className="bg-brand-bg/50 rounded-xl p-4 border border-brand-border hover:border-brand-cyan/30 transition-colors">
                  <p className="font-display font-bold text-brand-cyan text-sm mb-2">{t.table}</p>
                  <ul className="space-y-1">
                    {t.fields.map((f) => (
                      <li key={f} className="text-[11px] text-gray-500 font-mono">{f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================
            FAQ SECTION
        ====================================== */}
        <section className="mb-28 text-left">
          <div className="text-center mb-14">
            <div className="inline-flex items-center space-x-2 bg-brand-indigo/10 border border-brand-indigo/20 rounded-full px-4 py-1.5 mb-4">
              <BookOpen className="w-4 h-4 text-brand-indigo" />
              <span className="text-xs font-semibold text-brand-indigo uppercase tracking-widest">FAQS</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Questions & Answers
            </h2>
            <p className="mt-3 text-gray-400 max-w-xl mx-auto">
              Everything you need to know about compliance, features, subscription plans, and integration steps.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="glass-panel rounded-xl border border-brand-border overflow-hidden hover:border-brand-cyan/25 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center space-x-3 px-5 py-4 text-left group"
                >
                  <span className="w-6 h-6 rounded-lg bg-brand-cyan/10 text-brand-cyan text-[10px] font-extrabold flex items-center justify-center flex-shrink-0 group-hover:bg-brand-cyan/20 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-semibold text-white text-sm flex-grow leading-snug">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform flex-shrink-0 ${openFaq === i ? "rotate-180 text-brand-cyan" : ""}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 ml-9">
                        <p className="text-sm text-gray-400 leading-relaxed border-l-2 border-brand-cyan/30 pl-3">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ======================================
            CTA SECTION
        ====================================== */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative glass-panel rounded-3xl p-12 border border-brand-border text-center overflow-hidden"
          >
            <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-brand-cyan/8 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-brand-indigo/8 rounded-full blur-[80px]" />

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-cyan/20 to-brand-indigo/20 border border-brand-cyan/30 mx-auto mb-6">
                <HeartPulse className="w-8 h-8 text-brand-cyan" />
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl xl:text-5xl text-white mb-4">
                Ready to scale Practice Growth?
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
                Deploy front desk receptionists, automate campaign drafts, track conversion pipelines, and scale practice operations.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <Link href="/contact" className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-semibold px-8 py-4 rounded-xl hover:opacity-95 transition-opacity shadow-lg shadow-brand-cyan/25">
                  <Sparkles className="w-4 h-4" />
                  <span>Launch CareFlow OS</span>
                </Link>
                <Link href="/contact" className="inline-flex items-center space-x-2 glass-panel border border-brand-border text-gray-300 font-semibold px-8 py-4 rounded-xl hover:border-brand-cyan/40 hover:text-white transition-all">
                  <Phone className="w-4 h-4" />
                  <span>Request White-Label Info</span>
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
                <a href="https://github.com/alimubashir822/ApexDental" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-brand-cyan transition-colors">
                  <BookOpen className="w-4 h-4" />
                  <span>View GitHub Repository</span>
                </a>
              </div>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}
