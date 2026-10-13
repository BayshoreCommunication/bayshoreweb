"use client";

import React from "react";
import { PhoneCall, MessageSquare, Calendar, Users, Database } from "lucide-react";

// =============================================================================
// FAST FOLLOW UP DATA FROM GOOGLE DOC (100% UNCHANGED)
// =============================================================================
const FOLLOW_UP_PILLARS = [
  {
    step: "01",
    icon: PhoneCall,
    title: "Call Follow Up",
    description:
      "Aim for a first response inside five minutes during every business hour. Call routing, ring groups and after hours answering keep each inquiry from reaching voicemail. Call recordings then teach your team what wins bookings and what loses them.",
  },
  {
    step: "02",
    icon: MessageSquare,
    title: "SMS and Email Follow Up",
    description:
      "Text messages get read fast, so a short reply after each inquiry works well. Email carries the longer story, from pricing guides to what happens at visit one.",
  },
  {
    step: "03",
    icon: Calendar,
    title: "Appointment Booking",
    description:
      "Online scheduling links let customers claim a slot the moment they're interested. Automated reminders by text and email cut missed appointments before they happen. Confirmations include the address, parking notes and items to bring, building trust.",
  },
  {
    step: "04",
    icon: Users,
    title: "Lead Nurturing",
    description:
      "Some leads need weeks, especially for implants, estate plans and home purchases. Nurture sequences send answers, reviews and reminders until the lead books or declines.",
  },
  {
    step: "05",
    icon: Database,
    title: "CRM Lead Management",
    description:
      "One CRM record holds the source, conversations, appointments and outcome for every lead. Pipeline stages and owner assignments show your team where each lead stands today.",
  },
];

export default function FastFollowUp() {
  return (
    <section className="relative w-full bg-white py-14 sm:py-20 lg:py-28 border-t border-[#EEF2F6]/90 overflow-hidden">
      <div className="mx-auto max-w-[1580px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">

        {/* Section Header */}
        <div className="max-w-[900px] mb-12 sm:mb-16">
          <div className="inline-flex items-center">
            <span className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] text-[#FF5528] uppercase">
              <span className="font-playfair italic mr-1">&sect;</span> SPEED TO LEAD
            </span>
          </div>

          <h2 className="font-playfair mt-4 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0A192F]">
            Turn Local Leads Into Customers With Fast Follow Up
          </h2>

          <p className="font-instrument mt-4 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.68] text-[#556377] max-w-[760px]">
            Speed to lead often decides the job long before any ad headline gets credit. It&apos;s cheaper to fix a leaky follow up process than to buy more traffic.
          </p>
        </div>

        {/* 5 Follow Up Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {FOLLOW_UP_PILLARS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="group relative flex flex-col justify-between rounded-[22px] border border-[#E2E8F0] bg-white p-7 sm:p-8 shadow-[0_4px_20px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5528]/40 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-13 w-13 items-center justify-center rounded-full bg-[#FFF2ED] text-[#FF5528] transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="font-mono text-[13px] sm:text-[14px] font-bold text-[#FF5528] tracking-tight">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="font-playfair text-[20px] sm:text-[22px] font-bold text-[#0A192F] mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="font-instrument text-[14.5px] sm:text-[15px] leading-[1.72] text-[#4A5568]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
