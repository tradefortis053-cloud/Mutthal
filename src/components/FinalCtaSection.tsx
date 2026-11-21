"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { FadeIn, MagneticButton } from "@/components/ui/MotionPrimitives";

interface FinalCtaSectionProps {
  onStartLearning?: () => void;
}

export function FinalCtaSection({ onStartLearning }: FinalCtaSectionProps) {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[32px] bg-[#0B1220] text-white px-6 py-16 sm:px-14 sm:py-20 text-center shadow-elevated">
            {/* Subtle restrained architectural grid inside dark slate card */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundSize: "36px 36px",
                backgroundImage:
                  "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
              }}
              aria-hidden="true"
            />

            {/* Delicate subtle blue glow at top center */}
            <div
              className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[220px] rounded-full bg-[#1A73E8]/20 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3.5 py-1 text-[11px] font-semibold tracking-[0.12em] uppercase text-slate-200 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-[#34A853]" />
                <span>Order Flow &amp; DOM Mastery</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-[-0.03em] leading-[1.1] text-white">
                Stop Guessing. Start Understanding Market Activity.
              </h2>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300">
                Build a deeper understanding of market behavior through
                structured Order Flow and DOM education.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <MagneticButton
                  href="#pricing"
                  onClick={onStartLearning}
                  variant="blue"
                  className="px-8 py-4 text-[15px]"
                >
                  <span>Start Learning Today</span>
                  <ArrowRight className="w-4 h-4" />
                </MagneticButton>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
