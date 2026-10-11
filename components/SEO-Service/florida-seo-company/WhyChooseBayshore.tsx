"use client";

import Image from "next/image";
import {
  Briefcase,
  Target,
  BarChart,
  MapPin,
  Layers,
  FileCheck,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const features = [
  {
    Icon: Briefcase,
    title: "01 Experience Across Multiple Industries",
    description:
      "Our extensive client list spans complex fields like law, finance, e-commerce and travel. That broad range brings cross-industry lessons and innovative tactics that apply perfectly to your specific niche.",
  },
  {
    Icon: Target,
    title: "02 Strategies Built Around Business Objectives",
    description:
      "We plan everything around incoming calls, captured leads, and closed revenue. High search rankings only matter to us when they actively support and achieve your core financial goals.",
  },
  {
    Icon: BarChart,
    title: "03 Research Behind Every Major SEO Decision",
    description:
      "Hard data strictly guides our keyword choices, page rollout priorities, and ongoing content plans. By relying on analytics rather than assumptions, you can make better decisions and reduce wasted marketing spend.",
  },
  {
    Icon: MapPin,
    title: "04 Florida Market Knowledge With a Tampa Base",
    description:
      "Our central Tampa office keeps us incredibly close to the local markets we serve. We intimately understand how competition, customer behavior, and seasonal demand shift from city to city across the state.",
  },
  {
    Icon: Layers,
    title: "05 Multiple Search Disciplines Under One Team",
    description:
      "Technical optimization, content creation, local map management, link building, and AI search work all sit together under one roof. That seamless integration removes the communication gaps that happen between separate vendors.",
  },
  {
    Icon: FileCheck,
    title: "06 Reporting Focused on Business Outcomes",
    description:
      "Our monthly reports clearly show trackable leads, conversions, and business growth. You will never need to decode complicated marketing jargon to see the concrete progress your team is making.",
  },
];

export default function WhyChooseBayshore() {
  return (
    <section className="relative overflow-hidden bg-white py-6 md:pt-32 md:pb-0">
      {/* Background */}
      <div className="absolute inset-x-0 top-0 h-[660px] md:h-[760px]">
        <Image
          src="/seo-company-wesley-chapel/choose-bg.png"
          alt=""
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-white/85" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Top Content */}
        <div className="grid gap-10 lg:grid-cols-[560px_1fr] lg:items-center">
          {/* Left */}
          <div>
            <span className="text-xl font-bold uppercase tracking-wider text-[#FF6F00]">
              Why Florida Businesses
            </span>

            <h2 className="mt-4 text-[38px] font-bold leading-[1.05] text-[#081B4B] md:text-[52px]">
              Choose <span className="text-[#FF6F00]">Bayshore</span>
              <br />
              Communication
            </h2>

            <div className="mt-8 h-1 w-16 bg-[#FF6F00]" />

            <div className="mt-8 space-y-6 text-[15px] leading-8 text-black/75 md:text-[18px]">
              <p>
                The search for the right agency requires looking beyond basic promises. Clients trust us because we combine deep local market knowledge with a sharp focus on bottom-line results.
              </p>
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="mt-12 md:mt-16">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation
            loop
            spaceBetween={24}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="why-choose-slider"
          >
            {features.map((item, index) => {
              const Icon = item.Icon;

              return (
                <SwiperSlide key={index}>
                  <div
                    className="
                      group
                      h-full
                      min-h-[260px]
                      rounded-[20px]
                      border
                      border-black/5
                      bg-white
                      p-6
                      shadow-[0_8px_25px_rgba(0,0,0,0.04)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]
                    "
                  >
                    <div
                      className="
                        flex
                        h-[72px]
                        w-[72px]
                        items-center
                        justify-center
                        rounded-full
                        bg-[#FFF4EC]
                      "
                    >
                      <Icon
                        size={40}
                        strokeWidth={1.8}
                        className="
                          text-[#FF6F00]
                          transition-all
                          duration-500
                          group-hover:scale-110
                          group-hover:rotate-3
                        "
                      />
                    </div>

                    <h3 className="mt-5 text-[22px] font-bold leading-[1.3] text-[#081B4B]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-[15px] leading-7 text-black/70">
                      {item.description}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .why-choose-slider {
          padding-bottom: 60px;
        }

        .why-choose-slider .swiper-pagination {
          bottom: 0 !important;
        }

        .why-choose-slider .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #d9d9d9;
          opacity: 1;
        }

        .why-choose-slider .swiper-pagination-bullet-active {
          background: #ff6f00;
        }

        .why-choose-slider .swiper-button-next,
        .why-choose-slider .swiper-button-prev {
          width: 48px;
          height: 48px;
          border-radius: 999px;
          background: white;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          color: #081b4b;
        }

        .why-choose-slider .swiper-button-next:after,
        .why-choose-slider .swiper-button-prev:after {
          font-size: 16px;
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .why-choose-slider .swiper-button-next,
          .why-choose-slider .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
