"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ArrowDown, TrendingUp } from "lucide-react";

/**
 * =============================================================================
 * ANIMATED COUNTER COMPONENT
 * Triggers smoothly when scrolled into view via IntersectionObserver.
 * Strictly uses font-inter and tabular-nums for crisp, modern sans rendering.
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
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={containerRef} className="tabular-nums font-inter font-bold">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

/** Outlined 3-bar chart icon for Card 1 */
function BarChartIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="14" width="4" height="7" rx="1.2" />
      <rect x="10" y="8" width="4" height="13" rx="1.2" />
      <rect x="17" y="3" width="4" height="18" rx="1.2" />
    </svg>
  );
}

interface ResultItem {
  id: string;
  prefix: string;
  value: number;
  suffix: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  watermark: "bars-4" | "wave" | "bars-5";
}

const RESULTS_DATA: ResultItem[] = [
  {
    id: "consults",
    prefix: "+",
    value: 180,
    suffix: "%",
    icon: BarChartIcon,
    title: "Increase in qualified consults",
    description: "Increase in qualified consults for a Tampa-based injury firm.",
    linkText: "Read Full Case Study",
    linkHref: "#contact",
    watermark: "bars-4",
  },
  {
    id: "cost-per-lead",
    prefix: "−",
    value: 65,
    suffix: "%",
    icon: ArrowDown,
    title: "Reduction in cost per lead",
    description: "Reduction in cost per lead after a full campaign restructure.",
    linkText: "Read Full Case Study",
    linkHref: "#contact",
    watermark: "wave",
  },
  {
    id: "traffic",
    prefix: "+",
    value: 210,
    suffix: "%",
    icon: TrendingUp,
    title: "Increase in organic search traffic",
    description: "Increase in organic search traffic across practice-area pages.",
    linkText: "Read Full Case Study",
    linkHref: "#contact",
    watermark: "bars-5",
  },
];

export default function RealResults() {
  return (
    <section
      id="results"
      className="relative w-full bg-white py-14 sm:py-18 md:py-20 lg:py-24 xl:py-28 border-t border-[#EEF2F6]/90 overflow-hidden"
    >
      <div className="mx-auto max-w-[1580px] w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        
        {/* =======================================================================
            HEADER: STRICT BORDERLESS ROMAN NUMERAL SERIAL TAG, HEADLINE & INTRO
            ======================================================================= */}
        <div className="max-w-[920px] mb-10 sm:mb-12 lg:mb-14">
          {/* Borderless Roman Numeral Tagline */}
          <div className="inline-flex items-center">
            <span className="font-mono text-[11px] sm:text-[12px] md:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">XV.</span> RESULTS
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-playfair mt-3.5 sm:mt-4 md:mt-5 text-[30px] xs:text-[34px] sm:text-[42px] md:text-[48px] lg:text-[54px] xl:text-[58px] font-bold leading-[1.14] tracking-[-0.02em] text-[#0A192F]">
            Real results for real{" "}
            <span className="italic font-normal text-[#FF5528]">
              Florida law firms.
            </span>
          </h2>

          {/* Subtitle / Paragraph */}
          <p className="font-instrument mt-3.5 sm:mt-4 md:mt-5 text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[1.68] text-[#556377] max-w-[760px]">
            Our data-driven strategies help law firms generate more qualified leads, lower
            costs, and grow their practices across Florida.
          </p>
        </div>

        {/* =======================================================================
            THREE METRIC RESULT CARDS
            Grid: 1-col on mobile, 3-col on md & desktop
            Border is neutral by default, orange border activates on hover
            ======================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-6 xl:gap-8 items-stretch">
          {RESULTS_DATA.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[22px] sm:rounded-[24px] border border-[#E5E9F2] bg-white p-6 sm:p-7 lg:p-8 shadow-[0_4px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-[#FF5528] hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)] hover:-translate-y-1.5"
              >
                {/* ===============================================================
                    BACKGROUND WATERMARK GRAPHICS (SAME TO SAME GRADIENT ARTWORK)
                    =============================================================== */}
                {item.watermark === "bars-4" && (
                  <div className="absolute bottom-0 right-3 pointer-events-none select-none">
                    <svg
                      width="118"
                      height="124"
                      viewBox="0 0 118 124"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="barGrad1"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="124"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0%" stopColor="#FF5528" stopOpacity="0.28" />
                          <stop offset="100%" stopColor="#FF5528" stopOpacity="0.04" />
                        </linearGradient>
                      </defs>
                      <rect x="6" y="92" width="18" height="32" rx="9" fill="url(#barGrad1)" />
                      <rect x="34" y="66" width="18" height="58" rx="9" fill="url(#barGrad1)" />
                      <rect x="62" y="40" width="18" height="84" rx="9" fill="url(#barGrad1)" />
                      <rect x="90" y="12" width="18" height="112" rx="9" fill="url(#barGrad1)" />
                    </svg>
                  </div>
                )}

                {item.watermark === "wave" && (
                  <div className="absolute bottom-0 right-0 pointer-events-none select-none">
                    <svg
                      width="165"
                      height="98"
                      viewBox="0 0 165 98"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="waveGrad"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="98"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0%" stopColor="#FF5528" stopOpacity="0.22" />
                          <stop offset="100%" stopColor="#FF5528" stopOpacity="0.02" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0 98 C30 98 52 86 75 70 C100 50 118 34 142 46 C152 52 158 62 165 68 V98 H0 Z"
                        fill="url(#waveGrad)"
                      />
                      <path
                        d="M0 98 C30 98 52 86 75 70 C100 50 118 34 142 46 C152 52 158 62 165 68"
                        stroke="#FF5528"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeOpacity="0.32"
                      />
                    </svg>
                  </div>
                )}

                {item.watermark === "bars-5" && (
                  <div className="absolute bottom-0 right-3 pointer-events-none select-none">
                    <svg
                      width="132"
                      height="124"
                      viewBox="0 0 132 124"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="barGrad3"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="124"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0%" stopColor="#FF5528" stopOpacity="0.28" />
                          <stop offset="100%" stopColor="#FF5528" stopOpacity="0.04" />
                        </linearGradient>
                      </defs>
                      <rect x="4" y="98" width="16" height="26" rx="8" fill="url(#barGrad3)" />
                      <rect x="28" y="76" width="16" height="48" rx="8" fill="url(#barGrad3)" />
                      <rect x="52" y="54" width="16" height="70" rx="8" fill="url(#barGrad3)" />
                      <rect x="76" y="32" width="16" height="92" rx="8" fill="url(#barGrad3)" />
                      <rect x="100" y="10" width="16" height="114" rx="8" fill="url(#barGrad3)" />
                    </svg>
                  </div>
                )}

                {/* Top content */}
                <div className="relative z-10">
                  {/* Top row: Circular icon badge & Large metric stat in font-inter */}
                  <div className="flex items-center gap-4 sm:gap-4.5">
                    <div className="flex h-12 w-12 sm:h-13 sm:w-13 shrink-0 items-center justify-center rounded-full bg-[#FFF2ED] text-[#FF5528] transition-transform duration-300 group-hover:scale-105">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    {/* Numbers in font-inter font-bold */}
                    <div className="font-inter font-bold text-[36px] xs:text-[38px] sm:text-[42px] lg:text-[46px] text-[#0A192F] tracking-tight leading-none">
                      <AnimatedCounter
                        value={item.value}
                        prefix={item.prefix}
                        suffix={item.suffix}
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-playfair text-[20px] sm:text-[21px] lg:text-[22px] font-bold text-[#0A192F] mt-5 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-instrument text-[14px] sm:text-[14.5px] leading-[1.6] text-[#64748B] mt-2.5 max-w-[340px]">
                    {item.description}
                  </p>
                </div>

                {/* Bottom CTA link */}
                <div className="relative z-10 mt-6 sm:mt-7 pt-2">
                  <Link
                    href={item.linkHref}
                    className="group/link inline-flex items-center gap-1.5 text-[14px] sm:text-[14.5px] font-semibold text-[#FF5528] transition-colors w-fit"
                  >
                    <span className="border-b border-[#FF5528] pb-0.5 group-hover/link:border-b-2 transition-all">
                      {item.linkText}
                    </span>
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-200 group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
