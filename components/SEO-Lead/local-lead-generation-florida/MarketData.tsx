"use client";

import React from "react";
import { Calendar, Sun, CloudRain, ShieldAlert, Award } from "lucide-react";

// =============================================================================
// SEASONALITY AND DEMAND CYCLES DATA FROM GOOGLE DOC (100% UNCHANGED)
// =============================================================================
const SEASONAL_CYCLES = [
  {
    period: "January to April",
    demandPattern: "Snowbird peak in Southwest Florida and Palm Beach County",
    campaignMove: "Lift budgets for real estate, estate law and dental in those markets",
    icon: Sun,
  },
  {
    period: "March to April",
    demandPattern: "Spring break and Easter travel fill Central Florida and the beaches",
    campaignMove: "Add accident and injury coverage around Orlando and Panama City Beach",
    icon: Calendar,
  },
  {
    period: "June to August",
    demandPattern: "Summer heat and family vacations",
    campaignMove: "Promote same day home service offers and vacation area injury coverage",
    icon: Sun,
  },
  {
    period: "June to November",
    demandPattern: "Hurricane season, with the peak in late summer and early fall",
    campaignMove: "Prepare storm copy, cover claims and repair searches, adjust ads in evacuation zones",
    icon: CloudRain,
  },
  {
    period: "November to December",
    demandPattern: "Year end insurance and budget deadlines",
    campaignMove: "Push dental benefit and year end service offers",
    icon: Award,
  },
];

export default function MarketData() {
  return (
    <section className="relative w-full bg-white py-14 sm:py-20 lg:py-28 border-t border-[#EEF2F6]/80 overflow-hidden">
      <div className="mx-auto max-w-[1580px] px-16 sm:px-8 md:px-10 lg:px-12 xl:px-16">

        {/* Section Header */}
        <div className="mb-10 sm:mb-12 max-w-[900px]">
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">VII.</span> DEMAND CYCLES
            </span>
          </div>

          <h2 className="font-playfair mt-4 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0A192F]">
            Seasonality and Local Demand Cycles
          </h2>

          <div className="mt-5 space-y-4 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.72] text-[#4A5568] max-w-[840px]">
            <p className="font-instrument">
              Florida demand follows weather, visitors and calendars, so flat monthly budgets waste money. Hurricane season runs June 1 through November 30 and storms reshape searches within hours. Snowbird season fills Naples, Sarasota and Palm Beach from October through April.
            </p>
            <p className="font-instrument">
              Post storm days reward the business already holding a live, updated Google Business Profile. We update hours, closures and service notices there first, then adjust ads. Ad schedules follow your best converting hours, since evenings and weekends perform differently by market. Offers rotate with the calendar, from winter arrivals to summer heat and year end deadlines.
            </p>
          </div>
        </div>

        {/* Demand Cycles Table / Cards */}
        <div className="overflow-hidden rounded-[20px] sm:rounded-[24px] border border-[#E5E9F2] bg-white shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
          {/* Table Header (Desktop) */}
          <div className="hidden md:grid md:grid-cols-12 bg-[#0A192F] text-white px-6 py-4 font-mono text-[12px] font-bold tracking-[0.12em] uppercase">
            <div className="col-span-3">PERIOD</div>
            <div className="col-span-4">DEMAND PATTERN</div>
            <div className="col-span-5">CAMPAIGN MOVE</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-[#EEF2F6]">
            {SEASONAL_CYCLES.map((cycle, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 p-6 sm:p-7 gap-4 md:gap-0 items-start md:items-center hover:bg-[#FFFBF9] transition-colors duration-200"
              >
                {/* Period */}
                <div className="md:col-span-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF2ED] text-[#FF5528]">
                    <cycle.icon size={20} />
                  </div>
                  <span className="font-playfair text-[17px] sm:text-[18px] font-bold text-[#0A192F]">
                    {cycle.period}
                  </span>
                </div>

                {/* Demand pattern */}
                <div className="md:col-span-4 pr-4">
                  <span className="md:hidden font-mono text-[11px] font-semibold text-[#FF5528] uppercase block mb-1">
                    Demand Pattern
                  </span>
                  <p className="font-instrument text-[14.5px] sm:text-[15px] text-[#4A5568] leading-relaxed">
                    {cycle.demandPattern}
                  </p>
                </div>

                {/* Campaign move */}
                <div className="md:col-span-5">
                  <span className="md:hidden font-mono text-[11px] font-semibold text-[#FF5528] uppercase block mb-1">
                    Campaign Move
                  </span>
                  <p className="font-instrument text-[14.5px] sm:text-[15px] font-medium text-[#0A192F] leading-relaxed">
                    {cycle.campaignMove}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
