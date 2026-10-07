import React from 'react';
import Image from 'next/image';

export default function TrustedWorldwide() {
    // Row 1 Images (1 to 8)
    const rowOneImages = [
        "/assets/bayshoreSolutions/TrustedWorldwide/1.png",
        "/assets/bayshoreSolutions/TrustedWorldwide/2.png",
        "/assets/bayshoreSolutions/TrustedWorldwide/3.png",
        "/assets/bayshoreSolutions/TrustedWorldwide/4.png",
        "/assets/bayshoreSolutions/TrustedWorldwide/5.png",
        "/assets/bayshoreSolutions/TrustedWorldwide/6.png",
        "/assets/bayshoreSolutions/TrustedWorldwide/7.png",
        "/assets/bayshoreSolutions/TrustedWorldwide/8.png",
    ];

    // Row 2 Images (9 to 16)
    const rowTwoImages = [
        "/assets/bayshoreSolutions/TrustedWorldwide/9.png",
        "/assets/bayshoreSolutions/TrustedWorldwide/10.png",
        "/assets/bayshoreSolutions/TrustedWorldwide/11.png",
        "/assets/bayshoreSolutions/TrustedWorldwide/12.png",
        "/assets/bayshoreSolutions/TrustedWorldwide/13.png",
        "/assets/bayshoreSolutions/TrustedWorldwide/14.png",
        "/assets/bayshoreSolutions/TrustedWorldwide/15.png",
        "/assets/bayshoreSolutions/TrustedWorldwide/16.png",
    ];

    return (
        <section className="w-full bg-[#f9fafb] py-20 overflow-hidden">
            {/* Main Container */}
            <div className="max-w-[1800px] mx-auto px-8">

                {/* Header Title Section */}
                <div className="text-center max-w-[900px] mx-auto mb-16">
                    <h2 className="font-bold text-[28px] md:text-[46px] text-[#0d1b2a] leading-tight tracking-tight">
                        Bayshore Solutions Trusted by The Best <br />
                        Companies <span className="text-[#f97316]">Worldwide</span>
                    </h2>
                </div>

                {/* Marquee Wrapper with Fade Mask */}
                <div className="relative w-full overflow-hidden mask-gradient py-4 flex flex-col gap-3 md:gap-4">

                    {/* Row 1 - Scrolling Left */}
                    <div className="flex w-max animate-marquee gap-4 md:gap-5 items-center">
                        {[...rowOneImages, ...rowOneImages, ...rowOneImages].map((imgSrc, index) => (
                            <div
                                key={`row1-${index}`}
                                className="flex items-center justify-center flex-shrink-0 h-[50px] md:h-[75px] lg:h-[85px]"
                            >
                                <div className="relative w-[140px] h-[36px] md:w-[260px] md:h-[65px] lg:w-[280px] lg:h-[75px]">
                                    <Image
                                        src={imgSrc}
                                        alt={`Company Logo ${index + 1}`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Row 2 - Scrolling Right (Reverse Direction) */}
                    <div className="flex w-max animate-marquee-reverse  items-center">
                        {[...rowTwoImages, ...rowTwoImages, ...rowTwoImages].map((imgSrc, index) => (
                            <div
                                key={`row2-${index}`}
                                className="flex items-center justify-center flex-shrink-0 h-[50px] md:h-[75px] lg:h-[85px]"
                            >
                                <div className="relative w-[140px] h-[36px] md:w-[260px] md:h-[65px] lg:w-[280px] lg:h-[75px]">
                                    <Image
                                        src={imgSrc}
                                        alt={`Company Logo ${index + 9}`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Tailwind Custom Animations and Side Fade Mask */}
            <style jsx global>{`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-33.333%); }
                }
                @keyframes marqueeReverse {
                    0% { transform: translateX(-33.333%); }
                    100% { transform: translateX(0%); }
                }

                .animate-marquee {
                    display: flex;
                    animation: marquee 35s linear infinite;
                }
                .animate-marquee-reverse {
                    display: flex;
                    animation: marqueeReverse 35s linear infinite;
                }

                .animate-marquee:hover,
                .animate-marquee-reverse:hover {
                    animation-play-state: paused;
                }

                /* Side Fade-Out Blur Mask */
                .mask-gradient {
                    -webkit-mask-image: linear-gradient(
                        to right,
                        transparent,
                        black 15%,
                        black 85%,
                        transparent
                    );
                    mask-image: linear-gradient(
                        to right,
                        transparent,
                        black 15%,
                        black 85%,
                        transparent
                    );
                }
            `}</style>
        </section>
    );
}
