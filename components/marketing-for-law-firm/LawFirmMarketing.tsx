"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Consultaion from "../universal/Consultaion";

export default function LawFirmMarketing() {
  return (
    <div className="max-w-[1440px] mx-auto text-left px-4 py-10 space-y-10">
      {/* Intro */}
      <section className="space-y-6">
        <Image
          src="assets/marketing-for-law-firm/marketing.png"
          alt="Law Firm Marketing"
          width={1000}
          height={800}
          className="w-full h-auto rounded-lg"
        />
        <h1 className="text-[18px] md:text-[24px] font-bold">
          Marketing For Law Firm
        </h1>

        <p className="text-[14px] md:text-[18px] text-gray-800">
          Most law firms spend a fortune on ads and wonder why the phone still
          is not ringing consistently. The problem is not the budget. The
          problem is the strategy. Ads stop the moment you stop paying. Organic
          growth compounds. It builds a system that keeps producing new cases
          month after month.
        </p>

        <p className="text-[14px] md:text-[18px] text-gray-800">
          Bayshore Communication has helped more than 100 law firms across the
          U.S. build exactly that kind of system since 2016.
        </p>
      </section>

      {/* System Section */}
      <section className="space-y-6">
        <h2 className="text-[16px] md:text-[20px] font-semibold">
          Law Firm Marketing That Builds a System, Not Just a Campaign
        </h2>

        <p className="text-[14px] md:text-[18px] text-gray-800">
          Most marketing campaigns only work for a short time, but real law firm
          marketing builds a system that keeps bringing in new clients every
          month without starting over.
        </p>

        <h3 className="text-[16px] md:text-[20px] font-semibold">
          The Difference Between a Campaign and a System
        </h3>

        <p className="text-[14px] md:text-[18px] text-gray-800">
          A campaign has a start and end date. A system runs continuously and
          gets stronger over time.
        </p>

        {/* CTA BUTTON  */}
        <div className=" bg-[#F5F5F5] rounded-xl my-8">
          <Consultaion />
        </div>

        <h3 className="text-[16px] md:text-[20px] font-semibold">
          What a Growth System Looks Like
        </h3>

        <ul className="space-y-2 text-[14px] md:text-[18px] text-gray-800 list-disc pl-5">
          <li>SEO optimized website</li>
          <li>Content that builds authority</li>
          <li>Social media trust building</li>
          <li>Local SEO dominance</li>
          <li>Conversion tracking system</li>
        </ul>
      </section>

      {/* Legal Marketing */}
      <section className="space-y-6">
        <h2 className="text-[16px] md:text-[20px] font-semibold">
          Legal Marketing That Understands Client Behavior
        </h2>

        <p className="text-[14px] md:text-[18px] text-gray-800">
          Legal marketing is different. Clients are emotional, urgent, and
          driven by trust.
        </p>

        <h3 className="text-[16px] md:text-[20px] font-semibold">
          How Clients Choose Lawyers
        </h3>

        <p className="text-[14px] md:text-[18px] text-gray-800">
          They read content, check reviews, and evaluate credibility before
          calling.
        </p>

        <h3 className="text-[16px] md:text-[20px] font-semibold">
          Why Generic Marketing Fails
        </h3>

        <p className="text-[14px] md:text-[18px] text-gray-800">
          Law firms need authority-driven marketing, not generic strategies used
          for other industries.
        </p>
      </section>

      {/* Authority */}
      <section className="space-y-6">
        <h2 className="text-[16px] md:text-[20px] font-semibold">
          Attorney Marketing That Positions You as the Best Choice
        </h2>

        <p className="text-[14px] md:text-[18px] text-gray-800">
          Authority compounds over time. Strong positioning attracts better
          clients.
        </p>
      </section>

      {/* Agency */}
      <section className="space-y-6">
        <h2 className="text-[16px] md:text-[20px] font-semibold">
          What a Law Firm Marketing Agency Should Deliver
        </h2>

        <ul className="space-y-2 text-[14px] md:text-[18px] text-gray-800 list-disc pl-5">
          <li>Real client results</li>
          <li>Clear lead attribution</li>
          <li>Revenue-focused reporting</li>
          <li>Defined strategy</li>
          <li>Accountability</li>
        </ul>
      </section>
      {/* CTA BUTTON  */}
      <div className=" bg-[#F5F5F5] rounded-xl my-8">
        <Consultaion />
      </div>
      {/* Final */}
      <section className="space-y-6">
        <h2 className="text-[16px] md:text-[20px] font-semibold">
          Marketing That Works While You Work
        </h2>

        <p className="text-[14px] md:text-[18px] text-gray-800">
          A strong marketing system runs in the background and consistently
          generates new leads.
        </p>
      </section>
    </div>
  );
}
