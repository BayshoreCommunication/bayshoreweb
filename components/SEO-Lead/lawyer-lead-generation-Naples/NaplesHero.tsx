"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, TrendingUp, ArrowDown, Users, Target, Phone } from "lucide-react";

export const HERO_BACKGROUND_IMAGE = "/assets/seo-lead/hero-bg.png";

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

    setDisplayValue(0);

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
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

  const formatted = formatNumber ? displayValue.toLocaleString() : displayValue.toString();

  return (
    <span className="tabular-nums font-inter">
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

export default function NaplesHero({ bgImage = HERO_BACKGROUND_IMAGE }: { bgImage?: string }) {
  return (
    <section className="relative w-full overflow-hidden bg-white text-[#0A192F] flex items-center">
      {/* Background Image Layer */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <Image
          src={bgImage}
          alt="Naples Lawyer Lead Generation - Bayshore Communication"
          fill
          priority
          quality={95}
          className="object-cover object-right"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/90 sm:bg-white/80 lg:hidden" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full mx-auto max-w-[1580px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 py-10 sm:py-14 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          
          {/* Left Column: Title & Copy from Doc */}
          <div className="lg:col-span-7 xl:col-span-7 2xl:col-span-7">
            
            {/* Top Filing Badge */}
            <div className="inline-flex items-center gap-2 rounded-[5px] border border-[#CBD5E1] bg-white px-3.5 py-1.5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <span className="font-mono text-[11px] sm:text-[12px] font-semibold tracking-[0.14em] text-[#475569] uppercase">
                FILED: NAPLES LEGAL LEAD GENERATION — COLLIER COUNTY
              </span>
            </div>

            {/* Headline H1 from Doc */}
            <h1 className="font-playfair mt-5 sm:mt-6 text-[36px] sm:text-[44px] md:text-[48px] lg:text-[44px] xl:text-[52px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0A192F] max-w-[520px] xl:max-w-[560px]">
              Lawyer Lead Generation in <span className="italic font-normal text-primary">Naples</span>
            </h1>

            {/* Subtitle from Doc */}
            <h2 className="font-playfair mt-3.5 text-[18px] sm:text-[21px] md:text-[23px] font-semibold leading-[1.3] text-[#0A192F] max-w-[500px] xl:max-w-[540px]">
              Qualified consultations from Naples searches. Built around your practice, service area &amp; intake process.
            </h2>

            {/* Body Paragraph from Doc */}
            <p className="font-instrument mt-3.5 max-w-[480px] xl:max-w-[520px] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.65] text-[#4A5568]">
              Bayshore Communication builds lawyer lead generation systems for Naples law firms. We connect Google searches, practice area landing pages and your intake team into one measured pipeline. Every monthly report ties ad spend and SEO work to consultations and signed cases.
            </p>

            {/* CTA Buttons */}
            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 max-w-[520px]">
              <Link
                href="/contact"
                className="group inline-flex h-[50px] w-full sm:w-auto items-center justify-center gap-2.5 rounded-[8px] bg-primary px-6 text-[15px] font-semibold text-white shadow-[0_8px_20px_rgba(254,111,31,0.28)] transition-all duration-300 hover:bg-[#e65a0b] hover:shadow-[0_12px_26px_rgba(254,111,31,0.38)] hover:-translate-y-0.5 text-center"
              >
                <span>Request For Proposal</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="tel:+15095921745"
                className="group inline-flex h-[50px] w-full sm:w-auto items-center justify-center gap-2 rounded-[8px] border border-[#CBD5E1] bg-white px-5 text-[15px] font-semibold text-[#0A192F] shadow-[0_2px_6px_rgba(15,23,42,0.06)] transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-[0_4px_12px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 text-center"
              >
                <Phone size={17} className="text-primary transition-colors shrink-0" />
                <span>+1 (509) 592-1745</span>
              </a>
            </div>

            {/* Mobile Exhibit Card (< lg) */}
            <div className="mt-8 lg:hidden w-full max-w-[460px]">
              <NaplesExhibitCard />
            </div>

            {/* 4 Bottom Stats Row */}
            <div className="mt-9 sm:mt-11 pt-6 border-t border-[#E2E8F0]/80 max-w-[500px] xl:max-w-[530px]">
              <div className="grid grid-cols-2 gap-y-5 sm:grid-cols-4 sm:gap-y-0">
                <div className="pr-3 sm:pr-4 border-r border-[#E2E8F0]">
                  <h3 className="font-inter text-[24px] sm:text-[28px] md:text-[30px] font-bold tracking-tight leading-none text-[#0A192F]">
                    <AnimatedCounter value={20} suffix="K+" />
                  </h3>
                  <p className="font-instrument mt-1.5 text-[12px] sm:text-[13px] text-[#64748B]">
                    Naples population
                  </p>
                </div>

                <div className="px-3 sm:px-4 sm:border-r sm:border-[#E2E8F0]">
                  <h3 className="font-inter text-[24px] sm:text-[28px] md:text-[30px] font-bold tracking-tight leading-none text-[#0A192F]">
                    0.42<span className="font-sans font-bold">M</span>
                  </h3>
                  <p className="font-instrument mt-1.5 text-[12px] sm:text-[13px] text-[#64748B]">
                    Collier County residents
                  </p>
                </div>

                <div className="pr-3 sm:px-4 border-r border-[#E2E8F0]">
                  <h3 className="font-inter text-[24px] sm:text-[28px] md:text-[30px] font-bold tracking-tight leading-none text-[#0A192F]">
                    <AnimatedCounter value={1000} suffix="+" />
                  </h3>
                  <p className="font-instrument mt-1.5 text-[12px] sm:text-[13px] text-[#64748B]">
                    Active Collier attorneys
                  </p>
                </div>

                <div className="pl-3 sm:pl-4">
                  <h3 className="font-inter text-[24px] sm:text-[28px] md:text-[30px] font-bold tracking-tight leading-none text-[#0A192F]">
                    <AnimatedCounter value={250} prefix="~" />
                  </h3>
                  <p className="font-instrument mt-1.5 text-[12px] sm:text-[13px] text-[#64748B]">
                    Monthly legal searches
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Desktop Right: Floating Exhibit Card (>= lg) */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-5 justify-end items-center relative z-20">
            <div className="w-full max-w-[390px] xl:max-w-[420px] ml-auto lg:translate-x-6 xl:translate-x-10 2xl:translate-x-14">
              <NaplesExhibitCard />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function NaplesExhibitCard() {
  return (
    <div className="relative w-full">
      <div className="absolute -top-3.5 left-5 z-20">
        <span className="inline-flex items-center rounded-[4px] bg-[#FF5B22] px-3.5 py-1 font-mono text-[11px] sm:text-[12px] font-bold tracking-[0.12em] text-white shadow-sm uppercase">
          EXHIBIT — NAPLES CASE PIPELINE
        </span>
      </div>

      <div className="relative w-full overflow-hidden rounded-[18px] border border-[#EEF2F6] bg-white p-3.5 sm:p-7 md:p-8 shadow-[0_20px_50px_rgba(15,23,42,0.12)] transition-all duration-300 hover:shadow-[0_25px_65px_rgba(15,23,42,0.16)]">
        <div className="grid grid-cols-2">
          
          <div className="p-2 sm:p-4 pr-2.5 sm:pr-5 pb-3.5 sm:pb-6 border-r border-b border-[#EEF2F6]">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex h-9 w-9 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF0EB] text-[#FF5B22]">
                <TrendingUp className="h-[18px] w-[18px] sm:h-[22px] sm:w-[22px]" strokeWidth={2.4} />
              </div>
              <div>
                <h4 className="font-inter text-[20px] sm:text-[30px] md:text-[34px] font-bold tracking-tight leading-none text-[#0A192F]">
                  <AnimatedCounter value={180} prefix="+" suffix="%" />
                </h4>
              </div>
            </div>
            <p className="font-mono mt-2 sm:mt-3 text-[9px] sm:text-[11px] font-semibold tracking-[0.14em] text-[#64748B] uppercase">
              QUALIFIED CONSULTS
            </p>
          </div>

          <div className="p-2 sm:p-4 pl-2.5 sm:pl-5 pb-3.5 sm:pb-6 border-b border-[#EEF2F6]">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex h-9 w-9 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#EFF6FF] text-[#2563EB]">
                <ArrowDown className="h-[18px] w-[18px] sm:h-[22px] sm:w-[22px]" strokeWidth={2.4} />
              </div>
              <div>
                <h4 className="font-inter text-[20px] sm:text-[30px] md:text-[34px] font-bold tracking-tight leading-none text-[#0A192F]">
                  <AnimatedCounter value={65} prefix="-" suffix="%" />
                </h4>
              </div>
            </div>
            <p className="font-mono mt-2 sm:mt-3 text-[9px] sm:text-[11px] font-semibold tracking-[0.14em] text-[#64748B] uppercase">
              COST PER LEAD
            </p>
          </div>

          <div className="p-2 sm:p-4 pr-2.5 sm:pr-5 pt-3.5 sm:pt-6 border-r border-[#EEF2F6]">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex h-9 w-9 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#ECFDF5] text-[#10B981]">
                <Users className="h-[18px] w-[18px] sm:h-[22px] sm:w-[22px]" strokeWidth={2.4} />
              </div>
              <div>
                <h4 className="font-inter text-[20px] sm:text-[30px] md:text-[34px] font-bold tracking-tight leading-none text-[#0A192F]">
                  <AnimatedCounter value={90} suffix="%" />
                </h4>
              </div>
            </div>
            <p className="font-mono mt-2 sm:mt-3 text-[9px] sm:text-[11px] font-semibold tracking-[0.14em] text-[#64748B] uppercase">
              CLIENT RETENTION
            </p>
          </div>

          <div className="p-2 sm:p-4 pl-2.5 sm:pl-5 pt-3.5 sm:pt-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex h-9 w-9 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#F3E8FF] text-[#9333EA]">
                <Target className="h-[18px] w-[18px] sm:h-[22px] sm:w-[22px]" strokeWidth={2.4} />
              </div>
              <div>
                <h4 className="font-inter text-[20px] sm:text-[30px] md:text-[34px] font-bold tracking-tight leading-none text-[#0A192F]">
                  <AnimatedCounter value={96} suffix="%" />
                </h4>
              </div>
            </div>
            <p className="font-mono mt-2 sm:mt-3 text-[9px] sm:text-[11px] font-semibold tracking-[0.14em] text-[#64748B] uppercase">
              GEO-QUALIFIED LEADS
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
