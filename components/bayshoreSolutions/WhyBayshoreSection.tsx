'use client';

import React from 'react';
import Image from 'next/image';

export default function WhyBayshoreSection() {
    const features = [
        {
            title: 'No Contracts, No Ongoing Fees',
            description: 'Get started without long-term commitments or ongoing staffing fees.',
            image: '/assets/bayshoreSolutions/Contracts.png',
            link: '#'
        },
        {
            title: 'Dedicated Talents',
            description: 'Work with dedicated Virtual Assistants who are committed to your business and success.',
            image: '/assets/bayshoreSolutions/DedicatedTalents.png',
            link: '#'
        },
        {
            title: 'Interview Before You Hire',
            description: 'Meet and interview candidates to find the right fit for your team.',
            image: '/assets/bayshoreSolutions/Interview.png',
            link: '#'
        },
        {
            title: 'Pre-Vetted, Skilled Professionals',
            description: 'We pre-screen candidates for skills, experience, and English proficiency.',
            image: '/assets/bayshoreSolutions/SkilledProfessionals.png',
            link: '#'
        },
        {
            title: 'Hire Direct, No Middleman',
            description: 'Work directly with your Virtual Assistant. No middleman, no extra fees.',
            image: '/assets/bayshoreSolutions/NoMiddleman.png',
            link: '#'
        },
        {
            title: 'Interview in 48 Hours',
            description: 'Get a shortlist of qualified candidates and schedule interviews within 48 hours.',
            image: '/assets/bayshoreSolutions/Interviewin48.png',
            link: '#'
        }
    ];

    return (
        <section id="about" className="w-full bg-white py-[60px] lg:py-[80px] scroll-mt-20 md:scroll-mt-24">
            {/* Main Container with max-w-[1380px] and px-8 */}
            <div id="why-bayshore" className="max-w-[1380px] mx-auto px-8">

                {/* Section Header */}
                <div className="text-center mb-[16px] lg:mb-[45px]">
                    <h2 className=" font-bold text-[#0B192C] text-[28px] md:text-[46px]" >
                        Why Bayshore Virtual <span className="text-primary">Solutions</span>
                    </h2>
                </div>

                {/* 2x3 Grid Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] lg:gap-[24px]">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-[24px] p-[16px] sm:p-[36px] flex flex-row items-center gap-[24px] shadow-sm hover:shadow-md transition-shadow"
                        >
                            {/* Feature Illustration/Image */}
                            <div className="relative w-[100px] h-[80px] md:w-[140px] md:h-[120px] sm:w-[180px] sm:h-[140px] flex-shrink-0">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Feature Content */}
                            <div className="flex flex-col text-start  sm:text-left">
                                <h3 className="font-semibold md:font-bold text-[#0B192C] mb-[8px] text-[16px] md:text-[18px]" >
                                    {item.title}
                                </h3>
                                <p className="text-[#475569] text-[14px] leading-[1.6]" >
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}