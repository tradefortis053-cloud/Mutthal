"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  Film,
  Play,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { siteConfig } from "@/data/courseData";
import {
  FadeIn,
  MagneticButton,
  SectionBadge,
} from "@/components/ui/MotionPrimitives";

const PREVIEW_CHAPTERS = [
  {
    time: "00:00",
    title: "Course Philosophy & How We Study Market Auctions",
    summary: "Why objective liquidity observation replaces indicator lag.",
  },
  {
    time: "03:15",
    title: "Passive Limit Orders vs. Aggressive Market Execution",
    summary: "Visualizing the two forces behind every single price tick.",
  },
  {
    time: "07:40",
    title: "Side-by-Side: Candlestick Chart vs. DOM & Footprint",
    summary: "Seeing passive absorption inside a seemingly bullish breakout bar.",
  },
  {
    time: "10:55",
    title: "How the 8 Modules Progress Toward Disciplined Execution",
    summary: "Overview of chart walkthroughs, workspace setup, and risk rules.",
  },
];

export function CoursePreviewSection() {
  const prefersReducedMotion = useReducedMotion();
  const [modalOpen, setModalOpen] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    if (modalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen]);

  const { previewVideo } = siteConfig.integrations;

  return (
    <section
      id="preview"
      className="py-24 sm:py-32 bg-[#F8F9FB] border-y border-slate-900/[0.07]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-slate-900/10 shadow-elevated overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Copy Column (5 cols) */}
            <FadeIn className="lg:col-span-5 p-7 sm:p-10 lg:p-12">
              <SectionBadge label="Course Preview" accent="yellow" />

              <h2 className="mt-5 font-display text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-[-0.03em] leading-[1.16] text-[#0B1220]">
                Watch the course introduction &amp; sample lesson.
              </h2>

              <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                Experience our teaching clarity firsthand. In this introductory
                preview, we compare a standard candlestick breakout against the
                underlying Depth of Market and Footprint order flow—showing
                precisely how liquidity changes your perspective.
              </p>

              <ul className="mt-6 space-y-2.5">
                {[
                  "Calm, jargon-free breakdown of two-way auction mechanics",
                  "Side-by-side DOM ladder & Footprint cluster walkthrough",
                  "Clear overview of tools, data feeds, and module roadmap",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-[13.5px] text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#188038] mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <MagneticButton
                  onClick={() => setModalOpen(true)}
                  variant="blue"
                  className="px-6 py-3 text-sm"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Watch Preview Lesson</span>
                </MagneticButton>

                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 font-mono">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {previewVideo.duration} · Sample Introduction
                </span>
              </div>
            </FadeIn>

            {/* Right Video Thumbnail Column (7 cols) */}
            <FadeIn
              delay={0.12}
              className="lg:col-span-7 p-4 sm:p-6 lg:p-8 lg:pl-0"
            >
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                aria-label="Open course preview video player"
                className="group relative block w-full overflow-hidden rounded-2xl border border-slate-900/10 shadow-card cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8]"
              >
                {/* Studio Generated Thumbnail */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                  <img
                    src={previewVideo.thumbnailUrl}
                    alt="Minimalist studio display showing Order Flow and Depth of Market ladder preview"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />

                  {/* Subtle dark vignette at bottom for caption legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/65 via-[#0B1220]/15 to-transparent" />

                  {/* Top-left Video Placeholder Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/92 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-[#0B1220] shadow-xs">
                    <Film className="w-3.5 h-3.5 text-[#1A73E8]" />
                    <span>Lesson 01.1 · Free Course Preview</span>
                  </div>

                  {/* Center Animated Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      {!prefersReducedMotion && (
                        <motion.span
                          animate={{ scale: [1, 1.32, 1], opacity: [0.45, 0, 0.45] }}
                          transition={{
                            duration: 2.6,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute h-20 w-20 rounded-full bg-white/50"
                        />
                      )}
                      <span className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white/95 backdrop-blur-md text-[#0B1220] shadow-elevated transition-transform duration-300 group-hover:scale-108">
                        <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-[#0B1220] ml-1" />
                      </span>
                    </div>
                  </div>

                  {/* Bottom Caption Bar */}
                  <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4 text-white">
                    <div>
                      <p className="text-[11px] font-mono uppercase tracking-wider text-white/75">
                        COURSE INTRODUCTION PREVIEW
                      </p>
                      <p className="text-sm sm:text-base font-semibold leading-snug mt-0.5">
                        {previewVideo.title}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-lg bg-black/50 backdrop-blur-md px-2.5 py-1 font-mono text-xs tabular-nums">
                      {previewVideo.duration}
                    </span>
                  </div>
                </div>
              </button>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Video Player Placeholder Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1220]/70 backdrop-blur-sm p-4"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="video-preview-modal-title"
              initial={
                prefersReducedMotion
                  ? { opacity: 1 }
                  : { opacity: 0, scale: 0.96, y: 12 }
              }
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={
                prefersReducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.96, y: 12 }
              }
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl rounded-3xl bg-white border border-slate-900/10 shadow-elevated overflow-hidden"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-900/[0.07] bg-[#F8F9FB]">
                <div className="flex items-center gap-2.5">
                  <Film className="w-4 h-4 text-[#1A73E8]" />
                  <h3
                    id="video-preview-modal-title"
                    className="font-display text-sm sm:text-base font-semibold text-[#0B1220]"
                  >
                    Course Introduction · Video Player Placeholder
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  aria-label="Close video preview"
                  className="rounded-full p-1.5 text-slate-500 hover:bg-slate-200/70 hover:text-[#0B1220] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Embed or Clean Integration Placeholder */}
              <div className="bg-[#0B1220] aspect-video w-full relative flex flex-col items-center justify-center text-center p-6 text-white">
                {previewVideo.embedUrl ? (
                  <iframe
                    src={previewVideo.embedUrl}
                    title={previewVideo.title}
                    className="w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                  />
                ) : (
                  <div className="max-w-lg space-y-4">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 border border-white/15">
                      <SlidersHorizontal className="w-6 h-6 text-[#8AB4F8]" />
                    </div>
                    <div>
                      <span className="inline-block rounded-full bg-[#1A73E8]/25 border border-[#8AB4F8]/30 px-3 py-0.5 font-mono text-[11px] text-[#8AB4F8]">
                        VIDEO INTEGRATION PLACEHOLDER
                      </span>
                      <h4 className="mt-3 font-display text-lg sm:text-xl font-semibold">
                        {PREVIEW_CHAPTERS[activeChapter].title}
                      </h4>
                      <p className="mt-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {PREVIEW_CHAPTERS[activeChapter].summary}
                      </p>
                    </div>
                    <p className="text-xs font-mono text-slate-400 bg-white/5 rounded-xl px-4 py-2.5 border border-white/10">
                      Ready to connect: Set{" "}
                      <code className="text-white">
                        siteConfig.integrations.previewVideo.embedUrl
                      </code>{" "}
                      in <code className="text-white">src/data/courseData.ts</code>{" "}
                      (supports YouTube, Vimeo, BunnyStream, Wistia, or MP4).
                    </p>
                  </div>
                )}
              </div>

              {/* Chapter Switcher Strip */}
              <div className="p-5 sm:p-6 bg-white">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Preview Lesson Chapters
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                  {PREVIEW_CHAPTERS.map((chap, idx) => (
                    <button
                      key={chap.time}
                      type="button"
                      onClick={() => setActiveChapter(idx)}
                      className={`rounded-xl p-3 text-left border transition-all cursor-pointer ${
                        activeChapter === idx
                          ? "bg-[#F8F9FB] border-[#1A73E8] shadow-2xs"
                          : "bg-white border-slate-900/[0.08] hover:border-slate-300"
                      }`}
                    >
                      <span className="font-mono text-[11px] font-semibold text-[#1A73E8]">
                        {chap.time}
                      </span>
                      <p className="mt-1 text-xs font-semibold text-[#0B1220] line-clamp-2">
                        {chap.title}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
