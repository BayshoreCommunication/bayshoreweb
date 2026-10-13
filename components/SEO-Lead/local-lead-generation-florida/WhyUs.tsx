"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Scale, MapPin, BarChart3 } from "lucide-react";

/**
 * =============================================================================
 * ANIMATED COUNTER COMPONENT
 * Triggers smoothly when scrolled into view via IntersectionObserver.
 * Uses font-inter and tabular-nums for crisp, jitter-free number rendering.
 * =============================================================================
 */
function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 1.6,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const containerRef = useRef<HTMLSpanElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          let startTimestamp: number | null = null;
          let animationFrameId: number;

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min(
              (timestamp - startTimestamp) / (duration * 1000),
              1
            );
            // Smooth exponential ease-out
            const easeOutExpo =
              progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setDisplayValue(Math.round(easeOutExpo * value));

            if (progress < 1) {
              animationFrameId = requestAnimationFrame(step);
            } else {
              setDisplayValue(value);
            }
          };

          animationFrameId = requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={containerRef} className="font-inter tabular-nums">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

/**
 * =============================================================================
 * WHY US CARDS DATA
 * Exact 1:1 match with user-provided screenshot
 * =============================================================================
 */
const WHY_US_CARDS = [
  {
    icon: Scale,
    titleLine1: "Legal-Industry",
    titleLine2: "Experience",
    description:
      "We already work with Florida PI, immigration, and family law firms — we understand case value, ad-compliance rules, and what drives a consult booking.",
    statValue: 90,
    statSuffix: "%",
    labelLine1: "CLIENT",
    labelLine2: "RETENTION RATE",
  },
  {
    icon: MapPin,
    titleLine1: "Local Florida",
    titleLine2: "Targeting",
    description:
      "Our team knows how legal search behavior differs by Florida metro, so your budget isn't wasted on out-of-area or out-of-practice clicks.",
    statValue: 96,
    statSuffix: "%",
    labelLine1: "OF LEADS",
    labelLine2: "GEO-QUALIFIED",
  },
  {
    icon: BarChart3,
    titleLine1: "Full-Funnel",
    titleLine2: "Accountability",
    description:
      "We track cost-per-lead and cost-per-consult, and help connect that data through to signed cases.",
    statValue: 500,
    statSuffix: "K+",
    labelLine1: "TOTAL",
    labelLine2: "LEADS GENERATED",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative w-full overflow-hidden bg-[#071326] py-14 sm:py-18 md:py-20 lg:py-24 xl:py-28 text-white"
    >
      {/* =========================================================================
          BACKGROUND COURTHOUSE COLUMNS (Right side background graphic)
          ========================================================================= */}
      <div className="absolute right-0 top-0 bottom-0 w-full sm:w-2/3 lg:w-1/2 pointer-events-none select-none z-0 overflow-hidden">
        <Image
          src="/images/legal-hero-bg.jpg"
          alt="Courthouse Columns"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-right opacity-35 mix-blend-luminosity lg:opacity-45"
        />
        {/* Soft directional gradient overlays for seamless text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071326] via-[#071326]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071326] via-transparent to-[#071326]/60" />
      </div>

      {/* =========================================================================
          CONTENT CONTAINER
          ========================================================================= */}
      <div className="relative z-10 mx-auto max-w-[1580px] w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        
        {/* =======================================================================
            HEADER: § WHY US BADGE, HEADLINE & SUBTITLE
            ======================================================================= */}
        <div className="max-w-[960px]">
          {/* Section Tag: Strict Roman numeral serial XIII, no border, consistent with preceding sections */}
          <div className="inline-flex items-center">
            <span className="font-mono text-[11px] sm:text-[12px] md:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">XIII.</span> WHY US
            </span>
          </div>

          {/* Headline */}
          <h2 className="mt-4 sm:mt-5 md:mt-6 font-playfair text-[30px] xs:text-[34px] sm:text-[42px] md:text-[48px] lg:text-[54px] xl:text-[58px] font-bold leading-[1.14] tracking-[-0.02em] text-white">
            Built for law firms,{" "}
            <span className="italic font-normal text-[#FF5528]">
              not generic businesses.
            </span>
          </h2>

          {/* Subheading */}
          <p className="mt-3.5 sm:mt-4 md:mt-5 font-instrument text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[1.68] text-[#94A3B8] max-w-[760px]">
            We combine legal industry expertise, local market intelligence, and
            full-funnel execution to deliver more qualified cases — not just
            clicks.
          </p>
        </div>

        {/* =======================================================================
            THREE STAT CARDS GRID
            Responsive 1-col on mobile, 3-col on md & desktop
            ======================================================================= */}
        <div className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-6 xl:gap-8">
          {WHY_US_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-[20px] border border-white/10 bg-[#0B1B33]/70 p-6 sm:p-7 lg:p-8 backdrop-blur-md shadow-[0_12px_36px_rgba(3,10,24,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5528]/40 hover:bg-[#0E2240]/80 hover:shadow-[0_20px_48px_rgba(0,0,0,0.5)]"
              >
                <div>
                  {/* Card Header: Icon Badge + 2-Line Playfair Title */}
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <div className="flex h-12 w-12 sm:h-13 sm:w-13 lg:h-14 lg:w-14 shrink-0 items-center justify-center rounded-[12px] bg-[#142A4A] border border-white/10 text-[#FF5528] transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-6 w-6 sm:h-6.5 sm:w-6.5" strokeWidth={2.2} />
                    </div>

                    <h3 className="font-playfair text-[18px] sm:text-[19px] lg:text-[21px] xl:text-[22px] font-bold text-white leading-[1.25]">
                      <span>{card.titleLine1}</span>
                      <br />
                      <span>{card.titleLine2}</span>
                    </h3>
                  </div>

                  {/* Body Paragraph */}
                  <p className="mt-4 sm:mt-5 font-instrument text-[13.5px] sm:text-[14px] lg:text-[14.5px] leading-[1.65] text-[#94A3B8]">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Stat Row: Number Counter + Divider + Monospace Label */}
                <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/10 flex items-center gap-4 sm:gap-5">
                  <div className="font-inter text-[34px] sm:text-[38px] lg:text-[42px] font-bold text-[#FF5528] leading-none tracking-tight">
                    <AnimatedCounter
                      value={card.statValue}
                      suffix={card.statSuffix}
                    />
                  </div>

                  {/* Vertical Divider Line */}
                  <div
                    className="h-8 sm:h-9 w-[1px] bg-white/20 shrink-0"
                    aria-hidden="true"
                  />

                  {/* 2-line Monospace Label */}
                  <div className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-[0.14em] text-[#94A3B8] uppercase leading-[1.35]">
                    <span>{card.labelLine1}</span>
                    <br />
                    <span>{card.labelLine2}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
