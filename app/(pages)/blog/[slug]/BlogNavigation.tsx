import Link from "next/link";
import React from "react";
import Image from "next/image";



const BlogNavigation = () => {
  return (
    <>
      <div className="">
        <Link className="flex" href="/blog/how_google_maps_can_help_your_business">
          <Image  src="/image/blog-img-1.jpg" alt="blog_image" width={2400}
                    height={2400} className="w-[150px] h-auto"/>{" "}
          <p>How Google Maps Can Help Your business</p>
        </Link>
        <Link className="flex" href="/blog/why_is_an_seo_friendly_website_important_for_usiness">
          <Image src="/image/blog-img-2.jpg" alt="blog_image" width={2400}
                    height={2400} className="w-[150px] h-auto"/>{" "}
          <p>Why is an SEO Friendly Website Important for Business</p>
        </Link>
      </div>
    </>
  );
};

export default BlogNavigation;
