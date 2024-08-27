import React from "react";
import SectionLayout from "../SectionLayout";
import Image from "next/image";

const SocialMediaContent = () => {
  return (
    <div className="py-10">
      <div className="relative h-[30vh]  lg:h-[50vh] w-full">
        {/* Background Image */}
        <Image
          src="/assets/company-profile/social-media-content-heading.png"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />

        {/* Content */}
        <div className=" absolute inset-0 flex  items-center justify-around z-10 py-20">
          {/* Title Text */}
          <SectionLayout bg="">
            <div className=" w-full   lg:py-20 lg:px-10 text-center bg-[rgba(0,0,0,0.6)] p-4 rounded-lg">
              <h1 className="text-white text-[28px] md:text-40px lg:text-[50px] px-14 font-bold uppercase w-full">
                SOCIAL MEDIA CONTENT
              </h1>
            </div>
          </SectionLayout>
        </div>
      </div>

      <SectionLayout bg="">
        <div className="w-full">
          <h3 className="text-20px md:text-[40px] text-white text-center mt-14 uppercase">
            STATICS
          </h3>
          <Image
            src="/assets/company-profile/smc/statics.png"
            alt=""
            width={1920}
            height={1080}
            className="w-full h-auto"
          ></Image>
        </div>
        <div className="w-full">
          <h3 className="text-20px md:text-[40px] text-white text-center mt-14 uppercase">
            Motion Graphics
          </h3>
          <Image
            src="/assets/company-profile/smc/motion-graphics.png"
            alt=""
            width={1920}
            height={1080}
            className="w-full h-auto"
          ></Image>
        </div>
      </SectionLayout>
    </div>
  );
};

export default SocialMediaContent;
