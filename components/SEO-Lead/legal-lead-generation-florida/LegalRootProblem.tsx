"use client";

import React from "react";
import Link from "next/link";
import { MapPinOff, Link2Off, PhoneOff, Flame, ArrowRight } from "lucide-react";

const PROBLEMS = [
  {
    step: "01",
    icon: MapPinOff,
    title: "Geo Targeting Leaks Outside Your Service Boundaries",
    description:
      "Unrefined ad accounts often display ads to searchers living outside your actual practice jurisdictions or court boundaries. Phone calls from counties where your attorneys do not practice inflate report numbers without increasing your retainer totals. Setting strict geographical boundaries ensures your advertising spend remains focused entirely on your true target territory. Tight geographic parameters keep ad budgets from draining on calls your firm cannot represent.",
  },
  {
    step: "02",
    icon: Link2Off,
    title: "Disconnected Attribution Between Traffic and Retainers",
    description:
      "Superficial reports focused on pageviews or raw clicks offer a false impression of marketing success. If the firm has no ability to track all of the search terms to booked appointments and signed fee agreements, they are not able to determine which channels are profitable. Closed-loop reporting makes it easy to identify which keywords and ads drive signed retainer contracts, so there's no assumption involved. Individual leads can be followed all the way through to show precise costs per case.",
  },
  {
    step: "03",
    icon: PhoneOff,
    title: "Intake Bottlenecks and Unqualified Enquiries",
    description:
      "Too many phone calls over the wrong type of legal issues or over trivial matters of property damage can be a burden on front desk staff. When the intake team spends hours handling junk calls, it can take longer to handle a viable injury or litigation opportunity. The prequalification tools on the front-end and the intake screening processes ensure your team stays on high-quality leads. Team burnout and potential lost revenue are avoided by using fast screening mechanisms.",
  },
  {
    step: "04",
    icon: Flame,
    title: "Volatile Map Pack and Local Organic Visibility",
    description:
      "Practices relying on unoptimized online listings remain susceptible to aggressive regional competitors. Positions in the local map pack fluctuate constantly unless supported by active profile management, localized content creation, and steady review acquisition. Establishing a strong local organic foundation secures your market position against competitor ad spending. Maintaining top positions requires ongoing review generation and accurate business citation data.",
  },
];

export default function LegalRootProblem() {
  return (
    <section className="relative w-full bg-white py-14 sm:py-20 lg:py-28 border-t border-[#EEF2F6]/80 overflow-hidden">
      <div className="mx-auto max-w-[1580px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-16">

          {/* ===================================================================
              LEFT COLUMN: HEADLINE & COPY FROM DOC
              =================================================================== */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-start lg:sticky lg:top-28">
            {/* Section Tag */}
            <div className="inline-flex items-center">
              <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
                <span className="font-playfair italic mr-1">II.</span> THE PROBLEM
              </span>
            </div>

            {/* Headline from Doc */}
            <h2 className="font-playfair mt-5 text-[32px] sm:text-[40px] md:text-[44px] lg:text-[46px] xl:text-[50px] leading-[1.14] tracking-[-0.02em] text-[#0A192F]">
              The Root Problem of{" "}
              <span className="italic font-normal text-[#FF5528]">Lead Quality</span>{" "}
              Over Raw Volume
            </h2>

            {/* Paragraph Text from Doc */}
            <p className="font-instrument mt-6 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.7] text-[#4A5568] max-w-[520px]">
              Law firms frequently waste marketing dollars on web traffic that fails to convert into paying clients. High lead volume delivers little value if your intake staff spends hours sifting through out-of-state inquiries or unviable claims.
            </p>

            {/* CTA Button */}
            <div className="mt-8 sm:mt-10">
              <Link
                href="/contact"
                className="group inline-flex h-[52px] items-center justify-center gap-2.5 rounded-[8px] bg-[#FF5528] px-7 text-[15px] sm:text-[16px] font-semibold text-white shadow-[0_8px_20px_rgba(255,85,40,0.28)] transition-all duration-300 hover:bg-[#e44317] hover:shadow-[0_12px_26px_rgba(255,85,40,0.38)] hover:-translate-y-0.5"
              >
                <span>Request For Proposal</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* ===================================================================
              RIGHT COLUMN: TIMELINE TRACK + 4 PROBLEMS CARDS
              =================================================================== */}
          <div className="lg:col-span-7 xl:col-span-7">
            <div className="relative">
              {/* Continuous vertical timeline connector line */}
              <div
                className="absolute left-[7px] sm:left-[9px] top-6 bottom-6 w-[2px] bg-[#FF937B] pointer-events-none z-0"
                aria-hidden="true"
              />

              {/* Stack of 4 cards with timeline dots and numbers */}
              <div className="flex flex-col gap-6 sm:gap-7">
                {PROBLEMS.map((problem) => {
                  const Icon = problem.icon;
                  return (
                    <div
                      key={problem.step}
                      className="group relative flex items-start gap-3 sm:gap-6 lg:gap-8"
                    >
                      {/* Timeline Dot + Number indicator */}
                      <div className="relative flex items-center shrink-0 z-10 w-12 sm:w-16 pt-6">
                        <div className="absolute left-[8px] sm:left-[10px] -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-[#FF5528]" />
                        <span className="font-mono text-[14px] sm:text-[17px] font-bold text-[#FF5528] ml-6 sm:ml-8 tracking-tight">
                          {problem.step}
                        </span>
                      </div>

                      {/* Card Box */}
                      <div className="flex-1 rounded-[22px] sm:rounded-[26px] border border-[#E5E9F2] bg-white p-6 sm:p-8 shadow-[0_4px_24px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FF5528]/40 hover:shadow-[0_12px_36px_rgba(15,23,42,0.08)]">
                        <div className="flex items-center gap-4 sm:gap-5 mb-4">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FFF2ED] text-[#FF5528] transition-transform duration-300 group-hover:scale-105">
                            <Icon className="h-7 w-7" />
                          </div>
                          <h3 className="font-playfair text-[19px] sm:text-[21px] md:text-[22px] font-bold leading-[1.3] text-[#0A192F] tracking-[-0.01em]">
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
