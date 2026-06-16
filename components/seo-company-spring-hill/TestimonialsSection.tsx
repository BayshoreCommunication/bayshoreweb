"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Star,
  Wrench,
  Stethoscope,
  Home,
  Scale,
  Store,
  Building2,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&crop=faces&w=900&h=650&q=90",
    name: "Marcus Reynolds",
    role: "Owner, Reynolds Home Services",
    location: "Spring Hill, Florida",
    icon: Wrench,
    review:
      "Working with Bayshore Communication reshaped how our Spring Hill, Florida business appears in search. Within a few months, we went from barely visible to holding top positions for every service term that drives real revenue. The process was thorough and the results were tangible.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&crop=faces&w=900&h=650&q=90",
    name: "Diana Castillo",
    role: "Owner, Castillo Family Dental",
    location: "Spring Hill, Florida",
    icon: Stethoscope,
    review:
      "We had worked with other agencies without meaningful outcomes. Bayshore took a completely different approach. They understood the Spring Hill market specifically and built a strategy around it. Our inquiry volume has grown steadily every single month since we started.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&crop=faces&w=900&h=650&q=90",
    name: "Kevin Harmon",
    role: "Owner, Harmon Auto Repair",
    location: "Spring Hill, Florida",
    icon: Building2,
    review:
      "Bayshore handled our technical issues, our Google Business Profile, and our content all at once. The monthly reports explain exactly what happened and what is planned next. Our Google presence now brings in new customers every single week without any ad spend.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="overflow-hidden pt-12 pb-4 md:pt-24 md:pb-6">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 shadow-sm">
              <ArrowUpRight size={16} className="text-[#FF6F00]" />
              <span className="text-xl font-bold uppercase text-[#FF6F00]">
                Client Reviews
              </span>
            </div>

            <h2 className="mt-6 text-[38px] font-bold leading-[1.1] text-black md:text-[52px]">
              What Our Spring Hill
              <br />
              Florida <span className="text-[#FF6F00]">Clients Are Saying</span>
            </h2>
          </div>

          <div className="lg:pl-20">
            <p className="max-w-[560px] text-[18px] leading-9 text-black/70">
              We&apos;re proud to help businesses in Spring Hill and surrounding
              areas grow their visibility, attract more customers, and achieve
              lasting results.
            </p>

            <Link
              href="/contact"
              className="
                group
                relative
                mt-8
                inline-flex
                h-[52px]
                items-center
                justify-center
                overflow-hidden
                rounded-md
                bg-[#FF6F00]
                px-8
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_16px_35px_rgba(255,111,0,0.25)]
              "
            >
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 ease-out group-hover:translate-x-full" />

              <span className="relative flex items-center gap-2">
                Get Started Now
                <ArrowRight size={18} />
              </span>
            </Link>
          </div>
        </div>

        {/* Slider */}
        <div className="relative mt-10 md:mt-14">
          {/* Prev */}
          <button
            type="button"
            aria-label="Previous testimonial"
            className="
              testimonial-prev

              absolute
              left-[-5px]
              top-1/2
              z-20

              hidden
              h-16
              w-16
              -translate-y-1/2
              items-center
              justify-center

              rounded-full
              border
              border-black/10

              bg-white

              shadow-[0_10px_25px_rgba(0,0,0,0.08)]

              transition-all
              duration-300

              hover:border-[#FF6F00]
              hover:bg-[#FF6F00]
              hover:text-white

              xl:flex
            "
          >
            <ArrowLeft size={22} />
          </button>

          {/* Next */}
          <button
            type="button"
            aria-label="Next testimonial"
            className="
              testimonial-next

              absolute
              right-[-5px]
              top-1/2
              z-20

              hidden
              h-16
              w-16
              -translate-y-1/2
              items-center
              justify-center

              rounded-full
              border
              border-black/10

              bg-white

              shadow-[0_10px_25px_rgba(0,0,0,0.08)]

              transition-all
              duration-300

              hover:border-[#FF6F00]
              hover:bg-[#FF6F00]
              hover:text-white

              xl:flex
            "
          >
            <ArrowRight size={22} />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((item, index) => {
              const Icon = item.icon;

              return (
                <SwiperSlide key={index}>
                  <div
                    className="
                      group
                      overflow-hidden
                      rounded-[28px]
                      border
                      border-black/5
                      bg-white

                      shadow-[0_8px_30px_rgba(0,0,0,0.05)]

                      transition-all
                      duration-500

                      hover:-translate-y-2
                      hover:border-[#FF6F00]
                      hover:shadow-[0_20px_60px_rgba(255,111,0,0.15)]
                    "
                  >
                    {/* Image */}
                    <div className="relative h-[260px] overflow-hidden md:h-[320px]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="
                          object-cover
                          object-top
                          transition-transform
                          duration-700
                          group-hover:scale-105
                        "
                      />
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={18}
                            fill="#FF6F00"
                            className="text-[#FF6F00]"
                          />
                        ))}
                      </div>

                      <p className="mt-6 text-[16px] leading-8 text-black/80">
                        &ldquo;{item.review}&rdquo;
                      </p>

                      <div className="mt-8 border-t border-black/10 pt-6">
                        <div className="flex items-center gap-4">
                          <div
                            className="
                              flex
                              h-14
                              w-14
                              items-center
                              justify-center

                              rounded-full
                              bg-[#FF6F00]
                              text-white
                            "
                          >
                            <Icon size={24} />
                          </div>

                          <div>
                            <h4 className="text-[20px] font-bold text-black">
                              {item.name}
                            </h4>

                            <p className="text-[15px] text-black/60">
                              {item.role}
                            </p>

                            <p className="text-[15px] text-black/60">
                              {item.location}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination {
          margin-top: 18px;
          position: relative !important;
        }

        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          opacity: 1;
        }

        .swiper-pagination-bullet-active {
          background: #ff6f00;
          width: 28px;
          border-radius: 999px;
        }
      `}</style>
    </section>
  );
}
