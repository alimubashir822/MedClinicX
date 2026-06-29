"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Sparkles, Brain, HeartPulse, FileText,
  Shield, Users, Activity, Upload, CheckCircle,
  Lock, ChevronDown, Database, Globe,
  HardDrive, FileSpreadsheet, Check, Send, Code, AlertTriangle, AlertCircle
} from "lucide-react";

/* --- Interface for Technical Skills & Tech Areas --- */
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
    sqlExperience: "intermediate",
    healthcareYears: "1-2",
    hipaaFamiliar: "yes",
    sqlQuery: "",
    resumeFile: null as File | null,
    resumeName: "",
  });

  // SQL Test State
      
  // Submission States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const technicalSkills: TechSkill[] = [
    { name: "SQL (PostgreSQL / BigQuery)", level: "Required", color: "text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20" },
    { name: "Python / R (Pandas, NumPy)", level: "Required", color: "text-brand-indigo bg-brand-indigo/10 border-brand-indigo/20" },
    { name: "Data Visualization (Power BI, Tableau)", level: "Required", color: "text-brand-emerald bg-brand-emerald/10 border-brand-emerald/20" },
    { name: "APIs & Healthcare Integrations", level: "Highly Valued", color: "text-purple-400 bg-purple-400/10 border-purple-400/20" },
    { name: "Cloud Data Platforms (AWS, GCP)", level: "Highly Valued", color: "text-amber-400 bg-amber-400/10 border-amber-400/20" },
    { name: "EHR/EMR Data Schemas", level: "Preferred", color: "text-rose-400 bg-rose-400/10 border-rose-400/20" },
  ];

  const techAreas: TechArea[] = [
    { title: "Healthcare SaaS platforms", desc: "Build backend analytical logic driving SaaS tools used by clinics across the US.", icon: <Globe className="w-5 h-5" /> },
    { title: "Patient portal development", desc: "Analyze portal engagement, conversion rates, and patient-doctor routing performance.", icon: <Users className="w-5 h-5" /> },
    { title: "Healthcare automation systems", desc: "Map time-to-consult and automation bottlenecks using event-driven pipeline data.", icon: <Activity className="w-5 h-5" /> },
    { title: "EHR/EMR integrations", desc: "Process HL7, FHIR, and custom JSON payloads from clinics into unified analytics models.", icon: <Database className="w-5 h-5" /> },
    { title: "AI healthcare solutions", desc: "Prepare high-fidelity clinical text records for LLMs, GPT models, and predictive triage engines.", icon: <Brain className="w-5 h-5" /> },
    { title: "Telemedicine platforms", desc: "Optimize consult session matching, call metrics, and geographic network loads.", icon: <HeartPulse className="w-5 h-5" /> },
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

  // Tolerant SQL Validator
  
  const submitApplication = async () => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          portfolioUrl: formData.portfolioUrl,
          resumeName: formData.resumeName,
          position: "Healthcare Data Analyst",
          extraFields: {
            ...formData
          }
        }),
      });
      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        setSubmitError(errData.error || "Submission failed. Please try again.");
      } else {
        setSubmitSuccess(true);
      }
    } catch (err) {
      console.error("Submit error:", err);
      setSubmitError("Failed to submit application. Please try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Dynamic ambient backgrounds */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[130px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-indigo/5 rounded-full blur-[130px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        
        {/* -- BREADCRUMB -- */}
        <div className="mb-8 flex items-center space-x-2 text-xs">
          <Link href="/" className="text-gray-500 hover:text-brand-cyan transition-colors">Home</Link>
          <span className="text-gray-600">/</span>
          <span className="text-gray-500">Careers</span>
          <span className="text-gray-600">/</span>
          <span className="text-white">Healthcare Data Analyst</span>
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
                  Healthcare Data Analyst
                </h1>

                <p className="text-gray-400 text-sm sm:text-base max-w-2xl">
                  Transform US healthcare data into insights, support AI healthcare integrations, and build analytics solutions that improve patient outcomes.
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

        {/* -- NAV TABS FOR SPEC/APPLY -- */}
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
              {/* Left Column: Role Details (8 cols) */}
              <div className="lg:col-span-8 space-y-10">
                {/* About Med Clinic X */}
                <section className="space-y-4">
                  <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                    About Med Clinic X
                  </h2>
                  <div className="text-gray-400 space-y-4 text-sm sm:text-base leading-relaxed">
                    <p>
                      Med Clinic X is a healthcare technology company helping healthcare organizations across the United States transform the way they deliver care through modern digital solutions.
                    </p>
                    <p>
                      We design and develop healthcare SaaS platforms, patient portals, AI-powered healthcare solutions, telemedicine systems, automation workflows, and custom digital health products for clinics, hospitals, medical practices, and healthcare organizations.
                    </p>
                    <p>
                      Our mission is to improve healthcare experiences by combining technology, data, automation, and intelligent software solutions that help healthcare teams operate more efficiently and deliver better patient outcomes.
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
                      Med Clinic X is looking for a <strong className="text-white font-semibold">Healthcare Data Analyst</strong> to help transform healthcare data into meaningful insights that support better business decisions, operational improvements, and technology-driven healthcare solutions.
                    </p>
                    <p>
                      In this role, you will work with healthcare data sources, analytics platforms, software teams, and healthcare workflows to analyze trends, improve processes, and support the development of innovative healthcare technology products.
                    </p>
                    <p>
                      The ideal candidate understands healthcare data, analytics methodologies, reporting systems, and modern healthcare technology environments. You will collaborate with product managers, engineers, healthcare professionals, and business teams to build data-driven solutions for healthcare organizations in the United States.
                    </p>
                  </div>
                </section>

                {/* Responsibilities */}
                <section className="space-y-6">
                  <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                    Key Responsibilities
                  </h2>

                  <div className="space-y-6">
                    {/* Block 1 */}
                    <div className="glass-panel border border-brand-border rounded-2xl p-6">
                      <h3 className="font-display font-bold text-white text-base mb-3 flex items-center space-x-2">
                        <Activity className="w-5 h-5 text-brand-cyan" />
                        <span>Healthcare Data Analysis</span>
                      </h3>
                      <ul className="list-disc pl-5 text-gray-400 text-sm space-y-2">
                        <li>Analyze healthcare datasets to identify trends, patterns, and opportunities for improvement.</li>
                        <li>Create reports, dashboards, and analytics solutions to support healthcare decision-making.</li>
                        <li>Translate complex healthcare data into actionable business and clinical insights.</li>
                        <li>Perform data validation, cleaning, transformation, and quality checks.</li>
                        <li>Monitor healthcare performance metrics and operational KPIs.</li>
                      </ul>
                    </div>

                    {/* Block 2 */}
                    <div className="glass-panel border border-brand-border rounded-2xl p-6">
                      <h3 className="font-display font-bold text-white text-base mb-3 flex items-center space-x-2">
                        <Globe className="w-5 h-5 text-brand-indigo" />
                        <span>Healthcare Technology & SaaS Analytics</span>
                      </h3>
                      <ul className="list-disc pl-5 text-gray-400 text-sm space-y-2">
                        <li>Support analytics requirements for healthcare SaaS platforms and digital health products.</li>
                        <li>Analyze user behavior, platform performance, and healthcare workflow data.</li>
                        <li>Work with product teams to improve patient portals, healthcare applications, and automation systems.</li>
                        <li>Develop reporting solutions for healthcare organizations using structured and unstructured data.</li>
                      </ul>
                    </div>

                    {/* Block 3 */}
                    <div className="glass-panel border border-brand-border rounded-2xl p-6">
                      <h3 className="font-display font-bold text-white text-base mb-3 flex items-center space-x-2">
                        <Code className="w-5 h-5 text-brand-emerald" />
                        <span>Data & Software Collaboration</span>
                      </h3>
                      <ul className="list-disc pl-5 text-gray-400 text-sm space-y-2">
                        <li>Collaborate with software engineers, AI specialists, and product teams.</li>
                        <li>Define data requirements for healthcare applications and integrations.</li>
                        <li>Support API-based healthcare data workflows and system integrations.</li>
                        <li>Assist in designing scalable analytics solutions for healthcare technology products.</li>
                      </ul>
                    </div>

                    {/* Block 4 */}
                    <div className="glass-panel border border-brand-border rounded-2xl p-6">
                      <h3 className="font-display font-bold text-white text-base mb-3 flex items-center space-x-2">
                        <HardDrive className="w-5 h-5 text-amber-400" />
                        <span>Healthcare Workflow Understanding</span>
                      </h3>
                      <ul className="list-disc pl-5 text-gray-400 text-sm space-y-2">
                        <li>Analyze healthcare operations including patient engagement, clinical workflows, and administrative processes.</li>
                        <li>Work with healthcare technology systems including patient management platforms and healthcare applications.</li>
                        <li>Identify opportunities where analytics and automation can improve healthcare efficiency.</li>
                      </ul>
                    </div>

                    {/* Block 5 */}
                    <div className="glass-panel border border-brand-border rounded-2xl p-6">
                      <h3 className="font-display font-bold text-white text-base mb-3 flex items-center space-x-2">
                        <Brain className="w-5 h-5 text-rose-400" />
                        <span>AI & Advanced Analytics</span>
                      </h3>
                      <ul className="list-disc pl-5 text-gray-400 text-sm space-y-2">
                        <li>Support AI healthcare solutions through data analysis and preparation.</li>
                        <li>Assist with machine learning and predictive analytics initiatives.</li>
                        <li>Prepare healthcare datasets for AI-driven applications.</li>
                        <li>Explore opportunities to improve healthcare workflows using data intelligence.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Tech areas you will work with */}
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

              {/* Right Column: Qualifications & Sidebars (4 cols) */}
              <div className="lg:col-span-4 space-y-8">
                {/* Technical Skills Checklist */}
                <div className="glass-panel border border-brand-border rounded-2xl p-6 space-y-4">
                  <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider">
                    Technical Skills Required
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

                {/* Required Qualifications */}
                <div className="glass-panel border border-brand-border rounded-2xl p-6 space-y-4">
                  <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider">
                    Required Qualifications
                  </h3>
                  <ul className="space-y-3 text-xs text-gray-400 leading-relaxed">
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                      <span>Bachelor’s degree in Data Analytics, CS, Healthcare Informatics, Stats, or related field.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                      <span>Experience working with healthcare data or analytics projects.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                      <span>Strong SQL skills and experience working with relational databases.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                      <span>Experience with data visualization and reporting tools.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                      <span>Understanding of healthcare data structures and analytics workflows.</span>
                    </li>
                  </ul>
                </div>

                {/* Preferred Qualifications */}
                <div className="glass-panel border border-brand-border rounded-2xl p-6 space-y-4">
                  <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider">
                    Preferred Qualifications
                  </h3>
                  <ul className="space-y-3 text-xs text-gray-400 leading-relaxed">
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-indigo flex-shrink-0 mt-0.5" />
                      <span>Previous experience working with US healthcare organizations.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-indigo flex-shrink-0 mt-0.5" />
                      <span>Knowledge of HIPAA compliance & healthcare interoperability APIs.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-indigo flex-shrink-0 mt-0.5" />
                      <span>Experience working with healthcare EMR/EHR systems & SaaS products.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-indigo flex-shrink-0 mt-0.5" />
                      <span>Experience supporting AI healthcare, machine learning, or automation projects.</span>
                    </li>
                  </ul>
                </div>

                {/* Why Join */}
                <div className="glass-panel border border-brand-border rounded-2xl p-6 bg-gradient-to-br from-brand-cyan/5 to-brand-indigo/5 space-y-4">
                  <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider">
                    Why Join Med Clinic X?
                  </h3>
                  <ul className="space-y-3 text-xs text-gray-400 leading-relaxed">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full flex-shrink-0 mt-1.5" />
                      <span>Build technology products that directly impact US healthcare.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full flex-shrink-0 mt-1.5" />
                      <span>Work on cutting-edge AI, automation, and clinical analytics.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full flex-shrink-0 mt-1.5" />
                      <span>Collaborate with elite developers and medical professionals.</span>
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
              {/* Application Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-xs text-gray-400 mb-2 font-mono">
                  <span>Step {formStep} of 3</span>
                  <span>
                    {formStep === 1 && "Personal Information"}
                    {formStep === 2 && "Experience Questionnaire"}
                    
                    {formStep === 3 && "Review & Submit"}
                  </span>
                </div>
                <div className="w-full bg-slate-900 border border-brand-border h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-brand-cyan to-brand-indigo h-full transition-all duration-300"
                    style={{ width: `${(formStep / 3) * 100}%` }}
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
                    <div className="w-16 h-16 bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-display font-extrabold text-2xl text-white">Application Submitted!</h3>
                      <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
                        Thanks for applying, <strong className="text-white">{formData.name}</strong>. Our team will review your application and be in touch soon.
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        setFormStep(1);
                        setSubmitSuccess(false);
                        
                        
                        setFormData({
                          name: "",
                          email: "",
                          portfolioUrl: "",
                          sqlExperience: "intermediate",
                          healthcareYears: "1-2",
                          hipaaFamiliar: "yes",
                          sqlQuery: "",
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
                              placeholder="Sarah Stone"
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
                              placeholder="sarah@example.com"
                              className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-colors"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-gray-300 mb-1.5">Portfolio or LinkedIn URL</label>
                            <input
                              type="url"
                              value={formData.portfolioUrl}
                              onChange={(e) => setFormData(prev => ({ ...prev, portfolioUrl: e.target.value }))}
                              placeholder="https://linkedin.com/in/sarah-stone"
                              className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-colors"
                            />
                          </div>

                          {/* Resume Drag & Drop Box */}
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

                    {/* STEP 2: Questionnaire */}
                    {formStep === 2 && (
                      <div className="space-y-5">
                        <h3 className="font-display font-extrabold text-lg text-white">Experience Questionnaire</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <label className="block text-xs font-semibold text-gray-300 mb-1.5">SQL & Query Optimization Level</label>
                            <select
                              value={formData.sqlExperience}
                              onChange={(e) => setFormData(prev => ({ ...prev, sqlExperience: e.target.value }))}
                              className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"
                            >
                              <option value="beginner">Beginner (Basic SELECT queries)</option>
                              <option value="intermediate">Intermediate (JOINs, Aggregations, CTEs)</option>
                              <option value="advanced">Advanced (Window functions, query plans, indexes)</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-gray-300 mb-1.5">Years of Experience in US Healthcare Data / EHR APIs</label>
                            <select
                              value={formData.healthcareYears}
                              onChange={(e) => setFormData(prev => ({ ...prev, healthcareYears: e.target.value }))}
                              className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"
                            >
                              <option value="0">Less than 1 Year</option>
                              <option value="1-2">1 to 2 Years</option>
                              <option value="3-5">3 to 5 Years</option>
                              <option value="5+">5+ Years</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-gray-300 mb-1.5">Are you familiar with HIPAA compliance and security constraints?</label>
                            <div className="flex gap-4">
                              {["yes", "no"].map((val) => (
                                <button
                                  key={val}
                                  type="button"
                                  onClick={() => setFormData(prev => ({ ...prev, hipaaFamiliar: val }))}
                                  className={`flex-1 border text-sm font-semibold py-2.5 rounded-xl capitalize transition-all cursor-pointer ${
                                    formData.hipaaFamiliar === val
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
                            <span>Review Application</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* STEP 3: Technical Analyst Screening */}
                    

                    {/* STEP 4: Review & Submit */}
                    {formStep === 3 && (
                      <div className="space-y-6">
                        <h3 className="font-display font-extrabold text-lg text-white">Review &amp; Submit Application</h3>
                        
                        <div className="space-y-4">
                          <div className="glass-panel border border-brand-border rounded-2xl p-5 space-y-3.5 text-xs">
                            <div className="flex justify-between border-b border-brand-border pb-2.5">
                              <span className="text-gray-400 font-semibold">Full Name</span>
                              <span className="text-white font-bold">{formData.name}</span>
                            </div>
                            <div className="flex justify-between border-b border-brand-border pb-2.5">
                              <span className="text-gray-400 font-semibold">Email</span>
                              <span className="text-white font-bold">{formData.email}</span>
                            </div>
                            <div className="flex justify-between border-b border-brand-border pb-2.5">
                              <span className="text-gray-400 font-semibold">Portfolio/LinkedIn</span>
                              <span className="text-white font-mono font-bold truncate max-w-[200px]">{formData.portfolioUrl || "Not Provided"}</span>
                            </div>
                            <div className="flex justify-between border-b border-brand-border pb-2.5">
                              <span className="text-gray-400 font-semibold">Resume File</span>
                              <span className="text-brand-cyan font-bold">{formData.resumeName}</span>
                            </div>
                            <div className="flex justify-between border-b border-brand-border pb-2.5">
                              <span className="text-gray-400 font-semibold">SQL Level</span>
                              <span className="text-white capitalize font-bold">{formData.sqlExperience}</span>
                            </div>
                            <div className="flex justify-between border-b border-brand-border pb-2.5">
                              <span className="text-gray-400 font-semibold">US Healthcare Experience</span>
                              <span className="text-white font-bold">{formData.healthcareYears} years</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400 font-semibold">Screener Query</span>
                              <span className="text-brand-emerald font-mono text-[10px] truncate max-w-[200px] font-bold">{formData.sqlQuery}</span>
                            </div>
                          </div>

                          <div className="flex items-start space-x-3 p-3 bg-brand-cyan/5 border border-brand-cyan/15 rounded-xl text-[11px] text-gray-300 leading-normal">
                            <Shield className="w-4 h-4 text-brand-cyan mt-0.5 flex-shrink-0" />
                            <p>
                              By submitting, you agree to have your profile and screener answers evaluated. We handle developer and healthcare applicant data in compliance with internal confidentiality protocols.
                            </p>
                          </div>
                        </div>

                        <div className="pt-4 flex justify-between">
                          <button
                            type="button"
                            onClick={() => setFormStep(2)}
                            className="inline-flex items-center space-x-2 border border-brand-border text-gray-300 hover:text-white font-semibold px-5 py-3 rounded-xl transition-colors text-xs cursor-pointer"
                          >
                            <span>Back</span>
                          </button>
                          
                          <button
                            type="button"
                            disabled={isSubmitting}
                            onClick={submitApplication}
                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold px-6 py-3.5 rounded-xl hover:opacity-95 shadow-lg shadow-brand-cyan/20 text-xs disabled:opacity-55 transition-all cursor-pointer"
                          >
                            {isSubmitting ? (
                              <div className="flex items-center space-x-1.5">
                                <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" />
                                <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:0.2s]" />
                                <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:0.4s]" />
                                <span>Submitting...</span>
                              </div>
                            ) : (
                              <>
                                <Send className="w-3.5 h-3.5" />
                                <span>Submit Job Application</span>
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
