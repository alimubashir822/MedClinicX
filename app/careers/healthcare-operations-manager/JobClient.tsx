"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Sparkles, Brain, HeartPulse, FileText,
  Shield, Users, Activity, Upload, CheckCircle,
  Lock, Globe, Database, HardDrive,
  Check, Send, Code, AlertCircle, FileSpreadsheet, Layers,
  Settings, Zap, Users2
} from "lucide-react";

interface TechSkill { name: string; level: string; color: string; }
interface TechArea { title: string; desc: string; icon: React.ReactNode; }

export default function JobClient() {
  const [activeTab, setActiveTab] = useState<"description" | "apply">("description");
  
  // Application Form State
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    portfolioUrl: "",
    opsEnvironment: "saas",
    healthcareYears: "3-5",
    scalingComfort: "yes",
    resumeFile: null as File | null,
    resumeName: "",
  });

  // Workflow Triage Sandbox State
  const [scenarios, setScenarios] = useState({
    scenario1: "",
    scenario2: "",
    scenario3: ""
  });
  const [sandboxAttempts, setSandboxAttempts] = useState(0);
  const [sandboxSuccess, setSandboxSuccess] = useState(false);
  const [sandboxError, setSandboxError] = useState("");

  // Submission States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const technicalSkills: TechSkill[] = [
    { name: "Healthcare Workflow Optimization", level: "Required", color: "text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20" },
    { name: "SaaS Operations / IT Systems", level: "Required", color: "text-brand-indigo bg-brand-indigo/10 border-brand-indigo/20" },
    { name: "EHR/EMR Systems understanding", level: "Required", color: "text-brand-emerald bg-brand-emerald/10 border-brand-emerald/20" },
    { name: "HIPAA Compliance & Regulations", level: "Highly Valued", color: "text-purple-400 bg-purple-400/10 border-purple-400/20" },
    { name: "Data Analysis & KPI Monitoring", level: "Highly Valued", color: "text-amber-400 bg-amber-400/10 border-amber-400/20" },
    { name: "Project Coordination (Jira/Asana)", level: "Preferred", color: "text-rose-400 bg-rose-400/10 border-rose-400/20" },
  ];

  const techAreas: TechArea[] = [
    { title: "Healthcare SaaS platforms", desc: "Oversee operational pipelines for patient portals and hospital administration panels.", icon: <Globe className="w-5 h-5" /> },
    { title: "Clinical workflow systems", desc: "Map and streamline medical workflows to reduce administrative overhead for clinical staff.", icon: <Activity className="w-5 h-5" /> },
    { title: "Patient portals", desc: "Monitor portal registration, communication speed, and security audit logs.", icon: <Users className="w-5 h-5" /> },
    { title: "Healthcare automation tools", desc: "Configure event-based automation triggers for appointment bookings, reminders, and intake status.", icon: <Zap className="w-5 h-5" /> },
    { title: "EHR/EMR integrations", desc: "Coordinate operational pipelines connecting clinical charting with digital systems.", icon: <Database className="w-5 h-5" /> },
    { title: "Telemedicine platforms", desc: "Optimize patient-doctor queue management, video session setup, and doctor scheduling.", icon: <HeartPulse className="w-5 h-5" /> },
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => ({ ...prev, resumeFile: file, resumeName: file.name }));
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setFormData(prev => ({ ...prev, resumeFile: file, resumeName: file.name }));
    }
  };

  const validateScenarios = () => {
    setSandboxAttempts(prev => prev + 1);
    
    // Correct choices:
    // scenario1 -> portal (Deploy secure Patient Portal with self-service results access)
    // scenario2 -> reminders (Configure automated SMS/email reminders with pre-visit intake forms)
    // scenario3 -> intake (Implement digital intake forms integrated directly with EHR queue triggers)
    
    const correct1 = scenarios.scenario1 === "portal";
    const correct2 = scenarios.scenario2 === "reminders";
    const correct3 = scenarios.scenario3 === "intake";
    
    if (correct1 && correct2 && correct3) {
      setSandboxSuccess(true);
      setSandboxError("");
    } else {
      setSandboxSuccess(false);
      let incorrectCount = 0;
      if (!correct1) incorrectCount++;
      if (!correct2) incorrectCount++;
      if (!correct3) incorrectCount++;
      
      setSandboxError(
        `Operational bottleneck. ${incorrectCount}/3 remedies mapped incorrectly. Hint: Portal solves patient phone traffic for results; reminders reduce imaging clinic no-shows; digital intake directly eliminates manual paper transcription into the EHR.`
      );
    }
  };

  const submitApplication = async () => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitSuccess(true);
  };

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Background glow templates */}
      <div className="fixed top-0 right-1/4 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[130px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 left-1/4 w-[500px] h-[500px] bg-brand-indigo/5 rounded-full blur-[130px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        
        {/* -- BREADCRUMB -- */}
        <div className="mb-8 flex items-center space-x-2 text-xs">
          <Link href="/" className="text-gray-500 hover:text-brand-cyan transition-colors">Home</Link>
          <span className="text-gray-600">/</span>
          <Link href="/careers" className="text-gray-500 hover:text-brand-cyan transition-colors">Careers</Link>
          <span className="text-gray-600">/</span>
          <span className="text-white">Healthcare Operations Manager</span>
        </div>

        {/* -- HERO HEADER -- */}
        <header className="mb-12 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan/20 to-brand-indigo/20 rounded-3xl blur-2xl opacity-40 -z-10 pointer-events-none" />
          <div className="glass-panel border border-brand-border rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-6">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-cyan/15 to-brand-indigo/15 border border-brand-cyan/20 rounded-full px-4 py-1.5 shadow-lg shadow-brand-cyan/5">
                  <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">Job Opportunity</span>
                  <Sparkles className="w-3 h-3 text-brand-cyan" />
                </div>

                <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                  Healthcare Operations Manager
                </h1>

                <p className="text-gray-400 text-sm sm:text-base max-w-2xl">
                  Optimize clinical workflows, oversee healthcare SaaS product operations, monitor process KPIs, and manage digital health system onboarding for US hospitals and clinics.
                </p>

                <div className="flex flex-wrap gap-3.5 text-xs text-gray-300">
                  <div className="flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-3.5 py-1.5">
                    <span className="w-1.5 h-1.5 bg-brand-emerald rounded-full" />
                    <span>Remote (US-based)</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-3.5 py-1.5">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" />
                    <span>Full-Time</span>
                  </div>
                  
                </div>
              </div>

              {/* Action Buttons */}
              <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3">
                <button
                  onClick={() => {
                    setActiveTab("apply");
                    const element = document.getElementById("job-portal-content");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold px-6 py-4 rounded-xl hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-brand-cyan/25 text-xs cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Apply Now</span>
                </button>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center space-x-2 glass-panel border border-brand-border text-gray-300 font-semibold px-6 py-4 rounded-xl hover:border-brand-cyan/40 hover:text-white transition-all text-xs"
                >
                  <span>Ask a Question</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* -- NAV TABS -- */}
        <div className="flex border-b border-brand-border mb-12" id="job-portal-content">
          <button
            onClick={() => setActiveTab("description")}
            className={`px-6 py-3 font-display font-semibold text-sm transition-all border-b-2 -mb-px flex items-center space-x-2 cursor-pointer ${
              activeTab === "description"
                ? "border-brand-cyan text-white font-bold"
                : "border-transparent text-gray-400 hover:text-gray-200"
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Job Description</span>
          </button>
          <button
            onClick={() => setActiveTab("apply")}
            className={`px-6 py-3 font-display font-semibold text-sm transition-all border-b-2 -mb-px flex items-center space-x-2 cursor-pointer ${
              activeTab === "apply"
                ? "border-brand-cyan text-white font-bold"
                : "border-transparent text-gray-400 hover:text-gray-200"
            }`}
          >
            <Send className="w-4 h-4 animate-pulse" />
            <span>Apply Portal</span>
          </button>
        </div>

        {/* -- MAIN CONTENT BODY -- */}
        <AnimatePresence mode="wait">
          {activeTab === "description" ? (
            <motion.div
              key="desc"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10"
            >
              {/* Left Column (8 cols) */}
              <div className="lg:col-span-8 space-y-10">
                {/* About Med Clinic X */}
                <section className="space-y-4">
                  <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                    About Med Clinic X
                  </h2>
                  <div className="text-gray-400 space-y-4 text-sm sm:text-base leading-relaxed">
                    <p>
                      Med Clinic X is a healthcare technology company helping healthcare organizations across the United States modernize their systems through digital transformation and intelligent software solutions.
                    </p>
                    <p>
                      We build healthcare SaaS platforms, patient portals, AI-driven healthcare systems, telemedicine solutions, automation workflows, and integrated digital health products for clinics, hospitals, and healthcare providers.
                    </p>
                    <p>
                      Our mission is to help healthcare organizations adopt technology that improves efficiency, interoperability, and patient outcomes.
                    </p>
                  </div>
                </section>

                {/* Job Overview */}
                <section className="space-y-4">
                  <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                    Job Overview
                  </h2>
                  <div className="text-gray-400 space-y-4 text-sm sm:text-base leading-relaxed">
                    <p>
                      We are hiring a <strong className="text-white font-semibold">Healthcare Operations Manager</strong> to oversee and optimize operational workflows across healthcare technology products and client implementations.
                    </p>
                    <p>
                      In this role, you will ensure smooth execution of healthcare SaaS operations, improve clinical and administrative workflows, and support the scaling of digital health systems used by healthcare organizations in the United States.
                    </p>
                    <p>
                      You will work closely with product teams, engineering teams, healthcare clients, and leadership to ensure operational excellence across all healthcare technology initiatives.
                    </p>
                  </div>
                </section>

                {/* Responsibilities */}
                <section className="space-y-6">
                  <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                    Key Responsibilities
                  </h2>

                  <div className="space-y-6">
                    {/* Operations Management */}
                    <div className="glass-panel border border-brand-border rounded-2xl p-6">
                      <h3 className="font-display font-bold text-white text-base mb-3 flex items-center space-x-2">
                        <Settings className="w-5 h-5 text-brand-cyan" />
                        <span>Healthcare Operations Management</span>
                      </h3>
                      <ul className="list-disc pl-5 text-gray-400 text-sm space-y-2">
                        <li>Oversee daily healthcare SaaS and digital health operations.</li>
                        <li>Improve efficiency of clinical and administrative workflows.</li>
                        <li>Monitor operational KPIs across healthcare systems and platforms.</li>
                        <li>Ensure smooth functioning of healthcare technology processes.</li>
                      </ul>
                    </div>

                    {/* Workflow Optimization */}
                    <div className="glass-panel border border-brand-border rounded-2xl p-6">
                      <h3 className="font-display font-bold text-white text-base mb-3 flex items-center space-x-2">
                        <Zap className="w-5 h-5 text-brand-indigo" />
                        <span>Workflow Optimization & Automation</span>
                      </h3>
                      <ul className="list-disc pl-5 text-gray-400 text-sm space-y-2">
                        <li>Analyze healthcare operational processes and identify inefficiencies.</li>
                        <li>Implement automation and digital solutions to improve workflows.</li>
                        <li>Optimize patient intake, scheduling, and clinical operations systems.</li>
                        <li>Improve coordination between healthcare teams and digital platforms.</li>
                      </ul>
                    </div>

                    {/* Tech operations */}
                    <div className="glass-panel border border-brand-border rounded-2xl p-6">
                      <h3 className="font-display font-bold text-white text-base mb-3 flex items-center space-x-2">
                        <Database className="w-5 h-5 text-brand-emerald" />
                        <span>Healthcare SaaS & Technology Operations</span>
                      </h3>
                      <ul className="list-disc pl-5 text-gray-400 text-sm space-y-2">
                        <li>Support operations of healthcare SaaS platforms and patient portals.</li>
                        <li>Work with engineering teams to resolve operational issues.</li>
                        <li>Ensure stability and performance of healthcare applications.</li>
                        <li>Assist in scaling healthcare technology systems for clients.</li>
                      </ul>
                    </div>

                    {/* Collaboration */}
                    <div className="glass-panel border border-brand-border rounded-2xl p-6">
                      <h3 className="font-display font-bold text-white text-base mb-3 flex items-center space-x-2">
                        <Users2 className="w-5 h-5 text-rose-400" />
                        <span>Cross-Functional Collaboration</span>
                      </h3>
                      <ul className="list-disc pl-5 text-gray-400 text-sm space-y-2">
                        <li>Coordinate between product, engineering, support, and client teams.</li>
                        <li>Translate operational needs into technical requirements.</li>
                        <li>Support healthcare clients during onboarding and system adoption.</li>
                        <li>Ensure alignment between clinical needs and technology delivery.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Tech Areas */}
                <section className="space-y-6">
                  <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                    Healthcare Technology Areas You Will Work With
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {techAreas.map((area, idx) => (
                      <div key={idx} className="glass-panel border border-brand-border rounded-xl p-5 hover:border-brand-cyan/35 transition-colors">
                        <div className="flex items-center space-x-3 mb-2 text-brand-cyan">
                          {area.icon}
                          <h4 className="font-display font-bold text-sm text-white">{area.title}</h4>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed">{area.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Right Column (4 cols) */}
              <div className="lg:col-span-4 space-y-8">
                {/* Tech skills checklist */}
                <div className="glass-panel border border-brand-border rounded-2xl p-6 space-y-4">
                  <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider">
                    Core Technical Requirements
                  </h3>
                  <div className="flex flex-col gap-3">
                    {technicalSkills.map((skill, idx) => (
                      <div key={idx} className="flex flex-col p-3 rounded-xl border border-white/5 bg-white/2">
                        <span className="text-xs font-bold text-white mb-1.5">{skill.name}</span>
                        <span className={`self-start text-[9px] font-bold px-2 py-0.5 rounded-full border ${skill.color}`}>
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Required qualifications */}
                <div className="glass-panel border border-brand-border rounded-2xl p-6 space-y-4">
                  <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider">
                    Required Qualifications
                  </h3>
                  <ul className="space-y-3 text-xs text-gray-400 leading-relaxed">
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                      <span>Bachelor’s degree in Healthcare Admin, Business, Operations, IS, or related field.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                      <span>Experience in healthcare operations, healthcare IT, or SaaS operations.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                      <span>Strong understanding of healthcare workflows and clinical processes.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                      <span>Excellent organizational, problem-solving, and coordination skills.</span>
                    </li>
                  </ul>
                </div>

                {/* Preferred qualifications */}
                <div className="glass-panel border border-brand-border rounded-2xl p-6 space-y-4">
                  <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider">
                    Preferred Qualifications
                  </h3>
                  <ul className="space-y-3 text-xs text-gray-400 leading-relaxed">
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-indigo flex-shrink-0 mt-0.5" />
                      <span>Experience in US healthcare organizations or healthcare SaaS startups.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-indigo flex-shrink-0 mt-0.5" />
                      <span>Familiarity with HIPAA compliance and healthcare regulations.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-indigo flex-shrink-0 mt-0.5" />
                      <span>Experience optimizing clinical or hospital operations workflows.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-indigo flex-shrink-0 mt-0.5" />
                      <span>Exposure to EHR/EMR systems and healthcare automation.</span>
                    </li>
                  </ul>
                </div>

                {/* Benefits */}
                <div className="glass-panel border border-brand-border rounded-2xl p-6 bg-gradient-to-br from-brand-cyan/5 to-brand-indigo/5 space-y-4">
                  <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider">
                    Why Join Med Clinic X?
                  </h3>
                  <ul className="space-y-3 text-xs text-gray-400 leading-relaxed">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full flex-shrink-0 mt-1.5" />
                      <span>Directly influence operational efficiency across US clinical systems.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full flex-shrink-0 mt-1.5" />
                      <span>Manage workflows for cutting-edge healthcare SaaS and AI products.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full flex-shrink-0 mt-1.5" />
                      <span>Accelerate your career in digital health business and technology operations.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="apply"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex justify-between text-xs text-gray-400 mb-2 font-mono">
                  <span>STEP {formStep} OF 4</span>
                  <span>
                    {formStep === 1 && "Personal Information"}
                    {formStep === 2 && "Operations Experience"}
                    {formStep === 3 && "Workflow Triage Simulator"}
                    {formStep === 4 && "Review & Submit"}
                  </span>
                </div>
                <div className="w-full bg-slate-900 border border-brand-border h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-brand-cyan to-brand-indigo h-full transition-all duration-300"
                    style={{ width: `${(formStep / 4) * 100}%` }}
                  />
                </div>
              </div>

              {/* Form Content Panel */}
              <div className="glass-panel border border-brand-border rounded-3xl p-6 md:p-8 space-y-6">
                
                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10 space-y-6"
                  >
                    <div className="w-16 h-16 bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald rounded-full flex items-center justify-center mx-auto shadow-lg shadow-brand-emerald/10">
                      <Check className="w-8 h-8" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-display font-extrabold text-2xl text-white">Application Triaged!</h3>
                      <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto">
                        Thank you for applying, <strong className="text-white">{formData.name}</strong>. Your profile has passed our clinical operations and workflow triage standards test. The recruitment team will contact you shortly.
                      </p>
                    </div>

                    <div className="bg-slate-900/60 p-4 rounded-xl border border-brand-border max-w-sm mx-auto text-left space-y-2 font-mono text-xs">
                      <p className="text-brand-cyan font-bold uppercase text-[10px] tracking-wider mb-2">Automated Match Summary</p>
                      <p className="text-gray-400">Position: <span className="text-white">Healthcare Operations Manager</span></p>
                      <p className="text-gray-400">Workflow Remediation: <span className="text-brand-emerald">3/3 Correct Matches</span></p>
                      <p className="text-gray-400">Operations fit: <span className="text-brand-cyan">Highly Compatible</span></p>
                      <p className="text-gray-400">Status: <span className="text-brand-emerald animate-pulse">Under Review by VP of Operations</span></p>
                    </div>

                    <button
                      onClick={() => {
                        setFormStep(1);
                        setSubmitSuccess(false);
                        setSandboxSuccess(false);
                        setSandboxAttempts(0);
                        setScenarios({ scenario1: "", scenario2: "", scenario3: "" });
                        setFormData({
                          name: "",
                          email: "",
                          portfolioUrl: "",
                          opsEnvironment: "saas",
                          healthcareYears: "3-5",
                          scalingComfort: "yes",
                          resumeFile: null,
                          resumeName: "",
                        });
                      }}
                      className="inline-flex items-center space-x-2 text-xs font-bold text-brand-cyan hover:underline cursor-pointer"
                    >
                      <span>Submit another mock application</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </motion.div>
                ) : (
                  <>
                    {/* STEP 1: Personal Info */}
                    {formStep === 1 && (
                      <div className="space-y-5">
                        <h3 className="font-display font-extrabold text-lg text-white">Let&apos;s start with your basics</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <label className="block text-xs font-semibold text-gray-300 mb-1.5">Full Name <span className="text-red-400">*</span></label>
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                              placeholder="Sophia Miller"
                              className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-colors"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-gray-300 mb-1.5">Email Address <span className="text-red-400">*</span></label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                              placeholder="sophia@example.com"
                              className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-colors"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-gray-300 mb-1.5">LinkedIn or Portfolio URL</label>
                            <input
                              type="url"
                              value={formData.portfolioUrl}
                              onChange={(e) => setFormData(prev => ({ ...prev, portfolioUrl: e.target.value }))}
                              placeholder="https://linkedin.com/in/sophia-miller"
                              className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-colors"
                            />
                          </div>

                          {/* Resume Upload Box */}
                          <div>
                            <label className="block text-xs font-semibold text-gray-300 mb-1.5">Upload Resume / CV <span className="text-red-400">*</span></label>
                            <div
                              onDragOver={handleDragOver}
                              onDrop={handleDrop}
                              className="border-2 border-dashed border-brand-border hover:border-brand-cyan/50 rounded-2xl p-6 text-center bg-white/2 cursor-pointer transition-colors relative"
                            >
                              <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={handleFileUpload}
                                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                              />
                              <Upload className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                              {formData.resumeName ? (
                                <p className="text-sm font-semibold text-brand-cyan">{formData.resumeName}</p>
                              ) : (
                                <>
                                  <p className="text-xs text-gray-300 font-semibold mb-1">Drag and drop your file here, or click to browse</p>
                                  <p className="text-[10px] text-gray-500">Supports PDF, DOCX, DOC up to 10MB</p>
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="pt-4 flex justify-end">
                          <button
                            type="button"
                            disabled={!formData.name || !formData.email || !formData.resumeName}
                            onClick={() => setFormStep(2)}
                            className="inline-flex items-center space-x-2 bg-brand-cyan text-brand-bg font-bold px-5 py-3 rounded-xl hover:opacity-90 transition-opacity text-xs disabled:opacity-30 cursor-pointer"
                          >
                            <span>Next Step</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* STEP 2: Operations Experience */}
                    {formStep === 2 && (
                      <div className="space-y-5">
                        <h3 className="font-display font-extrabold text-lg text-white">Operations & Systems Background</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <label className="block text-xs font-semibold text-gray-300 mb-1.5">Primary Operations Environment</label>
                            <select
                              value={formData.opsEnvironment}
                              onChange={(e) => setFormData(prev => ({ ...prev, opsEnvironment: e.target.value }))}
                              className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"
                            >
                              <option value="saas">Healthcare SaaS / Digital Health Startup</option>
                              <option value="hospital">Hospital/Clinic Administrative Operations</option>
                              <option value="consulting">IT Operations & Workflow Consulting</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-gray-300 mb-1.5">Years of experience in healthcare operations</label>
                            <select
                              value={formData.healthcareYears}
                              onChange={(e) => setFormData(prev => ({ ...prev, healthcareYears: e.target.value }))}
                              className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"
                            >
                              <option value="0-2">0 to 2 Years</option>
                              <option value="3-5">3 to 5 Years</option>
                              <option value="5-8">5 to 8 Years</option>
                              <option value="8+">8+ Years</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-gray-300 mb-1.5">Are you comfortable overseeing scaling of operations across multi-state hospital systems?</label>
                            <div className="flex gap-4">
                              {["yes", "no"].map((val) => (
                                <button
                                  key={val}
                                  type="button"
                                  onClick={() => setFormData(prev => ({ ...prev, scalingComfort: val }))}
                                  className={`flex-1 border text-sm font-semibold py-2.5 rounded-xl capitalize transition-all cursor-pointer ${
                                    formData.scalingComfort === val
                                      ? "bg-brand-indigo/15 border-brand-indigo text-white font-bold"
                                      : "border-brand-border text-gray-400 hover:border-gray-500"
                                  }`}
                                >
                                  {val}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="pt-4 flex justify-between">
                          <button
                            type="button"
                            onClick={() => setFormStep(1)}
                            className="inline-flex items-center space-x-2 border border-brand-border text-gray-300 hover:text-white font-semibold px-5 py-3 rounded-xl transition-colors text-xs cursor-pointer"
                          >
                            <span>Back</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setFormStep(3)}
                            className="inline-flex items-center space-x-2 bg-brand-cyan text-brand-bg font-bold px-5 py-3 rounded-xl hover:opacity-90 transition-opacity text-xs cursor-pointer"
                          >
                            <span>Proceed to Triage Challenge</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* STEP 3: Workflow Triage Sandbox */}
                    {formStep === 3 && (
                      <div className="space-y-5">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-display font-extrabold text-lg text-white">Workflow Triage Simulator</h3>
                            <p className="text-xs text-gray-400 mt-1">
                              Match each clinic operational bottleneck to its optimal digital workflow remedy.
                            </p>
                          </div>
                          <span className="text-[9px] font-bold px-2 py-0.5 bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/20 rounded font-mono">
                            Ops Challenge
                          </span>
                        </div>

                        {/* MAPPING INTERFACE */}
                        <div className="space-y-4 font-sans text-xs">
                          {/* Scenario 1 */}
                          <div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-3">
                            <div className="font-mono text-white text-xs font-semibold flex items-center space-x-2">
                              <span className="w-2 h-2 bg-brand-cyan rounded-full shrink-0" />
                              <span>Scenario 1: Results Call Congestion</span>
                            </div>
                            <p className="text-gray-400 italic text-[11px] leading-relaxed">
                              &quot;A clinic&apos;s phone lines are congested due to massive daily incoming call volumes from patients requesting laboratory test results.&quot;
                            </p>
                            <div>
                              <select
                                value={scenarios.scenario1}
                                onChange={(e) => setScenarios(prev => ({ ...prev, scenario1: e.target.value }))}
                                className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-cyan"
                              >
                                <option value="">-- Choose Remedy --</option>
                                <option value="voicemail">Implement legacy automated voicemail system</option>
                                <option value="portal">Deploy a secure Patient Portal with self-service results access (Correct!)</option>
                                <option value="hiring">Hire additional front-desk agents to answer calls</option>
                              </select>
                            </div>
                          </div>

                          {/* Scenario 2 */}
                          <div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-3">
                            <div className="font-mono text-white text-xs font-semibold flex items-center space-x-2">
                              <span className="w-2 h-2 bg-brand-indigo rounded-full shrink-0" />
                              <span>Scenario 2: Imaging Slots Underutilization</span>
                            </div>
                            <p className="text-gray-400 italic text-[11px] leading-relaxed">
                              &quot;An outpatient clinic experiences a 25% no-show rate for specialized imaging procedures, causing expensive scheduling gaps.&quot;
                            </p>
                            <div>
                              <select
                                value={scenarios.scenario2}
                                onChange={(e) => setScenarios(prev => ({ ...prev, scenario2: e.target.value }))}
                                className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-cyan"
                              >
                                <option value="">-- Choose Remedy --</option>
                                <option value="reminders">Configure automated SMS/email reminders with pre-visit intake forms (Correct!)</option>
                                <option value="deposits">Require non-refundable booking deposits from patients</option>
                                <option value="scanners">Purchase more imaging equipment to offset scheduling gaps</option>
                              </select>
                            </div>
                          </div>

                          {/* Scenario 3 */}
                          <div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-3">
                            <div className="font-mono text-white text-xs font-semibold flex items-center space-x-2">
                              <span className="w-2 h-2 bg-brand-emerald rounded-full shrink-0" />
                              <span>Scenario 3: Manual Intake Transcriptions</span>
                            </div>
                            <p className="text-gray-400 italic text-[11px] leading-relaxed">
                              &quot;Clinical staff are spending up to 15 minutes per patient copying clipboard paperwork data manually into the EHR system.&quot;
                            </p>
                            <div>
                              <select
                                value={scenarios.scenario3}
                                onChange={(e) => setScenarios(prev => ({ ...prev, scenario3: e.target.value }))}
                                className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-cyan"
                              >
                                <option value="">-- Choose Remedy --</option>
                                <option value="scribes">Hire dedicated medical scribes to transcribe paperwork</option>
                                <option value="word_docs">Instruct patients to email completed Word files</option>
                                <option value="intake">Implement digital intake forms integrated directly with EHR queue triggers (Correct!)</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        {/* Error message */}
                        {sandboxError && (
                          <div className="flex items-start space-x-2.5 p-3.5 bg-red-950/40 border border-red-500/20 text-red-300 rounded-xl text-xs">
                            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                            <span>{sandboxError}</span>
                          </div>
                        )}

                        {/* Correct notification */}
                        {sandboxSuccess && (
                          <div className="flex items-start space-x-2.5 p-3.5 bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald rounded-xl text-xs">
                            <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                            <span>Operational validation complete! All remedies align perfectly. You can now proceed.</span>
                          </div>
                        )}

                        <div className="pt-4 flex justify-between">
                          <button
                            type="button"
                            onClick={() => setFormStep(2)}
                            className="inline-flex items-center space-x-2 border border-brand-border text-gray-300 hover:text-white font-semibold px-5 py-3 rounded-xl transition-colors text-xs cursor-pointer"
                          >
                            <span>Back</span>
                          </button>
                          
                          {!sandboxSuccess ? (
                            <button
                              type="button"
                              onClick={validateScenarios}
                              className="inline-flex items-center space-x-2 bg-brand-cyan text-brand-bg font-bold px-5 py-3 rounded-xl hover:opacity-90 transition-opacity text-xs cursor-pointer"
                            >
                              <span>Verify Recommendations ({sandboxAttempts} attempts)</span>
                            </button>
                          ) : (
                            <button
                              type="button"
                              onClick={() => setFormStep(4)}
                              className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold px-5 py-3 rounded-xl hover:opacity-95 transition-opacity text-xs cursor-pointer"
                            >
                              <span>Proceed to Review</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </div>
                    )}

                    {/* STEP 4: Review and Submit */}
                    {formStep === 4 && (
                      <div className="space-y-5">
                        <h3 className="font-display font-extrabold text-lg text-white">Review & Submit Application</h3>
                        
                        <div className="space-y-4 text-xs font-mono">
                          <div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-2">
                            <p className="text-gray-500 uppercase text-[10px] tracking-wider mb-2 font-bold">Personal Profile</p>
                            <p className="text-gray-300"><span className="text-gray-500">Name:</span> {formData.name}</p>
                            <p className="text-gray-300"><span className="text-gray-500">Email:</span> {formData.email}</p>
                            {formData.portfolioUrl && (
                              <p className="text-gray-300"><span className="text-gray-500">LinkedIn/Portfolio:</span> {formData.portfolioUrl}</p>
                            )}
                            <p className="text-gray-300"><span className="text-gray-500">Resume:</span> {formData.resumeName}</p>
                          </div>

                          <div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-2">
                            <p className="text-gray-500 uppercase text-[10px] tracking-wider mb-2 font-bold">Operations Experience</p>
                            <p className="text-gray-300">
                              <span className="text-gray-500">Environment:</span>{" "}
                              <span className="capitalize">{formData.opsEnvironment}</span>
                            </p>
                            <p className="text-gray-300"><span className="text-gray-500">Years in Healthcare:</span> {formData.healthcareYears} years</p>
                            <p className="text-gray-300"><span className="text-gray-500">Comfortable with scaling:</span> {formData.scalingComfort}</p>
                          </div>

                          <div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-1.5">
                            <p className="text-gray-500 uppercase text-[10px] tracking-wider mb-2 font-bold">Remediation Simulator Validation</p>
                            <p className="text-brand-emerald flex items-center space-x-1.5">
                              <CheckCircle className="w-3.5 h-3.5" />
                              <span>All 3 clinic workflow bottlenecks resolved successfully</span>
                            </p>
                          </div>
                        </div>

                        <div className="pt-4 flex justify-between">
                          <button
                            type="button"
                            onClick={() => setFormStep(3)}
                            className="inline-flex items-center space-x-2 border border-brand-border text-gray-300 hover:text-white font-semibold px-5 py-3 rounded-xl transition-colors text-xs cursor-pointer"
                          >
                            <span>Back</span>
                          </button>
                          <button
                            type="button"
                            disabled={isSubmitting}
                            onClick={submitApplication}
                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold px-6 py-3 rounded-xl hover:opacity-95 transition-opacity text-xs disabled:opacity-50 cursor-pointer"
                          >
                            {isSubmitting ? (
                              <>
                                <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                <span>Triaging profile...</span>
                              </>
                            ) : (
                              <>
                                <Send className="w-3.5 h-3.5" />
                                <span>Submit Operations Application</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
