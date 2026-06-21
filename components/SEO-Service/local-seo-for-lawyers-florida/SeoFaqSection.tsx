"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    id: "01",
    question: "How do local SEO and AI work together?",
    answer:
      "AI analyzes local search intent to help your firm dominate the Google Map Pack rankings. Modern algorithms use machine learning to connect Florida attorneys with high-value local legal leads.",
  },
  {
    id: "02",
    question: "Are different SEO strategies needed for different search engines?",
    answer:
      "Google requires authority and trust, while Bing focuses more on social signals and keywords. We optimize your firm's digital presence to perform across every major search engine platform.",
  },
  {
    id: "03",
    question: "How much will it cost to run a SEO campaign?",
    answer:
      "Monthly retainers vary based on your city's competition and the specific legal practice area. Most professional campaigns for Florida firms range from $2,000 to more.",
  },
  {
    id: "04",
    question: "Is SEO better than Google Ads for Florida law firms?",
    answer:
      "SEO builds long-term organic authority while ads provide immediate traffic for a specific cost. A balanced strategy uses both to secure the highest possible return on your investment.",
  },
  {
    id: "05",
    question: "Is SEO better than paid advertising?",
    answer:
      "Organic search results earn higher trust from potential clients than paid advertisements on Google. SEO provides a sustainable flow of leads without paying for every single website click.",
  },
  {
    id: "06",
    question: "Is legal SEO a one-time project or an ongoing process?",
    answer:
      "Consistent optimization is required to maintain your rankings against aggressive and well-funded local competitors. Algorithms change frequently, so your strategy must adapt to stay ahead of the market.",
  },
  {
    id: "07",
    question: "Can I perform SEO by myself?",
    answer:
      "Attorneys can manage basic tasks, but technical SEO requires specialized knowledge and expensive tools. Your time is better spent winning cases while experts handle your digital marketing strategy.",
  },
  {
    id: "08",
    question: "How long does it take to see results from local SEO for lawyers in Florida?",
    answer:
      "Initial improvements often appear within ninety days, but total market dominance takes six months. High-competition markets like Miami require sustained effort to achieve and maintain top organic rankings.",
  },
  {
    id: "09",
    question: "How can I get started with Bayshore Communication's Florida law firm SEO services?",
    answer:
      "Please visit www.bayshorecommunication.com/contact to submit your inquiry via the form or call us anytime at +1 (509) 592-1745.",
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
              Florida Law Firm SEO
              <br />
              <span className="text-[#FF6F00]">Frequently Asked Questions</span>
            </h2>

            <p className="mx-auto mt-6 max-w-[700px] text-[16px] leading-8 text-black/70 md:text-[20px]">
              Get clear answers to the most common SEO questions from Florida
              law firm owners and attorneys.
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
