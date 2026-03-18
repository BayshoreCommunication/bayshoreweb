"use client";

import Image from "next/image";
import React from "react";

const Header = () => {
  const handleScroll = () => {
    const section = document.getElementById("schedule");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-full">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center py-4 px-4 gap-4">
        {/* Logo */}
        <Image
          src="/images/home/bayshore-logo.svg"
          alt="Bayshore Communication Logo"
          width={250}
          height={60}
          priority
          className="w-[120px] sm:w-[200px] md:w-[250px] h-auto"
        />

        {/* CTA Button */}
        <button
          onClick={handleScroll}
          className="bg-primary hover:bg-orange-500 transition-colors text-white px-4 py-3 sm:px-6 rounded-full shadow-md text-[14px] sm:text-[16px] whitespace-nowrap"
        >
          Schedule Call
        </button>
      </div>
    </header>
  );
};

export default Header;
