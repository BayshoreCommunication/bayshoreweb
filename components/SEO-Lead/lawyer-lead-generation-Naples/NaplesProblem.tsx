"use client";

import React from "react";
import { Users, Search, Target, Clock } from "lucide-react";

const PROBLEMS = [
  {
    step: "01",
    icon: Target,
    title: "Your Ads Reach People Outside Your Service Area",
    description:
      "Broad location settings send clicks from Tampa, Miami and out of state visitors every day. You pay for each wasted click and your Naples budget shrinks each month. Tight targeting around Collier County and your chosen neighborhoods closes the leak.",
  },
  {
    step: "02",
    icon: Search,
    title: "Your Website Attracts Searches With Weak Hiring Intent",
    description:
      "A search for \"probate attorney Naples\" comes from a buyer ready to hire. A search for \"how long does probate take\" comes from a reader collecting facts. Pages built for the first search book consultations. Pages built for the second collect questions and send few clients.",
  },
  {
    step: "03",
    icon: Users,
    title: "Your Practice Area Gets Buried Under Generic Legal Traffic",
    description:
      "Generic terms like \"lawyer Naples\" draw the widest crowd and the weakest matches. An immigration firm needs \"immigration attorney Naples\" and \"green card lawyer Collier County.\" Specific searches bring fewer clicks and far more signed retainers for focused firms.",
  },
  {
    step: "04",
    icon: Clock,
    title: "Good Leads Go Cold Before Intake",
    description:
      "A caller reaches voicemail at 6 p.m. and dials the next firm on the map. A web form submitted at midnight waits until Tuesday morning for a reply. Speed decides these moments. The first firm to respond usually wins the consultation.",
  },
];

export default function NaplesProblem() {
  return (
    <section className="relative w-full bg-white py-14 sm:py-20 lg:py-28 border-t border-[#EEF2F6]/80 overflow-hidden">
      <div className="mx-auto max-w-[1580px] px-16 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-16">

          {/* Left Column: Headline & Copy */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-start lg:sticky lg:top-28">
            <div className="inline-flex items-center">
              <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
                <span className="font-playfair italic mr-1">II.</span> THE PROBLEM
              </span>
            </div>

            <h2 className="font-playfair mt-5 text-[32px] sm:text-[40px] md:text-[44px] lg:text-[46px] xl:text-[50px] leading-[1.14] tracking-[-0.02em] text-[#0A192F]">
              Naples Legal Companies Rarely Lack Leads. They Lack Leads{" "}
              <span className="italic font-normal text-[#FF5528]">Worth Answering</span>.
            </h2>

            <p className="font-instrument mt-6 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.7] text-[#4A5568] max-w-[520px]">
              You run Google Ads and hold a few page one rankings across Collier County. Calls arrive, yet too many come from Miami, Tampa or the wrong practice area. The cause sits in targeting, tracking and follow up rather than in budget.
            </p>
          </div>

          {/* Right Column: 4 Problem Cards Stack with Timeline */}
          <div className="lg:col-span-7 xl:col-span-7">
            <div className="relative">
              <div
                className="absolute left-[7px] sm:left-[9px] top-6 bottom-6 w-[2px] bg-[#FF937B] pointer-events-none z-0"
                aria-hidden="true"
              />

              <div className="flex flex-col gap-6 sm:gap-7">
                {PROBLEMS.map((problem) => {
                  const Icon = problem.icon;
                  return (
                    <div
                      key={problem.step}
                      className="group relative flex items-start gap-3 sm:gap-6 lg:gap-8"
                    >
                      <div className="relative flex items-center shrink-0 z-10 w-12 sm:w-16 pt-6">
                        <div className="absolute left-[8px] sm:left-[10px] -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-[#FF5528]" />
                        <span className="font-mono text-[14px] sm:text-[17px] font-bold text-[#FF5528] ml-6 sm:ml-8 tracking-tight">
                          {problem.step}
                        </span>
                      </div>

                      <div className="flex-1 rounded-[22px] sm:rounded-[26px] border border-[#E5E9F2] bg-white p-6 sm:p-8 shadow-[0_4px_24px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FF5528]/40 hover:shadow-[0_12px_36px_rgba(15,23,42,0.08)]">
                        <div className="flex items-center gap-4 sm:gap-5 mb-4">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FFF2ED] text-[#FF5528] transition-transform duration-300 group-hover:scale-105">
                            <Icon className="h-7 w-7" />
                          </div>
                          <h3 className="font-playfair text-[18px] sm:text-[20px] md:text-[21px] font-bold leading-[1.3] text-[#0A192F] tracking-[-0.01em]">
                            {problem.title}
                          </h3>
                        </div>

                        <p className="font-instrument text-[14.5px] sm:text-[15.5px] leading-[1.7] text-[#4A5568]">
                          {problem.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
