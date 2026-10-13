"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowRight, PhoneCall } from "lucide-react";

interface FaqItem {
  id: string;
  number: string;
  question: string;
  answer: React.ReactNode;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    number: "01",
    question: "What does the free audit include?",
    answer:
      "The audit reviews your website, local rankings, Google Business Profile and ad performance. We also review sample intake calls and measure how quickly your team responds. You receive a written plan naming the three biggest leaks in your pipeline.",
  },
  {
    id: "faq-2",
    number: "02",
    question: "How do you target potential clients in Naples?",
    answer:
      "Google Ads location settings limit reach to Naples, Collier County or your chosen radius. SEO pages use Naples neighborhoods and local terms to attract nearby searchers.",
  },
  {
    id: "faq-3",
    number: "03",
    question: "Do you use SEO or Google Ads for lawyer lead generation?",
    answer:
      "We use both, since each channel covers a different part of the timeline. Google Ads produces early inquiries and SEO builds a lasting base of organic clients.",
  },
  {
    id: "faq-4",
    number: "04",
    question: "Can you generate leads from Google Maps?",
    answer:
      "Yes. Google Business Profile optimization targets the Map Pack, where local legal searches often begin. Accurate categories, steady reviews and local citations raise your visibility in Naples.",
  },
  {
    id: "faq-5",
    number: "05",
    question: "How quickly can paid campaigns start generating leads?",
    answer:
      "Google Ads campaigns typically begin producing inquiries within two to four weeks. Early data guides keyword and bid changes, so lead quality improves after launch.",
  },
  {
    id: "faq-6",
    number: "06",
    question: "Do you work with law firms outside Naples?",
    answer: (
      <span>
        Yes. Bayshore serves law firms statewide and our{" "}
        <Link
          href="/local-lead-generation-florida"
          className="text-[#FF5528] font-semibold underline underline-offset-4 hover:text-[#e44317] transition-colors"
        >
          Florida legal lead generation page
        </Link>{" "}
        explains more.
      </span>
    ),
  },
];

export default function NaplesFaq() {
  const [openId, setOpenId] = useState<string>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <section className="relative w-full bg-white py-14 sm:py-20 lg:py-28 border-t border-[#EEF2F6]/90 overflow-hidden">
      <div className="mx-auto max-w-[1580px] px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="max-w-[920px] mb-12 sm:mb-16">
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">XIV.</span> FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          <h2 className="font-playfair mt-4 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0A192F]">
            Frequently Asked Questions About Legal Lead Generation
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
                    <div className="font-instrument text-[15px] sm:text-[16px] text-[#4A5568] leading-[1.75]">
                      {faq.answer}
                    </div>
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
              CONFIDENTIAL FIRM AUDIT
            </span>

            <h2 className="font-playfair mt-3 text-[30px] sm:text-[38px] md:text-[44px] font-bold leading-[1.15] text-white">
              Ready To Fill Your Naples Calendar With Real Cases?
            </h2>

            <p className="font-instrument mt-4 text-[15px] sm:text-[16.5px] text-[#CBD5E1] leading-[1.7]">
              Your competitors are already buying clicks and earning reviews. Bayshore&apos;s free lawyer lead generation Naples audit shows where your firm stands against them. We review your rankings, ads, website and intake process, then send a written plan. Book a free lead generation audit and see where your Naples firm loses cases.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6">
              <Link
                href="#contact"
                className="group inline-flex h-[52px] items-center justify-center gap-2.5 rounded-[8px] bg-[#FF5528] px-8 text-[15px] sm:text-[16px] font-semibold text-white shadow-[0_6px_20px_rgba(255,85,40,0.35)] transition-all duration-300 hover:bg-[#e44317] hover:shadow-[0_10px_25px_rgba(255,85,40,0.45)] hover:-translate-y-0.5"
              >
                <span>Get Your Free Audit</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>

              <div className="flex items-center gap-2.5 text-[15px] text-[#CBD5E1] font-instrument">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#FF5528]">
                  <PhoneCall size={18} />
                </div>
                <span>
                  Ready to speak with us? Call{" "}
                  <a
                    href="tel:+15095921745"
                    className="text-white font-bold hover:text-[#FF5528] transition-colors"
                  >
                    +1 (509) 592 1745
                  </a>
                  .
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
