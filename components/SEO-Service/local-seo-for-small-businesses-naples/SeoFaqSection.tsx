"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    id: "01",
    question:
      "Is it better to target Naples broadly or specific neighborhoods?",
    answer:
      "Both come highly recommended. Target broad terms like “Naples FL tax advisor” for city traffic and specific long-tail keywords like “Old Naples injury lawyers” for ready-to-buy local customers.",
  },
  {
    id: "02",
    question:
      "Will local SEO work if my Naples Florida business has no physical storefront?",
    answer:
      "Yes. If you run a service-area business in Naples, Florida, you can rank in local searches without a storefront by setting up your Google Business Profile to target local neighborhoods.",
  },
  {
    id: "03",
    question:
      "Which is better for my startup business: a long-term SEO contract or monthly SEO?",
    answer:
      "Monthly SEO retainers are often the better long-term choice for startups. This supports consistent traffic growth, regular content updates, and rapid adaptation to Google's algorithm changes.",
  },
  {
    id: "04",
    question:
      "Does local SEO still work if my small business has some bad Google reviews?",
    answer:
      "Yes. Negative reviews can slow momentum, but they do not eliminate your ability to rank locally. We help businesses manage reviews, improve customer feedback, and strengthen their online reputation. In many cases, review quality and engagement matter just as much as review quantity.",
  },
  {
    id: "05",
    question:
      "Is local SEO enough, or should I also run Google Ads for my business?",
    answer:
      "Google Ads provides immediate visibility, while local SEO builds long-term authority and sustainable traffic. For many Naples businesses, combining Google Ads with local SEO delivers the strongest results, especially during peak season from October through April.",
  },
];  

export default function SeoFaqSection() {
  const [openFaq, setOpenFaq] = useState<number>(-1);

  return (
    <section className="pt-4 pb-12 md:pt-10 md:pb-20">
      <div className="mx-auto max-w-[1620px] px-4 md:px-8">
        <div className="px-4 py-8 md:px-10 md:py-12 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
          {/* Header */}
          <div className="mx-auto max-w-[900px] text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-3 shadow-sm">
              <HelpCircle size={16} className="text-[#FF6F00]" />
              <span className="font-semibold text-[#FF6F00]">FAQ</span>
            </div>

            <h2 className="mt-6 text-[38px] font-bold leading-[1.08] text-black md:text-[52px]">
              Naples Florida Small Business Local SEO
              <br />
              <span className="text-[#FF6F00]">
                Frequently Asked Questions
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-[700px] text-[16px] leading-8 text-black/70 md:text-[20px]">
              Get clear answers to the most common local SEO questions from
              Naples Florida small business owners.
            </p>
          </div>

          {/* FAQ List */}
          <div className="mx-auto mt-8 max-w-[1200px] space-y-4 md:mt-10 md:space-y-5">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.id}
                  className="overflow-hidden rounded-[24px] border border-black/5 bg-white shadow-[0_6px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-[#FF6F00]/20"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="flex w-full items-center gap-4 p-4 text-left md:gap-6 md:p-8"
                  >
                    <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#FF6F00] font-bold text-white md:h-[64px] md:w-[64px] md:text-[22px]">
                      {faq.id}
                    </div>

                    <div className="flex-1">
                      <h3 className="text-[16px] font-bold leading-[1.25] text-black md:text-[22px]">
                        {faq.question}
                      </h3>
                    </div>

                    <ChevronDown
                      size={28}
                      className={`shrink-0 text-[#FF6F00] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid px-4 transition-all duration-500 md:px-8 ${
                      isOpen
                        ? "grid-rows-[1fr] pb-5 opacity-100 md:pb-8"
                        : "grid-rows-[0fr] pb-0 opacity-0"
                    }`}
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