"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Info,
  MousePointerClick,
  Pause,
  Play,
  RotateCcw,
  StepForward,
} from "lucide-react";
import {
  AnimatedNumber,
  FadeIn,
  SectionBadge,
} from "@/components/ui/MotionPrimitives";

interface DomRowData {
  price: string;
  bidLimit: number | null;
  askLimit: number | null;
  tradedBid: number;
  tradedAsk: number;
  totalVol: number;
  isCurrentPrice?: boolean;
  isPoc?: boolean;
  highlight?: "absorption" | "buy-imbalance" | "sell-imbalance" | "exhaustion";
  note: string;
}

interface ScenarioConfig {
  id: string;
  label: string;
  shortTag: string;
  headline: string;
  explanation: string;
  buyPressurePct: number;
  barDelta: number;
  cumDelta: number;
  bookSkewLabel: string;
  candleBullish: boolean;
  rows: DomRowData[];
}

const SCENARIOS: ScenarioConfig[] = [
  {
    id: "absorption",
    label: "Passive Ask Absorption",
    shortTag: "Liquidity Wall",
    headline: "Aggressive buying absorbed by a reloading passive Ask limit wall",
    explanation:
      "Notice 24,510.00: aggressive buyers have executed 540 contracts into the Ask, yet a 620-lot resting limit offer continues to hold price from advancing—classic passive supply absorption.",
    buyPressurePct: 68,
    barDelta: 384,
    cumDelta: 1640,
    bookSkewLabel: "1.48× Ask Heavy Overhead",
    candleBullish: false,
    rows: [
      {
        price: "24,515.00",
        bidLimit: null,
        askLimit: 245,
        tradedBid: 0,
        tradedAsk: 0,
        totalVol: 42,
        note: "Resting supply parked above session high.",
      },
      {
        price: "24,512.50",
        bidLimit: null,
        askLimit: 310,
        tradedBid: 14,
        tradedAsk: 28,
        totalVol: 118,
        note: "Light upper test quickly rejected back below 24,510.00.",
      },
      {
        price: "24,510.00",
        bidLimit: null,
        askLimit: 620,
        tradedBid: 92,
        tradedAsk: 540,
        totalVol: 890,
        isPoc: true,
        highlight: "absorption",
        note: "ABSORPTION ZONE: 540 aggressive Ask lifts absorbed by reloading 620-lot limit offer.",
      },
      {
        price: "24,507.50",
        bidLimit: 168,
        askLimit: 195,
        tradedBid: 184,
        tradedAsk: 312,
        totalVol: 615,
        isCurrentPrice: true,
        note: "Inside market spread: buyers struggling to reclaim 24,510.00 despite positive delta.",
      },
      {
        price: "24,505.00",
        bidLimit: 224,
        askLimit: null,
        tradedBid: 165,
        tradedAsk: 248,
        totalVol: 520,
        note: "Prior minor acceptance node acting as immediate Bid support.",
      },
      {
        price: "24,502.50",
        bidLimit: 190,
        askLimit: null,
        tradedBid: 142,
        tradedAsk: 196,
        totalVol: 410,
        note: "Balanced two-way volume rotation.",
      },
      {
        price: "24,500.00",
        bidLimit: 380,
        askLimit: null,
        tradedBid: 198,
        tradedAsk: 210,
        totalVol: 640,
        note: "Round-number resting Bid liquidity shelf.",
      },
      {
        price: "24,497.50",
        bidLimit: 215,
        askLimit: null,
        tradedBid: 88,
        tradedAsk: 64,
        totalVol: 230,
        note: "Thin volume zone below round-number support.",
      },
    ],
  },
  {
    id: "imbalance",
    label: "Stacked Buy Imbalance",
    shortTag: "3.6× Initiative",
    headline: "Three consecutive diagonal Ask imbalances driving directional expansion",
    explanation:
      "Between 24,502.50 and 24,507.50, aggressive market buyers lift the offer by more than 3× the diagonal Bid volume across three stacked ticks—establishing an institutional demand zone.",
    buyPressurePct: 76,
    barDelta: 512,
    cumDelta: 2190,
    bookSkewLabel: "1.62× Bid Depth Support",
    candleBullish: true,
    rows: [
      {
        price: "24,515.00",
        bidLimit: null,
        askLimit: 185,
        tradedBid: 12,
        tradedAsk: 64,
        totalVol: 140,
        note: "Thin overhead Ask depth allowing swift upward price discovery.",
      },
      {
        price: "24,512.50",
        bidLimit: 240,
        askLimit: 142,
        tradedBid: 76,
        tradedAsk: 228,
        totalVol: 420,
        isCurrentPrice: true,
        note: "Current inside market holding firmly above stacked imbalance zone.",
      },
      {
        price: "24,510.00",
        bidLimit: 315,
        askLimit: null,
        tradedBid: 118,
        tradedAsk: 290,
        totalVol: 580,
        note: "Bids stepping up aggressively behind advancing price.",
      },
      {
        price: "24,507.50",
        bidLimit: 390,
        askLimit: null,
        tradedBid: 84,
        tradedAsk: 348,
        totalVol: 720,
        isPoc: true,
        highlight: "buy-imbalance",
        note: "STACKED IMBALANCE (3/3): 348 Ask vs diagonal Bid—strong buyer urgency.",
      },
      {
        price: "24,505.00",
        bidLimit: 340,
        askLimit: null,
        tradedBid: 72,
        tradedAsk: 310,
        totalVol: 635,
        highlight: "buy-imbalance",
        note: "STACKED IMBALANCE (2/3): 3.6× aggressive offer lifting.",
      },
      {
        price: "24,502.50",
        bidLimit: 295,
        askLimit: null,
        tradedBid: 65,
        tradedAsk: 268,
        totalVol: 510,
        highlight: "buy-imbalance",
        note: "STACKED IMBALANCE (1/3): Breakout initiation level; watched closely on pullbacks.",
      },
      {
        price: "24,500.00",
        bidLimit: 410,
        askLimit: null,
        tradedBid: 86,
        tradedAsk: 145,
        totalVol: 390,
        note: "Defended base of impulse candle.",
      },
      {
        price: "24,497.50",
        bidLimit: 230,
        askLimit: null,
        tradedBid: 44,
        tradedAsk: 26,
        totalVol: 145,
        note: "Completed downside auction tail.",
      },
    ],
  },
  {
    id: "balanced",
    label: "Balanced Two-Way Auction",
    shortTag: "Rotational Value",
    headline: "Symmetric order-book liquidity and rotational Value Area acceptance",
    explanation:
      "Both Bid and Ask queues carry balanced depth (~240–290 lots), Footprint volume clusters around the central Point of Control (24,505.00), and net delta stays near zero—signaling patience rather than trend chasing.",
    buyPressurePct: 51,
    barDelta: 24,
    cumDelta: 980,
    bookSkewLabel: "1.04× Balanced Book",
    candleBullish: true,
    rows: [
      {
        price: "24,515.00",
        bidLimit: null,
        askLimit: 280,
        tradedBid: 18,
        tradedAsk: 12,
        totalVol: 95,
        note: "Upper Value Area boundary with steady passive sellers.",
      },
      {
        price: "24,512.50",
        bidLimit: null,
        askLimit: 255,
        tradedBid: 64,
        tradedAsk: 58,
        totalVol: 210,
        note: "Low participation outside core value node.",
      },
      {
        price: "24,510.00",
        bidLimit: null,
        askLimit: 240,
        tradedBid: 138,
        tradedAsk: 144,
        totalVol: 430,
        note: "Even matching between passive offers and moderate buying.",
      },
      {
        price: "24,507.50",
        bidLimit: null,
        askLimit: 215,
        tradedBid: 210,
        tradedAsk: 218,
        totalVol: 620,
        note: "Active rotational trade just above POC.",
      },
      {
        price: "24,505.00",
        bidLimit: 232,
        askLimit: 226,
        tradedBid: 284,
        tradedAsk: 292,
        totalVol: 860,
        isCurrentPrice: true,
        isPoc: true,
        note: "HIGH VOLUME NODE (VPOC): Fair value equilibrium—avoid forcing breakout trades here.",
      },
      {
        price: "24,502.50",
        bidLimit: 248,
        askLimit: null,
        tradedBid: 196,
        tradedAsk: 188,
        totalVol: 540,
        note: "Symmetric Bid liquidity cushioning minor dips.",
      },
      {
        price: "24,500.00",
        bidLimit: 290,
        askLimit: null,
        tradedBid: 124,
        tradedAsk: 118,
        totalVol: 375,
        note: "Lower Value Area support shelf.",
      },
      {
        price: "24,497.50",
        bidLimit: 265,
        askLimit: null,
        tradedBid: 36,
        tradedAsk: 22,
        totalVol: 110,
        note: "Quiet downside tail.",
      },
    ],
  },
  {
    id: "exhaustion",
    label: "Liquidity Sweep & Exhaustion",
    shortTag: "Buyer Exhaustion",
    headline: "Thin volume at session high followed by aggressive seller step-in",
    explanation:
      "At 24,515.00, buyers run out of urgency (only 9 contracts lifted at the high, 0 Bid print—a finished auction), immediately followed by diagonal sell imbalances hitting the Bid down to 24,502.50.",
    buyPressurePct: 34,
    barDelta: -296,
    cumDelta: 685,
    bookSkewLabel: "1.54× Ask Pressure",
    candleBullish: false,
    rows: [
      {
        price: "24,515.00",
        bidLimit: null,
        askLimit: 310,
        tradedBid: 0,
        tradedAsk: 9,
        totalVol: 28,
        highlight: "exhaustion",
        note: "BUYER EXHAUSTION: 0 × 9 print at extreme high shows buyers completely dried up.",
      },
      {
        price: "24,512.50",
        bidLimit: null,
        askLimit: 275,
        tradedBid: 42,
        tradedAsk: 18,
        totalVol: 115,
        highlight: "exhaustion",
        note: "Thin Low-Volume tail left behind after stop sweep.",
      },
      {
        price: "24,510.00",
        bidLimit: null,
        askLimit: 340,
        tradedBid: 238,
        tradedAsk: 62,
        totalVol: 485,
        highlight: "sell-imbalance",
        note: "SELL IMBALANCE: Aggressive sellers hitting Bids as breakout buyers exit.",
      },
      {
        price: "24,507.50",
        bidLimit: null,
        askLimit: 295,
        tradedBid: 276,
        tradedAsk: 74,
        totalVol: 560,
        highlight: "sell-imbalance",
        note: "Consecutive diagonal sell imbalance confirming downward initiative.",
      },
      {
        price: "24,505.00",
        bidLimit: null,
        askLimit: 245,
        tradedBid: 310,
        tradedAsk: 195,
        totalVol: 780,
        isPoc: true,
        note: "Heaviest volume traded as price slices back inside prior range.",
      },
      {
        price: "24,502.50",
        bidLimit: 185,
        askLimit: 210,
        tradedBid: 214,
        tradedAsk: 112,
        totalVol: 490,
        isCurrentPrice: true,
        note: "Current inside market testing lower support.",
      },
      {
        price: "24,500.00",
        bidLimit: 320,
        askLimit: null,
        tradedBid: 110,
        tradedAsk: 88,
        totalVol: 340,
        note: "Resting Bid liquidity target below.",
      },
      {
        price: "24,497.50",
        bidLimit: 270,
        askLimit: null,
        tradedBid: 48,
        tradedAsk: 34,
        totalVol: 150,
        note: "Secondary resting Bid depth.",
      },
    ],
  },
];

export function InteractiveDomSection() {
  const prefersReducedMotion = useReducedMotion();
  const [scenarioId, setScenarioId] = useState<string>("absorption");
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [simStep, setSimStep] = useState<number>(0);
  const [selectedRowIdx, setSelectedRowIdx] = useState<number>(2);

  const activeScenario = useMemo(
    () => SCENARIOS.find((s) => s.id === scenarioId) ?? SCENARIOS[0],
    [scenarioId]
  );

  // Reset selected row to the most educational row when switching scenario
  useEffect(() => {
    const highlightIdx = activeScenario.rows.findIndex(
      (r) => r.highlight || r.isPoc
    );
    setSelectedRowIdx(highlightIdx >= 0 ? highlightIdx : 3);
    setSimStep(0);
  }, [activeScenario]);

  // Subtle educational simulation timer
  useEffect(() => {
    if (!isPlaying || prefersReducedMotion) return;
    const interval = setInterval(() => {
      setSimStep((prev) => (prev + 1) % 6);
    }, 1800);
    return () => clearInterval(interval);
  }, [isPlaying, prefersReducedMotion]);

  // Compute gently animated demo figures from simStep
  const animatedRows = useMemo(() => {
    const offsets = [0, 8, -5, 14, 4, -9];
    const deltaShift = offsets[simStep];

    return activeScenario.rows.map((row, idx) => {
      const localVar = ((simStep + idx) % 3 === 0 ? 1 : -1) * Math.abs(deltaShift);
      const bidLimit =
        row.bidLimit !== null ? Math.max(20, row.bidLimit + localVar) : null;
      const askLimit =
        row.askLimit !== null ? Math.max(20, row.askLimit - localVar) : null;
      const tradedBid =
        row.isCurrentPrice || row.isPoc
          ? Math.max(0, row.tradedBid + Math.max(0, simStep * 3))
          : row.tradedBid;
      const tradedAsk =
        row.isCurrentPrice || row.isPoc
          ? Math.max(0, row.tradedAsk + Math.max(0, simStep * 4))
          : row.tradedAsk;
      const totalVol = row.totalVol + (row.isCurrentPrice || row.isPoc ? simStep * 7 : 0);

      return {
        ...row,
        bidLimit,
        askLimit,
        tradedBid,
        tradedAsk,
        totalVol,
      };
    });
  }, [activeScenario, simStep]);

  const maxLimitDepth = 660;
  const maxVolumeProfile = 940;
  const inspectedRow = animatedRows[selectedRowIdx] ?? animatedRows[0];

  const liveBuyPct = Math.min(
    88,
    Math.max(18, activeScenario.buyPressurePct + (simStep % 2 === 0 ? 1 : -1))
  );
  const liveSellPct = 100 - liveBuyPct;
  const liveBarDelta = activeScenario.barDelta + simStep * (activeScenario.barDelta >= 0 ? 6 : -5);
  const liveCumDelta = activeScenario.cumDelta + simStep * (activeScenario.barDelta >= 0 ? 9 : -7);

  return (
    <section
      id="simulator"
      className="py-24 sm:py-32 bg-[#F8F9FB] border-y border-slate-900/[0.07] relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header + Clear Demo Label */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <FadeIn className="max-w-2xl">
            <SectionBadge label="Interactive Trading Visualization" accent="green" />
            <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-0.03em] leading-[1.12] text-[#0B1220]">
              Experience how Order Flow &amp; DOM reveal hidden liquidity.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Switch between four foundational auction scenarios below—or click
              any price row on the ladder—to inspect how resting depth, executed
              Footprint clusters, and delta interact.
            </p>
          </FadeIn>

          {/* Honest Educational Simulation Notice */}
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2.5 rounded-2xl bg-white border border-slate-900/10 px-4 py-2.5 shadow-xs">
              <Info className="w-4 h-4 text-[#1A73E8] shrink-0" />
              <span className="text-xs font-medium text-slate-600">
                <strong className="text-[#0B1220]">Illustrative Demo Data:</strong>{" "}
                Simulated for educational demonstration—not a live market feed.
              </span>
            </div>
          </FadeIn>
        </div>

        {/* Scenario Selector Bar + Playback Controls */}
        <FadeIn delay={0.15} className="mt-10">
          <div className="flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-4 rounded-2xl bg-white border border-slate-900/[0.08] p-2.5 shadow-card">
            {/* 4 Scenario Buttons */}
            <div
              role="tablist"
              aria-label="Order Flow Educational Scenarios"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1.5 flex-1"
            >
              {SCENARIOS.map((scen) => {
                const active = scen.id === scenarioId;
                return (
                  <button
                    key={scen.id}
                    role="tab"
                    type="button"
                    aria-selected={active}
                    onClick={() => setScenarioId(scen.id)}
                    className={`flex flex-col items-start text-left rounded-xl px-3.5 py-2.5 transition-all cursor-pointer ${
                      active
                        ? "bg-[#0B1220] text-white shadow-xs"
                        : "bg-transparent text-slate-600 hover:bg-slate-100/80 hover:text-[#0B1220]"
                    }`}
                  >
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider ${
                        active ? "text-[#8AB4F8]" : "text-slate-400"
                      }`}
                    >
                      {scen.shortTag}
                    </span>
                    <span className="text-[13px] font-semibold mt-0.5 leading-snug">
                      {scen.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Simulation Controls */}
            <div className="flex items-center justify-between sm:justify-end gap-2 px-2 pt-2 xl:pt-0 border-t xl:border-t-0 xl:border-l border-slate-900/[0.07] xl:pl-4">
              <button
                type="button"
                onClick={() => setIsPlaying((p) => !p)}
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#F8F9FB] hover:bg-slate-100 border border-slate-900/10 px-3.5 py-2 text-xs font-semibold text-[#0B1220] transition-colors cursor-pointer"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 text-[#1A73E8]" />
                    <span>Pause Flow</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-[#188038]" />
                    <span>Animate Flow</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsPlaying(false);
                  setSimStep((prev) => (prev + 1) % 6);
                }}
                title="Advance one illustrative tick"
                className="inline-flex items-center gap-1.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-900/10 px-3 py-2 text-xs font-medium text-slate-700 transition-colors cursor-pointer"
              >
                <StepForward className="w-3.5 h-3.5" />
                <span>Step</span>
              </button>

              <button
                type="button"
                onClick={() => setSimStep(0)}
                title="Reset scenario step"
                aria-label="Reset simulation step"
                className="inline-flex items-center justify-center rounded-xl bg-white hover:bg-slate-50 border border-slate-900/10 p-2 text-slate-600 hover:text-[#0B1220] transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </FadeIn>

        {/* Main Interactive Workbench Grid */}
        <FadeIn delay={0.22} className="mt-6">
          <div className="rounded-3xl bg-white border border-slate-900/10 shadow-elevated overflow-hidden">
            {/* Workbench Top Status Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 sm:px-7 py-3.5 bg-[#FCFDFE] border-b border-slate-900/[0.07]">
              <div className="flex items-center gap-2.5">
                <span
                  className={`h-2 w-2 rounded-full ${
                    isPlaying ? "bg-[#188038]" : "bg-slate-400"
                  }`}
                />
                <span className="text-xs font-semibold text-[#0B1220]">
                  DEMO INSTRUMENT · INDEX FUTURES (SIMULATED)
                </span>
                <span className="hidden sm:inline-block text-xs text-slate-400">
                  |
                </span>
                <span className="hidden sm:inline-block text-xs text-slate-500">
                  Tick Size: <span className="font-mono text-[#0B1220]">2.50</span>
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <MousePointerClick className="w-3.5 h-3.5 text-[#1A73E8]" />
                <span>Click any price row to inspect level mechanics</span>
              </div>
            </div>

            {/* Two-Pane Main Body: Left DOM + Footprint | Right Telemetry & Education */}
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-900/[0.07]">
              {/* Left 8 Cols: Integrated DOM Ladder + Footprint Candle + Volume Profile */}
              <div className="lg:col-span-8 p-4 sm:p-6 overflow-x-auto">
                <div className="min-w-[560px]">
                  {/* Column Headers */}
                  <div className="grid grid-cols-12 items-center pb-2.5 px-2 border-b border-slate-900/[0.08] text-[10.5px] font-semibold uppercase tracking-wider text-slate-400">
                    <div className="col-span-2 text-left text-[#188038]">
                      Resting Bid
                    </div>
                    <div className="col-span-2 text-center text-[#0B1220]">
                      Price Ladder
                    </div>
                    <div className="col-span-2 text-right text-[#D93025]">
                      Resting Ask
                    </div>
                    <div className="col-span-4 text-center text-[#1A73E8]">
                      Footprint Candle (Bid × Ask)
                    </div>
                    <div className="col-span-2 text-right">Volume Profile</div>
                  </div>

                  {/* Interactive Price Ladder Rows */}
                  <div className="divide-y divide-slate-900/[0.05] mt-1">
                    {animatedRows.map((row, idx) => {
                      const isSelected = idx === selectedRowIdx;
                      const bidBarPct = row.bidLimit
                        ? Math.min(100, (row.bidLimit / maxLimitDepth) * 100)
                        : 0;
                      const askBarPct = row.askLimit
                        ? Math.min(100, (row.askLimit / maxLimitDepth) * 100)
                        : 0;
                      const volBarPct = Math.min(
                        100,
                        (row.totalVol / maxVolumeProfile) * 100
                      );

                      return (
                        <button
                          key={row.price}
                          type="button"
                          onClick={() => setSelectedRowIdx(idx)}
                          className={`w-full grid grid-cols-12 items-center h-11 px-2 text-left transition-colors cursor-pointer rounded-lg ${
                            isSelected
                              ? "bg-[#1A73E8]/[0.07] ring-1 ring-[#1A73E8]/35"
                              : row.isCurrentPrice
                              ? "bg-slate-900/[0.025] hover:bg-slate-900/[0.045]"
                              : "hover:bg-slate-50"
                          }`}
                        >
                          {/* 1. Resting Bid Depth */}
                          <div className="col-span-2 relative h-7 flex items-center pr-2">
                            {row.bidLimit !== null && (
                              <>
                                <motion.div
                                  animate={{ width: `${bidBarPct}%` }}
                                  transition={{ duration: 0.45, ease: "easeOut" }}
                                  className="absolute left-0 inset-y-0.5 rounded-r-md bg-[#188038]/16"
                                />
                                <span className="relative z-10 pl-2 font-mono text-xs font-semibold text-[#188038] tabular-nums">
                                  {row.bidLimit}
                                </span>
                              </>
                            )}
                          </div>

                          {/* 2. Price Spine */}
                          <div className="col-span-2 flex items-center justify-center gap-1.5">
                            <span
                              className={`font-mono text-xs tabular-nums px-2 py-1 rounded-md ${
                                row.isCurrentPrice
                                  ? "bg-[#0B1220] text-white font-bold"
                                  : row.isPoc
                                  ? "bg-[#FEF7E0] text-[#B06000] border border-[#E37400]/40 font-semibold"
                                  : "text-[#0B1220] font-medium"
                              }`}
                            >
                              {row.price}
                            </span>
                          </div>

                          {/* 3. Resting Ask Depth */}
                          <div className="col-span-2 relative h-7 flex items-center justify-end pl-2">
                            {row.askLimit !== null && (
                              <>
                                <motion.div
                                  animate={{ width: `${askBarPct}%` }}
                                  transition={{ duration: 0.45, ease: "easeOut" }}
                                  className={`absolute right-0 inset-y-0.5 rounded-l-md ${
                                    row.highlight === "absorption"
                                      ? "bg-[#E37400]/25"
                                      : "bg-[#D93025]/16"
                                  }`}
                                />
                                <span
                                  className={`relative z-10 pr-2 font-mono text-xs font-semibold tabular-nums ${
                                    row.highlight === "absorption"
                                      ? "text-[#B06000]"
                                      : "text-[#D93025]"
                                  }`}
                                >
                                  {row.askLimit}
                                </span>
                              </>
                            )}
                          </div>

                          {/* 4. Footprint-Style Candle Visualization */}
                          <div className="col-span-4 px-3 flex items-center gap-2">
                            {/* Candle Body / Wick Spine */}
                            <div className="w-2 h-9 flex flex-col items-center justify-center shrink-0">
                              <div
                                className={`w-1.5 h-full rounded-xs ${
                                  idx >= 1 && idx <= 6
                                    ? activeScenario.candleBullish
                                      ? "bg-[#188038]/80"
                                      : "bg-[#D93025]/80"
                                    : "w-0.5 bg-slate-300"
                                }`}
                              />
                            </div>

                            {/* Footprint Bid x Ask Cell */}
                            <div
                              className={`flex-1 grid grid-cols-2 items-center h-7 rounded-md px-2 font-mono text-xs tabular-nums border ${
                                row.isPoc
                                  ? "bg-[#FEF7E0] border-[#E37400]/55 font-semibold"
                                  : row.highlight === "buy-imbalance"
                                  ? "bg-[#188038]/[0.08] border-[#188038]/35"
                                  : row.highlight === "sell-imbalance"
                                  ? "bg-[#D93025]/[0.08] border-[#D93025]/35"
                                  : row.highlight === "absorption"
                                  ? "bg-[#E37400]/[0.10] border-[#E37400]/45"
                                  : "bg-[#F8F9FB] border-slate-900/[0.06]"
                              }`}
                            >
                              <span
                                className={`text-right pr-2 border-r border-slate-200 ${
                                  row.highlight === "sell-imbalance"
                                    ? "text-[#D93025] font-bold"
                                    : "text-slate-600"
                                }`}
                              >
                                {row.tradedBid}
                              </span>
                              <span
                                className={`text-left pl-2 ${
                                  row.highlight === "buy-imbalance"
                                    ? "text-[#188038] font-bold"
                                    : row.highlight === "absorption"
                                    ? "text-[#B06000] font-bold"
                                    : "text-slate-800"
                                }`}
                              >
                                {row.tradedAsk}
                              </span>
                            </div>
                          </div>

                          {/* 5. Traded Volume Profile */}
                          <div className="col-span-2 relative h-7 flex items-center justify-end">
                            <motion.div
                              animate={{ width: `${volBarPct}%` }}
                              transition={{ duration: 0.45, ease: "easeOut" }}
                              className={`absolute right-0 inset-y-1 rounded-l-sm ${
                                row.isPoc ? "bg-[#1A73E8]/30" : "bg-slate-200/85"
                              }`}
                            />
                            <span className="relative z-10 pr-1.5 font-mono text-[11px] text-slate-700 tabular-nums">
                              {row.totalVol}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Legend Footer */}
                  <div className="mt-4 pt-3 border-t border-slate-900/[0.06] flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-500">
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-xs bg-[#0B1220]" />
                        Inside Traded Price
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-xs bg-[#FEF7E0] border border-[#E37400]" />
                        Point of Control (POC)
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-xs bg-[#188038]/25 border border-[#188038]" />
                        Buy Imbalance
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-xs bg-[#D93025]/25 border border-[#D93025]" />
                        Sell Imbalance
                      </span>
                    </div>
                    <span className="font-mono text-[10.5px] text-slate-400">
                      DEMO SIMULATION
                    </span>
                  </div>
                </div>
              </div>

              {/* Right 4 Cols: Pressure Indicators + Educational Inspector */}
              <div className="lg:col-span-4 p-5 sm:p-6 bg-[#FCFDFE] flex flex-col justify-between gap-6">
                {/* Scenario Takeaway Card */}
                <div>
                  <span className="inline-block font-mono text-[10.5px] font-semibold uppercase tracking-wider text-[#1A73E8]">
                    Active Pattern Analysis
                  </span>
                  <h3 className="mt-1.5 font-display text-lg font-bold text-[#0B1220] leading-snug">
                    {activeScenario.headline}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-slate-600">
                    {activeScenario.explanation}
                  </p>
                </div>

                {/* Buying & Selling Pressure Indicators */}
                <div className="rounded-2xl bg-white border border-slate-900/[0.08] p-4 shadow-2xs space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                      <span className="text-[#188038] tabular-nums">
                        Buy Pressure · {liveBuyPct}%
                      </span>
                      <span className="text-[#D93025] tabular-nums">
                        {liveSellPct}% · Sell Pressure
                      </span>
                    </div>
                    <div className="h-2.5 w-full rounded-full bg-[#D93025]/20 overflow-hidden flex">
                      <motion.div
                        animate={{ width: `${liveBuyPct}%` }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="h-full bg-[#188038] rounded-l-full"
                      />
                    </div>
                  </div>

                  {/* Delta & Book Skew Metrics */}
                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-900/[0.06]">
                    <div className="rounded-xl bg-[#F8F9FB] p-2.5 border border-slate-900/[0.05]">
                      <span className="block text-[10.5px] text-slate-500">
                        Bar Net Delta
                      </span>
                      <span
                        className={`mt-0.5 block font-mono text-sm font-bold ${
                          liveBarDelta >= 0 ? "text-[#188038]" : "text-[#D93025]"
                        }`}
                      >
                        <AnimatedNumber
                          value={liveBarDelta}
                          prefix={liveBarDelta >= 0 ? "+" : ""}
                        />
                      </span>
                    </div>

                    <div className="rounded-xl bg-[#F8F9FB] p-2.5 border border-slate-900/[0.05]">
                      <span className="block text-[10.5px] text-slate-500">
                        Session Cum. Delta
                      </span>
                      <span className="mt-0.5 block font-mono text-sm font-bold text-[#0B1220]">
                        <AnimatedNumber
                          value={liveCumDelta}
                          prefix={liveCumDelta >= 0 ? "+" : ""}
                        />
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1">
                    <span className="text-slate-500">Resting Depth Skew:</span>
                    <span className="font-mono font-semibold text-[#0B1220]">
                      {activeScenario.bookSkewLabel}
                    </span>
                  </div>
                </div>

                {/* Selected Price Row Inspector */}
                <div className="rounded-2xl bg-[#0B1220] text-white p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[10.5px] font-mono uppercase tracking-wider text-[#8AB4F8]">
                      Selected Tick Inspector
                    </span>
                    <span className="font-mono text-xs font-bold bg-white/10 px-2 py-0.5 rounded-md">
                      @ {inspectedRow.price}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mt-3 pb-3 border-b border-white/10 font-mono text-xs tabular-nums">
                    <div>
                      <span className="block text-[10px] text-slate-400">
                        Bid × Ask
                      </span>
                      <span className="font-semibold text-white">
                        {inspectedRow.tradedBid} × {inspectedRow.tradedAsk}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-400">
                        Level Δ
                      </span>
                      <span
                        className={`font-semibold ${
                          inspectedRow.tradedAsk - inspectedRow.tradedBid >= 0
                            ? "text-[#81C995]"
                            : "text-[#F28B82]"
                        }`}
                      >
                        {inspectedRow.tradedAsk - inspectedRow.tradedBid >= 0
                          ? "+"
                          : ""}
                        {inspectedRow.tradedAsk - inspectedRow.tradedBid}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-400">
                        Total Vol
                      </span>
                      <span className="font-semibold text-white">
                        {inspectedRow.totalVol}
                      </span>
                    </div>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-slate-300">
                    {inspectedRow.note}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
