import React from "react";
import Image from "next/image";
import Link from "next/link";
import GetAllBlogData from "@/lib/GetAllBlogData";

export default async function RightSideBar() {
  const blogData = await GetAllBlogData({ page: 1, limit: 10 });

  const blogs =
    blogData?.data?.filter(
      (blog: any) =>
        blog?.published === true && blog?.category?.[0] !== "Job Post",
    ) || [];

  return (
    <aside className="w-full max-w-[400px] space-y-8 pt-0 md:pt-16 mb-8">
      {/* Tampa Office */}
      <div className="bg-gray-100 rounded-lg p-6 text-center">
        <h3 className="text-2xl md:text-4xl font-bold mb-6">
          Our Tampa Office
        </h3>

        <div className="h-80 rounded mb-4 overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.0464316651223!2d-82.33483412385269!3d27.9618642142186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2ceef2359d495%3A0x5ea1da62ec45196d!2s1211%20Tech%20Blvd%20Suite%20120%2C%20Tampa%2C%20FL%2033619%2C%20USA!5e0!3m2!1sen!2sbd!4v1773739735419!5m2!1sen!2sbd"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>

        <p className="font-semibold uppercase">
          1211 Tech Blvd Suite 120, Tampa, FL 33619, United States
        </p>

        <a
          href="tel:+15095921745"
          className="text-blue-600 font-bold mt-3 block hover:underline"
        >
          +1 (509) 592-1745
        </a>

        <a
          href="https://maps.app.goo.gl/G34fyB9PJL8mQV4d6"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block bg-primary text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          GET DIRECTIONS
        </a>
      </div>

      {/* 🔥 Recent Blogs */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-2xl md:text-4xl font-bold mb-6 text-left">
          Recent Blogs
        </h3>

        <div className="space-y-4">
          {blogs.map((blog: any, index: number) => (
            <Link
              key={index}
              href={`/blog/${blog.slug}`}
              className="flex gap-4 items-center group"
            >
              <Image
                src={
                  blog?.featuredImage?.image?.url ||
                  "/assets/blog/blog-hero-img.svg"
                }
                alt={blog.title}
                width={100}
                height={80}
                className="w-[90px] h-[70px] object-cover rounded"
              />

              <p className="text-xl md:text-2xl font-medium group-hover:text-primary transition line-clamp-2">
                {blog.title}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Asia Office */}
      <div className="bg-gray-100 rounded-lg p-6 text-center">
        <h3 className="text-2xl md:text-4xl font-bold mb-6">Our Asia Office</h3>

        <div className="h-80 rounded mb-4 overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.4408766314414!2d90.42040478660444!3d23.767309933114706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b034c41ee3%3A0xcc910714b71e8f2b!2sBayshore%20Communication!5e0!3m2!1sen!2sbd!4v1773740428610!5m2!1sen!2sbd"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>

        <p className="font-semibold uppercase">Dhaka, Bangladesh</p>

        <a
          href="tel:+8801685035449"
          className="text-blue-600 font-bold mt-3 block hover:underline"
        >
          +8801685035449
        </a>

        <a
          href="https://maps.app.goo.gl/bCsupYTJxMMrsKCu9"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block bg-primary text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          GET DIRECTIONS
        </a>
      </div>
    </aside>
  );
}
