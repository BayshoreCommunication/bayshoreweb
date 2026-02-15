import Consultaion from "@/components/universal/Consultaion";
import SectionLayout from "@/components/universal/SectionLayout";
import GetAllBlogData from "@/lib/GetAllBlogData";
import parser from "html-react-parser";
import Image from "next/image";
import Link from "next/link";

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
    images: any;
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
    (blogs: BlogPost) => blogs.slug === params.slug
  );

  // If no blog is found, return default metadata
  if (!blogDetails) {
    return {
      title: "Blog not found",
      description: "No blog post available.",
      openGraph: {
        title: "Blog not found",
        description: "No blog post available.",
        images: [],
        url: "https://www.bayshorecommunication.com/blog/not-found",
        type: "article",
        site_name: "Bayshorecommunication",
      },
    };
  }
  const rawDescription = blogDetails.body || "";
  const plainTextDescription = rawDescription.replace(/<[^>]+>/g, "");
  const shortDescription = plainTextDescription.slice(0, 200);

  // Fallback to blogDetails.excerpt if description parsing fails

  //console.log(shortDescription);

  return {
    title: blogDetails.title,
    description: shortDescription,
    openGraph: {
      title: blogDetails.title,
      description: shortDescription,
      images: [
        {
          url: `${blogDetails.featuredImage?.image?.url}`,
          width: 1200,
          height: 600,
          alt: blogDetails.title,
        },
      ],
      url: `https://www.bayshorecommunication.com/blog/${blogDetails.slug}`,
      type: "article",
      site_name: "Bayshorecommunication",
    },
  };
}

const IndividualBlog = async ({ params }: { params: { slug: string } }) => {
  const blogData = await GetAllBlogData();

  const parameter = params.slug;
  
  // Handle API error or no data
  if (!blogData?.data || blogData.data.length === 0) {
    return (
      <>
        <SectionLayout bg="">
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <h1 className="heading-primary text-center">Blog Not Found</h1>
            <p className="text-base text-center max-w-[622px] mx-auto mt-4">
              {blogData?.error || "Unable to load blog data. Please try again later."}
            </p>
            <Link href="/blog" className="mt-6">
              <button className="text-gray-500 font-semibold text-small border border-gray-800 rounded-full p-5 hover:!bg-[#FE6F1F] hover:text-white hover:border-[#FE6F1F]">
                Back to Blogs
              </button>
            </Link>
          </div>
        </SectionLayout>
        <Consultaion />
      </>
    );
  }

  const indvblog = blogData?.data?.filter(
    (elem: any) => elem.slug === parameter
  );

  // Handle blog not found
  if (!indvblog || indvblog.length === 0) {
    return (
      <>
        <SectionLayout bg="">
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <h1 className="heading-primary text-center">Blog Not Found</h1>
            <p className="text-base text-center max-w-[622px] mx-auto mt-4">
              The blog post you're looking for doesn't exist or has been removed.
            </p>
            <Link href="/blog" className="mt-6">
              <button className="text-gray-500 font-semibold text-small border border-gray-800 rounded-full p-5 hover:!bg-[#FE6F1F] hover:text-white hover:border-[#FE6F1F]">
                Back to Blogs
              </button>
            </Link>
          </div>
        </SectionLayout>
        <Consultaion />
      </>
    );
  }

  const today = new Date();
  const dateToday = `${today.getDate()} / ${
    today.getMonth() + 1
  } / ${today.getFullYear()}`;

  const dateFormate = (date: any) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
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

      <SectionLayout bg="">
        <div className="h-[100%] service-style">
          <div className="container">
            {indvblog
              ?.filter((blog: any) => blog?.published === true)
              ?.map((elem: any, index: any) => (
                <div key={index}>
                  <div className="flex gap-x-10">
                    <div className="flex-[3]">
                      <div>
                        {/* <img
                          src={elem.featuredImage.image.url}
                          alt={elem.featuredImage.altText}
                          className="w-full h-full"
                        /> */}
                        <Image
                          src={elem?.featuredImage?.image?.url}
                          alt="no_image"
                          width={2400}
                          height={2400}
                          className="w-full h-full"
                        />
                        <div className="flex gap-4 py-6">
                          {/* <VscCalendar size={22} /> {dateToday} */}
                          {dateFormate(elem.createdAt)}
                        </div>

                        <div>
                          <h1 className="font-semibold text-[80px] leading-normal">
                            {elem.title}
                          </h1>
                        </div>

                        <div className="externallink">{parser(elem.body)}</div>
                      </div>
                    </div>

                    <div className="flex-1 hidden sm:block">
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
                      <div className="sticky top-24">
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
            blog?.published === true && blog?.category[0] !== "Job Post"
        )
        ?.map((elem: any, index: any) => (
          <div key={index}>
            <Link
              className="flex gap-5 p-4 mb-4 rounded shadow-md bg-slate-500 "
              href={`/blog/${elem.slug}`}
            >
              {/* <img
                src={elem.featuredImage.image.url}
                alt={elem.featuredImage.altText}
                className="w-[100px] h-[80px]"
              /> */}
              <Image
                src={elem?.featuredImage?.image?.url}
                alt="blog_image"
                width={3109}
                height={1752}
                className="w-[100px] h-[80px]"
              />
              <p className="!text-xl">{elem.title}</p>
            </Link>
          </div>
        ))}
    </>
  );
};
