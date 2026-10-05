'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function SupportSection() {
    return (
        <section className="w-full bg-white py-[60px] lg:py-[100px] overflow-hidden">
            {/* Main Container with max-w-[1380px] and px-6 sm:px-8 */}
            <div className="max-w-[1380px] mx-auto px-6 sm:px-8">

                {/* Section Heading */}
                <div className="text-center mb-[45px] lg:mb-[65px]">
                    <h2 className="font-extrabold text-[#0B192C] tracking-tight" style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: '1.2' }}>
                        Support for Every Part of Your Business
                    </h2>
                </div>

                {/* 
                  3-Column Bento Grid Layout matching the reference image exactly:
                  - Desktop (lg): 3 columns x 4 rows
                    Col 1: Legal Support (row 1-2), Data Entry (row 3), Development/IT (row 4)
                    Col 2: Administrative (row 1), Social Media (row 2), Customer Support (row 3-4)
                    Col 3: Marketing (row 1), Accounting (row 2), Custom Role (row 3-4)
                  - Tablet (md): 2 columns with featured cards spanning full width
                  - Mobile: 1 column clean vertical stack
                */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px] lg:gap-[26px]">

                    {/* =========================================================================
                        CARD 1: Legal Support (Featured Orange Gradient Card - Top Left)
                        lg: Col 1, Row 1-2 (row-span-2)
                       ========================================================================= */}
                    <div className="lg:col-start-1 lg:row-start-1 lg:row-span-2 md:col-span-2 lg:col-span-1 bg-gradient-to-br from-primary via-[#FE6F1F] to-[#E64A19] rounded-[28px] p-[30px] sm:p-[36px] text-white flex flex-col justify-between relative overflow-hidden shadow-md group hover:shadow-xl transition-all duration-300 min-h-[460px] lg:min-h-0">
                        {/* Subtle background contour waves */}
                        <div className="absolute inset-0 pointer-events-none opacity-25">
                            <svg className="w-full h-full" viewBox="0 0 350 450" preserveAspectRatio="none">
                                <path d="M-50,220 Q120,130 350,250 L350,450 L-50,450 Z" fill="#FFA570" />
                                <path d="M-50,310 Q160,210 350,330 L350,450 L-50,450 Z" fill="#FFC8A8" />
                            </svg>
                        </div>

                        {/* Top Content */}
                        <div className="relative z-10">
                            <h3 className="font-extrabold mb-[12px] tracking-tight" style={{ fontSize: 'clamp(26px, 3vw, 32px)', lineHeight: '1.2' }}>
                                Legal Support
                            </h3>
                            <p className="text-white/95 leading-relaxed max-w-[340px]" style={{ fontSize: '14.5px' }}>
                                Case management, client communication, document preparation, intake support, calendar management, and more.
                            </p>
                        </div>

                        {/* Bottom Image: Smiling professional woman in black blazer */}
                        <div className="relative w-full h-[240px] sm:h-[270px] mt-4 flex items-end justify-center z-10">
                            <Image
                                src="/assets/bayshoreSolutions/legal-support.png"
                                alt="Legal Support Specialist"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-contain object-bottom transform group-hover:scale-[1.02] transition-transform duration-300"
                                priority
                            />
                        </div>
                    </div>

                    {/* =========================================================================
                        CARD 2: Administrative Support (Top Center)
                        lg: Col 2, Row 1
                       ========================================================================= */}
                    <div className="lg:col-start-2 lg:row-start-1 md:col-span-1 bg-[#FFF9F6] border border-[#FFEDD5] rounded-[28px] p-[26px] sm:p-[28px] flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 group">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex-1 pr-2">
                                <h3 className="font-bold text-[#0B192C] mb-[8px]" style={{ fontSize: '18px' }}>
                                    Administrative Support
                                </h3>
                                <p className="text-[#475569]" style={{ fontSize: '13.5px', lineHeight: '1.55' }}>
                                    Inbox management, scheduling, data entry, research, and day-to-day business tasks.
                                </p>
                            </div>

                            {/* UI Widget: Checklist with AE, OS, LK pill badges & green checkmarks */}
                            <div className="bg-white rounded-[18px] p-3 shadow-[0_4px_16px_rgba(255,102,0,0.06)] border border-[#FFE8DC] flex flex-col gap-2.5 w-[130px] flex-shrink-0 self-center sm:self-auto">
                                {[
                                    { label: 'AE', w1: 'w-12', w2: 'w-7' },
                                    { label: 'OS', w1: 'w-14', w2: 'w-8' },
                                    { label: 'LK', w1: 'w-11', w2: 'w-9' },
                                ].map((row, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <span className="w-5 h-5 rounded-full bg-[#FFE5D6] text-primary text-[9px] font-bold flex items-center justify-center flex-shrink-0">
                                            {row.label}
                                        </span>
                                        <div className="flex-1 space-y-1">
                                            <div className={`h-1.5 bg-[#FFD4BE] rounded-full ${row.w1}`}></div>
                                            <div className={`h-1 bg-[#FFE8DC] rounded-full ${row.w2}`}></div>
                                        </div>
                                        <div className="w-4 h-4 rounded-full bg-[#10B981] text-white flex items-center justify-center flex-shrink-0">
                                            <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* =========================================================================
                        CARD 3: Marketing Support (Top Right)
                        lg: Col 3, Row 1
                       ========================================================================= */}
                    <div className="lg:col-start-3 lg:row-start-1 md:col-span-1 bg-[#FFF9F6] border border-[#FFEDD5] rounded-[28px] p-[26px] sm:p-[28px] flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 group">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex-1 pr-2">
                                <h3 className="font-bold text-[#0B192C] mb-[8px]" style={{ fontSize: '18px' }}>
                                    Marketing Support
                                </h3>
                                <p className="text-[#475569]" style={{ fontSize: '13.5px', lineHeight: '1.55' }}>
                                    Email marketing, campaign assistance, content coordination, lead generation, and digital marketing support.
                                </p>
                            </div>

                            {/* UI Widget: Social post preview with floating reaction badges */}
                            <div className="relative w-[130px] flex items-center justify-between flex-shrink-0 self-center sm:self-auto">
                                <div className="bg-white rounded-[16px] p-2.5 shadow-[0_4px_16px_rgba(255,102,0,0.06)] border border-[#FFE8DC] w-[95px] flex flex-col gap-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                    <div className="w-full h-11 bg-[#FFF0E6] rounded-[8px] flex items-center justify-center overflow-hidden">
                                        <svg className="w-6 h-6 text-[#FF8540]" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M4 19h16a1 1 0 001-1V6a1 1 0 00-1-1H4a1 1 0 00-1 1v12a1 1 0 001 1zm2-10a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-1 8l4.5-6 3.5 4.5 3-3.5 5 5H5z" />
                                        </svg>
                                    </div>
                                    <div className="h-1 bg-[#FFD4BE] rounded-full w-3/4"></div>
                                    <div className="h-1 bg-[#FFE8DC] rounded-full w-1/2"></div>
                                    <div className="flex gap-1 pt-0.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#FFD4BE]"></div>
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#FFE8DC]"></div>
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#FFE8DC]"></div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="w-6 h-6 rounded-[8px] bg-primary text-white flex items-center justify-center shadow-md">
                                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                        </svg>
                                    </div>
                                    <div className="w-6 h-6 rounded-[8px] bg-primary text-white flex items-center justify-center shadow-md">
                                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* =========================================================================
                        CARD 4: Social Media Support (Middle Center)
                        lg: Col 2, Row 2
                       ========================================================================= */}
                    <div className="lg:col-start-2 lg:row-start-2 md:col-span-1 bg-[#FFF9F6] border border-[#FFEDD5] rounded-[28px] p-[26px] sm:p-[28px] flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 group">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex-1 pr-2">
                                <h3 className="font-bold text-[#0B192C] mb-[8px]" style={{ fontSize: '18px' }}>
                                    Social Media Support
                                </h3>
                                <p className="text-[#475569]" style={{ fontSize: '13.5px', lineHeight: '1.55' }}>
                                    Content scheduling, community management, engagement, research, and general social media support.
                                </p>
                            </div>

                            {/* UI Widget: Checklist with orange checkmarks */}
                            <div className="bg-white rounded-[18px] p-3.5 shadow-[0_4px_16px_rgba(255,102,0,0.06)] border border-[#FFE8DC] flex flex-col gap-2.5 w-[130px] flex-shrink-0 self-center sm:self-auto">
                                {[
                                    { w: 'w-14' },
                                    { w: 'w-12' },
                                    { w: 'w-10' },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <div className="w-5 h-5 rounded-full border-[1.5px] border-primary flex items-center justify-center text-primary flex-shrink-0">
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div className={`h-2 bg-[#FFD4BE] rounded-full ${item.w}`}></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* =========================================================================
                        CARD 5: Accounting & Bookkeeping (Middle Right)
                        lg: Col 3, Row 2
                       ========================================================================= */}
                    <div className="lg:col-start-3 lg:row-start-2 md:col-span-1 bg-[#FFF9F6] border border-[#FFEDD5] rounded-[28px] p-[26px] sm:p-[28px] flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 group">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex-1 pr-2">
                                <h3 className="font-bold text-[#0B192C] mb-[8px]" style={{ fontSize: '18px' }}>
                                    Accounting & Bookkeeping
                                </h3>
                                <p className="text-[#475569]" style={{ fontSize: '13.5px', lineHeight: '1.55' }}>
                                    Invoicing, expense tracking, reconciliations, bookkeeping support, and organized financial records.
                                </p>
                            </div>

                            {/* UI Widget: Invoice sheet with $ circle & 3 orange icons */}
                            <div className="flex flex-col gap-2.5 w-[130px] flex-shrink-0 self-center sm:self-auto">
                                <div className="bg-white rounded-[14px] p-2.5 shadow-[0_4px_16px_rgba(255,102,0,0.06)] border border-[#FFE8DC] flex items-center justify-between">
                                    <div className="space-y-1.5 flex-1 pr-2">
                                        <div className="h-1.5 bg-primary rounded-full w-10"></div>
                                        <div className="h-1 bg-[#FFD4BE] rounded-full w-14"></div>
                                        <div className="h-1 bg-[#FFE8DC] rounded-full w-11"></div>
                                    </div>
                                    <div className="w-7 h-7 rounded-full bg-primary text-white font-bold text-[12px] flex items-center justify-center flex-shrink-0 shadow-sm">
                                        $
                                    </div>
                                </div>
                                <div className="flex items-center justify-around px-1 text-primary">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 2.07c3.61.45 6.48 3.33 6.93 6.93H13V4.07zM4 12c0-4.07 3.06-7.43 7-7.93v15.86c-3.94-.5-7-3.86-7-7.93zm9 7.93V13h6.93c-.45 3.61-3.32 6.48-6.93 6.93z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* =========================================================================
                        CARD 6: Data Entry & Research (Bottom Left - Row 3)
                        lg: Col 1, Row 3
                       ========================================================================= */}
                    <div className="lg:col-start-1 lg:row-start-3 md:col-span-1 bg-[#FFF9F6] border border-[#FFEDD5] rounded-[28px] p-[26px] sm:p-[28px] flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 group">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex-1 pr-2">
                                <h3 className="font-bold text-[#0B192C] mb-[8px]" style={{ fontSize: '18px' }}>
                                    Data Entry & Research
                                </h3>
                                <p className="text-[#475569]" style={{ fontSize: '13.5px', lineHeight: '1.55' }}>
                                    Accurate data entry, web research, list building, database updates, and other repetitive tasks handled efficiently.
                                </p>
                            </div>

                            {/* UI Widget: Orange line chart with dots & 3 icons */}
                            <div className="flex flex-col gap-2.5 w-[130px] flex-shrink-0 self-center sm:self-auto">
                                <div className="h-8 flex items-center justify-center">
                                    <svg className="w-full h-7 overflow-visible" viewBox="0 0 100 28">
                                        <path d="M 5 20 L 22 10 L 40 16 L 60 4 L 80 12 L 95 6" fill="none" stroke="#FE6F1F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <circle cx="5" cy="20" r="2.5" fill="#FE6F1F" />
                                        <circle cx="22" cy="10" r="2.5" fill="#FE6F1F" />
                                        <circle cx="40" cy="16" r="2.5" fill="#FE6F1F" />
                                        <circle cx="60" cy="4" r="2.5" fill="#FE6F1F" />
                                        <circle cx="80" cy="12" r="2.5" fill="#FE6F1F" />
                                        <circle cx="95" cy="6" r="2.5" fill="#FE6F1F" />
                                    </svg>
                                </div>
                                <div className="flex items-center justify-around px-1 text-primary">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <ellipse cx="12" cy="5" rx="9" ry="3" />
                                        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                                        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                                    </svg>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* =========================================================================
                        CARD 7: Development/IT (Bottom Left - Row 4)
                        lg: Col 1, Row 4
                       ========================================================================= */}
                    <div className="lg:col-start-1 lg:row-start-4 md:col-span-1 bg-[#FFF9F6] border border-[#FFEDD5] rounded-[28px] p-[26px] sm:p-[28px] flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 group">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex-1 pr-2">
                                <h3 className="font-bold text-[#0B192C] mb-[8px]" style={{ fontSize: '18px' }}>
                                    Development/IT
                                </h3>
                                <p className="text-[#475569]" style={{ fontSize: '13.5px', lineHeight: '1.55' }}>
                                    Full-stack, backend, front-end, vibe coders, and other IT roles.
                                </p>
                            </div>

                            {/* UI Widget: Code lines with </> badge & 3 icons */}
                            <div className="flex flex-col gap-2.5 w-[130px] flex-shrink-0 self-center sm:self-auto">
                                <div className="bg-white rounded-[14px] p-2.5 shadow-[0_4px_16px_rgba(255,102,0,0.06)] border border-[#FFE8DC] flex items-center justify-between">
                                    <div className="space-y-1.5 flex-1 pr-2">
                                        <div className="h-1.5 bg-primary rounded-full w-10"></div>
                                        <div className="h-1 bg-[#FFD4BE] rounded-full w-14"></div>
                                        <div className="h-1 bg-[#FFE8DC] rounded-full w-11"></div>
                                    </div>
                                    <div className="px-1.5 py-0.5 rounded-[6px] bg-primary text-white font-mono font-bold text-[10px] flex items-center justify-center shadow-sm">
                                        &lt;/&gt;
                                    </div>
                                </div>
                                <div className="flex items-center justify-around px-1 text-primary">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <ellipse cx="12" cy="5" rx="9" ry="3" />
                                        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                                        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                                    </svg>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* =========================================================================
                        CARD 8: Customer Support (Featured Card with Man - Center Bottom)
                        lg: Col 2, Row 3-4 (row-span-2)
                       ========================================================================= */}
                    <div className="lg:col-start-2 lg:row-start-3 lg:row-span-2 md:col-span-2 lg:col-span-1 bg-[#FFF9F6] border border-[#FFEDD5] rounded-[28px] p-[30px] sm:p-[36px] flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 min-h-[460px] lg:min-h-0 group">
                        {/* Concentric subtle circular arcs in background */}
                        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                            <div className="w-[360px] h-[360px] rounded-full border border-primary/20 translate-y-28"></div>
                            <div className="w-[270px] h-[270px] rounded-full border border-primary/25 translate-y-28"></div>
                        </div>

                        {/* Top Content */}
                        <div className="relative z-10">
                            <h3 className="font-extrabold text-[#0B192C] mb-[10px] tracking-tight" style={{ fontSize: 'clamp(24px, 2.5vw, 28px)', lineHeight: '1.2' }}>
                                Customer Support
                            </h3>
                            <p className="text-[#475569] leading-relaxed max-w-[340px]" style={{ fontSize: '14.5px' }}>
                                Email, chat, ticket handling, appointment coordination, and customer follow-up that keeps clients happy.
                            </p>
                        </div>

                        {/* Bottom Image: Smiling professional man in black shirt with arms crossed */}
                        <div className="relative w-full h-[240px] sm:h-[270px] mt-4 flex items-end justify-center z-10">
                            <Image
                                src="/assets/bayshoreSolutions/customer-support.png"
                                alt="Customer Support Specialist"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-contain object-bottom transform group-hover:scale-[1.02] transition-transform duration-300"
                            />
                        </div>
                    </div>

                    {/* =========================================================================
                        CARD 9: Custom Role (Featured Card with Orbits - Right Bottom)
                        lg: Col 3, Row 3-4 (row-span-2)
                       ========================================================================= */}
                    <div className="lg:col-start-3 lg:row-start-3 lg:row-span-2 md:col-span-2 lg:col-span-1 bg-[#FFF9F6] border border-[#FFEDD5] rounded-[28px] p-[30px] sm:p-[36px] flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 min-h-[460px] lg:min-h-0 group">
                        {/* Top Content */}
                        <div className="relative z-10">
                            <h3 className="font-extrabold text-[#0B192C] mb-[10px] tracking-tight" style={{ fontSize: 'clamp(24px, 2.5vw, 28px)', lineHeight: '1.2' }}>
                                Custom Role
                            </h3>
                            <p className="text-[#475569] leading-relaxed max-w-[340px]" style={{ fontSize: '14.5px' }}>
                                Need something specific? Tell us what you need, and we’ll help you find the right dedicated talent.
                            </p>
                        </div>

                        {/* Bottom Graphic: Concentric orbital network with avatars and center + button */}
                        <div className="relative w-full h-[230px] sm:h-[260px] mt-4 flex items-center justify-center z-10">
                            <Image
                                src="/assets/bayshoreSolutions/custom-role.png"
                                alt="Custom Role Dedicated Talent Network"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-contain object-center transform group-hover:scale-[1.02] transition-transform duration-300"
                            />
                        </div>
                    </div>

                </div>

                {/* Bottom Call to Action Button */}
                <div className="flex justify-center mt-[50px] lg:mt-[70px]">
                    <Link
                        href="/find-talent"
                        className="inline-flex items-center justify-center gap-[6px] sm:gap-[10px] bg-[#0B192C] text-white rounded-full px-[14px] xs:px-[18px] sm:px-[26px] py-[10px] sm:py-[13px] text-[11px] xs:text-[12px] sm:text-[13px] font-bold tracking-wide hover:bg-primary transition-all duration-300 shadow-sm hover:shadow-md group whitespace-nowrap"
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
        </section>
    );
}

export default SupportSection;