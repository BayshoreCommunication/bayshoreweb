"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  FiArrowRight,
  FiArrowUp,
  FiMail,
  FiCheck,
  FiCopy,
} from "react-icons/fi";
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

  const [copiedEmail, setCopiedEmail] = useState(false);
  const contactEmail = "hello@bayshorevirtual.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      href: "https://linkedin.com/company/bayshore-communication",
      hoverBg: "hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white",
    },
    {
      name: "Facebook",
      icon: FaFacebookF,
      href: "https://facebook.com/bayshorecommunication",
      hoverBg: "hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "https://instagram.com/bayshorecommunication",
      hoverBg: "hover:bg-[#E4405F] hover:border-[#E4405F] hover:text-white",
    },
    {
      name: "X (Twitter)",
      icon: FaXTwitter,
      href: "https://x.com/BayshoreCom",
      hoverBg: "hover:bg-black hover:border-black dark:hover:bg-slate-700 dark:hover:border-slate-700 hover:text-white",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      href: "https://www.youtube.com/@bayshorecommunication",
      hoverBg: "hover:bg-[#FF0000] hover:border-[#FF0000] hover:text-white",
    },
  ];

  const solutionLinks = [
    { title: "Legal Support", link: "/bayshore-solutions/solutions" },
    { title: "Healthcare", link: "/bayshore-solutions/solutions" },
    { title: "Marketing", link: "/bayshore-solutions/solutions" },
    { title: "Real Estate", link: "/bayshore-solutions/solutions" },
    { title: "Finance & Admin", link: "/bayshore-solutions/solutions" },
    { title: "Technology", link: "/bayshore-solutions/solutions" },
  ];

  const companyLinks = [
    { title: "Home", link: "/bayshore-solutions" },
    { title: "Solutions Grid", link: "/bayshore-solutions/solutions" },
    { title: "How It Works", link: "/bayshore-solutions#how-it-works" },
    { title: "Our Talent Showcase", link: "/bayshore-solutions#our-talent" },
    { title: "About Managed Staffing", link: "/bayshore-solutions#about" },
    { title: "Get Started", link: "/bayshore-solutions/get-started" },
  ];

  return (
    <footer
      className={`relative w-full max-w-full overflow-hidden border-t transition-colors duration-300 font-instrument ${
        theme === "dark"
          ? "bg-[#061423] text-white border-slate-800/80"
          : "bg-[#F7F9FC] text-[#0C1827] border-slate-200/90"
      }`}
    >
      {/* Creative Top Accent Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#FF5500] to-transparent" />

      {/* Decorative ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF5500]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#0066FF]/5 rounded-full blur-3xl pointer-events-none translate-y-1/2" />

      <div className="container mx-auto max-w-[1550px] px-6 sm:px-8 md:px-[30px] pt-14 lg:pt-16 pb-10 relative z-10">
        
        {/* Main Footer Layout: 4 Well-Balanced Dynamic Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 w-full text-left">
          
          {/* Column 1: Brand Info & Live Status Badge (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="lg:col-span-4 flex flex-col items-start text-left pr-0 lg:pr-6"
          >
            <Link href={logoHref} className="inline-block mb-4 focus:outline-none group">
              <div className="relative h-[52px] w-[230px] sm:w-[260px] flex items-center justify-start">
                <Image
                  src={currentLogoPath}
                  alt="Bayshore Virtual Solutions Logo"
                  width={260}
                  height={60}
                  priority
                  className="object-contain h-auto max-h-[48px] w-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>

            <p
              className={`text-base leading-relaxed mb-5 font-medium ${
                theme === "dark" ? "text-slate-300" : "text-[#556070]"
              }`}
            >
              A sister company of <span className="font-bold text-[#FF5500]">Bayshore Communication</span>, <br/> providing managed virtual staffing solutions for <br/>modern businesses.
            </p>
          </motion.div>

          {/* Column 2: Solutions Links (3 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-3 flex flex-col items-start text-left"
          >
            <h4
              className={`text-2xl sm:text-[26px] font-extrabold mb-5 tracking-tight font-playfair ${
                theme === "dark" ? "text-white" : "text-[#0C1827]"
              }`}
            >
              Solutions
            </h4>
            <ul className="flex flex-col gap-3 text-base sm:text-lg font-semibold w-full">
              {solutionLinks.map((item) => (
                <li key={item.title} className="w-full">
                  <Link
                    href={item.link}
                    className={`group inline-flex items-center gap-2 transition-all duration-200 ${
                      theme === "dark"
                        ? "text-slate-300 hover:text-[#FF5500] hover:translate-x-1.5"
                        : "text-[#556070] hover:text-[#FF5500] hover:translate-x-1.5"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/bayshore-solutions/solutions"
                  className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-[#FF5500] hover:underline group"
                >
                  <span>Explore all 20+ roles</span>
                  <FiArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Company Links (2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-2 flex flex-col items-start text-left"
          >
            <h4
              className={`text-2xl sm:text-[26px] font-extrabold mb-5 tracking-tight font-playfair ${
                theme === "dark" ? "text-white" : "text-[#0C1827]"
              }`}
            >
              Company
            </h4>
            <ul className="flex flex-col gap-3 text-base sm:text-lg font-semibold w-full">
              {companyLinks.map((item) => (
                <li key={item.title} className="w-full">
                  <Link
                    href={item.link}
                    className={`group inline-flex items-center gap-2 transition-all duration-200 ${
                      theme === "dark"
                        ? "text-slate-300 hover:text-[#FF5500] hover:translate-x-1.5"
                        : "text-[#556070] hover:text-[#FF5500] hover:translate-x-1.5"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Social Links & Direct Inquiries Email Card (3 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-3 flex flex-col items-start text-left"
          >
            <h4
              className={`text-2xl sm:text-[26px] font-extrabold mb-5 tracking-tight font-playfair ${
                theme === "dark" ? "text-white" : "text-[#0C1827]"
              }`}
            >
              Connect With Us
            </h4>
            
            {/* Interactive Social Buttons with Brand Color Transitions */}
            <div className="flex items-center justify-start gap-2.5 flex-wrap w-full mb-5">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.name}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    title={item.name}
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm border ${
                      theme === "dark"
                        ? `bg-[#0B1A2D] border-slate-700 text-slate-300 ${item.hoverBg}`
                        : `bg-white border-slate-200 text-[#556070] ${item.hoverBg}`
                    }`}
                  >
                    <Icon size={17} />
                  </motion.a>
                );
              })}
            </div>

            {/* Interactive Click-to-Copy Email Card (Right Side) */}
            <div
              onClick={handleCopyEmail}
              title="Click to copy email address"
              className={`group flex items-center gap-3 px-4 py-2.5 rounded-xl border transition-all duration-300 cursor-pointer shadow-sm w-full ${
                theme === "dark"
                  ? "bg-[#0B1A2D] border-slate-700/80 hover:border-[#FF5500] hover:bg-slate-800"
                  : "bg-white border-slate-200 hover:border-[#FF5500] hover:bg-slate-50"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors shrink-0 ${
                  copiedEmail
                    ? "bg-emerald-500 text-white"
                    : theme === "dark"
                    ? "bg-slate-800 text-[#FF5500] group-hover:bg-[#FF5500] group-hover:text-white"
                    : "bg-orange-50 text-[#FF5500] group-hover:bg-[#FF5500] group-hover:text-white"
                }`}
              >
                {copiedEmail ? <FiCheck size={16} /> : <FiMail size={16} />}
              </div>
              <div className="flex flex-col truncate">
                <span className="text-xs font-semibold text-slate-400">Direct Inquiries</span>
                <span
                  className={`text-sm font-bold truncate transition-colors ${
                    copiedEmail
                      ? "text-emerald-500"
                      : theme === "dark"
                      ? "text-white group-hover:text-[#FF5500]"
                      : "text-[#0C1827] group-hover:text-[#FF5500]"
                  }`}
                >
                  {contactEmail}
                </span>
              </div>
              <span className="ml-auto text-xs font-medium px-2 py-0.5 rounded bg-slate-200/50 dark:bg-slate-800 text-slate-400 group-hover:text-[#FF5500] shrink-0">
                {copiedEmail ? "Copied!" : <FiCopy size={13} />}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Copyright, Policies & Interactive "Back to Top" Bar */}
        <div
          className={`w-full border-t pt-7 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-5 text-sm font-medium transition-colors ${
            theme === "dark"
              ? "border-slate-800 text-slate-400"
              : "border-slate-300 text-[#556070]"
          }`}
        >
          <p className={theme === "dark" ? "text-slate-400" : "text-[#556070]"}>
            © {currentYear} Bayshore Virtual Solutions. All rights reserved.
          </p>

          <div className="flex items-center gap-6 font-semibold flex-wrap justify-center">
            <Link
              href="/privacy-policy"
              className={`transition-colors duration-200 ${
                theme === "dark"
                  ? "text-slate-400 hover:text-[#FF5500]"
                  : "text-[#556070] hover:text-[#FF5500]"
              }`}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-conditions"
              className={`transition-colors duration-200 ${
                theme === "dark"
                  ? "text-slate-400 hover:text-[#FF5500]"
                  : "text-[#556070] hover:text-[#FF5500]"
              }`}
            >
              Terms & Conditions
            </Link>
            <Link
              href="/faq"
              className={`transition-colors duration-200 ${
                theme === "dark"
                  ? "text-slate-400 hover:text-[#FF5500]"
                  : "text-[#556070] hover:text-[#FF5500]"
              }`}
            >
              FAQ
            </Link>
          </div>

          {/* Interactive "Back to Top" Pill Button */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className={`group flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold transition-all duration-300 shadow-sm cursor-pointer ${
              theme === "dark"
                ? "bg-[#0B1A2D] border-slate-700 text-slate-300 hover:border-[#FF5500] hover:text-[#FF5500]"
                : "bg-white border-slate-200 text-[#556070] hover:border-[#FF5500] hover:text-[#FF5500]"
            }`}
          >
            <span>Back to top</span>
            <FiArrowUp
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </motion.button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
