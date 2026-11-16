import Consultaion from "@/components/universal/Consultaion";
import { HeroWithImage } from "@/components/universal/Hero";
import SectionHeader from "@/components/universal/SectionHeader";
import SectionLayout from "@/components/universal/SectionLayout";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import parser from "html-react-parser";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Case-Bayshore Communication",
  description:
    "Discover our case studies and learn how Bayshore have helped many clients solve their communication challenges, improve their results, and achieve their ultimate goals.",
};

import { caseindv } from "@/config/caseStudies";
export { caseindv };

const Page = () => {
  return (
    <>
      <Reveal>
        <HeroWithImage
          heading={hero[0].heading}
          description={hero[0].description}
          imgLink="/assets/case-studies/case-studies-update.png"
        />
      </Reveal>
      {/* Featured */}

      <SectionLayout bg="">
        <Reveal>
          <SectionHeader
            heading="Featured Case Studies"
            text="Be inspired by our clients’ success stories. Learn how they used our solutions to grow their businesses. You can do it too."
          />
        </Reveal>
        <Reveal>
          <div className="mt-8">
            <div className="flex flex-col gap-[3rem]">
              <Featured />
            </div>
          </div>
        </Reveal>
      </SectionLayout>

      <Reveal>
        <Consultaion />
      </Reveal>
    </>
  );
};

export default Page;

let hero: {
  heading: string;
  description: string;
}[];

hero = [
  {
    heading: "Inspiring Case Studies of Business Growth",
    description: `If you are looking for some inspiration and motivation to expand your company, you will find it in our case studies. We have collected the most amazing stories of our client's business growth from different industries and niches. You will learn how they faced obstacles, seized opportunities, and applied our creative solutions. Our case analyses will show you how you can achieve it with help of Bayshore services. `,
  },
];

const Featured = () => {
  return (
    <>
      {caseindv.map((elem, index) => (
        <div key={index}>
          <Reveal>
            <div className="bg-[#F4F4F4] grid grid-cols-1 md:grid-cols-2 items-center">
              <Image
                src={`/assets/case-studies/${elem.logoImg}`}
                alt="man-working-on-office"
                width={600}
                height={600}
                className="w-full h-auto"
              />
              <div className=" md:rounded-r-[20px] px-8 md:px-[10rem] py-[2rem]">
                <div className="flex flex-col gap-[1.5rem] md:gap-[2.5rem] md:items-start items-center">
                  <h4 className="heading-four !text-left">{elem.title}</h4>
                  <p className="text-small text-cut text-cut-5">
                    {parser(elem.desc)}
                  </p>

                  <Link
                    href={`/case-studies/${elem.url
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                  >
                    <button className="text-gray-500 font-semibold text-small border border-gray-800 rounded-full p-5 hover:!bg-[#FE6F1F] hover:text-white hover:border-[#FE6F1F]">
                      Learn more
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      ))}
    </>
  );
};
