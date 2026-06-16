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
    name: "Marcus T.",
    role: "Personal Injury Law Firm",
    location: "Tampa Florida",
    icon: Wrench,
    review:
      "Bayshore Communication completely transformed how our firm appears in Tampa search results. We went from barely showing up to consistently ranking on page one for our most important practice areas. The team understood the legal industry from day one and never needed much hand-holding to understand what our clients search for.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&crop=faces&w=900&h=650&q=90",
    name: "Diana R.",
    role: "Family Law Attorney",
    location: "Tampa Florida",
    icon: Stethoscope,
    review:
      "Within four months of working with Bayshore, our consultation requests nearly doubled. Their SEO strategy for our Tampa family law practice was thoughtful, detailed, and it actually delivered results we could see and measure. We are still seeing growth every single month.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&crop=faces&w=900&h=650&q=90",
    name: "Kevin M.",
    role: "Criminal Defense Attorney",
    location: "Tampa Florida",
    icon: Home,
    review:
      "What impressed me most was how clearly the team communicated what they were doing and why they were doing it. The monthly reports were easy to understand and the results were real. Our Google Business Profile alone now brings in several new clients every week.",
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
              What Our Tampa Law Firm
              <br />
               <span className="text-[#FF6F00]">Clients Are Saying</span>
            </h2>
          </div>

          <div className="lg:pl-20">
            <p className="max-w-[560px] text-[18px] leading-9 text-black/70">
              We&apos;re proud to help businesses in Tampa Law Firm and surrounding
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
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />

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
