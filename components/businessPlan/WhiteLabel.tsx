import React from "react";
import Image from "next/image";

const WhiteLabel = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-8 mb-16">
      {/* Header */}
      <div className="flex flex-col justify-center items-center mb-[200px]">
        <h1 className="sm:text-[36px] font-bold text-center uppercase">
          Our 3-Step <span className="text-[#FE641A]">Success Recipe</span>
        </h1>
        <p className="text-[18px] text-center">
          Built for Agencies. Designed to Deliver.
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-16 text-base md:mt-0 mt-[-200px]">
        {/* Grid → 1 column on mobile, 3 columns on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-y-16 md:gap-y-0">
          {/* Card 1 */}
          <div className="flex flex-col items-center">
            <div className="relative flex items-center justify-center rounded-full">
              <Image
                src="/image/white-label/Frame3.png"
                alt="icon"
                width={445}
                height={390}
                className=""
              />
            </div>
            <p className=" md:order-first mt-6 text-[16px] sm:text-[18px] text-gray-700 max-w-lg mb-8 leading-snug">
              We take time to deeply <span className="text-[#FE641A] font-bold">understand your business, industry, and
              goals.</span> Then, we craft a tailored digital strategy that aligns with
              your vision.
            </p>
          </div>

          {/* Card 2 (highlighted) */}
          <div className="flex flex-col items-center p-6 rounded-xl md:mt-[-200px]">
            <div className=" relative flex items-center justify-center rounded-full ">
              <Image
                src="/image/white-label/Frame.png"
                alt="icon"
                width={400}
                height={400}
                className=""
              />
            </div>
            <p className="mt-6 text-[16px] sm:text-[18px] text-gray-700 max-w-lg bt-8 leading-snug">
              Create & Execute Our team designs, develops, and launches
              <span className="text-[#FE641A] font-bold"> impactful solutions—focused on performance</span> and results.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center">
            <div className="relative flex items-center justify-center rounded-full ">
              <Image
                src="/image/white-label/Frame3.png"
                alt="icon"
                width={745}
                height={600}
                className=""
              />
            </div>
            <p className="md:order-first mt-6 text-[16px] sm:text-[18px] text-gray-700 max-w-lg mb-25 leading-snug">
              Optimize & Grow We don’t stop at launch. <span className="text-[#FE641A] font-bold">We continuously monitor,
              analyze, and refine campaigns</span> to maximize ROI and drive
              sustainable growth.
            </p>
          </div>
        </div>

        {/* Bottom Note */}
        <p className="text-center mt-12 text-gray-600 italic text-xl sm:text-3xl font-bold">
          Skip the stress. Skip the follow-ups. We handle your marketing with speed, <br /> precision, and results you can count on.
        </p>
      </div>
    </div>
  );
};

export default WhiteLabel;
