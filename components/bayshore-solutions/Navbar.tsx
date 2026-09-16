"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrFormClose } from "react-icons/gr";
import { FiSun, FiMoon, FiArrowRight } from "react-icons/fi";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { motion } from "framer-motion";

// Configurable dummy logo paths as requested by user.
// You can pass custom paths via props or change these default paths.
export const DUMMY_LOGO_PATHS = {
  light: "/assets/bayshore-solutions/logo-light.png",
  dark: "/assets/bayshore-solutions/logo-dark.png",
};

export interface NavItem {
  title: string;
  link: string;
}

export const DEFAULT_NAV_ITEMS: NavItem[] = [
  { title: "Home", link: "/bayshore-solutions" },
  { title: "Solutions", link: "/bayshore-solutions/solutions" },
  { title: "How It Works", link: "/bayshore-solutions#how-it-works" },
  { title: "Our Talent", link: "/bayshore-solutions#our-talent" },
  { title: "About", link: "/bayshore-solutions#about" },
];

export interface NavbarProps {
  logoLightPath?: string;
  logoDarkPath?: string;
  logoHref?: string;
  navItems?: NavItem[];
  defaultTheme?: "light" | "dark";
  onThemeChange?: (theme: "light" | "dark") => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  logoLightPath = DUMMY_LOGO_PATHS.light,
  logoDarkPath = DUMMY_LOGO_PATHS.dark,
  logoHref = "/bayshore-solutions",
  navItems = DEFAULT_NAV_ITEMS,
  defaultTheme = "light",
  onThemeChange,
}) => {
  const [theme, setTheme] = useState<"light" | "dark">(defaultTheme);
  const [activeTab, setActiveTab] = useState<string>("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    if (onThemeChange) {
      onThemeChange(nextTheme);
    }
  };

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const currentLogoPath = theme === "dark" ? logoDarkPath : logoLightPath;

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 w-full max-w-full transition-all duration-300 border-none ${
        theme === "dark"
          ? scrolled
            ? "bg-[#07192C]/95 backdrop-blur-md shadow-lg text-white"
            : "bg-[#07192C] text-white"
          : scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md text-[#07192C]"
          : "bg-white text-[#07192C]"
      }`}
    >
      {/* Container following main project width constraint */}
      <div className="container mx-auto max-w-[1650px] px-4 md:px-[30px]">
        <div className="flex items-center justify-between h-[80px] md:h-[90px]">
          {/* Logo Section */}
          <Link
            href={logoHref}
            className="flex items-center gap-3 focus:outline-none group"
            aria-label="Bayshore Virtual Solutions"
          >
            <div className="relative h-[48px] w-[210px] sm:w-[240px] flex items-center">
              <Image
                src={currentLogoPath}
                alt="Bayshore Virtual Solutions Logo"
                width={240}
                height={55}
                priority
                className="object-contain h-auto max-h-[40px] w-auto transition-opacity duration-300"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10 font-instrument">
            {navItems.map((item: NavItem) => {
              const isActive = activeTab === item.title;
              return (
                <Link
                  key={item.title}
                  href={item.link}
                  onClick={() => setActiveTab(item.title)}
                  className={`text-link group relative py-2 font-semibold transition-colors duration-200 focus:outline-none ${
                    theme === "dark"
                      ? isActive
                        ? "!text-[#FF5500]"
                        : "!text-white hover:!text-[#FF5500]"
                      : isActive
                      ? "!text-[#FF5500]"
                      : "!text-[#07192C] hover:!text-[#FF5500]"
                  }`}
                >
                  {item.title}
                  <span className="absolute bottom-0 left-0 h-[2.5px] bg-[#FF5500] rounded-full w-0 group-hover:w-full transition-all duration-300 ease-out" />
                </Link>
              );
            })}
          </nav>

          {/* Right Section: Light/Dark Theme Switcher & Find Talent Button */}
          <div className="hidden md:flex items-center gap-4 font-instrument">
            {/* Theme Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              aria-label="Toggle Light/Dark Theme"
              title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
              className={`p-2.5 rounded-full transition-all duration-300 border ${
                theme === "dark"
                  ? "bg-slate-800/80 text-amber-400 border-slate-700 hover:bg-slate-700"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100 shadow-sm"
              }`}
            >
              {theme === "dark" ? <FiSun size={19} /> : <FiMoon size={19} />}
            </motion.button>

            {/* CTA Button matching screenshots */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href=""
                className={`text-link group px-6 py-2.5 lg:px-7 lg:py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg ${
                  theme === "dark"
                    ? "bg-[#FF5500] !text-white hover:bg-[#e04a00] focus:ring-2 focus:ring-[#FF5500]/50"
                    : "bg-[#07192C] !text-white hover:bg-[#0f2844] focus:ring-2 focus:ring-[#07192C]/50"
                }`}
              >
                <span>Find Talent</span>
                <FiArrowRight
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  size={17}
                />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className={`p-2 rounded-full border ${
                theme === "dark"
                  ? "bg-slate-800 text-amber-400 border-slate-700"
                  : "bg-white text-slate-700 border-slate-200"
              }`}
            >
              {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            <button
              onClick={toggleDrawer}
              aria-label="Open Menu"
              className={`p-2 rounded-lg ${
                theme === "dark"
                  ? "text-white bg-slate-800"
                  : "text-[#07192C] bg-slate-200/60"
              }`}
            >
              <RxHamburgerMenu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <Drawer
        open={isDrawerOpen}
        onClose={toggleDrawer}
        direction="right"
        size="80vw"
        className="z-[9999]"
      >
        <div
          className={`h-full flex flex-col justify-between p-6 ${
            theme === "dark"
              ? "bg-[#07192C] text-white"
              : "bg-white text-[#07192C]"
          }`}
        >
          <div>
            {/* Drawer Header */}
            <div className="flex justify-between items-center pb-6 border-b border-slate-200 dark:border-slate-800">
              <Link
                href={logoHref}
                onClick={toggleDrawer}
                className="flex items-center focus:outline-none"
                aria-label="Bayshore Virtual Solutions"
              >
                <div className="relative h-[36px] w-[160px] flex items-center">
                  <Image
                    src={currentLogoPath}
                    alt="Bayshore Virtual Solutions Logo"
                    width={160}
                    height={36}
                    priority
                    className="object-contain h-auto max-h-[36px] w-auto transition-opacity duration-300"
                  />
                </div>
              </Link>
              <button
                onClick={toggleDrawer}
                aria-label="Close Menu"
                className="p-1 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800"
              >
                <GrFormClose size={28} />
              </button>
            </div>

            {/* Mobile Nav Items */}
            <ul className="flex flex-col gap-2 mt-6">
              {navItems.map((item: NavItem) => {
                const isActive = activeTab === item.title;
                return (
                  <li key={item.title}>
                    <Link
                      href={item.link}
                      onClick={() => {
                        setActiveTab(item.title);
                        toggleDrawer();
                      }}
                      className={`text-link block py-3 px-4 rounded-xl font-semibold transition-colors ${
                        isActive
                          ? "bg-[#FF5500]/10 !text-[#FF5500]"
                          : theme === "dark"
                          ? "!text-white hover:!text-[#FF5500] hover:bg-slate-800"
                          : "!text-[#07192C] hover:!text-[#FF5500] hover:bg-slate-100"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Drawer Footer Actions */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-4">
            <div className="flex items-center justify-between px-2">
              <span className="text-link !text-[1.4rem] font-medium text-slate-500 dark:text-slate-300">
                Switch Mode
              </span>
              <button
                onClick={toggleTheme}
                className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 border ${
                  theme === "dark"
                    ? "bg-slate-800 text-amber-400 border-slate-700"
                    : "bg-slate-100 text-slate-700 border-slate-300"
                }`}
              >
                {theme === "dark" ? (
                  <>
                    <FiSun size={14} /> Light Mode
                  </>
                ) : (
                  <>
                    <FiMoon size={14} /> Dark Mode
                  </>
                )}
              </button>
            </div>

            <Link
              href="/bayshore-solutions/get-started"
              onClick={toggleDrawer}
              className={`text-link w-full py-3.5 rounded-full font-bold text-center flex items-center justify-center gap-2 shadow-md ${
                theme === "dark"
                  ? "bg-[#FF5500] !text-white"
                  : "bg-[#07192C] !text-white"
              }`}
            >
              <span>Find Talent</span>
              <FiArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Drawer>
    </motion.header>
  );
};

export default Navbar;
