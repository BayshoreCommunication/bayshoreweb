import Consultaion from "@/components/universal/Consultaion";
import { HeroWithImage } from "@/components/universal/Hero";
import HeroLeft from "@/components/universal/HeroLeft";
import SectionLayout from "@/components/universal/SectionLayout";
import { Metadata } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { VscCalendar } from "react-icons/vsc";
import { blogindv } from "../page";
import { useParams } from "next/navigation";
import parser from "html-react-parser";
import AboutUs from "@/components/universal/AboutUs";

export const metadata: Metadata = {
  title: "Blogs: Expert Tips and Strategies from Our Agency",
  description: `You've chosen the best place to learn more about web marketing and how to develop your online presence. Our blog features insightful articles from our team of experts, covering topics such as SEO, social media, content marketing, web design, and more. You'll discover useful tactics and tips that you may use in your own business. By reading our blog, you may keep up with the most recent trends and best practices in the digital world.`,
};

const IndividualBlog = ({ params }: { params: { slug: string } }) => {
  const parameter = params.slug;
  console.log(parameter);
  const indvblog = blogindv.filter(
    (elem) =>
      elem.url
        .replace(/\s+/g, "_") // Replace spaces with dashes globally
        .toLowerCase() === parameter
  );
  console.log(indvblog);

  const today = new Date();
  const dateToday = `${today.getDate()} / ${
    today.getMonth() + 1
  } / ${today.getFullYear()}`;

  return (
    <>
      {/* <div className="relative">
        <Image
          src="/assets/dummy-individual-blog.png"
          alt="individual-blog"
          width={2400}
          height={2400}
          className="w-full h-auto object-cover"
        />

        <div className="absolute transform left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
          <Image
            src="/assets/individual-service-logo.png"
            alt="individual-blog"
            width={2400}
            height={2400}
            className="w-[493px] h-auto object-cover"
          />
        </div>
      </div> */}

      <SectionLayout bg="">
        <div className="h-[100%] service-style">
          <div className="container">
            {indvblog.map((elem, index) => (
              <div key={index}>
                <div className="flex gap-x-10">
                  <div className="flex-[3]">
                    <div>
                      <Image
                        src={`/assets/${elem.blogImg}`}
                        alt="no_image"
                        width={2400}
                        height={2400}
                        className="w-full h-full"
                      />
                      <div className="flex py-6 gap-4">
                        <VscCalendar size={22} /> {dateToday}
                      </div>

                      <div>
                        <h1 className="heading-primary">{elem.title}</h1>
                      </div>

                      <div>{parser(elem.desc)}</div>
                    </div>
                  </div>

                  <div className="flex-1">
                    {/* <div className="bg-[url('/assets/help-banner-bg.jpg')]">
                  <h4>
                    Need <br />
                    Consultacy Help?
                  </h4>
                  <p className="text-base mb-4">
                    We are here to give you 24/7 hours services.
                  </p>
                  <Link href="/contact">Contact Us</Link>
                </div> */}
                    <BlogNavigation />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionLayout>

      <AboutUs />
      <Consultaion />
    </>
  );
};

export default IndividualBlog;

const BlogNavigation = () => {
  return (
    <>
      {blogindv.map((elem: any, index: any) => (
        <div key={index}>
          <Link
            className="flex gap-5 p-4 shadow-md mb-4 bg-slate-500 rounded "
            href={`/blog/${elem.url
              .replace(/\s+/g, "_") // Replace spaces with dashes globally
              .toLowerCase()}`}
          >
            <Image
              src={`/assets/${elem.blogImg}`}
              alt="blog_image"
              width={3109}
              height={1752}
              className="w-[100px] h-[80px]"
            />{" "}
            <p className="!text-xl">{elem.title}</p>
          </Link>
        </div>
      ))}
    </>
  );
};
