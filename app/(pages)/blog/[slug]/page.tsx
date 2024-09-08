import Consultaion from '@/components/universal/Consultaion';
import { HeroWithImage } from '@/components/universal/Hero';
import HeroLeft from '@/components/universal/HeroLeft';
import SectionLayout from '@/components/universal/SectionLayout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import parser from 'html-react-parser';
import AboutUs from '@/components/universal/AboutUs';
import GetAllBlogData from '@/lib/GetAllBlogData';
import parse from 'html-react-parser';

// export const metadata: Metadata = {
//   title: 'Blogs: Expert Tips and Strategies from Our Agency',
//   description: `You've chosen the best place to learn more about web marketing and how to develop your online presence. Our blog features insightful articles from our team of experts, covering topics such as SEO, social media, content marketing, web design, and more. You'll discover useful tactics and tips that you may use in your own business. By reading our blog, you may keep up with the most recent trends and best practices in the digital world.`,
// };

interface BlogPost {
  slug: string;
  title: string;
  body: string;
  excerpt: string;
  featuredImage: {
    image: {
      url: string;
    };
  };
}

interface Metadata {
  title: string;
  description: string;
  openGraph: {
    title: string;
    description: string;
    images: string[];
    url: string;
    type: string;
    site_name: string;
  };
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blogPostData = await GetAllBlogData();

  // Find blog post details by slug
  const blogDetails: BlogPost | undefined = blogPostData?.data?.find(
    (blogs: BlogPost) => blogs.slug === params.slug,
  );

  // If no blog is found, return default metadata
  if (!blogDetails) {
    return {
      title: 'Blog not found',
      description: 'No blog post available.',
      openGraph: {
        title: 'Blog not found',
        description: 'No blog post available.',
        images: [],
        url: 'https://www.bayshorecommunication.com/blog/not-found',
        type: 'article',
        site_name: 'Bayshorecommunication',
      },
    };
  }

  // Parse the blog body and extract description
  let description: any[] = parse(blogDetails.body) as any[];

  // Fallback to blogDetails.excerpt if description parsing fails
  const parsedDescription =
    description?.[0]?.props?.children?.toString() || blogDetails.excerpt;

  return {
    title: blogDetails.title,
    description: parsedDescription,
    openGraph: {
      title: blogDetails.title,
      description: parsedDescription,
      images: [blogDetails.featuredImage?.image?.url || ''],
      url: `https://www.bayshorecommunication.com/blog/${blogDetails.slug}`,
      type: 'article',
      site_name: 'Bayshorecommunication',
    },
  };
}

const IndividualBlog = async ({ params }: { params: { slug: string } }) => {
  const blogData = await GetAllBlogData();

  const parameter = params.slug;
  const indvblog = blogData?.data?.filter(
    (elem: any) => elem.slug === parameter,
  );

  const today = new Date();
  const dateToday = `${today.getDate()} / ${
    today.getMonth() + 1
  } / ${today.getFullYear()}`;

  const dateFormate = (date: any) => {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    return formattedDate;
  };

  return (
    <>
      {/* <div className="relative">
        <Image
          src="/assets/dummy-individual-blog.png"
          alt="individual-blog"
          width={2400}
          height={2400}
          className="object-cover w-full h-auto"
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

      <SectionLayout bg=''>
        <div className='h-[100%] service-style'>
          <div className='container'>
            {indvblog
              ?.filter((blog: any) => blog?.published === true)
              ?.map((elem: any, index: any) => (
                <div key={index}>
                  <div className='flex gap-x-10'>
                    <div className='flex-[3]'>
                      <div>
                        {/* <img
                          src={elem.featuredImage.image.url}
                          alt={elem.featuredImage.altText}
                          className="w-full h-full"
                        /> */}
                        <Image
                          src={elem?.featuredImage?.image?.url}
                          alt='no_image'
                          width={2400}
                          height={2400}
                          className='w-full h-full'
                        />
                        <div className='flex gap-4 py-6'>
                          {/* <VscCalendar size={22} /> {dateToday} */}
                          {dateFormate(elem.createdAt)}
                        </div>

                        <div>
                          <h1 className='font-semibold text-[80px] leading-normal'>
                            {elem.title}
                          </h1>
                        </div>

                        <div className='externallink'>{parser(elem.body)}</div>
                      </div>
                    </div>

                    <div className='flex-1 hidden sm:block'>
                      {/* <div className="bg-[url('/assets/help-banner-bg.jpg')]">
                  <h4>
                    Need <br />
                    Consultacy Help?
                  </h4>
                  <p className="mb-4 text-base">
                    We are here to give you 24/7 hours services.
                  </p>
                  <Link href="/contact">Contact Us</Link>
                </div> */}
                      <div className='sticky top-24'>
                        <BlogNavigation />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </SectionLayout>

      {/* <AboutUs /> */}
      <Consultaion />
    </>
  );
};

export default IndividualBlog;

const BlogNavigation = async () => {
  const blogData = await GetAllBlogData();
  return (
    <>
      {blogData?.data
        ?.filter(
          (blog: any) =>
            blog?.published === true && blog?.category[0] !== 'Job Post',
        )
        ?.map((elem: any, index: any) => (
          <div key={index}>
            <Link
              className='flex gap-5 p-4 mb-4 rounded shadow-md bg-slate-500 '
              href={`/blog/${elem.slug}`}
            >
              {/* <img
                src={elem.featuredImage.image.url}
                alt={elem.featuredImage.altText}
                className="w-[100px] h-[80px]"
              /> */}
              <Image
                src={elem?.featuredImage?.image?.url}
                alt='blog_image'
                width={3109}
                height={1752}
                className='w-[100px] h-[80px]'
              />
              <p className='!text-xl'>{elem.title}</p>
            </Link>
          </div>
        ))}
    </>
  );
};
