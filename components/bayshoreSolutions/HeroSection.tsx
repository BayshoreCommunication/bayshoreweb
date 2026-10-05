'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Smooth Animated Counter Component
function AnimatedCounter({
  end,
  duration = 1800,
  suffix = '',
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * end));
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function HeroSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden pt-0 pb-10 md:pb-14">

      {/* =========================================================================
          DESKTOP & TABLET CANVAS (md: and above)
          Full-width exact coordinate replica of the reference design
         ========================================================================= */}
      <div className="hidden md:block relative w-full aspect-[1024/442]">

        {/* Panoramic Background with Team Sitting at Desk */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/assets/bayshoreSolutions/hero-section.png"
            alt="Build Your Team with Global Talent"
            fill
            priority
            className="object-cover object-bottom"
          />
        </div>

        {/* Center Header Content (Positioned in upper-center space) */}
        <div className="absolute top-[6%] left-0 right-0 z-20 flex flex-col items-center text-center px-4 pointer-events-none">
          {/* Title: Exactly text-[28px] md:text-[46px] */}
          <h1 className="font-extrabold text-[#0B192C] tracking-tight text-[28px] md:text-[38px] lg:text-[44px] xl:text-[46px] 2xl:text-[60px] leading-[1.12] text-center mb-2.5 sm:mb-3">
            Build Your Team with Global Talent <br />
            <span className="text-primary">Starting at $3 Per Hour</span>
          </h1>

          {/* Subtitle */}
          <p className="text-[#475569] max-w-[500px] lg:max-w-[560px] mx-auto text-[13px] lg:text-[14.5px] xl:text-[20px] leading-relaxed mb-4 lg:mb-5">
            Hire dedicated, English-speaking professionals from Asia for up to 75% less than the cost of U.S. employees.
          </p>

          {/* CTA Button: Navbar Sizing */}
          <div className="pointer-events-auto">
            <Link
              href="/find-talent"
              className="inline-flex items-center justify-center gap-[6px] sm:gap-[10px] bg-[#0B192C] text-white rounded-[8px] md:rounded-[16px] px-[18px] sm:px-[26px] py-[10px] sm:py-[12px] text-[14px] sm:text-[18px]  tracking-wide hover:bg-primary transition-all duration-300 shadow-md hover:shadow-lg group whitespace-nowrap"
            >
              <span>FIND YOUR TALENT</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] transform group-hover:translate-x-1 transition-transform duration-300 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* ---------------------------------------------------------------------
            6 FLOATING ELEMENTS (Exact coordinates, rotated card, large fluid icons)
           --------------------------------------------------------------------- */}

        {/* CARD 1: 600 Clients (Left: 5.86%, Top: 14.71%) */}
        {/* <div
          className="pointer-events-auto absolute z-20 transition-all duration-300 hover:scale-105"
          style={{ left: '5.86%', top: '14.71%', width: '16.8%' }}
        >
          <div className="bg-white/95 backdrop-blur-md rounded-[18px] lg:rounded-[24px] p-3.5 lg:p-4.5 xl:p-5 shadow-[0_12px_32px_rgba(0,0,0,0.08)] border border-white/90">
            <div className="relative w-[75%] max-w-[170px] aspect-[100/41] mb-2 lg:mb-2.5">
              <Image
                src="/assets/bayshoreSolutions/hero-elements/avatar_row_card1.png"
                alt="Clients"
                fill
                className="object-contain object-left"
              />
            </div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-extrabold text-[26px] lg:text-[34px] xl:text-[40px] text-[#0B192C] leading-none tracking-tight">
                <AnimatedCounter end={600} duration={1600} />
              </span>
              <span className="w-4 h-4 rounded-full bg-[#86EFAC]/50 flex items-center justify-center flex-shrink-0">
                <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
              </span>
            </div>
            <div className="text-[#334155] text-[12px] lg:text-[14px] xl:text-[15px] font-medium leading-[1.3]">
              Clients <br />for 5 years.
            </div>
          </div>
        </div> */}

        {/* MINI CARD 1: Trending Bar Chart (Left: 20.70%, Top: 31.00%) - Exact Vector to 2nd Image */}
        <div
          className="pointer-events-auto absolute z-20 transition-all duration-300 hover:scale-110"
          style={{ left: '20.70%', top: '31.00%', width: '6.4%' }}
        >
          <div className="bg-white rounded-[14px] lg:rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.1)] border border-white/90 aspect-square flex items-center justify-center p-[15%]">
            <svg
              className="w-full h-full text-primary"
              viewBox="0 0 100 100"
              fill="#FE6F1F"
            >
              {/* 3 Rounded Vertical Bars */}
              <rect x="8" y="66" width="18" height="32" rx="4.5" />
              <rect x="36" y="51" width="18" height="47" rx="4.5" />
              <rect x="64" y="37" width="18" height="61" rx="4.5" />

              {/* Wave Start Dot */}
              <circle cx="10" cy="49" r="4.2" />

              {/* Wave Line */}
              <path
                d="M 10 49 C 18 45, 23 34, 34 34 C 44 34, 50 43, 60 41 C 69 38, 75 25, 83 14"
                fill="none"
                stroke="#FE6F1F"
                strokeWidth="6.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Arrow Head */}
              <polygon points="62,11 93,5 87,36 78,23" />
            </svg>
          </div>
        </div>

        {/* CARD 2: 75% Lower cost (Left: 4.39%, Top: 50.23%) */}
        <div
          className="pointer-events-auto absolute z-20 transition-all duration-300 hover:scale-105"
          style={{ left: '4.39%', top: '50.23%', width: '18.6%' }}
        >
          <div className="bg-white/95 backdrop-blur-md rounded-[18px] lg:rounded-[24px] p-3.5 lg:p-4.5 xl:p-5 shadow-[0_12px_32px_rgba(0,0,0,0.08)] border border-white/90">
            <div className="flex items-center justify-between gap-1 mb-1">
              <span className="font-extrabold text-[28px] lg:text-[36px] xl:text-[42px] text-[#0B192C] leading-none tracking-tight">
                <AnimatedCounter end={75} duration={1500} suffix="%" />
              </span>
              {/* BIG Green Trend Wave with Target Dot */}
              <div className="w-[48%] max-w-[130px] aspect-[56/24]">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 56 24" fill="none">
                  <path
                    d="M 2 18 C 10 16, 16 6, 24 8 C 32 10, 38 18, 48 6"
                    stroke="#22C55E"
                    strokeWidth="3.4"
                    strokeLinecap="round"
                  />
                  <circle cx="50" cy="5" r="5" fill="#86EFAC" />
                  <circle cx="50" cy="5" r="2.2" fill="#15803D" />
                </svg>
              </div>
            </div>
            <div className="text-[#334155] text-[12px] lg:text-[14px] xl:text-[15px] font-medium leading-[1.35]">
              Lower cost <br />than U.S. employees.
            </div>
          </div>
        </div>

        {/* CARD 3: Global Talent from Asia (Left: 72.26%, Top: 16.96%, Counter-Clockwise Rotation) */}
        {/* <div
          className="pointer-events-auto absolute z-20 transition-all duration-300 transform -rotate-[4.5deg] hover:rotate-0 hover:scale-105 origin-center"
          style={{ left: '72.26%', top: '16.96%', width: '22.0%' }}
        >
          <div className="bg-white/95 backdrop-blur-md rounded-[18px] lg:rounded-[24px] p-3.5 lg:p-4.5 shadow-[0_12px_32px_rgba(0,0,0,0.08)] border border-white/90 flex items-center gap-3 lg:gap-4">
            <div className="w-[28%] max-w-[70px] aspect-square flex-shrink-0 flex items-center justify-center">
              <svg className="w-full h-full text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <div className="relative w-[85%] max-w-[165px] aspect-[100/41] mb-1.5">
                <Image
                  src="/assets/bayshoreSolutions/hero-elements/avatar_row_card1.png"
                  alt="Talent Avatars"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <div className="font-extrabold text-[16px] lg:text-[19px] xl:text-[22px] text-[#0B192C] leading-tight truncate">
                Global Talent
              </div>
              <div className="text-[#334155] text-[12px] lg:text-[14px] xl:text-[15px] font-semibold leading-none mt-1">
                from Asia
              </div>
            </div>
          </div>
        </div> */}

        {/* MINI CARD 2: Team Icon (Left: 83.98%, Top: 30.54%) - Exact Vector Icon to Image */}
        <div
          className="pointer-events-auto absolute z-30 transition-all duration-300 hover:scale-110"
          style={{ left: '83.98%', top: '30.54%', width: '6.0%' }}
        >
          <div className="bg-white rounded-[14px] lg:rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.1)] border border-white/90 aspect-square flex items-center justify-center p-[14%]">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 88"
              fill="none"
            >
              {/* Left Person (behind) */}
              <circle cx="24" cy="37" r="14" fill="#FE6F1F" />
              <path d="M 3 83 L 3 72 C 3 56, 38 54, 46 66 L 35 83 Z" fill="#FE6F1F" />

              {/* Right Person (behind) */}
              <circle cx="76" cy="37" r="14" fill="#FE6F1F" />
              <path d="M 97 83 L 97 72 C 97 56, 62 54, 54 66 L 65 83 Z" fill="#FE6F1F" />

              {/* Crisp White Cutout Outline for Front Person */}
              <circle cx="50" cy="24" r="19" fill="white" />
              <path d="M 16 86 L 16 68 C 16 48, 84 48, 84 68 L 84 86 Z" fill="white" />

              {/* Front Center Person */}
              <circle cx="50" cy="24" r="15" fill="#FE6F1F" />
              <path d="M 21 83 L 21 70 C 21 54, 79 54, 79 70 L 79 83 Z" fill="#FE6F1F" />
            </svg>
          </div>
        </div>

        {/* CARD 4: 48 Hours (Left: 80.86%, Top: 49.77%) */}
        <div
          className="pointer-events-auto absolute z-20 transition-all duration-300 hover:scale-105"
          style={{ left: '80.86%', top: '49.77%', width: '17.0%' }}
        >
          <div className="bg-white/95 backdrop-blur-md rounded-[18px] lg:rounded-[24px] p-3.5 lg:p-4.5 xl:p-5 shadow-[0_12px_32px_rgba(0,0,0,0.08)] border border-white/90 flex items-center gap-3.5">
            {/* BIG Navy Clock Badge */}
            <div className="w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded-full bg-[#0B192C] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <svg className="w-6 h-6 lg:w-7.5 lg:h-7.5 xl:w-8.5 xl:h-8.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <polyline points="12 7 12 12 9 12" />
              </svg>
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-[17px] lg:text-[20px] xl:text-[23px] text-[#0B192C] leading-none tracking-tight">
                  <AnimatedCounter end={48} duration={1400} /> Hours
                </span>
                <span className="w-4 h-4 rounded-full bg-[#86EFAC]/50 flex items-center justify-center flex-shrink-0">
                  <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                </span>
              </div>
              <div className="text-[#334155] text-[12px] lg:text-[13.5px] xl:text-[14px] font-medium leading-tight mt-1.5 truncate">
                Interview before you hire.
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* =========================================================================
          MOBILE SECTION (< md)
          Vertical canvas with exact header and responsive cards
         ========================================================================= */}
      <div className="block md:hidden w-full relative px-4">
        
        {/* Top Header on Mobile */}
        <div className="text-center max-w-[440px] mx-auto mb-6">
          <h1 className="font-extrabold text-[#0B192C] tracking-tight text-[28px] leading-[1.18] mb-2.5">
            Build Your Team with Global Talent <br />
            <span className="text-primary">Starting at $3 Per Hour</span>
          </h1>
          <p className="text-[#475569] text-[13.5px] leading-relaxed mb-5">
            Hire dedicated, English-speaking professionals from Asia for up to 75% less than the cost of U.S. employees.
          </p>
          <div className="flex justify-center">
            <Link
              href="/find-talent"
              className="inline-flex items-center justify-center gap-2 bg-[#0B192C] text-white rounded-full px-5 py-2.5 text-xs font-bold tracking-wide hover:bg-primary transition-all duration-300 shadow-md group"
            >
              <span>FIND YOUR TALENT</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Mobile Team Image */}
        <div className="relative w-full max-w-[420px] mx-auto aspect-[753/650] rounded-2xl overflow-hidden shadow-sm mb-4">
          <Image
            src="/assets/bayshoreSolutions/hero-mobile.png"
            alt="Global Talent Team"
            fill
            priority
            className="object-cover object-bottom"
          />
        </div>

        {/* Mobile 2x2 Grid of Proof Cards */}
        <div className="grid grid-cols-2 gap-2.5 max-w-[420px] mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-[16px] p-3.5 shadow-md border border-gray-100 flex flex-col justify-between">
            <div className="relative w-[100px] h-[30px] mb-1.5">
              <Image
                src="/assets/bayshoreSolutions/hero-elements/avatar_row_card1.png"
                alt="Clients"
                fill
                className="object-contain object-left"
              />
            </div>
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="font-extrabold text-[24px] text-[#0B192C] leading-none">
                <AnimatedCounter end={600} duration={1600} />
              </span>
              <span className="w-3.5 h-3.5 rounded-full bg-[#86EFAC]/60 flex items-center justify-center flex-shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
              </span>
            </div>
            <div className="text-[#334155] text-[11.5px] font-medium leading-tight">
              Clients for 5 years.
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[16px] p-3.5 shadow-md border border-gray-100 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1">
              <span className="font-extrabold text-[24px] text-[#0B192C] leading-none">
                <AnimatedCounter end={75} duration={1500} suffix="%" />
              </span>
              <svg className="w-14 h-7 overflow-visible" viewBox="0 0 56 24" fill="none">
                <path
                  d="M 2 18 C 10 16, 16 6, 24 8 C 32 10, 38 18, 48 6"
                  stroke="#22C55E"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
                <circle cx="50" cy="5" r="5" fill="#86EFAC" />
                <circle cx="50" cy="5" r="2.2" fill="#15803D" />
              </svg>
            </div>
            <div className="text-[#334155] text-[11.5px] font-medium leading-tight">
              Lower cost than U.S.
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[16px] p-3.5 shadow-md border border-gray-100 flex items-center gap-2.5">
            <svg className="w-10 h-10 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <div className="flex flex-col min-w-0">
              <div className="font-extrabold text-[14px] text-[#0B192C] leading-tight truncate">
                Global Talent
              </div>
              <div className="text-[#334155] text-[11px] font-medium leading-tight mt-0.5">
                from Asia
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-[16px] p-3.5 shadow-md border border-gray-100 flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-[#0B192C] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <polyline points="12 7 12 12 9 12" />
              </svg>
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1">
                <span className="font-extrabold text-[14px] text-[#0B192C] leading-tight">
                  <AnimatedCounter end={48} duration={1400} /> Hours
                </span>
                <span className="w-3 h-3 rounded-full bg-[#86EFAC]/60 flex items-center justify-center flex-shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#15803D]" />
                </span>
              </div>
              <div className="text-[#334155] text-[11px] font-medium leading-tight truncate mt-0.5">
                Interview before hire.
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}