"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const tabs = [
  { id: "website", label: "Website Experience" },
  { id: "whatsapp", label: "WhatsApp Booking" },
  { id: "ai", label: "AI Receptionist" },
  { id: "dashboard", label: "Dashboard" },
  { id: "analytics", label: "Analytics" },
];

export default function Section7_ProductInAction() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section className="py-32 w-full bg-surface border-y border-surface-border relative z-20" id="platform">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center w-full px-6 max-w-[90rem] mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-border/50 backdrop-blur-md border border-white/10 text-foreground mb-4 md:mb-6 font-semibold text-xs md:text-sm tracking-[0.2em] uppercase shadow-2xl"
          >
            <Sparkles className="w-4 h-4 text-accent-cyan" />
            <span>Platform Demo</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-[5rem] lg:text-[5.5rem] lg:leading-[1.05] font-display font-medium tracking-tight text-foreground max-w-5xl relative"
          >
            See what your clinic system <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-accent-cyan">looks like in action.</span>
          </motion.h2>
        </div>

        {/* Segmented Control */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",
                  isActive ? "text-background" : "text-primary-dim hover:text-foreground hover:bg-surface-highlight"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="pill"
                    className="absolute inset-0 bg-gradient-to-r from-accent-teal to-accent-cyan rounded-full shadow-[0_0_20px_rgba(20,184,166,0.3)]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Showcase Mockup Window */}
        <div className="w-full relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] rounded-[2rem] border border-white/10 bg-surface/30 backdrop-blur-3xl shadow-[0_20px_100px_-20px_rgba(20,184,166,0.2)] overflow-hidden group">
          {/* Background Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/10 via-transparent to-accent-cyan/10 opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="absolute inset-0">
            <AnimatePresence mode="wait">
              {activeTab === "website" && (
                <motion.div 
                  key="website"
                  initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src="/offer-screenshots/clinic-website.png"
                    alt="Clinic Website Experience"
                    className="w-full h-full object-contain opacity-95 transition-transform duration-1000 md:group-hover:scale-[1.02]"
                  />
                  {/* Subtle inner shadow to blend edges */}
                  <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.5)] pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
                </motion.div>
              )}

              {activeTab === "whatsapp" && (
                <motion.div 
                  key="whatsapp"
                  initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full flex flex-col justify-center items-center overflow-hidden bg-background/50 backdrop-blur-xl"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,211,102,0.1),transparent_70%)]" />
                  <img
                    src="/offer-screenshots/appointment.png"
                    alt="WhatsApp Booking"
                    className="w-full h-full object-contain opacity-95 transition-transform duration-1000 md:group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.5)] pointer-events-none" />
                </motion.div>
              )}

              {activeTab === "dashboard" && (
                <motion.div 
                  key="dashboard"
                  initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full p-4 md:p-8 flex items-center justify-center bg-background border-t border-white/5"
                >
                    <div className="w-full h-full flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto">
                      {/* Sidebar */}
                      <div className="hidden lg:flex w-64 bg-surface/50 border border-white/10 rounded-2xl p-6 flex-col gap-4 backdrop-blur-md">
                        <div className="w-32 h-8 bg-foreground/10 rounded-lg mb-6" />
                        <div className="w-full h-10 bg-accent-teal/20 active rounded-lg border border-accent-teal/30" />
                        <div className="w-full h-10 bg-foreground/5 rounded-lg" />
                        <div className="w-full h-10 bg-foreground/5 rounded-lg" />
                        <div className="w-full h-10 bg-foreground/5 rounded-lg" />
                        <div className="mt-auto w-full h-12 bg-foreground/10 rounded-lg" />
                      </div>
                      
                      {/* Main Content */}
                      <div className="flex-1 flex flex-col gap-6 h-full">
                        {/* Top Bar */}
                        <div className="w-full h-20 bg-surface/50 border border-white/10 rounded-2xl flex items-center justify-between px-6 backdrop-blur-md">
                           <div className="flex flex-col gap-2">
                             <div className="w-48 h-5 bg-foreground/20 rounded-md" />
                             <div className="w-32 h-3 bg-foreground/10 rounded-md" />
                           </div>
                           <div className="flex items-center gap-4">
                              <div className="w-10 h-10 bg-foreground/10 rounded-full" />
                              <div className="w-10 h-10 bg-gradient-to-tr from-accent-teal to-accent-cyan rounded-full shadow-lg shadow-accent-teal/20" />
                           </div>
                        </div>
                        
                        {/* Metrics Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                           {[...Array(4)].map((_, i) => (
                             <div key={i} className="h-28 bg-surface/50 border border-white/10 rounded-2xl p-5 flex flex-col justify-between backdrop-blur-md relative overflow-hidden group/card">
                               <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />
                               <div className="w-8 h-8 rounded-full bg-accent-teal/20 flex items-center justify-center border border-accent-teal/30" />
                               <div className="w-20 h-6 bg-foreground/20 rounded-md mt-auto" />
                               <div className="w-12 h-3 bg-green-500/50 rounded-md mt-2" />
                             </div>
                           ))}
                        </div>

                        {/* Chart Area */}
                        <div className="flex-1 bg-surface/50 border border-white/10 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden">
                           <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />
                           <div className="w-40 h-6 bg-foreground/20 rounded-md mb-8" />
                           
                           {/* Faux Chart */}
                           <div className="absolute bottom-0 left-0 right-0 h-2/3 max-w-[90%] mx-auto flex items-end justify-between px-6 pb-6">
                              {[30, 50, 40, 70, 60, 90, 80, 100].map((h, i) => (
                                <motion.div 
                                  key={i} 
                                  initial={{ height: 0 }}
                                  animate={{ height: `${h}%` }}
                                  transition={{ delay: 0.2 + i * 0.05, duration: 0.5, type: "spring" }}
                                  className="w-[8%] bg-gradient-to-t from-accent-teal to-accent-cyan rounded-t-sm relative opacity-80"
                                >
                                  <div className="absolute top-0 w-full h-1 bg-white opacity-50 shadow-[0_0_10px_white]" />
                                </motion.div>
                              ))}
                           </div>
                        </div>
                      </div>
                    </div>
                </motion.div>
              )}

              {activeTab === "ai" && (
                <motion.div 
                  key="ai"
                  initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden bg-background"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.15),transparent_50%)]" />
                  <img
                    src="/offer-screenshots/AI_receptionist.png"
                    alt="AI Receptionist"
                    className="w-full h-full object-contain opacity-95 transition-transform duration-1000 md:group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.5)] pointer-events-none" />
                </motion.div>
              )}

              {activeTab === "analytics" && (
                <motion.div 
                  key="analytics"
                  initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full p-4 md:p-8 flex items-center justify-center bg-background border-t border-white/5"
                >
                  <div className="w-full h-full max-w-7xl mx-auto flex flex-col gap-6">
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="md:col-span-2 bg-surface/50 border border-white/10 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden flex flex-col">
                        <div className="w-48 h-6 bg-foreground/20 rounded-md mb-8" />
                        <div className="flex-1 flex flex-col justify-end gap-2 px-8 pb-4 relative">
                          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_40px] opacity-20 pointer-events-none" />
                          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                             <motion.path
                               initial={{ pathLength: 0, opacity: 0 }}
                               animate={{ pathLength: 1, opacity: 1 }}
                               transition={{ duration: 1.5, ease: "easeInOut" }}
                               d="M0,80 Q20,60 40,70 T80,40 T100,20"
                               fill="none"
                               stroke="url(#gradient)"
                               strokeWidth="3"
                               className="drop-shadow-[0_0_15px_rgba(20,184,166,0.5)]"
                             />
                             <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                   <stop offset="0%" stopColor="#14B8A6" />
                                   <stop offset="100%" stopColor="#06B6D4" />
                                </linearGradient>
                             </defs>
                          </svg>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-6">
                        <div className="flex-1 bg-surface/50 border border-white/10 rounded-2xl p-6 backdrop-blur-md flex flex-col">
                           <div className="w-32 h-5 bg-foreground/20 rounded-md mb-6" />
                           <div className="relative flex-1 flex items-center justify-center">
                              <motion.div 
                                initial={{ rotate: 0 }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="w-32 h-32 rounded-full border-8 border-surface-border border-t-accent-teal border-r-accent-cyan shadow-[0_0_30px_rgba(20,184,166,0.3)]" 
                              />
                              <div className="absolute inset-0 flex items-center justify-center font-bold text-2xl">85%</div>
                           </div>
                        </div>
                        <div className="flex-1 bg-surface/50 border border-white/10 rounded-2xl p-6 backdrop-blur-md flex flex-col gap-4">
                           <div className="w-32 h-5 bg-foreground/20 rounded-md mb-2" />
                           {[80, 45, 60].map((w, i) => (
                             <div key={i} className="w-full max-w-xs space-y-2">
                               <div className="flex justify-between">
                                 <div className="w-16 h-3 bg-foreground/10 rounded-md" />
                                 <div className="w-8 h-3 bg-foreground/10 rounded-md" />
                               </div>
                               <div className="w-full h-2 bg-surface-border rounded-full overflow-hidden">
                                 <motion.div 
                                   initial={{ width: 0 }}
                                   animate={{ width: `${w}%` }}
                                   transition={{ duration: 1, delay: i * 0.2 }}
                                   className="h-full bg-gradient-to-r from-accent-teal to-accent-cyan" 
                                 />
                               </div>
                             </div>
                           ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
