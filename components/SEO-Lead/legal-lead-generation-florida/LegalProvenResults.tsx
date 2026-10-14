"use client";

import React from "react";
import Link from "next/link";
import { TrendingUp, Award, ShieldCheck, Users, PhoneCall, ArrowRight } from "lucide-react";

const STATS = [
  {
    value: "500K+",
    label: "Total Leads Generated",
    subtext: "Since 2016 for law firms",
  },
  {
    value: "70+",
    label: "Legal Clients Served",
    subtext: "Statewide across Florida",
  },
  {
    value: "90%",
    label: "Client Retention Rate",
    subtext: "Long-term partnership stability",
  },
  {
    value: "96%",
    label: "Geo-Qualification Rate",
    subtext: "In-jurisdiction prospect fit",
  },
];

const CASE_HIGHLIGHTS = [
  {
    metric: "+180%",
    label: "QUALIFIED CONSULTATIONS",
    description: "Tampa personal injury clients experienced a +180% increase in qualified consultations.",
  },
  {
    metric: "-65%",
    label: "COST PER LEAD (CPL)",
    description: "Dramatic reduction in acquisition cost alongside rapid intake optimization.",
  },
  {
    metric: "+210%",
    label: "ORGANIC SEO TRAFFIC",
    description: "Traffic gains exceeding +210% across high-intent core practice pages.",
  },
];

export default function LegalProvenResults() {
  return (
    <section className="relative w-full bg-white py-14 sm:py-20 lg:py-28 border-t border-[#EEF2F6]/90 overflow-hidden">
      <div className="mx-auto max-w-[1580px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="max-w-[920px] mb-12 sm:mb-16">
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">XI.</span> TRACK RECORD
            </span>
          </div>

          <h2 className="font-playfair mt-4 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0A192F]">
            Proven Results and Direct Lead Ownership
          </h2>

          <p className="font-instrument mt-4 text-[16px] sm:text-[18px] md:text-[19px] leading-[1.7] text-[#4A5568]">
            Bayshore Communication has generated over 500,000 leads for more than 70 legal clients since 2016. Our firm maintains a 90% client retention rate and a 96% geo-qualification rate across all active campaigns. Shared lead aggregators sell identical inquiries to multiple competing practices, but every lead generated through our custom pipelines belongs 100% exclusively to your law firm. Our Tampa personal injury clients experienced a +180% increase in qualified consultations alongside a -65% reduction in cost per lead, while organic SEO campaigns achieved traffic gains exceeding +210% across core practice pages.
          </p>
        </div>

        {/* 4 Stat Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 mb-12 sm:mb-16">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-[22px] border border-[#E2E8F0] bg-[#F8FAFC] p-7 text-center hover:border-[#FF5528]/40 hover:bg-white hover:shadow-[0_12px_32px_rgba(15,23,42,0.06)] transition-all"
            >
              <div className="font-inter text-[34px] sm:text-[38px] font-bold text-[#FF5528] tracking-tight leading-none mb-2">
                {stat.value}
              </div>
              <div className="font-playfair text-[17px] font-bold text-[#0A192F] mb-1">
                {stat.label}
              </div>
              <div className="font-instrument text-[13px] text-[#64748B]">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* 3 Performance Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 mb-14 sm:mb-18">
          {CASE_HIGHLIGHTS.map((item, idx) => (
            <div
              key={idx}
              className="rounded-[22px] border border-[#E2E8F0] bg-white p-7 sm:p-8 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:border-[#FF5528]/40 transition-colors"
            >
              <div className="font-inter text-[32px] sm:text-[36px] font-bold text-[#0A192F] tracking-tight leading-none mb-2">
                {item.metric}
              </div>
              <div className="font-mono text-[11px] font-bold text-[#FF5528] uppercase tracking-wider mb-3">
                {item.label}
              </div>
              <p className="font-instrument text-[14.5px] sm:text-[15px] leading-[1.65] text-[#4A5568]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Direct Call & Audit Box */}
        <div className="rounded-[24px] border border-[#FF5528]/30 bg-[#FFF9F6] p-7 sm:p-9 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-[760px]">
            <span className="font-mono text-[11px] font-bold tracking-[0.14em] text-[#FF5528] uppercase">
              CONFIDENTIAL FIRM CONSULTATION
            </span>
            <p className="font-instrument mt-2 text-[16px] sm:text-[17px] text-[#0A192F] leading-snug font-medium">
              Call Bayshore Communication at{" "}
              <a href="tel:+15095921745" className="text-[#FF5528] font-bold underline underline-offset-4">
                +1 (509) 592-1745
              </a>{" "}
              to schedule a free legal lead generation audit and identify where your firm can acquire high-value cases.
            </p>
          </div>

          <Link
            href="#contact"
            className="group inline-flex h-[50px] shrink-0 items-center justify-center gap-2 rounded-[8px] bg-[#0A192F] px-7 text-[14.5px] font-semibold text-white transition-all hover:bg-[#FF5528]"
          >
            <span>Book Free Legal Audit</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
