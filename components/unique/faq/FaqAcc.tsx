"use client";

import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Image from "next/image";

import parser from "html-react-parser";

let faq: {
  heading: String;
  description: String;
}[];

faq = [
  {
    heading: `What services does your company offer?`,
    description: `We provide a range of services, including digital marketing solutions such as SEO, SEM, social media marketing, content creation, and email marketing. Additionally, we specialize in software development, offering custom web and mobile application development, software consulting, and UI/UX design.`,
  },
  {
    heading: `How experienced is your team?`,
    description: `Our team comprises highly skilled professionals with extensive experience in both digital marketing and software development. Our experts have successfully executed numerous projects across various industries, delivering exceptional results each time.`,
  },
  {
    heading: ` What industries do you cater to?`,
    description: `We have worked with clients from diverse industries, including e-commerce, healthcare, finance, education, technology, and more. Our versatile experience allows us to tailor our solutions to meet the specific needs of any industry.`,
  },
  {
    heading: ` How do you ensure the security of sensitive data in software development?`,
    description: `We take security seriously and follow industry best practices to safeguard sensitive data. Our development processes include regular security audits, code reviews, encryption techniques, and adherence to relevant compliance standards.`,
  },
  {
    heading: ` Can you handle both small and large-scale projects?`,
    description: `Absolutely. Our company is equipped to handle projects of all sizes, from small businesses to large enterprises. We tailor our approach based on the scope and requirements of each project to ensure optimal results.`,
  },
  {
    heading: `How do you measure the success of a digital marketing campaign?`,
    description: `We utilize a combination of key performance indicators (KPIs) tailored to each campaign's objectives. These may include metrics such as website traffic, conversion rates, click-through rates (CTR), engagement on social media platforms, and return on investment (ROI).`,
  },
  {
    heading: `What technologies do you use for software development?`,
    description: `We stay updated with the latest technologies and frameworks to provide cutting-edge solutions. Our tech stack includes but is not limited to languages like Python, JavaScript, frameworks like React and Angular, and databases like MySQL and MongoDB.`,
  },
  {
    heading: `How do you ensure effective communication throughout a project?`,
    description: `We prioritize communication to keep clients involved at every stage. We assign dedicated project managers to ensure timely updates, regular meetings, and a transparent flow of information between our team and the client.`,
  },
  {
    heading: `Can you redesign an existing application or website?`,
    description: `Certainly. We offer redesign and rebranding services to give your existing application or website a fresh and modern look. This process can involve improving user experience, updating visuals, and enhancing functionality.`,
  },
  {
    heading: `What sets your company apart from competitors?`,
    description: `Our company stands out due to our comprehensive approach that combines both digital marketing and software development expertise. This integrated approach allows us to create holistic solutions that align with our clients' business goals and drive exceptional results.`,
  },
];

const AccordionCus = ({ title }: any) => {
  return (
    <div className="mt-12 border-[0.5px] border-[#AAAAAA] rounded-[10px] ">
      <h4 className="heading-four bg-[#F5F5F5] rounded-[10px] p-4 flex items-center gap-2 px-8">
        {title}
      </h4>
      <Example arr={faq} />
    </div>
  );
};

export default AccordionCus;

function Icon({ id, open }: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export function Example({ arr }: any) {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      {arr.map((el: any, i: number) => (
        <Accordion
          key={el}
          open={open === i + 1}
          icon={<Icon id={1 + i} open={open} />}
        >
          <div className="px-8">
            <AccordionHeader
              className="border-b-0"
              onClick={() => handleOpen(i + 1)}
            >
              <div className="text-[16px] md:text-[18px]  font-normal">
                {el.heading}
              </div>
            </AccordionHeader>
          </div>
          <div className="">
            <AccordionBody>
              <div className=" bg-[#F5F5F5] border-t-[0.5px] border-[#AAAAAA] rounded-b-[10px]">
                <div className="px-8 !py-8 text-base">
                  {parser(el.description)}
                </div>
              </div>
            </AccordionBody>
          </div>
        </Accordion>
      ))}
    </Fragment>
  );
}
