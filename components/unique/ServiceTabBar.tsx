"use client";
import { services } from "@/components/unique/services/Service";
import { ServiceDataType } from "@/types/types";
import Image from "next/image";
import { ReactNode, useState } from "react";

export default function ServiceTabBar() {
  const [activeTab, setActiveTab] = useState(0);

  //   const check = services.map((elem) => console.log("object", elem.homeTabBar));

  console.log("service", services[0].homeTabBar);
  return (
    <div className="md:px-[2rem] ">
      <div className="flex justify-between items-center rounded-[10px] custom-shadow px-[1rem] sm:px-[4rem] md:px-[11rem] py-[1.6rem] gap-2">
        {services.map((el) =>
          el.homeTabBar.map((service, index) => (
            <button
              className={`flex flex-col items-center  py-4 px-2 md:px-8 rounded-[10px] cursor-pointer ${
                activeTab === index ? "custom-shadow " : ""
              }`}
              key={index}
              onClick={() => setActiveTab(index)}
            >
              <Image
                src={activeTab === index ? "" : ""}
                alt="svg-logo"
                width={100}
                height={100}
                className="md:h-[26px] md:w-[26px] h-[14px] w-[14px]"
              />
              <p
                className={`py-2 text-[1.2rem] text-[#A2A2A2] text-center font-bold ${
                  activeTab === index ? "bg-gray-200" : ""
                }`}
              >
                {service.titleTab}
              </p>
            </button>
          ))
        )}
      </div>

      <div className="p-4">
        {services.map((el) =>
          el.homeTabBar.map((service, index) => (
            activeTab === index && (
              <div className="mt-[4rem]" key={index}>
                {service.contentTab}
              </div>
            )
        )))}
      </div>
    </div>
  );
}
