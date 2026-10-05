'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden pt-[60px] pb-[50px] lg:pt-[80px] lg:pb-[70px]">

      {/* Background Image / Cityscape with Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <Image
          src="/assets/bayshoreSolutions/hero-section.png"
          alt="Hero Background"
          fill
          className="object-cover object-bottom"
          priority
        />
      </div>

      {/* Main Container with max-w-[1380px] and px-8 */}
      <div className="max-w-[1380px] mx-auto px-8 relative z-10 flex flex-col items-center">

        {/* Center Header Content */}
        <div className="text-center max-w-[750px] mx-auto mb-[40px] lg:mb-[50px]">
          <h1 className="font-extrabold text-[#0B192C] tracking-tight mb-[14px]" style={{ fontSize: '44px', lineHeight: '1.15' }}>
            Build Your Team with Global Talent <br />
            <span className="text-[#FF5500]">Starting at $3 Per Hour</span>
          </h1>
          <p className="text-[#475569] max-w-[580px] mx-auto mb-[28px]" style={{ fontSize: '15px', lineHeight: '1.6' }}>
            Hire dedicated, English-speaking professionals from Asia for up to 75% less than the cost of U.S. employees.
          </p>
          <Link
            href="/find-talent"
            className="inline-flex items-center justify-center gap-[10px] bg-[#0B192C] text-white rounded-[30px] px-[32px] py-[14px] hover:bg-[#FF5500] transition-colors shadow-md group"
            style={{ fontSize: '15px', fontWeight: '600' }}
          >
            <span>FIND YOUR TALENT</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Main Content Layout (Team Image + Floating Info Cards) */}
        <div className="relative w-full max-w-[1240px] flex flex-col items-center justify-center">

          {/* Top Floating Mini Icon Card (Left Side above team) */}
          <div className="hidden lg:flex absolute left-[60px] top-[20px] bg-white border border-gray-100 rounded-[14px] p-[14px] shadow-lg items-center justify-center z-20">
            <div className="w-[32px] h-[32px] rounded-[8px] bg-orange-50 text-[#FF5500] flex items-center justify-center">
              <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
          </div>

          {/* Top Floating Mini Icon Card (Right Side above team) */}
          <div className="hidden lg:flex absolute right-[60px] top-[40px] bg-white border border-gray-100 rounded-[14px] p-[14px] shadow-lg items-center justify-center z-20">
            <div className="w-[32px] h-[32px] rounded-[8px] bg-orange-50 text-[#FF5500] flex items-center justify-center">
              <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>

          {/* Floating Card: 600 Clients (Left Upper) */}
          <div className="hidden md:block absolute left-0 top-[100px] lg:left-[40px] lg:top-[120px] bg-white border border-gray-100 rounded-[18px] p-[18px] shadow-xl w-[210px] z-20">
            <div className="flex items-center justify-between mb-2">
              <div className="flex -space-x-2">
                <div className="w-[28px] h-[28px] rounded-full bg-slate-300 border-2 border-white"></div>
                <div className="w-[28px] h-[28px] rounded-full bg-slate-400 border-2 border-white"></div>
                <div className="w-[28px] h-[28px] rounded-full bg-slate-500 border-2 border-white"></div>
              </div>
              <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-bold" style={{ fontSize: '12px' }}>+</span>
            </div>
            <div className="font-extrabold text-[#0B192C] flex items-center gap-1.5" style={{ fontSize: '24px' }}>
              600 <span className="w-[10px] h-[10px] bg-green-500 rounded-full inline-block"></span>
            </div>
            <div className="text-[#64748B]" style={{ fontSize: '13px' }}>Clients for 5 years.</div>
          </div>

          {/* Floating Card: 75% Lower cost (Left Lower) */}
          <div className="hidden md:block absolute left-0 top-[260px] lg:left-[40px] lg:top-[300px] bg-white border border-gray-100 rounded-[18px] p-[18px] shadow-xl w-[210px] z-20">
            <div className="font-extrabold text-[#0B192C] mb-1" style={{ fontSize: '26px' }}>75%</div>
            <div className="text-[#475569]" style={{ fontSize: '13px', lineHeight: '1.4' }}>
              Lower cost than U.S. employees.
            </div>
          </div>

          {/* Floating Card: Global Talent (Right Upper) */}
          <div className="hidden md:block absolute right-0 top-[100px] lg:right-[40px] lg:top-[120px] bg-white border border-gray-100 rounded-[18px] p-[18px] shadow-xl w-[210px] z-20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#FF5500] text-lg">🌐</span>
              <div className="flex -space-x-2">
                <div className="w-[28px] h-[28px] rounded-full bg-slate-300 border-2 border-white"></div>
                <div className="w-[28px] h-[28px] rounded-full bg-slate-400 border-2 border-white"></div>
                <div className="w-[28px] h-[28px] rounded-full bg-slate-500 border-2 border-white"></div>
              </div>
            </div>
            <div className="font-bold text-[#0B192C]" style={{ fontSize: '14px' }}>Global Talent</div>
            <div className="text-[#64748B]" style={{ fontSize: '12px' }}>from Asia</div>
          </div>

          {/* Floating Card: 48 Hours (Right Lower) */}
          <div className="hidden md:block absolute right-0 top-[260px] lg:right-[40px] lg:top-[300px] bg-white border border-gray-100 rounded-[18px] p-[18px] shadow-xl w-[210px] z-20">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-[28px] h-[28px] rounded-full bg-[#0B192C] text-white flex items-center justify-center">
                <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="font-bold text-[#0B192C]" style={{ fontSize: '15px' }}>48 Hours</span>
            </div>
            <div className="text-[#475569]" style={{ fontSize: '12px', lineHeight: '1.4' }}>
              Interview before you hire.
            </div>
          </div>

          {/* Center Team Working Image */}
          <div className="relative w-full max-w-[650px] h-[340px] sm:h-[420px] mx-auto z-10">
            <Image
              src="/assets/bayshoreSolutions/hero-section.png"
              alt="Team collaborating on laptop"
              fill
              className="object-contain object-bottom"
            />
          </div>

        </div>

      </div>
    </section>
  );
}