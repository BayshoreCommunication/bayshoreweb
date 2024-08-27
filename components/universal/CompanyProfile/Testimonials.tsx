import React from "react";
import SectionLayout from "../SectionLayout";
import Image from "next/image";

const testimonialsData = [
  {
    img: "/assets/company-profile/testimonials1.png",
  },
  {
    img: "/assets/company-profile/testimonials2.png",
  },
  {
    img: "/assets/company-profile/testimonials3.png",
  },
];

const Testimonials = () => {
  return (
    <div>
      <SectionLayout bg="">
        <h2 className="text-[50px] font-medium text-white text-center mb-10 uppercase">
          What Our Partners Saying About Us
        </h2>
        <div className="flex flex-col gap-10">
          {testimonialsData.map((item, index) => (
            <div
              key={index}
              className="timeline-item w-full lg:max-w-[60%] mx-auto"
            >
              <Image
                src={item.img}
                alt={item.img}
                width={1920}
                height={1080}
                className="w-full mx-auto"
              />
            </div>
          ))}
        </div>
      </SectionLayout>
    </div>
  );
};

export default Testimonials;
