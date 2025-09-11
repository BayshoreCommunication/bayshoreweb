"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    title: "Trip Law",
    desc: "Since 2016, working with Trip Law, we've grown the practice from $60,000 to $2.3 million without spending a dime on ads. We consistently generate 20+ new client appointments per month, each with a $5,000 case value. Client acquisition is no longer Trip Law’s challenge—managing the caseload is.",
    videoId: "RVit6poGLRs",
  },
  {
    title: "Apex Advisor",
    desc: "Apex had a strong brand presence, but poor SEO analysis from another agency left them invisible on Google. Our video production team built a powerful social media presence, driving trust through informative video marketing. Meanwhile, Salam identified SEO errors, optimized the site, and ranked it in 25 days, leading to 9x growth in consumer appointments and XXXX site visits.",
    videoId: "ohyUTzLiLbI",
  },
  {
    title: "Catflix",
    desc: "Despite having a brilliant idea, the Cat Flix has trouble getting noticed online. In order to catapult their brand to the top of search results, our team created a high-performance website, optimized blogs for search engines, and put a content ranking plan into place. In just a few weeks, their blog entries started to dominate industry terms, resulting in a spike in organic traffic and an increase in customer interaction.",
    videoId: "iqHA7By9OAI",
  },
];

// Variants for the testimonial cards
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.3,
      type: "spring",
      stiffness: 80,
      damping: 12,
    },
  }),
};

export default function ResultsSection() {
  return (
    <section className="px-8 sm:px-6 md:px-12 lg:mt-12 sm:mt-0 overflow-hidden">
      {/* Heading */}
      <motion.div
        className="max-w-[1440px] mx-auto text-center md:text-left py-6"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-center text-[36px] font-bold mb-12 mt-32">
          CLIENT{" "}
          <span className="border-2 border-[#FE641A] text-[#FE641A] px-2">
            TESTIMONIALS
          </span>
        </h2>

        {/* Content Box */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 rounded-2xl border border-gray-200 p-8 shadow-lg text-center my-[50px]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Testimonial 1 */}
          <motion.div
            className="flex flex-col items-start"
            custom={0}
            variants={cardVariants}
          >
            <div className="flex items-center space-x-4 text-left">
              <img
                src="/image/testimonial/person.png"
                alt="Client"
                className="w-32 h-32 rounded-full object-cover"
              />
              <div className="ml-8">
                <h3 className="text-[#FE641A] font-bold text-[22px]">
                  Scott Brigham
                </h3>
                <p className="text-[14px] text-gray-500 italic">
                  Founder of Brigham Media Group
                </p>
              </div>
            </div>
            <p className="mt-4 text-[14px] text-gray-700 text-left">
              <span className="text-[#FE641A] font-medium">
                “I’ve white-labeled them for everything.”
              </span>{" "}
              Scott’s worked with teams all over the globe — none delivered like
              Bayshore. He now white-labels all his funnel needs with them.
              <span className="text-[#FE641A]">
                “Their can-do attitude and creativity are next-level.”
              </span>
            </p>
            <a href="#" className="mt-2 text-[12px] text-orange-400">
              View Video Testimonial
            </a>
          </motion.div>

          {/* Stat 1 */}
          <motion.div
            className="flex flex-col justify-start"
            custom={1}
            variants={cardVariants}
          >
            <h3 className="text-[#FE641A] text-[18px] md:text-[36px] font-bold">
              5+ Funnel Types
            </h3>
            <p className="text-[14px] text-gray-600 mt-2">
              delivered (books, coaching, supplements)
            </p>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            className="flex flex-col justify-start"
            custom={2}
            variants={cardVariants}
          >
            <h3 className="text-[#FE641A] text-[18px] md:text-[39px] font-bold">
              Full White-Label Service
            </h3>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Results Cards */}
      <section className="max-w-[1440px] mx-auto py-8 sm:py-12">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
          className="custom-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer h-auto md:h-[450px]"
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {/* Video */}
                <div className="relative w-full h-[200px] sm:h-[250px] overflow-hidden">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${slide.videoId}?rel=0&showinfo=0&controls=1`}
                    title={slide.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <motion.h3
                    className="font-bold text-[20px]"
                    whileHover={{ color: "#f97316" }}
                  >
                    {slide.title}
                  </motion.h3>
                  <p className="text-gray-600 mt-2 text-sm sm:text-[14px] leading-relaxed">
                    {slide.desc}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Custom Styling */}
      <style jsx global>{`
        .custom-swiper .swiper-pagination {
          position: relative;
          margin-top: 2rem;
          text-align: center;
        }
        .custom-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: #d1d5db;
          opacity: 1;
          margin: 0 6px !important;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }
        .custom-swiper .swiper-pagination-bullet-active {
          background-color: #f97316;
          transform: scale(1.3);
        }
        .custom-swiper .swiper-button-next,
        .custom-swiper .swiper-button-prev {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background: #ffffff;
          color: #000000;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
        }
        .custom-swiper .swiper-button-next:hover,
        .custom-swiper .swiper-button-prev:hover {
          background: #f3f4f6;
          color: #f97316;
          transform: scale(1.05);
        }
        .custom-swiper .swiper-button-next::after,
        .custom-swiper .swiper-button-prev::after {
          font-size: 14px;
          font-weight: bold;
        }
      `}</style>
    </section>
  );
}
