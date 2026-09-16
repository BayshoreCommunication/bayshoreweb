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
import { motion } from "framer-motion";

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

  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebookF,
      href: "https://facebook.com/bayshorecommunication",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "https://instagram.com/bayshorecommunication",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      href: "https://linkedin.com/company/bayshore-communication",
    },
    {
      name: "X (Twitter)",
      icon: FaXTwitter,
      href: "https://x.com/BayshoreCom",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      href: "https://www.youtube.com/@bayshorecommunication",
    },
  ];

  return (
    <footer
      className={`w-full max-w-full border-t transition-colors duration-300 ${
        theme === "dark"
          ? "bg-[#07192C] text-white border-slate-800"
          : "bg-[#F8F9FA] text-[#0C1827] border-slate-200/90"
      }`}
    >
      <div className="container mx-auto max-w-[1550px] px-6 sm:px-8 md:px-[30px] pt-12 pb-8">
        {/* Main Footer Layout: 3 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-start pb-12 w-full text-left !text-left">
          {/* Column 1: Brand Navbar Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col items-start text-left !text-left lg:pr-12 w-full"
          >
            <Link href={logoHref} className="inline-block mb-5 focus:outline-none text-left">
              <div className="relative h-[52px] w-[230px] sm:w-[260px] flex items-center justify-start">
                <Image
                  src={currentLogoPath}
                  alt="Bayshore Virtual Solutions Logo"
                  width={260}
                  height={60}
                  priority
                  className="object-contain h-auto max-h-[50px] w-auto transition-opacity duration-300"
                />
              </div>
            </Link>
            <p
              className={`text-base sm:text-lg leading-relaxed max-w-lg font-medium font-instrument text-left !text-left ${
                theme === "dark" ? "!text-slate-200" : "!text-[#556070]"
              }`}
            >
              A sister company of Bayshore Communication, providing managed virtual staffing solutions for modern businesses.
            </p>
          </motion.div>

          {/* Column 2: Important Links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-4 flex flex-col items-start text-left !text-left lg:border-l lg:border-slate-200 dark:lg:border-slate-800 lg:pl-12 w-full"
          >
            <h4
              className={`text-xl sm:text-2xl font-bold mb-5 tracking-tight font-playfair text-left !text-left ${
                theme === "dark" ? "!text-white" : "!text-[#0C1827]"
              }`}
            >
              Important Links
            </h4>
            <ul className="flex flex-col items-start text-left !text-left gap-3 text-base sm:text-lg font-semibold w-full font-instrument">
              <li className="w-full text-left !text-left">
                <Link
                  href="/bayshore-solutions"
                  className={`inline-block text-left transition-colors duration-200 ${
                    theme === "dark"
                      ? "!text-slate-200 hover:!text-[#FF5500]"
                      : "!text-[#556070] hover:!text-[#FE6F1F]"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li className="w-full text-left !text-left">
                <Link
                  href="/bayshore-solutions/solutions"
                  className={`inline-block text-left transition-colors duration-200 ${
                    theme === "dark"
                      ? "!text-slate-200 hover:!text-[#FF5500]"
                      : "!text-[#556070] hover:!text-[#FE6F1F]"
                  }`}
                >
                  Solutions
                </Link>
              </li>
              <li className="w-full text-left !text-left">
                <Link
                  href="/bayshore-solutions#how-it-works"
                  className={`inline-block text-left transition-colors duration-200 ${
                    theme === "dark"
                      ? "!text-slate-200 hover:!text-[#FF5500]"
                      : "!text-[#556070] hover:!text-[#FE6F1F]"
                  }`}
                >
                  How It Works
                </Link>
              </li>
              <li className="w-full text-left !text-left">
                <Link
                  href="/bayshore-solutions#our-talent"
                  className={`inline-block text-left transition-colors duration-200 ${
                    theme === "dark"
                      ? "!text-slate-200 hover:!text-[#FF5500]"
                      : "!text-[#556070] hover:!text-[#FE6F1F]"
                  }`}
                >
                  Our Talent
                </Link>
              </li>
              <li className="w-full text-left !text-left">
                <Link
                  href="/bayshore-solutions#about"
                  className={`inline-block text-left transition-colors duration-200 ${
                    theme === "dark"
                      ? "!text-slate-200 hover:!text-[#FF5500]"
                      : "!text-[#556070] hover:!text-[#FE6F1F]"
                  }`}
                >
                  About
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-3 flex flex-col items-start text-left !text-left lg:border-l lg:border-slate-200 dark:lg:border-slate-800 lg:pl-12 w-full"
          >
            <h4
              className={`text-xl sm:text-2xl font-bold mb-5 tracking-tight font-playfair text-left !text-left ${
                theme === "dark" ? "!text-white" : "!text-[#0C1827]"
              }`}
            >
              Social Links
            </h4>
            <div className="flex items-center justify-start gap-3.5 flex-wrap w-full">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.name}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm border ${
                      theme === "dark"
                        ? "bg-[#0B1A2D] border-slate-700 text-slate-200 hover:bg-[#FF5500] hover:border-[#FF5500] hover:text-white"
                        : "bg-white border-slate-200 text-[#556070] hover:bg-[#FE6F1F] hover:border-[#FE6F1F] hover:text-white"
                    }`}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Horizontal Divider Line */}
        <div
          className={`w-full h-[1px] mb-8 ${
            theme === "dark" ? "bg-slate-800" : "bg-slate-200/90"
          }`}
        />

        {/* Bottom Copyright & Policy Links Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 text-sm sm:text-base font-medium font-instrument">
          <p className={theme === "dark" ? "!text-slate-300" : "!text-[#556070]"}>
            © {currentYear} Bayshore Virtual Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-7 font-semibold">
            <Link
              href="/privacy-policy"
              className={`transition-colors duration-200 ${
                theme === "dark"
                  ? "!text-slate-300 hover:!text-[#FF5500]"
                  : "!text-[#556070] hover:!text-[#FE6F1F]"
              }`}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-conditions"
              className={`transition-colors duration-200 ${
                theme === "dark"
                  ? "!text-slate-300 hover:!text-[#FF5500]"
                  : "!text-[#556070] hover:!text-[#FE6F1F]"
              }`}
            >
              Terms & Conditions
            </Link>
            <Link
              href="/faq"
              className={`transition-colors duration-200 ${
                theme === "dark"
                  ? "!text-slate-300 hover:!text-[#FF5500]"
                  : "!text-[#556070] hover:!text-[#FE6F1F]"
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
