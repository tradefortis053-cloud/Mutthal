"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TrustSection } from "@/components/TrustSection";
import { WhatYouLearnSection } from "@/components/WhatYouLearnSection";
import { InteractiveDomSection } from "@/components/InteractiveDomSection";
import { CurriculumSection } from "@/components/CurriculumSection";
import { CoursePreviewSection } from "@/components/CoursePreviewSection";
import { WhyChooseBentoSection } from "@/components/WhyChooseBentoSection";
import { InstructorSection } from "@/components/InstructorSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { FaqSection } from "@/components/FaqSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  const [checkoutPromptOpen, setCheckoutPromptOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section — Above the Fold */}
        <HeroSection />

        {/* 3. Trust & Authority Horizontal Strip */}
        <TrustSection />

        {/* 4. What You'll Learn — 9 Core Competencies */}
        <WhatYouLearnSection />

        {/* 5. Interactive Trading Visualization — Simulated DOM & Footprint */}
        <InteractiveDomSection />

        {/* 6. Course Curriculum — 8 Expandable Modules */}
        <CurriculumSection />

        {/* 7. Course Preview — Video Thumbnail & Modal Player Placeholder */}
        <CoursePreviewSection />

        {/* 8. Why Choose This Course — Refined SaaS Bento Grid */}
        <WhyChooseBentoSection />

        {/* 9. Instructor Profile Section */}
        <InstructorSection />

        {/* 10. Student Testimonials — Sample Placeholder Layout */}
        <TestimonialsSection />

        {/* 11. Pricing & Enrollment — Conversion Focal Card */}
        <PricingSection
          externalCheckoutOpen={checkoutPromptOpen}
          onCloseExternalCheckout={() => setCheckoutPromptOpen(false)}
        />

        {/* 12. Frequently Asked Questions Accordion */}
        <FaqSection />

        {/* 13. Final CTA Section */}
        <FinalCtaSection />
      </main>

      <Footer />
    </div>
  );
}
