
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

function AnimatedCounter({ end, duration = 1800, suffix = '' }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
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

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
      observer.disconnect();
    };
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
    <section className="relative w-full bg-white overflow-hidden">
      {/* =========================================================================
          DESKTOP & TABLET VIEW (md and above)
         ========================================================================= */}
      <div className="hidden md:block relative w-full aspect-[1024/442]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/assets/bayshoreSolutions/hero-section.png"
            alt="Build Your Team with Global Talent"
            fill
            priority
            className="object-cover object-bottom"
          />
        </div>

        {/* Center Header Content */}
        <div className="absolute top-[6%] left-0 right-0 z-20 flex flex-col items-center text-center px-4 pointer-events-none">
          <h1 className="font-extrabold text-[#0B192C] tracking-tight text-[28px] md:text-[38px] lg:text-[44px] xl:text-[46px] 2xl:text-[60px] leading-[1.12] mb-2.5 sm:mb-3">
            Build Your Team with Global Talent <br />
            <span className="text-primary">Starting at $3 Per Hour</span>
          </h1>

          <p className="text-[#475569] max-w-[500px] lg:max-w-[560px] mx-auto text-[13px] lg:text-[14.5px] xl:text-[20px] leading-relaxed mb-4 lg:mb-5">
            Hire dedicated, English-speaking professionals from Asia for up to 75% less than the cost of U.S. employees.
          </p>

          <div className="pointer-events-auto">
            <Link
              href="/find-talent"
              className="group inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-[#0B192C] hover:bg-[#FE6F1F] text-white rounded-full px-7 sm:px-9 py-3.5 sm:py-4 text-[15px] sm:text-[16px] md:text-[17px] font-bold tracking-wide transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] cursor-pointer whitespace-nowrap"
            >
              <span>Find Your Talent</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1.5 transition-transform duration-300 shrink-0"
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

        {/* Floating Mini Card: Trending Bar Chart */}
        <div
          className="pointer-events-auto absolute z-20 transition-all duration-300 hover:scale-110"
          style={{ left: '20.70%', top: '31.00%', width: '6.4%' }}
        >
          <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg border border-white/90 aspect-square flex items-center justify-center p-[15%]">
            <svg className="w-full h-full text-primary" viewBox="0 0 100 100" fill="#FE6F1F">
              <rect x="8" y="66" width="18" height="32" rx="4.5" />
              <rect x="36" y="51" width="18" height="47" rx="4.5" />
              <rect x="64" y="37" width="18" height="61" rx="4.5" />
              <circle cx="10" cy="49" r="4.2" />
              <path
                d="M 10 49 C 18 45, 23 34, 34 34 C 44 34, 50 43, 60 41 C 69 38, 75 25, 83 14"
                fill="none"
                stroke="#FE6F1F"
                strokeWidth="6.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polygon points="62,11 93,5 87,36 78,23" />
            </svg>
          </div>
        </div>

        {/* Floating Card: 75% Lower Cost */}
        <div
          className="pointer-events-auto absolute z-20 transition-all duration-300 hover:scale-105"
          style={{ left: '4.39%', top: '50.23%', width: '18.6%' }}
        >
          <div className="bg-white/95 backdrop-blur-md rounded-2xl lg:rounded-3xl p-3.5 lg:p-4.5 xl:p-5 shadow-lg border border-white/90">
            <div className="flex items-center justify-between gap-1 mb-1">
              <span className="font-extrabold text-[28px] lg:text-[36px] xl:text-[42px] text-[#0B192C] leading-none tracking-tight">
                <AnimatedCounter end={75} duration={1500} suffix="%" />
              </span>
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
            <div className="text-[#334155] text-xs lg:text-sm font-medium leading-[1.35]">
              Lower cost <br />than U.S. employees.
            </div>
          </div>
        </div>

        {/* Floating Mini Card: Team Icon */}
        <div
          className="pointer-events-auto absolute z-30 transition-all duration-300 hover:scale-110"
          style={{ left: '83.98%', top: '30.54%', width: '6.0%' }}
        >
          <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg border border-white/90 aspect-square flex items-center justify-center p-[14%]">
            <svg className="w-full h-full" viewBox="0 0 100 88" fill="none">
              <circle cx="24" cy="37" r="14" fill="#FE6F1F" />
              <path d="M 3 83 L 3 72 C 3 56, 38 54, 46 66 L 35 83 Z" fill="#FE6F1F" />
              <circle cx="76" cy="37" r="14" fill="#FE6F1F" />
              <path d="M 97 83 L 97 72 C 97 56, 62 54, 54 66 L 65 83 Z" fill="#FE6F1F" />
              <circle cx="50" cy="24" r="19" fill="white" />
              <path d="M 16 86 L 16 68 C 16 48, 84 48, 84 68 L 84 86 Z" fill="white" />
              <circle cx="50" cy="24" r="15" fill="#FE6F1F" />
              <path d="M 21 83 L 21 70 C 21 54, 79 54, 79 70 L 79 83 Z" fill="#FE6F1F" />
            </svg>
          </div>
        </div>

        {/* Floating Card: 48 Hours */}
        <div
          className="pointer-events-auto absolute z-20 transition-all duration-300 hover:scale-105"
          style={{ left: '80.86%', top: '49.77%', width: '17.0%' }}
        >
          <div className="bg-white/95 backdrop-blur-md rounded-2xl lg:rounded-3xl p-3.5 lg:p-4.5 xl:p-5 shadow-lg border border-white/90 flex items-center gap-3.5">
            <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#0B192C] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <svg className="w-6 h-6 lg:w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <polyline points="12 7 12 12 9 12" />
              </svg>
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base lg:text-lg xl:text-xl text-[#0B192C] leading-none tracking-tight">
                  <AnimatedCounter end={48} duration={1400} /> Hours
                </span>
                <span className="w-3.5 h-3.5 rounded-full bg-[#86EFAC]/50 flex items-center justify-center flex-shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                </span>
              </div>
              <div className="text-[#334155] text-xs lg:text-sm font-medium leading-tight mt-1.5 truncate">
                Interview before you hire.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MOBILE VIEW (Matched Exactly to 2nd Image)
         ========================================================================= */}
      <div className="block md:hidden relative w-full aspect-[430/620] min-h-[580px] overflow-hidden">
        {/* Background Team Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/bayshoreSolutions/hero-mobile.png"
            alt="Build Your Team with Global Talent"
            fill
            priority
            className="object-cover object-bottom"
          />
          {/* Subtle top gradient overlay to keep text ultra-crisp */}
          <div className="absolute inset-x-0 top-0 h-[48%] bg-gradient-to-b from-white via-white/85 to-transparent pointer-events-none" />
        </div>

        {/* Content Overlaid at Top */}
        <div className="relative z-10 flex flex-col items-center text-center px-5 pt-28 ">
          <h1 className="font-bold  text-[#0B192C] tracking-tight text-[28px] sm:text-[32px] leading-[1.16] mb-3">
            Build Your Team with <br />
            Global Talent <span className="text-[#FE6F1F]">Starting at <br className="xs:hidden" />$3 Per Hour</span>
          </h1>

          <p className="text-[#475569] text-[14px] leading-[1.5] max-w-[320px] mx-auto mb-6">
            Hire dedicated, English-speaking professionals from Asia for up to 75% less than the cost of U.S. employees.
          </p>

          <Link
            href="/find-talent"
            className="inline-flex items-center justify-center gap-2.5 bg-[#0B192C] text-white rounded-[10px] px-7 py-3 text-[14px] font-semibold lg:font-bold tracking-wider hover:bg-[#FE6F1F] transition-all duration-300 shadow-md group"
          >
            <span>FIND YOUR TALENT</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
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
    </section>
  );
}

