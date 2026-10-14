"use client";

import React from "react";
import Link from "next/link";
import { Check, Target, BarChart3, Users, type LucideIcon } from "lucide-react";

interface PackageTier {
  id: string;
  name: string;
  audience: string;
  price: string;
  subtext: string;
  isPopular?: boolean;
  badge?: string;
  icon: LucideIcon;
  features: string[];
  ctaText: string;
}

const PACKAGES: PackageTier[] = [
  {
    id: "starter",
    name: "Starter (Single Channel)",
    audience: "Best for solo practitioners and small firms.",
    price: "$1,000 to $2,000",
    subtext: "monthly",
    icon: Target,
    features: [
      "One core channel, SEO or Google Ads.",
      "One primary practice area in Naples.",
      "Monthly performance reporting.",
    ],
    ctaText: "Get Started",
  },
  {
    id: "growth",
    name: "Growth (Multi Channel)",
    audience: "Best for growing Naples firms with two to five attorneys.",
    price: "$3,000 to $6,000",
    subtext: "monthly",
    isPopular: true,
    badge: "RECOMMENDED",
    icon: BarChart3,
    features: [
      "SEO, Google Ads and Local Services Ads.",
      "Conversion optimized landing pages.",
      "Call tracking and monthly strategy calls.",
    ],
    ctaText: "Scale Your Practice",
  },
  {
    id: "enterprise",
    name: "Enterprise Counsel Partner",
    audience: "Best for multi office firms across Collier and Lee counties.",
    price: "$6,000 to $10,000+",
    subtext: "monthly",
    icon: Users,
    features: [
      "All three pillars: Visibility, Conversion and Follow Through.",
      "Multi office and multi market management.",
      "Dedicated intake support and CRM integration.",
    ],
    ctaText: "Partner With Us",
  },
];

export default function NaplesPackages() {
  return (
    <section className="relative w-full bg-[#F8FAFC] py-14 sm:py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1580px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="max-w-[920px] mb-12 sm:mb-16">
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">XII.</span> INVESTMENT &amp; PACKAGES
            </span>
          </div>

          <h2 className="font-playfair mt-4 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0A192F]">
            Lead Generation Packages Built Around Your Growth Stage
          </h2>
        </div>

        {/* 3 Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {PACKAGES.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <div
                key={pkg.id}
                className={`group relative flex flex-col justify-between rounded-[24px] border p-7 sm:p-9 transition-all duration-300 hover:-translate-y-1 ${
                  pkg.isPopular
                    ? "bg-[#0A192F] text-white border-[#FF5528] shadow-[0_16px_40px_rgba(255,85,40,0.15)]"
                    : "bg-white text-[#0A192F] border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:border-[#FF5528]/40 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
                }`}
              >
                <div>
                  {/* Badge */}
                  {pkg.badge && (
                    <div className="absolute -top-3.5 right-6">
                      <span className="rounded-full bg-[#FF5528] px-3.5 py-1 font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.14em] text-white uppercase shadow-sm">
                        {pkg.badge}
                      </span>
                    </div>
                  )}

                  {/* Header: Icon & Category */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] sm:text-[12px] font-bold tracking-[0.14em] text-[#FF5528] uppercase">
                      STAGE {pkg.id.toUpperCase()}
                    </span>
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${
                        pkg.isPopular ? "bg-white/10 text-[#FF5528]" : "bg-[#FFF2ED] text-[#FF5528]"
                      }`}
                    >
                      <Icon size={20} />
                    </div>
                  </div>

                  {/* Package Title */}
                  <h3 className="font-playfair text-[21px] sm:text-[23px] font-bold leading-tight mb-2">
                    {pkg.name}
                  </h3>

                  {/* Audience */}
                  <p
                    className={`font-instrument text-[14px] mb-5 ${
                      pkg.isPopular ? "text-[#94A3B8]" : "text-[#64748B]"
                    }`}
                  >
                    {pkg.audience}
                  </p>

                  {/* Price */}
                  <div className="pb-5 mb-5 border-b border-current/10">
                    <p className="font-inter text-[26px] sm:text-[30px] font-bold tracking-tight">
                      {pkg.price}
                    </p>
                    <p
                      className={`font-mono text-[11px] tracking-wider mt-1 uppercase ${
                        pkg.isPopular ? "text-[#94A3B8]" : "text-[#64748B]"
                      }`}
                    >
                      {pkg.subtext}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3.5 mb-8">
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-[14px]">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FF5528]/20 text-[#FF5528] mt-0.5">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span className="font-instrument leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href="#contact"
                  className={`inline-flex h-[48px] w-full items-center justify-center rounded-[8px] text-[14.5px] font-semibold transition-all duration-300 ${
                    pkg.isPopular
                      ? "bg-[#FF5528] text-white hover:bg-[#e44317] shadow-[0_6px_20px_rgba(255,85,40,0.35)]"
                      : "bg-[#0A192F] text-white hover:bg-[#FF5528]"
                  }`}
                >
                  {pkg.ctaText}
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
