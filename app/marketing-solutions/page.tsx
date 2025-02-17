"use client";

import Autoplay from "embla-carousel-autoplay";

import { InlineWidget } from "react-calendly";
import React, { useCallback } from "react";
import Image from "next/image";
import Head from "next/head";

import { Metadata } from "next";
import SectionLayout from "@/components/universal/SectionLayout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import { useEffect, useState, useRef } from "react";
import axios from "axios";
import emailjs from "emailjs-com";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";

interface FormValues {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  zip: string;
}

const Page = () => {
  //carousel==========
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api?.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  //=============

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",

    phone: "",
    address: "",
    zip: "",
  };
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [contactInfo, setContactInfo] = useState(initialValues);
  const [formErrors, setFormErrors] = useState<any>({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const onTextAreaInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors(validate(contactInfo));
    setIsSubmit(true);
  };

  const handlePostRequest = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://backend-bayshore.vercel.app/user/messages",
        contactInfo
      );
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Response:", response.data);

      // Fire EmailJS after successful POST request
      await handleSubmitEmail();
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitEmail = async () => {
    try {
      if (form.current) {
        const result = await emailjs.sendForm(
          "service_o",
          "template_r",
          form.current,
          "EVNtRahu"
        );
        console.log("Email sent successfully:", result.text);
        setContactInfo(initialValues);
        form.current.reset();
      }
    } catch (error) {
      console.error("Email send failed:");
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      handlePostRequest();
    }
  }, [formErrors]);

  const validate = (values: FormValues) => {
    const errors: any = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.first_name) {
      errors.first_name = "Name is required!";
    }
    if (!values.last_name) {
      errors.last_name = "Name is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phone) {
      errors.phone = "Phone number is required!";
    }
    if (!values.address) {
      errors.address = "Address is required!";
    }
    if (!values.zip) {
      errors.zip = "Zip Code is required!";
    }
    return errors;
  };

  return (
    <div className=" scroll-smooth">
      {" "}
      <SectionLayout bg="flex flex-col justify-start items-center bg-[#2B2B2B] md:py-10 lg:px-20 text-white  scroll-smooth">
        {/* step1 */}
        <div className="flex flex-col justify-start items-center ">
          <div
            className={
              "text-[26px] lg:text-[48px] font-bold text-center place-self-start pb-5"
            }
          >
            <p className="inline    ">LAW FIRM </p>
            <button
              className={
                "inline border border-[#FE5218] text-[#FE5218] bg-transparent  px-4 py-0 leading-tight rounded-full"
              }
            >
              OWNERS
            </button>
            <p className="inline   ">{` & `} </p>
            <p className="text-left inline lg:block">Legal Professionals:</p>
          </div>
          <p className="text-[16px] text-center md:text-left lg:text-[20px] md:w-[70%] place-self-start text-[#AFAFB2] pb-10 lg:pb-16">
            Your&apos;re One Step Away From Discovering How You Can Consistently
            Attract High-Value Clients Through Organic Marketing & SEO—Without
            Relying on Ads.{" "}
            <span
              className="text-[#FE5218] "
              // style={{ textUnderlineOffset: "8px" }}
            >
              GUARANTEED.
            </span>
          </p>
          <p
            className=" text-[14px] lg:text-[20px] text-center underline place-self-start
              "
            style={{ textUnderlineOffset: "5px" }}
          >
            You don&apos;t pay for effort—you pay for real, measurable growth.
          </p>
          <p className="py-10 md:py-16 text-[20px] lg:text-[48px]  place-self-start font-bold">
            <span className="text-[#FE5218] ">Step 1 of 2:</span>
             Watch Video
          </p>
          <Image
            src="/assets/new/step1.png"
            alt="hero"
            width={1900}
            height={1200}
            quality={100}
            className="w-[95%] md:w-[70%] h-auto  pb-10"
          />
        </div>
        {/* part2 */}
      </SectionLayout>
      <SectionLayout bg="bg-white  scroll-smooth  lg:px-20 ">
        <div
          id="call"
          className="flex flex-col justify-start items-center md:mt-28 "
        >
          <p className="py-5  text-[20px] lg:text-[48px]  place-self-start font-bold">
            <span className="text-[#FE5218]">Step 2 of 2:</span>
             Schedule Your Discovery Call{" "}
          </p>
          <p className=" text-[16px]    place-self-start   lg:text-[24px] pb-16 md:pb-0 ">{`Your responses are strictly confidential and will be used to tailor a customized strategy for you before our call.`}</p>
          <div className="w-full h-auto rounded-3xl  overflow-hidden">
            <InlineWidget
              url="https://calendly.com/bayshorec/45min?month=2025-02"
              styles={{
                height: "660px",
                width: "100%",
                borderRadius: "20px",
              }}
              pageSettings={{
                backgroundColor: "ffffff",
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: "#0b7788",
                textColor: "4d5055",
              }}
            />
          </div>
        </div>
        <div className="flex lg:py-20 flex-col justify-start items-center mt-10 md:mt-28 text-center w-full">
          <p
            className="text-[20px] lg:text-[28px] underline place-self-start"
            style={{ textUnderlineOffset: "8px" }}
          >
            What You’ll Learn on Your Discovery Call
          </p>
          <p className="text-[18px] lg:text-[24px] py-10 place-self-start">
            🚫 Not a sales pitch. No fluff, no gimmicks—
          </p>
          <p className="text-[18px] lg:text-[20px] pb-20 place-self-start lg:w-[60%] text-left">
            Just real, proven strategies that have helped 100+ law firms across
            the U.S. attract high-value clients through organic marketing and
            SEO.
          </p>
          <div className="flex lg:pt-10 flex-wrap gap-20 items-start justify-center">
            <div className="flex flex-col justify-start items-center gap-6 w-[320px] ">
              <div className="w-28 h-28  ">
                <Image
                  src={"/assets/new/blueprint.png"}
                  alt="hero"
                  width={100}
                  height={100}
                  quality={100}
                />
              </div>
              {/* <div className="text-[20px] font-medium text-[#FE5218]"> */}
              {/*   <p>Step-by-Step Client Acquisition Blueprint</p> */}
              {/* </div> */}
              <div className="text-[14px]">
                <p>
                  ✅ We’ll walk you through the exact system we use to generate
                  consistent legal leads, so you can apply it yourself—whether
                  you work with us or not.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-center gap-8 w-[320px] ">
              <div className="w-28 h-28  ">
                <Image
                  src={"/assets/new/flowchart.png"}
                  alt="hero"
                  width={100}
                  height={100}
                  quality={100}
                />
              </div>
              {/* <div className="text-[20px] font-medium text-[#FE5218]"> */}
              {/*   <p>Real Data, Real Flowcharts, Real Results</p> */}
              {/* </div> */}
              <div className="text-[14px]">
                <p>
                  ✅ You’ll see real numbers, real case studies, and real
                  data-driven results—including flowcharts and success metrics
                  that break down exactly how our strategy works.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-8 w-[320px] ">
              <div className="w-28 h-28  ">
                <Image
                  src={"/assets/new/growth.png"}
                  alt="hero"
                  width={100}
                  height={100}
                  quality={100}
                />
              </div>
              {/* <div className="text-[20px] font-medium text-[#FE5218]"> */}
              {/*   <p>Sustainable Growth That Works for Life</p> */}
              {/* </div> */}
              <div className="text-[14px]">
                <p>
                  ✅ Learn the step-by-step process that’s been tested and
                  refined to ensure sustainable growth for law firms like yours.
                </p>
              </div>
            </div>
            {/* <div className="flex flex-col justify-center items-center gap-8 w-[320px] "> */}
            {/*   <div> */}
            {/*     <MdPendingActions className="w-28 h-28" /> */}
            {/*   </div> */}
            {/*   <div className="text-[20px] font-medium text-[#FE5218]"> */}
            {/*     <p>An Action Plan—With or Without Us</p> */}
            {/*   </div> */}
            {/*   <div className="text-[14px]"> */}
            {/*     <p> */}
            {/*       Learn how to build a repeatable system that generates */}
            {/*       consistent leads and grows with your firm, not just short-term */}
            {/*       quick wins. */}
            {/*     </p> */}
            {/*   </div> */}
            {/* </div> */}
          </div>
        </div>
      </SectionLayout>
      <SectionLayout bg="bg-gray-200  scroll-smooth lg:px-20 ">
        {" "}
        <div className="py-5 lg:py-20 lg:px-20 xl:px-36 2xl:px-64  ">
          <p className="text-[20px] lg:text-[28px] pb-10  font-semibold  md:text-start">
            No Marketing Expertise? No Problem – We’ve Got You.
          </p>
          <ol className="text-[14px] md:text-[20px] list-none ">
            <li className="pb-4">
              <span className="font-bold">No need </span>to be a marketing
              expert.
            </li>
            <li className="pb-4">
              🚫 <span className="font-bold">No tech skills</span> or SEO
              knowledge required.
            </li>
            <li className="pb-4">
              🚫 <span className="font-bold">No wasting money</span> on
              ineffective paid ads.{" "}
            </li>
            <li className="pb-4">
              🚫 <span className="font-bold">No guessing</span> what works.
            </li>
            <li className="pb-4">
              🚫 <span className="font-bold">No overpriced agencies</span> that
              underdelivered.
            </li>
            <li className="pb-4">
              ✅ <span className="font-bold">Focus on practicing law</span>—we
              handle client acquisition.
            </li>
            <li className="pb-4">
              🔷{" "}
              <span className="font-bold">
                Attract high-value cases without paid ads.
              </span>
            </li>
            <li className="pb-4">
              🔷{" "}
              <span className="font-bold">
                Learn proven SEO & marketing strategies top firms use.
              </span>
            </li>
            <li className="pb-4">
              🔷{" "}
              <span className="font-bold">
                See real case studies, real numbers, & a step-by-step system.{" "}
              </span>
            </li>
            <li className="pb-4">
              🔷{" "}
              <span className="font-bold">
                Build a sustainable, hands-off client pipeline.
              </span>
            </li>
            <li className="pb-12">
              🔷{" "}
              <span className="font-bold">
                No gimmicks—just a clear, data-backed blueprint.{" "}
              </span>
            </li>
            <p className="pb-4">
              📈{" "}
              <span className="font-bold">
                A battle-tested system for law firms to scale & dominate.
              </span>
            </p>
            <p>
              🚀{" "}
              <span className="font-bold">
                Nothing else like this—guaranteed.
              </span>{" "}
            </p>
          </ol>
        </div>
      </SectionLayout>
      <SectionLayout bg="bg-white  scroll-smooth  lg:px-20 ">
        {" "}
        <div className="  py-5 lg:py-20">
          <div className=" text-[20px] lg:text-[48px] font-bold">
            <p>
              <span className={"text-[#FE5218] underline underline-offset-2"}>
                Recent Results
              </span>{" "}
              We&apos;ve Gotten For Agency Owners, Coaches & Consultants Just
              Like You: 
            </p>
          </div>
          <div className=" text-[18px] lg:text-[24px] py-5 lg:py-16 underline underline-offset-4">
            <p>{`How we took our clients business to the next level!`}</p>
          </div>
          {/* mobile */}
          <Carousel
            setApi={setApi}
            className={"w-full  "}
            opts={{ loop: true, align: "center" }}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className={"p-5 -ml-5"}>
              <CarouselItem className="pl-1 md:basis-1/2  ">
                <div className="pl-1">
                  <div className="p-10 ">
                    <iframe
                      src="https://www.youtube.com/embed/RVit6poGLRs?si=2WY4n0dji9pshlxZ"
                      allowFullScreen
                      className="w-full md:h-[200px] lg:h-[300px] xl:h-[350px] rounded-3xl"
                    />
                    <h3 className="text-[26px] pt-4">Trip Law</h3>
                    <p className="text-[18px]">
                      Read the feedback from our satisfied clients who have
                      benefited from our services. Their words reflect our
                      high-quality work and dedication to their success.
                    </p>
                  </div>{" "}
                </div>
              </CarouselItem>
              <CarouselItem className="pl-1 md:basis-1/2 ">
                <div className="pl-1">
                  <div className="p-10">
                    <iframe
                      src="https://www.youtube.com/embed/ohyUTzLiLbI?si=eFmJ9z2F9xSXO9g_"
                      allowFullScreen
                      className="w-full md:h-[200px] lg:h-[300px] xl:h-[350px]  rounded-3xl"
                    />
                    <h3 className="text-[26px] pt-4">Apex Advisor</h3>
                    <p className="text-[18px]">
                      Read the feedback from our satisfied clients who have
                      benefited from our services. Their words reflect our
                      high-quality work and dedication to their success.
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-1 md:basis-1/2 ">
                <div className="pl-1">
                  <div className="p-10">
                    <iframe
                      src="https://www.youtube.com/embed/iqHA7By9OAI?si=Nowq__MmNp3AUIM6"
                      allowFullScreen
                      className="w-full md:h-[200px] lg:h-[300px] xl:h-[350px]   rounded-3xl"
                    />
                    <h3 className="text-[26px] pt-4 ">Catflix</h3>
                    <p className="text-[18px]">
                      Read the feedback from our satisfied clients who have
                      benefited from our services. Their words reflect our
                      high-quality work and dedication to their success.
                    </p>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious
              className={"text-gray-700 hover:text-[#FE5218] "}
            />
            <CarouselNext className={"text-gray-700 hover:text-[#FE5218] "} />
          </Carousel>
          <div className="py-2 text-center text-sm text-muted-foreground  justify-center items-center gap-20 flex">
            <div
              className={`h-5  w-5 rounded-full  ${
                current == 1 ? "bg-[#FE5218]" : "   bg-gray-300"
              }`}
            ></div>{" "}
            <div
              className={`h-5  w-5 rounded-full  ${
                current == 2 ? "bg-[#FE5218]" : "   bg-gray-300"
              }`}
            ></div>{" "}
            <div
              className={`h-5  w-5 rounded-full  ${
                current == 3 ? "bg-[#FE5218]" : "   bg-gray-300"
              }`}
            ></div>{" "}
          </div>
          {/* desktop */}
          {/* <Carousel
            setApi={setApi}
            className={"w-full hidden md:block"}
            opts={{ loop: true, align: "end" }}
            // plugins={[plugin.current]}
            // onMouseEnter={plugin.current.stop}
            // onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className={"p-5 "}>
              <CarouselItem className="pl-1 md:basis-1/2  ">
                <div className="p-10">
                  <Image
                    src="/assets/new/trip.png"
                    alt="hero"
                    width={356}
                    height={200}
                    quality={100}
                    className="w-full rounded-3xl"
                  />
                  <h3 className="text-[26px] pt-4">Trip Law</h3>
                  <p className="text-[18px]">
                    Read the feedback from our satisfied clients who have
                    benefited from our services. Their words reflect our
                    high-quality work and dedication to their success.
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-1 md:basis-1/2 ">
                <div className="p-10">
                  <Image
                    src="/assets/new/apex.png"
                    alt="hero"
                    width={356}
                    height={200}
                    quality={100}
                    className="w-full rounded-3xl"
                  />
                  <h3 className="text-[26px] pt-4">Apex Advisor</h3>
                  <p className="text-[18px]">
                    Read the feedback from our satisfied clients who have
                    benefited from our services. Their words reflect our
                    high-quality work and dedication to their success.
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-1 md:basis-1/2 ">
                <div className="p-10">
                  <Image
                    src="/assets/new/cat.png"
                    alt="hero"
                    width={356}
                    height={200}
                    quality={100}
                    className="w-full rounded-3xl"
                  />
                  <h3 className="text-[26px] pt-4 ">Catflix</h3>
                  <p className="text-[18px]">
                    Read the feedback from our satisfied clients who have
                    benefited from our services. Their words reflect our
                    high-quality work and dedication to their success.
                  </p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious
              className={"text-gray-700 hover:text-[#FE5218] hidden md:block"}
            />
            <CarouselNext
              className={"text-gray-700 hover:text-[#FE5218] hidden md:block"}
            />
          </Carousel> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-44"></div>
        </div>
      </SectionLayout>
      <SectionLayout bg="bg-[#2B2B2B] py-5 lg:py-20  lg:px-20  scroll-smooth">
        <div
          className={
            "grid grid-cols-1 xl:grid-cols-2 h-fit  items-center lg:h-fit gap-20 p-5"
          }
        >
          <div>
            <h2 className="text-[#FE5218] pb-5 text-[30px] lg:text-[48px] font-bold ">
              Why Us?
            </h2>
            <p className="text-white pb-10 m-auto text-[18px] lg:text-[24px] ">
              We’re not here to sell—we’re here to show you exactly how to get
              real results using the same system that has worked for 100+ law
              firms across the U.S.
            </p>
            <div className=" text-white  text-[18px] lg:text-[24px]  font-semibold">
              🚀 If you’re looking for a marketing partner that understands the
              legal industry and delivers real, measurable results— you’re in
              the right place. Let’s grow your firm together.
            </div>
          </div>
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            orientation="vertical"
            className={"px-5"}
            // plugins={[plugin.current]}
            // onMouseEnter={plugin.current.stop}
            // onMouseLeave={plugin.current.reset}
          >
            <CarouselContent
              className={"p-5 lg:-mt-1 h-[335px] lg:h-[500px] text-white"}
            >
              <CarouselItem className="pt-0 md:basis-1/2 ">
                <div className="flex flex-col gap-5 p-8 bg-[#30323E]  h-full  rounded-3xl">
                  <div className="h-[70px] w-[70px]">
                    <Image
                      src="/assets/new/why.png"
                      alt="hero"
                      width={400}
                      height={200}
                      quality={100}
                      className=" rounded-3xl"
                    />
                  </div>
                  <div className="font-medium  text-[16px]">
                    <p>We Specialize in Law Firm Growth</p>
                  </div>
                  <div className="text-[14px]">
                    <p>
                      We Specialize in Law Firm Growth – Unlike generic
                      marketing agencies, we focus exclusively on helping law
                      firms attract high-value clients through organic marketing
                      and SEO.
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-1 md:basis-1/2 ">
                <div className="flex flex-col gap-5 p-8 bg-[#30323E]   h-full  rounded-3xl">
                  <div className="h-[70px] w-[70px]">
                    <Image
                      src="/assets/new/why.png"
                      alt="hero"
                      width={400}
                      height={200}
                      quality={100}
                      className=" rounded-3xl"
                    />
                  </div>

                  <div className="font-medium text-[16px]">
                    <p>Proven Track Record</p>
                  </div>
                  <div className="text-[14px]">
                    <p>
                      Since 2016, we’ve helped 100+ law firms across the U.S.
                      consistently generate more cases and increase
                      revenue—without relying on expensive ads.
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-1 md:basis-1/2 ">
                <div className="flex flex-col gap-5 p-8  bg-[#30323E]  h-full   rounded-3xl">
                  <div className="h-[70px] w-[70px]">
                    <Image
                      src="/assets/new/why.png"
                      alt="hero"
                      width={400}
                      height={200}
                      quality={100}
                      className=" rounded-3xl"
                    />
                  </div>
                  <div className="font-medium text-[16px]">
                    <p>Organic, Sustainable Growth</p>
                  </div>
                  <div className="text-[14px]">
                    <p>
                      Our strategies ensure long-term success, not just
                      short-term spikes. We create a system that works for a
                      lifetime and grows as your firm grows.
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-1 md:basis-1/2 ">
                <div className="flex flex-col gap-5 p-8  bg-[#30323E]  h-full   rounded-3xl">
                  <div className="h-[70px] w-[70px]">
                    <Image
                      src="/assets/new/why.png"
                      alt="hero"
                      width={400}
                      height={200}
                      quality={100}
                      className=" rounded-3xl"
                    />
                  </div>
                  <div className="font-medium  text-[16px]">
                    <p>No Guesswork</p>
                  </div>
                  <div className="text-[14px]">
                    <p>
                      Just Results – We use data-driven insights, real case
                      studies, and a step-by-step blueprint to ensure that your
                      firm ranks higher, attracts more clients, and converts
                      leads effectively.
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-1 md:basis-1/2 ">
                <div className="flex flex-col gap-5 p-8 bg-[#30323E]  h-full   rounded-3xl">
                  <div className="h-[70px] w-[70px]">
                    <Image
                      src="/assets/new/why.png"
                      alt="hero"
                      width={400}
                      height={200}
                      quality={100}
                      className=" rounded-3xl"
                    />
                  </div>

                  <div className="font-medium  text-[16px]">
                    <p>Tailored for Your Practice</p>
                  </div>
                  <div className="text-[14px]">
                    <p>
                      Whether you’re a solo attorney or a multi-location law
                      firm, we design a custom growth strategy that fits your
                      specific goals and legal niche.
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-1 md:basis-1/2 ">
                <div className="flex flex-col gap-5 p-8 bg-[#30323E] h-full  rounded-3xl">
                  <div className="h-[70px] w-[70px]">
                    <Image
                      src="/assets/new/why.png"
                      alt="hero"
                      width={400}
                      height={200}
                      quality={100}
                      className=" rounded-3xl"
                    />
                  </div>
                  <div className="font-medium  text-[16px]">
                    <p>We Empower You</p>
                  </div>
                  <div className="text-[14px]">
                    <p>
                      We don’t just provide a service—we train you and your team
                      to build a repeatable process that ensures continuous
                      growth—with or without us.
                    </p>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious
              className={"text-gray-100 hover:text-[#FE5218]"}
            />
            <CarouselNext className={"text-gray-100 hover:text-[#FE5218]"} />
          </Carousel>
        </div>
      </SectionLayout>
      <SectionLayout bg="bg-[#F4F4F4]  scroll-smooth  lg:px-20 ">
        <div className=" bg-gray-200 rounded-3xl border border-gray-300 px-8 py-12 lg:p-20 shadow-xl lg:mx-52 m-auto">
          <div>
            <h2 className="font-bold text-[24px] lg:text-[36px] text-center">
              Ready to Schedule Your Meeting?
            </h2>
          </div>
          <div>
            <p className="font-medium lg:text-[20px] text-center">
              {" "}
              Don’t wait—book your meeting today and start growth your business
              and your.
            </p>
          </div>
          <div>
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="pt-10 lg:pt-20 lg:w-[90%] m-auto"
            >
              <div className="flex flex-col md:flex-row justify-between md:gap-10">
                <div className="flex-1 mt-2">
                  <label className={" pl-4 pb-2"}>First Name</label>
                  <input
                    className="appearance-none  rounded-3xl w-full  mb-8 py-8 px-4 leading-tight focus:outline-none focus:shadow-outline text-small  sm:text-[1.4rem] lg:text-[1.4rem] md:text-justify "
                    type="text"
                    placeholder="Enter your first name"
                    name="first_name"
                    id="first_name"
                    value={contactInfo.first_name}
                    onChange={handleChange}
                  />
                  <span className="text-orange-600">
                    {formErrors.first_name}
                  </span>

                  <label className=" md:hidden pl-4 pb-2">Last Name</label>
                  <input
                    className="appearance-none md:hidden  rounded-3xl w-full    mb-8  py-8 px-4 leading-tight focus:outline-none focus:shadow-outline text-small  sm:text-[1.4rem] lg:text-[1.4rem] md:text-justify "
                    type="text"
                    placeholder="Enter your last name"
                    name="last_name"
                    id="last_name"
                    value={contactInfo.last_name}
                    onChange={handleChange}
                  />
                  <span className="text-orange-600 md:hidden">
                    {formErrors.last_name}
                  </span>

                  <label className={" pl-4 pb-4 "}>Email</label>
                  <input
                    className="appearance-none  rounded-3xl w-full   mt-2 mb-8  py-8 px-4 leading-tight focus:outline-none focus:shadow-outline text-small  sm:text-[1.4rem] lg:text-[1.4rem] md:text-justify "
                    type="text"
                    placeholder="Enter your email"
                    name="email"
                    id="email"
                    value={contactInfo.email}
                    onChange={handleChange}
                  />
                  <span className="text-orange-600">{formErrors.email}</span>
                  <label className=" md:hidden pl-4 pb-2">Phone</label>
                  <input
                    className="appearance-none  md:hidden rounded-3xl w-full    mb-8  py-8 px-4 leading-tight focus:outline-none focus:shadow-outline text-small  sm:text-[1.4rem] lg:text-[1.4rem] md:text-justify "
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    id="phone"
                    value={contactInfo.phone}
                    onChange={handleChange}
                  />
                  <span className="text-orange-600 md:hidden">
                    {formErrors.phone}
                  </span>
                  <label className={" pl-4 pb-2"}>Street Address</label>
                  <input
                    name="address"
                    id="address"
                    value={contactInfo.address}
                    onChange={handleChange}
                    className="appearance-none  rounded-3xl w-full  mt-1   mb-8 py-8 px-4 leading-tight focus:outline-none focus:shadow-outline text-small  sm:text-[1.4rem] lg:text-[1.4rem] md:text-justify"
                    placeholder="Street address"
                  />
                  <span className="text-orange-600">{formErrors.address}</span>
                  <label className={" pl-4 pb-2 md:hidden"}>Zip Code</label>
                  <div className="flex-1 md:hidden">
                    <input
                      name="zip"
                      id="zip"
                      value={contactInfo.zip}
                      onChange={handleChange}
                      className="appearance-none  rounded-3xl w-full   mb-8  py-8 px-4 leading-tight focus:outline-none focus:shadow-outline text-small  sm:text-[1.4rem] lg:text-[1.4rem] md:text-justify  "
                      placeholder="Zip Code"
                    />
                    <span className="text-orange-600 md:hidden">
                      {formErrors.zip}
                    </span>
                  </div>
                </div>
                <div className="flex-1 ">
                  <label className="hidden md:block pl-4 pb-2">Last Name</label>
                  <input
                    className="appearance-none hidden md:block rounded-3xl w-full    mb-8  py-8 px-4 leading-tight focus:outline-none focus:shadow-outline text-small  sm:text-[1.4rem] lg:text-[1.4rem] md:text-justify "
                    type="text"
                    placeholder="Enter your last name"
                    name="last_name"
                    id="last_name"
                    value={contactInfo.last_name}
                    onChange={handleChange}
                  />

                  <span className="text-orange-600 hidden md:block">
                    {formErrors.last_name}
                  </span>
                  <label className="hidden md:block pl-4 pb-2">Phone</label>
                  <input
                    className="appearance-none  rounded-3xl w-full    hidden md:block  mb-8  py-8 px-4 leading-tight focus:outline-none focus:shadow-outline text-small  sm:text-[1.4rem] lg:text-[1.4rem] md:text-justify "
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    id="phone"
                    value={contactInfo.phone}
                    onChange={handleChange}
                  />
                  <span className="text-orange-600 hidden md:block">
                    {formErrors.phone}
                  </span>

                  <label className={" pl-4 pb-2 hidden md:block"}>
                    Zip Code
                  </label>
                  <div className="flex-1 hidden md:block">
                    <input
                      name="zip"
                      id="zip"
                      value={contactInfo.zip}
                      onChange={handleChange}
                      className="appearance-none  rounded-3xl w-full   mb-8  py-8 px-4 leading-tight focus:outline-none focus:shadow-outline text-small  sm:text-[1.4rem] lg:text-[1.4rem] md:text-justify  "
                      placeholder="Zip Code"
                    />
                    <span className="text-orange-600 hidden md:block">
                      {formErrors.zip}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-3 w-full lg:w-1/3 m-auto flex justify-center items-center text-white">
                {loading ? (
                  <button
                    disabled
                    type="button"
                    className="btn text-[11px] md:text-small !py-4 flex text-white items-center gap-2 md:gap-8 r-button border-2 border-primary hover:text-[#FE6F1F] "
                  >
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="inline w-4 h-4 me-3 text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                    Submitting...
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn text-[11px] md:text-small !py-4 flex text-white items-center gap-2 md:gap-8 r-button border-2 border-primary hover:text-[#FE6F1F]"
                  >
                    Book Your Session Now{" "}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-5 justify-start items-start pt-36 ">
          <div className="text-[26px] lg:text-[36px] font-bold text-center md:px-12">
            <p>
              We&apos;re Also Rated &apos;&apos;Excellent&apos;&apos; On
              TrustPilot
            </p>
          </div>
          <div className={"place-self-center md:px-12 md:place-self-start "}>
            <Image
              src="/assets/new/star.png"
              alt="star"
              width={200}
              height={100}
              quality={100}
            />
          </div>

          <div className="py-10 text-[26px] md:px-12">
            <ol className="text-[16px] md:text-[20px]  list-none ">
              <li className="pb-4">
                ✔️ <span className="font-bold">Attract High-Value Clients</span>{" "}
                – A proven system for steady case flow.
              </li>
              <li className="pb-4">
                ✔️ <span className="font-bold">Dominate Your Niche</span> – Be
                the top choice in your practice area.
              </li>
              <li className="pb-4">
                ✔️ <span className="font-bold">Master Organic Growth</span> –
                Get leads on autopilot, no ad spend.
              </li>
              <li className="pb-4">
                ✔️ <span className="font-bold">Fill Your Calendar</span> –
                30-100+ client calls per month.
              </li>
              <li className="pb-4">
                ✔️ <span className="font-bold">Convert More Leads</span> – Turn
                prospects into paying clients.
              </li>
              <li className="pb-4">
                ✔️ <span className="font-bold">Scale Efficiently</span> – Grow
                beyond referrals & guesswork.
              </li>
              <li className="pb-4">
                ✔️ <span className="font-bold">Maximize Profits</span> – More
                clients, lower costs.
              </li>
              <li className="pb-4">
                ✔️ <span className="font-bold">Think Like a Leader</span> –
                Strategies top firms use to win.
              </li>
              <li className="pb-12">
                ✔️ <span className="font-bold">{`Streamline & Scale`}</span> – A
                repeatable system for lasting success.
              </li>
              <li className="pb-4 font-bold">The Endgame?</li>
              <li className="pb-4">
                A thriving, effortlessly growing law firm with more{" "}
                <span className="font-bold">cases</span>,{" "}
                <span className="font-bold">revenue</span>, and{" "}
                <span className="font-bold">freedom</span>.
              </li>
              <p className="pb-4">
                🚀 <span className="font-bold">Risk-Free Guarantee</span> –
                Proven strategies, step-by-step training, and a winning
                community.{" "}
              </p>
              <p className="pb-4">
                📞 Ready to go from unpredictable to unstoppable?{" "}
                <span className="font-bold">Schedule a call now!</span>
              </p>
            </ol>
          </div>
        </div>
        <div className="bg-[#1D1F32] my-10 md:my-20  rounded-3xl !text-white  scroll-smooth">
          <SectionLayout bg=" scroll-smooth">
            <div className="flex flex-col items-center">
              <h2 className="heading-secondary !text-white">
                Consultations for Our Service
              </h2>
              <p className="text-base !text-center !text-white max-w-[622px] mx-auto mb-10">
                {` Consultations for our service are free and easy. Simply click below to
            fix a suitable date and time that works for you. We'll contact you
            shortly. Don’t miss this opportunity.
            `}
              </p>

              <Link href={"https://calendly.com/bayshorec/45min?month=2025-02"}>
                <button className="btn text-[11px] md:text-small !py-4 flex text-white items-center gap-2 md:gap-8 r-button border-2 border-primary hover:text-[#FE6F1F]">
                  <span>Book now 45 min Free Consultation</span>
                  <span className="inline-block translate-y-[2px] ml-2">
                    <AiOutlineRight />
                  </span>
                </button>
              </Link>
            </div>
          </SectionLayout>
        </div>
      </SectionLayout>
    </div>
  );
};
export default Page;
