"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowRight } from "lucide-react";

// =============================================================================
// FAQ DATA FROM GOOGLE DOC (100% UNCHANGED)
// =============================================================================
interface FaqItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    number: "01",
    question: "Are Google Ads worth it for a local business?",
    answer:
      "Google Ads can work well for local businesses with strong search demand, clear service areas and a defined conversion path. A campaign needs relevant keywords, controlled geographic targeting, useful landing pages and reliable conversion tracking.",
  },
  {
    id: "faq-2",
    number: "02",
    question: "Can I run Google Ads myself or do I need an agency?",
    answer:
      "A business can manage Google Ads in-house with the right account access, campaign knowledge, tracking setup and time. Agency support can help with account structure, search term analysis, geo targeting, landing pages, conversion tracking and ongoing optimization.",
  },
  {
    id: "faq-3",
    number: "03",
    question: "Do I need a landing page for local Google Ads?",
    answer:
      "A dedicated landing page can give paid traffic a more direct path to action. The page can match the ad to a specific service and location. It can also keep the phone number, form and offer close to the main message. A well built service page can also support paid search when it matches the campaign intent.",
  },
  {
    id: "faq-4",
    number: "04",
    question: "How long does local SEO take to generate leads?",
    answer:
      "Local SEO grows through content, technical improvements, local relevance, authority, business information and ongoing optimization.",
  },
  {
    id: "faq-5",
    number: "05",
    question: "How do I know which marketing channel generated my customers?",
    answer:
      "Use source level tracking across your website, phone calls, forms and CRM. Google Analytics 4 can track website activity. Google Ads can track paid search conversions. Google Tag Manager can support event tracking. Call tracking can connect phone inquiries with campaigns and landing pages. CRM data can connect leads with appointments and customers.",
  },
];

export default function LegalFaq() {
  const [openId, setOpenId] = useState<string>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <section className="relative w-full bg-white py-14 sm:py-20 lg:py-28 border-t border-[#EEF2F6]/90 overflow-hidden">
      <div className="mx-auto max-w-[1580px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">

        {/* Section Header */}
        <div className="max-w-[900px] mb-12 sm:mb-16">
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">XII.</span> FAQ
            </span>
          </div>

          <h2 className="font-playfair mt-4 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0A192F]">
            Frequently Asked Questions About Local Lead Generation
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-[1100px] divide-y divide-[#EEF2F6] border-y border-[#EEF2F6] mb-16 sm:mb-20">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="py-6 sm:py-7 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="flex w-full items-start justify-between gap-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-5 sm:gap-6">
                    <span className="font-mono text-[14px] sm:text-[16px] font-bold text-[#FF5528] pt-0.5">
                      {faq.number}
                    </span>
                    <span className="font-playfair text-[18px] sm:text-[21px] font-bold text-[#0A192F] group-hover:text-[#FF5528] transition-colors leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFF2ED] text-[#FF5528] transition-transform duration-200">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-4 pl-10 sm:pl-12 pr-6">
                    <p className="font-instrument text-[15px] sm:text-[16px] text-[#4A5568] leading-[1.75]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ===================================================================
            FINAL CALL TO ACTION BANNER (FROM DOC SECTION 18)
            =================================================================== */}
        <div className="rounded-[28px] bg-gradient-to-br from-[#0A192F] to-[#0E2545] p-8 sm:p-12 lg:p-16 text-white shadow-[0_20px_50px_rgba(10,25,47,0.15)] relative overflow-hidden">
          {/* Subtle Orange Glow in Corner */}
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-[#FF5528]/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-[850px]">
            <span className="font-mono text-[11px] sm:text-[12px] font-bold tracking-[0.16em] text-[#FF5528] uppercase">
              START WITH A FREE LOCAL LEAD GENERATION AUDIT
            </span>

            <h2 className="font-playfair mt-3 text-[30px] sm:text-[38px] md:text-[44px] font-bold leading-[1.15] text-white">
              Turn Florida Search Demand Into Qualified Local Leads
            </h2>

            <p className="font-instrument mt-4 text-[15px] sm:text-[16.5px] text-[#CBD5E1] leading-[1.7]">
              Your free audit maps where customers search and where leads slip away. It reviews your local visibility, Google Business Profile, ads, landing pages and follow up. You&apos;ll receive a local market review, a service area strategy and a lead generation assessment. Bayshore can review your local visibility, service areas, landing pages, lead sources and conversion path.
            </p>

            <p className="font-instrument mt-3 text-[14px] sm:text-[15px] text-[#94A3B8]">
              Get a local market review, local visibility analysis and lead generation assessment built around your service area.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="group inline-flex h-[52px] items-center justify-center gap-2.5 rounded-[8px] bg-[#FF5528] px-8 text-[15px] sm:text-[16px] font-semibold text-white shadow-[0_6px_20px_rgba(255,85,40,0.35)] transition-all duration-300 hover:bg-[#e44317] hover:shadow-[0_10px_25px_rgba(255,85,40,0.45)] hover:-translate-y-0.5"
              >
                <span>Get a Free Local Lead Generation Audit</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
