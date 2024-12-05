import Consultaion from "@/components/universal/Consultaion";
import SectionLayout from "@/components/universal/SectionLayout";

import Head from "next/head";
import Image from "next/image";
import React from "react";
import { caseindv } from "../page";
import parser from "html-react-parser";
import AboutUs from "@/components/universal/AboutUs";
import Reveal from "@/components/motion/Reveal";
import { TypeAnimation } from "react-type-animation";
import BlogTextMtion from "@/components/universal/BlogTextMtion";

// export const metadata: Metadata = {
//   title: "Case-Bayshore Communication",
//   description:
//     "Discover our case studies and learn how Bayshore have helped many clients solve their communication challenges, improve their results, and achieve their ultimate goals.",
// };

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const parameter = params.slug;
  //console.log(params.slug);
  const individualCase = caseindv.filter(
    (elem) =>
      elem.url
        .replace(/\s+/g, "-") // Replace spaces with dashes globally
        .toLowerCase() === parameter
  );
  let description: any = parser(individualCase[0].desc);
  console.log(individualCase[0].caseImg);
  return {
    title: `${individualCase[0].title}`,
    description: `${description[0]?.props.children[2]}`,
    openGraph: {
      title: `${individualCase[0].title}`,
      description: `${description[0]?.props.children[2]}`,
      images: `/assets/case-studies/${individualCase[0].caseImg}`,
      url: `https://www.carterinjurylaw.com/our-services/${individualCase[0].url
        .replace(/\s+/g, "-")
        .toLowerCase()}`,
      type: "article",
      site_name: "https://www.bayshorecommunication.com/",
    },
  };
}

const IndividualCase = ({ params }: { params: { slug: string } }) => {
  const parameter = params.slug;
  const indvcase = caseindv.filter(
    (elem) =>
      elem.url
        .replace(/\s+/g, "-") // Replace spaces with dashes globally
        .toLowerCase() === parameter
  );

  // const today = new Date();
  // const dateToday = `${today.getDate()} / ${
  //   today.getMonth() + 1
  // } / ${today.getFullYear()}`;

  return (
    <>
      {indvcase.map((elem, index) => (
        <div key={index}>
          <div>
            <Reveal>
              <Image
                src={`/assets/case-studies/${elem.caseImg}`}
                alt="individual-blog"
                width={2400}
                height={450}
                className="w-full h-auto object-cover"
              />
            </Reveal>
          </div>

          <SectionLayout bg="">
            <div className="h-[100%] service-style">
              <div className="container">
                <div>
                  <h1 className="heading-primary !text-center py-4 !leading-normal">
                    {elem.title}
                  </h1>
                </div>
                <div>{parser(elem.desc)}</div>
              </div>
            </div>
          </SectionLayout>

          {/* <AboutUs /> */}

          <Consultaion />
        </div>
      ))}
    </>
  );
};

export default IndividualCase;
