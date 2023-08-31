import Image from "next/image";
import React from "react";

const cardData = [
  {
    image: "/assets/funnel.svg",
    title: "Business Automation helps Increasing",
    value: "1500%",
    bottomTitle: "Leads to our clients business",
  },

  {
    image: "/assets/funnel.svg",
    title: "Optimizing Clients website UI & UX ",
    value: "600%",
    bottomTitle: "Sales Increase",
  },

  {
    image: "/assets/funnel.svg",
    title: "Our Retargeting ads able to generates",
    value: "4x",
    bottomTitle: "Time better results",
  },

  {
    image: "/assets/funnel.svg",
    title: "All of our clients got",
    value: "5x",
    bottomTitle: "Of minimum ROI",
  },
];

const HeroRight = () => {
  return (
    <div className="row-start-1 md:col-start-2 md:pl-[4rem]">
      <div className="flex flex-col gap-4 sm:px-[10vw] md:px-0 ">
        {cardData.map((data) => (
          <div
            key={data.title}
            className="bg-[#18112E] grid grid-cols-[20%_80%] items-center rounded-[10px] py-3 px-2 md:px-[2rem] w-full"
          >
            <div>
              <Image
                src={data.image}
                alt="doller"
                width={200}
                height={100}
                className="w-[5.5rem] md:w-[6.5rem] h-auto"
              />
            </div>
            <div className=" flex flex-col">
              <p className="text-small !text-[#fff] !text-start">
                {data.title}
              </p>
              <p className="text-white font-bold text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] my-[2px]">
                {data.value}
              </p>
              <p className="text-small !text-[#fff] !text-start">
                {data.bottomTitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroRight;
