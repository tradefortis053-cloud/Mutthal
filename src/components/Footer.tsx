"use client";

import React from "react";
import { siteConfig } from "@/data/courseData";
import { BrandLogoMark } from "@/components/ui/MotionPrimitives";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F8F9FB] border-t border-slate-900/[0.07] pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900/[0.07]">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <a href="#home" className="inline-flex items-center gap-3">
              <BrandLogoMark className="w-8 h-8" />
              <span className="font-display text-[15px] font-bold tracking-tight text-[#0B1220]">
                {siteConfig.brandName}
              </span>
            </a>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed max-w-sm">
              Structured financial market education focused on Order Flow,
              Depth of Market (DOM), Footprint Charts, Liquidity Mechanics, and
              Disciplined Risk Execution.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Course Navigation
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-2.5 text-sm">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-slate-600 hover:text-[#0B1220] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#simulator"
                  className="text-slate-600 hover:text-[#0B1220] transition-colors"
                >
                  DOM Simulator
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-slate-600 hover:text-[#0B1220] transition-colors"
                >
                  Pricing &amp; Enrollment
                </a>
              </li>
            </ul>
          </div>

          {/* Enrollment & Support Column */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Enrollment &amp; Support
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
              <li>
                <a
                  href="#pricing"
                  className="hover:text-[#0B1220] transition-colors"
                >
                  Enroll via Razorpay (Placeholder)
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-[#0B1220] transition-colors"
                >
                  WhatsApp Course Enquiry
                </a>
              </li>
              <li>
                <a
                  href="#preview"
                  className="hover:text-[#0B1220] transition-colors"
                >
                  Watch Sample Lesson
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Educational & Risk Disclosure + Copyright */}
        <div className="pt-8 space-y-4 text-xs text-slate-500 leading-relaxed">
          <p>
            <strong className="text-slate-700 font-semibold">
              Educational &amp; Risk Disclaimer:
            </strong>{" "}
            All content provided in {siteConfig.courseName} by{" "}
            {siteConfig.brandName} is strictly for educational and informational
            purposes only and does not constitute financial, investment, or
            trading advice. Trading financial instruments involves substantial
            risk of loss and is not suitable for every individual. All DOM and
            Footprint visualizations on this page use illustrative simulated
            data for educational demonstration.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 text-slate-400">
            <p>
              &copy; {currentYear} {siteConfig.brandName}. All rights reserved.
            </p>
            <p className="font-mono text-[11px]">
              Order Flow · DOM · Footprint · Liquidity Analysis
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
