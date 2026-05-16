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
    <section className="py-32 w-full bg-surface dark:bg-[#030303] border-y border-surface-border relative z-20" id="platform">
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
        <div className="w-full relative rounded-[2rem] border border-white/10 bg-surface/30 backdrop-blur-3xl shadow-[0_20px_100px_-20px_rgba(20,184,166,0.2)] overflow-hidden group transition-all duration-500">
          {/* Background Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/10 via-transparent to-accent-cyan/10 opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="relative w-full">
            <AnimatePresence mode="wait">
              {activeTab === "website" && (
                <motion.div 
                  key="website"
                  initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full flex items-center justify-center"
                >
                  <img
                    src="/offer-screenshots/clinic-website.png"
                    alt="Clinic Website Experience"
                    className="w-full h-auto object-contain opacity-95 transition-transform duration-1000 md:group-hover:scale-[1.02]"
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
                  className="relative w-full flex flex-col justify-center items-center overflow-hidden bg-background/50 backdrop-blur-xl"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,211,102,0.1),transparent_70%)]" />
                  <img
                    src="/offer-screenshots/appointment.png"
                    alt="WhatsApp Booking"
                    className="w-full h-auto object-contain opacity-95 transition-transform duration-1000 md:group-hover:scale-[1.02]"
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
                  className="relative w-full flex items-center justify-center overflow-hidden bg-background"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.15),transparent_50%)]" />
                  <img
                    src="/offer-screenshots/clinic_dashboard.png"
                    alt="Clinic Dashboard"
                    className="w-full h-auto object-contain opacity-95 transition-transform duration-1000 md:group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.5)] pointer-events-none" />
                </motion.div>
              )}

              {activeTab === "ai" && (
                <motion.div 
                  key="ai"
                  initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full flex items-center justify-center overflow-hidden bg-background"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.15),transparent_50%)]" />
                  <img
                    src="/offer-screenshots/AI_receptionist.png"
                    alt="AI Receptionist"
                    className="w-full h-auto object-contain opacity-95 transition-transform duration-1000 md:group-hover:scale-[1.02]"
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
                  className="relative w-full flex items-center justify-center overflow-hidden bg-background"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.15),transparent_50%)]" />
                  <img
                    src="/offer-screenshots/clinic_analytics.png"
                    alt="Clinic Analytics"
                    className="w-full h-auto object-contain opacity-95 transition-transform duration-1000 md:group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.5)] pointer-events-none" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
