import Image from "next/image";
import React from "react";
import SectionLayout from "../SectionLayout";
import { IoCallOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";

const CPFooter = () => {
  return (
    <div className="relative h-[230vh] lg:h-[100vh] xl:[90vh] w-full">
      {/* Background Image */}
      <Image
        src="/assets/company-profile/footer-bg.png"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />

      {/* Content */}
      <div className=" absolute inset-0 flex flex-col items-center justify-evenly z-10 py-10">
        {/* Title Text */}
        <SectionLayout bg="">
          <div className=" w-full   lg:py-20 lg:px-10 text-center bg-[rgba(0,0,0,0.6)] p-4 rounded-lg">
            <h1 className="text-white md:text-6xl lg:!text-[70px] font-bold uppercase ">
              THANK YOU
            </h1>
          </div>
        </SectionLayout>
        {/* Bottom Title and Text */}
        <SectionLayout bg="w-full  ">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Tampa Office */}
            <div className="w-full lg:w-1/2 text-center px-8">
              <h4 className="text-[40px] font-bold text-white mb-8">
                Tampa Office
              </h4>

              <div className="mb-8">
                <div className="flex gap-2 items-center justify-center mb-2">
                  <IoCallOutline size={30} color="#F77224" />{" "}
                  <span className="text-[30px] font-semibold text-white">
                    Phone
                  </span>
                </div>
                <p className="text-[22px] text-white">+1 (509) 592-1745</p>
              </div>
              <div className="mb-8">
                <div className="flex gap-2 items-center justify-center mb-2">
                  <GrLocation size={30} color="#F77224" />{" "}
                  <span className="text-[30px] font-semibold text-white">
                    Address
                  </span>
                </div>
                <p className="text-[22px] text-white">
                  1301 34th ST South, St. Petersburg FL 33711
                </p>
              </div>

              <div className="mb-8">
                <div className="flex gap-2 items-center justify-center mb-2">
                  <MdOutlineEmail size={30} color="#F77224" />{" "}
                  <span className="text-[30px] font-semibold text-white">
                    Email
                  </span>
                </div>
                <p className="text-[22px] text-white">
                  neel@bayshorecommunication.com
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block h-[400px] w-1 bg-[#F77224]"></div>

            {/* Asia Office */}
            <div className="w-full lg:w-1/2 text-center px-8">
              <h4 className="text-[40px] font-bold text-white mb-8">
                Asia Office
              </h4>

              <div className="mb-8">
                <div className="flex gap-2 items-center justify-center mb-2">
                  <IoCallOutline size={30} color="#F77224" />{" "}
                  <span className="text-[30px] font-semibold text-white">
                    Phone
                  </span>
                </div>
                <p className="text-[22px] text-white">+880 168-503-5449</p>
              </div>
              <div className="mb-8">
                <div className="flex gap-2 items-center justify-center mb-2">
                  <GrLocation size={30} color="#F77224" />{" "}
                  <span className="text-[30px] font-semibold text-white">
                    Address
                  </span>
                </div>
                <p className="text-[22px] text-white">
                  F-2, H-21, R-1, B-A, Aftab Nagar, Dhaka-1212
                </p>
              </div>

              <div className="mb-8">
                <div className="flex gap-2 items-center justify-center mb-2">
                  <MdOutlineEmail size={30} color="#F77224" />{" "}
                  <span className="text-[30px] font-semibold text-white">
                    Email
                  </span>
                </div>
                <p className="text-[22px] text-white">
                  info@bayshorecommunication.com
                </p>
              </div>
            </div>
          </div>
        </SectionLayout>
      </div>
    </div>
  );
};

export default CPFooter;
