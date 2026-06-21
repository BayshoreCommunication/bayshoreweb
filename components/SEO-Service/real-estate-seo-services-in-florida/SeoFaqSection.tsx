"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    id: "01",
    question:
      "Do I still need SEO if I already pay for any Premier Agent subscription?",
    answer:
      "Any specific platform puts your profile only on that. But SEO puts your brand on Google, where buyers and sellers begin their search before they ever visit a portal.",
  },
  {
    id: "02",
    question:
      "Can you work with a new Florida real estate agent who has no existing domain authority?",
    answer:
      "Yes. We've built search authority for agents starting from zero, beginning with technical foundation work, local SEO setup, and content that establishes credibility in your specific city or county market.",
  },
  {
    id: "03",
    question:
      "What happens to my rankings if I pause or stop SEO services?",
    answer:
      "Positions are held for several months before gradual decline without active maintenance.",
  },
  {
    id: "04",
    question:
      "Do you work with Florida property management companies and short-term rental businesses?",
    answer:
      "Yes. Property management and vacation rental businesses face specific SEO challenges around location pages and booking intent. These issues are different from standard brokerage SEO, and we handle both regularly.",
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
              Florida Real Estate SEO
              <br />
              <span className="text-[#FF6F00]">Frequently Asked Questions</span>
            </h2>

            <p className="mx-auto mt-6 max-w-[700px] text-[16px] leading-8 text-black/70 md:text-[20px]">
              Get clear answers to the most common real estate SEO questions
              from Florida businesses.
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
