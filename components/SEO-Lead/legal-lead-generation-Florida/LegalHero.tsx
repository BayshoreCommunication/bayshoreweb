"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, TrendingUp, ArrowDown, Users, Target } from "lucide-react";

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
    <section className="relative w-full overflow-hidden bg-white text-[#0A192F] flex items-center px-16 md:px-0">
      {/* Background Image Layer */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <Image
          src={bgImage}
          alt="Legal Lead Generation Florida - Bayshore Communication"
          fill
          priority
          quality={95}
          className="object-cover object-right"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/90 sm:bg-white/80 lg:hidden" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full mx-auto max-w-[1580px] py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          
          {/* Left Column: Title & Copy from Doc */}
          <div className="lg:col-span-7 xl:col-span-7 2xl:col-span-7">
            
            {/* Top Filing Badge */}
            <div className="inline-flex items-center gap-2 rounded-[5px] border border-[#CBD5E1] bg-white px-3.5 py-1.5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <span className="font-mono text-[11px] sm:text-[12px] font-semibold tracking-[0.14em] text-[#475569] uppercase">
                FILED: FLORIDA LEGAL LEAD GENERATION — STATEWIDE PRACTICE
              </span>
            </div>

            {/* Headline H1 from Doc */}
            <h1 className="font-playfair mt-6 sm:mt-7 text-[38px] sm:text-[46px] md:text-[52px] lg:text-[54px] xl:text-[62px] font-bold leading-[1.08] tracking-[-0.02em] text-[#0A192F]">
              Legal Lead Generation <span className="italic font-normal text-primary">Florida</span>: Bring More <br/>Qualified Cases to <br/> Your Firm
            </h1>

            {/* Body Paragraph from Doc */}
            <p className="font-instrument mt-5 sm:mt-6 max-w-[620px] text-[16px] sm:text-[17px] md:text-[18px] leading-[1.68] text-[#4A5568]">
              The competition among law practices in Florida is one of the toughest in the nation. Firm partners must do more than simply get traffic to their sites and rely on occasional word-of-mouth referrals to stand out in the crowd of tens of thousands of practicing attorneys. A reliable stream of viable claims from target counties is needed for predictable growth. Purposeful legal lead generation Florida connects your practice directly with individuals at the exact moment they seek representation. Bayshore Communication builds focused search and intake channels that convert online queries into signed retainers.
            </p>

            {/* CTA Button */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#contact"
                className="group inline-flex h-[52px] items-center justify-center gap-2.5 rounded-[8px] bg-primary px-7 text-[15px] sm:text-[16px] font-semibold text-white shadow-[0_8px_20px_rgba(254,111,31,0.28)] transition-all duration-300 hover:bg-[#e65a0b] hover:shadow-[0_12px_26px_rgba(254,111,31,0.38)] hover:-translate-y-0.5"
              >
                <span>Schedule a Free Legal Audit</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile Exhibit Card (< lg) */}
            <div className="mt-10 lg:hidden w-full max-w-[480px]">
              <FloridaExhibitCard />
            </div>

            {/* 4 Bottom Stats Row */}
            <div className="mt-12 sm:mt-14 pt-8 border-t border-[#E2E8F0]/80">
              <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-y-0">
                <div className="pr-4 sm:pr-6 border-r border-[#E2E8F0]">
                  <h3 className="font-inter text-[28px] sm:text-[32px] md:text-[36px] font-bold tracking-tight leading-none text-[#0A192F]">
                    <AnimatedCounter value={23} suffix="M+" />
                  </h3>
                  <p className="font-instrument mt-2 text-[13px] sm:text-[14px] text-[#64748B]">
                    Florida population
                  </p>
                </div>

                <div className="px-4 sm:px-6 sm:border-r sm:border-[#E2E8F0]">
                  <h3 className="font-inter text-[28px] sm:text-[32px] md:text-[36px] font-bold tracking-tight leading-none text-[#0A192F]">
                    <AnimatedCounter value={80} suffix="K+" />
                  </h3>
                  <p className="font-instrument mt-2 text-[13px] sm:text-[14px] text-[#64748B]">
                    Licensed attorneys
                  </p>
                </div>

                <div className="pr-4 sm:px-6 border-r border-[#E2E8F0]">
                  <h3 className="font-inter text-[28px] sm:text-[32px] md:text-[36px] font-bold tracking-tight leading-none text-[#0A192F]">
                    <AnimatedCounter value={67} />
                  </h3>
                  <p className="font-instrument mt-2 text-[13px] sm:text-[14px] text-[#64748B]">
                    Florida counties
                  </p>
                </div>

                <div className="pl-4 sm:pl-6">
                  <h3 className="font-inter text-[28px] sm:text-[32px] md:text-[36px] font-bold tracking-tight leading-none text-[#0A192F]">
                    <AnimatedCounter value={500} suffix="K+" />
                  </h3>
                  <p className="font-instrument mt-2 text-[13px] sm:text-[14px] text-[#64748B]">
                    Leads delivered
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Desktop Right: Floating Exhibit Card (>= lg) */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-5 justify-center xl:justify-start items-center relative z-20">
            <div className="w-full max-w-[440px] xl:max-w-[470px] lg:-ml-4 xl:ml-0">
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
      <div className="absolute -top-3.5 left-5 z-20">
        <span className="inline-flex items-center rounded-[4px] bg-[#FF5B22] px-3.5 py-1 font-mono text-[11px] sm:text-[12px] font-bold tracking-[0.12em] text-white shadow-sm uppercase">
          EXHIBIT — FLORIDA CASE PIPELINE
        </span>
      </div>

      <div className="relative w-full overflow-hidden rounded-[18px] border border-[#EEF2F6] bg-white p-5 sm:p-7 md:p-8 shadow-[0_20px_50px_rgba(15,23,42,0.12)] transition-all duration-300 hover:shadow-[0_25px_65px_rgba(15,23,42,0.16)]">
        <div className="grid grid-cols-2">
          
          <div className="p-3 sm:p-4 pr-3 sm:pr-5 pb-5 sm:pb-6 border-r border-b border-[#EEF2F6]">
            <div className="flex items-center gap-3">
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

          <div className="p-3 sm:p-4 pl-3 sm:pl-5 pb-5 sm:pb-6 border-b border-[#EEF2F6]">
            <div className="flex items-center gap-3">
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

          <div className="p-3 sm:p-4 pr-3 sm:pr-5 pt-5 sm:pt-6 border-r border-[#EEF2F6]">
            <div className="flex items-center gap-3">
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

          <div className="p-3 sm:p-4 pl-3 sm:pl-5 pt-5 sm:pt-6">
            <div className="flex items-center gap-3">
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
