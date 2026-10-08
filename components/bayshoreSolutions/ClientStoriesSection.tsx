"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiPlay, FiX } from "react-icons/fi";

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
    authorTitle: "Founder | Estate & Immigration Law Attorney",
    companyName: "APEX ADVISOR GROUP",
    companyLogo: "/assets/client-logo/cynthia.png",
  },
];

export const ClientStoriesSection: React.FC<ClientStoriesSectionProps> = ({
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

  return (
    <section className="py-16 sm:py-20 lg:py-24 w-full max-w-full overflow-hidden  text-[#0C1827] font-sans">
      {/* Container width 1380px and px-8 */}
      <div className="mx-auto max-w-[1380px] px-8">

        {/* Section Header Top Area (Centered) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-[900px] mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-[28px] md:text-[46px] font-bold tracking-tight leading-[1.2] mb-4 text-[#0C1827]">
            {headlineMain}{" "}
            <span className="text-[#FE6F1F]">
              {headlineHighlight}
            </span>
          </h2>
          <p
            style={{ lineHeight: 1.55 }}
            className="text-[14px] md:text-[16px] font-normal text-[#0C1827] w-full"
          >
            {subtitle}
          </p>
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
                className="rounded-[28px] sm:rounded-[32px] overflow-hidden flex flex-col justify-between transition-all duration-300 group shadow-sm hover:shadow-lg cursor-pointer bg-white border border-slate-200/90 text-[#0C1827]"
              >
                <div>
                  {/* Video Box */}
                  <div
                    className={`relative w-full bg-slate-950 overflow-hidden transition-all duration-300 ${isShorts ? "h-[380px] sm:h-[420px] lg:h-[450px]" : "h-[240px] sm:h-[270px]"
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
                        <Image
                          src={thumbnailSrc || "/assets/bayshore-solutions/home/right.png"}
                          alt={story.authorName}
                          fill
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/25 transition-opacity group-hover:bg-black/40" />

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
                    <p className="text-[14px] md:text-[16px] font-semibold leading-relaxed mb-6 text-[#0C1827]">
                      {story.quote}
                    </p>

                    {/* Footer: Author Info & Logo */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div>
                        <h3 className="text-[18px] md:text-[20px] font-bold tracking-tight mb-1 text-[#0C1827]">
                          {story.authorName}
                        </h3>
                        <p className="text-[12px] md:text-[14px] font-normal text-[#556070]">
                          {story.authorTitle}
                        </p>
                      </div>

                      <div className="relative h-[40px] md:h-[48px] w-28 md:w-60 shrink-0 flex items-center justify-end">
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