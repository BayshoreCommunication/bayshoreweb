"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    id: "01",
    question:
      "How long does it take to see results from lawyer SEO in Tampa?",
    answer:
      "Most Tampa law firms begin to see measurable improvements in rankings and organic traffic within three to six months of consistent SEO work. The exact timeline depends on how competitive your practice area is locally, the current technical condition of your website, and how consistently the strategy is implemented.",
  },
  {
    id: "02",
    question:
      "Do I need SEO if I am already running Google Ads for my law firm?",
    answer:
      "Paid ads stop producing results the moment your budget runs out. SEO builds unlimited search visibility that continues to generate consultation requests and phone calls long after the initial investment.",
  },
  {
    id: "03",
    question:
      "How do you measure SEO success for Tampa law firms?",
    answer:
      "We track keyword rankings, organic traffic, consultation requests, phone calls, and Google Business Profile performance.",
  },
  {
    id: "04",
    question:
      "Will I receive regular updates about my SEO campaign?",
    answer:
      "Yes. We provide detailed monthly reports and ongoing communication about rankings, traffic, and lead growth.",
  },
  {
    id: "05",
    question:
      "What information do you need before starting law firm SEO services?",
    answer:
      "We review your website, practice areas, competitors, target locations, and current search visibility before building your strategy.",
  },
  //   {
  //     id: "04",
  //     question: "How long does it take to see SEO results in Wesley Chapel?",
  //     answer:
  //       "Most businesses begin seeing measurable improvements within 3–6 months. Competitive industries may require more time, but early wins often come through local search visibility and Google Business Profile optimization.",
  //   },
  //   {
  //     id: "05",
  //     question:
  //       "Do you optimize for AI search platforms like ChatGPT and Google AI Overviews?",
  //     answer:
  //       "Yes. Our SEO strategies include Ask Engine Optimization (AEO) and Generative Engine Optimization (GEO) to improve visibility across AI-powered search experiences and answer engines.",
  //   },
  //   {
  //     id: "06",
  //     question:
  //       "Can Bayshore Communication help improve my Google Business Profile?",
  //     answer:
  //       "Absolutely. We optimize your Google Business Profile, improve local citations, strengthen review strategies, and help increase visibility within Google Maps and local search results.",
  //   },
];

export default function SeoFaqSection() {
  const [openFaq, setOpenFaq] = useState<number>(-1);

  return (
    <section className="pt-4 pb-12 md:pt-10 md:pb-20">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        <div
          className="
            px-4
            py-8

            md:px-10
            md:py-12

            shadow-[0_10px_40px_rgba(0,0,0,0.04)]
          "
        >
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
              Wesley Chapel Florida SEO
              <br />
              <span className="text-[#FF6F00]">Frequently Asked Questions</span>
            </h2>

            <p className="mx-auto mt-6 max-w-[700px] text-[16px] leading-8 text-black/70 md:text-[20px]">
              Get clear answers to the most common SEO questions from Wesley
              Chapel business owners.
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
                        self-center
                      "
                    >
                      {faq.id}
                    </div>

                    <div className="flex-1">
                      <h3 className="text-[16px] font-bold leading-[1.25] text-black md:text-[22px]">
                        {faq.question}
                      </h3>
                    </div>

                    <ChevronDown
                      size={28}
                      className={`
                        shrink-0
                        self-center
                        text-[#FF6F00]
                        transition-transform
                        duration-300
                        ${isOpen ? "rotate-180" : ""}
                      `}
                    />
                  </button>

                  <div
                    className={`
                      grid px-4 transition-all duration-500 md:px-8
                      ${
                        isOpen
                          ? "grid-rows-[1fr] pb-5 opacity-100 md:pb-8"
                          : "grid-rows-[0fr] pb-0 opacity-0"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <p className="pl-[68px] text-[15px] leading-8 text-black/75 md:pl-[88px] md:text-[19px]">
                        {faq.answer}
                      </p>
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
