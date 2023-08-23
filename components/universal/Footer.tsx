import React from "react";
import SectionLayout from "./SectionLayout";
import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";

let service: {
  title: string;
  link: string;
}[];

service = [
  { title: "Website Design", link: "/our-services/website-design" },
  { title: "Mobile App", link: "/our-services/mobile-app" },
  { title: "SEO", link: "/our-services/seo" },
  { title: "UI/UX Design", link: "/our-services/ui-ux-design" },
  { title: "Paid Advertising", link: "/our-services/paid-advertising" },
  {
    title: "Social Media Marketing",
    link: "/our-services/social-media-marketing",
  },
  // { title: "Email Marketing", link: "/our-services/email-marketing" },
];

let quickLinks: {
  title: string;
  link: string;
}[];

quickLinks = [
  { title: "Appointment", link: "/contact" },
  { title: "Career", link: "/career" },
  { title: "Refer Client", link: "/refer-client" },
  { title: "FAQs", link: "/faq" },
  // { title: "Industries We Serve", link: "/industries-we-serve" },
  { title: "Privacy Policy", link: "/privacy-policy" },
  { title: "Terms & Conditions", link: "/terms-conditions" },
];

const Col = ({ text, links }: any) => {
  return (
    <div className="flex-1 md:translate-x-[20%] lg:translate-x-[30%] ">
      <h4 className="mb-10 heading-four text-center md:text-start !text-[#cfcfcf]">
        {text}
      </h4>
      <ul className="flex flex-col gap-2">
        {links.map((el: any, i: number) => (
          <li className="text-small !text-[#cfcfcf]" key={i}>
            {typeof el === "string" ? (
              <>{el}</>
            ) : (
              <Link href={`${el.link}`}>{el.title}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
const Footer = () => {
  return (
    <footer>
      <SectionLayout bg="bg-[#26272b]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-[3rem] md:gap-8">
          <div className="">
            <div className="center md:block">
              <Image
                src="/assets/baylogofooter.png"
                alt="bayshore-logo"
                width={366}
                height={106}
                className="w-[166px] h-[36px] mb-6"
                priority
              />
            </div>
            <p className="text-small  leading-[1.3] px-[2vw]  sm:px-0 !text-[#cfcfcf]">
              {text}
            </p>
          </div>
          <Col text="Service" links={service} />
          <Col text="Quick links" links={quickLinks} />
        </div>
        <div className="w-full mt-6 h-[1px] bg-[#DBDBDB]"></div>
        <div className="flex flex-wrap justify-center md:justify-between items-center   ">
          <p className="text-small mt-8 !text-[#cfcfcf]">
            Copyright © 2023 All Rights Reserved by Bayshore Communication.
          </p>
          <div className=" flex flex-col items-center  gap-6 pl-8 ">
            {/* <h4 className="mb-10 heading-four text-center">
              
              Social links
            </h4> */}
            <div className="center mt-8 gap-4 text-[#cfcfcf] ">
              <Link href={"https://www.facebook.com/bayshorecommunication"} target="_blank">
              <BsFacebook className=" w-[2rem] lg:w-[2.8rem] h-auto  hover:text-[#3b5998] " />
              </Link>
              <Link href={"https://www.instagram.com/bayshorecommunication"} target="_blank">
              <AiFillInstagram className="w-[2.6rem] lg:w-[3.4rem] h-auto hover:text-[#bb3380]" />
              </Link>
              <Link href={"https://www.linkedin.com/company/bayshore-communication"} target="_blank">
              <BsLinkedin className="w-[2rem] lg:w-[2.8rem] h-auto hover:text-[#007bb6]" />
              </Link>
              <Link href={"https://twitter.com/BayshoreCom"} target="_blank">
              <AiFillTwitterCircle className="w-[2.6rem] lg:w-[3.4rem] h-auto hover:text-[#00aced] hover:fill-blue-500   " />
              </Link>
              <Link href={"https://www.youtube.com/channel/UCAaI96cOP7GGpYhEOPFhu8w"} target="_blank">
              <SiYoutubemusic className="w-[2.5rem] lg:w-[3.3rem] h-auto hover:text-[#FF0000]" />
              </Link>
              
              
              
              
            </div>
          </div>
        </div>
      </SectionLayout>
    </footer>
  );
};

export default Footer;

const text: string = `Our performance, client satisfaction. Our main objective is
client’s pleasure. Our company stands by every personnel's
dedication. Our working policy is transparent. We try to maintain
customer Our performance, client satisfaction. Our main objective
is client’s pleasure. Our company stands by every personnel's
dedication. Our working policy is transparent. We try to maintain customer relationships.`;
