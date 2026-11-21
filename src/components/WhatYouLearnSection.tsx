"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  AlignCenter,
  ArrowLeftRight,
  Crosshair,
  GitBranch,
  Grid3X3,
  Layers,
  Scale,
  ShieldAlert,
} from "lucide-react";
import { learningTopics, type LearningTopic } from "@/data/courseData";
import { FadeIn, SectionBadge } from "@/components/ui/MotionPrimitives";

const TOPIC_ICONS: Record<LearningTopic["iconName"], React.ElementType> = {
  Layers,
  AlignCenter,
  Grid3X3,
  ArrowLeftRight,
  ShieldAlert,
  Scale,
  Activity,
  GitBranch,
  Crosshair,
};

const ACCENT_STYLES: Record<
  LearningTopic["accent"],
  {
    iconWrap: string;
    bar: string;
    pill: string;
  }
> = {
  blue: {
    iconWrap: "bg-[#1A73E8]/[0.08] text-[#1A73E8] group-hover:bg-[#1A73E8] group-hover:text-white",
    bar: "bg-[#1A73E8]",
    pill: "text-[#1A73E8] bg-[#1A73E8]/[0.06]",
  },
  green: {
    iconWrap: "bg-[#188038]/[0.08] text-[#188038] group-hover:bg-[#188038] group-hover:text-white",
    bar: "bg-[#188038]",
    pill: "text-[#188038] bg-[#188038]/[0.06]",
  },
  red: {
    iconWrap: "bg-[#D93025]/[0.08] text-[#D93025] group-hover:bg-[#D93025] group-hover:text-white",
    bar: "bg-[#D93025]",
    pill: "text-[#D93025] bg-[#D93025]/[0.06]",
  },
  yellow: {
    iconWrap: "bg-[#E37400]/[0.10] text-[#B06000] group-hover:bg-[#E37400] group-hover:text-white",
    bar: "bg-[#E37400]",
    pill: "text-[#B06000] bg-[#E37400]/[0.09]",
  },
};

export function WhatYouLearnSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-white relative"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="max-w-3xl">
          <SectionBadge label="What You'll Learn" accent="blue" />
          <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-0.03em] leading-[1.12] text-[#0B1220]">
            Nine core competencies of institutional-grade market reading.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Move systematically from auction mechanics to live execution. Every
            concept builds directly on the previous module—replacing chart
            guesswork with structured evidence.
          </p>
        </FadeIn>

        {/* 9 Premium Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {learningTopics.map((topic, index) => {
            const IconComponent = TOPIC_ICONS[topic.iconName];
            const style = ACCENT_STYLES[topic.accent];

            return (
              <FadeIn key={topic.id} delay={Math.min(index * 0.05, 0.35)}>
                <motion.article
                  whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="group relative h-full flex flex-col justify-between rounded-2xl bg-white border border-slate-900/[0.08] hover:border-slate-900/16 p-6 sm:p-7 shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <div>
                    {/* Top Row: Icon + Index & Tag */}
                    <div className="flex items-center justify-between gap-3">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors duration-250 ${style.iconWrap}`}
                      >
                        <IconComponent className="w-5 h-5" strokeWidth={1.85} />
                      </div>

                      <div className="flex items-center gap-2">
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${style.pill}`}
                        >
                          {topic.tag}
                        </span>
                        <span className="font-mono text-xs text-slate-400 tabular-nums">
                          {topic.number}
                        </span>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="mt-6 font-display text-[19px] font-semibold text-[#0B1220] tracking-tight">
                      {topic.title}
                    </h3>
                    <p className="mt-2.5 text-[14.5px] leading-relaxed text-slate-600">
                      {topic.description}
                    </p>
                  </div>

                  {/* Subtle bottom accent line reveal */}
                  <div className="mt-6 pt-4 border-t border-slate-900/[0.05] flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-400 group-hover:text-slate-700 transition-colors">
                      Structured Module Coverage
                    </span>
                    <span
                      className={`h-1.5 w-6 rounded-full opacity-35 group-hover:opacity-100 group-hover:w-10 transition-all duration-300 ${style.bar}`}
                    />
                  </div>
                </motion.article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
