"use client";

import React, { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  BookOpen,
  Layers,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { MagneticButton } from "@/components/ui/MotionPrimitives";

const HERO_LADDER_ROWS = [
  { price: "24,455.0", bid: null, ask: 482, heat: 0.92, wall: true, current: false },
  { price: "24,452.5", bid: null, ask: 194, heat: 0.44, wall: false, current: false },
  { price: "24,450.0", bid: null, ask: 268, heat: 0.61, wall: false, current: false },
  { price: "24,447.5", bid: null, ask: 145, heat: 0.34, wall: false, current: false },
  { price: "24,445.0", bid: 218, ask: 164, heat: 0.72, wall: false, current: true },
  { price: "24,442.5", bid: 286, ask: null, heat: 0.65, wall: false, current: false },
  { price: "24,440.0", bid: 342, ask: null, heat: 0.78, wall: false, current: false },
  { price: "24,437.5", bid: 176, ask: null, heat: 0.39, wall: false, current: false },
  { price: "24,435.0", bid: 510, ask: null, heat: 0.95, wall: true, current: false },
];

const HERO_FOOTPRINT_BARS = [
  {
    time: "09:45",
    bullish: false,
    delta: "-142",
    vol: "1,840",
    cells: [
      { bid: 48, ask: 22, poc: false, imb: "none" },
      { bid: 112, ask: 38, poc: false, imb: "sell" },
      { bid: 264, ask: 190, poc: true, imb: "none" },
      { bid: 140, ask: 96, poc: false, imb: "none" },
      { bid: 64, ask: 118, poc: false, imb: "none" },
    ],
  },
  {
    time: "09:50",
    bullish: true,
    delta: "+226",
    vol: "2,310",
    cells: [
      { bid: 34, ask: 128, poc: false, imb: "buy" },
      { bid: 62, ask: 214, poc: false, imb: "buy" },
      { bid: 185, ask: 312, poc: true, imb: "none" },
      { bid: 148, ask: 164, poc: false, imb: "none" },
      { bid: 92, ask: 44, poc: false, imb: "none" },
    ],
  },
  {
    time: "09:55",
    bullish: true,
    delta: "+318",
    vol: "2,790",
    cells: [
      { bid: 42, ask: 186, poc: false, imb: "buy" },
      { bid: 58, ask: 248, poc: false, imb: "buy" },
      { bid: 76, ask: 294, poc: true, imb: "buy" },
      { bid: 162, ask: 198, poc: false, imb: "none" },
      { bid: 110, ask: 82, poc: false, imb: "none" },
    ],
  },
];

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const [pulseTick, setPulseTick] = useState(0);

  // Subtle illustrative breathing in DOM volumes
  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = setInterval(() => {
      setPulseTick((prev) => (prev + 1) % 4);
    }, 2600);
    return () => clearInterval(timer);
  }, [prefersReducedMotion]);

  // Subtle 3D tilt values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4.5, -4.5]), {
    stiffness: 140,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5.5, 5.5]), {
    stiffness: 140,
    damping: 24,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const headlineWords = [
    "Master",
    "the",
    "Market",
    "Beyond",
    "the",
    "Candles.",
  ];

  const buyRatio = [64, 67, 62, 66][pulseTick];
  const sellRatio = 100 - buyRatio;
  const cumDelta = [1420, 1468, 1442, 1495][pulseTick];

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 bg-white"
    >
      {/* Subtle architectural grid backdrop fading cleanly into white */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[680px] bg-architectural-grid opacity-75 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_25%,#000_45%,transparent_100%)]"
        aria-hidden="true"
      />

      {/* Very delicate ambient daylight wash (zero loud gradients) */}
      <div
        className="pointer-events-none absolute top-16 left-1/2 -translate-x-1/2 w-[820px] h-[320px] rounded-full bg-[#1A73E8]/[0.04] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered Editorial Copy Block */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Small Premium Badge */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2.5 rounded-full bg-[#F8F9FB] border border-slate-900/10 px-4 py-1.5 shadow-[0_1px_2px_rgba(11,18,32,0.03)] mb-7"
          >
            <span className="flex h-2 w-2 relative">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1A73E8]" />
            </span>
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-[#0B1220]">
              ADVANCED TRADING EDUCATION
            </span>
          </motion.div>

          {/* Main Staggered Headline */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-[66px] font-bold tracking-[-0.035em] leading-[1.06] text-[#0B1220]">
            {headlineWords.map((word, idx) => (
              <motion.span
                key={`${word}-${idx}`}
                initial={
                  prefersReducedMotion
                    ? false
                    : { opacity: 0, y: 18, filter: "blur(4px)" }
                }
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.55,
                  delay: 0.06 + idx * 0.055,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`inline-block mr-[0.26em] last:mr-0 ${
                  word === "Beyond" || word === "Candles."
                    ? "text-[#1E293B]"
                    : ""
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.38,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 text-base sm:text-lg lg:text-[19px] leading-relaxed text-slate-600 max-w-2xl mx-auto font-normal"
          >
            Understand real market activity with Order Flow, DOM, Footprint
            Charts and Liquidity Analysis. Learn to read buying and selling
            pressure with confidence.
          </motion.p>

          {/* Dual Premium CTAs */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.48,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5"
          >
            <MagneticButton
              href="#about"
              variant="primary"
              className="w-full sm:w-auto px-7 py-3.5 text-[15px]"
            >
              <span>Explore the Course</span>
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>

            <MagneticButton
              href="#curriculum"
              variant="secondary"
              className="w-full sm:w-auto px-7 py-3.5 text-[15px]"
            >
              <BookOpen className="w-4 h-4 text-[#1A73E8]" />
              <span>View Course Curriculum</span>
            </MagneticButton>
          </motion.div>
        </div>

        {/* 3D-Style Trading Interface Visual */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.56, ease: [0.22, 1, 0.36, 1] }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ perspective: 1400 }}
          className="relative mt-14 sm:mt-16 mx-auto max-w-6xl"
        >
          {/* Floating UI Badge — Top Left: Stacked Buy Imbalance */}
          <motion.div
            animate={
              prefersReducedMotion
                ? undefined
                : { y: [0, -6, 0] }
            }
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:flex items-center gap-3 absolute -left-5 top-14 z-20 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-900/10 px-4 py-3 shadow-elevated"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#188038]/10 text-[#188038]">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-[#0B1220]">
                  Stacked Buy Imbalance
                </span>
                <span className="rounded-full bg-[#188038]/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-[#188038]">
                  3.4× Lift
                </span>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">
                3 consecutive diagonal Ask imbalances
              </p>
            </div>
          </motion.div>

          {/* Floating UI Badge — Bottom Right: Passive Liquidity Absorption */}
          <motion.div
            animate={
              prefersReducedMotion
                ? undefined
                : { y: [0, 6, 0] }
            }
            transition={{
              duration: 5.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
            className="hidden lg:flex items-center gap-3 absolute -right-5 bottom-16 z-20 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-900/10 px-4 py-3 shadow-elevated"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E37400]/12 text-[#B06000]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-[#0B1220]">
                  Passive Ask Liquidity Wall
                </span>
                <span className="rounded-full bg-[#1A73E8]/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-[#1A73E8]">
                  482 Lots
                </span>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Resting limit supply @ 24,455.0
              </p>
            </div>
          </motion.div>

          {/* Main 3D Perspective Terminal Frame */}
          <motion.div
            style={
              prefersReducedMotion
                ? undefined
                : {
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                  }
            }
            className="rounded-3xl bg-white border border-slate-900/10 shadow-elevated overflow-hidden"
          >
            {/* Window Top Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 bg-[#F8F9FB] border-b border-slate-900/[0.07]">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#EA4335]/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FBBC04]/85" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#34A853]/80" />
                </div>
                <div className="h-4 w-px bg-slate-200 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-[#1A73E8]" />
                  <span className="text-xs font-semibold text-[#0B1220] tracking-tight">
                    Microstructure Studio — Order Flow · Footprint · DOM
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-slate-900/10 px-2.5 py-1 text-[10.5px] font-medium text-slate-600">
                  <Sparkles className="w-3 h-3 text-[#1A73E8]" />
                  Illustrative Educational View
                </span>
              </div>
            </div>

            {/* 3-Column Analytical Workspace */}
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-900/[0.07]">
              {/* Column 1: Order Flow Liquidity Heatmap (3 cols) */}
              <div className="lg:col-span-3 p-4 sm:p-5 bg-[#FCFDFE]">
                <div className="flex items-center justify-between mb-3.5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    Order Flow Heatmap
                  </span>
                  <span className="font-mono text-[10.5px] text-[#1A73E8] font-medium">
                    Resting Depth
                  </span>
                </div>

                <div className="space-y-1.5">
                  {HERO_LADDER_ROWS.map((row) => {
                    const adjustedHeat = Math.min(
                      1,
                      Math.max(0.18, row.heat + (pulseTick % 2 === 0 ? 0.04 : -0.03))
                    );
                    return (
                      <div
                        key={`heat-${row.price}`}
                        className="flex items-center gap-2.5 h-7"
                      >
                        <span className="font-mono text-[11px] text-slate-500 tabular-nums w-14">
                          {row.price}
                        </span>
                        <div className="relative flex-1 h-5 rounded-md bg-slate-100 overflow-hidden border border-slate-900/[0.04]">
                          <motion.div
                            animate={{ width: `${Math.round(adjustedHeat * 100)}%` }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                            style={{
                              opacity: 0.2 + adjustedHeat * 0.72,
                            }}
                            className={`h-full rounded-r-sm ${
                              row.wall
                                ? "bg-[#1A73E8]"
                                : row.current
                                ? "bg-[#0B1220]"
                                : "bg-[#1A73E8]/70"
                            }`}
                          />
                          {row.wall && (
                            <span className="absolute right-2 top-1/2 -translate-y-1/2 font-mono text-[9.5px] font-semibold text-[#0B1220]">
                              HIGH LIQ
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Heatmap Legend */}
                <div className="mt-4 pt-3 border-t border-slate-900/[0.06] flex items-center justify-between text-[10.5px] text-slate-500">
                  <span>Low Depth</span>
                  <div className="flex items-center gap-1">
                    <span className="w-4 h-2 rounded-xs bg-[#1A73E8]/15" />
                    <span className="w-4 h-2 rounded-xs bg-[#1A73E8]/40" />
                    <span className="w-4 h-2 rounded-xs bg-[#1A73E8]/70" />
                    <span className="w-4 h-2 rounded-xs bg-[#1A73E8]" />
                  </div>
                  <span>Limit Wall</span>
                </div>
              </div>

              {/* Column 2: Footprint Chart Visualization (5 cols) */}
              <div className="lg:col-span-5 p-4 sm:p-5 bg-white">
                <div className="flex items-center justify-between mb-3.5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    Footprint Clusters (Bid × Ask)
                  </span>
                  <div className="flex items-center gap-3 text-[10.5px]">
                    <span className="inline-flex items-center gap-1 text-slate-600">
                      <span className="w-2 h-2 rounded-xs border border-[#E37400] bg-[#FEF7E0]" />
                      POC
                    </span>
                    <span className="inline-flex items-center gap-1 text-[#188038] font-medium">
                      <span className="w-2 h-2 rounded-xs bg-[#188038]" />
                      Imbalance
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2.5">
                  {HERO_FOOTPRINT_BARS.map((bar) => (
                    <div
                      key={bar.time}
                      className="rounded-xl border border-slate-900/[0.07] bg-[#F8F9FB]/70 p-2"
                    >
                      <div className="flex items-center justify-between mb-2 px-1">
                        <span className="font-mono text-[10.5px] text-slate-500">
                          {bar.time}
                        </span>
                        <span
                          className={`h-1.5 w-4 rounded-full ${
                            bar.bullish ? "bg-[#188038]" : "bg-[#D93025]"
                          }`}
                        />
                      </div>

                      {/* Candle Spine + Footprint Cells */}
                      <div className="flex gap-1.5">
                        {/* Candle Body Indicator */}
                        <div className="w-1.5 flex flex-col items-center py-1">
                          <div className="w-px h-2 bg-slate-300" />
                          <div
                            className={`w-1.5 flex-1 rounded-full ${
                              bar.bullish ? "bg-[#188038]/80" : "bg-[#D93025]/80"
                            }`}
                          />
                          <div className="w-px h-2 bg-slate-300" />
                        </div>

                        {/* Bid x Ask Rows */}
                        <div className="flex-1 space-y-1">
                          {bar.cells.map((cell, cIdx) => (
                            <div
                              key={cIdx}
                              className={`grid grid-cols-2 items-center rounded-md px-1.5 py-1 font-mono text-[10.5px] tabular-nums ${
                                cell.poc
                                  ? "bg-[#FEF7E0] border border-[#E37400]/50 font-semibold"
                                  : "bg-white border border-slate-900/[0.05]"
                              }`}
                            >
                              <span
                                className={`text-right pr-1 border-r border-slate-200/80 ${
                                  cell.imb === "sell"
                                    ? "text-[#D93025] font-bold"
                                    : "text-slate-600"
                                }`}
                              >
                                {cell.bid}
                              </span>
                              <span
                                className={`text-left pl-1 ${
                                  cell.imb === "buy"
                                    ? "text-[#188038] font-bold"
                                    : "text-slate-700"
                                }`}
                              >
                                {cell.ask}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Per-Bar Delta Summary */}
                      <div className="mt-2.5 pt-2 border-t border-slate-900/[0.06] flex items-center justify-between px-0.5 font-mono text-[10px] tabular-nums">
                        <span className="text-slate-400">Δ</span>
                        <span
                          className={`font-semibold ${
                            bar.bullish ? "text-[#188038]" : "text-[#D93025]"
                          }`}
                        >
                          {bar.delta}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Sub-note */}
                <div className="mt-3.5 rounded-xl bg-[#F8F9FB] border border-slate-900/[0.06] px-3 py-2 flex items-center justify-between text-[11px]">
                  <span className="text-slate-600">
                    Active Auction: <strong className="text-[#0B1220]">Buyers Lifting Offers</strong>
                  </span>
                  <span className="font-mono text-[#188038] font-semibold">
                    POC Migrating Higher ↑
                  </span>
                </div>
              </div>

              {/* Column 3: DOM Ladder Visualization (4 cols) */}
              <div className="lg:col-span-4 p-4 sm:p-5 bg-[#FCFDFE]">
                <div className="flex items-center justify-between mb-3.5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    DOM Price Ladder
                  </span>
                  <span className="font-mono text-[10.5px] text-slate-500">
                    Spread: <strong className="text-[#0B1220]">2.5 pts</strong>
                  </span>
                </div>

                {/* DOM Column Headers */}
                <div className="grid grid-cols-3 text-[10px] font-semibold uppercase tracking-wider text-slate-400 pb-1.5 border-b border-slate-900/[0.06] px-1">
                  <span className="text-left text-[#188038]">Bid Size</span>
                  <span className="text-center">Price</span>
                  <span className="text-right text-[#D93025]">Ask Size</span>
                </div>

                {/* DOM Rows */}
                <div className="divide-y divide-slate-900/[0.045] mt-1">
                  {HERO_LADDER_ROWS.map((row, idx) => {
                    const jitter = (pulseTick + idx) % 3 === 0 ? 12 : -6;
                    const bidVal = row.bid ? row.bid + jitter : null;
                    const askVal = row.ask ? row.ask - jitter : null;
                    const bidPct = bidVal ? Math.min(100, (bidVal / 540) * 100) : 0;
                    const askPct = askVal ? Math.min(100, (askVal / 540) * 100) : 0;

                    return (
                      <div
                        key={`dom-${row.price}`}
                        className={`grid grid-cols-3 items-center h-7 px-1.5 font-mono text-[11px] tabular-nums rounded-sm ${
                          row.current
                            ? "bg-[#1A73E8]/[0.08] ring-1 ring-[#1A73E8]/30 font-semibold"
                            : ""
                        }`}
                      >
                        {/* Bid Column */}
                        <div className="relative h-5 flex items-center justify-start">
                          {bidVal && (
                            <>
                              <motion.div
                                animate={{ width: `${bidPct}%` }}
                                transition={{ duration: 0.6 }}
                                className="absolute left-0 inset-y-0.5 rounded-r-xs bg-[#188038]/15"
                              />
                              <span className="relative z-10 pl-1 text-[#188038] font-medium">
                                {bidVal}
                              </span>
                            </>
                          )}
                        </div>

                        {/* Price Spine */}
                        <div
                          className={`text-center ${
                            row.current
                              ? "text-[#1A73E8] font-bold"
                              : "text-[#0B1220]"
                          }`}
                        >
                          {row.price}
                        </div>

                        {/* Ask Column */}
                        <div className="relative h-5 flex items-center justify-end">
                          {askVal && (
                            <>
                              <motion.div
                                animate={{ width: `${askPct}%` }}
                                transition={{ duration: 0.6 }}
                                className="absolute right-0 inset-y-0.5 rounded-l-xs bg-[#D93025]/14"
                              />
                              <span className="relative z-10 pr-1 text-[#D93025] font-medium">
                                {askVal}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bottom Telemetry Strip: Bid/Ask Volume Indicators */}
            <div className="px-4 sm:px-6 py-3.5 bg-[#F8F9FB] border-t border-slate-900/[0.07] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              {/* Aggressive Buy / Sell Pressure Bar */}
              <div className="flex-1 max-w-md">
                <div className="flex items-center justify-between text-[11px] font-medium mb-1">
                  <span className="text-[#188038] tabular-nums">
                    Bid Lift Pressure · {buyRatio}%
                  </span>
                  <span className="text-[#D93025] tabular-nums">
                    {sellRatio}% · Ask Hit Pressure
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-[#D93025]/20 overflow-hidden flex">
                  <motion.div
                    animate={{ width: `${buyRatio}%` }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="h-full bg-[#188038] rounded-l-full"
                  />
                </div>
              </div>

              {/* Session Metrics */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-mono text-xs tabular-nums">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 font-sans text-[11px]">
                    Session Cum. Delta:
                  </span>
                  <span className="font-semibold text-[#188038]">
                    +{cumDelta.toLocaleString()}
                  </span>
                </div>
                <div className="h-3.5 w-px bg-slate-200 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 font-sans text-[11px]">
                    VPOC:
                  </span>
                  <span className="font-semibold text-[#0B1220]">24,445.0</span>
                </div>
                <a
                  href="#simulator"
                  className="inline-flex items-center gap-1 font-sans text-[11.5px] font-semibold text-[#1A73E8] hover:underline"
                >
                  <span>Try Interactive DOM</span>
                  <ArrowDownRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
