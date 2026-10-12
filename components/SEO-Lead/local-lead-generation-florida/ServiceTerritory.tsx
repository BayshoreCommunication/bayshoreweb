"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  BarChart3,
  Users,
  Briefcase,
  Landmark,
} from "lucide-react";

/**
 * =============================================================================
 * BACKGROUND & MAP IMAGE PATHS
 * Uses /public/assets/seo-lead/florida-map-state.png (centered Florida state map)
 * or user-provided /public/assets/seo-lead/florida-map.png
 * =============================================================================
 */
export const FLORIDA_MAP_IMAGE_PATH = "/assets/seo-lead/florida-map-state.png";

// =============================================================================
// CITIES & REGIONS DATA
// Exact coordinates locked to the Florida state outline & radar circle centers
// =============================================================================
interface CityData {
  id: string;
  name: string;
  regionLabel: string;
  subtitle: string;
  demand: "High" | "Very High" | "Moderate-High";
  competition: "High" | "Intense" | "Moderate" | "Moderate-High" | "Focused";
  pinX: number; // Percentage within 924x843 Florida container
  pinY: number; // Percentage within 924x843 Florida container
  cardPlacement: "left" | "right";
  image: string;
}

const CITIES: CityData[] = [
  {
    id: "tampa-bay",
    name: "Tampa Bay",
    regionLabel: "Tampa Bay",
    subtitle: "PI & workers' comp density",
    demand: "High",
    competition: "High",
    pinX: 49.3,
    pinY: 40.4,
    cardPlacement: "left",
    image: "/assets/seo-lead/city-tampa.jpg",
  },
  {
    id: "central-fl",
    name: "Orlando",
    regionLabel: "Central FL",
    subtitle: "High tourism & transport claims",
    demand: "High",
    competition: "Moderate-High",
    pinX: 69.7,
    pinY: 46.7,
    cardPlacement: "left",
    image: "/assets/seo-lead/city-orlando.jpg",
  },
  {
    id: "south-florida",
    name: "Miami / Ft. Lauderdale",
    regionLabel: "South Florida",
    subtitle: "#1 highest litigation volume in FL",
    demand: "Very High",
    competition: "Intense",
    pinX: 71.2,
    pinY: 80.8,
    cardPlacement: "left",
    image: "/assets/seo-lead/city-miami.jpg",
  },
  {
    id: "north-fl",
    name: "Jacksonville",
    regionLabel: "North FL",
    subtitle: "Largest geographic metro in Florida",
    demand: "High",
    competition: "Moderate",
    pinX: 64.6,
    pinY: 21.3,
    cardPlacement: "left",
    image: "/assets/seo-lead/city-jacksonville.jpg",
  },
  {
    id: "southwest-fl",
    name: "Naples / Ft. Myers",
    regionLabel: "Southwest FL",
    subtitle: "High net worth & estate planning hub",
    demand: "High",
    competition: "Moderate",
    pinX: 58.6,
    pinY: 65.9,
    cardPlacement: "left",
    image: "/assets/seo-lead/city-naples.jpg",
  },
  {
    id: "panhandle",
    name: "Tallahassee",
    regionLabel: "Panhandle",
    subtitle: "Capital & appellate litigation center",
    demand: "Moderate-High",
    competition: "Focused",
    pinX: 26.5,
    pinY: 16.2,
    cardPlacement: "right",
    image: "/assets/seo-lead/city-tallahassee.jpg",
  },
];

export default function ServiceTerritory({
  bgImage = FLORIDA_MAP_IMAGE_PATH,
}: {
  bgImage?: string;
}) {
  const [selectedCityId, setSelectedCityId] = useState<string>("tampa-bay");

  const activeCity =
    CITIES.find((city) => city.id === selectedCityId) || CITIES[0];

  // Helper for desktop floating card positioning
  const getDesktopCardPosition = (city: CityData): React.CSSProperties => {
    switch (city.id) {
      case "tampa-bay":
        return {
          right: `calc(${100 - city.pinX}% + 20px)`,
          top: `${city.pinY}%`,
          transform: "translateY(-50%)",
        };
      case "central-fl":
        return {
          right: `calc(${100 - city.pinX}% + 20px)`,
          top: `${city.pinY}%`,
          transform: "translateY(-50%)",
        };
      case "south-florida":
        return {
          right: `calc(${100 - city.pinX}% + 20px)`,
          top: "70%",
          transform: "translateY(-50%)",
        };
      case "north-fl":
        return {
          right: `calc(${100 - city.pinX}% + 20px)`,
          top: `${city.pinY}%`,
          transform: "translateY(-50%)",
        };
      case "southwest-fl":
        return {
          right: `calc(${100 - city.pinX}% + 20px)`,
          top: `${city.pinY}%`,
          transform: "translateY(-50%)",
        };
      case "panhandle":
        return {
          left: `calc(${city.pinX}% + 115px)`,
          top: `${city.pinY}%`,
          transform: "translateY(-50%)",
        };
      default:
        return {
          right: `calc(${100 - city.pinX}% + 20px)`,
          top: `${city.pinY}%`,
          transform: "translateY(-50%)",
        };
    }
  };

  return (
    <section className="relative w-full min-h-[720px] lg:min-h-[800px] bg-[#FBFBFC] py-14 sm:py-18 lg:py-24 border-t border-[#EEF2F6]/80 overflow-hidden flex items-center">
      
      {/* =========================================================================
          CONTENT WRAPPER
          ========================================================================= */}
      <div className="mx-auto max-w-[1580px] w-full px-16 sm:px-8 md:px-10 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* ===================================================================
              LEFT COLUMN: HEADLINE, COPY, 6 BUTTONS & STATS (ON DESKTOP)
              =================================================================== */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center">
            
            {/* Section Tag (Maintains serial: VII. SERVICE TERRITORY) */}
            <div className="inline-flex items-center">
              <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
                <span className="font-playfair italic mr-1">VII.</span> SERVICE TERRITORY
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-playfair mt-5 text-[30px] sm:text-[38px] md:text-[44px] lg:text-[48px] xl:text-[52px] font-bold leading-[1.14] tracking-[-0.02em] text-[#0A192F]">
              We generate leads across
              <br className="hidden sm:inline" />{" "}
              every region of Florida
              <span className="text-[#FF5528]">.</span>
            </h2>

            {/* Paragraph Text */}
            <p className="font-instrument mt-4 sm:mt-5 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.7] text-[#556377] max-w-[500px]">
              Search behavior, competition, and case value vary by region.
              We localize campaigns by metro and county — not just by state —
              so your budget goes further and reaches the right clients where
              your firm actually practices.
            </p>

            {/* Region Filter Buttons (6 Buttons in 2 Rows) */}
            <div className="mt-7 sm:mt-8 flex flex-wrap gap-2 sm:gap-2.5 max-w-[520px]">
              {CITIES.map((city) => {
                const isSelected = city.id === selectedCityId;
                return (
                  <button
                    key={city.id}
                    onClick={() => setSelectedCityId(city.id)}
                    type="button"
                    className={`inline-flex items-center gap-1.5 rounded-[8px] px-3.5 sm:px-4.5 py-2 sm:py-2.5 text-[13px] sm:text-[13.5px] font-semibold transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-[#FF5528] text-white shadow-[0_4px_14px_rgba(255,85,40,0.28)] scale-[1.02]"
                        : "bg-white border border-[#E2E8F0] text-[#0A192F] hover:border-[#FF5528]/50 hover:text-[#FF5528] shadow-2xs"
                    }`}
                  >
                    {isSelected && <MapPin size={13} className="shrink-0 text-white" />}
                    <span>{city.regionLabel}</span>
                  </button>
                );
              })}
            </div>

            {/* ===============================================================
                MOBILE-ONLY: ACTIVE CITY DETAILS CARD (SHOWN RIGHT UNDER BUTTONS)
                Shows full details when any button or map pin is clicked
                =============================================================== */}
            <div className="lg:hidden mt-6 w-full rounded-[18px] bg-white p-4 sm:p-5 shadow-[0_12px_36px_rgba(15,23,42,0.10)] border border-[#E5E9F2] transition-all duration-300">
              <div className="flex items-center gap-3.5 sm:gap-4">
                
                {/* Photo Thumbnail */}
                <div className="relative h-20 w-20 sm:h-22 sm:w-22 shrink-0 overflow-hidden rounded-[12px] bg-[#F1F5F9] border border-[#E2E8F0]">
                  <Image
                    src={activeCity.image}
                    alt={`${activeCity.name} skyline`}
                    fill
                    className="object-cover object-center"
                    sizes="88px"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-playfair text-[18px] sm:text-[19px] font-bold text-[#0A192F] leading-tight truncate">
                      {activeCity.name}
                    </h3>
                    <span className="shrink-0 px-2 py-0.5 rounded-full bg-[#FFF2ED] text-[#FF5528] font-mono text-[10.5px] font-bold uppercase tracking-wider">
                      {activeCity.regionLabel}
                    </span>
                  </div>
                  <p className="font-instrument text-[12px] text-[#64748B] mt-0.5 truncate">
                    {activeCity.subtitle}
                  </p>

                  {/* Demand & Competition Metrics */}
                  <div className="mt-2.5 pt-2 border-t border-[#EEF2F6] grid grid-cols-2 gap-2 text-[11.5px] sm:text-[12px]">
                    <div className="flex items-center gap-1.5 text-[#64748B]">
                      <BarChart3 size={13} className="text-[#FF5528] shrink-0" />
                      <span>Demand:</span>
                      <strong className="text-[#FF5528] font-semibold">{activeCity.demand}</strong>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#64748B]">
                      <Users size={13} className="text-[#FF5528] shrink-0" />
                      <span>Comp:</span>
                      <strong className="text-[#FF5528] font-semibold">{activeCity.competition}</strong>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* 3 Mini Stats Row (Desktop View) */}
            <div className="hidden lg:flex mt-8 xl:mt-10 pt-6 border-t border-[#EEF2F6]/90 flex-wrap items-center gap-6 sm:gap-8 lg:gap-10">
              
              {/* Stat 1: 23M+ */}
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFF2ED] text-[#FF5528]">
                  <Users size={20} strokeWidth={2.2} />
                </div>
                <div>
                  <h4 className="font-inter text-[20px] sm:text-[22px] font-bold text-[#0A192F] leading-none">
                    23M+
                  </h4>
                  <p className="font-instrument text-[12px] sm:text-[13px] text-[#64748B] mt-1">
                    Statewide Population
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-8 w-[1px] bg-[#E2E8F0]" />

              {/* Stat 2: 80K+ */}
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFF2ED] text-[#FF5528]">
                  <Briefcase size={20} strokeWidth={2.2} />
                </div>
                <div>
                  <h4 className="font-inter text-[20px] sm:text-[22px] font-bold text-[#0A192F] leading-none">
                    80K+
                  </h4>
                  <p className="font-instrument text-[12px] sm:text-[13px] text-[#64748B] mt-1">
                    Active Attorneys
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-8 w-[1px] bg-[#E2E8F0]" />

              {/* Stat 3: 67 */}
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFF2ED] text-[#FF5528]">
                  <Landmark size={20} strokeWidth={2.2} />
                </div>
                <div>
                  <h4 className="font-inter text-[20px] sm:text-[22px] font-bold text-[#0A192F] leading-none">
                    67
                  </h4>
                  <p className="font-instrument text-[12px] sm:text-[13px] text-[#64748B] mt-1">
                    Counties Statewide
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* ===================================================================
              RIGHT COLUMN: INTERACTIVE FLORIDA MAP & PINS + FLOATING DETAILS CARD
              =================================================================== */}
          <div className="lg:col-span-7 xl:col-span-7 relative w-full flex items-center justify-center">
            
            {/* Map Frame Container: 924x843 aspect ratio locked to Florida map state */}
            <div className="relative w-full aspect-[924/843] max-w-[720px] rounded-[22px] bg-white/70 lg:bg-transparent border border-[#E2E8F0] lg:border-transparent p-2 sm:p-4 lg:p-0 shadow-sm lg:shadow-none overflow-hidden select-none">

              {/* Florida State Map Layer */}
              <div className="absolute inset-0 pointer-events-none select-none z-0">
                <Image
                  src={bgImage}
                  alt="Florida Legal Market Territory Map"
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              {/* -------------------------------------------------------------
                  6 CITY PINS ON FLORIDA MAP
                  ------------------------------------------------------------- */}
              {CITIES.map((city) => {
                const isSelected = city.id === selectedCityId;

                return (
                  <div
                    key={city.id}
                    className="absolute z-20"
                    style={{
                      left: `${city.pinX}%`,
                      top: `${city.pinY}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <button
                      onClick={() => setSelectedCityId(city.id)}
                      type="button"
                      className="group flex items-center gap-1.5 sm:gap-2 focus:outline-none cursor-pointer py-1 px-1 -m-1"
                    >
                      {/* Orange Dot with white ring & pulse on active */}
                      <div className="relative flex items-center justify-center">
                        {isSelected && (
                          <span className="absolute h-4 sm:h-5 w-4 sm:w-5 rounded-full bg-[#FF5528]/35 animate-ping" />
                        )}
                        <div
                          className={`w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-full bg-[#FF5528] ring-2 sm:ring-3 ring-white shadow-md transition-transform duration-300 ${
                            isSelected ? "scale-125 ring-3 sm:ring-4" : "group-hover:scale-115"
                          }`}
                        />
                      </div>

                      {/* City Name Label Pill */}
                      <span
                        className={`rounded-[6px] px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10.5px] sm:text-[12px] font-semibold whitespace-nowrap shadow-xs border transition-all duration-200 ${
                          isSelected
                            ? "bg-[#0A192F] border-[#0A192F] text-white shadow-md scale-105"
                            : "bg-white/95 border-[#E2E8F0] text-[#0A192F] group-hover:border-[#FF5528] group-hover:text-[#FF5528]"
                        }`}
                      >
                        {city.name}
                      </span>
                    </button>
                  </div>
                );
              })}

              {/* -------------------------------------------------------------
                  DESKTOP FLOATING DETAILS CARD (1:1 WITH USER DESIGN IMAGE)
                  Positioned with pointer notch touching the active pin
                  ------------------------------------------------------------- */}
              <div
                className="hidden lg:block absolute z-30 transition-all duration-400 ease-out"
                style={getDesktopCardPosition(activeCity)}
              >
                <div className="relative w-[315px] xl:w-[335px] rounded-[18px] bg-white p-4 xl:p-4.5 shadow-[0_22px_50px_rgba(15,23,42,0.16)] border border-[#E5E9F2]">
                  
                  {/* Triangular Pointer Notch touching the pin */}
                  {activeCity.cardPlacement === "left" ? (
                    <div
                      className="absolute -right-[7px] top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white border-t border-r border-[#E5E9F2] rotate-45 pointer-events-none"
                      aria-hidden="true"
                    />
                  ) : (
                    <div
                      className="absolute -left-[7px] top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white border-b border-l border-[#E5E9F2] rotate-45 pointer-events-none"
                      aria-hidden="true"
                    />
                  )}

                  <div className="flex items-center gap-3.5 xl:gap-4">
                    
                    {/* Left: City Photo Thumbnail */}
                    <div className="relative h-20 w-20 xl:h-22 xl:w-22 shrink-0 overflow-hidden rounded-[12px] bg-[#F1F5F9] border border-[#E2E8F0]/70">
                      <Image
                        src={activeCity.image}
                        alt={`${activeCity.name} skyline`}
                        fill
                        className="object-cover object-center"
                        sizes="88px"
                      />
                    </div>

                    {/* Right: City Name, Subtitle & Demand/Competition */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-playfair text-[18px] xl:text-[19px] font-bold text-[#0A192F] leading-tight truncate">
                        {activeCity.name}
                      </h3>
                      <p className="font-instrument text-[11.5px] xl:text-[12px] text-[#64748B] mt-0.5 truncate">
                        {activeCity.subtitle}
                      </p>

                      {/* Demand & Competition Rows */}
                      <div className="mt-2.5 pt-2 border-t border-[#EEF2F6] flex flex-col gap-1.5">
                        {/* Demand */}
                        <div className="flex items-center justify-between text-[11.5px] xl:text-[12px]">
                          <div className="flex items-center gap-1.5 text-[#64748B]">
                            <BarChart3 size={13} className="text-[#FF5528]" />
                            <span>Demand</span>
                          </div>
                          <span className="font-semibold text-[#FF5528]">
                            {activeCity.demand}
                          </span>
                        </div>

                        {/* Competition */}
                        <div className="flex items-center justify-between text-[11.5px] xl:text-[12px]">
                          <div className="flex items-center gap-1.5 text-[#64748B]">
                            <Users size={13} className="text-[#FF5528]" />
                            <span>Competition</span>
                          </div>
                          <span className="font-semibold text-[#FF5528]">
                            {activeCity.competition}
                          </span>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* ===================================================================
              MOBILE-ONLY: 3 STATS SECTION (BELOW THE MAP)
              =================================================================== */}
          <div className="lg:hidden col-span-1 pt-6 border-t border-[#EEF2F6] grid grid-cols-3 gap-3 sm:gap-4">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center text-center p-3 rounded-[12px] bg-white border border-[#E2E8F0]/80 shadow-2xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF2ED] text-[#FF5528] mb-2">
                <Users size={17} strokeWidth={2.2} />
              </div>
              <h4 className="font-inter text-[18px] sm:text-[20px] font-bold text-[#0A192F] leading-none">
                23M+
              </h4>
              <p className="font-instrument text-[11px] sm:text-[12px] text-[#64748B] mt-1 line-clamp-1">
                Population
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center text-center p-3 rounded-[12px] bg-white border border-[#E2E8F0]/80 shadow-2xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF2ED] text-[#FF5528] mb-2">
                <Briefcase size={17} strokeWidth={2.2} />
              </div>
              <h4 className="font-inter text-[18px] sm:text-[20px] font-bold text-[#0A192F] leading-none">
                80K+
              </h4>
              <p className="font-instrument text-[11px] sm:text-[12px] text-[#64748B] mt-1 line-clamp-1">
                Attorneys
              </p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center text-center p-3 rounded-[12px] bg-white border border-[#E2E8F0]/80 shadow-2xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF2ED] text-[#FF5528] mb-2">
                <Landmark size={17} strokeWidth={2.2} />
              </div>
              <h4 className="font-inter text-[18px] sm:text-[20px] font-bold text-[#0A192F] leading-none">
                67
              </h4>
              <p className="font-instrument text-[11px] sm:text-[12px] text-[#64748B] mt-1 line-clamp-1">
                Counties
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
