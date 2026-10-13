"use client";

import React from "react";
import { Users, Building2, MapPin, Search, Calendar, Scale } from "lucide-react";

const STATS = [
  {
    icon: Users,
    value: "20,000+",
    label: "Naples population over 20,000",
  },
  {
    icon: Building2,
    value: "~0.42M",
    label: "Collier County population roughly 0.42 million",
  },
  {
    icon: MapPin,
    value: "1.5M",
    label: "Southwest Florida regional market spans 3 MSAs with 1.5 million people",
  },
  {
    icon: Search,
    value: "1,000–3,000+",
    label: "Estimated 1,000 to 3,000+ monthly Google searches",
  },
];

export default function NaplesMarketOverview() {
  return (
    <section className="relative w-full bg-white py-14 sm:py-20 lg:py-28 border-t border-[#EEF2F6]/90 overflow-hidden">
      <div className="mx-auto max-w-[1580px] px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="max-w-[920px] mb-12 sm:mb-16">
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">VII.</span> MARKET OVERVIEW
            </span>
          </div>

          <h2 className="font-playfair mt-4 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0A192F]">
            Naples Legal Market At A Glance.
          </h2>

          <p className="font-instrument mt-4 text-[16px] sm:text-[18px] md:text-[19px] leading-[1.68] text-[#556377] font-medium">
            Naples anchors Collier County and shares regional clients with Fort Myers and Bonita Springs.
          </p>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 mb-12 sm:mb-16">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-[22px] border border-[#E2E8F0] bg-[#F8FAFC] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5528]/40 hover:bg-white hover:shadow-[0_12px_32px_rgba(15,23,42,0.06)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF2ED] text-[#FF5528] mb-5 group-hover:scale-105 transition-transform">
                  <Icon size={22} />
                </div>
                <div className="font-inter text-[30px] sm:text-[34px] font-bold text-[#0A192F] tracking-tight leading-none mb-3">
                  {stat.value}
                </div>
                <p className="font-instrument text-[14.5px] sm:text-[15px] text-[#4A5568] leading-snug">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Contextual Narrative Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="rounded-[24px] border border-[#E2E8F0] bg-white p-8 sm:p-9 shadow-[0_4px_24px_rgba(15,23,42,0.03)] hover:border-[#FF5528]/30 transition-colors">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF2ED] text-[#FF5528]">
                <Calendar size={20} />
              </div>
              <h3 className="font-playfair text-[20px] sm:text-[22px] font-bold text-[#0A192F]">
                Seasonal Population Dynamics
              </h3>
            </div>
            <p className="font-instrument text-[15px] sm:text-[16px] leading-[1.75] text-[#4A5568]">
              Winter brings part time residents searching for estate planning, elder law and real estate counsel. Summer traffic tilts toward year round residents and their everyday legal needs. Seasonal population swings shape search volume, so we shift campaign budgets between winter and summer. An estate planning firm might raise bids in January and lower them in July.
            </p>
          </div>

          <div className="rounded-[24px] border border-[#E2E8F0] bg-white p-8 sm:p-9 shadow-[0_4px_24px_rgba(15,23,42,0.03)] hover:border-[#FF5528]/30 transition-colors">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF2ED] text-[#FF5528]">
                <Scale size={20} />
              </div>
              <h3 className="font-playfair text-[20px] sm:text-[22px] font-bold text-[#0A192F]">
                Practice Area Competition
              </h3>
            </div>
            <p className="font-instrument text-[15px] sm:text-[16px] leading-[1.75] text-[#4A5568]">
              Competition also varies by practice area. Personal injury keywords cost more per click than probate keywords in most markets. Our keyword research shows where your budget buys the most consultations.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
