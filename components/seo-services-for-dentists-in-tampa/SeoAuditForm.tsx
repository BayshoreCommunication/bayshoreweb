"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function SeoAuditForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      setLoading(true);
      setMessage("");

      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY",
      );

      setMessage("SEO Audit Request Submitted Successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = `
    h-[58px]
    w-full
    rounded-md
    border
    border-[#D8D8D8]
    bg-white

    px-5

    text-[15px]
    font-medium
    text-[#222]

    placeholder:text-[#8A8A8A]

    outline-none
    transition-all
    duration-300

    focus:border-[#FF6F00]
    focus:ring-0
  `;

  return (
    <section className="bg-[#FFFFFF] py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Header */}
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_420px] lg:gap-24">
          <div>
            <h2
              className="
                max-w-[660px]
                text-[38px]
                font-bold
                leading-[0.95]
                tracking-[-0.02em]
                md:text-[42px]
                
              "
            >
              Get Your Free{" "}
              <span className="text-[#FF6F00]">Tampa Dental</span> SEO
              Audit Report
            </h2>
          </div>

          <div>
            <p className="max-w-[420px] text-[16px] leading-8 text-black/80 md:text-[18px] font-bold">
              Stop guessing and start knowing exactly where your Tampa dental practice stands online.
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div
          className="
            mx-auto
            mt-12
            max-w-[1620px]

            rounded-[28px]
            border-t-4
            border-t-[#FF6F00]
            border
            border-[#FF6F00]/40

            bg-white

            px-6
            py-8

            shadow-[0_10px_40px_rgba(0,0,0,0.08)]

            md:px-14
            md:py-12
          "
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-7">
            {/* Names */}
            <div className="grid gap-4 md:grid-cols-2 md:gap-5">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                required
                className={inputClass}
              />

              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                required
                className={inputClass}
              />
            </div>

            {/* Website */}
            <input
              type="url"
              name="website"
              placeholder="Enter your website"
              required
              className={inputClass}
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Enter your email..."
              required
              className={inputClass}
            />

            <input
              type="hidden"
              name="service"
              value="Tampa Dental SEO Audit"
            />

            {/* Button */}
            <div className="flex justify-center pt-2 md:pt-4">
              <button
                type="submit"
                disabled={loading}
                className="
                  group
                  relative

                  h-[52px]
                  min-w-[260px]

                  overflow-hidden
                  rounded-md

                  bg-[#FF6F00]

                  px-8

                  text-[14px]
                  font-semibold
                  text-white

                  disabled:cursor-not-allowed
                  disabled:opacity-70
                "
              >
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 ease-out group-hover:translate-x-full" />

                <span className="relative z-10">
                  {loading ? "Submitting..." : "Get Free SEO Audit Report"}
                </span>
              </button>
            </div>

            {/* Message */}
            {message && (
              <div className="text-center">
                <p className="text-sm font-medium text-black/70">{message}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
