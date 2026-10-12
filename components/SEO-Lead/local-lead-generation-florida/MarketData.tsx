"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Briefcase,
  MapPin,
  Trophy,
} from "lucide-react";

// =============================================================================
// ANIMATED COUNTER (Triggers smoothly when scrolled into view)
// =============================================================================
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
            const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
            // Smooth exponential ease-out
            const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
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
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={containerRef} className="tabular-nums font-inter">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

// =============================================================================
// ICONS & GRAPHICS
// =============================================================================

/** Users Group Icon (Card 01) */
function UsersGroupIcon({ className = "w-6 h-6 text-[#FF5528]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <circle cx="14" cy="8.8" r="3.4" />
      <path d="M14 13.8c-3.3 0-5.9 2-5.9 4.6v1.2h11.8v-1.2c0-2.6-2.6-4.6-5.8-4.6z" />
      <circle cx="7.2" cy="10.8" r="2.6" />
      <path d="M7.2 15c-1.9 0-3.6 1.2-4.2 2.9v1.7h3.8v-1.3c0-1.3.4-2.4 1.1-3.2-.2-.1-.5-.1-.7-.1z" />
      <circle cx="20.8" cy="10.8" r="2.6" />
      <path d="M20.8 15c-.2 0-.5 0-.7.1.7.8 1.1 1.9 1.1 3.2v1.3h3.8v-1.7c-.6-1.7-2.3-2.9-4.2-2.9z" />
    </svg>
  );
}

/** 4 Ascending Signal/Chart Bars in Top-Right of Card */
function MiniBarSignal({ className = "w-5 h-5 text-[#FFA894]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <rect x="2" y="13" width="2.5" height="5" rx="0.8" />
      <rect x="6.5" y="10" width="2.5" height="8" rx="0.8" />
      <rect x="11" y="7" width="2.5" height="11" rx="0.8" />
      <rect x="15.5" y="4" width="2.5" height="14" rx="0.8" />
    </svg>
  );
}

// =============================================================================
// MARKET STATS DATA
// =============================================================================
const MARKET_STATS = [
  {
    icon: UsersGroupIcon,
    numberValue: 23,
    suffix: "M+",
    label: "STATEWIDE POPULATION",
    description:
      "A large and diverse population across Florida creates consistent demand for legal services.",
  },
  {
    icon: Briefcase,
    numberValue: 80,
    suffix: "K+",
    label: "ACTIVE LICENSED ATTORNEYS",
    description:
      "A highly competitive market with thousands of active law firms statewide.",
  },
  {
    icon: MapPin,
    numberValue: 67,
    suffix: "",
    label: "COUNTIES STATEWIDE",
    description:
      "Opportunities to reach clients in every county, from major cities to growing communities.",
  },
  {
    icon: Trophy,
    numberValue: 3,
    suffix: "rd",
    label: "MOST POPULOUS US STATE",
    description:
      "Florida ranks 3rd in population, creating one of the largest and fastest-growing legal markets.",
  },
];

export default function MarketData() {
  return (
    <section className="relative w-full bg-white py-14 sm:py-20 lg:py-28 border-t border-[#EEF2F6]/80 overflow-hidden">
      <div className="mx-auto max-w-[1580px] px-16 sm:px-8 md:px-10 lg:px-12 xl:px-16">

        {/* ===================================================================
            HEADER: EYEBROW (VI. MARKET DATA), HEADLINE & COPY
            =================================================================== */}
        <div className="mb-10 sm:mb-12 lg:mb-14 max-w-[850px]">
          {/* Section Tag (Maintains serial: VI. MARKET DATA) */}
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">VI.</span> MARKET DATA
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-playfair mt-4 text-[34px] sm:text-[44px] md:text-[50px] lg:text-[54px] leading-[1.12] tracking-[-0.02em] text-[#0A192F]">
            The Florida legal market at a glance
            <span className="text-[#FF5528]">.</span>
          </h2>

          {/* Paragraph */}
          <p className="font-instrument mt-4 sm:mt-5 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.68] text-[#556377] max-w-[720px]">
            A large, active, and growing market — creating continuous
            opportunities for law firms to generate qualified leads.
          </p>
        </div>

        {/* ===================================================================
            4 STAT CARDS GRID (1 ROW ON DESKTOP, 2X2 ON TABLET, 1 COL ON MOBILE)
            =================================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {MARKET_STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-[20px] sm:rounded-[22px] border border-[#E5E9F2] bg-white p-6 sm:p-7 shadow-[0_4px_20px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5528]/40 hover:shadow-[0_12px_32px_rgba(15,23,42,0.08)]"
              >
                <div>
                  {/* Card Header Row: Icon + Number/Label + Right Signal Bars */}
                  <div className="flex items-center justify-between gap-3">
                    {/* Left Icon Badge */}
                    <div className="flex h-13 w-13 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-[#FFF2ED] text-[#FF5528] transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-6 w-6 sm:h-6.5 sm:w-6.5" />
                    </div>

                    {/* Center: Animated Number + Monospace Label */}
                    <div className="flex-1 min-w-0 pl-1 sm:pl-2">
                      <h3 className="font-inter text-[28px] sm:text-[32px] lg:text-[34px] xl:text-[36px] font-bold text-[#0A192F] leading-none tracking-tight">
                        <AnimatedCounter
                          value={stat.numberValue}
                          suffix={stat.suffix}
                        />
                      </h3>
                      <p className="font-mono text-[10px] sm:text-[10.5px] lg:text-[11px] font-semibold tracking-[0.12em] text-[#64748B] uppercase mt-1.5 truncate">
                        {stat.label}
                      </p>
                    </div>

                    {/* Right: Faint Signal Chart Graphic */}
                    <div className="shrink-0 text-[#FFA894] transition-opacity duration-300 group-hover:opacity-100 opacity-80">
                      <MiniBarSignal className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </div>

                  {/* Card Body Paragraph */}
                  <p className="font-instrument text-[13px] sm:text-[13.5px] lg:text-[14px] leading-[1.62] text-[#556377] mt-5 pt-4 border-t border-[#EEF2F6]">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ===================================================================
            BOTTOM HIGHLIGHT BANNER
            =================================================================== */}
        <div className="mt-6 sm:mt-8 rounded-[18px] sm:rounded-[20px] border border-[#FFE4DA] bg-[#FFF6F2] p-5 sm:p-6 lg:px-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          {/* Left: Trending Up Icon + High-impact Text */}
          <div className="flex items-start sm:items-center gap-4 sm:gap-5 flex-1">
            {/* Round White Badge */}
            <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm text-[#FF5528]">
              <TrendingUp size={22} strokeWidth={2.4} />
            </div>

            <p className="font-instrument text-[13.5px] sm:text-[14.5px] lg:text-[15px] leading-[1.6] text-[#4A5568]">
              <span className="font-bold text-[#0A192F]">
                Florida is among the fastest-growing states in the country,
              </span>{" "}
              adding hundreds of new residents daily — which means new,
              unclaimed search demand in nearly every practice area, every month.
            </p>
          </div>

          {/* Right: CTA Button */}
          <Link
            href="#explore-opportunity"
            className="group inline-flex h-[48px] sm:h-[50px] shrink-0 items-center justify-center gap-2 rounded-[8px] bg-[#FF5528] px-6 sm:px-7 text-[14px] sm:text-[15px] font-semibold text-white shadow-[0_6px_20px_rgba(255,85,40,0.25)] transition-all duration-300 hover:bg-[#e44317] hover:shadow-[0_10px_25px_rgba(255,85,40,0.35)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Explore Your Opportunity</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

      </div>
    </section>
  );
}
