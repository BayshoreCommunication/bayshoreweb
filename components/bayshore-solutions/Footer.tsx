"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export interface FooterProps {
  theme?: "light" | "dark";
  logoLightPath?: string;
  logoDarkPath?: string;
  logoHref?: string;
}

export const Footer: React.FC<FooterProps> = ({
  theme = "light",
  logoLightPath = "/assets/bayshore-solutions/logo-light.png",
  logoDarkPath = "/assets/bayshore-solutions/logo-dark.png",
  logoHref = "/bayshore-solutions",
}) => {
  const currentYear = new Date().getFullYear();
  const currentLogoPath = theme === "dark" ? logoDarkPath : logoLightPath;

  return (
    <footer
      className={`w-full max-w-full border-t transition-colors duration-300 py-6 sm:py-8 ${
        theme === "dark"
          ? "bg-[#07192C] text-white border-slate-800"
          : "bg-[#F8F9FA] text-[#0C1827] border-slate-200/90"
      }`}
    >
      <div className="container mx-auto max-w-[1650px] px-6 sm:px-8 md:px-[30px] pt-10 pb-6">
        {/* Main Footer Layout: 3 Columns matching user design image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-start pb-14">
          {/* Column 1: Brand Navbar Logo & Description */}
          <div className="lg:col-span-5 flex flex-col items-start text-left lg:pr-12">
            <Link href={logoHref} className="inline-block mb-6 focus:outline-none">
              <div className="relative h-[56px] w-[240px] sm:w-[280px] flex items-center">
                <Image
                  src={currentLogoPath}
                  alt="Bayshore Virtual Solutions Logo"
                  width={280}
                  height={65}
                  priority
                  className="object-contain h-auto max-h-[52px] w-auto transition-opacity duration-300"
                />
              </div>
            </Link>
            <p
              className={`text-base sm:text-lg lg:text-[19px] leading-relaxed max-w-lg font-medium text-left ${
                theme === "dark" ? "!text-slate-200" : "!text-[#556070]"
              }`}
            >
              A sister company of Bayshore Communication, providing managed virtual staffing solutions for modern businesses.
            </p>
          </div>

          {/* Column 2: Important Links with Vertical Left Border */}
          <div className="lg:col-span-4 flex flex-col items-start text-left lg:border-l lg:border-slate-200 dark:lg:border-slate-800 lg:pl-12">
            <h4
              className={`text-xl sm:text-2xl lg:text-[25px] font-extrabold mb-6 tracking-tight ${
                theme === "dark" ? "!text-white" : "!text-[#0C1827]"
              }`}
            >
              Important Links
            </h4>
            <ul className="flex flex-col gap-3.5 text-base sm:text-lg lg:text-[19px] font-bold w-full">
              <li>
                <Link
                  href="/bayshore-solutions"
                  className={`transition-colors ${
                    theme === "dark"
                      ? "!text-white hover:!text-[#FF5500]"
                      : "!text-[#0C1827] hover:!text-[#FE6F1F]"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className={`transition-colors ${
                    theme === "dark"
                      ? "!text-white hover:!text-[#FF5500]"
                      : "!text-[#0C1827] hover:!text-[#FE6F1F]"
                  }`}
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className={`transition-colors ${
                    theme === "dark"
                      ? "!text-white hover:!text-[#FF5500]"
                      : "!text-[#0C1827] hover:!text-[#FE6F1F]"
                  }`}
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/talent"
                  className={`transition-colors ${
                    theme === "dark"
                      ? "!text-white hover:!text-[#FF5500]"
                      : "!text-[#0C1827] hover:!text-[#FE6F1F]"
                  }`}
                >
                  Our Talent
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`transition-colors ${
                    theme === "dark"
                      ? "!text-white hover:!text-[#FF5500]"
                      : "!text-[#0C1827] hover:!text-[#FE6F1F]"
                  }`}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Links with Vertical Left Border */}
          <div className="lg:col-span-3 flex flex-col items-start text-left lg:border-l lg:border-slate-200 dark:lg:border-slate-800 lg:pl-12">
            <h4
              className={`text-xl sm:text-2xl lg:text-[25px] font-extrabold mb-6 tracking-tight ${
                theme === "dark" ? "!text-white" : "!text-[#0C1827]"
              }`}
            >
              Social Links
            </h4>
            <div className="flex items-center gap-4">
              {/* Facebook */}
              <a
                href="https://facebook.com/bayshorecommunication"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={`w-12 h-12 sm:w-13 sm:h-13 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105 ${
                  theme === "dark"
                    ? "bg-[#FF5500] text-white hover:bg-[#e04a00]"
                    : "bg-[#FE6F1F] text-white hover:bg-[#d44e00]"
                }`}
              >
                <FaFacebookF size={20} />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/bayshorecommunication"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={`w-12 h-12 sm:w-13 sm:h-13 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105 ${
                  theme === "dark"
                    ? "bg-[#0B1A2D] border border-slate-700 text-white hover:bg-[#FF5500]"
                    : "bg-[#07192C] text-white hover:bg-[#FE6F1F]"
                }`}
              >
                <FaInstagram size={20} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/bayshore-communication"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={`w-12 h-12 sm:w-13 sm:h-13 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105 ${
                  theme === "dark"
                    ? "bg-[#0B1A2D] border border-slate-700 text-white hover:bg-[#FF5500]"
                    : "bg-[#07192C] text-white hover:bg-[#FE6F1F]"
                }`}
              >
                <FaLinkedinIn size={20} />
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com/BayshoreCom"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className={`w-12 h-12 sm:w-13 sm:h-13 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105 ${
                  theme === "dark"
                    ? "bg-[#0B1A2D] border border-slate-700 text-white hover:bg-[#FF5500]"
                    : "bg-[#07192C] text-white hover:bg-[#FE6F1F]"
                }`}
              >
                <FaXTwitter size={20} />
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className={`w-12 h-12 sm:w-13 sm:h-13 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105 ${
                  theme === "dark"
                    ? "bg-[#0B1A2D] border border-slate-700 text-white hover:bg-[#FF5500]"
                    : "bg-[#07192C] text-white hover:bg-[#FE6F1F]"
                }`}
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Divider Line */}
        <div
          className={`w-full h-[1px] mb-8 ${
            theme === "dark" ? "bg-slate-800" : "bg-slate-200/90"
          }`}
        />

        {/* Bottom Copyright & Policy Links Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 text-base sm:text-lg font-bold">
          <p className={theme === "dark" ? "!text-slate-300" : "!text-[#556070]"}>
            © {currentYear} Bayshore Virtual Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-8 font-extrabold">
            <Link
              href="/privacy-policy"
              className={`transition-colors ${
                theme === "dark"
                  ? "!text-white hover:!text-[#FF5500]"
                  : "!text-[#0C1827] hover:!text-[#FE6F1F]"
              }`}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-conditions"
              className={`transition-colors ${
                theme === "dark"
                  ? "!text-white hover:!text-[#FF5500]"
                  : "!text-[#0C1827] hover:!text-[#FE6F1F]"
              }`}
            >
              Terms & Conditions
            </Link>
            <Link
              href="/faq"
              className={`transition-colors ${
                theme === "dark"
                  ? "!text-white hover:!text-[#FF5500]"
                  : "!text-[#0C1827] hover:!text-[#FE6F1F]"
              }`}
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
