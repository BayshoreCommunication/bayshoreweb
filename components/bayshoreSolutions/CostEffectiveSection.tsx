'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import { FiDollarSign, FiUsers, FiUser, FiTrendingUp, FiCheck, FiArrowRight } from 'react-icons/fi';

interface CostEffectiveSectionProps {
    onFindTalentForRoleClick?: () => void;
}

export default function CostEffectiveSection({ onFindTalentForRoleClick }: CostEffectiveSectionProps = {}) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <section ref={sectionRef} className="w-full bg-[#f9fafb] py-16 sm:py-20 lg:py-24 overflow-hidden">
            {/* Main Outer Container */}
            <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main Section Header */}
                <div className="text-center max-w-[950px] mx-auto mb-10 sm:mb-14">
                    <h2 className="font-bold text-[#0B192C] text-[30px] sm:text-[40px] lg:text-[46px] leading-[1.2] tracking-tight">
                        Why Bayshore Is the{' '}
                        <span className="text-[#FF5E1E]">Cost-Effective</span> Way to Hire
                    </h2>
                </div>

                {/* Light Blue Container wrapping the 3 Cards */}
                <div className="">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-6 items-stretch relative">

                        {/* =========================================================================
                            CARD 1: Bayshore VA (Dark Navy Blue Card)
                           ========================================================================= */}
                        <div className="bg-[#0B192C] text-white rounded-[24px] p-6 sm:p-8 flex flex-col justify-between shadow-xl relative z-10">
                            <div>
                                <h3 className="font-bold text-center text-[22px] sm:text-[26px] text-white mb-6 pb-4 border-b border-white/15 tracking-wide">
                                    Bayshore VA
                                </h3>

                                <div className="space-y-6">
                                    {/* Item 1: Hourly Rate */}
                                    <div className="flex items-center gap-4 pb-5 border-b border-white/10">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6B2B] to-[#FF4500] text-white flex items-center justify-center flex-shrink-0 shadow-md border border-orange-400/30">
                                            <FiDollarSign className="text-2xl" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[22px] sm:text-[26px] text-white leading-tight">
                                                {isInView ? (
                                                    <CountUp start={0} end={3} duration={2} prefix="$" suffix=" / hour" />
                                                ) : (
                                                    '$0 / hour'
                                                )}
                                            </h4>
                                            <p className="text-white/70 text-[13px] sm:text-[14px] font-medium mt-0.5">
                                                Affordable &amp; Predictable
                                            </p>
                                        </div>
                                    </div>

                                    {/* Item 2: No Benefits */}
                                    <div className="flex items-center gap-4 pb-5 border-b border-white/10">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6B2B] to-[#FF4500] text-white flex items-center justify-center flex-shrink-0 shadow-md border border-orange-400/30">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                                                <rect x="3" y="5" width="18" height="14" rx="2" />
                                                <line x1="3" y1="10" x2="21" y2="10" />
                                                <line x1="3" y1="3" x2="21" y2="21" strokeWidth="2.5" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[20px] sm:text-[22px] text-white leading-tight">
                                                No Benefits
                                            </h4>
                                            <p className="text-white/70 text-[13px] sm:text-[14px] font-medium mt-0.5">
                                                You Don&apos;t Pay Extra
                                            </p>
                                        </div>
                                    </div>

                                    {/* Item 3: No Overhead */}
                                    <div className="flex items-center gap-4 pb-5 border-b border-white/10">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6B2B] to-[#FF4500] text-white flex items-center justify-center flex-shrink-0 shadow-md border border-orange-400/30">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[20px] sm:text-[22px] text-white leading-tight">
                                                No Overhead
                                            </h4>
                                            <p className="text-white/70 text-[13px] sm:text-[14px] font-medium mt-0.5">
                                                No Equipment, No Office Costs
                                            </p>
                                        </div>
                                    </div>

                                    {/* Item 4: Skilled Support */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6B2B] to-[#FF4500] text-white flex items-center justify-center flex-shrink-0 shadow-md border border-orange-400/30">
                                            <FiUsers className="text-2xl" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[20px] sm:text-[22px] text-white leading-tight">
                                                Skilled Support
                                            </h4>
                                            <p className="text-white/70 text-[13px] sm:text-[14px] font-medium mt-0.5">
                                                On-Demand, Scalable
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* =========================================================================
                            VS BADGE (Positioned between Bayshore VA and Full-Time Hire)
                           ========================================================================= */}
                        <div className="hidden lg:flex absolute left-[33.333%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                            <div className="w-16 h-16 rounded-full bg-[#FF5E1E] text-white font-bold text-xl flex items-center justify-center shadow-lg border-2 border-white tracking-wider">
                                VS
                            </div>
                        </div>
                        <div className="flex lg:hidden my-[-10px] mx-auto z-20 relative">
                            <div className="w-10 h-10 rounded-full bg-[#FF5E1E] text-white font-extrabold text-xs flex items-center justify-center shadow-lg border-2 border-white tracking-wider">
                                VS
                            </div>
                        </div>


                        {/* =========================================================================
                            CARD 2: Full-Time Hire (White Card)
                           ========================================================================= */}
                        <div className="bg-white text-[#0B192C] rounded-[24px] p-6 sm:p-8 flex flex-col justify-between shadow-sm border border-gray-100 relative z-10">
                            <div>
                                <h3 className="font-bold text-center text-[22px] sm:text-[26px] text-[#0B192C] mb-6 pb-4 border-b border-gray-100 tracking-wide">
                                    Full-Time Hire
                                </h3>

                                <div className="space-y-6">
                                    {/* Item 1: Annual Salary */}
                                    <div className="flex items-center gap-4 pb-5 border-b border-gray-100">
                                        <div className="w-12 h-12 rounded-full border-2 border-[#FF5E1E] bg-[#FFF5F0] text-[#FF5E1E] flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[20px] sm:text-[24px] text-[#0B192C] leading-tight">
                                                {isInView ? (
                                                    <>
                                                        <CountUp start={0} end={45000} duration={2} separator="," prefix="$" />
                                                        {' - '}
                                                        <CountUp start={0} end={60000} duration={2} separator="," prefix="$" />
                                                    </>
                                                ) : (
                                                    '$0 - $0'
                                                )}
                                            </h4>
                                            <p className="text-gray-400 font-medium text-[13px] sm:text-[14px] mt-0.5">
                                                Annual Salary
                                            </p>
                                        </div>
                                    </div>

                                    {/* Item 2: Benefits */}
                                    <div className="flex items-center gap-4 pb-5 border-b border-gray-100">
                                        <div className="w-12 h-12 rounded-full border-2 border-[#FF5E1E] bg-[#FFF5F0] text-[#FF5E1E] flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[20px] sm:text-[24px] text-[#0B192C] leading-tight">
                                                {isInView ? (
                                                    <CountUp start={0} end={10000} duration={2} separator="," prefix="$" suffix="+" />
                                                ) : (
                                                    '$0+'
                                                )}
                                            </h4>
                                            <p className="text-gray-400 font-medium text-[13px] sm:text-[14px] mt-0.5">
                                                Benefits (Health, PTO, etc.)
                                            </p>
                                        </div>
                                    </div>

                                    {/* Item 3: Equipment & Software */}
                                    <div className="flex items-center gap-4 pb-5 border-b border-gray-100">
                                        <div className="w-12 h-12 rounded-full border-2 border-[#FF5E1E] bg-[#FFF5F0] text-[#FF5E1E] flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[20px] sm:text-[24px] text-[#0B192C] leading-tight">
                                                {isInView ? (
                                                    <CountUp start={0} end={5000} duration={2} separator="," prefix="$" suffix="+" />
                                                ) : (
                                                    '$0+'
                                                )}
                                            </h4>
                                            <p className="text-gray-400 font-medium text-[13px] sm:text-[14px] mt-0.5">
                                                Equipment &amp; Software
                                            </p>
                                        </div>
                                    </div>

                                    {/* Item 4: Office Space & Overhead */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full border-2 border-[#FF5E1E] bg-[#FFF5F0] text-[#FF5E1E] flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[20px] sm:text-[24px] text-[#0B192C] leading-tight">
                                                {isInView ? (
                                                    <CountUp start={0} end={5000} duration={2} separator="," prefix="$" suffix="+" />
                                                ) : (
                                                    '$0+'
                                                )}
                                            </h4>
                                            <p className="text-gray-400 font-medium text-[13px] sm:text-[14px] mt-0.5">
                                                Office Space &amp; Overhead
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* =========================================================================
                            CARD 3: Animated Graph & Summary Box Card
                           ========================================================================= */}
                        <div className="flex flex-col justify-between gap-5 relative z-10">

                            {/* Top Box: Animated Graph */}
                            <div className="bg-white rounded-[24px] p-5 sm:p-6 shadow-sm border border-gray-100 flex-1 flex flex-col justify-between relative overflow-hidden min-h-[290px]">

                                {/* Graph SVG Container */}
                                <div className="relative w-full h-full min-h-[220px] flex items-center justify-center">

                                    {/* SVG Lines and Axes */}
                                    <svg className="w-full h-full min-h-[220px] overflow-visible" viewBox="0 0 380 230" preserveAspectRatio="none">
                                        <defs>
                                            <marker id="arrow-navy" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                                                <path d="M 0 0 L 10 5 L 0 10 z" fill="#0B192C" />
                                            </marker>
                                            <marker id="arrow-navy-x" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                                                <path d="M 0 0 L 10 5 L 0 10 z" fill="#0B192C" />
                                            </marker>
                                        </defs>

                                        {/* Y Axis Label */}
                                        <text x="10" y="20" className="text-[11px] font-bold fill-[#0B192C]">Annual</text>
                                        <text x="10" y="33" className="text-[11px] font-bold fill-[#0B192C]">Salary</text>
                                        <text x="10" y="46" className="text-[10px] font-semibold fill-gray-400">(USD)</text>

                                        {/* X Axis Label */}
                                        <text x="360" y="222" textAnchor="end" className="text-[11px] font-bold fill-[#0B192C]">Experience / Growth</text>

                                        {/* Y Axis Line */}
                                        <line x1="50" y1="195" x2="50" y2="25" stroke="#0B192C" strokeWidth="2" markerEnd="url(#arrow-navy)" />

                                        {/* X Axis Line */}
                                        <line x1="50" y1="195" x2="360" y2="195" stroke="#0B192C" strokeWidth="2" markerEnd="url(#arrow-navy-x)" />

                                        {/* Line 1: Full-Time Hire Line (Dark Navy - Steep Slope) */}
                                        <motion.path
                                            d="M 50 195 L 240 55"
                                            stroke="#0B192C"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            initial={{ pathLength: 0 }}
                                            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                                            transition={{ duration: 1.8, ease: "easeInOut" }}
                                        />

                                        {/* Line 2: Bayshore VA Line (Bright Orange - Low Slope) */}
                                        <motion.path
                                            d="M 50 195 L 240 145"
                                            stroke="#FF5E1E"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            initial={{ pathLength: 0 }}
                                            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                                            transition={{ duration: 1.8, ease: "easeInOut" }}
                                        />

                                        {/* Origin Dot (Orange) */}
                                        <circle cx="50" cy="195" r="5" fill="#FF5E1E" />

                                        {/* Top Navy Line End Dot */}
                                        <motion.circle
                                            cx="240"
                                            cy="55"
                                            r="5"
                                            fill="#0B192C"
                                            initial={{ scale: 0 }}
                                            animate={isInView ? { scale: 1 } : { scale: 0 }}
                                            transition={{ delay: 1.5, duration: 0.3 }}
                                        />

                                        {/* Lower Orange Line End Dot */}
                                        <motion.circle
                                            cx="240"
                                            cy="145"
                                            r="5"
                                            fill="#FF5E1E"
                                            initial={{ scale: 0 }}
                                            animate={isInView ? { scale: 1 } : { scale: 0 }}
                                            transition={{ delay: 1.5, duration: 0.3 }}
                                        />

                                        {/* Dashed connector line to Full-Time Hire Badge */}
                                        <motion.line
                                            x1="240" y1="55" x2="262" y2="55"
                                            stroke="#0B192C"
                                            strokeWidth="1.5"
                                            strokeDasharray="3 3"
                                            initial={{ opacity: 0 }}
                                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                            transition={{ delay: 1.6 }}
                                        />

                                        {/* Dashed connector line to Bayshore VA Badge */}
                                        <motion.line
                                            x1="240" y1="145" x2="262" y2="145"
                                            stroke="#FF5E1E"
                                            strokeWidth="1.5"
                                            strokeDasharray="3 3"
                                            initial={{ opacity: 0 }}
                                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                            transition={{ delay: 1.6 }}
                                        />
                                    </svg>

                                    {/* Graph Overlay Badges */}
                                    {/* Badge 1: Full-Time Hire Tag */}
                                    <motion.div
                                        className="absolute right-1 sm:right-2 top-[8%] sm:top-[12%] bg-white border border-gray-200 rounded-xl px-2.5 sm:px-3 py-1.5 shadow-md flex items-center gap-2 z-10"
                                        initial={{ opacity: 0, x: 15 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 15 }}
                                        transition={{ delay: 1.6, duration: 0.4 }}
                                    >
                                        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#0B192C] text-white flex items-center justify-center flex-shrink-0">
                                            <FiUsers className="text-xs sm:text-sm" />
                                        </div>
                                        <div>
                                            <span className="block text-[10px] sm:text-[11px] font-bold text-gray-500 leading-none">
                                                Full-Time Hire
                                            </span>
                                            <span className="block text-[12px] sm:text-[13px] font-extrabold text-[#0B192C] leading-tight mt-0.5">
                                                ({isInView ? <CountUp start={0} end={55000} duration={2} separator="," prefix="$" suffix="+" /> : '$0+'})
                                            </span>
                                        </div>
                                    </motion.div>

                                    {/* Badge 2: Bayshore VA Tag */}
                                    <motion.div
                                        className="absolute right-1 sm:right-2 top-[52%] sm:top-[54%] bg-[#FFF3EC] border border-[#FFD5C2] rounded-xl px-2.5 sm:px-3 py-1.5 shadow-sm flex items-center gap-2 z-10"
                                        initial={{ opacity: 0, x: 15 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 15 }}
                                        transition={{ delay: 1.6, duration: 0.4 }}
                                    >
                                        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#FF5E1E] text-white flex items-center justify-center flex-shrink-0">
                                            <FiUser className="text-xs sm:text-sm" />
                                        </div>
                                        <div>
                                            <span className="block text-[10px] sm:text-[11px] font-bold text-[#FF5E1E] leading-none">
                                                Bayshore VA
                                            </span>
                                            <span className="block text-[12px] sm:text-[13px] font-extrabold text-[#FF5E1E] leading-tight mt-0.5">
                                                ({isInView ? <CountUp start={0} end={6000} duration={2} separator="," prefix="$" suffix="+" /> : '$0+'})
                                            </span>
                                        </div>
                                    </motion.div>

                                </div>
                            </div>


                            {/* Bottom Box: Summary Callout Card */}
                            <div className="bg-[#FFF3EC] border border-[#FFE2D1] rounded-[20px] p-4 sm:p-5 flex items-center gap-4 shadow-sm">
                                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FF5E1E] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                                    <FiTrendingUp className="text-2xl" />
                                </div>
                                <div>
                                    <h4 className="font-extrabold text-[16px] sm:text-[18px] text-[#0B192C] leading-snug">
                                        Same Results. Lower Cost.
                                    </h4>
                                    <p className="text-[#475569] text-[12.5px] sm:text-[13.5px] leading-relaxed mt-0.5">
                                        Get the skills, support and performance you need — without the high costs of a full-time hire.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                {/* Call-to-Action (CTA) Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 lg:p-14 overflow-hidden transition-all duration-300 bg-white border border-slate-200/80 text-[#0C1827] shadow-xl shadow-slate-200/40 mt-12 sm:mt-16 lg:mt-20"
                >
                    {/* Dotted World Map Background Overlay with Orange Hotspot Glows */}
                    <div className="absolute inset-4 sm:inset-8 md:inset-10 lg:inset-12 pointer-events-none flex items-center justify-center opacity-40 z-0">
                        <div className="relative w-full h-full max-w-[1000px] max-h-[360px]">
                            <Image
                                src="/assets/bayshore-solutions/home/world-map-banner.png"
                                alt="World Map Background"
                                fill
                                className="object-contain object-center scale-95 sm:scale-90"
                            />
                            {/* Orange Hotspot Glow Nodes */}
                            <div className="absolute top-[38%] left-[28%] w-3 h-3 bg-[#FE6F1F] rounded-full shadow-[0_0_12px_#FE6F1F] animate-pulse" />
                            <div className="absolute top-[48%] left-[45%] w-2.5 h-2.5 bg-[#FE6F1F] rounded-full shadow-[0_0_10px_#FE6F1F] animate-pulse" />
                            <div className="absolute top-[40%] left-[58%] w-3 h-3 bg-[#FE6F1F] rounded-full shadow-[0_0_12px_#FE6F1F] animate-pulse" />
                            <div className="absolute top-[65%] left-[72%] w-3 h-3 bg-[#FE6F1F] rounded-full shadow-[0_0_12px_#FE6F1F] animate-pulse" />
                        </div>
                    </div>

                    {/* Main Content Layout Grid */}
                    <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-12">
                        {/* Left Info Column */}
                        <div className="max-w-2xl xl:max-w-3xl flex-1">
                            {/* <span className="inline-block text-[12px] md:text-[14px] font-extrabold uppercase tracking-[0.22em] mb-4 text-[#556070]">
                                BUILD A STRONGER TEAM
                            </span> */}

                            <h3 className="text-[28px] md:text-[46px] font-bold tracking-tight leading-tight my-4 pb-2 lg:whitespace-nowrap text-[#0C1827]">
                                Starting at <span className="text-[#FE6F1F]">$3/hour.</span>
                            </h3>

                            <p
                                style={{ lineHeight: 1.55 }}
                                className="text-[14px] md:text-[16px] font-normal mb-8 text-left text-[#475569] max-w-xl"
                            >
                                See how businesses are using Bayshore virtual talent to support their teams, handle day-to-day work, and grow without the overhead of traditional hiring.
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                type="button"
                                onClick={onFindTalentForRoleClick}
                                className="group inline-flex items-center justify-center gap-3 bg-[#0B192C] hover:bg-[#FE6F1F] text-white rounded-full px-7 sm:px-9 py-3.5 sm:py-4 text-[15px] sm:text-[16px] font-bold transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer shrink-0"
                            >
                                <span>Get Started Today</span>
                                <FiArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </motion.button>
                        </div>

                        {/* Right Floating Cards Column */}
                        <div className="flex flex-col gap-4 sm:gap-5 shrink-0 w-full sm:w-auto self-center lg:self-auto">
                            {/* Top Floating Card */}
                            <motion.div
                                whileHover={{ scale: 1.03, y: -3 }}
                                className="rounded-2xl p-6 sm:p-7 shadow-md sm:w-[300px] border border-slate-100 bg-white text-[#0C1827] transition-all"
                            >
                                <h4 className="text-xl sm:text-2xl font-extrabold leading-snug tracking-tight">
                                    Great Teams <br />
                                    Build Greater <br />
                                    Business
                                </h4>
                            </motion.div>

                            {/* Bottom Floating Card */}
                            <motion.div
                                whileHover={{ scale: 1.03, y: -3 }}
                                className="rounded-2xl p-6 sm:p-7 shadow-md sm:w-[300px] border border-slate-100 bg-white text-[#0C1827] transition-all"
                            >
                                <ul className="flex flex-col gap-3">
                                    {[
                                        "Global talent",
                                        "Real support",
                                        "Lower costs",
                                        "Higher productivity",
                                        "A stronger business",
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <span className="text-[#FE6F1F] font-bold text-lg flex-shrink-0">
                                                <FiCheck className="stroke-[3]" />
                                            </span>
                                            <span className="text-[14px] sm:text-[15px] font-semibold text-[#0C1827]">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
