"use client";

import React, { useEffect, useState, useRef } from "react";
import { Landmark, Users, User, MapPin, TrendingUp } from "lucide-react";

// Law firms in the Florida trust bar
const TRUSTED_FIRMS = [
  { name: "Carter Injury Law" },
  { name: "Melamed Law" },
  { name: "McCulloch Law" },
  { name: "Zarin & Associates" },
  { name: "Trip Law" },
];

// Reusable Animated Counter component with Inter font
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
      const progress = Math.min(
        (timestamp - startTimestamp) / (duration * 1000),
        1
      );
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

export default function WhyLeadGen() {
  return (
    <section className="relative w-full bg-white py-14 sm:py-18 lg:py-20 border-t border-[#EEF2F6]/80">
      <div className="mx-auto max-w-[1580px] px-16 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        
        {/* =========================================================================
            TRUSTED BY FLORIDA LAW FIRMS (TRUST BAR)
            ========================================================================= */}
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <p className="font-mono text-[11px] sm:text-[12px] font-semibold tracking-[0.16em] text-[#64748B] uppercase mb-4 sm:mb-5">
            TRUSTED BY FLORIDA LAW FIRMS
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-4">
            {TRUSTED_FIRMS.map((firm, idx) => (
              <div
                key={idx}
                className="group inline-flex items-center gap-2.5 rounded-[8px] border border-[#E2E8F0] bg-white px-4 sm:px-5 py-2.5 sm:py-3 shadow-[0_2px_8px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex h-7 w-7 items-center justify-center text-[#64748B] transition-colors duration-300 group-hover:text-primary">
                  <Landmark size={18} strokeWidth={2.2} />
                </div>
                <span className="font-sans text-[14px] sm:text-[15px] font-semibold tracking-[-0.01em] text-[#0A192F]">
                  {firm.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            SECTION CONTENT: THE WHY (2-COLUMN GRID)
            ========================================================================= */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          
          {/* ---------------- LEFT: HEADLINE & COPY ---------------- */}
          <div className="lg:col-span-6 xl:col-span-6">
            
            {/* Section Tag */}
            <div className="inline-flex items-center">
              <span className="font-mono text-[12px] sm:text-[13px] font-bold tracking-[0.16em] text-primary uppercase">
                I. THE WHY
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-playfair mt-4 text-[34px] sm:text-[42px] md:text-[48px] lg:text-[50px] xl:text-[54px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0A192F]">
              Why lead generation
              <br />
              decides whether your
              <br />
              firm{" "}
              <span className="italic font-normal text-primary">
                grows or stalls
              </span>
              .
            </h2>

            {/* Orange Decorative Accent Line */}
            <div className="mt-4 mb-6 h-[3.5px] w-12 rounded-full bg-primary" />

            {/* Paragraph Text */}
            <p className="font-instrument text-[16px] sm:text-[17px] md:text-[18px] leading-[1.72] text-[#4A5568] max-w-[580px]">
              Florida is one of the largest, fastest-growing, and most competitive legal markets in the country. The firms that grow aren&apos;t always the ones with the best case results — they&apos;re the ones prospective clients can actually find, trust, and reach first. If your visibility and intake aren&apos;t built for that scale of competition, referrals alone won&apos;t carry you.
            </p>
          </div>

          {/* ---------------- RIGHT: 2X2 STAT CARDS GRID ---------------- */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              
              {/* CARD 1: TOP LEFT (Dark Navy) */}
              <div className="group relative overflow-hidden rounded-[16px] bg-[#0E1D33] p-6 sm:p-7 shadow-[0_15px_35px_rgba(14,29,51,0.14)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(14,29,51,0.22)]">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-transform duration-300 group-hover:scale-105">
                    <Users size={24} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h3 className="font-inter text-[34px] sm:text-[38px] font-bold leading-none tracking-tight text-primary">
                      <AnimatedCounter value={23} suffix="M+" />
                    </h3>
                    <p className="font-mono mt-2 text-[11px] sm:text-[12px] font-medium tracking-[0.12em] text-[#94A3B8] uppercase">
                      FL Residents Statewide
                    </p>
                  </div>
                </div>
              </div>

              {/* CARD 2: TOP RIGHT (White) */}
              <div className="group relative overflow-hidden rounded-[16px] border border-[#E2E8F0] bg-white p-6 sm:p-7 shadow-[0_15px_35px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.1)]">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#F1F5F9] text-[#0A192F] transition-transform duration-300 group-hover:scale-105">
                    <User size={24} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h3 className="font-inter text-[34px] sm:text-[38px] font-bold leading-none tracking-tight text-primary">
                      <AnimatedCounter value={80} suffix="K+" />
                    </h3>
                    <p className="font-mono mt-2 text-[11px] sm:text-[12px] font-medium tracking-[0.12em] text-[#64748B] uppercase">
                      Active FL Attorneys
                    </p>
                  </div>
                </div>
              </div>

              {/* CARD 3: BOTTOM LEFT (White) */}
              <div className="group relative overflow-hidden rounded-[16px] border border-[#E2E8F0] bg-white p-6 sm:p-7 shadow-[0_15px_35px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.1)]">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#F1F5F9] text-[#0A192F] transition-transform duration-300 group-hover:scale-105">
                    <MapPin size={24} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h3 className="font-inter text-[34px] sm:text-[38px] font-bold leading-none tracking-tight text-primary">
                      <AnimatedCounter value={67} />
                    </h3>
                    <p className="font-mono mt-2 text-[11px] sm:text-[12px] font-medium tracking-[0.12em] text-[#64748B] uppercase">
                      Counties, Each Different
                    </p>
                  </div>
                </div>
              </div>

              {/* CARD 4: BOTTOM RIGHT (Dark Navy) */}
              <div className="group relative overflow-hidden rounded-[16px] bg-[#0E1D33] p-6 sm:p-7 shadow-[0_15px_35px_rgba(14,29,51,0.14)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(14,29,51,0.22)]">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-transform duration-300 group-hover:scale-105">
                    <TrendingUp size={24} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h3 className="font-inter text-[34px] sm:text-[38px] font-bold leading-none tracking-tight text-primary">
                      <AnimatedCounter value={3} prefix="#" />
                    </h3>
                    <p className="font-mono mt-2 text-[11px] sm:text-[12px] font-medium tracking-[0.12em] text-[#94A3B8] uppercase">
                      Miami: US Attorney Demand
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
