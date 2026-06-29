"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, FileText, Shield, Activity, Upload, CheckCircle, Globe, Database, Layers, Send, Code, AlertCircle, Server, Cpu, HeartPulse, Sliders } from "lucide-react";

interface TechSkill { name: string; level: string; color: string; }
interface TechArea { title: string; desc: string; icon: React.ReactNode; }

export default function JobClient() {
  const [activeTab, setActiveTab] = useState<'description'|'apply'>('description');
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({ name:'',email:'',portfolioUrl:'',primaryLang:'epic_cerner',expYears:'3-5',cloudExp:'yes',resumeFile:null as File|null,resumeName:'' });
          const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const technicalSkills: TechSkill[] = [
    { name:'SaaS Systems Deployment', level:'Required', color:'text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20' },
    { name:'EHR/EMR Integrations', level:'Required', color:'text-brand-indigo bg-brand-indigo/10 border-brand-indigo/20' },
    { name:'API Integration Concepts', level:'Required', color:'text-brand-emerald bg-brand-emerald/10 border-brand-emerald/20' },
    { name:'HL7 FHIR Interoperability', level:'Required', color:'text-purple-400 bg-purple-400/10 border-purple-400/20' },
    { name:'Clinical Workflow Mapping', level:'Required', color:'text-amber-400 bg-amber-400/10 border-amber-400/20' },
    { name:'SQL Database Queries (Basic)', level:'Preferred', color:'text-rose-400 bg-rose-400/10 border-rose-400/20' },
  ];

  const techAreas: TechArea[] = [
    { title:'Healthcare SaaS Onboarding', desc:'Configure patient portals, workflows, and clinical dashboard systems for client clinics.', icon:<Sliders className="w-5 h-5" /> },
    { title:'EHR Interoperability Sync', desc:'Map and deploy APIs linking internal platforms with external Epic, Cerner, or clinical databases.', icon:<Database className="w-5 h-5" /> },
    { title:'Clinical Workflow Alignment', desc:'Work directly with clinical administrators to configure access rules, intake forms, and schedules.', icon:<HeartPulse className="w-5 h-5" /> },
    { title:'Interoperability Testing', desc:'Hard-test HL7 messaging pipelines, FHIR resources, and OAuth security handshakes.', icon:<Shield className="w-5 h-5" /> },
    { title:'Post-Deploy Optimization', desc:'Audit performance analytics, ticket queues, and user adoption rates to continuously tune configurations.', icon:<Layers className="w-5 h-5" /> },
    { title:'Disaster Recovery & Sync', desc:'Deploy robust manual/automated failovers for client-side syncing pipelines during maintenance windows.', icon:<Server className="w-5 h-5" /> },
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => { if (e.target.files?.[0]) { const f=e.target.files[0]; setFormData(p=>({...p,resumeFile:f,resumeName:f.name})); } };
  const handleDragOver = (e: React.DragEvent) => { e.preventDefault(); };
  const handleDrop = (e: React.DragEvent) => { e.preventDefault(); if (e.dataTransfer.files?.[0]) { const f=e.dataTransfer.files[0]; setFormData(p=>({...p,resumeFile:f,resumeName:f.name})); } };

  
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
          position: "Implementation Consultant",
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
  const resetForm = () => { setFormStep(1);setSubmitSuccess(false);setFormData({name:'',email:'',portfolioUrl:'',primaryLang:'epic_cerner',expYears:'3-5',cloudExp:'yes',resumeFile:null,resumeName:''}); };

  return (<div className="relative overflow-hidden min-h-screen">
    <div className="fixed top-0 right-1/4 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[130px] -z-10 pointer-events-none" />
    <div className="fixed bottom-0 left-1/4 w-[500px] h-[500px] bg-brand-indigo/5 rounded-full blur-[130px] -z-10 pointer-events-none" />
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
      <div className="mb-8 flex items-center space-x-2 text-xs"><Link href="/" className="text-gray-500 hover:text-brand-cyan transition-colors">Home</Link><span className="text-gray-600">/</span><Link href="/careers" className="text-gray-500 hover:text-brand-cyan transition-colors">Careers</Link><span className="text-gray-600">/</span><span className="text-white">Implementation Consultant</span></div>
      <header className="mb-12 relative"><div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan/20 to-brand-indigo/20 rounded-3xl blur-2xl opacity-40 -z-10 pointer-events-none" /><div className="glass-panel border border-brand-border rounded-3xl p-8 md:p-12"><div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-cyan/15 to-brand-indigo/15 border border-brand-cyan/20 rounded-full px-4 py-1.5"><div className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse" /><span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">Client Success & Deployment</span><Sparkles className="w-3 h-3 text-brand-cyan" /></div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">Implementation Consultant Careers at Med Clinic X</h1>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl leading-relaxed">Manage the deployment, configuration, and onboarding of healthcare SaaS platforms for clients across the United States, aligning tools to clinical workflows.</p>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center space-x-1.5 text-xs font-semibold px-3 py-1 bg-white/5 border border-brand-border rounded-lg text-white"><Code className="w-3.5 h-3.5 text-brand-cyan" /><span>Client Services</span></span>
            <span className="inline-flex items-center space-x-1.5 text-xs font-semibold px-3 py-1 bg-white/5 border border-brand-border rounded-lg text-white"><Globe className="w-3.5 h-3.5 text-brand-indigo" /><span>Remote (US Only)</span></span>
            
          </div>
        </div>
        <div className="md:col-span-4 flex justify-start md:justify-end"><button onClick={()=>{setActiveTab('apply');const el=document.getElementById('job-content');if(el)el.scrollIntoView({behavior:'smooth'});}} className="w-full md:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold px-8 py-4 rounded-2xl hover:opacity-95 transition-opacity shadow-lg shadow-brand-indigo/10 text-sm cursor-pointer"><span>Apply for this Role</span><ArrowRight className="w-4 h-4" /></button></div>
      </div></div></header>
      <div className="border-b border-brand-border mb-8 flex space-x-8">
        <button onClick={()=>setActiveTab('description')} className={`pb-4 text-sm font-bold border-b-2 transition-all cursor-pointer ${activeTab==='description'?'border-brand-cyan text-brand-cyan':'border-transparent text-gray-400 hover:text-white'}`}>Job Description</button>
        <button onClick={()=>setActiveTab('apply')} className={`pb-4 text-sm font-bold border-b-2 transition-all cursor-pointer ${activeTab==='apply'?'border-brand-cyan text-brand-cyan':'border-transparent text-gray-400 hover:text-white'}`}>Apply Portal</button>
      </div>
      <div id="job-content" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"><AnimatePresence mode="wait">
        {activeTab==='description' ? (
          <motion.div key="description" initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-15}} transition={{duration:0.3}} className="lg:col-span-8 space-y-10">
            <section className="space-y-4"><h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">About Med Clinic X</h2><p className="text-sm text-gray-300 leading-relaxed">Med Clinic X is a healthcare technology company building modern digital health systems that support healthcare organizations across the United States.</p><p className="text-sm text-gray-300 leading-relaxed">We develop healthcare SaaS platforms, AI-driven healthcare systems, patient portals, telemedicine solutions, automation workflows, and integrated digital health products for clinics, hospitals, and healthcare providers.</p><p className="text-sm text-gray-300 leading-relaxed">Our mission is to ensure smooth, efficient, and successful deployment of healthcare technology solutions across client organizations.</p></section>
            <section className="space-y-4"><h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">Job Overview</h2><p className="text-sm text-gray-300 leading-relaxed">We are seeking an <strong>Implementation Consultant</strong> to manage the deployment, configuration, and onboarding of healthcare SaaS platforms for clients across the United States.</p><p className="text-sm text-gray-300 leading-relaxed">In this role, you will work directly with healthcare organizations to implement Med Clinic X solutions, ensuring systems are properly configured, integrated, and optimized for real-world clinical workflows. You will act as a bridge between clients, product teams, and engineering teams to ensure successful delivery of healthcare technology solutions.</p></section>
            <section className="space-y-6"><h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">Responsibilities</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-panel border border-brand-border p-5 rounded-2xl space-y-2"><div className="w-7 h-7 bg-brand-cyan/10 border border-brand-cyan/20 rounded-lg flex items-center justify-center text-brand-cyan mb-2"><Sliders className="w-4 h-4" /></div><h3 className="font-semibold text-white text-sm">Healthcare SaaS Implementation</h3><ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside"><li>Lead onboarding and implementation of healthcare SaaS platforms.</li><li>Configure systems based on client requirements and workflows.</li><li>Ensure smooth deployment of patient portals and clinical systems.</li><li>Manage end-to-end implementation lifecycle.</li></ul></div>
              <div className="glass-panel border border-brand-border p-5 rounded-2xl space-y-2"><div className="w-7 h-7 bg-brand-indigo/10 border border-brand-indigo/20 rounded-lg flex items-center justify-center text-brand-indigo mb-2"><Database className="w-4 h-4" /></div><h3 className="font-semibold text-white text-sm">System Integration</h3><ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside"><li>Integrate SaaS platforms with EHR/EMR systems.</li><li>Configure APIs and data exchange workflows.</li><li>Support migration of healthcare data into new systems.</li><li>Ensure interoperability across healthcare tools.</li></ul></div>
              <div className="glass-panel border border-brand-border p-5 rounded-2xl space-y-2"><div className="w-7 h-7 bg-brand-emerald/10 border border-brand-emerald/20 rounded-lg flex items-center justify-center text-brand-emerald mb-2"><Activity className="w-4 h-4" /></div><h3 className="font-semibold text-white text-sm">Client Engagement & Support</h3><ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside"><li>Work closely with healthcare clients and stakeholders.</li><li>Gather requirements and translate them into system configurations.</li><li>Provide training and onboarding support.</li><li>Ensure successful adoption of deployed systems.</li></ul></div>
              <div className="glass-panel border border-brand-border p-5 rounded-2xl space-y-2"><div className="w-7 h-7 bg-purple-500/10 border border-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 mb-2"><FileText className="w-4 h-4" /></div><h3 className="font-semibold text-white text-sm">Troubleshooting & Optimization</h3><ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside"><li>Resolve technical issues during implementation.</li><li>Identify workflow inefficiencies and improve configurations.</li><li>Coordinate with engineering teams for complex fixes.</li><li>Ensure system stability post-deployment.</li></ul></div>
            </div></section>
            <section className="space-y-4"><h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">Qualifications</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div className="space-y-3"><h3 className="font-semibold text-white text-xs uppercase tracking-wider text-brand-cyan">Required</h3><ul className="text-xs text-gray-400 space-y-2 list-disc list-inside"><li>Bachelor’s degree in CS, Info Systems, Healthcare Admin, or related field.</li><li>Experience in SaaS implementation, consulting, or technical onboarding.</li><li>Strong understanding of software systems and configurations.</li><li>Excellent communication and client-facing skills.</li><li>Ability to manage multiple implementation projects.</li></ul></div><div className="space-y-3"><h3 className="font-semibold text-white text-xs uppercase tracking-wider text-brand-indigo">Preferred</h3><ul className="text-xs text-gray-400 space-y-2 list-disc list-inside"><li>Experience in US healthcare or healthcare SaaS environments.</li><li>Familiarity with HIPAA compliance and healthcare data systems.</li><li>Experience implementing EHR/EMR systems (Epic, Cerner, etc.).</li><li>Exposure to HL7 or FHIR standards.</li><li>Background in technical consulting or solutions engineering.</li></ul></div></div></section>
            <section className="space-y-4"><h2 className="font-display font-extrabold text-xl sm:text-2xl text-white">Why Join Med Clinic X?</h2><p className="text-sm text-gray-300 leading-relaxed">At Med Clinic X, you will directly impact how healthcare organizations adopt and use modern technology. You will:</p><ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-gray-400">{['Deploy real healthcare systems used across the US','Work closely with clinical and technical stakeholders','Lead SaaS implementation projects end-to-end','Improve healthcare workflows through technology','Contribute to national-scale digital health transformation'].map((item,i)=>(<li key={i} className="flex items-start space-x-2"><CheckCircle className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" /><span>{item}</span></li>))}</ul></section>
          </motion.div>
        ) : (
          <motion.div key="apply" initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-15}} transition={{duration:0.3}} className="lg:col-span-8">
            <div className="glass-panel border border-brand-border rounded-3xl p-6 md:p-8">
              <div className="flex items-center justify-between mb-8 border-b border-brand-border pb-4 font-mono text-[10px]"><div className="flex space-x-4"><span className={formStep===1?'text-brand-cyan font-bold':'text-gray-500'}>01. Profile</span><span className={formStep===2?'text-brand-cyan font-bold':'text-gray-500'}>02. Experience</span><span className={formStep===3?'text-brand-cyan font-bold':'text-gray-500'}>03. Deployment Design</span></div><span className="text-gray-500">Step {formStep} of 3</span></div>
              {submitSuccess ? (<motion.div initial={{opacity:0,scale:0.95}} animate={{opacity:1,scale:1}} className="text-center py-12 space-y-6">
                    <div className="w-16 h-16 bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-display font-extrabold text-2xl text-white">Application Submitted!</h3>
                      <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
                        Thanks for applying, <strong className="text-white">{formData.name}</strong>. Our team will review your application and be in touch soon.
                      </p>
                    </div>

                    <button onClick={resetForm} className="inline-flex items-center space-x-2 text-xs font-bold text-brand-cyan hover:underline cursor-pointer"><span>Reset and restart mock screening</span><ArrowRight className="w-3.5 h-3.5" /></button>
              </motion.div>) : (<>
                {formStep===1 && (<div className="space-y-5"><h3 className="font-display font-extrabold text-lg text-white">Let&apos;s start with your basics</h3><div className="space-y-4"><div><label className="block text-xs font-semibold text-gray-300 mb-1.5">Full Name <span className="text-red-400">*</span></label><input type="text" required value={formData.name} onChange={(e)=>setFormData(p=>({...p,name:e.target.value}))} placeholder="Morgan Brooks" className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-colors" /></div><div><label className="block text-xs font-semibold text-gray-300 mb-1.5">Email Address <span className="text-red-400">*</span></label><input type="email" required value={formData.email} onChange={(e)=>setFormData(p=>({...p,email:e.target.value}))} placeholder="morgan.brooks@example.com" className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-colors" /></div><div><label className="block text-xs font-semibold text-gray-300 mb-1.5">LinkedIn or Portfolio URL</label><input type="url" value={formData.portfolioUrl} onChange={(e)=>setFormData(p=>({...p,portfolioUrl:e.target.value}))} placeholder="https://linkedin.com/in/morganbrooks" className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-colors" /></div><div><label className="block text-xs font-semibold text-gray-300 mb-1.5">Upload Resume / CV <span className="text-red-400">*</span></label><div onDragOver={handleDragOver} onDrop={handleDrop} className="border-2 border-dashed border-brand-border hover:border-brand-cyan/50 rounded-2xl p-6 text-center bg-white/2 cursor-pointer transition-colors relative"><input type="file" accept=".pdf,.doc,.docx" onChange={handleFileUpload} className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" /><Upload className="w-8 h-8 text-gray-500 mx-auto mb-2" />{formData.resumeName?<p className="text-sm font-semibold text-brand-cyan">{formData.resumeName}</p>:<><p className="text-xs text-gray-300 font-semibold mb-1">Drag and drop your file here, or click to browse</p><p className="text-[10px] text-gray-500">Supports PDF, DOCX, DOC up to 10MB</p></>}</div></div></div><div className="pt-4 flex justify-end"><button type="button" disabled={!formData.name||!formData.email||!formData.resumeName} onClick={()=>setFormStep(2)} className="inline-flex items-center space-x-2 bg-brand-cyan text-brand-bg font-bold px-5 py-3 rounded-xl hover:opacity-90 transition-opacity text-xs disabled:opacity-30 cursor-pointer"><span>Next Step</span><ArrowRight className="w-3.5 h-3.5" /></button>{submitError && <p className="text-xs text-red-400 text-center mt-2">{submitError}</p>}</div></div>)}
                {formStep===2 && (<div className="space-y-5"><h3 className="font-display font-extrabold text-lg text-white">Implementation Experience Profile</h3><div className="space-y-4"><div><label className="block text-xs font-semibold text-gray-300 mb-1.5">Primary Integration / SaaS Focus</label><select value={formData.primaryLang} onChange={(e)=>setFormData(p=>({...p,primaryLang:e.target.value}))} className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"><option value="epic_cerner">Epic / Cerner EMR</option><option value="hl7_fhir">HL7 FHIR Integration Engines</option><option value="custom_saas">Custom Healthcare SaaS</option><option value="salesforce_health">Salesforce Health Cloud</option></select></div><div><label className="block text-xs font-semibold text-gray-300 mb-1.5">Years of Technical Implementation Experience</label><select value={formData.expYears} onChange={(e)=>setFormData(p=>({...p,expYears:e.target.value}))} className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"><option value="0-2">0 to 2 Years</option><option value="3-5">3 to 5 Years</option><option value="5-8">5 to 8 Years</option><option value="8+">8+ Years</option></select></div><div><label className="block text-xs font-semibold text-gray-300 mb-1.5">Do you have direct EMR/EHR system integration experience?</label><div className="flex gap-4">{['yes','no'].map(val=>(<button key={val} type="button" onClick={()=>setFormData(p=>({...p,cloudExp:val}))} className={`flex-1 border text-sm font-semibold py-2.5 rounded-xl capitalize transition-all cursor-pointer ${formData.cloudExp===val?'bg-brand-indigo/15 border-brand-indigo text-white':'border-brand-border text-gray-400 hover:border-gray-500'}`}>{val}</button>))}</div></div></div><div className="pt-4 flex justify-between"><button type="button" onClick={()=>setFormStep(1)} className="inline-flex items-center border border-brand-border text-gray-300 hover:text-white font-semibold px-5 py-3 rounded-xl transition-colors text-xs cursor-pointer">Back</button><button type="button" onClick={()=>setFormStep(3)} className="inline-flex items-center space-x-2 bg-brand-cyan text-brand-bg font-bold px-5 py-3 rounded-xl hover:opacity-90 transition-opacity text-xs cursor-pointer"><span>Review Application</span><ArrowRight className="w-3.5 h-3.5" /></button>{submitError && <p className="text-xs text-red-400 text-center mt-2">{submitError}</p>}</div></div>)}
                
                {formStep===3 && (<div className="space-y-5"><h3 className="font-display font-extrabold text-lg text-white">Review & Submit Application</h3><div className="space-y-4 text-xs font-mono"><div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-2"><p className="text-gray-500 uppercase text-[10px] tracking-wider mb-2 font-bold font-sans">Personal Profile</p><p className="text-gray-300"><span className="text-gray-500 font-sans">Name:</span> {formData.name}</p><p className="text-gray-300"><span className="text-gray-500 font-sans">Email:</span> {formData.email}</p>{formData.portfolioUrl&&<p className="text-gray-300"><span className="text-gray-500 font-sans">LinkedIn:</span> {formData.portfolioUrl}</p>}<p className="text-gray-300"><span className="text-gray-500 font-sans">Resume:</span> {formData.resumeName}</p></div><div className="bg-white/2 border border-white/5 p-4 rounded-xl space-y-2"><p className="text-gray-500 uppercase text-[10px] tracking-wider mb-2 font-bold font-sans">Experience Profile</p><p className="text-gray-300"><span className="text-gray-500 font-sans">Primary Focus:</span> <span className="capitalize">{formData.primaryLang.replace('_',' ')}</span></p><p className="text-gray-300"><span className="text-gray-500 font-sans">Experience:</span> {formData.expYears} years</p><p className="text-gray-300"><span className="text-gray-500 font-sans">EMR Integration:</span> {formData.cloudExp}</p></div></div><div className="pt-4 flex justify-between"><button type="button" onClick={()=>setFormStep(2)} className="inline-flex items-center border border-brand-border text-gray-300 hover:text-white font-semibold px-5 py-3 rounded-xl transition-colors text-xs cursor-pointer">Back</button><button type="button" disabled={isSubmitting} onClick={submitApplication} className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold px-6 py-3 rounded-xl hover:opacity-95 transition-opacity text-xs disabled:opacity-50 cursor-pointer">{isSubmitting?<><div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" /><span>Submitting application...</span></>:<><Send className="w-3.5 h-3.5" /><span>Submit Application</span></>}</button>{submitError && <p className="text-xs text-red-400 text-center mt-2">{submitError}</p>}</div></div>)}
              </>)}
            </div></motion.div>)}
        </AnimatePresence>
        <aside className="lg:col-span-4 space-y-6">
          <div className="glass-panel border border-brand-border rounded-3xl p-6 space-y-6"><h3 className="font-display font-extrabold text-base text-white">Technical Core</h3><div className="flex flex-wrap gap-2">{technicalSkills.map((skill,i)=>(<span key={i} className={`text-[10px] font-semibold px-2.5 py-1 rounded-md border tracking-wide uppercase ${skill.color}`}>{skill.name}</span>))}</div></div>
          <div className="glass-panel border border-brand-border rounded-3xl p-6 space-y-6"><div className="flex items-center space-x-2 text-white"><Shield className="w-4 h-4 text-brand-cyan" /><h3 className="font-display font-extrabold text-base">Systems You Will Work With</h3></div><div className="space-y-4">{techAreas.map((area,i)=>(<div key={i} className="flex space-x-3.5"><div className="w-8 h-8 rounded-xl bg-white/2 border border-white/5 flex items-center justify-center text-brand-cyan shrink-0 mt-0.5">{area.icon}</div><div><h4 className="text-xs font-semibold text-white">{area.title}</h4><p className="text-[11px] text-gray-400 leading-relaxed mt-0.5">{area.desc}</p></div></div>))}</div></div>
        </aside>
      </div>
    </div>
  </div>);
}
