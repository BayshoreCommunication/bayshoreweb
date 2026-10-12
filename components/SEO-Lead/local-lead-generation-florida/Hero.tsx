"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  TrendingUp,
  ArrowDown,
  Users,
  Target,
} from "lucide-react";

/**
 * =============================================================================
 * BACKGROUND IMAGE PATH
 * The user-provided background image from /public/assets/seo-lead/hero-bg.png
 * Contains the exact composition: white left, orange arc, courthouse columns,
 * and bronze Lady Justice on the right side.
 * =============================================================================
 */
export const HERO_BACKGROUND_IMAGE = "/assets/seo-lead/hero-bg.png";

// High-performance animated number counter with smooth exponential ease-out
function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 1.6,
  formatNumber = true,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  formatNumber?: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(value);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    // Start with 0 (or baseline) and animate to target
    setDisplayValue(0);

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min(
        (timestamp - startTimestamp) / (duration * 1000),
        1
      );
      // Smooth easeOutExpo curve
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplayValue(Math.round(easeProgress * value));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [value, duration]);

  const formatted = formatNumber
    ? displayValue.toLocaleString()
    : displayValue.toString();

  return (
    <span className="tabular-nums font-inter">
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

interface HeroProps {
  bgImage?: string;
}

export default function Hero({ bgImage = HERO_BACKGROUND_IMAGE }: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-white text-[#0A192F]  flex items-center px-16 md:px-0">
      {/* =========================================================================
          BACKGROUND IMAGE LAYER
          Renders user-provided /assets/seo-lead/hero-bg.png
          - Anchored to the right so Lady Justice and courthouse columns are framed on the right
          - Pure white left extends seamlessly into bg-white on wide screens
          - Mobile overlay ensures 100% crystal-clear readability
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <Image
          src={bgImage}
          alt="Florida Legal Lead Generation - Bayshore Communication"
          fill
          priority
          quality={95}
          className="object-cover object-right"
          sizes="100vw"
        />
        {/* Soft overlay on mobile/tablet screens for maximum text contrast */}
        <div className="absolute inset-0 bg-white/90 sm:bg-white/80 lg:hidden" />
      </div>

      {/* =========================================================================
          CONTENT CONTAINER
          ========================================================================= */}
      <div className="relative z-10 w-full mx-auto max-w-[1580px]  py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          
          {/* =====================================================================
              LEFT COLUMN: Title, Subtitle, CTA Buttons, 4 Bottom Stats
              ===================================================================== */}
          <div className="lg:col-span-7 xl:col-span-7 2xl:col-span-7">
            
            {/* Top Filing Badge */}
            <div className="inline-flex items-center gap-2 rounded-[5px] border border-[#CBD5E1] bg-white px-3.5 py-1.5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <span className="font-mono text-[11px] sm:text-[12px] font-semibold tracking-[0.14em] text-[#475569] uppercase">
                FILED: LEGAL LEAD GENERATION — STATE OF FLORIDA
              </span>
            </div>

            {/* Headline matching exact 3 lines and italic colored styling */}
            <h1 className="font-playfair mt-6 sm:mt-7 text-[38px] sm:text-[46px] md:text-[52px] lg:text-[54px] xl:text-[62px] font-bold leading-[1.08] tracking-[-0.02em] text-[#0A192F]">
              Get more{" "}
              <span className="italic font-normal text-primary">qualified</span>{" "}
              legal leads.
              <br />
              Not just more clicks.
            </h1>

            {/* Sub-headline Paragraph */}
            <p className="font-instrument mt-6 max-w-[560px] text-[16px] sm:text-[17px] md:text-[18px] leading-[1.68] text-[#4A5568]">
              Bayshore Communication builds SEO, paid media, and intake systems for Florida law firms — tuned to your practice area and the metros where your next client is actually searching.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3.5 sm:gap-4">
              {/* Primary CTA */}
              <Link
                href="#audit"
                className="group inline-flex h-[52px] items-center justify-center gap-2.5 rounded-[8px] bg-primary px-7 text-[15px] sm:text-[16px] font-semibold text-white shadow-[0_8px_20px_rgba(254,111,31,0.28)] transition-all duration-300 hover:bg-[#e65a0b] hover:shadow-[0_12px_26px_rgba(254,111,31,0.38)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Get Your Free Lead Gen Audit</span>
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="#case-studies"
                className="group inline-flex h-[52px] items-center justify-center gap-2.5 rounded-[8px] border border-[#CBD5E1] bg-white px-7 text-[15px] sm:text-[16px] font-semibold text-[#0A192F] shadow-sm transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>See Case Studies</span>
                <ArrowRight
                  size={18}
                  className="text-[#64748B] transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary"
                />
              </Link>
            </div>

            {/* Mobile / Tablet Placement for Floating Exhibit Card (< lg) */}
            <div className="mt-10 lg:hidden w-full max-w-[480px]">
              <FloatingExhibitCard />
            </div>

            {/* 4 Bottom Stats Row with Dividers */}
            <div className="mt-12 sm:mt-14 pt-8 border-t border-[#E2E8F0]/80">
              <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-y-0">
                
                {/* Stat 1: 500K+ */}
                <div className="pr-4 sm:pr-6 border-r border-[#E2E8F0]">
                  <h3 className="font-inter text-[28px] sm:text-[32px] md:text-[36px] font-bold tracking-tight leading-none text-[#0A192F]">
                    <AnimatedCounter value={500} suffix="K+" />
                  </h3>
                  <p className="font-instrument mt-2 text-[13px] sm:text-[14px] text-[#64748B]">
                    leads generated
                  </p>
                </div>

                {/* Stat 2: 70+ */}
                <div className="px-4 sm:px-6 sm:border-r sm:border-[#E2E8F0]">
                  <h3 className="font-inter text-[28px] sm:text-[32px] md:text-[36px] font-bold tracking-tight leading-none text-[#0A192F]">
                    <AnimatedCounter value={70} suffix="+" />
                  </h3>
                  <p className="font-instrument mt-2 text-[13px] sm:text-[14px] text-[#64748B]">
                    clients served
                  </p>
                </div>

                {/* Stat 3: 15+ */}
                <div className="pr-4 sm:px-6 border-r border-[#E2E8F0]">
                  <h3 className="font-inter text-[28px] sm:text-[32px] md:text-[36px] font-bold tracking-tight leading-none text-[#0A192F]">
                    <AnimatedCounter value={15} suffix="+" />
                  </h3>
                  <p className="font-instrument mt-2 text-[13px] sm:text-[14px] text-[#64748B]">
                    FL metros covered
                  </p>
                </div>

                {/* Stat 4: 2016 */}
                <div className="pl-4 sm:pl-6">
                  <h3 className="font-inter text-[28px] sm:text-[32px] md:text-[36px] font-bold tracking-tight leading-none text-[#0A192F]">
                    <AnimatedCounter value={2016} duration={1.2} formatNumber={false} />
                  </h3>
                  <p className="font-instrument mt-2 text-[13px] sm:text-[14px] text-[#64748B]">
                    founded
                  </p>
                </div>

              </div>
            </div>

          </div>

          {/* =====================================================================
              DESKTOP RIGHT: FLOATING EXHIBIT CARD (>= lg)
              Overlaps the orange arc of the background image precisely
              ===================================================================== */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-5 justify-center xl:justify-start items-center relative z-20">
            <div className="w-full max-w-[440px] xl:max-w-[470px] lg:-ml-4 xl:ml-0">
              <FloatingExhibitCard />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/**
 * =============================================================================
 * FLOATING EXHIBIT CARD
 * Exact 2x2 grid matching the reference design with animated numbers,
 * colored icon badges, cross dividers, and orange top-left exhibit tag.
 * =============================================================================
 */
function FloatingExhibitCard() {
  return (
    <div className="relative w-full">
      
      {/* Exhibit Label Tag at Top-Left */}
      <div className="absolute -top-3.5 left-5 z-20">
        <span className="inline-flex items-center rounded-[4px] bg-[#FF5B22] px-3.5 py-1 font-mono text-[11px] sm:text-[12px] font-bold tracking-[0.12em] text-white shadow-sm uppercase">
          EXHIBIT — LEAD VOLUME
        </span>
      </div>

      {/* Main White Card with Soft Shadow */}
      <div
        className="
          relative
          w-full
          overflow-hidden
          rounded-[18px]
          border
          border-[#EEF2F6]
          bg-white
          p-5
          sm:p-7
          md:p-8
          shadow-[0_20px_50px_rgba(15,23,42,0.12)]
          transition-all
          duration-300
          hover:shadow-[0_25px_65px_rgba(15,23,42,0.16)]
        "
      >
        {/* 2x2 Grid with Cross Dividers */}
        <div className="grid grid-cols-2">
          
          {/* ---------------- ITEM 1: TOP LEFT (+180% QUALIFIED CONSULTS) ---------------- */}
          <div className="p-3 sm:p-4 pr-3 sm:pr-5 pb-5 sm:pb-6 border-r border-b border-[#EEF2F6]">
            <div className="flex items-center gap-3">
              {/* Peach Circle with Trending Chart */}
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF0EB] text-[#FF5B22]">
                <TrendingUp size={22} strokeWidth={2.4} />
              </div>

              <div>
                <h4 className="font-inter text-[26px] sm:text-[30px] md:text-[34px] font-bold tracking-tight leading-none text-[#0A192F]">
                  <AnimatedCounter value={180} prefix="+" suffix="%" />
                </h4>
              </div>
            </div>

            <p className="font-mono mt-3 text-[10px] sm:text-[11px] font-semibold tracking-[0.14em] text-[#64748B] uppercase">
              QUALIFIED CONSULTS
            </p>
          </div>

          {/* ---------------- ITEM 2: TOP RIGHT (-65% COST PER LEAD) ---------------- */}
          <div className="p-3 sm:p-4 pl-3 sm:pl-5 pb-5 sm:pb-6 border-b border-[#EEF2F6]">
            <div className="flex items-center gap-3">
              {/* Soft Blue Circle with Arrow Down */}
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#EFF6FF] text-[#2563EB]">
                <ArrowDown size={22} strokeWidth={2.4} />
              </div>

              <div>
                <h4 className="font-inter text-[26px] sm:text-[30px] md:text-[34px] font-bold tracking-tight leading-none text-[#0A192F]">
                  <AnimatedCounter value={65} prefix="-" suffix="%" />
                </h4>
              </div>
            </div>

            <p className="font-mono mt-3 text-[10px] sm:text-[11px] font-semibold tracking-[0.14em] text-[#64748B] uppercase">
              COST PER LEAD
            </p>
          </div>

          {/* ---------------- ITEM 3: BOTTOM LEFT (90% CLIENT RETENTION) ---------------- */}
          <div className="p-3 sm:p-4 pr-3 sm:pr-5 pt-5 sm:pt-6 border-r border-[#EEF2F6]">
            <div className="flex items-center gap-3">
              {/* Soft Mint Circle with Users */}
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#ECFDF5] text-[#10B981]">
                <Users size={22} strokeWidth={2.4} />
              </div>

              <div>
                <h4 className="font-inter text-[26px] sm:text-[30px] md:text-[34px] font-bold tracking-tight leading-none text-[#0A192F]">
                  <AnimatedCounter value={90} suffix="%" />
                </h4>
              </div>
            </div>

            <p className="font-mono mt-3 text-[10px] sm:text-[11px] font-semibold tracking-[0.14em] text-[#64748B] uppercase">
              CLIENT RETENTION
            </p>
          </div>

          {/* ---------------- ITEM 4: BOTTOM RIGHT (96% GEO-QUALIFIED LEADS) ---------------- */}
          <div className="p-3 sm:p-4 pl-3 sm:pl-5 pt-5 sm:pt-6">
            <div className="flex items-center gap-3">
              {/* Soft Purple Circle with Target */}
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#F3E8FF] text-[#9333EA]">
                <Target size={22} strokeWidth={2.4} />
              </div>

              <div>
                <h4 className="font-inter text-[26px] sm:text-[30px] md:text-[34px] font-bold tracking-tight leading-none text-[#0A192F]">
                  <AnimatedCounter value={96} suffix="%" />
                </h4>
              </div>
            </div>

            <p className="font-mono mt-3 text-[10px] sm:text-[11px] font-semibold tracking-[0.14em] text-[#64748B] uppercase">
              GEO-QUALIFIED LEADS
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
