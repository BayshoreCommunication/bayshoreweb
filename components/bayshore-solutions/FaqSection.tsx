"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiArrowRight, FiChevronDown, FiMail } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqSectionProps {
  theme?: "light" | "dark";
  titleTag?: string;
  headlineMain?: string;
  headlineHighlight?: string;
  subtitle?: string;
  faqs?: FaqItem[];
  onContactClick?: () => void;
}

export const DEFAULT_FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "Do I have to sign a long-term contract?",
    answer: "No, we offer flexible month-to-month arrangements with no long-term lock-in contracts.",
  },
  {
    id: "faq-2",
    question: "How quickly can I get started?",
    answer: "We can match you with vetted candidates in as little as 48 hours to start onboarding immediately.",
  },
  {
    id: "faq-3",
    question: "What if my VA isn't the right fit?",
    answer: "We offer a zero-friction replacement guarantee. If a candidate isn't performing, we match you with a replacement right away.",
  },
  {
    id: "faq-4",
    question: "How do you handle security and data privacy?",
    answer: "All talent undergoes strict background checks, NDAs, and security compliance training to protect your data.",
  },
  {
    id: "faq-5",
    question: "How is Bayshore different from Upwork or Fiverr?",
    answer: "We provide fully managed staffing operations, dedicated account management, ongoing support, and pre-vetted professionals instead of unvetted freelancers.",
  },
  {
    id: "faq-6",
    question: "What hours do the virtual assistants work?",
    answer: "Our professionals align directly with U.S. time zones (EST, CST, PST) and your company's operational schedule.",
  },
];

export const FaqSection: React.FC<FaqSectionProps> = ({
  theme = "light",
  titleTag = "FAQ",
  headlineMain = "Questions Before You Get",
  headlineHighlight = "Started?",
  subtitle = "Everything You Need to Know Before Hiring.",
  faqs = DEFAULT_FAQS,
  onContactClick,
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      className={`py-16 sm:py-20 lg:py-24 w-full max-w-full overflow-hidden transition-colors duration-300 ${
        theme === "dark" ? "bg-[#07192C] text-white" : "bg-[#F8F9FA] text-[#0C1827]"
      }`}
    >
      <div className="container mx-auto max-w-[1650px] px-6 sm:px-8 md:px-[30px]">
        {/* Section Header Top Area */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16"
        >
          {/* Left Titles & Subtitle */}
          <div className="max-w-3xl">
            <span
              className={`inline-block text-xl sm:text-2xl font-bold uppercase tracking-[0.25em] mb-4 sm:mb-5 font-playfair ${
                theme === "dark" ? "!text-slate-300" : "!text-[#556070]"
              }`}
            >
              {titleTag}
            </span>
            <h2
              className={`text-[42px] xs:text-[46px] sm:text-6xl lg:text-[54px] xl:text-[60px] font-extrabold tracking-tight leading-[1.12] sm:leading-[1.2] mb-4 sm:mb-6 text-left !text-left font-playfair ${
                theme === "dark" ? "!text-white" : "!text-[#0C1827]"
              }`}
            >
              {headlineMain}{" "}
              <span className={theme === "dark" ? "!text-[#FF5500]" : "!text-[#FE6F1F]"}>
                {headlineHighlight}
              </span>
            </h2>
            <p
              style={{ lineHeight: 1.55 }}
              className={`text-xl md:text-2xl font-normal text-left !text-left w-full font-instrument ${
                theme === "dark" ? "!text-slate-300" : "!text-[#0C1827]"
              }`}
            >
              {subtitle}
            </p>
          </div>

          {/* Right Header Accent Graphic */}
          <div className="flex items-center gap-5 shrink-0 self-start lg:self-end">
            <div
              className={`border-l-2 pl-4 flex flex-col font-extrabold text-lg sm:text-xl tracking-wider uppercase leading-tight font-playfair ${
                theme === "dark"
                  ? "border-[#FF5500] !text-white"
                  : "border-[#FE6F1F] !text-[#0C1827]"
              }`}
            >
              <span>SKILLED PEOPLE.</span>
              <span className={theme === "dark" ? "!text-slate-200 font-bold" : "!text-[#556070] font-bold"}>
                STRONGER BUSINESSES.
              </span>
            </div>
          </div>
        </motion.div>

        {/* FAQ Grid & Right Contact Card Layout */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-8 xl:gap-10">
          {/* FAQ Accordion Items (2 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 flex-1 w-full">
            {faqs.map((faq, idx) => {
              const isOpen = expandedId === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 35, scale: 0.94 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08, type: "spring", stiffness: 100, damping: 14 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  onClick={() => toggleFaq(faq.id)}
                  className={`rounded-2xl p-5 sm:p-6 transition-all duration-300 cursor-pointer border shadow-xs hover:shadow-lg ${
                    theme === "dark"
                      ? isOpen
                        ? "bg-[#0B1A2D] border-slate-700 text-white"
                        : "bg-[#0B1A2D]/80 border-slate-800 text-white hover:border-slate-700"
                      : isOpen
                      ? "bg-white border-slate-300 text-[#0C1827] shadow-sm"
                      : "bg-white border-slate-200/90 text-[#0C1827] hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight leading-snug font-playfair">
                      {faq.question}
                    </h3>
                    <motion.span
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`shrink-0 ${
                        isOpen ? "text-[#FE6F1F] dark:text-[#FF5500]" : "text-slate-400"
                      }`}
                    >
                      <FiArrowRight size={18} />
                    </motion.span>
                  </div>

                  {/* Expandable Answer */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.p
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: "auto", marginTop: 14 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ lineHeight: 1.65 }}
                        className={`pt-3.5 border-t text-lg sm:text-xl font-normal font-instrument overflow-hidden ${
                          theme === "dark"
                            ? "border-slate-800 text-slate-300"
                            : "border-slate-100 !text-[#0C1827]"
                        }`}
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Right Contact Card ("STILL HAVE A QUESTION?") */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className={`w-full lg:w-[320px] xl:w-[340px] shrink-0 rounded-[28px] p-7 sm:p-8 border-2 border-[#0066FF] flex flex-col justify-between items-start text-left shadow-xl transition-all duration-300 ${
              theme === "dark" ? "bg-[#0B1A2D] text-white" : "bg-[#07192C] text-white"
            }`}
          >
            <div>
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-[0.22em] text-slate-300 mb-3 font-playfair">
                STILL HAVE A QUESTION?
              </span>

              <h3 className="text-2xl sm:text-[26px] font-extrabold leading-snug tracking-tight mb-3 text-white font-playfair">
                Tell Us What <br />
                You&apos;re{" "}
                <span className="text-[#FF5500]">Looking For.</span>
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-medium text-left font-instrument">
                Our team is here to help. Share a few details and we&apos;ll get back to you quickly.
              </p>
            </div>

            <div className="w-full">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={onContactClick}
                className="w-full py-3.5 px-6 bg-white hover:bg-slate-100 text-[#07192C] font-extrabold text-sm sm:text-base rounded-full flex items-center justify-center gap-2.5 transition-all shadow-md mb-4"
              >
                <FiMail size={18} />
                <span>Email Us</span>
              </motion.button>

              <a
                href="mailto:hello@bayshorevirtual.com"
                className="text-xs text-slate-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors font-medium"
              >
                <FiMail size={14} className="text-[#FF5500]" />
                <span>hello@bayshorevirtual.com</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
