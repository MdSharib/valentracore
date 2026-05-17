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
        <div className="w-full max-w-[120rem] mx-auto flex items-center justify-between gap-4 px-8 py-6">
          <div className="flex items-center gap-2 sm:gap-4 group cursor-pointer">
            {/* VC Masterpiece Logo Icon */}
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-surface-highlight to-background border border-surface-border backdrop-blur-xl shadow-[0_8px_32px_-12px_rgba(6,182,212,0.4)] overflow-hidden shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/20 via-transparent to-accent-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute -inset-[100%] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#14b8a6_100%)] opacity-20 group-hover:animate-[spin_4s_linear_infinite]" />
              <div className="absolute inset-[1px] bg-background/90 rounded-xl sm:rounded-2xl backdrop-blur-2xl" />

              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform duration-700 ease-out">
                <defs>
                  {/* Fluid Tech Gradient */}
                  <linearGradient id="vc-fluid" x1="18" y1="25" x2="83" y2="75" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="30%" stopColor="#2dd4bf" />
                    <stop offset="70%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#083344" />
                  </linearGradient>

                  {/* Deep Tech Gradient for Echo */}
                  <linearGradient id="vc-echo" x1="18" y1="25" x2="83" y2="75" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#14b8a6" />
                    <stop offset="100%" stopColor="#0891b2" />
                  </linearGradient>
                  
                  <filter id="glow-shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#06b6d4" floodOpacity="0.6"/>
                  </filter>
                </defs>

                {/* Echo / Glass Layer */}
                <path d="M 18 25 L 38 75 L 58 25 A 25 25 0 0 1 58 75" 
                      fill="none" 
                      stroke="url(#vc-echo)" 
                      strokeWidth="10" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      opacity="0.4" 
                      transform="translate(0, 4)" 
                      filter="blur(2px)"/>

                {/* Main Continuous Flow VC */}
                <path d="M 18 25 L 38 75 L 58 25 A 25 25 0 0 1 58 75" 
                      fill="none" 
                      stroke="url(#vc-fluid)" 
                      strokeWidth="10" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      filter="url(#glow-shadow)" />

                {/* The "Core" Element */}
                <circle cx="38" cy="42" r="5" fill="#ffffff" filter="drop-shadow(0 0 8px #ffffff)" />
                <circle cx="38" cy="42" r="10" fill="#2dd4bf" opacity="0.4" filter="blur(3px)" />
              </svg>
            </div>
            
            {/* Masterpiece Typography */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center tracking-[0.2em] leading-none uppercase">
                <span className="font-satoshi text-[16px] sm:text-[20px] md:text-[24px] font-light text-white drop-shadow-sm">
                  Valentra
                </span>
                <span className="font-satoshi text-[16px] sm:text-[20px] md:text-[24px] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-accent-teal via-accent-cyan to-white drop-shadow-md ml-1">
                  Core
                </span>
              </div>
            </div>
          </div>

          <nav className="hidden xl:flex items-center gap-8 text-[20px] leading-none font-medium mt-0.5">
            <a href="#platform" className="text-white hover:text-white/70 transition-all duration-300">Platform</a>
            <a href="#solutions" className="text-white hover:text-white/70 transition-all duration-300">Solutions</a>
            <a href="#how-it-works" className="text-white hover:text-white/70 transition-all duration-300">How it works</a>
            <a href="#pricing" className="text-white hover:text-white/70 transition-all duration-300">Pricing</a>
          </nav>

          <div className="hidden xl:flex items-center gap-4 mt-0.5">
            <ThemeToggle className="text-white border-white/20 hover:bg-white/10" />
            <a href="https://wa.me/917011359312" target="_blank" rel="noopener noreferrer" className="text-[20px] leading-none font-medium text-[#25D366] px-6 py-2.5 rounded-full border border-[#25D366] bg-transparent hover:bg-[#25D366]/10 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2">
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
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
            className="xl:hidden text-white p-2"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <div className="xl:hidden">
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
                <a href="https://wa.me/917011359312" target="_blank" rel="noopener noreferrer" className="w-full text-center text-[20px] font-medium py-4 text-[#25D366] bg-transparent border border-[#25D366] rounded-2xl hover:bg-[#25D366]/10 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Chat on WhatsApp
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
