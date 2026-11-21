"use client";

import React from "react";
import { ArrowUpRight, Quote, UserCheck } from "lucide-react";
import { instructorPlaceholder } from "@/data/courseData";
import { FadeIn, SectionBadge } from "@/components/ui/MotionPrimitives";

export function InstructorSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#F8F9FB] border-y border-slate-900/[0.07]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Portrait Placeholder Column (5 cols) */}
          <FadeIn className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-900/10 shadow-elevated aspect-4/5">
                <img
                  src={instructorPlaceholder.portraitUrl}
                  alt="Professional instructor portrait placeholder"
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
                {/* Honest Placeholder Label */}
                <div className="absolute bottom-4 inset-x-4 rounded-2xl bg-white/92 backdrop-blur-md border border-slate-900/10 px-4 py-3 shadow-sm flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-[#0B1220]">
                      {instructorPlaceholder.name}
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Replace with educator photo &amp; bio
                    </p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-slate-600">
                    PLACEHOLDER
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Editorial Bio & Philosophy Column (7 cols) */}
          <FadeIn delay={0.1} className="lg:col-span-7">
            <SectionBadge label="Meet Your Instructor" accent="neutral" />

            <h2 className="mt-5 font-display text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-[#0B1220]">
              {instructorPlaceholder.name}
            </h2>
            <p className="mt-1.5 text-sm font-medium text-[#1A73E8]">
              {instructorPlaceholder.role}
            </p>

            <p className="mt-6 text-base sm:text-[17px] leading-relaxed text-slate-700">
              {instructorPlaceholder.intro}
            </p>

            {/* Philosophy Callout */}
            <div className="mt-6 rounded-2xl bg-white border border-slate-900/[0.08] p-6 shadow-card">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                <Quote className="w-3.5 h-3.5 text-[#1A73E8]" />
                <span>Trading &amp; Teaching Philosophy</span>
              </div>
              <p className="text-[14.5px] leading-relaxed text-slate-600">
                {instructorPlaceholder.philosophy}
              </p>
            </div>

            {/* Areas of Expertise */}
            <div className="mt-7">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                <UserCheck className="w-3.5 h-3.5 text-[#188038]" />
                <span>Areas of Focus &amp; Expertise</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {instructorPlaceholder.expertise.map((area) => (
                  <span
                    key={area}
                    className="rounded-full bg-white border border-slate-900/10 px-3.5 py-1.5 text-xs font-medium text-[#0B1220] shadow-2xs"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Media Links (Placeholders) */}
            <div className="mt-8 pt-6 border-t border-slate-900/[0.08] flex flex-wrap items-center gap-3">
              <span className="text-xs font-medium text-slate-500 mr-1">
                Connect:
              </span>
              {instructorPlaceholder.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  onClick={(e) => e.preventDefault()}
                  title={`${social.label} profile link placeholder`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white hover:bg-slate-100 border border-slate-900/10 px-3.5 py-1.5 text-xs font-semibold text-[#0B1220] transition-colors"
                >
                  <span>{social.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
