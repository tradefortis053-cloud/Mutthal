"use client";

import React, { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqItems } from "@/data/courseData";
import { FadeIn, SectionBadge } from "@/components/ui/MotionPrimitives";

export function FaqSection() {
  const prefersReducedMotion = useReducedMotion();
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center max-w-2xl mx-auto">
          <SectionBadge label="Frequently Asked Questions" accent="blue" />
          <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-0.03em] leading-[1.12] text-[#0B1220]">
            Clear answers to common questions.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Everything you need to know about prerequisites, Order Flow &amp;
            DOM platforms, and course access.
          </p>
        </FadeIn>

        {/* Accordion List */}
        <div className="mt-12 divide-y divide-slate-900/[0.08] rounded-3xl border border-slate-900/[0.08] bg-[#FCFDFE] px-5 sm:px-8 shadow-card">
          {faqItems.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <FadeIn key={faq.id} delay={Math.min(idx * 0.035, 0.25)}>
                <div className="py-5 sm:py-6">
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`${faq.id}-answer`}
                    className="w-full flex items-center justify-between gap-6 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8] rounded-lg"
                  >
                    <span className="font-display text-base sm:text-[18px] font-semibold text-[#0B1220] tracking-tight">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
                        isOpen
                          ? "bg-[#0B1220] text-white border-[#0B1220] rotate-45"
                          : "bg-white text-slate-600 border-slate-900/10"
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`${faq.id}-answer`}
                        role="region"
                        initial={
                          prefersReducedMotion
                            ? { opacity: 1 }
                            : { height: 0, opacity: 0 }
                        }
                        animate={{ height: "auto", opacity: 1 }}
                        exit={
                          prefersReducedMotion
                            ? { opacity: 0 }
                            : { height: 0, opacity: 0 }
                        }
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pt-3.5 pr-8 text-[14.5px] sm:text-[15px] leading-relaxed text-slate-600">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
