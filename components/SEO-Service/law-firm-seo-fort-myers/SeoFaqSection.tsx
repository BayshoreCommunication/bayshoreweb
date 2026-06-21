"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    id: "01",
    question: "How does AI search affect my SEO strategy in 2026?",
    answer:
      "AI-generated summaries now appear at the top of many legal search results. Firms cited in these summaries receive significant visibility advantages. Our methodology includes structured content optimization specifically designed for AI parsing and citation.",
  },
  {
    id: "02",
    question: "Do you need a long-term contract?",
    answer:
      "No. Bayshore Communication does not require long-term contracts. We earn continued business through performance. Our average client relationship exceeds two years because results justify continuation.",
  },
  {
    id: "03",
    question: "What information do you need to start?",
    answer:
      "We need access to your website, Google Business Profile, and Google Analytics. A brief intake session covering your practice areas, target geography, and growth objectives completes the onboarding process.",
  },
];

export default function SeoFaqSection() {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <section className="pt-4 pb-12 md:pt-10 md:pb-20">
      <div className="mx-auto max-w-[1620px] px-4 md:px-8">
        <div className="px-4 py-8 md:px-10 md:py-12 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
          {/* Header */}
          <div className="mx-auto max-w-[900px] text-center">
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-black/10
                px-5
                py-3
                shadow-sm
              "
            >
              <HelpCircle size={16} className="text-[#FF6F00]" />
              <span className="font-semibold text-[#FF6F00]">FAQ</span>
            </div>

            <h2 className="mt-6 text-[38px] font-bold leading-[1.08] text-black md:text-[52px]">
              Fort Myers Law Firm SEO
              <br />
              <span className="text-[#FF6F00]">
                Frequently Asked Questions
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-[700px] text-[16px] leading-8 text-black/70 md:text-[20px]">
              Get clear answers to the most common SEO questions from Fort
              Myers law firm owners.
            </p>
          </div>

          {/* FAQ List */}
          <div className="mx-auto mt-8 max-w-[1200px] space-y-4 md:mt-10 md:space-y-5">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.id}
                  className="
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-black/5
                    bg-white
                    shadow-[0_6px_20px_rgba(0,0,0,0.04)]
                    transition-all
                    duration-300
                    hover:border-[#FF6F00]/20
                  "
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="
                      flex
                      w-full
                      items-center
                      gap-4
                      p-4
                      text-left
                      md:gap-6
                      md:p-8
                    "
                  >
                    {/* Number */}
                    <div
                      className="
                        flex
                        h-[52px]
                        w-[52px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#FF6F00]
                        font-bold
                        text-white
                        md:h-[64px]
                        md:w-[64px]
                        md:text-[22px]
                      "
                    >
                      {faq.id}
                    </div>

                    {/* Question */}
                    <div className="flex-1">
                      <h3 className="text-[16px] font-bold leading-[1.3] text-black md:text-[22px]">
                        {faq.question}
                      </h3>
                    </div>

                    {/* Icon */}
                    <ChevronDown
                      size={28}
                      className={`shrink-0 text-[#FF6F00] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-500 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 pb-5 md:px-8 md:pb-8">
                        <p className="pl-[68px] text-[15px] leading-8 text-black/75 md:pl-[88px] md:text-[19px]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}