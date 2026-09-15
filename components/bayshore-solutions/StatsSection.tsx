"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export interface StatItemData {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
}

export interface StatsSectionProps {
  stats?: StatItemData[];
  mapImagePath?: string;
  taglineTitle?: string;
  taglineSubtitle?: string;
  taglineHighlight?: string;
  theme?: "light" | "dark";
}

export const DEFAULT_STATS: StatItemData[] = [
  { value: 5, prefix: "", suffix: "+", label: "Industries Served" },
  { value: 5, prefix: "", suffix: "K+", label: "Hours of Support Delivered" },
  { value: 3, prefix: "$", suffix: "M+", label: "Saved for Clients" },
  { value: 24, prefix: "", suffix: " HR", label: "Talent Replacement" },
];

/**
 * Animated Counter Component for smooth 0 -> target counting on scroll into view
 */
const AnimatedCounter: React.FC<{
  targetValue: number;
  duration?: number;
  inView: boolean;
}> = ({ targetValue, duration = 1600, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Ease-out quad formula for smooth decelerating counter motion
      const easedProgress = 1 - (1 - progress) * (1 - progress);
      const currentCount = Math.floor(easedProgress * targetValue);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(targetValue);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [inView, targetValue, duration]);

  return <span>{count}</span>;
};

export const StatsSection: React.FC<StatsSectionProps> = ({
  stats = DEFAULT_STATS,
  mapImagePath = "/assets/bayshore-solutions/home/world-map-banner.png",
  taglineTitle = "Global Talent",
  taglineSubtitle = "Local Impact.",
  taglineHighlight = "But for Your Business.",
  theme = "light",
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [imgError, setImgError] = useState(false);

  // IntersectionObserver to detect when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-10 sm:py-16 lg:py-20 w-full max-w-full overflow-hidden transition-colors duration-300 ${
        theme === "dark"
          ? "bg-[#07192C] text-white"
          : "bg-[#F7F7F7] text-[#0C1827]"
      }`}
    >
      <div className="container mx-auto max-w-[1650px] px-4 sm:px-6 md:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-10 items-center">
          {/* Left Column: 4 Animated Counter Metrics */}
          <div className="lg:col-span-7 xl:col-span-7 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-4 sm:gap-4 md:gap-6 lg:gap-5 xl:gap-8 items-start">
              {stats.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30, scale: 0.92 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1, type: "spring", stiffness: 100, damping: 14 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="flex flex-col items-start text-left w-full transition-transform duration-300"
                >
                  {/* Big Counter Value (Fixed height for exact horizontal baseline alignment across all columns) */}
                  <div
                    className={`h-[48px] sm:h-[52px] lg:h-[56px] xl:h-[62px] flex items-baseline justify-start text-3xl xs:text-4xl sm:text-4xl lg:text-[40px] xl:text-[48px] 2xl:text-[54px] font-bold tracking-tight leading-none mb-1.5 sm:mb-2 font-playfair ${
                      theme === "dark" ? "!text-white" : "!text-[#0C1827]"
                    }`}
                  >
                    {item.prefix && <span>{item.prefix}</span>}
                    <AnimatedCounter targetValue={item.value} inView={inView} />
                    {item.suffix && <span>{item.suffix}</span>}
                  </div>
                  {/* Metric Label */}
                  <span
                    className={`text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-base font-bold leading-snug max-w-[130px] xs:max-w-[150px] sm:max-w-[160px] xl:max-w-[180px] font-instrument ${
                      theme === "dark" ? "!text-slate-100" : "!text-[#556070]"
                    }`}
                  >
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: World Map Graphic + Brand Tagline (Mobile & Laptop Responsive) */}
          <motion.div
            initial={{ opacity: 0, x: 40, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.15, type: "spring", stiffness: 85, damping: 15 }}
            className="lg:col-span-5 xl:col-span-5 flex flex-col sm:flex-row lg:flex-row items-center justify-center lg:justify-end gap-5 sm:gap-6 lg:gap-4 xl:gap-8 pt-4 sm:pt-6 lg:pt-0"
          >
            {/* World Map Image Graphic */}
            <div className="relative w-full max-w-[260px] sm:w-[260px] md:w-[280px] lg:w-[240px] xl:w-[320px] 2xl:w-[380px] h-[120px] sm:h-[140px] lg:h-[130px] xl:h-[160px] shrink-0">
              {!imgError ? (
                <Image
                  src={mapImagePath}
                  alt="Global Talent Map"
                  fill
                  className="object-contain object-center sm:object-left lg:object-center"
                  onError={() => setImgError(true)}
                />
              ) : (
                /* Fallback SVG Dotted Map with Orange Glow Markers */
                <div className="w-full h-full relative flex items-center justify-center">
                  <svg
                    className={`w-full h-full ${theme === "dark" ? "opacity-90" : "opacity-75"}`}
                    viewBox="0 0 320 140"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Dotted grid map shape simulation */}
                    <pattern
                      id="stats-dots"
                      x="0"
                      y="0"
                      width="12"
                      height="12"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle cx="2" cy="2" r="1.4" fill={theme === "dark" ? "#CBD5E1" : "#334155"} opacity="0.45" />
                    </pattern>
                    <rect width="320" height="140" fill="url(#stats-dots)" />
                    {/* Glowing Orange Location Pins matching screenshot */}
                    <circle cx="70" cy="55" r="5" fill="#FF5500" className="animate-ping opacity-75" />
                    <circle cx="70" cy="55" r="3.5" fill="#FF5500" />
                    <circle cx="120" cy="45" r="3.5" fill="#FF5500" />
                    <circle cx="160" cy="65" r="3.5" fill="#FF5500" />
                    <circle cx="200" cy="40" r="3.5" fill="#FF5500" />
                    <circle cx="240" cy="85" r="4" fill="#FF5500" />
                    <circle cx="140" cy="90" r="3.5" fill="#FF5500" />
                  </svg>
                </div>
              )}
            </div>

            {/* Right Side Tagline Text */}
            <div className="flex flex-col gap-1 sm:gap-1.5 lg:gap-1 xl:gap-2 text-center sm:text-left shrink-0 font-playfair">
              <span
                className={`text-lg xs:text-xl sm:text-xl lg:text-lg xl:text-2xl 2xl:text-[26px] font-extrabold leading-snug ${
                  theme === "dark" ? "!text-white" : "!text-[#0C1827]"
                }`}
              >
                {taglineTitle}
              </span>
              <span
                className={`text-lg xs:text-xl sm:text-xl lg:text-lg xl:text-2xl 2xl:text-[26px] font-extrabold leading-snug ${
                  theme === "dark" ? "!text-white" : "!text-[#0C1827]"
                }`}
              >
                {taglineSubtitle}
              </span>
              <span
                className={`text-lg xs:text-xl sm:text-xl lg:text-lg xl:text-2xl 2xl:text-[26px] font-extrabold leading-snug ${
                  theme === "dark" ? "!text-white" : "!text-[#0C1827]"
                }`}
              >
                {taglineHighlight}
              </span>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
