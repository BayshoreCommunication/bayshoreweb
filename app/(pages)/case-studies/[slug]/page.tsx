"use client";
import Consultaion from "@/components/universal/Consultaion";
import { HeroWithImage } from "@/components/universal/Hero";
import HeroLeft from "@/components/universal/HeroLeft";
import SectionLayout from "@/components/universal/SectionLayout";
import { Metadata } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { VscCalendar } from "react-icons/vsc";
import { caseindv } from "../page";
import { useParams } from "next/navigation";
import parser from "html-react-parser";
import AboutUs from "@/components/universal/AboutUs";

export const metadata: Metadata = {
  title: "Case-Bayshore Communication",
  description:
    "Discover our case studies and learn how Bayshore have helped many clients solve their communication challenges, improve their results, and achieve their ultimate goals.",
};

const IndividualCase = ({ params }: { params: { slug: string } }) => {
  const parameter = params.slug;
  console.log(parameter);
  const indvcase = caseindv.filter(
    (elem) =>
      elem.url
        .replace(/\s+/g, "_") // Replace spaces with dashes globally
        .toLowerCase() === parameter
  );
  console.log(indvcase);

  const today = new Date();
  const dateToday = `${today.getDate()} / ${
    today.getMonth() + 1
  } / ${today.getFullYear()}`;

  return (
    // <>

    //   <SectionLayout bg="">
    //     <div className="h-[100%] service-style">
    //       <div className="container">
    //         <div className="flex gap-x-10">

    //             {indvcase.map((elem, index) => (
    //               <div key={index}>
    //                 <div>
    //                   <Image
    //                     src={`/assets/case-studies/${elem.caseImg}`}
    //                     alt="no_image"
    //                     width={2400}
    //                     height={2400}
    //                     className="w-full h-full"
    //                   />

    //                   <div>
    //                     <h1 className="heading-primary">{elem.title}</h1>
    //                   </div>

    //                   <div>{parser(elem.desc)}</div>
    //                 </div>
    //               </div>
    //             ))}
    //           </div>
    //         </div>
    //       </div>

    //   </SectionLayout>
    // </>

    <>
      {indvcase.map((elem, index) => (
        <div key={index}>
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
            <div className="h-[100%] service-style">
              <div className="container">
                <div><h1 className="heading-primary !text-center py-4">{elem.title}</h1></div>
                <div>{parser(elem.desc)}</div>
              </div>
              
            </div>
          </SectionLayout>
          <AboutUs />
              <Consultaion />
        </div>
      ))}
    </>
  );
};

export default IndividualCase;
