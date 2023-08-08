import Consultaion from "@/components/universal/Consultaion";
import { HeroWithImage } from "@/components/universal/Hero";
import HeroLeft from "@/components/universal/HeroLeft";
import SectionLayout from "@/components/universal/SectionLayout";
import { Metadata } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Growth-Bayshore Communication",
  description:
    "Do you want to take your company to the next stage? Increase conversions, or boost brand awareness? Join Bayshore and experience rapid growth with best marketing bundles.",
};

const IndividualBlog = () => {
  return (
    <>
      <div className="relative">
        <Image
          src="/assets/dummy-individual-blog.png"
          alt="individual-blog"
          width={2400}
          height={2400}
          className="w-full h-auto object-cover"
        />

        <div className="absolute transform left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
          <Image
            src="/assets/individual-service-logo.png"
            alt="individual-blog"
            width={2400}
            height={2400}
            className="w-[493px] h-auto object-cover"
          />
        </div>
      </div>

      <SectionLayout bg="">
        <h1 className="text-center text-9xl">ALL IS WELL</h1>
      </SectionLayout>
    </>
  );
};

export default IndividualBlog;
