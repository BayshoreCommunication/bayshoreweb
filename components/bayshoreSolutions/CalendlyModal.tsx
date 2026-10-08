"use client";

import React, { useState, useEffect, useRef } from "react";
import { InlineWidget } from "react-calendly";
import { FiX, FiExternalLink, FiCalendar } from "react-icons/fi";

export const CALENDLY_URL = "https://calendly.com/bayshorec/new-meeting";

export interface CalendlyPrefill {
  name?: string;
  email?: string;
}

// Global helper to open Calendly modal from any button/handler
export const openCalendlyModal = (prefill?: CalendlyPrefill) => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("open-calendly", { detail: prefill || {} })
    );
  }
};

export function CalendlyModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [prefill, setPrefill] = useState<CalendlyPrefill>({});
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Listen to custom "open-calendly" events and clicks on Calendly links
  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<CalendlyPrefill>;
      setPrefill(customEvent.detail || {});
      setIsLoading(true);
      setIsOpen(true);
    };

    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a, button");
      if (!target) return;

      const href = target.getAttribute("href");
      const isCalendlyTrigger =
        target.getAttribute("data-calendly") === "true" ||
        (href && (href.includes("calendly.com/bayshorec/new-meeting") || href === "/find-talent"));

      if (isCalendlyTrigger) {
        // If user used Cmd/Ctrl or middle click to open new tab, preserve native browser behavior
        if (e.ctrlKey || e.metaKey || e.button === 1) return;

        e.preventDefault();
        setIsLoading(true);
        setIsOpen(true);
      }
    };

    window.addEventListener("open-calendly", handleOpen);
    document.addEventListener("click", handleGlobalClick);

    return () => {
      window.removeEventListener("open-calendly", handleOpen);
      document.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  // Guarantee spinner dismisses when Calendly iframe is ready
  useEffect(() => {
    if (!isOpen) return;
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    const handleMessage = (e: MessageEvent) => {
      if (typeof e.data === "object" && e.data?.event?.startsWith("calendly.")) {
        setIsLoading(false);
      }
    };
    window.addEventListener("message", handleMessage);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("message", handleMessage);
    };
  }, [isOpen]);

  // Lock body scroll and handle Escape key when modal is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen || !isMounted) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 md:p-8 lg:p-12 bg-[#07192C]/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        // Close if clicked on the outer backdrop
        if (modalContentRef.current && !modalContentRef.current.contains(e.target as Node)) {
          setIsOpen(false);
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="calendly-modal-title"
    >
      {/* Modal Dialog Card */}
      <div
        ref={modalContentRef}
        className="w-full max-w-[1140px] xl:max-w-[1180px] 2xl:max-w-[1240px] h-[92vh] sm:h-[88vh] max-h-[860px] bg-white rounded-[24px] sm:rounded-[32px] shadow-[0_25px_80px_rgba(0,0,0,0.4)] border border-orange-100/60 flex flex-col overflow-hidden relative animate-in zoom-in-95 duration-200"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 sm:px-9 py-4.5 sm:py-5 border-b border-gray-100 bg-gradient-to-r from-orange-50/60 via-white to-gray-50/40 flex-shrink-0">
          
          {/* Logo & Headline */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#ff8c42] to-[#f35b04] flex items-center justify-center text-white shadow-md flex-shrink-0">
              <FiCalendar className="text-[20px] sm:text-[22px]" />
            </div>
            <div>
              <h3 id="calendly-modal-title" className="font-extrabold text-[16px] sm:text-[20px] text-[#0d1b2a] leading-tight">
                Schedule a 1-on-1 Consultation
              </h3>
              <p className="text-[12px] sm:text-[13.5px] text-gray-500 font-medium hidden sm:block mt-0.5">
                Pick a time with our BayShore Virtual Solutions talent advisor.
              </p>
            </div>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2.5">
            {/* Open in new tab link */}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:px-3.5 sm:py-2 text-[12px] sm:text-[13px] font-semibold text-gray-600 hover:text-[#f35b04] hover:bg-orange-50 rounded-xl transition-colors flex items-center gap-1.5"
              title="Open Calendly in a new tab"
            >
              <span className="hidden md:inline">Open in new tab</span>
              <FiExternalLink className="text-[16px]" />
            </a>

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 hover:bg-orange-100/70 text-gray-600 hover:text-[#f35b04] flex items-center justify-center transition-all cursor-pointer focus:outline-none"
              aria-label="Close Modal"
            >
              <FiX className="text-[20px]" />
            </button>
          </div>
        </div>

        {/* Embedded Calendly Scheduler Container */}
        <div className="relative w-full flex-1 overflow-hidden bg-white">
          {isLoading && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-white">
              <div className="w-10 h-10 border-3 border-orange-200 border-t-[#f35b04] rounded-full animate-spin"></div>
              <span className="text-[13px] font-medium text-gray-500">Loading calendar...</span>
            </div>
          )}

          <div
            className="w-full h-full"
            onLoad={() => setIsLoading(false)}
          >
            <InlineWidget
              url={CALENDLY_URL}
              prefill={prefill}
              styles={{
                width: "100%",
                height: "100%",
                minHeight: "100%",
                border: "0",
              }}
              pageSettings={{
                backgroundColor: "ffffff",
                hideEventTypeDetails: false,
                hideLandingPageDetails: true,
                primaryColor: "f35b04",
                textColor: "0d1b2a",
              }}
            />
          </div>
        </div>

        {/* Footer info bar */}
        <div className="px-6 py-3 bg-gray-50/90 border-t border-gray-100 text-center flex-shrink-0">
          <p className="text-[12px] sm:text-[13px] text-gray-500 font-medium">
            🔒 30-minute free call • No obligations • We&apos;ll discuss role requirements, pricing &amp; onboarding.
          </p>
        </div>

      </div>
    </div>
  );
}

export default CalendlyModal;
