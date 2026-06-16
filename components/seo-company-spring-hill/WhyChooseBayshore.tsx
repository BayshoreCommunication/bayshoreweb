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
    title: "A Track Record Built on Measurable Deliveries",
    description:
      "We have served more than 70 clients, launched over 220 websites, and generated in excess of 500,000 leads across multiple industries. Every client engagement adds depth to the experience that shapes how we approach each new Spring Hill, Florida SEO strategy.",
  },
  {
    Icon: TrendingUp,
    title: "Every Recommendation Backed by Real Evidence",
    description:
      "Keyword selections, content priorities, technical actions, and link acquisition targets are all determined by verified research and current market data. There is no assumption-based planning in our process. Every decision traces to specific evidence about your business and your local market.",
  },
  {
    Icon: SearchCheck,
    title: "One Team Covering Your Complete Search Presence",
    description:
      "Technical SEO, local optimization, content development, AEO, and GEO are managed by one coordinated team under a single strategy. There are no disconnected vendors or conflicting priorities. One accountable team owns every dimension of your Spring Hill, Florida, search presence.",
  },
  {
    Icon: MapPinned,
    title: "Genuine Spring Hill Florida Market Understanding",
    description:
      "We understand how Hernando County residents search for businesses, which service categories carry the heaviest local competition, how map pack behavior works in the Spring Hill, Florida, market, and where the realistic ranking opportunities exist for your business category.",
  },
  {
    Icon: Layers3,
    title: "No Templates, No Recycled Work",
    description:
      "Every Spring Hill, Florida, SEO strategy we build is designed from first principles around your specific services, your competitive environment, your customer profile, and your growth targets. No framework from another client is applied to your account.",
  },
  {
    Icon: ClipboardList,
    title: "Full Visibility Into Every Action and Outcome",
    description:
      "Monthly reporting documents rankings, traffic changes, lead generation, and ROI with complete transparency. You receive plain-language context on what changed, why it changed, and what we are doing about it. There is no opacity in our client relationships.",
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
              WHY CHOOSE US
            </span>

            <h2 className="mt-4 text-[38px] font-bold leading-[1.05] text-[#081B4B] md:text-[52px]">
              Why Spring Hill Florida Businesses Choose <span className="text-[#FF6F00]">Bayshore</span>
              <br />
              Communication
            </h2>

            <div className="mt-8 h-1 w-16 bg-[#FF6F00]" />

            <div className="mt-8 space-y-6 text-[15px] leading-8 text-black/75 md:text-[18px]">
              <p>
                Bayshore Communication was not built as a generalist agency with SEO as an add-on service. We are a dedicated growth partner with a measured, documented track record of improving search performance and driving real customer acquisition for businesses across Florida since 2016.
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
