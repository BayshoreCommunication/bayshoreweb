"use client";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Star,
  Stethoscope,
  Briefcase,
  ShoppingBag,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Dental Practice",
    location: "Florida",
    icon: Stethoscope,
    review:
      "Before working with Bayshore Communication, our dental practice was invisible outside a two-mile radius. In less than six months, they completely transformed our local rankings. We now get consistent daily calls from patients across the entire county. They are the best Florida SEO company we have ever hired.",
  },
  {
    name: "James Peterson",
    role: "High-Ticket Consulting Services",
    location: "Florida",
    icon: Briefcase,
    review:
      "Other agencies sent us reports filled with technical jargon but no actual leads. Bayshore took the time to understand our high-ticket consulting services. Their SEO strategy directly resulted in a massive increase in qualified consultations this year. They track everything back to our bottom line.",
  },
  {
    name: "Maria Fernandez",
    role: "E-Commerce Company",
    location: "Florida",
    icon: ShoppingBag,
    review:
      "Our e-commerce site was suffering from technical issues that tanked our traffic. The Bayshore team audited the site, clearly explained the structural problems, and executed a flawless cleanup. Our organic sales have doubled since they took over.",
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
              What Our Florida{" "}
              <span className="text-[#FF6F00]">Clients Are Saying</span>
            </h2>
          </div>

          <div className="lg:pl-20">
            <div className="flex items-center gap-2 max-w-[560px] text-[24px] font-bold text-[#FF6F00] lg:mt-6">
              <span>★ ★ ★ ★ ★</span>
              <span className="text-[#081B4B]">5 / 5</span>
            </div>
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
                              bg-[#FFF4EC]
                              text-[#FF6F00]
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
