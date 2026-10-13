"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowRight, PhoneCall } from "lucide-react";

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
    question: "How do you make sure the leads come from areas where my firm practices?",
    answer:
      "We use county-level and metro-specific geo-targeting based on your active practice jurisdictions. Campaigns are configured to limit wasted inquiries from locations your attorneys cannot serve, with ongoing adjustments based on lead quality and signed cases.",
  },
  {
    id: "faq-2",
    number: "02",
    question: "How do you determine whether a lead is actually valuable for my firm?",
    answer:
      "We track each lead beyond the initial call or form submission, connecting search terms and marketing channels to consultations and signed cases. Prequalification, negative keyword filtering, and structured intake workflows help reduce out-of-scope inquiries and keep your team focused on viable prospects.",
  },
  {
    id: "faq-3",
    number: "03",
    question: "How long does it take to launch a legal lead generation campaign?",
    answer:
      "After the initial audit, we develop the campaign around your practice areas, target markets, landing pages, advertising channels, and intake process. The timeline depends on the scope of the campaign and the systems that need to be integrated, such as call tracking, CRM tools, and automated follow-up.",
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
        <div className="max-w-[920px] mb-12 sm:mb-16">
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">XII.</span> FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          <h2 className="font-playfair mt-4 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0A192F]">
            Frequently Asked Questions
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
            FINAL CALL TO ACTION BANNER (FROM DOC)
            =================================================================== */}
        <div className="rounded-[28px] bg-gradient-to-br from-[#0A192F] to-[#0E2545] p-8 sm:p-12 lg:p-16 text-white shadow-[0_20px_50px_rgba(10,25,47,0.15)] relative overflow-hidden">
          {/* Subtle Orange Glow in Corner */}
          <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-[#FF5528]/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-[880px]">
            <span className="font-mono text-[11px] sm:text-[12px] font-bold tracking-[0.16em] text-[#FF5528] uppercase">
              CONFIDENTIAL LEGAL LEAD AUDIT
            </span>

            <h2 className="font-playfair mt-3 text-[30px] sm:text-[38px] md:text-[44px] font-bold leading-[1.15] text-white">
              Identify Where Your Firm Can Acquire High-Value Cases
            </h2>

            <p className="font-instrument mt-4 text-[15px] sm:text-[16.5px] text-[#CBD5E1] leading-[1.7]">
              Call Bayshore Communication at +1 (509) 592-1745 to schedule a free legal lead generation audit and identify where your firm can acquire high-value cases across your active Florida practice jurisdictions.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6">
              <Link
                href="/contact"
                className="group inline-flex h-[52px] items-center justify-center gap-2.5 rounded-[8px] bg-[#FF5528] px-8 text-[15px] sm:text-[16px] font-semibold text-white shadow-[0_6px_20px_rgba(255,85,40,0.35)] transition-all duration-300 hover:bg-[#e44317] hover:shadow-[0_10px_25px_rgba(255,85,40,0.45)] hover:-translate-y-0.5"
              >
                <span>Schedule a Free Audit</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>

              <div className="flex items-center gap-2.5 text-[15px] text-[#CBD5E1] font-instrument">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#FF5528]">
                  <PhoneCall size={18} />
                </div>
                <span>
                  Ready to speak? Call{" "}
                  <a
                    href="tel:+15095921745"
                    className="text-white font-bold hover:text-[#FF5528] transition-colors"
                  >
                    +1 (509) 592-1745
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
