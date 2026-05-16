"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "font-satoshi fixed top-0 inset-x-0 z-50 w-full transition-all duration-500",
          scrolled ? "bg-black/95 backdrop-blur-lg border-b border-surface-border" : "bg-black/50 backdrop-blur-sm"
        )}
      >
        <div className="w-full max-w-[90rem] mx-auto flex items-center justify-between gap-4 px-8 py-6">
          <div className="font-satoshi font-semibold text-[30px] leading-none tracking-wide flex items-center gap-2 text-white">
            <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-black" />
            </div>
            ValentraCore
          </div>

          <nav className="hidden md:flex items-center gap-8 text-[20px] leading-none font-medium mt-0.5">
            <a href="#platform" className="text-white hover:text-white/70 transition-all duration-300">Platform</a>
            <a href="#solutions" className="text-white hover:text-white/70 transition-all duration-300">Solutions</a>
            <a href="#how-it-works" className="text-white hover:text-white/70 transition-all duration-300">How it works</a>
            <a href="#pricing" className="text-white hover:text-white/70 transition-all duration-300">Pricing</a>
          </nav>

          <div className="hidden md:flex items-center gap-4 mt-0.5">
            <ThemeToggle className="text-white border-white/20 hover:bg-white/10" />
            <a href="https://wa.me/917011359312" target="_blank" rel="noopener noreferrer" className="text-[20px] leading-none font-medium text-[#25D366] px-6 py-2.5 rounded-full border border-[#25D366] bg-transparent hover:bg-[#25D366]/10 transition-all duration-300 active:scale-95 flex items-center justify-center">
              Connect on WhatsApp
            </a>
            <a href="#contact" className="relative group flex items-center justify-center px-8 py-3 text-[18px] font-semibold text-background rounded-full transition-all duration-500 active:scale-95">
              {/* Animated outer blur glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-teal to-accent-cyan rounded-full blur-[12px] opacity-40 group-hover:opacity-80 group-hover:blur-[18px] transition-all duration-500" />
              
              {/* Core button background */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-teal to-accent-cyan rounded-full" />
              
              {/* Top glass highlight (creates 3D volume) */}
              <div className="absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-white/40 to-transparent rounded-t-full" />
              
              {/* Border ring */}
              <div className="absolute inset-0 border border-white/40 rounded-full" />

              <span className="relative z-10 flex items-center gap-2 tracking-wide drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
                Book Demo <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>
          </div>

          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <div className="md:hidden">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-2xl flex flex-col pt-24 px-8 pb-6"
            >
              <button 
                className="absolute top-6 right-8 text-foreground p-2"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
              <div className="flex flex-col gap-6 text-2xl font-satoshi font-medium mt-12">
                <a href="#platform" onClick={() => setIsOpen(false)} className="w-fit text-foreground hover:text-primary-dim transition-all">Platform</a>
                <a href="#solutions" onClick={() => setIsOpen(false)} className="w-fit text-foreground hover:text-primary-dim transition-all">Solutions</a>
                <a href="#how-it-works" onClick={() => setIsOpen(false)} className="w-fit text-foreground hover:text-primary-dim transition-all">How it works</a>
                <a href="#pricing" onClick={() => setIsOpen(false)} className="w-fit text-foreground hover:text-primary-dim transition-all">Pricing</a>
              </div>
              <div className="mt-8 flex items-center justify-center">
                <ThemeToggle />
              </div>
              <div className="mt-auto flex flex-col gap-4">
                <a href="https://wa.me/917011359312" target="_blank" rel="noopener noreferrer" className="w-full text-center text-[20px] font-medium py-4 text-[#25D366] bg-transparent border border-[#25D366] rounded-2xl hover:bg-[#25D366]/10 transition-all active:scale-[0.98] flex items-center justify-center">
                  Connect on WhatsApp
                </a>
                <a href="#contact" onClick={() => setIsOpen(false)} className="relative group w-full flex items-center justify-center text-[20px] font-semibold py-4 rounded-2xl active:scale-[0.98] transition-all">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-teal to-accent-cyan rounded-2xl blur-[12px] opacity-40 group-hover:opacity-80 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-teal to-accent-cyan rounded-2xl" />
                  <div className="absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-white/30 to-transparent rounded-t-2xl pointer-events-none" />
                  <div className="absolute inset-0 border border-white/40 rounded-2xl pointer-events-none" />
                  <span className="relative z-10 flex items-center gap-2 text-background tracking-wide drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
                    Book Demo <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
