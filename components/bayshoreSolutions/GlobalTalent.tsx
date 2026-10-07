'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
// flag-icons styles are provided by the app's global stylesheet.

export default function GlobalTalent() {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const isHoveredRef = useRef(false);
    const isInteractingRef = useRef(false);
    const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const currentPosRef = useRef(0);

    const pauseAutoScroll = (duration = 2500) => {
        isInteractingRef.current = true;
        if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
        resumeTimeoutRef.current = setTimeout(() => {
            isInteractingRef.current = false;
        }, duration);
    };

    const handleScroll = () => {
        if (!scrollRef.current) return;
        const el = scrollRef.current;
        currentPosRef.current = el.scrollLeft;
        const singleSetWidth = el.scrollWidth / 4;
        if (singleSetWidth <= 0) return;

        // Wrap seamlessly if near outer boundaries
        if (el.scrollLeft >= 2.8 * singleSetWidth) {
            el.scrollLeft -= singleSetWidth;
            currentPosRef.current = el.scrollLeft;
        } else if (el.scrollLeft <= 0.4 * singleSetWidth) {
            el.scrollLeft += singleSetWidth;
            currentPosRef.current = el.scrollLeft;
        }
    };

    const scrollLeft = () => {
        if (!scrollRef.current) return;
        pauseAutoScroll(2000);
        const el = scrollRef.current;
        const singleSetWidth = el.scrollWidth / 4;
        if (singleSetWidth > 0 && el.scrollLeft <= 0.8 * singleSetWidth) {
            el.scrollLeft += singleSetWidth;
            currentPosRef.current = el.scrollLeft;
        }
        el.scrollBy({ left: -320, behavior: 'smooth' });
    };

    const scrollRight = () => {
        if (!scrollRef.current) return;
        pauseAutoScroll(2000);
        const el = scrollRef.current;
        const singleSetWidth = el.scrollWidth / 4;
        if (singleSetWidth > 0 && el.scrollLeft >= 2.5 * singleSetWidth) {
            el.scrollLeft -= singleSetWidth;
            currentPosRef.current = el.scrollLeft;
        }
        el.scrollBy({ left: 320, behavior: 'smooth' });
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const initScroll = () => {
            const singleSetWidth = el.scrollWidth / 4;
            if (singleSetWidth > 0) {
                el.scrollLeft = singleSetWidth * 1.5;
                currentPosRef.current = el.scrollLeft;
            }
        };

        initScroll();
        const timer = setTimeout(initScroll, 200);

        let animationFrameId: number;
        let lastTimestamp = performance.now();

        const autoScrollStep = (timestamp: number) => {
            const delta = timestamp - lastTimestamp;
            lastTimestamp = timestamp;

            if (scrollRef.current && !isHoveredRef.current && !isInteractingRef.current) {
                const elCurrent = scrollRef.current;
                const isMobile = window.innerWidth <= 768;
                // Smooth continuous scroll speed (px/sec)
                const speed = isMobile ? 22 : 28;
                currentPosRef.current += (speed * delta) / 1000;
                elCurrent.scrollLeft = currentPosRef.current;

                const singleSetWidth = elCurrent.scrollWidth / 4;
                if (singleSetWidth > 0 && elCurrent.scrollLeft >= 2.8 * singleSetWidth) {
                    elCurrent.scrollLeft -= singleSetWidth;
                    currentPosRef.current = elCurrent.scrollLeft;
                }
            }

            animationFrameId = requestAnimationFrame(autoScrollStep);
        };

        animationFrameId = requestAnimationFrame(autoScrollStep);

        return () => {
            cancelAnimationFrame(animationFrameId);
            clearTimeout(timer);
            if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
        };
    }, []);

    const talents = [
        {
            name: "Tahira Chowdhury",
            role: "Digital Marketing Executive",
            industry: "Digital Marketing",
            supportingSince: "2025",
            image: "/assets/bayshoreSolutions/globaltalent/TahiraChowdhury.png",
            flagCode: "th"
        },
        {
            name: "Tasnova Rashnath",
            role: "Business Development Associate",
            industry: "Digital Marketing",
            supportingSince: "2026",
            image: "/assets/bayshoreSolutions/globaltalent/Tasnova.png",
            flagCode: "in"
        },
        {
            name: "Shafikul Islam",
            role: "Digital Marketing Executive",
            industry: "Digital Marketing",
            supportingSince: "2026",
            image: "/assets/bayshoreSolutions/globaltalent/ShafikulIslam.png",
            flagCode: "pk"
        },
        {
            name: "Md. Abdur Raof Sahak",
            role: "Software Engineer",
            industry: "Software Development",
            supportingSince: "2024",
            image: "/assets/bayshoreSolutions/globaltalent/Sahak.png",
            flagCode: "bd"
        },
        {
            name: "Shamim Ahsan",
            role: "Jr. Software Engineer",
            industry: "Software Development",
            supportingSince: "2025",
            image: "/assets/bayshoreSolutions/globaltalent/ShamimAhsan.png",
            flagCode: "cn"
        },
        {
            name: "Faria Islam Laiba",
            role: "Software Quality Assurance Engineer",
            industry: "Software Development",
            supportingSince: "2025",
            image: "/assets/bayshoreSolutions/globaltalent/Laiba.png",
            flagCode: "bd"
        },
        {
            name: "Mohammad Sharian",
            role: "Jr. Graphic Designer",
            industry: "Digital Marketing",
            supportingSince: "2025",
            image: "/assets/bayshoreSolutions/globaltalent/Sharian.png",
            flagCode: "pk"
        },
        {
            name: "Abu Kawsar",
            role: "UI/UX Designer",
            industry: "Software Development",
            supportingSince: "2024",
            image: "/assets/bayshoreSolutions/globaltalent/AbuKawsar.png",
            flagCode: "my"
        },
        {
            name: "Md Jewel Rana",
            role: "Digital Marketing Manager (SEO)",
            industry: "Digital Marketing",
            supportingSince: "2026",
            image: "/assets/bayshoreSolutions/globaltalent/JewelRana.png",
            flagCode: "bd"
        },
        {
            name: "Md Eyamin Hossain",
            role: "Senior Graphic Designer",
            industry: "Digital Marketing",
            supportingSince: "2023",
            image: "/assets/bayshoreSolutions/globaltalent/Pritul.png",
            flagCode: "np"
        },
        {
            name: "Joyanto Ray Joy",
            role: "Graphic Designer",
            industry: "Digital Marketing",
            supportingSince: "2026",
            image: "/assets/bayshoreSolutions/globaltalent/JoyantoRoy.png",
            flagCode: "in"
        },
        {
            name: "MD. Sadit Ahasan",
            role: "Creative Director",
            industry: "Software Development",
            supportingSince: "2022",
            image: "/assets/bayshoreSolutions/globaltalent/SaditAhasan.png",
            flagCode: "bd"
        },
        {
            name: "Akib Rayhan",
            role: "Jr. Software Engineer",
            industry: "Software Development",
            supportingSince: "2025",
            image: "/assets/bayshoreSolutions/globaltalent/Akib.png",
            flagCode: "bd"
        },
        {
            name: "Rakibul Islam",
            role: "Senior Software Engineer",
            industry: "Software Development",
            supportingSince: "2022",
            image: "/assets/bayshoreSolutions/globaltalent/Rakibul.png",
            flagCode: "bd"
        },
        {
            name: "S. M. Faisal Abrar",
            role: "Director of Litigation",
            industry: "U.S. Immigration & Real Estate Law",
            supportingSince: "2026",
            image: "/assets/bayshoreSolutions/globaltalent/FaisalAbrar.png",
            flagCode: "bd"
        },
        {
            name: "Sakawat Hossain",
            role: "Director of Legal Operations",
            industry: "CRM Management & Strategy",
            supportingSince: "2023",
            image: "/assets/bayshoreSolutions/globaltalent/SakawatHossain.png",
            flagCode: "ph"
        },
        {
            name: "MD. Fahimur Rahman",
            role: "Client Communication Executive",
            industry: "Client Relationship Management",
            supportingSince: "September 2026",
            image: "/assets/bayshoreSolutions/globaltalent/FahimurRahman.png",
            flagCode: "my"
        },
        {
            name: "Md Alamin Arefen",
            role: "Client Communication & Senior Paralegal",
            industry: "US Immigration & Real Estate",
            supportingSince: "September 2025",
            image: "/assets/bayshoreSolutions/globaltalent/Arefin.png",
            flagCode: "lk"
        },
        {
            name: "Rafiul Islam Tamim",
            role: "Business Development Executive",
            industry: "CRM & Client Acquisition",
            supportingSince: "June 2026",
            image: "/assets/bayshoreSolutions/globaltalent/Tamim.png",
            flagCode: "bd"
        },
        {
            name: "Khandokar Yuvair Hasan",
            role: "Client Communication Executive",
            industry: "U.S. Personal Injury Law",
            supportingSince: "August 2026",
            image: "/assets/bayshoreSolutions/globaltalent/KhandokarYuvairHasan.png",
            flagCode: "in"
        },
        {
            name: "Minhazur Rahman Khan",
            role: "Client Communication Executive",
            industry: "Communication / Law firm",
            supportingSince: "2025",
            image: "/assets/bayshoreSolutions/globaltalent/MinhazurRahmanKhan.png",
            flagCode: "bd"
        }
    ];

    return (
        <section
            className="relative w-full pt-14 pb-24 sm:py-20 lg:py-24 min-h-[620px] sm:min-h-0 bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{ backgroundImage: `url('/assets/bayshoreSolutions/global-talent-bg.png')` }}
        >
            {/* Header Title Section */}
            <div className="text-center max-w-[1000px] mx-auto mb-6 sm:mb-12 lg:mb-16 px-4 sm:px-8 z-10 relative">
                <h2 className="font-bold text-[32px] sm:text-[38px] lg:text-[46px] text-[#0d1b2a] leading-tight tracking-tight">
                    All of your favorite companies and brands utilize{' '}
                    <span className="text-[#f97316]">global talent</span>, why don&apos;t you?
                </h2>
            </div>

            {/* Carousel Container with Navigation Arrows & Marquee */}
            <div className="relative w-full max-w-[1800px] mx-auto px-4 sm:px-12 flex items-center">

                {/* Left Arrow Button */}
                <button
                    onClick={scrollLeft}
                    className="absolute left-2 sm:left-4 z-20 bg-white/90 hover:bg-white text-[#0d1b2a] p-3 rounded-full shadow-lg border border-orange-200 transition-all transform hover:scale-110 flex items-center justify-center cursor-pointer"
                    aria-label="Scroll Left"
                >
                    <FiChevronLeft className="text-[24px]" />
                </button>

                {/* Marquee & Scrollable Wrapper */}
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    onMouseEnter={() => { isHoveredRef.current = true; }}
                    onMouseLeave={() => { isHoveredRef.current = false; }}
                    onTouchStart={() => pauseAutoScroll(3000)}
                    className="w-full overflow-x-auto flex py-4 sm:py-8 px-4 scrollbar-none mask-gradient cursor-grab active:cursor-grabbing"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    <div className="flex gap-6 whitespace-nowrap my-2 w-max select-none">
                        {/* Repeat talents 4 times for endless seamless bidirectional navigation */}
                        {[...talents, ...talents, ...talents, ...talents].map((talent, index) => (
                            <div
                                key={index}
                                className="w-[280px] flex-shrink-0 bg-white rounded-[20px] md:rounded-[24px] shadow-2xl border border-orange-100 flex flex-col overflow-hidden"
                            >
                                {/* Top Orange Section with Image & Real SVG Flag */}
                                <div className="relative w-full h-[235px] sm:h-[220px] bg-gradient-to-b from-[#ff9f5a] to-[#f05a00] flex items-end justify-center overflow-hidden">
                                    <div className="">
                                        <Image
                                            src={talent.image}
                                            alt={talent.name}
                                            fill
                                            // sizes="280px"
                                            className="object-contain object-bottom pointer-events-none"
                                        />
                                    </div>

                                    {/* Country Flag Badge Overlapping */}
                                    <div className="absolute right-4 bottom-4 w-[40px] h-[40px] bg-white rounded-full p-[3px] shadow-lg flex items-center justify-center z-10">
                                        <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                                            <Image
                                                src={`/assets/flags/${talent.flagCode}.svg`}
                                                alt={`${talent.flagCode} flag`}
                                                width={34}
                                                height={34}
                                                className="w-full h-full object-cover rounded-full"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom White Section with Details */}
                                <div className="p-6 px-8 flex flex-col justify-between flex-grow text-center">
                                    <div>
                                        <h3 className="font-bold text-[20px] text-[#0d1b2a] leading-snug whitespace-normal flex items-center justify-center">
                                            {talent.name}
                                        </h3>

                                        <p className="text-[16px] text-[#f97316] font-medium mt-1 whitespace-normal flex items-center justify-center">
                                            {talent.role}
                                        </p>
                                    </div>
                                    <div className="w-full h-[1px] bg-orange-100 my-4"></div>
                                    <div>
                                        <span className="text-[14px] font-medium text-gray-500 block mb-3">
                                            Supporting Since: {talent.supportingSince}
                                        </span>

                                        <div className="w-full bg-[#fff5ec] border border-orange-100 rounded-[16px] py-3 px-3 text-center whitespace-normal min-h-[55px] flex items-center justify-center">
                                            <span className="text-[14px] font-semibold text-[#0d1b2a] leading-tight block">
                                                Industry: {talent.industry}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Arrow Button */}
                <button
                    onClick={scrollRight}
                    className="absolute right-2 sm:right-4 z-20 bg-white/90 hover:bg-white text-[#0d1b2a] p-3 rounded-full shadow-lg border border-orange-200 transition-all transform hover:scale-110 flex items-center justify-center cursor-pointer"
                    aria-label="Scroll Right"
                >
                    <FiChevronRight className="text-[24px]" />
                </button>
            </div>

            {/* Custom CSS for Hide Scrollbar & Mask */}
            <style jsx global>{`
                .scrollbar-none::-webkit-scrollbar {
                    display: none;
                }
                
                /* CSS Mask for Fade-Out Blur Effect on Sides */
                .mask-gradient {
                    -webkit-mask-image: linear-gradient(
                        to right,
                        transparent,
                        black 10%,
                        black 90%,
                        transparent
                    );
                    mask-image: linear-gradient(
                        to right,
                        transparent,
                        black 10%,
                        black 90%,
                        transparent
                    );
                }
            `}</style>
        </section>
    );
}