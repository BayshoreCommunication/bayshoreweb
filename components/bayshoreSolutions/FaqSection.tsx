"use client";

import React, { useState, useEffect } from "react";
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
  {
    id: "faq-7",
    question: "How do I communicate and manage tasks with my VA?",
    answer: "You can collaborate seamlessly using your preferred tools like Slack, Teams, Zoom, or email, and manage workflows with your existing internal systems.",
  },
  {
    id: "faq-8",
    question: "Are there any hidden fees or setup charges?",
    answer: "No hidden charges whatsoever. Pricing starts at transparent rates from $3/hour with predictable billing and zero recruitment or setup fees.",
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

  // Close open active card on click outside
  useEffect(() => {
    if (!expandedId) return;
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-faq-card="true"]')) {
        setExpandedId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expandedId]);

  const col1 = faqs.filter((_, idx) => idx % 2 === 0);
  const col2 = faqs.filter((_, idx) => idx % 2 === 1);

  const renderFaqCard = (faq: FaqItem, isTopHalf: boolean) => {
    const isOpen = expandedId === faq.id;
    return (
      <div
        key={faq.id}
        data-faq-card="true"
        className={`w-full ${isOpen ? "relative z-50" : "relative z-1"}`}
        style={{ zIndex: isOpen ? 99 : 1 }}
      >
        {/* Base in-flow card: Height is 100% constant forever.
            It never changes height on open or close, eliminating any bottom section jumping/lafalafi. */}
        <div
          onClick={() => toggleFaq(faq.id)}
          className={`w-full rounded-[20px] px-6 py-4.5 sm:py-5 border bg-white cursor-pointer transition-all duration-200 ${
            isOpen
              ? "border-orange-300 shadow-sm"
              : "border-slate-200/90 text-[#0C1827] hover:border-slate-300 shadow-xs hover:shadow-sm"
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-[15px] sm:text-[16px] font-semibold tracking-tight leading-snug text-[#0C1827]">
              {faq.question}
            </h3>
            <motion.span
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
              className={`shrink-0 ${isOpen ? "text-[#FE6F1F]" : "text-slate-400"}`}
            >
              <FiArrowRight size={17} />
            </motion.span>
          </div>
        </div>

        {/* Active Floating Overlay Card - 100% out of flow at all times.
            - 1st 2 cards: top-0 (overflows downwards / nicher dike)
            - Last 2 cards: bottom-0 (overflows upwards / oporer dike)
            Because this floating card is strictly out of the document flow,
            closing it has ZERO impact on surrounding heights, completely stopping any bottom section flicker. */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: isTopHalf ? -6 : 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: isTopHalf ? -6 : 6 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={() => toggleFaq(faq.id)}
              className={`absolute ${
                isTopHalf ? "top-0" : "bottom-0"
              } left-0 w-full z-50 bg-white rounded-[20px] px-6 py-4.5 sm:py-5 border border-orange-300 shadow-[0_20px_50px_rgba(0,0,0,0.18)] ring-1 ring-orange-500/20 cursor-pointer`}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-[15px] sm:text-[16px] font-semibold tracking-tight leading-snug text-[#0C1827]">
                  {faq.question}
                </h3>
                <span className="shrink-0 text-[#FE6F1F] rotate-90 transition-transform">
                  <FiArrowRight size={17} />
                </span>
              </div>
              <p
                style={{ lineHeight: 1.65 }}
                className="pt-3.5 mt-3.5 border-t border-slate-100 text-[14px] sm:text-[15px] font-normal text-[#475569]"
              >
                {faq.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 w-full max-w-full relative z-10 text-[#0C1827] font-sans">
      {/* Container width 1380px and px-8 */}
      <div className="mx-auto max-w-[1380px] px-6 sm:px-8">

        {/* Section Header Top Area (Centered) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-[900px] mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-[28px] md:text-[46px] font-bold tracking-tight leading-[1.2] mb-4 text-[#0C1827]">
            {headlineMain}{" "}
            <span className="text-[#FE6F1F]">
              {headlineHighlight}
            </span>
          </h2>
          <p
            style={{ lineHeight: 1.55 }}
            className="text-[14px] md:text-[16px] font-normal text-[#475569] w-full"
          >
            {subtitle}
          </p>
        </motion.div>

        {/* FAQ Grid & Right Contact Card Layout (Centered, matching preview image) */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 xl:gap-8 max-w-[1340px] mx-auto w-full">

          {/* FAQ Accordion Items (2 Independent Columns of 4 Items) */}
          <div className="flex-1 w-full">
            {/* Mobile View (Single Column: first 4 downwards, last 4 upwards) */}
            <div className="flex flex-col gap-3.5 md:hidden">
              {faqs.map((faq, idx) => renderFaqCard(faq, idx < 4))}
            </div>

            {/* Desktop View (2 Independent Columns: 1st 2 downwards, last 2 upwards) */}
            <div className="hidden md:grid md:grid-cols-2 gap-3.5 sm:gap-4 items-start">
              <div className="flex flex-col gap-3.5 sm:gap-4">
                {col1.map((faq, idx) => renderFaqCard(faq, idx < 2))}
              </div>
              <div className="flex flex-col gap-3.5 sm:gap-4">
                {col2.map((faq, idx) => renderFaqCard(faq, idx < 2))}
              </div>
            </div>
          </div>

          {/* Right Contact Card ("Tell Us What You're Looking For.") - Stretched to match 4 cards height */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-[320px] xl:w-[340px] shrink-0 rounded-[28px] p-7 sm:p-8 border border-slate-700/50 flex flex-col justify-between items-start shadow-xl text-center md:text-left bg-[#07192C] text-white self-stretch"
          >
            <div>
              {/* Subtle orange accent bar matching screenshot */}
              <div className="w-8 h-[2px] bg-[#FE6F1F] mb-4 mx-auto md:mx-0" />

              <h3 className="text-2xl sm:text-[26px] font-bold leading-snug tracking-tight mb-4 sm:mb-5 text-white text-center md:text-left">
                Tell Us What <br />
                You&apos;re <span className="text-[#FE6F1F]">Looking For.</span>
              </h3>

              <p className="text-[13px] sm:text-[14px] text-slate-300 leading-relaxed mb-6 font-normal text-center md:text-left">
                Our team is here to help. Share a few details and we&apos;ll get back to you quickly.
              </p>
            </div>

            <div className="w-full">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                data-calendly="true"
                onClick={onContactClick}
                className="w-full py-3.5 px-6 bg-white hover:bg-slate-100 text-[#07192C] font-extrabold text-[15px] rounded-full flex items-center justify-center gap-2.5 transition-all shadow-md mb-4 cursor-pointer"
              >
                <FiMail size={18} />
                <span>Email Us</span>
              </motion.button>

              <a
                href="mailto:hello@bayshorevirtual.com"
                className="text-[13px] sm:text-[14px] text-slate-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors font-medium"
              >
                <FiMail size={16} className="text-[#FE6F1F]" />
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