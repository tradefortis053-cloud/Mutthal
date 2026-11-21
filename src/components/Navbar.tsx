"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/data/courseData";
import { BrandLogoMark, MagneticButton } from "@/components/ui/MotionPrimitives";

interface NavbarProps {
  onOpenEnroll?: () => void;
}

export function Navbar({ onOpenEnroll }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);

      const sections = ["home", "about", "curriculum", "preview", "faqs"];
      let current = "#home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            current = `#${id}`;
          }
        }
      }
      setActiveHref(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "bg-white/86 backdrop-blur-xl border-b border-slate-900/[0.07] shadow-[0_1px_12px_rgba(11,18,32,0.04)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          className="flex items-center justify-between"
          aria-label="Primary Navigation"
        >
          {/* Brand Logo */}
          <a
            href="#home"
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] rounded-lg"
          >
            <BrandLogoMark className="w-8 h-8 transition-transform duration-200 group-hover:scale-105" />
            <span className="font-display text-sm sm:text-[15px] font-bold tracking-tight text-[#0B1220]">
              {siteConfig.brandName}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 rounded-full bg-slate-900/[0.03] border border-slate-900/[0.06] p-1">
            {siteConfig.navigation.map((item) => {
              const isActive = activeHref === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-1.5 text-[13.5px] font-medium rounded-full transition-colors duration-200 ${
                    isActive
                      ? "text-[#0B1220]"
                      : "text-slate-600 hover:text-[#0B1220]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId={prefersReducedMotion ? undefined : "nav-pill"}
                      className="absolute inset-0 rounded-full bg-white shadow-[0_1px_3px_rgba(11,18,32,0.08)] border border-slate-900/[0.06]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Right-side CTA */}
          <div className="hidden md:flex items-center gap-3">
            <MagneticButton
              href="#pricing"
              onClick={onOpenEnroll}
              variant="primary"
              className="px-5 py-2.5 text-[13.5px]"
            >
              <span>Enroll Now</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </MagneticButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-xl text-[#0B1220] hover:bg-slate-100 border border-slate-900/10 transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile Dropdown Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden border-t border-slate-900/[0.06] bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 shadow-lg"
          >
            <div className="flex flex-col space-y-1">
              {siteConfig.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`px-3.5 py-2.5 rounded-xl text-[15px] font-medium transition-colors ${
                    activeHref === item.href
                      ? "bg-slate-100 text-[#0B1220]"
                      : "text-slate-600 hover:bg-slate-50 hover:text-[#0B1220]"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-slate-900/[0.06]">
                <a
                  href="#pricing"
                  onClick={() => {
                    handleNavClick();
                    onOpenEnroll?.();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#0B1220] text-white px-5 py-3 text-sm font-medium shadow-sm"
                >
                  <span>Enroll Now</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
