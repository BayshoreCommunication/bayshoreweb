"use client";

import React, { useState } from "react";
import { FiArrowRight, FiMail } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqSectionProps {
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

  const col1 = faqs.filter((_, idx) => idx % 2 === 0);
  const col2 = faqs.filter((_, idx) => idx % 2 === 1);

  const renderFaqCard = (faq: FaqItem, idx: number) => {
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
        className={`rounded-2xl p-5 sm:p-6 transition-all duration-300 cursor-pointer border shadow-xs hover:shadow-lg ${isOpen
          ? "bg-white border-slate-300 text-[#0C1827] shadow-sm"
          : "bg-white border-slate-200/90 text-[#0C1827] hover:border-slate-300"
          }`}
      >
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-[16px] md:text-[18px] font-semibold tracking-tight leading-snug">
            {faq.question}
          </h3>
          <motion.span
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
            className={`shrink-0 ${isOpen ? "text-[#FE6F1F]" : "text-slate-400"}`}
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
              className="pt-3.5 border-t border-slate-100 text-[14px] md:text-[16px] font-normal text-[#0C1827] overflow-hidden"
            >
              {faq.answer}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 w-full max-w-full overflow-hidden  text-[#0C1827] font-sans">
      {/* Container width 1380px and px-8 */}
      <div className="mx-auto max-w-[1380px] px-8">

        {/* Section Header Top Area (Centered) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-[900px] mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-[28px] md:text-[46px] font-extrabold tracking-tight leading-[1.2] mb-4 text-[#0C1827]">
            {headlineMain}{" "}
            <span className="text-[#FE6F1F]">
              {headlineHighlight}
            </span>
          </h2>
          <p
            style={{ lineHeight: 1.55 }}
            className="text-[14px] md:text-[16px] font-normal text-[#0C1827] w-full"
          >
            {subtitle}
          </p>
        </motion.div>

        {/* FAQ Grid & Right Contact Card Layout */}
        <div className="flex flex-col lg:flex-row items-start gap-8 xl:gap-10">

          {/* FAQ Accordion Items (2 Independent Columns on desktop) */}
          <div className="flex-1 w-full">
            {/* Mobile View (Single Column) */}
            <div className="flex flex-col gap-4 md:hidden">
              {faqs.map((faq, idx) => renderFaqCard(faq, idx))}
            </div>

            {/* Desktop View (2 Independent Columns - Prevents row stretching) */}
            <div className="hidden md:grid md:grid-cols-2 gap-4 sm:gap-5 items-start">
              <div className="flex flex-col gap-4 sm:gap-5">
                {col1.map((faq, idx) => renderFaqCard(faq, idx * 2))}
              </div>
              <div className="flex flex-col gap-4 sm:gap-5">
                {col2.map((faq, idx) => renderFaqCard(faq, idx * 2 + 1))}
              </div>
            </div>
          </div>

          {/* Right Contact Card ("STILL HAVE A QUESTION?") */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-[320px] xl:w-[340px] shrink-0 rounded-[28px] p-12 sm:p-8 border-2 border-[#0066FF] flex flex-col justify-between items-start  shadow-xl text-center md:text-left bg-[#07192C] text-white"
          >
            <div>
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.22em] text-slate-300 mb-3">
                STILL HAVE A QUESTION?
              </span>

              <h3 className="text-2xl sm:text-[26px] font-extrabold leading-snug tracking-tight my-8 text-white">
                Tell Us What <br />
                You&apos;re <span className="text-[#FE6F1F]">Looking For.</span>
              </h3>

              <p className="text-[14px] md:text-[16px] text-slate-300 leading-relaxed mb-6 font-medium text-center md:text-left">
                Our team is here to help. Share a few details and we&apos;ll get back to you quickly.
              </p>
            </div>

            <div className="w-full">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={onContactClick}
                className="w-full py-3.5 px-6 bg-white hover:bg-slate-100 text-[#07192C] font-extrabold text-[14px] md:text-[20px] rounded-full flex items-center justify-center gap-2.5 transition-all shadow-md mb-4 cursor-pointer"
              >
                <FiMail size={20} />
                <span>Email Us</span>
              </motion.button>

              <a
                href="mailto:hello@bayshorevirtual.com"
                className="text-[14px] md:text-[20px] text-slate-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors font-medium"
              >
                <FiMail size={18} className="text-[#FE6F1F] " />
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