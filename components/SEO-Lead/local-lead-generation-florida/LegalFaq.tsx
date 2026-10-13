"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Minus, Headphones, ArrowRight } from "lucide-react";

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
    question: "How is legal lead generation different from general lead gen?",
    answer:
      "Legal leads have to be filtered by practice area, case value, statute of limitations, and jurisdiction. We build campaigns and intake filters specific to how law firms qualify a case, not generic sales leads. This means higher-quality leads that are actually relevant to your practice.",
  },
  {
    id: "faq-2",
    number: "02",
    question: "Do you localize campaigns by Florida city or region?",
    answer:
      "Yes. Florida legal markets differ dramatically by region. We localize search campaigns, practice area pages, and Google Business Profile optimization by city and county — from South Florida personal injury to Central Florida family law.",
  },
  {
    id: "faq-3",
    number: "03",
    question: "Do you cover all 67 Florida counties?",
    answer:
      "Yes, our footprint spans all 67 counties across Florida. Whether your practice serves a single metro like Miami or Tampa, or manages a statewide presence across multiple offices, we configure targeting to match your exact service territory.",
  },
  {
    id: "faq-4",
    number: "04",
    question: "Do you offer Spanish-language lead generation for South Florida?",
    answer:
      "Absolutely. Bilingual lead generation is critical in South Florida, Orlando, and Tampa. We develop fully dedicated Spanish-language campaigns, ad creative, landing pages, and intake routing to capture high-intent Hispanic legal leads.",
  },
  {
    id: "faq-5",
    number: "05",
    question: "How quickly can I expect leads?",
    answer:
      "Paid search and Local Services Ads (LSA) can begin driving qualified inquiries within 7–14 days of launch. Organic SEO and Google Map Pack rankings typically gain momentum over 60–90 days, delivering sustainable, compounding lead flow.",
  },
  {
    id: "faq-6",
    number: "06",
    question: "Are the leads exclusive to my firm?",
    answer:
      "100% exclusive. Unlike shared lead generation brokerages that resell the same contact form to multiple competing law firms, every lead generated through your custom funnels belongs exclusively to your firm.",
  },
  {
    id: "faq-7",
    number: "07",
    question: "What’s included in the free audit?",
    answer:
      "Our free legal lead generation audit evaluates your local rankings, competitor market share, intake conversion bottlenecks, and paid search efficiency. We identify immediate opportunities to lower your cost-per-case and scale inquiries.",
  },
];

export default function LegalFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      className="relative w-full bg-white py-14 sm:py-18 md:py-20 lg:py-24 xl:py-28 border-t border-[#EEF2F6]/90 overflow-hidden"
    >
      <div className="mx-auto max-w-[1580px] w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
          
          {/* ===================================================================
              LEFT COLUMN: TAGLINE, HEADLINE, SUBTITLE & VISUAL MEDIA CARD
              =================================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            {/* Borderless Roman Numeral Tagline XVI */}
            <div className="inline-flex items-center">
              <span className="font-mono text-[11px] sm:text-[12px] md:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
                <span className="font-playfair italic mr-1">XVI.</span> FAQ
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-playfair mt-3.5 sm:mt-4 md:mt-5 text-[30px] xs:text-[34px] sm:text-[42px] md:text-[46px] lg:text-[48px] xl:text-[54px] font-bold leading-[1.14] tracking-[-0.02em] text-[#0A192F]">
              Legal lead generation,{" "}
              <span className="italic font-normal text-[#FF5528]">
                answered.
              </span>
            </h2>

            {/* Subtitle / Paragraph */}
            <p className="font-instrument mt-3.5 sm:mt-4 md:mt-5 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.68] text-[#556377] max-w-[480px]">
              Get clear answers about how our legal lead generation services work, what&apos;s
              included, and how we help law firms grow across Florida.
            </p>

            {/* Visual Media with Overlaid Floating Support Card */}
            <div className="relative mt-8 sm:mt-10 w-full max-w-[480px] pb-10 sm:pb-12 pl-4 sm:pl-6">
              {/* Lady Justice image container */}
              <div className="relative h-[290px] sm:h-[340px] md:h-[360px] w-full rounded-[22px] overflow-hidden border border-[#E5E9F2] shadow-[0_8px_30px_rgba(15,23,42,0.08)] bg-[#0A192F]">
                <Image
                  src="/assets/seo-lead/lady-justice-faq.jpg"
                  alt="Bronze Lady Justice in law library"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover object-center"
                />
              </div>

              {/* Floating "Talk to our team" Card */}
              <div className="absolute bottom-0 left-0 w-[calc(100%-2rem)] sm:w-auto sm:max-w-[290px] bg-white rounded-[18px] p-4.5 sm:p-5 shadow-[0_16px_40px_rgba(10,25,47,0.16)] border border-[#E5E9F2] z-20">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFF2ED] text-[#FF5528]">
                    <Headphones size={15} strokeWidth={2.4} />
                  </div>
                  <span className="font-mono text-[9.5px] sm:text-[10px] font-bold tracking-[0.14em] text-[#94A3B8] uppercase">
                    STILL HAVE QUESTIONS?
                  </span>
                </div>

                <h4 className="font-playfair text-[16.5px] sm:text-[17.5px] font-bold text-[#0A192F] mt-2.5 leading-tight">
                  Talk to our team.
                </h4>

                <p className="font-instrument text-[12px] sm:text-[12.5px] text-[#64748B] mt-1.5 leading-snug">
                  Get expert guidance on the best strategy for your law firm.
                </p>

                <Link
                  href="#contact"
                  className="group mt-3.5 flex h-[40px] w-full items-center justify-between rounded-[8px] bg-[#FF5528] px-4 text-[12.5px] sm:text-[13px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#e64619] hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Schedule a Free Consultation</span>
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* ===================================================================
              RIGHT COLUMN: ACCORDION LIST (7 ITEMS)
              =================================================================== */}
          <div className="lg:col-span-7 flex flex-col space-y-3.5 sm:space-y-4">
            {FAQ_DATA.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={item.id}
                  className={`rounded-[18px] transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border border-[#FF5528]/35 bg-[#FFF9F6] shadow-[0_8px_28px_rgba(255,85,40,0.08)]"
                      : "border border-[#E5E9F2] bg-white shadow-[0_2px_12px_rgba(15,23,42,0.03)] hover:border-[#FF5528]/45 hover:shadow-md"
                  }`}
                >
                  {/* Accordion Header / Trigger Button */}
                  <button
                    onClick={() => toggleItem(idx)}
                    className="w-full flex items-center justify-between p-4.5 sm:p-5 md:p-5.5 text-left transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3 sm:gap-4 flex-1 pr-3 sm:pr-4">
                      {/* Number Tag in font-inter */}
                      <span className="font-inter font-bold text-[13px] sm:text-[14px] text-[#FF5528] shrink-0 tracking-tight">
                        {item.number}
                      </span>

                      {/* Divider */}
                      <span className="h-4 sm:h-5 w-[1px] bg-[#EEF2F6] shrink-0" />

                      {/* Question Text */}
                      <h3 className="font-playfair text-[15.5px] sm:text-[17px] md:text-[18px] font-bold text-[#0A192F] leading-snug">
                        {item.question}
                      </h3>
                    </div>

                    {/* Plus / Minus Action Circle */}
                    <div
                      className={`flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-[#FF5528] text-white shadow-[0_4px_12px_rgba(255,85,40,0.3)]"
                          : "bg-[#FFF2ED] text-[#FF5528] hover:scale-105"
                      }`}
                    >
                      {isOpen ? (
                        <Minus size={15} strokeWidth={2.6} />
                      ) : (
                        <Plus size={15} strokeWidth={2.6} />
                      )}
                    </div>
                  </button>

                  {/* Expandable Answer Content */}
                  {isOpen && (
                    <div className="px-4.5 sm:px-5 md:px-5.5 pb-5 sm:pb-6 pt-0">
                      <div className="pl-8 sm:pl-9 pr-2 border-t border-[#FF5528]/15 pt-3.5 sm:pt-4">
                        <p className="font-instrument text-[13.5px] sm:text-[14px] md:text-[14.5px] leading-[1.68] text-[#556377]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
