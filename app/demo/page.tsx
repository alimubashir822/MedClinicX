"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Monitor, 
  Smartphone, 
  ExternalLink, 
  RefreshCw, 
  Sparkles, 
  Activity, 
  Lock, 
  ShieldCheck,
  Globe
} from "lucide-react";

interface DemoItem {
  id: string;
  name: string;
  tag: string;
  desc: string;
  url: string;
  techStack: string[];
  features: string[];
}

export default function DemoPage() {
  const demos: DemoItem[] = [
    {
      id: "patient-iq",
      name: "Patient IQ",
      tag: "EHR Sync & Imaging",
      desc: "A unified portal enabling patients to view diagnostics, consult securely with care providers, manage installment plans, and access physical files.",
      url: "https://patient-iq.vercel.app/",
      techStack: ["Next.js", "Tailwind CSS", "Prisma"],
      features: ["Interactive DICOM scans", "Milestone Installment Plans", "Biometric Authentication Simulator"]
    },
    {
      id: "smile-os",
      name: "Smile OS",
      tag: "Dental & Aesthetics",
      desc: "Sleek, clinical portal tailored for dental networks and aesthetic surgeons. Offers patient check-ins, treatment tracking, and clinic forms.",
      url: "https://smile-os-theta.vercel.app/",
      techStack: ["Vite", "React", "Vanilla CSS"],
      features: ["Custom Treatment Schedules", "Visual Intraoral Map", "Paperless Intakes Integrator"]
    },
    {
      id: "caredesk",
      name: "CareDesk",
      tag: "Care Delivery & Automation",
      desc: "An intelligent clinician control desk alongside an automated AI receptionist chatbot to triage symptom streams, recall checkups, and auto-refill schedules.",
      url: "https://caredesk-sigma.vercel.app/",
      techStack: ["React", "WebRTC", "Clinical LLMs"],
      features: ["Intelligent Patient Triage Queue", "Live Chat Sync", "Vitals Telemetry Monitors"]
    }
  ];

  const [selectedDemo, setSelectedDemo] = useState<DemoItem>(demos[0]);
  const [desktopKey, setDesktopKey] = useState(0);
  const [mobileKey, setMobileKey] = useState(0);
  const [activeViewMode, setActiveViewMode] = useState<"both" | "desktop" | "mobile">("both");

  // Force reloads the iframe by incrementing key state
  const handleRefreshDesktop = () => setDesktopKey(prev => prev + 1);
  const handleRefreshMobile = () => setMobileKey(prev => prev + 1);

  const handleDemoSelect = (demo: DemoItem) => {
    setSelectedDemo(demo);
    // Reset key states to trigger load animations
    setDesktopKey(prev => prev + 1);
    setMobileKey(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-brand-bg pt-24 md:pt-28 pb-16 relative overflow-hidden">
      {/* Background ambient elements */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-brand-indigo/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-brand-cyan/15 rounded-full px-3.5 py-1 mb-5">
            <Activity className="w-4 h-4 text-brand-cyan animate-pulse" />
            <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider">Live Showroom</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            Interactive Healthcare Product Demonstrations
          </h1>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            Test and interact with our production-ready dental portals, hospital EHR systems, and triage management desks in simulated real-time browser contexts.
          </p>
        </div>

        {/* Demo Selector Panel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {demos.map((demo) => {
            const isSelected = selectedDemo.id === demo.id;
            return (
              <button
                key={demo.id}
                onClick={() => handleDemoSelect(demo)}
                className={`glass-panel p-6 rounded-2xl border text-left flex flex-col justify-between transition-all cursor-pointer hover:scale-[1.01] active:scale-[0.99] ${
                  isSelected 
                    ? "border-brand-cyan/40 bg-brand-cyan/5 shadow-lg shadow-brand-cyan/5" 
                    : "border-brand-border hover:border-brand-border/60"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-bold text-brand-cyan uppercase tracking-wider bg-brand-cyan/10 border border-brand-cyan/20 px-2.5 py-0.5 rounded-full">
                      {demo.tag}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
                    )}
                  </div>
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-brand-cyan transition-colors">
                    {demo.name}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {demo.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-brand-border/50 flex flex-wrap gap-1.5">
                  {demo.techStack.map((tech) => (
                    <span key={tech} className="text-[9px] font-semibold text-gray-500 bg-brand-bg/50 px-2 py-0.5 rounded border border-brand-border">
                      {tech}
                    </span>
                  ))}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Demo Info / Controls */}
        <div className="glass-panel p-6 rounded-2xl border border-brand-border mb-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <h2 className="font-display font-bold text-xl text-white">Active Simulation: {selectedDemo.name}</h2>
            </div>
            <p className="text-xs text-gray-400">
              Target Link: <a href={selectedDemo.url} target="_blank" rel="noreferrer" className="text-brand-cyan hover:underline inline-flex items-center gap-0.5 font-mono">{selectedDemo.url} <ExternalLink className="w-3 h-3" /></a>
            </p>
          </div>

          {/* View Toggles & Actions */}
          <div className="flex flex-wrap items-center gap-3 self-stretch lg:self-auto w-full lg:w-auto">
            {/* View Mode Toggle */}
            <div className="bg-brand-bg/60 p-1.5 rounded-xl border border-brand-border flex items-center gap-1 text-xs font-semibold text-gray-400">
              <button
                onClick={() => setActiveViewMode("both")}
                className={`px-3 py-1.5 rounded-lg flex items-center space-x-1.5 transition-all cursor-pointer ${
                  activeViewMode === "both" ? "bg-brand-cyan text-brand-bg font-bold" : "hover:text-white"
                }`}
              >
                <span>Side-by-Side</span>
              </button>
              <button
                onClick={() => setActiveViewMode("desktop")}
                className={`px-3 py-1.5 rounded-lg flex items-center space-x-1.5 transition-all cursor-pointer ${
                  activeViewMode === "desktop" ? "bg-brand-cyan text-brand-bg font-bold" : "hover:text-white"
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Desktop</span>
              </button>
              <button
                onClick={() => setActiveViewMode("mobile")}
                className={`px-3 py-1.5 rounded-lg flex items-center space-x-1.5 transition-all cursor-pointer ${
                  activeViewMode === "mobile" ? "bg-brand-cyan text-brand-bg font-bold" : "hover:text-white"
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile</span>
              </button>
            </div>

            {/* External Direct Link */}
            <a
              href={selectedDemo.url}
              target="_blank"
              rel="noreferrer"
              className="flex-grow sm:flex-grow-0 inline-flex justify-center items-center space-x-2 bg-gradient-to-r from-brand-cyan to-brand-indigo hover:opacity-95 text-white font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-md shadow-brand-cyan/10"
            >
              <span>Launch Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Live Simulator Viewport Wrapper */}
        <div className="relative overflow-hidden w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedDemo.id + "-" + activeViewMode}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="w-full"
            >
              {/* Desktop Only View Mode */}
              {activeViewMode === "desktop" && (
                <div className="w-full max-w-5xl mx-auto">
                  <DesktopSimulator url={selectedDemo.url} keyState={desktopKey} onRefresh={handleRefreshDesktop} />
                </div>
              )}

              {/* Mobile Only View Mode */}
              {activeViewMode === "mobile" && (
                <div className="flex justify-center w-full">
                  <MobileSimulator url={selectedDemo.url} keyState={mobileKey} onRefresh={handleRefreshMobile} />
                </div>
              )}

              {/* Side-by-Side Dual Simulator Mode */}
              {activeViewMode === "both" && (
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
                  {/* Desktop Simulator takes 8 columns on large viewports */}
                  <div className="xl:col-span-8 w-full order-1">
                    <div className="border-b border-brand-border pb-3 mb-4 flex justify-between items-center">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center space-x-1.5">
                        <Monitor className="w-4 h-4 text-brand-cyan" />
                        <span>Desktop Workstation View</span>
                      </span>
                      <button onClick={handleRefreshDesktop} className="text-xs text-gray-500 hover:text-white flex items-center space-x-1">
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span>Reset Workstation</span>
                      </button>
                    </div>
                    <DesktopSimulator url={selectedDemo.url} keyState={desktopKey} onRefresh={handleRefreshDesktop} />
                  </div>

                  {/* Mobile Simulator takes 4 columns on large viewports */}
                  <div className="xl:col-span-4 w-full flex flex-col items-center order-2">
                    <div className="w-full border-b border-brand-border pb-3 mb-4 flex justify-between items-center">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center space-x-1.5">
                        <Smartphone className="w-4 h-4 text-brand-cyan" />
                        <span>Mobile Viewport</span>
                      </span>
                      <button onClick={handleRefreshMobile} className="text-xs text-gray-500 hover:text-white flex items-center space-x-1">
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span>Reset Device</span>
                      </button>
                    </div>
                    <MobileSimulator url={selectedDemo.url} keyState={mobileKey} onRefresh={handleRefreshMobile} />
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom checklist key features block */}
        <section className="mt-16 glass-panel border border-brand-border p-8 sm:p-12 rounded-3xl">
          <div className="max-w-3xl">
            <h3 className="font-display font-bold text-2xl text-white mb-6 flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-brand-cyan" />
              <span>Engineered Core Integration Features</span>
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-8">
              Each portal utilizes next-generation standards configured specifically for security, conversion optimization, and lightweight browser integration.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-gray-300">
              <div className="flex items-start space-x-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-1.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-1">Row-Level Database Security</h4>
                  <p className="text-gray-500 leading-relaxed">Isolated schemas structured so clinic tenants cannot read cross-tenant charts.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-1.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-1">One-Tap Biometric Gateways</h4>
                  <p className="text-gray-500 leading-relaxed">Mobile layout integrations designed to support FaceID/TouchID local browser authentication.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-1.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-1">WebRTC Streaming Engines</h4>
                  <p className="text-gray-500 leading-relaxed">Secure peer-to-peer audio-video pathways allowing low-latency telehealth consults.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-1.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-1">HL7 FHIR API Interoperability</h4>
                  <p className="text-gray-500 leading-relaxed">Pre-mapped ingestion pathways reading records straight from epic or cerner databanks.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

/* ============================================================================
   Desktop Web Browser Simulator Mockup
   ============================================================================ */
interface SimulatorProps {
  url: string;
  keyState: number;
  onRefresh: () => void;
}

function DesktopSimulator({ url, keyState, onRefresh }: SimulatorProps) {
  return (
    <div className="w-full glass-panel border border-brand-border rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[560px]">
      {/* Mock browser header top bar */}
      <div className="bg-[#0b0f19] px-4 py-3 border-b border-brand-border flex items-center justify-between">
        {/* Mock OS Window Controls (Close/Minimize/Maximize) */}
        <div className="flex items-center space-x-2 w-20">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>

        {/* Mock Browser Address bar */}
        <div className="flex-grow max-w-xl bg-brand-bg/80 border border-brand-border rounded-lg px-4 py-1.5 flex items-center justify-between text-xs text-gray-400 font-medium select-none">
          <div className="flex items-center space-x-1.5 truncate">
            <Lock className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span className="text-emerald-500 font-semibold text-[10px] uppercase tracking-wider shrink-0">Secure</span>
            <span className="text-gray-500 shrink-0">|</span>
            <span className="truncate text-gray-400 font-mono text-[11px]">{url}</span>
          </div>
          <button 
            onClick={onRefresh}
            className="hover:text-white transition-colors cursor-pointer shrink-0 ml-2"
            title="Refresh frame"
          >
            <RefreshCw className="w-3 h-3" />
          </button>
        </div>

        {/* Mock Menu Icon placeholders */}
        <div className="flex justify-end items-center space-x-2 w-20 text-gray-500">
          <Globe className="w-4 h-4" />
        </div>
      </div>

      {/* Simulator active iframe */}
      <div className="flex-grow bg-[#050b14] relative h-full w-full">
        <iframe
          key={keyState}
          src={url}
          className="w-full h-full border-none"
          title="Desktop Portal Mock"
          loading="lazy"
        />
      </div>
    </div>
  );
}

/* ============================================================================
   Mobile Smartphone Device Simulator Mockup
   ============================================================================ */
function MobileSimulator({ url, keyState, onRefresh }: SimulatorProps) {
  return (
    <div className="relative mx-auto border-[12px] border-gray-800 bg-gray-900 rounded-[42px] shadow-2xl w-[320px] h-[580px] overflow-hidden flex flex-col shrink-0">
      {/* Top Camera Speaker Notch / Dynamic Island */}
      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-30 flex items-center justify-center">
        <div className="w-2.5 h-2.5 rounded-full bg-gray-900 border border-gray-800 ml-auto mr-4" />
      </div>

      {/* Mobile Screen Status Bar */}
      <div className="bg-[#050b14] h-10 px-6 flex justify-between items-center text-[10px] font-bold text-gray-400 z-20 shrink-0 select-none">
        <span>09:41</span>
        <div className="flex items-center space-x-1.5">
          {/* Signal dots */}
          <div className="flex items-end space-x-0.5 h-2.5">
            <div className="w-0.75 h-1 bg-gray-400 rounded-full" />
            <div className="w-0.75 h-1.5 bg-gray-400 rounded-full" />
            <div className="w-0.75 h-2 bg-gray-400 rounded-full" />
            <div className="w-0.75 h-2.5 bg-gray-400 rounded-full" />
          </div>
          {/* WiFi icon mock */}
          <span className="text-[9px]">LTE</span>
          {/* Battery mock */}
          <div className="w-5 h-2.5 border border-gray-400 rounded-sm p-0.5 flex items-center">
            <div className="w-full h-full bg-gray-400 rounded-2xs" />
          </div>
        </div>
      </div>

      {/* Mobile Simulator browser frame address box */}
      <div className="bg-[#0b0f19] px-3 py-1.5 border-b border-brand-border flex items-center justify-between z-20 shrink-0 select-none">
        <div className="flex-grow bg-brand-bg/80 border border-brand-border rounded-md px-2.5 py-1 flex items-center justify-between text-[10px] text-gray-500 font-mono">
          <span className="truncate">{url.replace("https://", "")}</span>
          <button onClick={onRefresh} className="hover:text-white transition-colors cursor-pointer shrink-0 ml-1.5">
            <RefreshCw className="w-2.5 h-2.5" />
          </button>
        </div>
      </div>

      {/* Mobile Simulator active iframe */}
      <div className="flex-grow bg-[#050b14] relative w-full h-full">
        <iframe
          key={keyState}
          src={url}
          className="w-full h-full border-none"
          title="Mobile Portal Mock"
          loading="lazy"
        />
      </div>

      {/* Screen bottom bar / home bar */}
      <div className="bg-[#050b14] h-5.5 flex justify-center items-center z-20 shrink-0 pb-1 select-none">
        <div className="w-28 h-1 bg-gray-600 rounded-full" />
      </div>
    </div>
  );
}
