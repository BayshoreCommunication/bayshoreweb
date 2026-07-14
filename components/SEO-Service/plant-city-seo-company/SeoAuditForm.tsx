"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function SeoAuditForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      setLoading(true);

      await emailjs.sendForm(
        "service_izrihar",
        "template_f86dvnw",
        formRef.current,
        "IoN_BpNkuMImSvFFK",
      );

      setSuccess(true);
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
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
              <span className="text-[#FF6F00]">Plant City Florida</span> SEO
              Audit Report
            </h2>
          </div>

          <div>
            <p className="max-w-[420px] text-[16px] leading-8 text-black/80 md:text-[18px] font-bold">
              Find Out Your Ranking Performance
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
          {success ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#FF6F00]/10 text-[#FF6F00]">
                <span className="absolute inset-0 rounded-full bg-[#FF6F00]/5 animate-ping" />
                <svg
                  className="h-10 w-10 text-[#FF6F00]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">SEO Audit Requested!</h3>
              <p className="text-[16px] text-black/70 max-w-[420px] leading-relaxed mb-6">
                Success! Our SEO team is scanning your website. Your free comprehensive audit report will be generated and delivered to your inbox within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => setSuccess(false)}
                className="text-sm font-semibold text-[#FF6F00] hover:underline"
              >
                Request another audit
              </button>
            </div>
          ) : (
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
              value="Plant City Florida SEO Audit"
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
            
          </form>
          )}
        </div>
      </div>
    </section>
  );
}
