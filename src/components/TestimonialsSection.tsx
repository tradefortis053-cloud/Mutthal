"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Info, Star, User } from "lucide-react";
import { sampleTestimonials } from "@/data/courseData";
import { FadeIn, SectionBadge } from "@/components/ui/MotionPrimitives";

export function TestimonialsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header + Honest Sample Notice */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <FadeIn className="max-w-2xl">
            <SectionBadge label="Student Feedback" accent="yellow" />
            <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-0.03em] leading-[1.12] text-[#0B1220]">
              Structured for clarity. Designed for lasting comprehension.
            </h2>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="inline-flex items-center gap-2 rounded-2xl bg-[#FEF7E0]/70 border border-[#E37400]/30 px-4 py-2.5">
              <Info className="w-4 h-4 text-[#B06000] shrink-0" />
              <span className="text-xs font-medium text-[#7A4300]">
                <strong>Sample Layout Placeholders:</strong> Replace with
                verified student reviews once collected.
              </span>
            </div>
          </FadeIn>
        </div>

        {/* 3 Sample Testimonial Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {sampleTestimonials.map((item, idx) => (
            <FadeIn key={item.id} delay={idx * 0.07}>
              <motion.article
                whileHover={prefersReducedMotion ? undefined : { y: -3 }}
                transition={{ duration: 0.22 }}
                className="h-full flex flex-col justify-between rounded-3xl bg-[#FCFDFE] border border-slate-900/[0.08] p-7 shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div>
                  {/* Top Row: Star Rating + Sample Tag */}
                  <div className="flex items-center justify-between gap-2">
                    <div
                      className="flex items-center gap-1"
                      aria-label={`${item.rating} out of 5 stars sample design`}
                    >
                      {Array.from({ length: item.rating }).map((_, sIdx) => (
                        <Star
                          key={sIdx}
                          className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]"
                        />
                      ))}
                    </div>
                    <span className="rounded-full bg-slate-100 border border-slate-900/[0.07] px-2.5 py-0.5 font-mono text-[10px] font-semibold text-slate-500">
                      SAMPLE CARD
                    </span>
                  </div>

                  {/* Feedback Placeholder Copy */}
                  <p className="mt-5 text-[14.5px] leading-relaxed text-slate-600 italic">
                    &ldquo;{item.feedback}&rdquo;
                  </p>
                </div>

                {/* Profile Image Placeholder + Name Placeholder */}
                <div className="mt-7 pt-5 border-t border-slate-900/[0.06] flex items-center gap-3.5">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F1F4F9] border border-slate-900/10 text-slate-500"
                    aria-label="Student profile image placeholder"
                  >
                    <User className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#0B1220] truncate">
                      {item.namePlaceholder}
                    </p>
                    <p className="text-xs text-slate-500 truncate">
                      {item.rolePlaceholder}
                    </p>
                  </div>
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
