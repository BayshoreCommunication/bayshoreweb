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
        <section className="w-full bg-white py-[60px] lg:py-[80px]">
            {/* Main Container with max-w-[1380px] and px-8 */}
            <div className="max-w-[1380px] mx-auto px-8">

                {/* Section Header */}
                <div className="text-center mb-[50px] lg:mb-[60px]">
                    <h2 className="font-extrabold text-[#0B192C]" style={{ fontSize: '38px', lineHeight: '1.2' }}>
                        Why Bayshore Virtual <span className="text-primary">Solutions</span>
                    </h2>
                </div>

                {/* 2x3 Grid Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] lg:gap-[24px]">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-[24px] p-[28px] sm:p-[36px] flex flex-col sm:flex-row items-center gap-[24px] shadow-sm hover:shadow-md transition-shadow"
                        >
                            {/* Feature Illustration/Image */}
                            <div className="relative w-[140px] h-[120px] sm:w-[180px] sm:h-[140px] flex-shrink-0">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Feature Content */}
                            <div className="flex flex-col text-center sm:text-left">
                                <h3 className="font-bold text-[#0B192C] mb-[8px]" style={{ fontSize: '18px', lineHeight: '1.4' }}>
                                    {item.title}
                                </h3>
                                <p className="text-[#475569]" style={{ fontSize: '14px', lineHeight: '1.6' }}>
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