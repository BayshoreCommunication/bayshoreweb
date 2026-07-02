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
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&crop=faces&w=900&h=650&q=90",
    name: "Hardam Tripathi, Esq.",
    role: "U.S. Immigration Attorney",
    location: "Trip Law",
    icon: Scale,
    review:
      "I’m U.S. immigration lawyer Hardam Tripathi of Trip Law. If you're a young attorney, be aware that a good marketing team is necessary to succeed in launching your law firm. Marketing is essential, but it is not taught in law school. Grow. Put money into your marketing so you don’t run into problems later. Salman on Bayshore can help you with SEO and creative strategies. Marketing brings in customers, establishes authority and generates revenue. It’s important for young lawyers.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&crop=faces&w=900&h=650&q=90",
    name: "David J Carter",
    role: "Personal Injury Attorney",
    location: "Carter Injury Law",
    icon: Scale,
    review:
      "Before working with Bayshore, our firm relied almost entirely on referrals. That limited how fast we could grow. Within 5 months of initiating a structured local SEO campaign, we began ranking on page one across Tampa Bay for competitive personal injury terms. You can see the difference in our weekly caseload now! Salman and his team are very clear in communication, show the data and follow through on what they promise.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&crop=faces&w=900&h=650&q=90",
    name: "Aaron D. Melamed, Esq.",
    role: "Property Damage Attorney",
    location: "Melamed Law",
    icon: Scale,
    review:
      "In South Florida, property damage law is extremely competitive, especially in local search. Bayshore approached it with precision. They built a strategy around specific zip codes, search intent and Google Map Pack visibility. That level of targeting made a real difference. We went from barely appearing online to consistently showing up where clients are searching. Since working with Salman’s team, we’ve seen a consistent increase in consultation requests from organic traffic.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&crop=faces&w=900&h=650&q=90",
    name: "Drew McCulloch, Esq.",
    role: "Personal Injury & Criminal Defense Lawyer",
    location: "McCulloch Law",
    icon: Scale,
    review:
      "We do personal injury and criminal defense, so we have two very different search audiences. Bayshore didn’t push one way of doing it. They developed different SEO strategies for each practice area and that decision paid off. Ranking went faster than we thought. Reporting gives us a good picture of performance. Salman’s leadership keeps the process on track and organized to deliver results.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="overflow-hidden pt-12 pb-4 md:pt-24 md:pb-6">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 shadow-sm">
              <ArrowUpRight size={16} className="text-[#FF6F00]" />
              <span className="text-xl font-bold uppercase text-[#FF6F00]">
                Client Reviews
              </span>
            </div>

            <h2 className="mt-6 text-[38px] font-bold leading-[1.1] text-black md:text-[52px]">
              What Our Law Firm
              <br />
              <span className="text-[#FF6F00]">Clients Are Saying</span>
            </h2>
          </div>

          <div className="lg:pl-20">
            <p className="max-w-[560px] text-[18px] leading-9 text-black/70">
              We&apos;re proud to help law firms across Florida grow their visibility, attract more cases, and achieve lasting results.
            </p>

            
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
