"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Sparkles, Brain, HeartPulse, FileText,
  Shield, Users, Activity, Upload, CheckCircle,
  Lock, Globe, Database, Layers,
  Check, Send, Code, AlertCircle, Server
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
    primaryRTOS: "freertos",
    devYears: "3-5",
    hipaaFamiliar: "yes",
    resumeFile: null as File | null,
    resumeName: "",
  });

  // Sandbox State
        
  // Submission States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const technicalSkills: TechSkill[] = [
    { name: "C / C++ Programming", level: "Required", color: "text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20" },
    { name: "Embedded Systems Programming", level: "Required", color: "text-brand-indigo bg-brand-indigo/10 border-brand-indigo/20" },
    { name: "Microcontrollers (ARM / STM32)", level: "Required", color: "text-brand-emerald bg-brand-emerald/10 border-brand-emerald/20" },
    { name: "Real-Time OS (FreeRTOS)", level: "Required", color: "text-purple-400 bg-purple-400/10 border-purple-400/20" },
    { name: "IoT Protocols (MQTT / BLE)", level: "Required", color: "text-amber-400 bg-amber-400/10 border-amber-400/20" },
    { name: "Hardware Debugging & JTAG", level: "Preferred", color: "text-rose-400 bg-rose-400/10 border-rose-400/20" },
  ];

  const techAreas: TechArea[] = [
    { title: "Medical IoT Devices", desc: "Build firmware for real-time patient vital sign monitors and smart sensors.", icon: <Globe className="w-5 h-5" /> },
    { title: "Healthcare Embedded Systems", desc: "Design low-power microcontroller logic loops to ensure device longevity.", icon: <Layers className="w-5 h-5" /> },
    { title: "Real-Time Monitoring", desc: "Configure high-frequency sample buffers and local sensor processing logic.", icon: <Activity className="w-5 h-5" /> },
    { title: "Connected Patient Devices", desc: "Synchronize raw device readings with cloud portals using secure transport links.", icon: <Brain className="w-5 h-5" /> },
    { title: "AI-Enabled Medical Hardware", desc: "Expose interfaces on microcontrollers to trigger local tinyML algorithms.", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Digital Health Ecosystems", desc: "Test hardware interactions with telemetry message queues and API layers.", icon: <Server className="w-5 h-5" /> },
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

  
  const submitApplication = async () => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          portfolioUrl: formData.portfolioUrl,
          resumeName: formData.resumeName,
          position: "Firmware Engineer",
          extraFields: {
            ...formData
          }
        }),
      });
      if (!res.ok) {
        console.error("Failed to submit application");
      }
    } catch (err) {
      console.error("Submit error:", err);
    }
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
          <span className="text-white">Firmware Engineer</span>
        </div>

        {/* -- HERO HEADER -- */}
        <header className="mb-12 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan/20 to-brand-indigo/20 rounded-3xl blur-2xl opacity-40 -z-10 pointer-events-none" />
          <div className="glass-panel border border-brand-border rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-6">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-cyan/15 to-brand-indigo/15 border border-brand-cyan/20 rounded-full px-4 py-1.5 shadow-lg shadow-brand-cyan/5">
                  <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">Embedded Engineering</span>
                  <Sparkles className="w-3 h-3 text-brand-cyan" />
                </div>

                <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                  Firmware Engineer
                </h1>

                <p className="text-sm md:text-base text-gray-300 max-w-2xl leading-relaxed">
                  Design secure embedded firmware for medical IoT devices, optimize real-time kernel scheduling, and connect telemetry to cloud platforms.
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center space-x-1.5 text-xs font-semibold px-3 py-1 bg-white/5 border border-brand-border rounded-lg text-white">
                    <Code className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>Data & Analytics</span>
                  </span>
                  <span className="inline-flex items-center space-x-1.5 text-xs font-semibold px-3 py-1 bg-white/5 border border-brand-border rounded-lg text-white">
                    <Globe className="w-3.5 h-3.5 text-brand-indigo" />
                    <span>Remote (US Only)</span>
                  </span>
                  
                </div>
              </div>

              <div className="md:col-span-4 flex justify-start md:justify-end">
                <button
                  onClick={() => {
                    setActiveTab("apply");
                    const element = document.getElementById("job-content");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full md:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold px-8 py-4 rounded-2xl hover:opacity-95 transition-opacity shadow-lg shadow-brand-indigo/10 text-sm cursor-pointer"
                >
                  <span>Apply for this Role</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* -- TAB NAVIGATION -- */}
        <div className="border-b border-brand-border mb-8 flex space-x-8">
          <button
            onClick={() => setActiveTab("description")}
            className={`pb-4 text-sm font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === "description"
                ? "border-brand-cyan text-brand-cyan"
                : "border-transparent text-gray-400 hover:text-white"
            }`}
          >
            Job Description
          </button>
          <button
            onClick={() => setActiveTab("apply")}
            className={`pb-4 text-sm font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === "apply"
                ? "border-brand-cyan text-brand-cyan"
                : "border-transparent text-gray-400 hover:text-white"
            }`}
          >
            Apply Portal
          </button>
        </div>

        {/* -- MAIN CONTENT SECTIONS -- */}
        <div id="job-content" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <AnimatePresence mode="wait">
            {activeTab === "description" ? (
              <motion.div
                key="description"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="lg:col-span-8 space-y-10"
              >
                {/* About Med Clinic X */}
                <section className="space-y-4">
                  <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">About Med Clinic X</h2>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Med Clinic X is a healthcare technology company building advanced digital health ecosystems that combine software, AI, cloud platforms, and connected medical devices for healthcare organizations across the United States.
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    We develop healthcare SaaS platforms, AI-driven healthcare systems, patient portals, telemedicine solutions, automation workflows, and integrated medical device technologies that support real-world clinical environments.
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Our mission is to build reliable, secure, and high-performance healthcare systems that extend into connected devices and real-time monitoring solutions.
                  </p>
                </section>

                {/* Job Overview */}
                <section className="space-y-4">
                  <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">Job Overview</h2>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    We are seeking a <strong>Firmware Engineer</strong> to design, develop, and optimize firmware for healthcare devices and IoT-enabled medical systems.
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    In this role, you will build low-level software that powers connected healthcare devices and ensures seamless communication with cloud-based healthcare platforms used across the United States.
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    You will collaborate with hardware engineers, embedded developers, and cloud teams to build safe and reliable healthcare technologies.
                  </p>
                </section>

                {/* Responsibilities */}
                <section className="space-y-6">
                  <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">Responsibilities</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="glass-panel border border-brand-border p-5 rounded-2xl space-y-2">
                      <div className="w-7 h-7 bg-brand-cyan/10 border border-brand-cyan/20 rounded-lg flex items-center justify-center text-brand-cyan mb-2">
                        <Layers className="w-4 h-4" />
                      </div>
                      <h3 className="font-semibold text-white text-sm">Firmware Development</h3>
                      <ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside">
                        <li>Design and develop firmware for healthcare and IoT devices.</li>
                        <li>Build low-level embedded software for real-time systems.</li>
                        <li>Optimize performance, memory usage, and device reliability.</li>
                        <li>Develop firmware for microcontroller-based systems.</li>
                      </ul>
                    </div>

                    <div className="glass-panel border border-brand-border p-5 rounded-2xl space-y-2">
                      <div className="w-7 h-7 bg-brand-indigo/10 border border-brand-indigo/20 rounded-lg flex items-center justify-center text-brand-indigo mb-2">
                        <Database className="w-4 h-4" />
                      </div>
                      <h3 className="font-semibold text-white text-sm">Healthcare Device Integration</h3>
                      <ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside">
                        <li>Integrate firmware with cloud-based healthcare SaaS platforms.</li>
                        <li>Enable secure communication between devices and backend systems.</li>
                        <li>Support data transmission from medical devices to clinical systems.</li>
                        <li>Ensure device interoperability within healthcare ecosystems.</li>
                      </ul>
                    </div>

                    <div className="glass-panel border border-brand-border p-5 rounded-2xl space-y-2">
                      <div className="w-7 h-7 bg-brand-emerald/10 border border-brand-emerald/20 rounded-lg flex items-center justify-center text-brand-emerald mb-2">
                        <Activity className="w-4 h-4" />
                      </div>
                      <h3 className="font-semibold text-white text-sm">Embedded & Real-Time Systems</h3>
                      <ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside">
                        <li>Work with real-time operating systems (RTOS).</li>
                        <li>Develop event-driven firmware applications.</li>
                        <li>Ensure stability and fault tolerance in embedded systems.</li>
                        <li>Debug hardware-software interaction issues.</li>
                      </ul>
                    </div>

                    <div className="glass-panel border border-brand-border p-5 rounded-2xl space-y-2">
                      <div className="w-7 h-7 bg-purple-500/10 border border-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 mb-2">
                        <Lock className="w-4 h-4" />
                      </div>
                      <h3 className="font-semibold text-white text-sm">Security & Reliability</h3>
                      <ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside">
                        <li>Implement secure firmware for healthcare devices.</li>
                        <li>Ensure compliance with healthcare data protection standards.</li>
                        <li>Prevent vulnerabilities in connected medical systems.</li>
                        <li>Support safe and reliable device operations.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Required Qualifications */}
                <section className="space-y-4">
                  <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">Qualifications</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-300">
                    <div className="space-y-3">
                      <h3 className="font-semibold text-white text-xs uppercase tracking-wider text-brand-cyan">Required</h3>
                      <ul className="text-xs text-gray-400 space-y-2 list-disc list-inside">
                        <li>Bachelor’s degree in Computer Engineering, Electrical Engineering, or related field.</li>
                        <li>Experience in firmware or low-level embedded software development.</li>
                        <li>Strong programming skills in C or C++.</li>
                        <li>Understanding of microcontrollers (ARM, STM32) and bare-metal programming.</li>
                        <li>Experience with real-time systems, concurrency, and task management.</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-semibold text-white text-xs uppercase tracking-wider text-brand-indigo">Preferred</h3>
                      <ul className="text-xs text-gray-400 space-y-2 list-disc list-inside">
                        <li>Experience in US healthcare or medical device industries (FDA-regulated).</li>
                        <li>Familiarity with IoT communication protocols (MQTT, BLE, CoAP).</li>
                        <li>Experience developing on FreeRTOS or similar embedded kernels.</li>
                        <li>Knowledge of embedded security practices (secure boot, encryption).</li>
                        <li>Experience interfacing with hardware debugging tools (JTAG, logic analyzers).</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Why Join Med Clinic X */}
                <section className="space-y-4">
                  <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">Why Join Med Clinic X?</h2>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    At Med Clinic X, you will build the foundation of connected healthcare technology. You will:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-gray-400">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                      <span>Work on real healthcare device ecosystems used in the US</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                      <span>Build firmware powering connected medical technologies</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                      <span>Collaborate with AI, cloud, and engineering teams</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                      <span>Shape the future of connected healthcare systems</span>
                    </li>
                  </ul>
                </section>
              </motion.div>
            ) : (
              <motion.div
                key="apply"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="lg:col-span-8"
              >
                <div className="glass-panel border border-brand-border rounded-3xl p-6 md:p-8">
                  {/* Step indicators */}
                  <div className="flex items-center justify-between mb-8 border-b border-brand-border pb-4 font-mono text-[10px]">
                    <div className="flex space-x-4">
                      <span className={formStep === 1 ? "text-brand-cyan font-bold" : "text-gray-500"}>01. Profile</span>
                      <span className={formStep === 2 ? "text-brand-cyan font-bold" : "text-gray-500"}>02. Experience</span>
                      <span className={formStep === 3 ? "text-brand-cyan font-bold" : "text-gray-500"}>03. Firmware Sandbox</span>
                      
                    </div>
                    <span className="text-gray-500">Step {formStep} of 3</span>
                  </div>

                  {submitSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12 space-y-6"
                    >
                      <div className="w-16 h-16 bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald rounded-full flex items-center justify-center mx-auto shadow-lg shadow-brand-emerald/5">
                        <CheckCircle className="w-8 h-8" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-display font-extrabold text-2xl text-white">Application Pre-screen Completed!</h3>
                        <p className="text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
                          Your firmware configuration score is logged. We verified your preemptive RTOS prioritizations, secure MQTT telemetry streams, and hardware Secure Boot update gates.
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
                            primaryRTOS: "freertos",
                            devYears: "3-5",
                            hipaaFamiliar: "yes",
                            resumeFile: null,
                            resumeName: "",
                          });
                        }}
                        className="inline-flex items-center space-x-2 text-xs font-bold text-brand-cyan hover:underline cursor-pointer"
                      >
                        <span>Reset and restart mock screening</span>
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
                                placeholder="Dominic Wright"
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
                                placeholder="dominic.firmware@example.com"
                                className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-colors"
                              />
                            </div>

                            <div>
                              <label className="block text-xs font-semibold text-gray-300 mb-1.5">GitHub / Portfolio URL</label>
                              <input
                                type="url"
                                value={formData.portfolioUrl}
                                onChange={(e) => setFormData(prev => ({ ...prev, portfolioUrl: e.target.value }))}
                                placeholder="https://github.com/dominicembedded"
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

                      {/* STEP 2: Firmware Experience */}
                      {formStep === 2 && (
                        <div className="space-y-5">
                          <h3 className="font-display font-extrabold text-lg text-white">Embedded Profile</h3>
                          
                          <div className="space-y-4">
                            <div>
                              <label className="block text-xs font-semibold text-gray-300 mb-1.5">Primary Real-Time OS (RTOS)</label>
                              <select
                                value={formData.primaryRTOS}
                                onChange={(e) => setFormData(prev => ({ ...prev, primaryRTOS: e.target.value }))}
                                className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"
                              >
                                <option value="freertos">FreeRTOS (Deterministic Preemptive)</option>
                                <option value="zephyr">Zephyr RTOS (Modular/IoT)</option>
                                <option value="baremetal">Bare-Metal (Interrupt Driven Loops)</option>
                                <option value="txthread">ThreadX (Azure RTOS)</option>
                              </select>
                            </div>

                            <div>
                              <label className="block text-xs font-semibold text-gray-300 mb-1.5">Years of Firmware / Embedded Experience</label>
                              <select
                                value={formData.devYears}
                                onChange={(e) => setFormData(prev => ({ ...prev, devYears: e.target.value }))}
                                className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"
                              >
                                <option value="0-2">0 to 2 Years</option>
                                <option value="3-5">3 to 5 Years</option>
                                <option value="5-8">5 to 8 Years</option>
                                <option value="8+">8+ Years</option>
                              </select>
                            </div>

                            <div>
                              <label className="block text-xs font-semibold text-gray-300 mb-1.5">Are you comfortable debugging hardware-software interfaces using logic analyzers or JTAG?</label>
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

                      {/* STEP 3: Sandbox */}
                      

                      {/* STEP 4: Review and Submit */}
                      {formStep === 3 && (
                        <div className="space-y-5">
                          <h3 className="font-display font-extrabold text-lg text-white">Review & Submit Application</h3>
                          
                          <div className="space-y-4 text-xs font-mono">
                            <div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-2">
                              <p className="text-gray-500 uppercase text-[10px] tracking-wider mb-2 font-bold font-sans">Personal Profile</p>
                              <p className="text-gray-300"><span className="text-gray-500 font-sans">Name:</span> {formData.name}</p>
                              <p className="text-gray-300"><span className="text-gray-500 font-sans">Email:</span> {formData.email}</p>
                              {formData.portfolioUrl && (
                                <p className="text-gray-300"><span className="text-gray-500 font-sans">Portfolio:</span> {formData.portfolioUrl}</p>
                              )}
                              <p className="text-gray-300"><span className="text-gray-500 font-sans">Resume:</span> {formData.resumeName}</p>
                            </div>

                            <div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-2">
                              <p className="text-gray-500 uppercase text-[10px] tracking-wider mb-2 font-bold font-sans">Embedded Profile</p>
                              <p className="text-gray-300">
                                <span className="text-gray-500 font-sans">RTOS:</span>{" "}
                                <span className="capitalize">{formData.primaryRTOS}</span>
                              </p>
                              <p className="text-gray-300"><span className="text-gray-500 font-sans">Experience:</span> {formData.devYears} years</p>
                              <p className="text-gray-300"><span className="text-gray-500 font-sans">JTAG Debugging:</span> {formData.hipaaFamiliar}</p>
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
                              className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold px-6 py-3 rounded-xl hover:opacity-95 transition-opacity text-xs disabled:opacity-50 cursor-pointer"
                            >
                              {isSubmitting ? (
                                <>
                                  <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                  <span>Flashing device...</span>
                                </>
                              ) : (
                                <>
                                  <Send className="w-3.5 h-3.5" />
                                  <span>Submit Firmware Application</span>
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

          {/* -- SIDEBAR SKILLS & REQUIREMENT CARD -- */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Technical Skills Required */}
            <div className="glass-panel border border-brand-border rounded-3xl p-6 space-y-6">
              <h3 className="font-display font-extrabold text-base text-white">Technical Core</h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill, index) => (
                  <span
                    key={index}
                    className={`text-[10px] font-semibold px-2.5 py-1 rounded-md border tracking-wide uppercase ${skill.color}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Healthcare Technology Focus Areas */}
            <div className="glass-panel border border-brand-border rounded-3xl p-6 space-y-6">
              <div className="flex items-center space-x-2 text-white">
                <Shield className="w-4 h-4 text-brand-cyan" />
                <h3 className="font-display font-extrabold text-base">Key Systems Involved</h3>
              </div>
              <div className="space-y-4">
                {techAreas.map((area, index) => (
                  <div key={index} className="flex space-x-3.5">
                    <div className="w-8 h-8 rounded-xl bg-white/2 border border-white/5 flex items-center justify-center text-brand-cyan shrink-0 mt-0.5">
                      {area.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white">{area.title}</h4>
                      <p className="text-[11px] text-gray-400 leading-relaxed mt-0.5">{area.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

      </div>
    </div>
  );
}
