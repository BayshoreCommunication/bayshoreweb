"use client";

import Image from "next/image";
import { useState } from "react";
import { IoStarOutline } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaPeopleLine } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "VIDEO_ID"; // Replace with your YouTube video ID

  // Variants for staggered animation
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-white min-h-screen px-8 mb-16">
      {/* HEADER */}
      <header className="w-full border-b border-gray-100 shadow-sm">
        <div className="max-w-[1640px] mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="image/hero/logo.png"
              alt="BayShore Logo"
              width={250}
              height={70}
              className="sm:w-[250px] sm:h-[70px] w-[180px] h-[50px] object-contain"
            />
          </div>

          {/* Call Button */}
          <button className="bg-[#FE641A] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition ">
            Schedule Call →
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <motion.section
        className="max-w-[10xl] mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[100vh] flex flex-col justify-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Headline */}
        <motion.h1
          className="text-[36px] lg:text-[54px] font-bold text-center leading-snug max-w-[1240px] mx-auto"
          variants={item}
        >
          Stop Relying on Referrals Start Getting{" "}
          <span className="bg-[#FE641A] text-white px-3 rounded">
            Consistent
          </span>{" "}
          Clients Online
        </motion.h1>

        {/* Video Frame */}
        <motion.div className="mt-10 flex justify-center" variants={item}>
          <div className="bg-[#0C1D3D] rounded-3xl relative overflow-hidden w-full max-w-[1000px] h-[380px] sm:h-[400px] flex items-center justify-center">
            {!isPlaying ? (
              // Thumbnail with play button
              <div
                className="absolute inset-0 w-full h-full cursor-pointer"
                onClick={() => setIsPlaying(true)}
              >
                <img
                  src="image/hero/thumbnail.png"
                  alt="Video Thumbnail"
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="z-20 w-20 h-20 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md shadow-lg hover:scale-105 transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-[#FE641A]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            ) : (
              // Video iframe
              <iframe
                className="w-full h-full rounded-3xl"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title="Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="mx-auto justify-center mt-20 border-[1px] border-[#FE641A] p-3 inline-block rounded-full transition-all duration-5000 hover:border-transparent"
          variants={item}
        >
          <button className="bg-[#FE641A] text-white rounded-full text-xl font-semibold shadow-xl transition-all duration-5000">
            <div className="px-12 py-6 flex flex-col items-center text-center">
              <span>Schedule a Call Now</span>
              <span className="text-sm font-normal">
                Claim Your $1000 Marketing Coupon Today!
              </span>
            </div>
          </button>
        </motion.div>

        {/* Google Review */}
        <motion.div
          className="flex flex-col items-center space-y-3 mt-10"
          variants={item}
        >
          <div className="flex -space-x-3">
            <Image
              src="image/hero/group.png"
              alt="alt"
              width={275}
              height={70}
            />
          </div>
          <p className="text-2xl text-gray-600">⭐⭐⭐⭐⭐ Google Review</p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="sm:w-[50%] mx-auto mt-12 bg-gradient-to-r from-cyan-200/20 via-white to-orange-50 p-[1px] rounded-2xl shadow-lg text-black border border-white/10"
          variants={item}
        >
          <div className="bg-white/10 backdrop-blur-md border border-gray/50 rounded-xl flex w-full flex-row justify-around items-center py-16 px-4">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2">
                <IoStarOutline className="text-[#FE641A]" />
                <h3 className="text-[#FE641A] text-[20px] font-bold">150+</h3>
              </div>
              <p className="text-black/80 text-[12px]">Current Clients</p>
            </div>

            <div className="text-center sm:border-l sm:border-r sm:border-white/10 sm:px-6">
              <div className="flex items-center justify-center space-x-2">
                <TfiMenuAlt className="text-[#FE641A]" />
                <h3 className="text-[#FE641A] text-[20px] font-bold">25,000+</h3>
              </div>
              <p className="text-black/80 text-[12px]">Completed Projects</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center space-x-2">
                <FaPeopleLine className="text-[#FE641A]" />
                <h3 className="text-[#FE641A] text-[20px] font-bold">90+</h3>
              </div>
              <p className="text-black/80 text-[12px]">Bayshore Team-mates</p>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
