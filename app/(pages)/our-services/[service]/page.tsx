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
import { Metadata } from "next";
import ServiceTabBar from "@/components/unique/ServiceTabBar";
import Boost, { BoostService } from "@/components/universal/Boost";
import SectionPackage from "@/components/universal/SectionPackage";

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

export const metadata: Metadata = {
  title: "Service-Bayshore Communication",
  description:
    "Are you looking for a communication partner who can help you create a lasting impression on digital market? Browse our website and fulfill your dream with Bayshore. ",
};

// let bulletData: {
//   title: string;
//   price: string;
//   points: string[];
// }[];

// bulletData = [
//   {
//     title: "SILVER PLAN",
//     price: "2500",
//     points: [
//       "150 keyphrases optimized",
//       "30 pages optimized",
//       "6 content, outreach, UX, or CRO assets per quarter",
//       "8 custom dashboards",
//       "Phone call, lead, and revenue tracking dashboard",
//     ],
//   },
//   {
//     title: "GOLD PLAN",
//     price: "5000",
//     points: [
//       "200 keyphrases optimized",
//       "40 pages optimized",
//       "12 content, outreach, UX, or CRO assets per quarter",
//       "8 custom dashboards",
//       "Phone call, lead, and revenue tracking dashboard",
//     ],
//   },
//   {
//     title: "DIAMOND PLAN",
//     price: "8000",
//     points: [
//       "300 keyphrases optimized",
//       "60 pages optimized",
//       "24 content, outreach, UX, or CRO assets per quarter",
//       "10 custom dashboards",
//       "Phone call, lead, and revenue tracking dashboard",
//     ],
//   },
// ];




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
                          src={elem.heroImg}
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

                {/* <div className="mt-20 mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-[4rem] items-center">
                  
                    {bulletData.map((el: any, i: number) => 
                      <Package data={el} key={i} />
                    )}
                  </div>
                </div> */}
                <SectionPackage />

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
