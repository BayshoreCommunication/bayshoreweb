import React from 'react';
import Image from 'next/image';

export default function TrustedWorldwide() {
    // Row 1 Images (1 to 8)
    // Row 1 Images (1 to 8)
    const rowOneImages = [
        "/assets/bayshoreSolutions/TrustedWorldwide/aci-logo.png",
        "/assets/bayshoreSolutions/TrustedWorldwide/aireserv.svg",
        "/assets/bayshoreSolutions/TrustedWorldwide/apex.svg",
        "/assets/bayshoreSolutions/TrustedWorldwide/bully-projects.png",
        "/assets/bayshoreSolutions/TrustedWorldwide/butterfly-foundation.svg",
        "/assets/bayshoreSolutions/TrustedWorldwide/butterfly.svg",
        "/assets/bayshoreSolutions/TrustedWorldwide/carter-injury-law.png",
        "/assets/bayshoreSolutions/TrustedWorldwide/cynthia.png",
    ];

    // Row 2 Images (9 to 16)
    const rowTwoImages = [
        "/assets/bayshoreSolutions/TrustedWorldwide/elite-spa.svg",
        "/assets/bayshoreSolutions/TrustedWorldwide/embark-logo.png",
        "/assets/bayshoreSolutions/TrustedWorldwide/essence-VFX.png",
        "/assets/bayshoreSolutions/TrustedWorldwide/fitly-logo.png",
        // "/assets/bayshoreSolutions/TrustedWorldwide/Golden-Wealth.png",
        "/assets/bayshoreSolutions/TrustedWorldwide/Hess@2x.png",
        "/assets/bayshoreSolutions/TrustedWorldwide/huraia.svg",
        "/assets/bayshoreSolutions/TrustedWorldwide/klothen.svg",
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
                <div className="relative w-full overflow-hidden mask-gradient py-4 flex flex-col gap-y-6 md:gap-y-10">

                    {/* Row 1 - Scrolling Left */}
                    <div className="flex w-max animate-marquee gap-8 md:gap-14 items-center">
                        {[...rowOneImages, ...rowOneImages, ...rowOneImages].map((imgSrc, index) => (
                            <div
                                key={`row1-${index}`}
                                className="flex items-center justify-center flex-shrink-0 w-[110px] md:w-[150px] lg:w-[170px] h-[45px] md:h-[60px] lg:h-[70px] px-2"
                            >
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <Image
                                        src={imgSrc}
                                        alt={`Company Logo ${index + 1}`}
                                        fill
                                        sizes="(max-width: 768px) 110px, (max-width: 1024px) 150px, 170px"
                                        className="object-contain max-h-[85%] max-w-[90%]"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Row 2 - Scrolling Right (Reverse Direction) */}
                    <div className="flex w-max animate-marquee-reverse gap-8 md:gap-14 items-center">
                        {[...rowTwoImages, ...rowTwoImages, ...rowTwoImages].map((imgSrc, index) => (
                            <div
                                key={`row2-${index}`}
                                className="flex items-center justify-center flex-shrink-0 w-[110px] md:w-[150px] lg:w-[170px] h-[45px] md:h-[60px] lg:h-[70px] px-2"
                            >
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <Image
                                        src={imgSrc}
                                        alt={`Company Logo ${index + 9}`}
                                        fill
                                        sizes="(max-width: 768px) 110px, (max-width: 1024px) 150px, 170px"
                                        className="object-contain max-h-[85%] max-w-[90%]"
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
