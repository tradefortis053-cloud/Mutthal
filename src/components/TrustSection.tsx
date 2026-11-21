"use client";

import React from "react";
import { BookOpen, Compass, Layers, LineChart } from "lucide-react";
import { trustPillars } from "@/data/courseData";
import { FadeIn } from "@/components/ui/MotionPrimitives";

const ICON_MAP = {
  Compass,
  BookOpen,
  LineChart,
  Layers,
} as const;

export function TrustSection() {
  return (
    <section
      aria-label="Core Educational Principles"
      className="border-y border-slate-900/[0.07] bg-[#F8F9FB]/80"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-slate-900/[0.07]">
          {trustPillars.map((pillar, idx) => {
            const IconComponent = ICON_MAP[pillar.icon];
            const accentColors = [
              "text-[#1A73E8] bg-[#1A73E8]/[0.08]",
              "text-[#188038] bg-[#188038]/[0.08]",
              "text-[#E37400] bg-[#E37400]/[0.09]",
              "text-[#0B1220] bg-slate-900/[0.06]",
            ];
            return (
              <FadeIn
                key={pillar.title}
                delay={idx * 0.07}
                y={12}
                className="lg:px-7 first:lg:pl-0 last:lg:pr-0 flex items-start gap-4"
              >
                <div
                  className={`shrink-0 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-900/[0.05] ${accentColors[idx]}`}
                >
                  <IconComponent className="w-[18px] h-[18px]" strokeWidth={1.85} />
                </div>
                <div>
                  <h2 className="font-display text-[15px] font-semibold text-[#0B1220] tracking-tight">
                    {pillar.title}
                  </h2>
                  <p className="mt-1 text-[13px] leading-relaxed text-slate-600">
                    {pillar.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
