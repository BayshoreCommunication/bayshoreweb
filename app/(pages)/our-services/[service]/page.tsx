"use client";
import { services } from "@/components/unique/services/Service";
import SectionLayout from "@/components/universal/SectionLayout";
import { StickyContainer, Sticky } from "react-sticky";
import Parser from "html-react-parser";
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

  return (
    <>
      <Hero heading={hero[0].heading} description={hero[0].description} />
      <Info />
      <SectionLayout bg="">
        {/* <HomeServiceCard title={title} imgLink={imgLink} box={box}/> */}
        <div className="">
          {individualService.map((elem, index) => (
            <div className="h-[100%] service-style" key={index}>
              <h1>{elem.title}</h1>
              <ServiceTabBar />
              {Parser(elem.descriptionTop)}

              <div className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[4rem] items-center">
                  <Package />
                  <Package />
                  <Package />
                </div>
              </div>

              {Parser(elem.descriptionBottom)}
            </div>
          ))}
        </div>
      </SectionLayout>

      <AboutUs />
      <Consultaion />
    </>
  );
};

export default page;
