"use client";
import { services } from "@/components/unique/services/Service";
import SectionLayout from "@/components/universal/SectionLayout";
import { StickyContainer, Sticky } from "react-sticky";
import Parser from "html-react-parser";
import Link from "next/link";

const page = ({ params }: { params: { service: string } }) => {
  const parameter = params.service;
  const individualService = services.filter((elem)=> elem.url === parameter)

  return (
    <SectionLayout bg="">
  <div className="grid grid-cols-[65%_30%] gap-8">
    {individualService.map((elem, index)=>
    <div className="h-[100%] service-style" key={index}>
      <h1>{elem.title}</h1>
      {Parser(elem.description)}
      </div>
    )}
    <div className="sticky top-[72px] h-[100%]">
      <ul className="flex flex-col bg-[#F4F4F4] gap-6 py-8">
        {services.map((el: any, i: number) => (
          <li
            className="mx-[3rem] rounded-[5px] text-small py-2 px-8 bg-[#fff]"
            key={i}
          >
            <Link href={`/our-services/${el.url}`}>{el.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
</SectionLayout>
  );
};

export default page;
