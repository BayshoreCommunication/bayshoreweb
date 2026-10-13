"use client";

import React from "react";
import { ShieldAlert, HeartHandshake, Shield, FileCheck } from "lucide-react";

const PRACTICE_AREAS = [
  {
    step: "01",
    icon: ShieldAlert,
    title: "Personal Injury and Auto Accident Litigation",
    description:
      "Personal injury search terms command some of the highest cost-per-click figures in Florida digital marketing. We build hyper-focused campaigns targeting specific crash types, including auto, commercial truck, motorcycle, and rideshare accidents. Negative keyword filters screen out minor property damage calls to keep your budget focused on serious injury claims. Targeting severe injury cases increases average case values for your practice.",
  },
  {
    step: "02",
    icon: HeartHandshake,
    title: "Family Law, Divorce, and Immigration",
    description:
      "Family law searchers want tendering of words and prompt direction in times of stress. Multilingual communication channels can be important for immigration opportunities. We create bespoke campaigns on divorce, child custody, visa applications or deportation defense which include bilingual English and Spanish assets for the South Florida market. Transmitting empathetic messages combined with viable direction cultivates trust with overworked looking individuals.",
  },
  {
    step: "03",
    icon: Shield,
    title: "Criminal Defense and Workers Compensation",
    description:
      "Individuals facing arrest or workplace injury need fast legal counsel and typically hire the first attorney who answers. We set up round-the-clock call routing and click-to-call mobile ad formats to capture urgent calls. Fast intake setup allows your firm to secure retainers before competitors even review the lead. Immediate responses establish immediate rapport during urgent legal situations.",
  },
  {
    step: "04",
    icon: FileCheck,
    title: "Estate Planning, Probate and Medical Malpractice",
    description:
      "High-value malpractice cases and estate planning matters involve longer research phases by prospective clients. We create authoritative, trust building web environments that highlight attorney experience, past case victories, and professional accolades. Informative content reassures discerning prospects and guides them toward scheduling a formal consultation. Clear, detailed explanations demonstrate expertise and build long-term confidence.",
  },
];

export default function LegalPracticeAreas() {
  return (
    <section className="relative w-full bg-[#F3F5F8] py-14 sm:py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1580px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 relative z-10">
        
        {/* ===================================================================
            HEADER: EYEBROW (V. PRACTICE AREAS), HEADLINE & COPY FROM DOC
            =================================================================== */}
        <div className="mb-12 sm:mb-14 lg:mb-16 max-w-[900px]">
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">V.</span> PRACTICE AREAS
            </span>
          </div>

          <h2 className="font-playfair mt-4 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] leading-[1.12] tracking-[-0.02em] text-[#0A192F]">
            Specialized Campaigns Across Major Practice Areas
          </h2>

          <p className="font-instrument mt-4 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.68] text-[#556377] max-w-[760px]">
            Different legal specialties require distinct acquisition strategies, landing page structures, and intake workflows. Successful legal lead generation in Florida relies on aligning campaign messaging with the precise needs of each practice area.
          </p>
        </div>

        {/* ===================================================================
            PRACTICE AREAS GRID (4 CARDS)
            =================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 lg:gap-8">
          {PRACTICE_AREAS.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.step}
                className="group relative flex flex-col justify-between rounded-[22px] sm:rounded-[26px] border border-[#E2E8F0] bg-white p-7 sm:p-9 shadow-[0_4px_20px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5528]/40 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FFF2ED] text-[#FF5528] transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-7 w-7" />
                    </div>

                    <span className="font-mono text-[13px] sm:text-[14px] font-bold text-[#FF5528] tracking-tight">
                      {area.step}
                    </span>
                  </div>

                  <h3 className="font-playfair text-[21px] sm:text-[23px] font-bold leading-tight text-[#0A192F] mb-3">
                    {area.title}
                  </h3>

                  <p className="font-instrument text-[14.5px] sm:text-[15.5px] leading-[1.72] text-[#4A5568]">
                    {area.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
