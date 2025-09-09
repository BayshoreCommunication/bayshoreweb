"use client";

import Image from "next/image";
import { useState } from "react";
import { IoStarOutline } from "react-icons/io5";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoId = "VIDEO_ID"; // Replace with your YouTube video ID

  return (
    <div className="bg-white font-sans min-h-screen px-8">
      {/* HEADER */}
      <header className="w-full border-b border-gray-100 shadow-sm">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center py-4 px-6">
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
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[100vh] flex flex-col justify-center">
        {/* Headline */}
        <h1 className="text-[36px]  lg:text-[42px] font-bold text-center leading-snug max-w-7xl mx-auto">
          Stop Relying on Referrals Start Getting{" "}
          <span className="bg-[#FE641A] text-white px-2 rounded">
            Consistent
          </span>{" "}
          Clients Online
        </h1>

        {/* Video Frame */}
        <div className="mt-10 flex justify-center">
          <div className="bg-[#0C1D3D] rounded-3xl relative overflow-hidden w-full max-w-7xl h-[380px] sm:h-[400px] flex items-center justify-center">
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
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-[#FE641A] hover:bg-orange-700 text-white px-10 py-4 rounded-full text-xl font-semibold shadow-xl transition">
            Schedule a Call Now <br />
            <span className="text-sm">
              Get Your Free 30-Minute Consultation
            </span>
          </button>
        </div>

        {/* Google Review */}
        <div className="flex flex-col items-center space-y-3 mt-10">
          <div className="flex -space-x-3">
            <Image
              src="image/hero/group.png"
              alt="alt"
              width={275}
              height={70}
            />
          </div>
          <p className="text-2xl text-gray-600">⭐⭐⭐⭐⭐ Google Review</p>
        </div>

        {/* Stats Section */}
        <div className="mt-12 bg-gradient-to-r from-white to-orange-50 shadow-md rounded-2xl flex flex-col sm:flex-row justify-around items-center py-6 px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2">
              <IoStarOutline></IoStarOutline>
              <h3 className="text-[#FE641A] text-2xl font-bold">150+</h3>
            </div>
            <p className="text-gray-600">Current Clients</p>
          </div>
          <div className="text-center sm:border-l sm:border-r sm:px-6">
            <h3 className="text-[#FE641A] text-2xl font-bold">25,000+</h3>
            <p className="text-gray-600">Completed Projects</p>
          </div>
          <div className="text-center">
            <h3 className="text-[#FE641A] text-2xl font-bold">90+</h3>
            <p className="text-gray-600">Bayshore Team-mates</p>
          </div>
        </div>
      </section>
    </div>
  );
}
