"use client";

import Image from "next/image";
import {
  ArrowRight,
  Award,
  ClipboardList,
  Layers3,
  MapPinned,
  SearchCheck,
  TrendingUp,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const features = [
  {
    Icon: Award,
    title: "Deep Florida market expertise",
    description:
      "We know every competitive local market such as Tampa, Orlando, Miami, Jacksonville.",
  },
  {
    Icon: TrendingUp,
    title: "Built plans specifically for small businesses",
    description:
      "Our every strategy fits your budget, competitive market and realistic growth goals.",
  },
  {
    Icon: SearchCheck,
    title: "No long-term contracts required",
    description:
      "We earn your trust every single month through measurable results.",
  },
  {
    Icon: MapPinned,
    title: "Full transparency in reporting",
    description:
      "You are informed exactly what actions we take, what rankings change and what revenue it produces.",
  },
  {
    Icon: Layers3,
    title: "Dedicated account manager",
    description:
      "One experienced expert manages your entire campaign from start to monthly review.",
  },
  {
    Icon: ClipboardList,
    title: "AI-ready SEO strategy included",
    description:
      "We boost your rankings for both Google search and AI visibility tools like ChatGPT, Grok, Gemini.",
  },
  {
    Icon: TrendingUp,
    title: "Proven track record in Florida",
    description:
      "Our clients dominate local search in some of the most competitive Florida markets today.",
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
        <div className="grid gap-10 lg:grid-cols-[520px_1fr] lg:items-center">
          {/* Left */}
          <div>
            <span className="text-xl font-bold uppercase tracking-wider text-[#FF6F00]">
              Why Florida Small Businesses
            </span>

            <h2 className="mt-4 text-[38px] font-bold leading-[1.05] text-[#081B4B] md:text-[52px]">
              Choose <span className="text-[#FF6F00]">Bayshore</span>
              <br />
              Communication
            </h2>

            <div className="mt-8 h-1 w-16 bg-[#FF6F00]" />

            <div className="mt-8 space-y-6 text-[15px] leading-8 text-black/75 md:text-[18px]">
              <p>
                There are hundreds of SEO agencies in Florida. Local businesses
                choose Bayshore Communication because we offer unique SEO
                services for small businesses in Florida every time for
                different niches.
              </p>

              <p>
                We bring local business expertise and AI search tools like
                ChatGPT, AI Overview, Perplexity leadership together in one
                place.
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
                      min-h-[240px]

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
                        size={42}
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

                    <h3 className="mt-5 text-[24px] font-bold leading-[1.3] text-[#081B4B]">
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
