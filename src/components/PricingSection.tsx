"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  CreditCard,
  Lock,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { pricingFeatures, siteConfig } from "@/data/courseData";
import {
  FadeIn,
  MagneticButton,
  SectionBadge,
} from "@/components/ui/MotionPrimitives";

interface PricingSectionProps {
  externalCheckoutOpen?: boolean;
  onCloseExternalCheckout?: () => void;
}

export function PricingSection({
  externalCheckoutOpen = false,
  onCloseExternalCheckout,
}: PricingSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [whatsappModalOpen, setWhatsappModalOpen] = useState(false);

  const isRazorpayModalVisible = checkoutModalOpen || externalCheckoutOpen;

  const closeRazorpayModal = () => {
    setCheckoutModalOpen(false);
    onCloseExternalCheckout?.();
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeRazorpayModal();
        setWhatsappModalOpen(false);
      }
    };
    if (isRazorpayModalVisible || whatsappModalOpen) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  const handleEnrollClick = () => {
    const { razorpay } = siteConfig.integrations;
    if (razorpay.enabled && razorpay.paymentLinkUrl) {
      window.open(razorpay.paymentLinkUrl, "_blank", "noopener,noreferrer");
      return;
    }
    setCheckoutModalOpen(true);
  };

  const handleWhatsAppClick = () => {
    const { whatsapp } = siteConfig.integrations;
    if (
      whatsapp.enabled &&
      whatsapp.phoneNumberPlaceholder &&
      !whatsapp.phoneNumberPlaceholder.includes("[")
    ) {
      const encoded = encodeURIComponent(whatsapp.prefilledMessage);
      window.open(
        `https://wa.me/${whatsapp.phoneNumberPlaceholder}?text=${encoded}`,
        "_blank",
        "noopener,noreferrer"
      );
      return;
    }
    setWhatsappModalOpen(true);
  };

  return (
    <section
      id="pricing"
      className="py-24 sm:py-32 bg-[#F8F9FB] border-y border-slate-900/[0.07] relative overflow-hidden"
    >
      {/* Subtle architectural grid background */}
      <div
        className="pointer-events-none absolute inset-0 bg-architectural-grid opacity-55 [mask-image:radial-gradient(ellipse_70%_65%_at_50%_50%,#000_35%,transparent_100%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <FadeIn className="text-center max-w-2xl mx-auto">
          <SectionBadge label="Pricing & Enrollment" accent="green" />
          <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-[-0.03em] leading-[1.1] text-[#0B1220]">
            Invest in genuine market comprehension.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            One transparent curriculum covering Order Flow, DOM, Footprint
            Charts, Liquidity Analysis, and Risk Execution from the ground up.
          </p>
        </FadeIn>

        {/* Premium Focal Pricing Card */}
        <FadeIn delay={0.12} className="mt-12">
          <div className="rounded-[28px] bg-white border border-slate-900/12 shadow-elevated overflow-hidden">
            {/* Subtle Google-inspired 4-segment micro top accent line */}
            <div className="grid grid-cols-4 h-1 w-full" aria-hidden="true">
              <div className="bg-[#1A73E8]" />
              <div className="bg-[#EA4335]" />
              <div className="bg-[#FBBC04]" />
              <div className="bg-[#34A853]" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-900/[0.08]">
              {/* Left 7 Cols: Course Name & Included Features */}
              <div className="lg:col-span-7 p-7 sm:p-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#1A73E8]/[0.08] px-3 py-1 text-xs font-semibold text-[#1A73E8]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Complete Flagship Program</span>
                </div>

                <h3 className="mt-4 font-display text-2xl sm:text-3xl font-bold text-[#0B1220] tracking-tight">
                  {siteConfig.courseName}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Structured 8-module curriculum designed to build calm,
                  independent Order Flow &amp; Depth of Market reading skills.
                </p>

                <div className="mt-7 pt-6 border-t border-slate-900/[0.07]">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                    What&apos;s Included in Enrollment
                  </p>

                  <ul className="space-y-3.5">
                    {pricingFeatures.map((feat) => (
                      <li
                        key={feat.label}
                        className="flex items-start gap-3"
                      >
                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            feat.isOptionalPlaceholder
                              ? "bg-slate-100 text-slate-500 border border-dashed border-slate-300"
                              : "bg-[#188038]/12 text-[#188038]"
                          }`}
                        >
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </span>
                        <div>
                          <span
                            className={`text-[14.5px] font-semibold ${
                              feat.isOptionalPlaceholder
                                ? "text-slate-600"
                                : "text-[#0B1220]"
                            }`}
                          >
                            {feat.label}
                          </span>
                          <p className="text-xs text-slate-500 mt-0.5">
                            {feat.detail}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right 5 Cols: Price Display, Enroll CTA, Razorpay & WhatsApp */}
              <div className="lg:col-span-5 p-7 sm:p-10 bg-[#FCFDFE] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Course Enrollment Fee
                  </span>

                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="font-display text-4xl sm:text-[42px] font-bold tracking-tight text-[#0B1220] tabular-nums">
                      {siteConfig.priceDisplay}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-slate-500">
                    {siteConfig.priceSubtext}
                  </p>

                  {/* Primary Enroll CTA */}
                  <div className="mt-7">
                    <MagneticButton
                      onClick={handleEnrollClick}
                      variant="primary"
                      className="w-full py-4 px-6 text-[15px]"
                    >
                      <span>Enroll Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </MagneticButton>
                  </div>

                  {/* Secondary WhatsApp Enquiry CTA */}
                  <div className="mt-3">
                    <button
                      type="button"
                      onClick={handleWhatsAppClick}
                      className="w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-white hover:bg-[#F8F9FB] border border-slate-900/12 px-5 py-3.5 text-sm font-semibold text-[#0B1220] transition-colors cursor-pointer shadow-2xs"
                    >
                      <MessageCircle className="w-4 h-4 text-[#188038]" />
                      <span>Enquire on WhatsApp</span>
                    </button>
                  </div>
                </div>

                {/* Secure Checkout & Razorpay Integration Note */}
                <div className="mt-8 pt-6 border-t border-slate-900/[0.07] space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#0B1220]">
                    <Lock className="w-3.5 h-3.5 text-[#188038] shrink-0" />
                    <span>Secure Checkout · Razorpay Ready</span>
                  </div>
                  <p className="text-[11.5px] leading-relaxed text-slate-500">
                    Supports UPI, Credit/Debit Cards, and NetBanking via{" "}
                    <strong className="text-slate-700">Razorpay</strong>{" "}
                    (payment integration placeholder ready for merchant key).
                  </p>

                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {["UPI", "Visa / Mastercard", "RuPay", "NetBanking"].map(
                      (method) => (
                        <span
                          key={method}
                          className="rounded-md bg-white border border-slate-900/[0.08] px-2 py-0.5 font-mono text-[10px] font-medium text-slate-600"
                        >
                          {method}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Razorpay Integration Placeholder Modal */}
      <AnimatePresence>
        {isRazorpayModalVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1220]/65 backdrop-blur-sm p-4"
            onClick={closeRazorpayModal}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="razorpay-modal-title"
              initial={
                prefersReducedMotion
                  ? { opacity: 1 }
                  : { opacity: 0, scale: 0.96, y: 10 }
              }
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={
                prefersReducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.96, y: 10 }
              }
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-3xl bg-white border border-slate-900/12 shadow-elevated overflow-hidden"
            >
              <div className="flex items-center justify-between px-6 py-4 bg-[#F8F9FB] border-b border-slate-900/[0.07]">
                <div className="flex items-center gap-2.5">
                  <CreditCard className="w-4 h-4 text-[#1A73E8]" />
                  <h3
                    id="razorpay-modal-title"
                    className="font-display text-base font-semibold text-[#0B1220]"
                  >
                    Razorpay Checkout Placeholder
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={closeRazorpayModal}
                  aria-label="Close checkout modal"
                  className="rounded-full p-1.5 text-slate-500 hover:bg-slate-200/70 hover:text-[#0B1220] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6 space-y-5">
                <div className="rounded-2xl bg-[#F8F9FB] border border-slate-900/[0.08] p-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500">Selected Course</p>
                    <p className="font-display text-base font-bold text-[#0B1220]">
                      {siteConfig.courseName}
                    </p>
                  </div>
                  <span className="font-mono text-lg font-bold text-[#0B1220]">
                    {siteConfig.priceDisplay}
                  </span>
                </div>

                <div className="space-y-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  <p className="font-semibold text-[#0B1220] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#188038]" />
                    Ready for Razorpay Live Integration
                  </p>
                  <p>
                    Connect your Razorpay Payment Page URL or Standard Checkout{" "}
                    <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-[11.5px] text-[#0B1220]">
                      order_id
                    </code>{" "}
                    inside{" "}
                    <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-[11.5px] text-[#0B1220]">
                      src/data/courseData.ts
                    </code>{" "}
                    using key{" "}
                    <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-[11.5px] text-[#1A73E8]">
                      {siteConfig.integrations.razorpay.keyIdPlaceholder}
                    </code>
                    .
                  </p>
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      closeRazorpayModal();
                      setWhatsappModalOpen(true);
                    }}
                    className="rounded-full px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    Ask via WhatsApp Instead
                  </button>
                  <button
                    type="button"
                    onClick={closeRazorpayModal}
                    className="rounded-full bg-[#0B1220] text-white px-5 py-2.5 text-xs font-semibold hover:bg-[#162033] transition-colors cursor-pointer"
                  >
                    Got It
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Enquiry Placeholder Modal */}
      <AnimatePresence>
        {whatsappModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1220]/65 backdrop-blur-sm p-4"
            onClick={() => setWhatsappModalOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="whatsapp-modal-title"
              initial={
                prefersReducedMotion
                  ? { opacity: 1 }
                  : { opacity: 0, scale: 0.96, y: 10 }
              }
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={
                prefersReducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.96, y: 10 }
              }
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-3xl bg-white border border-slate-900/12 shadow-elevated overflow-hidden"
            >
              <div className="flex items-center justify-between px-6 py-4 bg-[#F8F9FB] border-b border-slate-900/[0.07]">
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-4 h-4 text-[#188038]" />
                  <h3
                    id="whatsapp-modal-title"
                    className="font-display text-base font-semibold text-[#0B1220]"
                  >
                    WhatsApp Enquiry Placeholder
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setWhatsappModalOpen(false)}
                  aria-label="Close WhatsApp modal"
                  className="rounded-full p-1.5 text-slate-500 hover:bg-slate-200/70 hover:text-[#0B1220] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-[13.5px] text-slate-600 leading-relaxed">
                  Have questions about curriculum suitability, charting
                  platforms, or access terms before enrolling? Set your WhatsApp
                  Business number in{" "}
                  <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-xs text-[#0B1220]">
                    src/data/courseData.ts
                  </code>{" "}
                  to open a direct chat automatically:
                </p>

                <div className="rounded-xl bg-[#F8F9FB] border border-slate-900/[0.08] p-3.5 font-mono text-xs text-slate-700 break-all">
                  https://wa.me/
                  {siteConfig.integrations.whatsapp.phoneNumberPlaceholder}
                </div>

                <div className="flex justify-end pt-1">
                  <button
                    type="button"
                    onClick={() => setWhatsappModalOpen(false)}
                    className="rounded-full bg-[#0B1220] text-white px-5 py-2.5 text-xs font-semibold hover:bg-[#162033] transition-colors cursor-pointer"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
