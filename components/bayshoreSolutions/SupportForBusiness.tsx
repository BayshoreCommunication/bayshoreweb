"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiPlay, FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

export interface SupportItem {
    id: string;
    name: string;
    role: string;
    bgColor: string; // jemon: "bg-[#d4d1f3]", "bg-[#f5e3d3]", "bg-[#f97316]", "bg-[#06b6d4]"
    image: string;
    videoUrl?: string;
}

export const DEFAULT_SUPPORTS: SupportItem[] = [
    {
        id: "s-1",
        name: "Sarah Jenkins",
        role: "Executive Assistant",
        bgColor: "bg-[#d4d1f3]",
        image: "/assets/bayshoreSolutions/support/person-1.png",
        videoUrl: "https://www.youtube.com/watch?v=Q9tYmdgygaE",
    },
    {
        id: "s-2",
        name: "Michael Ross",
        role: "Legal Assistant",
        bgColor: "bg-[#f5e3d3]",
        image: "/assets/bayshoreSolutions/support/person-2.png",
        videoUrl: "https://www.youtube.com/watch?v=cAix3uYkvtY",
    },
    {
        id: "s-3",
        name: "David Adebayo",
        role: "Operations Manager",
        bgColor: "bg-[#f97316]",
        image: "/assets/bayshoreSolutions/support/person-3.png",
        videoUrl: "https://www.youtube.com/watch?v=J6_QZi5nXDI",
    },
    {
        id: "s-4",
        name: "Carlos Mendez",
        role: "Client Relations",
        bgColor: "bg-[#06b6d4]",
        image: "/assets/bayshoreSolutions/support/person-4.png",
        videoUrl: "https://www.youtube.com/watch?v=Q9tYmdgygaE",
    },
    {
        id: "s-5",
        name: "Emma Watson",
        role: "Marketing Specialist",
        bgColor: "bg-[#d4d1f3]",
        image: "/assets/bayshoreSolutions/support/person-1.png",
        videoUrl: "https://www.youtube.com/watch?v=cAix3uYkvtY",
    },
    {
        id: "s-6",
        name: "Daniel Craig",
        role: "Financial Analyst",
        bgColor: "bg-[#f5e3d3]",
        image: "/assets/bayshoreSolutions/support/person-2.png",
        videoUrl: "https://www.youtube.com/watch?v=J6_QZi5nXDI",
    },
];

export interface SupportForBusinessProps {
    headlineMain?: string;
    headlineHighlight?: string;
    supports?: SupportItem[];
}

export function getYouTubeId(url?: string): string {
    if (!url) return "";
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|shorts\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    return match ? match[1] : (url.length === 11 ? url : "");
}

export default function SupportForBusiness({
    headlineMain = "Support for Every Part of",
    headlineHighlight = "Your Business",
    supports = DEFAULT_SUPPORTS,
}: SupportForBusinessProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [playingId, setPlayingId] = useState<string | null>(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
        }
    };

    return (
        <section className="py-16 sm:py-20 lg:py-24 w-full bg-[#F8F9FA] text-[#0C1827] overflow-hidden font-sans">
            {/* Container width 1380px and px-8 */}
            <div className="mx-auto max-w-[1380px] px-8">

                {/* Header Title Section (Centered) */}
                <div className="text-center max-w-[900px] mx-auto mb-16">
                    <h2 className="text-[28px] md:text-[46px] font-extrabold tracking-tight leading-[1.2] text-[#0C1827]">
                        {headlineMain}{" "}
                        <span className="text-[#FE6F1F]">
                            {headlineHighlight}
                        </span>
                    </h2>
                </div>

                {/* Carousel Container with Left/Right Arrows */}
                <div className="relative flex items-center">

                    {/* Left Arrow Button */}
                    <button
                        onClick={scrollLeft}
                        className="absolute left-[-20px] sm:left-[-30px] z-20 bg-white hover:bg-gray-50 text-[#0C1827] w-[45px] h-[45px] rounded-full shadow-lg border border-slate-200 flex items-center justify-center transition-all transform hover:scale-110 cursor-pointer"
                        aria-label="Scroll Left"
                    >
                        <FiChevronLeft className="text-[22px]" />
                    </button>

                    {/* Cards Scrollable Wrapper */}
                    <div
                        ref={scrollRef}
                        className="w-full overflow-x-auto flex gap-6 py-6 px-2 scrollbar-none scroll-smooth mask-gradient"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {supports.map((item) => {
                            const videoId = getYouTubeId(item.videoUrl);
                            const isPlaying = playingId === item.id;

                            return (
                                <motion.div
                                    key={item.id}
                                    whileHover={{ y: -6 }}
                                    className={`w-[260px] sm:w-[285px] h-[400px] sm:h-[430px] flex-shrink-0 rounded-[28px] overflow-hidden relative shadow-md flex flex-col justify-end ${item.bgColor}`}
                                >
                                    {isPlaying && videoId ? (
                                        <div className="absolute inset-0 w-full h-full bg-black z-20">
                                            <iframe
                                                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                                                title={item.name}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="w-full h-full border-0"
                                            />
                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setPlayingId(null);
                                                }}
                                                aria-label="Close Video"
                                                className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-black/80 hover:bg-[#FE6F1F] text-white flex items-center justify-center transition-colors shadow-lg cursor-pointer"
                                            >
                                                <FiX size={18} />
                                            </button>
                                        </div>
                                    ) : (
                                        <div
                                            onClick={() => setPlayingId(item.id)}
                                            className="absolute inset-0 w-full h-full cursor-pointer group"
                                        >
                                            {/* Person Image */}
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
                                            />

                                            {/* Subtle Dark Gradient Overlay at Bottom for Play Button visibility */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                                            {/* Play Button Icon in the middle of card */}
                                            <div className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-white/90 group-hover:bg-[#FE6F1F] text-[#0C1827] group-hover:text-white flex items-center justify-center shadow-xl transition-all duration-300 transform group-hover:scale-110">
                                                <FiPlay className="text-[22px] ml-1 fill-current" />
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Right Arrow Button */}
                    <button
                        onClick={scrollRight}
                        className="absolute right-[-20px] sm:right-[-30px] z-20 bg-white hover:bg-gray-50 text-[#0C1827] w-[45px] h-[45px] rounded-full shadow-lg border border-slate-200 flex items-center justify-center transition-all transform hover:scale-110 cursor-pointer"
                        aria-label="Scroll Right"
                    >
                        <FiChevronRight className="text-[22px]" />
                    </button>
                </div>

            </div>

            {/* Custom Styles for Hide Scrollbar & Side Fade Mask */}
            <style jsx global>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        
        .mask-gradient {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 5%,
            black 95%,
            transparent
          );
          mask-image: linear-gradient(
            to right,
            transparent,
            black 5%,
            black 95%,
            transparent
          );
        }
      `}</style>
        </section>
    );
}