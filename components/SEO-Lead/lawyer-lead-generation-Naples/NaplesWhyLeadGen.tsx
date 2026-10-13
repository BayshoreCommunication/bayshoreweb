"use client";

import React from "react";
import { Users, Landmark, Scale, Search } from "lucide-react";

const STAT_CARDS = [
  {
    icon: Users,
    value: "20,000+",
    label: "Naples Population",
    description: "Year-round residents plus affluent seasonal retirees & second-home owners.",
  },
  {
    icon: Landmark,
    value: "0.42M",
    label: "Collier County Population",
    description: "Spanning Naples, Marco Island, Immokalee, and Ave Maria legal demand.",
  },
  {
    icon: Scale,
    value: "1,000+",
    label: "Active Attorneys in Collier",
    description: "Intense local competition for high-value estate, injury, and business cases.",
  },
  {
    icon: Search,
    value: "100 - 250",
    label: 'Monthly "Lawyer Naples" Searches',
    description: "High-intent searchers actively comparing firms and booking consultations.",
  },
];

export default function NaplesWhyLeadGen() {
  return (
    <section className="relative w-full bg-white py-14 sm:py-18 lg:py-24 border-t border-[#EEF2F6]/80">
      <div className="mx-auto max-w-[1580px] px-16 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="max-w-[960px] mb-12 sm:mb-16">
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] font-bold tracking-[0.16em] text-primary uppercase">
              I. THE NAPLES OPPORTUNITY
            </span>
          </div>

          <h2 className="font-playfair mt-4 text-[32px] sm:text-[40px] md:text-[46px] lg:text-[50px] font-bold leading-[1.14] tracking-[-0.02em] text-[#0A192F]">
            Naples Firms Win Clients At The Search Box With Lead Generation Method.
          </h2>

          <div className="mt-4 mb-6 h-[3.5px] w-12 rounded-full bg-primary" />

          <div className="space-y-4 text-[15.5px] sm:text-[16.5px] md:text-[17.5px] leading-[1.72] text-[#4A5568]">
            <p className="font-instrument">
              A Naples homeowner with a denied hurricane claim opens Google before calling anyone. A retiree in Pelican Bay searches for an estate planning attorney the same way. A Marco Island business owner facing a lease dispute does likewise. Each search is a decision in progress and one firm gets the call. Implementing lawyer lead generation Naples methos puts your firm in front of those searchers. It then turns each visit into a phone call, a form submission or a booked consultation.
            </p>
            <p className="font-instrument">
              Naples behaves like its own legal market, separate from Fort Myers or Miami. Retirees and second home owners create steady demand for estate planning, elder law and probate. Insurance disputes and personal injury inquiries climb after storms and through tourist season. Real estate closings follow the winter migration.
            </p>
            <p className="font-instrument font-medium text-[#0A192F]">
              Rankings bring visitors to your website. Intake decides whether those visitors become clients. Bayshore builds both halves, then measures the handoff between them.
            </p>
          </div>
        </div>

        {/* 4 Stats Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {STAT_CARDS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-[20px] border border-[#E2E8F0] bg-[#FAFCFF] p-6 sm:p-7 shadow-[0_4px_20px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF2ED] text-primary transition-transform duration-300 group-hover:scale-105 mb-5">
                    <Icon size={24} />
                  </div>

                  <span className="font-inter text-[30px] sm:text-[34px] font-bold text-[#0A192F] tracking-tight leading-none block mb-2">
                    {stat.value}
                  </span>

                  <h3 className="font-mono text-[11px] sm:text-[12px] font-bold text-primary uppercase tracking-[0.12em] mb-2">
                    {stat.label}
                  </h3>

                  <p className="font-instrument text-[13.5px] sm:text-[14px] text-[#64748B] leading-relaxed">
                    {stat.description}
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
