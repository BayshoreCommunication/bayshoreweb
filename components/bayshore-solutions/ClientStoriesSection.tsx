"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { FiPlay, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { TbScale } from "react-icons/tb";

export interface ClientStoryItem {
  id: string;
  thumbnailPath: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  companyName?: string;
  videoUrl?: string;
}

export interface ClientStoriesSectionProps {
  theme?: "light" | "dark";
  titleTag?: string;
  headlineMain?: string;
  headlineHighlight?: string;
  subtitle?: string;
  stories?: ClientStoryItem[];
  onPlayVideo?: (story: ClientStoryItem) => void;
}

export const DEFAULT_STORIES: ClientStoryItem[] = [
  {
    id: "cs-1",
    thumbnailPath: "/assets/bayshore-solutions/home/right.png",
    quote: '"Our virtual assistant has been a game changer for our firm."',
    authorName: "Lindsey Carter",
    authorTitle: "Owner/Attorney",
    companyName: "LOPEZ LAW GROUP",
  },
  {
    id: "cs-2",
    thumbnailPath: "/assets/bayshore-solutions/talent/talent-1.png",
    quote: '"Our virtual assistant has been a game changer for our firm."',
    authorName: "Lindsey Carter",
    authorTitle: "Owner/Attorney",
    companyName: "LOPEZ LAW GROUP",
  },
  {
    id: "cs-3",
    thumbnailPath: "/assets/bayshore-solutions/talent/talent-4.png",
    quote: '"Our virtual assistant has been a game changer for our firm."',
    authorName: "Lindsey Carter",
    authorTitle: "Owner/Attorney",
    companyName: "LOPEZ LAW GROUP",
  },
];

export const ClientStoriesSection: React.FC<ClientStoriesSectionProps> = ({
  theme = "light",
  titleTag = "CLIENT STORIES",
  headlineMain = "Don't Take Our Word for It. Hear It From",
  headlineHighlight = "Our Clients.",
  subtitle = "See how businesses are using Bayshore virtual talent to support their teams, handle day-to-day work, and grow without the overhead of traditional hiring.",
  stories = DEFAULT_STORIES,
  onPlayVideo,
}) => {
  const [activeStory, setActiveStory] = useState<ClientStoryItem | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className={`py-16 sm:py-20 lg:py-24 w-full max-w-full overflow-hidden transition-colors duration-300 ${
        theme === "dark" ? "bg-[#07192C] text-white" : "bg-[#F8F9FA] text-[#0C1827]"
      }`}
    >
      <div className="container mx-auto max-w-[1650px] px-6 sm:px-8 md:px-[30px]">
        {/* Section Header Top Area */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          {/* Left Titles & Subtitle */}
          <div className="flex-1 max-w-full lg:max-w-4xl xl:max-w-5xl">
            <span
              className={`inline-block text-sm sm:text-base font-extrabold uppercase tracking-[0.25em] mb-4 sm:mb-5 ${
                theme === "dark" ? "!text-slate-300" : "!text-[#556070]"
              }`}
            >
              {titleTag}
            </span>
            <h2
              className={`text-[42px] xs:text-[46px] sm:text-6xl lg:text-[44px] xl:text-[48px] font-extrabold tracking-tight leading-[1.12] sm:leading-[1.24] mb-4 sm:mb-6 text-left !text-left ${
                theme === "dark" ? "!text-white" : "!text-[#0C1827]"
              }`}
            >
              <span className="block mb-2 sm:mb-2.5">Don&apos;t Take Our Word for It.</span>
              <span className="block">
                Hear It From{" "}
                <span className={theme === "dark" ? "!text-[#FF5500]" : "!text-[#FE6F1F]"}>
                  {headlineHighlight}
                </span>
              </span>
            </h2>
            <p
              className={`text-lg sm:text-xl lg:text-[22px] font-medium leading-relaxed text-left !text-left w-full max-w-3xl xl:max-w-4xl ${
                theme === "dark" ? "!text-slate-200" : "!text-[#556070]"
              }`}
            >
              {subtitle}
            </p>
          </div>

          {/* Right Side Accent Text & Navigation Arrows */}
          <div className="flex items-center gap-6 sm:gap-8 shrink-0 self-start lg:self-end">
            {/* Dark Vertical Line & Tagline */}
            <div
              className={`border-l-4 pl-4 flex flex-col font-extrabold text-lg sm:text-xl xl:text-2xl tracking-wider uppercase leading-snug sm:leading-normal ${
                theme === "dark"
                  ? "border-[#FF5500] !text-white"
                  : "border-[#0C1827]"
              }`}
            >
              <span>REAL PEOPLE.</span>
              <span>REAL BUSINESSES.</span>
              <span>REAL RESULTS.</span>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => handleScroll("left")}
                aria-label="Scroll Left"
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border shadow-sm transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-[#0B1A2D] !text-white border-slate-700 hover:bg-[#FF5500]"
                    : "bg-white !text-[#0C1827] border-slate-200 hover:bg-[#07192C] hover:!text-white"
                }`}
              >
                <FiChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() => handleScroll("right")}
                aria-label="Scroll Right"
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border shadow-sm transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-[#0B1A2D] !text-white border-slate-700 hover:bg-[#FF5500]"
                    : "bg-white !text-[#0C1827] border-slate-200 hover:bg-[#07192C] hover:!text-white"
                }`}
              >
                <FiChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Client Video Testimonial Cards Grid / Carousel */}
        <div
          ref={scrollContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 overflow-x-auto scrollbar-none py-2 px-1 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {stories.map((story) => (
            <div
              key={story.id}
              className={`rounded-[28px] sm:rounded-[32px] overflow-hidden flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 shadow-sm hover:shadow-md ${
                theme === "dark"
                  ? "bg-[#0B1A2D] border-0 border-none !text-white shadow-xl shadow-black/40"
                  : "bg-white border border-slate-200/90 !text-[#0C1827]"
              }`}
            >
              <div>
                {/* Photo Thumbnail with Play Button Overlay */}
                <div className="relative w-full h-[220px] sm:h-[240px] bg-slate-200 dark:bg-slate-800 overflow-hidden group">
                  <Image
                    src={story.thumbnailPath}
                    alt={story.authorName}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-black/25 transition-opacity group-hover:bg-black/35" />

                  {/* Play Button Icon Overlay */}
                  <button
                    type="button"
                    onClick={() => {
                      setActiveStory(story);
                      if (onPlayVideo) onPlayVideo(story);
                    }}
                    aria-label={`Play Video for ${story.authorName}`}
                    className="absolute inset-0 m-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#07192C]/85 hover:bg-[#FE6F1F] text-white flex items-center justify-center shadow-lg transition-all duration-300 transform group-hover:scale-110 active:scale-95"
                  >
                    <FiPlay className="text-2xl sm:text-3xl ml-1 fill-current" />
                  </button>
                </div>

                {/* Card Quote Body */}
                <div className="p-6 sm:p-7">
                  <p
                    className={`text-lg sm:text-[21px] font-extrabold leading-relaxed sm:leading-[1.75] mb-6 font-sans ${
                      theme === "dark" ? "!text-white" : "!text-[#0C1827]"
                    }`}
                  >
                    {story.quote}
                  </p>

                  {/* Footer: Author Info & Company Logo Image */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div>
                      <h3
                        className={`text-lg sm:text-xl xl:text-[22px] font-extrabold tracking-tight mb-1 ${
                          theme === "dark" ? "!text-white" : "!text-[#0C1827]"
                        }`}
                      >
                        {story.authorName}
                      </h3>
                      <p
                        className={`text-sm sm:text-base font-bold ${
                          theme === "dark" ? "!text-slate-300" : "!text-[#556070]"
                        }`}
                      >
                        {story.authorTitle}
                      </p>
                    </div>

                    {/* Client Company Logo Image (lopez.png) */}
                    <div className="relative h-10 w-28 sm:h-12 sm:w-36 shrink-0 flex items-center justify-end">
                      <Image
                        src="/assets/bayshore-solutions/home/lopez.png"
                        alt={story.companyName || "Lopez Law Group"}
                        width={150}
                        height={50}
                        className="object-contain max-h-full w-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientStoriesSection;
