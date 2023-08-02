"use client";
import { services } from "@/components/unique/services/Service";
import SectionLayout from "@/components/universal/SectionLayout";
import { StickyContainer, Sticky } from "react-sticky";
import Parser from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import AboutUs from "@/components/universal/AboutUs";
import Consultaion from "@/components/universal/Consultaion";
import Hero from "@/components/universal/Hero";
import Info from "@/components/universal/Info";
import HomeServiceCard from "@/components/unique/Home/HomeServiceCard";
import { Content } from "next/font/google";
import HomeTabBar from "@/components/unique/HomeTabBar";
import Package from "@/components/universal/Package";
import ServiceTabBar from "@/components/unique/ServiceTabBar";
import Boost, { BoostService } from "@/components/universal/Boost";

//  Home Hero section
let hero: {
  heading: string;
  description: string;
}[];

hero = [
  {
    heading: "Empower Your Business with Innovative Marketing Solutions",
    description: `Bayshore Communication is a digital marketing company that offers web and app 
    development, SEO and online advertising, social media and email marketing, 
    content creation and distribution, UI/UX, graphics, video production, and 
    influencer marketing services. We provide innovative and practical solutions to 
    help you expand your company globally and accomplish your goals.`,
  },
];

const page = ({ params }: { params: { service: string } }) => {
  const parameter = params.service;
  const individualService = services.filter((elem) => elem.url === parameter);
  const individualHomeTabBar = individualService.map((el) => el.homeTabBar)[0];

  return (
    <>
      <Hero heading={hero[0].heading} description={hero[0].description} />

      <div>
        <Info />
      </div>

      {/* <HomeServiceCard title={title} imgLink={imgLink} box={box}/> */}
      <div>
        {individualService.map((elem, index) => (
          <div key={index}>
            <SectionLayout bg="">
              <div className="h-[100%] service-style">
                <div className="py-8">
                  <>
                    {/* <h1>{elem.title}</h1> */}
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
                      <div className="rounded-[10px] px-4 pb-16 ">
                        <h1>{elem.title}</h1>
                        {elem.shortDescription}
                      </div>
                      <div className="row-start-1 md:col-start-2">
                        <Image
                          src="/assets/tab-1.png"
                          alt="tab-1"
                          width={400}
                          height={400}
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                  </>
                </div>

                <ServiceTabBar individualHomeTabBar={individualHomeTabBar} />
                {Parser(elem.descriptionFirst)}

                <div className="mt-20 mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-[4rem] items-center">
                    <Package />
                    <Package />
                    <Package />
                  </div>
                </div>

                {Parser(elem.descriptionSecond)}

                {/* Boost */}

                <div className="my-16">
                  <BoostService
                    heading=" Need a boost for you business? Get your FREE Quote Today!"
                    btnText="Send us a proposal"
                  />
                </div>

                {Parser(elem.descriptionThird)}
              </div>
            </SectionLayout>

            <Info />

            <SectionLayout bg="">
              <div className="h-[100%] service-style">
                <div className="py-8">
                  {Parser(elem.descriptionFourth)}

                  <Consultaion />

                  {Parser(elem.descriptionFifth)}
                  {Parser(elem.descriptionSixth)}
                  {Parser(elem.descriptionSeventh)}
                  {Parser(elem.descriptionEightth)}
                </div>
              </div>
            </SectionLayout>

            <AboutUs />

            <SectionLayout bg="">
              <div className="h-[100%] service-style">
                <div className="py-8">{Parser(elem.whyBayshore)}</div>
              </div>
            </SectionLayout>
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
