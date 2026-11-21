"use client";

import React, { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BookOpenCheck, ChevronDown, PlayCircle } from "lucide-react";
import { curriculumModules } from "@/data/courseData";
import { FadeIn, SectionBadge } from "@/components/ui/MotionPrimitives";

export function CurriculumSection() {
  const prefersReducedMotion = useReducedMotion();
  const [openIds, setOpenIds] = useState<string[]>(["module-01"]);

  const totalLessons = curriculumModules.reduce(
    (sum, mod) => sum + mod.lessons.length,
    0
  );

  const toggleModule = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const allExpanded = openIds.length === curriculumModules.length;

  const handleToggleAll = () => {
    if (allExpanded) {
      setOpenIds([]);
    } else {
      setOpenIds(curriculumModules.map((m) => m.id));
    }
  };

  return (
    <section id="curriculum" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <FadeIn className="max-w-2xl">
            <SectionBadge label="Course Curriculum" accent="blue" />
            <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-0.03em] leading-[1.12] text-[#0B1220]">
              A structured 8-module syllabus from auction basics to execution.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              {curriculumModules.length} comprehensive modules · {totalLessons}{" "}
              focused lessons designed for sequential mastery.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <button
              type="button"
              onClick={handleToggleAll}
              className="inline-flex items-center gap-2 rounded-full bg-[#F8F9FB] hover:bg-slate-100 border border-slate-900/10 px-4 py-2 text-xs font-semibold text-[#0B1220] transition-colors cursor-pointer"
            >
              <BookOpenCheck className="w-3.5 h-3.5 text-[#1A73E8]" />
              <span>{allExpanded ? "Collapse All Modules" : "Expand All Modules"}</span>
            </button>
          </FadeIn>
        </div>

        {/* Accordion List */}
        <div className="mt-12 space-y-3.5">
          {curriculumModules.map((mod, idx) => {
            const isOpen = openIds.includes(mod.id);

            return (
              <FadeIn key={mod.id} delay={Math.min(idx * 0.04, 0.28)}>
                <div
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-white border-slate-900/15 shadow-card"
                      : "bg-[#FCFDFE] hover:bg-white border-slate-900/[0.08]"
                  }`}
                >
                  {/* Accordion Trigger */}
                  <button
                    type="button"
                    onClick={() => toggleModule(mod.id)}
                    aria-expanded={isOpen}
                    aria-controls={`${mod.id}-panel`}
                    className="w-full flex items-start sm:items-center justify-between gap-4 px-5 sm:px-7 py-5 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1A73E8]"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-5 flex-1">
                      <span className="inline-flex items-center self-start sm:self-auto rounded-lg bg-[#0B1220]/[0.05] px-2.5 py-1 font-mono text-xs font-semibold text-[#0B1220] shrink-0">
                        {mod.number}
                      </span>
                      <div>
                        <h3 className="font-display text-lg sm:text-[19px] font-semibold text-[#0B1220] tracking-tight">
                          {mod.title}
                        </h3>
                        <p className="mt-1 text-xs sm:text-[13.5px] text-slate-500 line-clamp-2 sm:line-clamp-1">
                          {mod.summary}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="hidden sm:inline-flex items-center rounded-full bg-[#F8F9FB] border border-slate-900/[0.07] px-3 py-1 text-xs font-medium text-slate-600 tabular-nums">
                        {mod.lessons.length} Lessons
                      </span>
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-200 ${
                          isOpen
                            ? "bg-[#0B1220] text-white border-[#0B1220] rotate-180"
                            : "bg-white text-slate-600 border-slate-900/10"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </div>
                  </button>

                  {/* Expandable Lesson Panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`${mod.id}-panel`}
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
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="px-5 sm:px-7 pb-6 pt-2 border-t border-slate-900/[0.06] bg-[#F8F9FB]/55">
                          <p className="text-[13.5px] text-slate-600 mb-4 leading-relaxed">
                            {mod.summary}
                          </p>

                          <ul className="divide-y divide-slate-900/[0.06] rounded-xl bg-white border border-slate-900/[0.07] overflow-hidden">
                            {mod.lessons.map((lesson) => (
                              <li
                                key={lesson.code}
                                className="flex items-start gap-3.5 px-4 sm:px-5 py-3.5 hover:bg-slate-50/80 transition-colors"
                              >
                                <PlayCircle className="w-4 h-4 text-[#1A73E8] mt-0.5 shrink-0" />
                                <div className="flex-1 min-w-0">
                                  <div className="flex flex-wrap items-center gap-2">
                                    <span className="font-mono text-[11px] font-semibold text-slate-400 tabular-nums">
                                      {lesson.code}
                                    </span>
                                    <h4 className="text-sm font-semibold text-[#0B1220]">
                                      {lesson.title}
                                    </h4>
                                  </div>
                                  <p className="mt-1 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                                    {lesson.description}
                                  </p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
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
