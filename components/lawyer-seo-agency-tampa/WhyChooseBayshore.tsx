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
    title: "Verified Client Track Record",
    description:
      "We have served over 70 businesses across diverse industries with documented improvements in organic rankings, traffic volume, and inbound lead generation.",
  },
  {
    Icon: ClipboardList,
    title: "Research-Backed Strategy Development",
    description:
      "Every decision we make is grounded in keyword data, competitive analysis, technical audits, and live campaign performance rather than guesswork or generic templates.",
  },
  {
    Icon: Layers3,
    title: "Full-Service SEO Under One Team",
    description:
      "Technical work, content production, local optimization, link building, and AI-era AEO and GEO are all managed by a single coordinated team with one accountability structure.",
  },
  {
    Icon: MapPinned,
    title: "Genuine Tampa Florida Market Expertise",
    description:
      "We know which ZIP codes generate the highest search volume in Hillsborough County, which business categories face the steepest local competition, and how seasonal patterns affect search behavior here.",
  },
  {
    Icon: SearchCheck,
    title: "Strategies Built for Your Business Alone",
    description:
      "We do not apply a formula or repurpose a strategy from another client. Every campaign begins with a fresh analysis of your specific goals and market position.",
  },
  {
    Icon: ClipboardList,
    title: "No Hidden Fees or Vague Activity Reports",
    description:
      "Monthly reports detail which rankings changed, which traffic went up, and what actions our team took. Your invoice and reporting have no surprises.",
  },
  {
    Icon: TrendingUp,
    title: "Flexible Pricing That Delivers Real ROI",
    description:
      "Our package structures are designed to produce measurable returns at every budget level, not to lock businesses into spending more than their growth stage requires.",
  },
];

export default function WhyChooseBayshore() {
  return (
    <section className="relative overflow-hidden bg-white py-6 md:pt-32 md:pb-0">
      {/* Background */}
      <div className="absolute inset-x-0 top-0 h-[660px] md:h-[760px]">
        <Image
          src="/seo-company-wesley-chapel/why-choose-bg.png"
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
              Why Tampa Florida Businesses
            </span>

            <h2 className="mt-4 text-[38px] font-bold leading-[1.05] text-[#081B4B] md:text-[52px]">
              Choose <span className="text-[#FF6F00]">Bayshore</span>
              <br />
              Communication
            </h2>

            <div className="mt-8 h-1 w-16 bg-[#FF6F00]" />

            <div className="mt-8 space-y-6 text-[15px] leading-8 text-black/75 md:text-[18px]">
              <p>
                Bayshore Communication is not a general marketing shop that added SEO to a list of unrelated services. We are a dedicated digital growth lawyer seo agency tampa with a proven track record of producing measurable outcomes for businesses across Tampa Florida since 2016.
              </p>
            </div>

            <button
              className="
                group
                relative
                mt-10
                flex
                h-[52px]
                items-center
                overflow-hidden
                rounded-md
                bg-[#FF6F00]
                px-8
                font-semibold
                text-white
              "
            >
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 ease-out group-hover:translate-x-full" />

              <span className="relative flex items-center gap-3">
                Start Growing Your Business
                <ArrowRight size={18} />
              </span>
            </button>
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
