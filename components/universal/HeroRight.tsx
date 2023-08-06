import Image from "next/image";
import React from "react";

const cardData = [
  {
    image: "/assets/funnel.svg",
    title: "Access the data-fueled plans behind",
    value: "$3,021,182,299",
    bottomTitle: "IN CLIENT REVENUE",
  },

  {
    image: "/assets/funnel.svg",
    title: "Use the expert-led tactics behind",
    value: "7,839,684",
    bottomTitle: "IN LEADS FOR OUR CLIENTS",
  },

  {
    image: "/assets/funnel.svg",
    title: "Unlock do-it-for-me marketing with",
    value: "500",
    bottomTitle: "DIGITAL MARKETING EXPERTS",
  },

  {
    image: "/assets/funnel.svg",
    title: "Accelerate ROI with",
    value: "1+ BILLION",
    bottomTitle: "DATA POINTS FROM MARKETINGCLOUDFX",
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
