"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  TrendingUp,
  ArrowDown,
  Users,
  Target,
  ArrowRight,
  Phone,
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
    <section className="relative w-full overflow-hidden bg-white text-[#0A192F] flex items-center">
      {/* =========================================================================
          BACKGROUND IMAGE LAYER
          Renders user-provided /assets/seo-lead/hero-bg.png
          - Multi-stop gradient shield keeps 100% pure solid white behind all left text content
          - Gracefully transitions to transparent to showcase the courthouse columns & Lady Justice
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="Florida Legal Lead Generation - Bayshore Communication"
          fill
          priority
          quality={95}
          className="object-cover object-right select-none opacity-40 sm:opacity-50 lg:opacity-100"
          sizes="100vw"
        />
        {/* Soft overlay on mobile/tablet screens for maximum text contrast */}
        <div className="absolute inset-0 bg-white/95 sm:bg-white/90 lg:hidden" />

        {/* Laptop & Desktop (>= lg): Multi-stop gradient shield */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white from-0% via-white via-[48%] xl:via-[45%] 2xl:via-[42%] to-transparent to-[75%] xl:to-[70%]" />
      </div>

      {/* =========================================================================
          CONTENT CONTAINER
          ========================================================================= */}
      <div className="relative z-10 w-full mx-auto max-w-[1580px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 py-10 sm:py-12 lg:py-14 xl:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-6 xl:gap-12">
          
          {/* =====================================================================
              LEFT COLUMN: Title, Subtitle, CTA Buttons, 4 Bottom Stats
              ===================================================================== */}
          <div className="lg:col-span-7 xl:col-span-7 2xl:col-span-7">
            
            {/* Top Filing Badge */}
            <div className="inline-flex items-center gap-2 rounded-[5px] border border-[#CBD5E1] bg-white px-3.5 py-1.5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <span className="font-mono text-[11px] sm:text-[12px] font-semibold tracking-[0.14em] text-[#475569] uppercase">
                LOCAL LEAD GENERATION — STATE OF FLORIDA
              </span>
            </div>

            {/* Headline matching doc H1 */}
            <h1 className="font-playfair mt-5 sm:mt-6 text-[32px] sm:text-[40px] md:text-[46px] lg:text-[38px] xl:text-[48px] 2xl:text-[52px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0A192F] max-w-[520px] xl:max-w-[560px]">
              Local Lead Generation <span className="italic font-normal text-primary">Florida</span>
            </h1>

            {/* Sub-headline from Doc */}
            <h2 className="font-playfair mt-3.5 text-[16px] sm:text-[19px] md:text-[21px] lg:text-[18px] xl:text-[22px] font-semibold leading-[1.3] text-[#0A192F] max-w-[500px] xl:max-w-[540px]">
              Turn Search Demand Into Qualified Local Leads No More Losing Real Business Opportunities.
            </h2>

            {/* Body Paragraph from Doc */}
            <p className="font-instrument mt-3.5 max-w-[480px] xl:max-w-[520px] text-[14px] sm:text-[15px] lg:text-[15px] xl:text-[16.5px] leading-[1.65] text-[#4A5568]">
              Customers search by service, city, neighborhood and urgency. Your marketing needs to meet them at the right point. Bayshore Communication builds local lead generation systems for Florida businesses. We connect local SEO, Google Maps, Google Ads, landing pages, conversion strategy and lead follow up around the markets you serve.
            </p>

            {/* Goal Highlight from Doc */}
            <div className="mt-4 max-w-[480px] xl:max-w-[520px] rounded-lg border-l-4 border-primary bg-[#FFF7F4] p-3 text-[13px] sm:text-[14px] font-medium text-[#0A192F]">
              <span className="font-semibold text-primary">The goal stays clear</span> &rarr; More qualified local leads through calls, forms, quote requests, consultations and bookings.
            </div>

            {/* CTA Buttons */}
            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 max-w-[520px]">
              <Link
                href="/contact"
                className="group inline-flex h-[48px] sm:h-[50px] w-full sm:w-auto items-center justify-center gap-2.5 rounded-[8px] bg-primary px-6 text-[14px] sm:text-[15px] font-semibold text-white shadow-[0_8px_20px_rgba(254,111,31,0.28)] transition-all duration-300 hover:bg-[#e65a0b] hover:shadow-[0_12px_26px_rgba(254,111,31,0.38)] hover:-translate-y-0.5 text-center"
              >
                <span>Request For Proposal</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="tel:+15095921745"
                className="group inline-flex h-[48px] sm:h-[50px] w-full sm:w-auto items-center justify-center gap-2 rounded-[8px] border border-[#CBD5E1] bg-white px-5 text-[14px] sm:text-[15px] font-semibold text-[#0A192F] shadow-[0_2px_6px_rgba(15,23,42,0.06)] transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-[0_4px_12px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 text-center"
              >
                <Phone size={17} className="text-primary transition-colors shrink-0" />
                <span>+1 (509) 592-1745</span>
              </a>
            </div>

            {/* Mobile / Tablet Placement for Floating Exhibit Card (< lg) */}
            <div className="mt-8 lg:hidden w-full max-w-[460px]">
              <FloatingExhibitCard />
            </div>

            {/* 4 Bottom Stats Row with Dividers */}
            <div className="mt-8 sm:mt-10 lg:mt-9 xl:mt-11 pt-6 border-t border-[#E2E8F0]/80 max-w-[500px] xl:max-w-[530px]">
              <div className="grid grid-cols-2 gap-y-5 sm:grid-cols-4 sm:gap-y-0">
                
                {/* Stat 1: 500K+ */}
                <div className="pr-3 sm:pr-4 border-r border-[#E2E8F0]">
                  <h3 className="font-inter text-[22px] sm:text-[26px] lg:text-[24px] xl:text-[28px] 2xl:text-[30px] font-bold tracking-tight leading-none text-[#0A192F]">
                    <AnimatedCounter value={500} suffix="K+" />
                  </h3>
                  <p className="font-instrument mt-1.5 text-[11px] sm:text-[12.5px] text-[#64748B]">
                    leads generated
                  </p>
                </div>

                {/* Stat 2: 70+ */}
                <div className="px-3 sm:px-4 sm:border-r sm:border-[#E2E8F0]">
                  <h3 className="font-inter text-[22px] sm:text-[26px] lg:text-[24px] xl:text-[28px] 2xl:text-[30px] font-bold tracking-tight leading-none text-[#0A192F]">
                    <AnimatedCounter value={70} suffix="+" />
                  </h3>
                  <p className="font-instrument mt-1.5 text-[11px] sm:text-[12.5px] text-[#64748B]">
                    clients served
                  </p>
                </div>

                {/* Stat 3: 15+ */}
                <div className="pr-3 sm:px-4 border-r border-[#E2E8F0]">
                  <h3 className="font-inter text-[22px] sm:text-[26px] lg:text-[24px] xl:text-[28px] 2xl:text-[30px] font-bold tracking-tight leading-none text-[#0A192F]">
                    <AnimatedCounter value={15} suffix="+" />
                  </h3>
                  <p className="font-instrument mt-1.5 text-[11px] sm:text-[12.5px] text-[#64748B]">
                    FL metros covered
                  </p>
                </div>

                {/* Stat 4: 2016 */}
                <div className="pl-3 sm:pl-4">
                  <h3 className="font-inter text-[22px] sm:text-[26px] lg:text-[24px] xl:text-[28px] 2xl:text-[30px] font-bold tracking-tight leading-none text-[#0A192F]">
                    <AnimatedCounter value={2016} duration={1.2} formatNumber={false} />
                  </h3>
                  <p className="font-instrument mt-1.5 text-[11px] sm:text-[12.5px] text-[#64748B]">
                    founded
                  </p>
                </div>

              </div>
            </div>

          </div>

          {/* =====================================================================
              DESKTOP RIGHT: FLOATING EXHIBIT CARD (>= lg)
              ===================================================================== */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-5 justify-end items-center relative z-20">
            <div className="w-full max-w-[360px] xl:max-w-[420px] ml-auto lg:translate-x-0 xl:translate-x-4 2xl:translate-x-8">
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
      <div className="absolute -top-3 left-4 sm:-top-3.5 sm:left-5 z-20">
        <span className="inline-flex items-center rounded-[4px] bg-[#FF5B22] px-3 py-0.5 sm:px-3.5 sm:py-1 font-mono text-[10px] sm:text-[11px] xl:text-[12px] font-bold tracking-[0.12em] text-white shadow-sm uppercase">
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
          p-3
          sm:p-5
          lg:p-4.5
          xl:p-7
          shadow-[0_20px_50px_rgba(15,23,42,0.12)]
          transition-all
          duration-300
          hover:shadow-[0_25px_65px_rgba(15,23,42,0.16)]
        "
      >
        {/* 2x2 Grid with Cross Dividers */}
        <div className="grid grid-cols-2">
          
          {/* ---------------- ITEM 1: TOP LEFT (+180% QUALIFIED CONSULTS) ---------------- */}
          <div className="p-2 sm:p-3.5 lg:p-3 xl:p-4 pr-2 sm:pr-4 lg:pr-3 xl:pr-5 pb-3 sm:pb-5 lg:pb-3.5 xl:pb-6 border-r border-b border-[#EEF2F6]">
            <div className="flex items-center gap-2 sm:gap-2.5 xl:gap-3">
              {/* Peach Circle with Trending Chart */}
              <div className="flex h-8 w-8 sm:h-11 sm:w-11 lg:h-9 lg:w-9 xl:h-12 xl:w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF0EB] text-[#FF5B22]">
                <TrendingUp className="h-[16px] w-[16px] sm:h-[20px] sm:w-[20px] xl:h-[22px] xl:w-[22px]" strokeWidth={2.4} />
              </div>

              <div>
                <h4 className="font-inter text-[18px] sm:text-[26px] lg:text-[22px] xl:text-[30px] 2xl:text-[34px] font-bold tracking-tight leading-none text-[#0A192F]">
                  <AnimatedCounter value={180} prefix="+" suffix="%" />
                </h4>
              </div>
            </div>

            <p className="font-mono mt-1.5 sm:mt-2.5 xl:mt-3 text-[8.5px] sm:text-[10px] xl:text-[11px] font-semibold tracking-[0.12em] xl:tracking-[0.14em] text-[#64748B] uppercase">
              QUALIFIED CONSULTS
            </p>
          </div>

          {/* ---------------- ITEM 2: TOP RIGHT (-65% COST PER LEAD) ---------------- */}
          <div className="p-2 sm:p-3.5 lg:p-3 xl:p-4 pl-2 sm:pl-4 lg:pl-3 xl:pl-5 pb-3 sm:pb-5 lg:pb-3.5 xl:pb-6 border-b border-[#EEF2F6]">
            <div className="flex items-center gap-2 sm:gap-2.5 xl:gap-3">
              {/* Soft Blue Circle with Arrow Down */}
              <div className="flex h-8 w-8 sm:h-11 sm:w-11 lg:h-9 lg:w-9 xl:h-12 xl:w-12 shrink-0 items-center justify-center rounded-full bg-[#EFF6FF] text-[#2563EB]">
                <ArrowDown className="h-[16px] w-[16px] sm:h-[20px] sm:w-[20px] xl:h-[22px] xl:w-[22px]" strokeWidth={2.4} />
              </div>

              <div>
                <h4 className="font-inter text-[18px] sm:text-[26px] lg:text-[22px] xl:text-[30px] 2xl:text-[34px] font-bold tracking-tight leading-none text-[#0A192F]">
                  <AnimatedCounter value={65} prefix="-" suffix="%" />
                </h4>
              </div>
            </div>

            <p className="font-mono mt-1.5 sm:mt-2.5 xl:mt-3 text-[8.5px] sm:text-[10px] xl:text-[11px] font-semibold tracking-[0.12em] xl:tracking-[0.14em] text-[#64748B] uppercase">
              COST PER LEAD
            </p>
          </div>

          {/* ---------------- ITEM 3: BOTTOM LEFT (90% CLIENT RETENTION) ---------------- */}
          <div className="p-2 sm:p-3.5 lg:p-3 xl:p-4 pr-2 sm:pr-4 lg:pr-3 xl:pr-5 pt-3 sm:pt-5 lg:pt-3.5 xl:pt-6 border-r border-[#EEF2F6]">
            <div className="flex items-center gap-2 sm:gap-2.5 xl:gap-3">
              {/* Soft Mint Circle with Users */}
              <div className="flex h-8 w-8 sm:h-11 sm:w-11 lg:h-9 lg:w-9 xl:h-12 xl:w-12 shrink-0 items-center justify-center rounded-full bg-[#ECFDF5] text-[#10B981]">
                <Users className="h-[16px] w-[16px] sm:h-[20px] sm:w-[20px] xl:h-[22px] xl:w-[22px]" strokeWidth={2.4} />
              </div>

              <div>
                <h4 className="font-inter text-[18px] sm:text-[26px] lg:text-[22px] xl:text-[30px] 2xl:text-[34px] font-bold tracking-tight leading-none text-[#0A192F]">
                  <AnimatedCounter value={90} suffix="%" />
                </h4>
              </div>
            </div>

            <p className="font-mono mt-1.5 sm:mt-2.5 xl:mt-3 text-[8.5px] sm:text-[10px] xl:text-[11px] font-semibold tracking-[0.12em] xl:tracking-[0.14em] text-[#64748B] uppercase">
              CLIENT RETENTION
            </p>
          </div>

          {/* ---------------- ITEM 4: BOTTOM RIGHT (96% GEO-QUALIFIED LEADS) ---------------- */}
          <div className="p-2 sm:p-3.5 lg:p-3 xl:p-4 pl-2 sm:pl-4 lg:pl-3 xl:pl-5 pt-3 sm:pt-5 lg:pt-3.5 xl:pt-6">
            <div className="flex items-center gap-2 sm:gap-2.5 xl:gap-3">
              {/* Soft Purple Circle with Target */}
              <div className="flex h-8 w-8 sm:h-11 sm:w-11 lg:h-9 lg:w-9 xl:h-12 xl:w-12 shrink-0 items-center justify-center rounded-full bg-[#F3E8FF] text-[#9333EA]">
                <Target className="h-[16px] w-[16px] sm:h-[20px] sm:w-[20px] xl:h-[22px] xl:w-[22px]" strokeWidth={2.4} />
              </div>

              <div>
                <h4 className="font-inter text-[18px] sm:text-[26px] lg:text-[22px] xl:text-[30px] 2xl:text-[34px] font-bold tracking-tight leading-none text-[#0A192F]">
                  <AnimatedCounter value={96} suffix="%" />
                </h4>
              </div>
            </div>

            <p className="font-mono mt-1.5 sm:mt-2.5 xl:mt-3 text-[8.5px] sm:text-[10px] xl:text-[11px] font-semibold tracking-[0.12em] xl:tracking-[0.14em] text-[#64748B] uppercase">
              GEO-QUALIFIED LEADS
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
