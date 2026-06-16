"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    id: "01",
    question:
      "Do you work with newer Spring Hill, Florida, businesses that are just starting their SEO?",
    answer:
      "We work with businesses at every growth stage. Newer businesses benefit from building authority and technical foundations early. Every SEO strategy we build is matched to the specific circumstances and goals of the individual business.",
  },
  {
    id: "02",
    question:
      "What is the real difference between SEO and just running Google Ads for my Spring Hill, Florida, business?",
    answer:
      "Google Ads deliver traffic only while you keep paying. SEO builds organic rankings that generate qualified traffic continuously without any per-click cost. Ads work for short-term results. SEO builds a long-term digital asset that grows in value over time.",
  },
  {
    id: "03",
    question:
      "Can SEO address multiple service categories for my business simultaneously?",
    answer:
      "Yes. A properly structured SEO program builds dedicated, fully optimized pages for every service category your Spring Hill, Florida, business operates in. Each page is matched to the specific search queries, intent patterns, and competitive conditions relevant to that category.",
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
              Frequently <span className="text-[#FF6F00]">Asked Questions</span>
            </h2>

            <p className="mx-auto mt-6 max-w-[700px] text-[16px] leading-8 text-black/70 md:text-[20px]">
              Get clear answers to the most common SEO questions from Spring Hill business owners.
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
