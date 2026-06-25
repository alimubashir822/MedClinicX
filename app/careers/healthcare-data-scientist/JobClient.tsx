"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Sparkles, Brain, HeartPulse, FileText,
  Shield, Users, Activity, Upload, CheckCircle,
  Lock, Globe, Database, HardDrive,
  Check, Send, Code, AlertCircle, FileSpreadsheet, Layers,
  Terminal, LineChart, Cpu
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
    researchFocus: "tabular",
    healthcareYears: "3-5",
    mlOpsComfort: "yes",
    resumeFile: null as File | null,
    resumeName: "",
  });

  // Model Tuning Sandbox State
  const [scenarios, setScenarios] = useState({
    scenario1Algo: "",
    scenario1Metric: "",
    scenario2Algo: "",
    scenario2Metric: "",
    scenario3Algo: "",
    scenario3Metric: ""
  });
  const [sandboxAttempts, setSandboxAttempts] = useState(0);
  const [sandboxSuccess, setSandboxSuccess] = useState(false);
  const [sandboxError, setSandboxError] = useState("");

  // Submission States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const technicalSkills: TechSkill[] = [
    { name: "Machine Learning Frameworks", level: "Required", color: "text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20" },
    { name: "Python (Pandas, NumPy, Scikit)", level: "Required", color: "text-brand-indigo bg-brand-indigo/10 border-brand-indigo/20" },
    { name: "Statistical & Predictive Modeling", level: "Required", color: "text-brand-emerald bg-brand-emerald/10 border-brand-emerald/20" },
    { name: "Deep Learning (TensorFlow/PyTorch)", level: "Highly Valued", color: "text-purple-400 bg-purple-400/10 border-purple-400/20" },
    { name: "EHR/EMR Dataset architectures", level: "Highly Valued", color: "text-amber-400 bg-amber-400/10 border-amber-400/20" },
    { name: "HIPAA Compliance & MLOps", level: "Preferred", color: "text-rose-400 bg-rose-400/10 border-rose-400/20" },
  ];

  const techAreas: TechArea[] = [
    { title: "Healthcare AI platforms", desc: "Train and evaluate models for disease diagnosis, clinical risk mapping, and workflow assistant tools.", icon: <Brain className="w-5 h-5" /> },
    { title: "Predictive analytics systems", desc: "Build models to estimate readmission risks, hospital length of stay, and operational bottlenecks.", icon: <LineChart className="w-5 h-5" /> },
    { title: "Clinical decision systems", desc: "Support clinical decision-making by surfacing patient flags directly in doctor queues.", icon: <Cpu className="w-5 h-5" /> },
    { title: "Patient risk modeling", desc: "Engineer features from longitudinal patient charts to map cardiac, diabetic, and respiratory risk trajectories.", icon: <Activity className="w-5 h-5" /> },
    { title: "Clinical NLP engines", desc: "Leverage LLMs and clinical BERT to extract medical terms, intents, and symptoms from doctor notes.", icon: <Terminal className="w-5 h-5" /> },
    { title: "Healthcare SaaS intelligence", desc: "Deploy SaaS intelligence layers optimizing doctor schedules and automating intake briefs.", icon: <Globe className="w-5 h-5" /> },
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
    // scenario1 (Readmission) -> xgboost, recall (or sensitivity)
    // scenario2 (X-Ray) -> cnn, sensitivity
    // scenario3 (Symptom parsing) -> transformer, f1
    
    const correct1 = scenarios.scenario1Algo === "xgboost" && scenarios.scenario1Metric === "recall";
    const correct2 = scenarios.scenario2Algo === "cnn" && scenarios.scenario2Metric === "sensitivity";
    const correct3 = scenarios.scenario3Algo === "transformer" && scenarios.scenario3Metric === "f1";
    
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
        `ML validation failed. ${incorrectCount}/3 model architectures tuned suboptimally. Hint: Tabular readmissions thrive on XGBoost/Recall; medical images demand CNNs/Sensitivity to catch diseases; text symptom extraction is best resolved with Transformers/F1.`
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
          <span className="text-white">Healthcare Data Scientist</span>
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
                  Healthcare Data Scientist
                </h1>

                <p className="text-gray-400 text-sm sm:text-base max-w-2xl">
                  Build clinical AI systems, patient risk models, clinical NLP solutions, and deploy machine learning models supporting US hospital networks and SaaS intelligence.
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
                      Med Clinic X is a healthcare technology company focused on building advanced AI-driven digital health systems for healthcare organizations across the United States.
                    </p>
                    <p>
                      We design and develop healthcare SaaS platforms, patient portals, AI-powered clinical systems, telemedicine solutions, automation tools, and data-driven healthcare products for clinics, hospitals, and healthcare providers.
                    </p>
                    <p>
                      Our mission is to transform healthcare using data, machine learning, and intelligent systems that improve patient outcomes and operational efficiency.
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
                      We are seeking a <strong className="text-white font-semibold">Healthcare Data Scientist</strong> to design and build advanced analytics models, machine learning systems, and AI-driven healthcare solutions.
                    </p>
                    <p>
                      In this role, you will work with large-scale healthcare datasets from clinical systems, EHR platforms, and SaaS applications to build predictive models and intelligent systems that support healthcare decision-making.
                    </p>
                    <p>
                      You will collaborate with engineers, product teams, clinical stakeholders, and data analysts to develop AI solutions that power the next generation of digital healthcare products.
                    </p>
                  </div>
                </section>

                {/* Responsibilities */}
                <section className="space-y-6">
                  <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                    Key Responsibilities
                  </h2>

                  <div className="space-y-6">
                    {/* ML and AI */}
                    <div className="glass-panel border border-brand-border rounded-2xl p-6">
                      <h3 className="font-display font-bold text-white text-base mb-3 flex items-center space-x-2">
                        <Brain className="w-5 h-5 text-brand-cyan" />
                        <span>Healthcare AI & Machine Learning</span>
                      </h3>
                      <ul className="list-disc pl-5 text-gray-400 text-sm space-y-2">
                        <li>Build predictive models for healthcare outcomes and clinical insights.</li>
                        <li>Develop machine learning algorithms using structured and unstructured healthcare data.</li>
                        <li>Design AI systems for patient risk prediction and operational optimization.</li>
                        <li>Train and evaluate models using real-world healthcare datasets.</li>
                      </ul>
                    </div>

                    {/* Data Science */}
                    <div className="glass-panel border border-brand-border rounded-2xl p-6">
                      <h3 className="font-display font-bold text-white text-base mb-3 flex items-center space-x-2">
                        <Database className="w-5 h-5 text-brand-indigo" />
                        <span>Healthcare Data Science & Analytics</span>
                      </h3>
                      <ul className="list-disc pl-5 text-gray-400 text-sm space-y-2">
                        <li>Analyze complex healthcare datasets from multiple clinical sources.</li>
                        <li>Identify trends, patterns, and correlations in clinical and operational data.</li>
                        <li>Develop statistical models to support healthcare decision-making.</li>
                        <li>Perform feature engineering for healthcare AI systems.</li>
                      </ul>
                    </div>

                    {/* SaaS Intelligence */}
                    <div className="glass-panel border border-brand-border rounded-2xl p-6">
                      <h3 className="font-display font-bold text-white text-base mb-3 flex items-center space-x-2">
                        <Layers className="w-5 h-5 text-brand-emerald" />
                        <span>SaaS & Digital Health Intelligence</span>
                      </h3>
                      <ul className="list-disc pl-5 text-gray-400 text-sm space-y-2">
                        <li>Support AI features for healthcare SaaS platforms and patient portals.</li>
                        <li>Improve personalization and automation in healthcare applications.</li>
                        <li>Analyze user behavior and system performance in digital health platforms.</li>
                        <li>Build data-driven insights for healthcare product teams.</li>
                      </ul>
                    </div>

                    {/* Deployment */}
                    <div className="glass-panel border border-brand-border rounded-2xl p-6">
                      <h3 className="font-display font-bold text-white text-base mb-3 flex items-center space-x-2">
                        <Terminal className="w-5 h-5 text-rose-400" />
                        <span>Collaboration & Deployment</span>
                      </h3>
                      <ul className="list-disc pl-5 text-gray-400 text-sm space-y-2">
                        <li>Work with engineers to deploy machine learning models into production systems.</li>
                        <li>Collaborate with product managers to define AI-driven healthcare features.</li>
                        <li>Support integration of AI models with healthcare APIs and platforms.</li>
                        <li>Ensure scalability and reliability of healthcare AI systems.</li>
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
                      <span>Bachelor’s or Master’s in Data Science, CS, Stats, ML, or related field.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                      <span>Strong experience in statistical modeling and predictive machine learning.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                      <span>Proficiency in Python and standard ML libraries (Pandas, Scikit-learn).</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                      <span>Experience with SQL and relational/non-relational database query optimization.</span>
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
                      <span>Experience in US healthcare or healthcare SaaS platforms.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-indigo flex-shrink-0 mt-0.5" />
                      <span>Knowledge of HIPAA regulations, anonymization, and data privacy.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-indigo flex-shrink-0 mt-0.5" />
                      <span>Experience working with large EMR/EHR datasets or clinical notes.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-brand-indigo flex-shrink-0 mt-0.5" />
                      <span>Knowledge of HL7, FHIR, or healthcare data standards.</span>
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
                      <span>Build ML systems directly used to improve real-world US clinical delivery.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full flex-shrink-0 mt-1.5" />
                      <span>Analyze large-scale, high-complexity longitudinal patient datasets.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full flex-shrink-0 mt-1.5" />
                      <span>Collaborate with top-tier engineers and clinical decision makers.</span>
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
                    {formStep === 2 && "Research Focus"}
                    {formStep === 3 && "Model Tuning Sandbox"}
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
                        Thank you for applying, <strong className="text-white">{formData.name}</strong>. Your profile has passed our clinical machine learning and dataset triage sandbox check. The AI recruitment team will contact you.
                      </p>
                    </div>

                    <div className="bg-slate-900/60 p-4 rounded-xl border border-brand-border max-w-sm mx-auto text-left space-y-2 font-mono text-xs">
                      <p className="text-brand-cyan font-bold uppercase text-[10px] tracking-wider mb-2">Automated Match Summary</p>
                      <p className="text-gray-400">Position: <span className="text-white">Healthcare Data Scientist</span></p>
                      <p className="text-gray-400">ML Model Optimization: <span className="text-brand-emerald">3/3 Correct Architectures</span></p>
                      <p className="text-gray-400">AI Stack fit: <span className="text-brand-cyan">Highly Compatible</span></p>
                      <p className="text-gray-400">Status: <span className="text-brand-emerald animate-pulse">Under Review by VP of Data & AI</span></p>
                    </div>

                    <button
                      onClick={() => {
                        setFormStep(1);
                        setSubmitSuccess(false);
                        setSandboxSuccess(false);
                        setSandboxAttempts(0);
                        setScenarios({
                          scenario1Algo: "",
                          scenario1Metric: "",
                          scenario2Algo: "",
                          scenario2Metric: "",
                          scenario3Algo: "",
                          scenario3Metric: ""
                        });
                        setFormData({
                          name: "",
                          email: "",
                          portfolioUrl: "",
                          researchFocus: "tabular",
                          healthcareYears: "3-5",
                          mlOpsComfort: "yes",
                          resumeFile: null,
                          resumeName: "",
                        });
                      }}
                      className="inline-flex items-center space-x-2 text-xs font-bold text-brand-cyan hover:underline cursor-pointer"
                    >
                      <span>Submit another mock application</span>
                      <ArrowRight className="w-3.5 h-3.5" />
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
                              placeholder="Dr. Austin Carter"
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
                              placeholder="austin@example.com"
                              className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-colors"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-gray-300 mb-1.5">LinkedIn or GitHub URL</label>
                            <input
                              type="url"
                              value={formData.portfolioUrl}
                              onChange={(e) => setFormData(prev => ({ ...prev, portfolioUrl: e.target.value }))}
                              placeholder="https://github.com/austin-carter"
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

                    {/* STEP 2: Research Focus */}
                    {formStep === 2 && (
                      <div className="space-y-5">
                        <h3 className="font-display font-extrabold text-lg text-white">Machine Learning & Data Domain</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <label className="block text-xs font-semibold text-gray-300 mb-1.5">Primary ML Domain Focus</label>
                            <select
                              value={formData.researchFocus}
                              onChange={(e) => setFormData(prev => ({ ...prev, researchFocus: e.target.value }))}
                              className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"
                            >
                              <option value="tabular">Predictive Modeling / Clinical Tabular Data</option>
                              <option value="nlp">Natural Language Processing / Clinical Text Parsing</option>
                              <option value="cv">Computer Vision / Medical Imaging & Scans</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-gray-300 mb-1.5">Years of experience in machine learning systems</label>
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
                            <label className="block text-xs font-semibold text-gray-300 mb-1.5">Are you comfortable writing Dockerized endpoints and deploying PyTorch models using MLOps templates?</label>
                            <div className="flex gap-4">
                              {["yes", "no"].map((val) => (
                                <button
                                  key={val}
                                  type="button"
                                  onClick={() => setFormData(prev => ({ ...prev, mlOpsComfort: val }))}
                                  className={`flex-1 border text-sm font-semibold py-2.5 rounded-xl capitalize transition-all cursor-pointer ${
                                    formData.mlOpsComfort === val
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
                            <span>Proceed to Model Sandbox</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* STEP 3: Model Tuning Sandbox */}
                    {formStep === 3 && (
                      <div className="space-y-5">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-display font-extrabold text-lg text-white">Healthcare Model Tuning Sandbox</h3>
                            <p className="text-xs text-gray-400 mt-1">
                              Tune the algorithm architecture and selection metrics for our clinical tasks.
                            </p>
                          </div>
                          <span className="text-[9px] font-bold px-2 py-0.5 bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/20 rounded font-mono">
                            ML Sandbox
                          </span>
                        </div>

                        {/* MAPPING INTERFACE */}
                        <div className="space-y-4 font-sans text-xs">
                          {/* Scenario 1 */}
                          <div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-3">
                            <div className="font-mono text-white text-xs font-semibold flex items-center space-x-2">
                              <span className="w-2 h-2 bg-brand-cyan rounded-full shrink-0" />
                              <span>Task 1: 30-Day Hospital Readmission Risk</span>
                            </div>
                            <p className="text-gray-400 italic text-[11px] leading-relaxed">
                              &quot;Predict whether a patient will be readmitted within 30 days based on demographic history, ICD-10 visit history, and lab scores.&quot;
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              <div>
                                <label className="block text-[10px] text-gray-400 mb-1 font-semibold">Algorithm Selection</label>
                                <select
                                  value={scenarios.scenario1Algo}
                                  onChange={(e) => setScenarios(prev => ({ ...prev, scenario1Algo: e.target.value }))}
                                  className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-cyan"
                                >
                                  <option value="">-- Choose Algorithm --</option>
                                  <option value="cnn">Convolutional Neural Network (CNN)</option>
                                  <option value="xgboost">Gradient Boosted Decision Trees (XGBoost)</option>
                                  <option value="lstm">Recurrent LSTM Sequence Model</option>
                                </select>
                              </div>
                              <div>
                                <label className="block text-[10px] text-gray-400 mb-1 font-semibold">Optimization Target Metric</label>
                                <select
                                  value={scenarios.scenario1Metric}
                                  onChange={(e) => setScenarios(prev => ({ ...prev, scenario1Metric: e.target.value }))}
                                  className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-cyan"
                                >
                                  <option value="">-- Choose Metric --</option>
                                  <option value="accuracy">Global Accuracy (overall classification correctness)</option>
                                  <option value="recall">Recall / Sensitivity (minimize clinical false negatives)</option>
                                  <option value="precision">Precision (minimize false alarms)</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          {/* Scenario 2 */}
                          <div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-3">
                            <div className="font-mono text-white text-xs font-semibold flex items-center space-x-2">
                              <span className="w-2 h-2 bg-brand-indigo rounded-full shrink-0" />
                              <span>Task 2: Pneumonia Detection in Chest X-Rays</span>
                            </div>
                            <p className="text-gray-400 italic text-[11px] leading-relaxed">
                              &quot;Classify high-resolution chest radiograph images to flags patients suffering from pneumonia.&quot;
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              <div>
                                <label className="block text-[10px] text-gray-400 mb-1 font-semibold">Algorithm Selection</label>
                                <select
                                  value={scenarios.scenario2Algo}
                                  onChange={(e) => setScenarios(prev => ({ ...prev, scenario2Algo: e.target.value }))}
                                  className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-cyan"
                                >
                                  <option value="">-- Choose Algorithm --</option>
                                  <option value="cnn">Convolutional Neural Network (CNN / ResNet)</option>
                                  <option value="svm">Support Vector Machine (SVM)</option>
                                  <option value="transformer">BERT-style clinical textual transformer</option>
                                </select>
                              </div>
                              <div>
                                <label className="block text-[10px] text-gray-400 mb-1 font-semibold">Optimization Target Metric</label>
                                <select
                                  value={scenarios.scenario2Metric}
                                  onChange={(e) => setScenarios(prev => ({ ...prev, scenario2Metric: e.target.value }))}
                                  className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-cyan"
                                >
                                  <option value="">-- Choose Metric --</option>
                                  <option value="specificity">Specificity (high exclusion rate of healthy scans)</option>
                                  <option value="sensitivity">Sensitivity / Recall (insulate clinical safety defaults)</option>
                                  <option value="mae">Mean Absolute Error (residual deviation margin)</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          {/* Scenario 3 */}
                          <div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-3">
                            <div className="font-mono text-white text-xs font-semibold flex items-center space-x-2">
                              <span className="w-2 h-2 bg-brand-emerald rounded-full shrink-0" />
                              <span>Task 3: Medical Intent & Symptom parsing from notes</span>
                            </div>
                            <p className="text-gray-400 italic text-[11px] leading-relaxed">
                              &quot;Extract structured symptoms, diagnoses, and medical prescriptions text spans from clinical intake free-text documents.&quot;
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              <div>
                                <label className="block text-[10px] text-gray-400 mb-1 font-semibold">Algorithm Selection</label>
                                <select
                                  value={scenarios.scenario3Algo}
                                  onChange={(e) => setScenarios(prev => ({ ...prev, scenario3Algo: e.target.value }))}
                                  className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-cyan"
                                >
                                  <option value="">-- Choose Algorithm --</option>
                                  <option value="linear">Logistic Regression (TF-IDF bag of words)</option>
                                  <option value="transformer">Transformer Language Model (clinicalBERT/LLM)</option>
                                  <option value="kmeans">K-Means Text Clustering</option>
                                </select>
                              </div>
                              <div>
                                <label className="block text-[10px] text-gray-400 mb-1 font-semibold">Optimization Target Metric</label>
                                <select
                                  value={scenarios.scenario3Metric}
                                  onChange={(e) => setScenarios(prev => ({ ...prev, scenario3Metric: e.target.value }))}
                                  className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-cyan"
                                >
                                  <option value="">-- Choose Metric --</option>
                                  <option value="f1">F1-Score (harmonized balance of precision and recall)</option>
                                  <option value="rmse">Root Mean Squared Error (log-loss margin)</option>
                                  <option value="perplexity">Language Model Perplexity</option>
                                </select>
                              </div>
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
                            <span>Hyperparameter validation complete! All models converge on the global maximum.</span>
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
                              <span>Verify Optimizations ({sandboxAttempts} attempts)</span>
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
                              <p className="text-gray-300"><span className="text-gray-500">LinkedIn/GitHub:</span> {formData.portfolioUrl}</p>
                            )}
                            <p className="text-gray-300"><span className="text-gray-500">Resume:</span> {formData.resumeName}</p>
                          </div>

                          <div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-2">
                            <p className="text-gray-500 uppercase text-[10px] tracking-wider mb-2 font-bold">ML & Research Focus</p>
                            <p className="text-gray-300">
                              <span className="text-gray-500">Research Focus:</span>{" "}
                              <span className="capitalize">{formData.researchFocus}</span>
                            </p>
                            <p className="text-gray-300"><span className="text-gray-500">ML experience:</span> {formData.healthcareYears} years</p>
                            <p className="text-gray-300"><span className="text-gray-500">Comfortable with MLOps:</span> {formData.mlOpsComfort}</p>
                          </div>

                          <div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-1.5">
                            <p className="text-gray-500 uppercase text-[10px] tracking-wider mb-2 font-bold">Model Validation Sandbox</p>
                            <p className="text-brand-emerald flex items-center space-x-1.5">
                              <CheckCircle className="w-3.5 h-3.5" />
                              <span>All 3 predictive tasks configured and tuned correctly</span>
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
                                <span>Submit Data Science Application</span>
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
