"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Clock,
  Layers,
  ListChecks,
  Shield,
  Users,
} from "lucide-react";
import { siteConfig } from "@/data/courseData";
import { FadeIn, SectionBadge } from "@/components/ui/MotionPrimitives";

export function WhyChooseBentoSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="max-w-3xl">
          <SectionBadge label="Why Choose This Course" accent="blue" />
          <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-0.03em] leading-[1.12] text-[#0B1220]">
            Built like a modern analytical system—not a hype-driven seminar.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Every lesson focuses on repeatable chart mechanics, transparent
            order-book concepts, and disciplined risk structure.
          </p>
        </FadeIn>

        {/* Refined 12-Column SaaS Bento Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* Card 1: Practical Chart-Based Learning (7 cols) */}
          <FadeIn className="md:col-span-6 lg:col-span-7">
            <motion.div
              whileHover={prefersReducedMotion ? undefined : { y: -3 }}
              transition={{ duration: 0.22 }}
              className="h-full rounded-3xl bg-[#F8F9FB] border border-slate-900/[0.08] p-7 sm:p-8 flex flex-col justify-between overflow-hidden shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-900/[0.08] px-3 py-1 text-xs font-semibold text-[#1A73E8]">
                  <BarChart3 className="w-3.5 h-3.5" />
                  Practical Chart-Based Learning
                </div>
                <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold text-[#0B1220] tracking-tight">
                  Learn directly on real market charts—never abstract slides alone.
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-slate-600 max-w-xl">
                  Concepts are introduced with crisp visual diagrams and
                  immediately demonstrated on recorded Footprint, Volume Profile,
                  and DOM charts so you see how liquidity behaves tick-by-tick.
                </p>
              </div>

              <div className="mt-7 rounded-2xl overflow-hidden border border-slate-900/[0.08] bg-white shadow-xs">
                <img
                  src="/images/bento-microstructure.jpg"
                  alt="3D architectural frosted glass layers representing market depth and order flow volume"
                  className="w-full h-52 sm:h-60 object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </FadeIn>

          {/* Card 2: Structured Educational Content (5 cols) */}
          <FadeIn delay={0.06} className="md:col-span-6 lg:col-span-5">
            <motion.div
              whileHover={prefersReducedMotion ? undefined : { y: -3 }}
              transition={{ duration: 0.22 }}
              className="h-full rounded-3xl bg-white border border-slate-900/[0.08] p-7 sm:p-8 flex flex-col justify-between shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#188038]/[0.08] px-3 py-1 text-xs font-semibold text-[#188038]">
                  <ListChecks className="w-3.5 h-3.5" />
                  Structured Educational Content
                </div>
                <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold text-[#0B1220] tracking-tight">
                  Zero skipped steps. A deliberate four-stage progression.
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-slate-600">
                  Each module unlocks the vocabulary and visual intuition needed
                  for the next—eliminating information overload.
                </p>
              </div>

              {/* SaaS Step Pipeline Widget */}
              <div className="mt-7 space-y-2.5">
                {[
                  {
                    step: "01",
                    title: "Auction Mechanics & Order Matching",
                    badge: "Foundation",
                  },
                  {
                    step: "02",
                    title: "DOM Depth & Queue Reading",
                    badge: "Liquidity",
                  },
                  {
                    step: "03",
                    title: "Footprint Clusters, Delta & Absorption",
                    badge: "Confirmation",
                  },
                  {
                    step: "04",
                    title: "Structure Alignment & Risk Execution",
                    badge: "Application",
                  },
                ].map((stage) => (
                  <div
                    key={stage.step}
                    className="flex items-center justify-between rounded-xl bg-[#F8F9FB] border border-slate-900/[0.06] px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#1A73E8]">
                        {stage.step}
                      </span>
                      <span className="text-xs sm:text-[13px] font-semibold text-[#0B1220]">
                        {stage.title}
                      </span>
                    </div>
                    <span className="text-[11px] font-medium text-slate-500 bg-white px-2.5 py-0.5 rounded-full border border-slate-900/[0.06]">
                      {stage.badge}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </FadeIn>

          {/* Card 3: Detailed DOM Explanations (4 cols) */}
          <FadeIn delay={0.1} className="md:col-span-3 lg:col-span-4">
            <motion.div
              whileHover={prefersReducedMotion ? undefined : { y: -3 }}
              transition={{ duration: 0.22 }}
              className="h-full rounded-3xl bg-white border border-slate-900/[0.08] p-7 flex flex-col justify-between shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#1A73E8]/[0.08] px-3 py-1 text-xs font-semibold text-[#1A73E8]">
                  <Layers className="w-3.5 h-3.5" />
                  Detailed DOM Explanations
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-[#0B1220] tracking-tight">
                  Demystifying the vertical price ladder.
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-slate-600">
                  Learn how to read Bid/Ask queue depth, liquidity pulling,
                  iceberg replenishment, and spread velocity without confusion.
                </p>
              </div>

              {/* Clean Mini DOM Anatomy Diagram */}
              <div className="mt-6 rounded-2xl bg-[#F8F9FB] border border-slate-900/[0.07] p-4 font-mono text-xs space-y-2">
                <div className="flex items-center justify-between text-[10.5px] text-slate-400 pb-1 border-b border-slate-200/70">
                  <span>BID QUEUE</span>
                  <span>INSIDE SPREAD</span>
                  <span>ASK QUEUE</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">—</span>
                  <span className="text-slate-700">24,502.5</span>
                  <span className="px-2 py-0.5 rounded bg-[#D93025]/12 text-[#D93025] font-semibold">
                    312 Ask
                  </span>
                </div>
                <div className="flex items-center justify-between bg-white rounded-lg px-2 py-1 border border-slate-200/80">
                  <span className="text-[#188038] font-semibold">245 Bid</span>
                  <span className="font-bold text-[#1A73E8]">24,500.0</span>
                  <span className="text-[#D93025] font-semibold">190 Ask</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded bg-[#188038]/12 text-[#188038] font-semibold">
                    410 Bid
                  </span>
                  <span className="text-slate-700">24,497.5</span>
                  <span className="text-slate-300">—</span>
                </div>
              </div>
            </motion.div>
          </FadeIn>

          {/* Card 4: Real-World Market Examples (4 cols) */}
          <FadeIn delay={0.14} className="md:col-span-3 lg:col-span-4">
            <motion.div
              whileHover={prefersReducedMotion ? undefined : { y: -3 }}
              transition={{ duration: 0.22 }}
              className="h-full rounded-3xl bg-white border border-slate-900/[0.08] p-7 flex flex-col justify-between shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#E37400]/[0.10] px-3 py-1 text-xs font-semibold text-[#B06000]">
                  <ArrowRight className="w-3.5 h-3.5" />
                  Real-World Market Examples
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-[#0B1220] tracking-tight">
                  Context-rich case studies—including no-trade days.
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-slate-600">
                  Study both clean directional setups and balanced rotational
                  sessions so you recognize when to engage and when to stand
                  aside.
                </p>
              </div>

              <div className="mt-6 rounded-2xl overflow-hidden border border-slate-900/[0.07] bg-[#F8F9FB]">
                <img
                  src="/images/og-cover.jpg"
                  alt="Layered frosted glass liquidity depth cards"
                  className="w-full h-36 object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </FadeIn>

          {/* Card 5: Risk Management Principles (4 cols) */}
          <FadeIn delay={0.18} className="md:col-span-6 lg:col-span-4">
            <motion.div
              whileHover={prefersReducedMotion ? undefined : { y: -3 }}
              transition={{ duration: 0.22 }}
              className="h-full rounded-3xl bg-[#0B1220] text-white p-7 flex flex-col justify-between shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs font-semibold text-[#81C995]">
                  <Shield className="w-3.5 h-3.5" />
                  Risk Management Principles
                </div>
                <h3 className="mt-4 font-display text-xl font-bold tracking-tight">
                  Invalidation-first execution architecture.
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-slate-300">
                  Order flow does not eliminate market risk—it helps define
                  where your thesis is objectively wrong so risk remains strictly
                  bounded.
                </p>
              </div>

              <div className="mt-6 rounded-2xl bg-white/[0.06] border border-white/10 p-4 space-y-2.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Thesis Invalidation</span>
                  <span className="font-mono text-[#F28B82] font-semibold">
                    Behind Absorption Wall
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Position Sizing</span>
                  <span className="font-mono text-white font-semibold">
                    Fixed-Risk Per Setup
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Session Guardrail</span>
                  <span className="font-mono text-[#81C995] font-semibold">
                    Pre-Defined Daily Cap
                  </span>
                </div>
              </div>
            </motion.div>
          </FadeIn>

          {/* Optional Configurable Row: Lifetime Access & Community Access (if offered) */}
          {(siteConfig.optionalFeatures.showLifetimeAccessPlaceholder ||
            siteConfig.optionalFeatures.showCommunityAccessPlaceholder) && (
            <>
              {siteConfig.optionalFeatures.showLifetimeAccessPlaceholder && (
                <FadeIn delay={0.22} className="md:col-span-3 lg:col-span-6">
                  <div className="h-full rounded-2xl bg-[#F8F9FB] border border-dashed border-slate-900/15 p-6 flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-slate-900/10 text-[#0B1220]">
                      <Clock className="w-4 h-4 text-[#1A73E8]" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-base font-semibold text-[#0B1220]">
                          Lifetime Access{" "}
                          <span className="text-slate-500 font-normal">
                            (If Offered)
                          </span>
                        </h3>
                        <span className="rounded-full bg-white border border-slate-900/10 px-2.5 py-0.5 font-mono text-[10px] font-medium text-slate-500">
                          OPTIONAL FEATURE SLOT
                        </span>
                      </div>
                      <p className="mt-1.5 text-[13.5px] text-slate-600 leading-relaxed">
                        Revisit every module, Footprint case study, and future
                        curriculum refinement at your own pace—configure in{" "}
                        <code className="text-xs bg-white px-1.5 py-0.5 rounded border border-slate-200">
                          courseData.ts
                        </code>{" "}
                        if included in your plan.
                      </p>
                    </div>
                  </div>
                </FadeIn>
              )}

              {siteConfig.optionalFeatures.showCommunityAccessPlaceholder && (
                <FadeIn delay={0.26} className="md:col-span-3 lg:col-span-6">
                  <div className="h-full rounded-2xl bg-[#F8F9FB] border border-dashed border-slate-900/15 p-6 flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-slate-900/10 text-[#0B1220]">
                      <Users className="w-4 h-4 text-[#188038]" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-base font-semibold text-[#0B1220]">
                          Student Community Access{" "}
                          <span className="text-slate-500 font-normal">
                            (If Offered)
                          </span>
                        </h3>
                        <span className="rounded-full bg-white border border-slate-900/10 px-2.5 py-0.5 font-mono text-[10px] font-medium text-slate-500">
                          OPTIONAL FEATURE SLOT
                        </span>
                      </div>
                      <p className="mt-1.5 text-[13.5px] text-slate-600 leading-relaxed">
                        Share annotated Footprint charts, discuss session
                        structure, and learn alongside serious peers—configure in{" "}
                        <code className="text-xs bg-white px-1.5 py-0.5 rounded border border-slate-200">
                          courseData.ts
                        </code>{" "}
                        if offered.
                      </p>
                    </div>
                  </div>
                </FadeIn>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
