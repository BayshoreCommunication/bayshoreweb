"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    id: "01",
    question:
      "Will Bayshore Communication help my business appear in AI-generated search answers?",
    answer:
      "Yes. Every campaign includes AEO and GEO strategies that structure your content for AI platforms, including ChatGPT, Perplexity, Grok, and Google AI Search, so your business is recommended directly in those results.",
  },
  {
    id: "02",
    question:
      "Does Bayshore work with small Largo businesses or mainly larger organizations?",
    answer:
      "Both. The Starter package is designed specifically for smaller businesses building their local presence. Every package is scoped to match the actual competitive situation and budget of the individual client.",
  },
  {
    id: "03",
    question:
      "How does Bayshore acquire backlinks for Largo area businesses?",
    answer:
      "Through targeted outreach to local publications, industry associations, niche directories, and relevant community sources. Every link is evaluated for domain quality and topical relevance before any outreach begins.",
  },
  {
    id: "04",
    question:
      "What metrics does Bayshore track to measure campaign performance?",
    answer:
      "We track keyword ranking positions, organic traffic volume, inbound contact activity, Google Business Profile engagement, and backlink growth. Each metric is reported in context so the data connects directly to business outcomes.",
  },
  {
    id: "05",
    question:
      "Does investing in SEO make sense for a Largo business that already gets some customers through word of mouth?",
    answer:
      "Word of mouth has a ceiling. SEO removes that ceiling by reaching buyers outside your existing network who are actively searching for your services in Largo. Organic search works around the clock and generates leads that referrals alone cannot sustain consistently.",
  },
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
              Largo Florida SEO
              <br />
              <span className="text-[#FF6F00]">Frequently Asked Questions</span>
            </h2>

            <p className="mx-auto mt-6 max-w-[700px] text-[16px] leading-8 text-black/70 md:text-[20px]">
              Get clear answers to the most common SEO questions from Largo business owners.
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
