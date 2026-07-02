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
    name: "Thomas B.",
    role: "Plumbing and HVAC Services",
    location: "Naples, Florida",
    icon: Wrench,
    review:
      "We tried managing local SEO on our own for over a year. Bayshore Communication took over and within three months our Google Business Profile was generating consistent inbound calls from Naples customers. Our phone rings more now than at any point in the last five years.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&crop=faces&w=900&h=650&q=90",
    name: "Dr. Amara K.",
    role: "Dental Practice Owner",
    location: "North Naples, Florida",
    icon: Stethoscope,
    review:
      "Bayshore built a local SEO strategy specific to our Naples dental practice and the neighborhoods we actually serve. Our new patient inquiries from organic search doubled within six months. The monthly reports are always clear and show real business results.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&crop=faces&w=900&h=650&q=90",
    name: "Daniel F.",
    role: "Real Estate Brokerage",
    location: "Naples, Florida",
    icon: Home,
    review:
      "My Google Business Profile alone now generates consistent new buyer inquiries every week without a single dollar of paid advertising. Bayshore focused on the right keywords for our Naples market and the results have been exceptional.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&crop=faces&w=900&h=650&q=90",
    name: "Michael R.",
    role: "Law Firm Owner",
    location: "Naples, FL",
    icon: Scale,
    review:
      "The communication and reporting from Bayshore have been transparent from day one. Every recommendation is backed by data and the strategy is built around our Naples law firm's specific growth goals. Qualified leads have increased significantly since starting the campaign.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&crop=faces&w=900&h=650&q=90",
    name: "Sarah T.",
    role: "Retail Business Owner",
    location: "Bonita Springs, FL",
    icon: Store,
    review:
      "Our Naples store visibility improved dramatically after Bayshore optimized our local presence. We are now competing against much larger brands in local search without increasing our advertising budget at all.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&crop=faces&w=900&h=650&q=90",
    name: "James L.",
    role: "Property Services",
    location: "Marco Island, FL",
    icon: Building2,
    review:
      "Finally an SEO partner that understands local business in the Naples area. The campaign generated measurable growth and the results continue to improve every month. Highly recommended for any small business in Southwest Florida.",
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
              What Our Naples Florida
              <br />
              Small Business{" "}
              <span className="text-[#FF6F00]">Clients Are Saying</span>
            </h2>
          </div>

          <div className="lg:pl-20">
            <p className="max-w-[560px] text-[18px] leading-9 text-black/70">
              We&apos;re proud to help small businesses across Naples, Florida,
              and surrounding Southwest Florida communities grow their local
              visibility and attract more customers.
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
