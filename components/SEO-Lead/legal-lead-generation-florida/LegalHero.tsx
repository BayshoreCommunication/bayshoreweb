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

export default function LegalHero({ bgImage = HERO_BACKGROUND_IMAGE }: { bgImage?: string }) {
  return (
    <section className="relative w-full overflow-hidden bg-white text-[#0A192F] flex items-center">
      {/* Background Image Layer */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="Legal Lead Generation Florida - Bayshore Communication"
          fill
          priority
          quality={95}
          className="object-cover object-right select-none opacity-40 sm:opacity-50 lg:opacity-100"
          sizes="100vw"
        />
        {/* Mobile & Tablet (< lg): clean backdrop overlay to keep text 100% legible */}
        <div className="absolute inset-0 bg-white/95 sm:bg-white/90 lg:hidden" />

        {/* Laptop & Desktop (>= lg): Multi-stop gradient shield */}
        {/* Keeps pure solid white over all text, then seamlessly fades to transparent to showcase the courthouse & Lady Justice */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white from-0% via-white via-[48%] xl:via-[45%] 2xl:via-[42%] to-transparent to-[75%] xl:to-[70%]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full mx-auto max-w-[1580px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 py-10 sm:py-12 lg:py-14 xl:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-6 xl:gap-12">
          
          {/* Left Column: Title & Copy from Doc */}
          <div className="lg:col-span-7 xl:col-span-7 2xl:col-span-7">
            
            {/* Top Filing Badge */}
            <div className="inline-flex items-center gap-2 rounded-[5px] border border-[#CBD5E1] bg-white px-3.5 py-1.5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <span className="font-mono text-[11px] sm:text-[12px] font-semibold tracking-[0.14em] text-[#475569] uppercase">
                FILED: FLORIDA LEGAL LEAD GENERATION — STATEWIDE PRACTICE
              </span>
            </div>

            {/* Headline H1 from Doc */}
            <h1 className="font-playfair mt-5 sm:mt-6 text-[32px] sm:text-[40px] md:text-[46px] lg:text-[38px] xl:text-[48px] 2xl:text-[52px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0A192F] max-w-[520px] xl:max-w-[560px]">
              Legal Lead Generation <span className="italic font-normal text-primary">Florida</span>: Bring More Qualified Cases to Your Firm
            </h1>

            {/* Body Paragraph from Doc */}
            <p className="font-instrument mt-4 sm:mt-5 max-w-[480px] xl:max-w-[520px] text-[14px] sm:text-[15px] lg:text-[15px] xl:text-[16.5px] leading-[1.65] text-[#4A5568]">
              The competition among law practices in Florida is one of the toughest in the nation. Firm partners must do more than simply get traffic to their sites and rely on occasional word-of-mouth referrals to stand out in the crowd of tens of thousands of practicing attorneys. A reliable stream of viable claims from target counties is needed for predictable growth. Purposeful legal lead generation Florida connects your practice directly with individuals at the exact moment they seek representation. Bayshore Communication builds focused search and intake channels that convert online queries into signed retainers.
            </p>

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

            {/* Mobile Exhibit Card (< lg) */}
            <div className="mt-8 lg:hidden w-full max-w-[460px]">
              <FloridaExhibitCard />
            </div>

            {/* 4 Bottom Stats Row */}
            <div className="mt-8 sm:mt-10 lg:mt-9 xl:mt-11 pt-6 border-t border-[#E2E8F0]/80 max-w-[500px] xl:max-w-[530px]">
              <div className="grid grid-cols-2 gap-y-5 sm:grid-cols-4 sm:gap-y-0">
                <div className="pr-3 sm:pr-4 border-r border-[#E2E8F0]">
                  <h3 className="font-inter text-[22px] sm:text-[26px] lg:text-[24px] xl:text-[28px] 2xl:text-[30px] font-bold tracking-tight leading-none text-[#0A192F]">
                    <AnimatedCounter value={23} suffix="M+" />
                  </h3>
                  <p className="font-instrument mt-1.5 text-[11px] sm:text-[12.5px] text-[#64748B]">
                    Florida population
                  </p>
                </div>

                <div className="px-3 sm:px-4 sm:border-r sm:border-[#E2E8F0]">
                  <h3 className="font-inter text-[22px] sm:text-[26px] lg:text-[24px] xl:text-[28px] 2xl:text-[30px] font-bold tracking-tight leading-none text-[#0A192F]">
                    <AnimatedCounter value={80} suffix="K+" />
                  </h3>
                  <p className="font-instrument mt-1.5 text-[11px] sm:text-[12.5px] text-[#64748B]">
                    Licensed attorneys
                  </p>
                </div>

                <div className="pr-3 sm:px-4 border-r border-[#E2E8F0]">
                  <h3 className="font-inter text-[22px] sm:text-[26px] lg:text-[24px] xl:text-[28px] 2xl:text-[30px] font-bold tracking-tight leading-none text-[#0A192F]">
                    <AnimatedCounter value={67} />
                  </h3>
                  <p className="font-instrument mt-1.5 text-[11px] sm:text-[12.5px] text-[#64748B]">
                    Florida counties
                  </p>
                </div>

                <div className="pl-3 sm:pl-4">
                  <h3 className="font-inter text-[22px] sm:text-[26px] lg:text-[24px] xl:text-[28px] 2xl:text-[30px] font-bold tracking-tight leading-none text-[#0A192F]">
                    <AnimatedCounter value={500} suffix="K+" />
                  </h3>
                  <p className="font-instrument mt-1.5 text-[11px] sm:text-[12.5px] text-[#64748B]">
                    Leads delivered
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Desktop Right: Floating Exhibit Card (>= lg) */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-5 justify-end items-center relative z-20">
            <div className="w-full max-w-[360px] xl:max-w-[420px] ml-auto lg:translate-x-0 xl:translate-x-4 2xl:translate-x-8">
              <FloridaExhibitCard />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function FloridaExhibitCard() {
  return (
    <div className="relative w-full">
      <div className="absolute -top-3 left-4 sm:-top-3.5 sm:left-5 z-20">
        <span className="inline-flex items-center rounded-[4px] bg-[#FF5B22] px-3 py-0.5 sm:px-3.5 sm:py-1 font-mono text-[10px] sm:text-[11px] xl:text-[12px] font-bold tracking-[0.12em] text-white shadow-sm uppercase">
          EXHIBIT — FLORIDA CASE PIPELINE
        </span>
      </div>

      <div className="relative w-full overflow-hidden rounded-[18px] border border-[#EEF2F6] bg-white p-3 sm:p-5 lg:p-4.5 xl:p-7 shadow-[0_20px_50px_rgba(15,23,42,0.12)] transition-all duration-300 hover:shadow-[0_25px_65px_rgba(15,23,42,0.16)]">
        <div className="grid grid-cols-2">
          
          <div className="p-2 sm:p-3.5 lg:p-3 xl:p-4 pr-2 sm:pr-4 lg:pr-3 xl:pr-5 pb-3 sm:pb-5 lg:pb-3.5 xl:pb-6 border-r border-b border-[#EEF2F6]">
            <div className="flex items-center gap-2 sm:gap-2.5 xl:gap-3">
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

          <div className="p-2 sm:p-3.5 lg:p-3 xl:p-4 pl-2 sm:pl-4 lg:pl-3 xl:pl-5 pb-3 sm:pb-5 lg:pb-3.5 xl:pb-6 border-b border-[#EEF2F6]">
            <div className="flex items-center gap-2 sm:gap-2.5 xl:gap-3">
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

          <div className="p-2 sm:p-3.5 lg:p-3 xl:p-4 pr-2 sm:pr-4 lg:pr-3 xl:pr-5 pt-3 sm:pt-5 lg:pt-3.5 xl:pt-6 border-r border-[#EEF2F6]">
            <div className="flex items-center gap-2 sm:gap-2.5 xl:gap-3">
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

          <div className="p-2 sm:p-3.5 lg:p-3 xl:p-4 pl-2 sm:pl-4 lg:pl-3 xl:pl-5 pt-3 sm:pt-5 lg:pt-3.5 xl:pt-6">
            <div className="flex items-center gap-2 sm:gap-2.5 xl:gap-3">
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
