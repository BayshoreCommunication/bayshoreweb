import Image from "next/image";
import React from "react";
import SectionLayout from "../SectionLayout";

const CPHeader = () => {
  return (
    <div className="relative h-[90vh] w-full">
      {/* Background Image */}
      <Image
        src="/assets/company-profile/header-bg.png"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />

      {/* Content */}
      <div className=" absolute inset-0 flex flex-col items-center justify-around z-10 py-10">
        {/* Logo */}
        <div className="">
          <Image
            src="/assets/company-profile/cp-white-logo.png"
            alt="Logo"
            width={300}
            height={100}
            quality={100}
          />
        </div>

        {/* Title Text */}
        <SectionLayout bg="">
          <div className="lg:py-20 lg:px-10 text-center bg-[rgba(0,0,0,0.6)] p-4 rounded-lg">
            <h1 className="text-white md:text-6xl lg:!text-[70px] font-bold uppercase ">
              Build Your Digital Media Presence with a Dedicated Workforce
            </h1>
          </div>
        </SectionLayout>
        {/* Bottom Title and Text */}
        <SectionLayout bg="">
          <div className="text-center ">
            <h3 className="text-white text-2xl md:text-4xl lg:text-5xl font-medium mb-5">
              Achieve Growth, Online Success
            </h3>
            <p className="text-white  text-lg font-normal  lg:text-3xl">
              As a leading provider of digital marketing and software solutions,
              we harness our creative resources to specialize in comprehensive
              branding, innovative marketing strategies, meticulous planning and
              implementation, cutting-edge digital marketing, and dynamic social
              media management. We alsoexcel in bespoke software design,
              seamless application development, and efficient event creationand
              management. Our holistic approach ensures that your brand stands
              out and thrives in the digital landscape
            </p>
          </div>
        </SectionLayout>
      </div>
    </div>
  );
};

export default CPHeader;
