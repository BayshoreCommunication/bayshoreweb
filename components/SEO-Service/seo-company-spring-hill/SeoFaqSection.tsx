"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    id: "01",
    question:
      "How soon will my Spring Hill, Florida, business start seeing results from SEO?",
    answer:
      "Typically, Spring Hill, Florida companies starting an active campaign will see some degree of movement in keyword rankings and organic traffic within the first three to six months. The more time an SEO campaign is left to run without interruption, the more powerful and profitable the results will be.",
  },
  {
    id: "02",
    question:
      "How will I measure whether my SEO investment is producing returns?",
    answer:
      "Bayshore Communication delivers monthly keyword ranking, traffic, Google Business Profile insights, call and form generation reports. The report discusses what the results mean and the efforts being made to increase results.",
  },
  {
    id: "03",
    question:
      "How does Bayshore Communication protect my rankings when Google updates its algorithm?",
    answer:
      "Bayshore Communication keeps track of Google algorithm changes during each of our campaigns. Our approach is to develop powerful content, establish genuine authority and get the local data right rather than to game the system. When significant algorithm changes happen we reassess and refine our approach accordingly.",
  },
  {
    id: "04",
    question:
      "How do you identify the right keywords for my specific Spring Hill, Florida, business?",
    answer:
      "We analyze the search behavior of Spring Hill, Florida industry consumers through keyword research and competitor analysis. We evaluate monthly search volume level of the keywords, competition level as well as the buying or hiring intent of the keyword. Our emphasis is on the keywords that are searched for by ready to buy or hire clients, not just to browse.",
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
              Spring Hill Florida SEO
              <br />
              <span className="text-[#FF6F00]">Frequently Asked Questions</span>
            </h2>

            <p className="mx-auto mt-6 max-w-[700px] text-[16px] leading-8 text-black/70 md:text-[20px]">
              Get clear answers to the most common SEO questions from Spring Hill
              business owners.
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
