"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote:
      "Bayshore rebuilt our Florida personal injury acquisition pipeline from the ground up. In less than 7 months, our signed cases increased by +180% while our cost per lead plummeted. Every inquiry is verified and exclusive to our firm.",
    author: "MANAGING PARTNER, TAMPA BAY PERSONAL INJURY PRACTICE",
  },
  {
    id: 2,
    quote:
      "Most agencies sell broad statewide traffic that leads nowhere. Bayshore configured county-level geo-fencing and intake workflows that deliver clients our attorneys can actually represent in South Florida courthouses.",
    author: "SENIOR LITIGATION PARTNER, MIAMI-DADE & BROWARD FIRM",
  },
  {
    id: 3,
    quote:
      "Their understanding of Florida Bar advertising rules and ethical lead generation gave our partners complete peace of mind. The prequalification screening filters out junk inquiries and leaves our intake desk with case-ready retainers.",
    author: "FOUNDING ATTORNEY, CENTRAL FLORIDA ESTATE & FAMILY PRACTICE",
  },
  {
    id: 4,
    quote:
      "The transparency in reporting is unmatched. We track every single marketing dollar through to signed retainers in our legal CRM. Outstanding execution across organic SEO, LSA, and landing pages.",
    author: "MANAGING DIRECTOR, FLORIDA COMMERCIAL & WORKERS' COMP COUNSEL",
  },
];

export default function LegalTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section
      className="relative w-full overflow-hidden bg-[#0A1628] py-16 sm:py-20 lg:py-24 text-white select-none border-t border-white/5"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="What Florida Legal Clients Say About Bayshore"
    >
      {/* Background Subtle Radial Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#142540_0%,_#071222_85%)] opacity-90" />

      {/* Left Large Ghost Watermark Quote Mark */}
      <div className="pointer-events-none absolute left-3 sm:left-8 lg:left-14 top-1/2 -translate-y-1/2 select-none z-0">
        <span className="font-playfair text-[150px] sm:text-[220px] lg:text-[280px] leading-none text-white/[0.04]">
          “
        </span>
      </div>

      {/* Right Large Ghost Watermark Quote Mark */}
      <div className="pointer-events-none absolute right-3 sm:right-8 lg:right-14 top-1/2 -translate-y-1/2 select-none z-0">
        <span className="font-playfair text-[150px] sm:text-[220px] lg:text-[280px] leading-none text-white/[0.04]">
          ”
        </span>
      </div>

      {/* Slider Content Container */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-8 lg:px-16">
        
        {/* Title */}
        <div className="text-center mb-6 sm:mb-8">
          <p className="font-mono text-[11px] sm:text-[12px] font-bold tracking-[0.16em] text-[#FE6F1F] uppercase mb-2">
            CLIENT TESTIMONIALS
          </p>
          <h2 className="font-playfair text-[26px] sm:text-[34px] md:text-[38px] font-bold text-white">
            What Florida Law Practices Say About Bayshore
          </h2>
        </div>

        {/* Center Top Ornament */}
        <div className="flex items-center justify-center gap-3.5 mb-7 sm:mb-9">
          <div className="w-10 sm:w-14 h-[1.5px] bg-[#FE6F1F]/70" />
          <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#1A2A44] border border-[#FE6F1F]/30 shadow-md">
            <Quote
              className="text-[#FE6F1F]"
              size={18}
              strokeWidth={0}
              fill="#FE6F1F"
            />
          </div>
          <div className="w-10 sm:w-14 h-[1.5px] bg-[#FE6F1F]/70" />
        </div>

        {/* Animated Testimonial Slide */}
        <div className="relative min-h-[160px] sm:min-h-[140px] md:min-h-[130px] flex items-center justify-center">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full text-center"
            >
              <blockquote className="font-playfair text-[20px] sm:text-[25px] md:text-[28px] lg:text-[32px] xl:text-[34px] italic leading-[1.42] text-white font-normal max-w-[940px] mx-auto">
                <span className="text-[#FE6F1F] not-italic font-sans mr-1 text-[24px] sm:text-[30px] lg:text-[36px] leading-none align-baseline">
                  &ldquo;
                </span>
                {current.quote}
                <span className="text-[#FE6F1F] not-italic font-sans ml-1 text-[24px] sm:text-[30px] lg:text-[36px] leading-none align-baseline">
                  &rdquo;
                </span>
              </blockquote>

              <div className="mt-6 sm:mt-8 flex items-center justify-center gap-2.5">
                <span className="w-4 sm:w-5 h-[1.5px] bg-[#FE6F1F]" />
                <p className="font-mono text-[11px] sm:text-[12px] font-semibold tracking-[0.18em] text-[#94A3B8] uppercase">
                  {current.author}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Controls */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-5 sm:gap-6">
          <button
            onClick={prevSlide}
            aria-label="Previous Testimonial"
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:border-[#FE6F1F] hover:bg-[#FE6F1F] hover:text-white hover:scale-105 active:scale-95"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-7 sm:w-8 bg-[#FE6F1F]"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            aria-label="Next Testimonial"
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:border-[#FE6F1F] hover:bg-[#FE6F1F] hover:text-white hover:scale-105 active:scale-95"
          >
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
