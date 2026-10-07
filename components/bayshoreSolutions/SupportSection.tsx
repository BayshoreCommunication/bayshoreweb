'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Custom Orbital Network Graphic Component for "Custom Role"
function CustomRoleNetwork() {
    const avatars = [
        { bg: 'from-orange-400 to-amber-500', top: '10%', left: '26%' },
        { bg: 'from-orange-500 to-rose-500', top: '24%', left: '72%' },
        { bg: 'from-amber-500 to-orange-600', top: '48%', left: '90%' },
        { bg: 'from-red-400 to-orange-500', top: '78%', left: '76%' },
        { bg: 'from-orange-600 to-amber-600', top: '88%', left: '46%' },
        { bg: 'from-amber-400 to-orange-500', top: '70%', left: '16%' },
        { bg: 'from-orange-500 to-red-500', top: '42%', left: '4%' },
        { bg: 'from-orange-400 to-orange-600', top: '26%', left: '48%' },
    ];

    return (
        <div className="relative w-full max-w-[290px] h-[210px] mx-auto flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 290 210" fill="none">
                <ellipse cx="145" cy="115" rx="122" ry="76" stroke="#FE6F1F" strokeWidth="1.2" strokeDasharray="4 4" strokeOpacity="0.4" />
                <ellipse cx="145" cy="115" rx="82" ry="51" stroke="#FE6F1F" strokeWidth="1.2" strokeDasharray="4 4" strokeOpacity="0.5" />
                <ellipse cx="145" cy="115" rx="42" ry="26" stroke="#FE6F1F" strokeWidth="1.2" strokeDasharray="4 4" strokeOpacity="0.6" />
            </svg>

            <div className="relative z-20 w-10 h-10 rounded-full bg-white shadow-md border-2 border-[#FE6F1F] flex items-center justify-center text-[#FE6F1F] hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
            </div>

            {avatars.map((avatar, idx) => (
                <div
                    key={idx}
                    className="absolute z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full p-[2px] bg-gradient-to-tr from-[#FE6F1F] to-amber-400 shadow-sm flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
                    style={{ top: avatar.top, left: avatar.left }}
                >
                    <div className="w-full h-full rounded-full bg-white p-[1.5px] overflow-hidden flex items-center justify-center">
                        <div className={`w-full h-full rounded-full bg-gradient-to-br ${avatar.bg} flex items-center justify-center text-white`}>
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

const standardCards = [
    {
        title: 'Administrative Support',
        description: 'Inbox management, scheduling, data entry, research, and day-to-day business tasks.',
        colClass: 'lg:col-start-2 lg:row-start-1',
        widget: (
            <div className="bg-white rounded-[16px] p-3 shadow-[0_4px_16px_rgba(255,102,0,0.06)] border border-[#FFE8DC] flex flex-col gap-2.5 w-[130px] sm:w-[138px] shrink-0">
                {[
                    { label: 'AE', w1: 'w-10 sm:w-12', w2: 'w-6 sm:w-7' },
                    { label: 'OS', w1: 'w-12 sm:w-14', w2: 'w-7 sm:w-8' },
                    { label: 'LK', w1: 'w-9 sm:w-11', w2: 'w-7 sm:w-9' },
                ].map((row, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-[#FFE5D6] text-primary text-[9px] font-bold flex items-center justify-center shrink-0">
                            {row.label}
                        </span>
                        <div className="flex-1 space-y-1">
                            <div className={`h-1.5 bg-[#FFD4BE] rounded-full ${row.w1}`} />
                            <div className={`h-1 bg-[#FFE8DC] rounded-full ${row.w2}`} />
                        </div>
                        <div className="w-4 h-4 rounded-full bg-[#10B981] text-white flex items-center justify-center shrink-0">
                            <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
        ),
    },
    {
        title: 'Marketing Support',
        description: 'Email marketing, campaign assistance, content coordination, lead generation, and digital marketing support.',
        colClass: 'lg:col-start-3 lg:row-start-1',
        widget: (
            <div className="relative w-[130px] sm:w-[138px] shrink-0 flex items-center justify-between">
                <div className="bg-white rounded-[16px] p-2.5 shadow-[0_4px_16px_rgba(255,102,0,0.06)] border border-[#FFE8DC] w-[95px] sm:w-[102px] flex flex-col gap-1.5 shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <div className="w-full h-11 bg-[#FFF0E6] rounded-[8px] flex items-center justify-center overflow-hidden">
                        <svg className="w-6 h-6 text-[#FF8540]" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M4 19h16a1 1 0 001-1V6a1 1 0 00-1-1H4a1 1 0 00-1 1v12a1 1 0 001 1zm2-10a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-1 8l4.5-6 3.5 4.5 3-3.5 5 5H5z" />
                        </svg>
                    </div>
                    <div className="h-1 bg-[#FFD4BE] rounded-full w-3/4" />
                    <div className="h-1 bg-[#FFE8DC] rounded-full w-1/2" />
                    <div className="flex gap-1 pt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FFD4BE]" />
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FFE8DC]" />
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FFE8DC]" />
                    </div>
                </div>
                <div className="flex flex-col gap-2 shrink-0">
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
        ),
    },
    {
        title: 'Social Media Support',
        description: 'Content scheduling, community management, engagement, research, and general social media support.',
        colClass: 'lg:col-start-2 lg:row-start-2',
        widget: (
            <div className="bg-white rounded-[16px] p-3 shadow-[0_4px_16px_rgba(255,102,0,0.06)] border border-[#FFE8DC] flex flex-col gap-2.5 w-[130px] sm:w-[138px] shrink-0">
                {['w-14', 'w-12', 'w-10'].map((w, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full border-[1.5px] border-primary flex items-center justify-center text-primary shrink-0">
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <div className={`h-2 bg-[#FFD4BE] rounded-full ${w}`} />
                    </div>
                ))}
            </div>
        ),
    },
    {
        title: 'Accounting & Bookkeeping',
        description: 'Invoicing, expense tracking, reconciliations, bookkeeping support, and organized financial records.',
        colClass: 'lg:col-start-3 lg:row-start-2',
        widget: (
            <div className="flex flex-col gap-2.5 w-[130px] sm:w-[138px] shrink-0">
                <div className="bg-white rounded-[14px] p-2.5 shadow-[0_4px_16px_rgba(255,102,0,0.06)] border border-[#FFE8DC] flex items-center justify-between">
                    <div className="space-y-1.5 flex-1 pr-2">
                        <div className="h-1.5 bg-primary rounded-full w-10" />
                        <div className="h-1 bg-[#FFD4BE] rounded-full w-14" />
                        <div className="h-1 bg-[#FFE8DC] rounded-full w-11" />
                    </div>
                    <div className="w-7 h-7 rounded-full bg-primary text-white font-bold text-[12px] flex items-center justify-center shrink-0 shadow-sm">
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
        ),
    },
    {
        title: 'Data Entry & Research',
        description: 'Accurate data entry, web research, list building, database updates, and other repetitive tasks handled efficiently.',
        colClass: 'lg:col-start-1 lg:row-start-3',
        widget: (
            <div className="flex flex-col gap-2.5 w-[130px] sm:w-[138px] shrink-0">
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
        ),
    },
    {
        title: 'Development/IT',
        description: 'Full-stack, backend, front-end, vibe coders, and other IT roles.',
        colClass: 'lg:col-start-1 lg:row-start-4',
        widget: (
            <div className="flex flex-col gap-2.5 w-[130px] sm:w-[138px] shrink-0">
                <div className="bg-white rounded-[14px] p-2.5 shadow-[0_4px_16px_rgba(255,102,0,0.06)] border border-[#FFE8DC] flex items-center justify-between">
                    <div className="space-y-1.5 flex-1 pr-2">
                        <div className="h-1.5 bg-primary rounded-full w-10" />
                        <div className="h-1 bg-[#FFD4BE] rounded-full w-14" />
                        <div className="h-1 bg-[#FFE8DC] rounded-full w-11" />
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
        ),
    },
];

export function SupportSection() {
    return (
        <section className="w-full bg-white py-[60px] lg:py-[100px] overflow-hidden">
            <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Heading */}
                <div className="text-center mb-[45px] lg:mb-[65px]">
                    <h2
                        className="font-bold text-[#0B192C] tracking-tight"
                        style={{ fontSize: 'clamp(28px, 4vw, 46px)', lineHeight: '1.2' }}
                    >
                        Support for Every Part of Your Business
                    </h2>
                </div>

                {/* 3-Column Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px] lg:gap-[26px]">

                    {/* CARD 1: Legal Support */}
                    <div className="lg:col-start-1 lg:row-start-1 lg:row-span-2 md:col-span-2 lg:col-span-1 bg-gradient-to-br from-primary via-[#FE6F1F] to-[#E64A19] rounded-[28px] p-[24px] sm:p-[32px] pb-0 sm:pb-0 text-white flex flex-col justify-between relative overflow-hidden shadow-md group hover:shadow-xl transition-all duration-300 min-h-[460px] lg:min-h-0">
                        <div className="absolute inset-0 pointer-events-none opacity-25">
                            <svg className="w-full h-full" viewBox="0 0 350 450" preserveAspectRatio="none">
                                <path d="M-50,220 Q120,130 350,250 L350,450 L-50,450 Z" fill="#FFA570" />
                                <path d="M-50,310 Q160,210 350,330 L350,450 L-50,450 Z" fill="#FFC8A8" />
                            </svg>
                        </div>
                        <div className="relative z-10">
                            <h3 className="font-bold mb-[10px] tracking-tight text-[21px] sm:text-[23px] leading-[1.25]">
                                Legal Support
                            </h3>
                            <p className="text-white/95 leading-relaxed text-[13.5px] sm:text-[14px] max-w-[340px]">
                                Case management, client communication, document preparation, intake support, calendar management, and more.
                            </p>
                        </div>
                        <div className="relative w-full h-[270px] sm:h-[300px] mt-auto flex items-end justify-center z-10">
                            <Image
                                src="/assets/bayshoreSolutions/legal-support.png"
                                alt="Legal Support Specialist"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-contain object-bottom"
                                priority
                            />
                        </div>
                    </div>

                    {/* CARDS 2-7: Regular Cards (Responsive Horizontal Layout with Protected Widget Width) */}
                    {standardCards.map((card, idx) => (
                        <div
                            key={idx}
                            className={`md:col-span-1 bg-[#FFF9F6] border border-[#FFEDD5] rounded-[28px] p-[22px] sm:p-[26px] flex flex-col justify-center shadow-sm hover:shadow-md transition-all duration-300 group ${card.colClass}`}
                        >
                            <div className="flex flex-row items-center justify-between gap-3 sm:gap-4">
                                <div className="flex-1 min-w-0 pr-1">
                                    <h3 className="font-bold text-[#0B192C] mb-[6px] tracking-tight text-[19px] sm:text-[22px] leading-[1.25]">
                                        {card.title}
                                    </h3>
                                    <p className="text-[#475569] leading-relaxed text-[13px] sm:text-[13.5px] line-clamp-3">
                                        {card.description}
                                    </p>
                                </div>
                                {card.widget}
                            </div>
                        </div>
                    ))}

                    {/* CARD 8: Customer Support */}
                    <div className="lg:col-start-2 lg:row-start-3 lg:row-span-2 md:col-span-2 lg:col-span-1 bg-[#FFF9F6] border border-[#FFEDD5] rounded-[28px] p-[24px] sm:p-[32px] pb-0 sm:pb-0 flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 min-h-[460px] lg:min-h-0 group">


                        <div className="relative z-10">
                            <h3 className="font-bold text-[#0B192C] mb-[10px] tracking-tight text-[21px] sm:text-[23px] leading-[1.25]">
                                Customer Support
                            </h3>
                            <p className="text-[#475569] leading-relaxed text-[13.5px] sm:text-[14px] max-w-[340px]">
                                Email, chat, ticket handling, appointment coordination, and customer follow-up that keeps clients happy.
                            </p>
                        </div>
                        <div className="relative w-full h-[270px] sm:h-[300px] mt-auto flex items-end justify-center z-10">
                            <Image
                                src="/assets/bayshoreSolutions/customer-support.png"
                                alt="Customer Support Specialist"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-contain object-bottom"
                            />
                        </div>
                    </div>

                    {/* CARD 9: Custom Role */}
                    <div className="lg:col-start-3 lg:row-start-3 lg:row-span-2 md:col-span-2 lg:col-span-1 bg-[#FFF9F6] border border-[#FFEDD5] rounded-[28px] p-[24px] sm:p-[32px] flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 min-h-[460px] lg:min-h-0 group">
                        <div className="relative z-10">
                            <h3 className="font-bold text-[#0B192C] mb-[10px] tracking-tight text-[21px] sm:text-[23px] leading-[1.25]">
                                Custom Role
                            </h3>
                            <p className="text-[#475569] leading-relaxed text-[13.5px] sm:text-[14px] max-w-[340px]">
                                Need something specific? Tell us what you need, and we’ll help you find the right dedicated talent.
                            </p>
                        </div>

                        <div className="w-full mt-4 flex items-center justify-center z-10">
                            <CustomRoleNetwork />
                        </div>
                    </div>

                </div>

                {/* Bottom CTA Button */}
                <div className="flex justify-center mt-[50px] lg:mt-[70px]">
                    <Link
                        href="/find-talent"
                        className="inline-flex items-center justify-center gap-[6px] sm:gap-[10px] bg-[#0B192C] text-white rounded-[8px] px-[18px] sm:px-[26px] py-[11px] sm:py-[13px] text-[12px] sm:text-[13px] font-bold tracking-wide hover:bg-primary transition-all duration-300 shadow-sm hover:shadow-md group whitespace-nowrap"
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