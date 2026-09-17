"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiPlay, FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

export interface ClientStoryItem {
  id: string;
  thumbnailPath?: string;
  videoUrl?: string;
  youtubeUrl?: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  companyName?: string;
  companyLogo?: string;
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

export function getYouTubeId(url?: string): string {
  if (!url) return "";
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|shorts\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  return match ? match[1] : (url.length === 11 ? url : "");
}

export function getYouTubeThumbnail(urlOrId?: string): string {
  const videoId = getYouTubeId(urlOrId);
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "";
}

export const DEFAULT_STORIES: ClientStoryItem[] = [
  {
    id: "cs-1",
    videoUrl: "https://www.youtube.com/watch?v=Q9tYmdgygaE",
    quote: '"Scared to hire an overseas VA for your firm?"',
    authorName: "David Carter",
    authorTitle: "Owner & Managing Attorney",
    companyName: "CARTER INJURY LAW",
    companyLogo: "/assets/client-logo/carter-injury-law.png",
  },
  {
    id: "cs-2",
    videoUrl: "https://www.youtube.com/watch?v=cAix3uYkvtY",
    quote: '"On the fence about hiring an overseas VA?"',
    authorName: "Hardam Tripathi",
    authorTitle: "Founder & Immigration Attorney",
    companyName: "TRIP LAW FIRM",
    companyLogo: "/assets/client-logo/trip-law.svg",
  },
  {
    id: "cs-3",
    videoUrl: "https://www.youtube.com/watch?v=J6_QZi5nXDI",
    quote: '"Worried about data security when hiring a VA?"',
    authorName: "Cynthia Waisman",
    authorTitle: "Tax Professional & Consultant",
    companyName: "APEX ADVISOR GROUP",
    companyLogo: "/assets/client-logo/cynthia.png",
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
  const [playingStoryId, setPlayingStoryId] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Automatic 3-second auto-loop slider (pauses if video is playing)
  React.useEffect(() => {
    if (playingStoryId) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScroll - 10) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: 380, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [playingStoryId, stories]);

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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16"
        >
          {/* Left Titles & Subtitle */}
          <div className="flex-1 max-w-full lg:max-w-4xl xl:max-w-5xl">
            <span
              className={`inline-block text-xl sm:text-2xl font-bold uppercase tracking-[0.25em] mb-4 sm:mb-5 font-playfair ${
                theme === "dark" ? "!text-slate-300" : "!text-[#556070]"
              }`}
            >
              {titleTag}
            </span>
            <h2
              className={`text-[36px] xs:text-[40px] sm:text-[48px] lg:text-[42px] xl:text-[46px] font-extrabold tracking-tight leading-[1.18] sm:leading-[1.2] mb-4 sm:mb-6 text-left !text-left font-playfair ${
                theme === "dark" ? "!text-white" : "!text-[#0C1827]"
              }`}
            >
              Don&apos;t Take Our Word for It. Hear It From{" "}
              <span className={theme === "dark" ? "!text-[#FF5500]" : "!text-[#FE6F1F]"}>
                {headlineHighlight}
              </span>
            </h2>
            <p
              style={{ lineHeight: 1.55 }}
              className={`text-xl md:text-2xl font-normal text-left !text-left w-full max-w-3xl xl:max-w-4xl font-instrument ${
                theme === "dark" ? "!text-slate-300" : "!text-[#0C1827]"
              }`}
            >
              {subtitle}
            </p>
          </div>

          {/* Right Side Accent Text & Navigation Arrows */}
          <div className="flex items-center gap-6 sm:gap-8 shrink-0 self-start lg:self-end">
            {/* Dark Vertical Line & Tagline */}
            <div
              className={`border-l-4 pl-4 flex flex-col font-extrabold text-lg sm:text-xl xl:text-2xl tracking-wider uppercase leading-snug sm:leading-normal font-playfair ${
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
        </motion.div>

        {/* Client Video Testimonial Cards Grid / Carousel */}
        <div
          ref={scrollContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 overflow-x-auto scrollbar-none py-6 sm:py-8 px-2 -my-4 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {stories.map((story, idx) => {
            const videoUrl = story.videoUrl || story.youtubeUrl;
            const videoId = getYouTubeId(videoUrl);
            const isShorts = videoUrl ? videoUrl.includes("/shorts/") : false;
            const thumbnailSrc =
              story.thumbnailPath && !story.thumbnailPath.includes("right.png") && !story.thumbnailPath.includes("talent")
                ? story.thumbnailPath
                : getYouTubeThumbnail(videoUrl || videoId);

            const isPlaying = playingStoryId === story.id;

            return (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ y: -4, scale: 1.01 }}
                className={`rounded-[28px] sm:rounded-[32px] overflow-hidden flex flex-col justify-between transition-all duration-300 group shadow-sm hover:shadow-lg cursor-pointer ${
                  theme === "dark"
                    ? "bg-[#0B1A2D] border-0 border-none !text-white shadow-xl shadow-black/40"
                    : "bg-white border border-slate-200/90 !text-[#0C1827]"
                }`}
              >
                <div>
                  {/* Video Box: Vertical 9:16 aspect ratio when Shorts, or Standard ratio when Landscape */}
                  <div
                    className={`relative w-full bg-slate-950 overflow-hidden transition-all duration-300 ${
                      isShorts ? "h-[380px] sm:h-[420px] lg:h-[450px]" : "h-[240px] sm:h-[270px]"
                    }`}
                  >

                    {isPlaying && videoId ? (
                      <div className="relative w-full h-full">
                        <iframe
                          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                          title={story.authorName || "Client Video"}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full border-0"
                        />
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setPlayingStoryId(null);
                          }}
                          aria-label="Close Video"
                          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/80 hover:bg-[#FE6F1F] text-white flex items-center justify-center transition-colors shadow-lg"
                        >
                          <FiX size={18} />
                        </button>
                      </div>
                    ) : (
                      <div
                        onClick={() => {
                          setPlayingStoryId(story.id);
                          if (onPlayVideo) onPlayVideo(story);
                        }}
                        className="relative w-full h-full cursor-pointer"
                      >
                        {/* YouTube Thumbnail Image */}
                        <Image
                          src={thumbnailSrc || "/assets/bayshore-solutions/home/right.png"}
                          alt={story.authorName}
                          fill
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/25 transition-opacity group-hover:bg-black/40" />

                        {/* Play Button Icon Overlay with Pulse Physics */}
                        <motion.div
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.9 }}
                          className="absolute inset-0 m-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#07192C]/85 group-hover:bg-[#FE6F1F] text-white flex items-center justify-center shadow-xl transition-all duration-300"
                        >
                          <FiPlay className="text-2xl sm:text-3xl ml-1 fill-current" />
                        </motion.div>
                      </div>
                    )}
                  </div>

                  {/* Card Quote Body */}
                  <div className="p-6 sm:p-7">
                    <p
                      className={`text-xl sm:text-2xl font-bold leading-relaxed sm:leading-[1.75] mb-6 font-instrument ${
                        theme === "dark" ? "!text-white" : "!text-[#0C1827]"
                      }`}
                    >
                      {story.quote}
                    </p>

                    {/* Footer: Author Info on Left & Website Logo on Right */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                      {/* Left: Author Name and Title */}
                      <div>
                        <h3
                          className={`text-lg sm:text-xl xl:text-[22px] font-extrabold tracking-tight mb-1 font-playfair ${
                            theme === "dark" ? "!text-white" : "!text-[#0C1827]"
                          }`}
                        >
                          {story.authorName}
                        </h3>
                        <p
                          className={`text-sm sm:text-base font-bold font-instrument ${
                            theme === "dark" ? "!text-slate-300" : "!text-[#556070]"
                          }`}
                        >
                          {story.authorTitle}
                        </p>
                      </div>

                      {/* Right: Website / Client Logo Image */}
                      <div className="relative h-10 w-28 sm:h-12 sm:w-36 shrink-0 flex items-center justify-end">
                        <Image
                          src={story.companyLogo || "/assets/bayshore-solutions/home/lopez.png"}
                          alt={story.companyName || "Client Logo"}
                          fill
                          className="object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClientStoriesSection;
