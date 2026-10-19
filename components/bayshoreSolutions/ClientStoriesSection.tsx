"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiPlay, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
  {
    id: "cs-4",
    videoUrl: "https://www.youtube.com/watch?v=dbCf1h9QixM",
    thumbnailPath: "/assets/bayshore-solutions/vongsyprasom-thumbnail.jpg",
    quote: '"You don\'t have to do it all yourself to run a successful law firm."',
    authorName: "Viengphone Vongsyprasom",
    authorTitle: "Founder & Immigration Attorney",
    companyName: "VONGSYPRASOM LAW, P.A.",
    companyLogo: "/assets/client-logo/vien.png",
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
  const swiperRef = useRef<SwiperType | null>(null);

  // Pause autoplay while video is playing
  useEffect(() => {
    if (!swiperRef.current) return;
    if (playingStoryId) {
      swiperRef.current.autoplay?.stop();
    } else {
      swiperRef.current.autoplay?.start();
    }
  }, [playingStoryId]);

  return (
    <section
      id="testimonials"
      className="scroll-mt-20 md:scroll-mt-24 py-16 sm:py-20 lg:py-24 w-full max-w-full overflow-hidden text-[#0C1827] font-sans"
    >
      {/* Container width 1380px and px-8 */}
      <div className="mx-auto max-w-[1380px] px-8" id="what-people-say">

        {/* Section Header Top Area (Centered) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-[900px] mx-auto mb-10 sm:mb-14"
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

        {/* Client Video Testimonial Cards Slider with Navigation Arrows */}
        <div className="relative group/slider px-2 sm:px-4">
          {/* Previous Button */}
          <button
            type="button"
            aria-label="Previous story"
            className="client-stories-prev absolute -left-2 sm:-left-4 lg:-left-6 top-[40%] -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200/90 text-[#0C1827] hover:bg-[#FE6F1F] hover:text-white hover:border-[#FE6F1F] flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer focus:outline-none"
          >
            <FiChevronLeft size={22} />
          </button>

          {/* Next Button */}
          <button
            type="button"
            aria-label="Next story"
            className="client-stories-next absolute -right-2 sm:-right-4 lg:-right-6 top-[40%] -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200/90 text-[#0C1827] hover:bg-[#FE6F1F] hover:text-white hover:border-[#FE6F1F] flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer focus:outline-none"
          >
            <FiChevronRight size={22} />
          </button>

          {/* Swiper Slider */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            speed={1200}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            rewind={true}
            navigation={{
              prevEl: ".client-stories-prev",
              nextEl: ".client-stories-next",
            }}
            pagination={{
              el: ".client-stories-pagination",
              clickable: true,
              bulletClass: "client-stories-bullet",
              bulletActiveClass: "client-stories-bullet-active",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.15,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="!py-4"
          >
            {stories.map((story) => {
              const videoUrl = story.videoUrl || story.youtubeUrl;
              const videoId = getYouTubeId(videoUrl);
              const isShorts = videoUrl ? videoUrl.includes("/shorts/") : false;
              const thumbnailSrc =
                story.thumbnailPath && !story.thumbnailPath.includes("right.png") && !story.thumbnailPath.includes("talent")
                  ? story.thumbnailPath
                  : getYouTubeThumbnail(videoUrl || videoId);

              const isPlaying = playingStoryId === story.id;

              return (
                <SwiperSlide key={story.id} className="!h-auto pb-4">
                  <div className="h-full rounded-[28px] sm:rounded-[32px] overflow-hidden flex flex-col justify-between transition-all duration-300 group shadow-sm hover:shadow-lg bg-white border border-slate-200/90 text-[#0C1827]">
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        {/* Video Box */}
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
                                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/80 hover:bg-[#FE6F1F] text-white flex items-center justify-center transition-colors shadow-lg cursor-pointer"
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
                        </div>
                      </div>

                      {/* Footer: Author Info & Logo */}
                      <div className="p-6 sm:p-7 pt-0">
                        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                          <div>
                            <h3 className="text-[18px] md:text-[20px] font-bold tracking-tight mb-1 text-[#0C1827]">
                              {story.authorName}
                            </h3>
                            <p className="text-[12px] md:text-[14px] font-normal text-[#556070]">
                              {story.authorTitle}
                            </p>
                          </div>

                          <div className="relative h-[40px] md:h-[48px] w-28 md:w-36 shrink-0 flex items-center justify-end">
                            <Image
                              src={story.companyLogo || "/assets/bayshore-solutions/home/lopez.png"}
                              alt={story.companyName || "Client Logo"}
                              fill
                              className="object-contain object-right transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Dots Pagination */}
          <div className="client-stories-pagination flex justify-center items-center gap-2 mt-6 sm:mt-8" />
        </div>
      </div>

      {/* Global Swiper Pagination Styles for Client Stories */}
      <style jsx global>{`
        .client-stories-bullet {
          width: 10px;
          height: 10px;
          border-radius: 9999px;
          background-color: #cbd5e1;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          display: inline-block;
        }
        .client-stories-bullet:hover {
          background-color: #94a3b8;
        }
        .client-stories-bullet-active {
          background-color: #fe6f1f !important;
          width: 28px !important;
          border-radius: 9999px !important;
        }
      `}</style>
    </section>
  );
};

export default ClientStoriesSection;