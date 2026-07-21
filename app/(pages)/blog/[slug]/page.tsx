import Consultaion from "@/components/universal/Consultaion";
import {
  getStaticBlogBySlug,
  staticBlogComponents,
  staticBlogs,
} from "@/components/static-blogs";
import SectionLayout from "@/components/universal/SectionLayout";
import GetAllBlogData from "@/lib/GetAllBlogData";
import GetBlogBySlug from "@/lib/GetBlogBySlug";
import parser from "html-react-parser";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  body?: string;
  canonical?: string;
  description?: string;
  excerpt?: string;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  imageDescription?: string;
  imageFit?: string;
  imageHeight?: number;
  imageTitle?: string;
  imageWidth?: number;
  metaDescription?: string;
  metaTitle?: string;
  createdAt?: string;
  updatedAt?: string;
  published?: boolean;
  category?: string[];
  featuredImage?: {
    image?: {
      url?: string;
      alt?: string;
      alternativeText?: string;
      caption?: string;
      description?: string;
      title?: string;
    };
  };
}

const getDescription = (blog: BlogPost) => {
  const explicitDescription = blog.metaDescription || blog.description;
  if (explicitDescription) return explicitDescription.slice(0, 200);

  const plainText = (blog.body || "").replace(/<[^>]+>/g, "").trim();
  if (plainText) return plainText.slice(0, 200);
  return (blog.excerpt || "No blog post available.").slice(0, 200);
};

const getBlogImage = (blog: BlogPost) =>
  blog?.image ||
  blog?.featuredImage?.image?.url ||
  "/assets/blog/blog-hero-img.svg";

const getBlogImageAlt = (blog: BlogPost) =>
  blog?.imageAlt ||
  blog?.featuredImage?.image?.alt ||
  blog?.featuredImage?.image?.alternativeText ||
  blog.title ||
  "blog_image";

const getBlogImageTitle = (blog: BlogPost) =>
  blog?.imageTitle || blog?.featuredImage?.image?.title;

const getBlogImageCaption = (blog: BlogPost) =>
  blog?.imageCaption || blog?.featuredImage?.image?.caption;

const formatDate = (date?: string) => {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const staticBlog = getStaticBlogBySlug(params.slug) as BlogPost | undefined;
  const blogDetails =
    staticBlog ||
    ((await GetBlogBySlug(params.slug))?.data as BlogPost | undefined);

  if (!blogDetails) {
    return {
      metadataBase: new URL("https://www.bayshorecommunication.com"),
      title: "Blog not found",
      description: "No blog post available.",
      openGraph: {
        title: "Blog not found",
        description: "No blog post available.",
        images: [],
        url: "https://www.bayshorecommunication.com/blog/not-found",
        type: "article",
        siteName: "Bayshorecommunication",
      },
    };
  }

  const shortDescription = getDescription(blogDetails);
  const metadataTitle = blogDetails.metaTitle || blogDetails.title;
  const canonicalPath = blogDetails.canonical || `/blog/${blogDetails.slug}`;
  const canonicalUrl = canonicalPath.startsWith("http")
    ? canonicalPath
    : `https://www.bayshorecommunication.com${canonicalPath}`;

  return {
    metadataBase: new URL("https://www.bayshorecommunication.com"),
    title: metadataTitle,
    description: shortDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: metadataTitle,
      description: shortDescription,
      images: getBlogImage(blogDetails)
        ? [
            {
              url: getBlogImage(blogDetails),
              width: 1200,
              height: 600,
              alt: getBlogImageAlt(blogDetails),
            },
          ]
        : [],
      url: canonicalUrl,
      type: "article",
      siteName: "Bayshorecommunication",
    },
  };
}

const IndividualBlog = async ({ params }: { params: { slug: string } }) => {
  const staticBlog = getStaticBlogBySlug(params.slug) as BlogPost | undefined;
  const StaticBlogComponent =
    staticBlogComponents[params.slug as keyof typeof staticBlogComponents];
  const blogResult = staticBlog
    ? { data: staticBlog }
    : await GetBlogBySlug(params.slug);
  const blog = blogResult?.data as BlogPost | undefined;

  if (!blog || blog?.published !== true) {
    return (
      <>
        <SectionLayout bg="">
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <h1 className="heading-primary text-center">Blog Not Found</h1>
            <p className="text-base text-center max-w-[622px] mx-auto mt-4">
              {blogResult?.error ||
                "The blog post you're looking for doesn't exist or has been removed."}
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

  return (
    <>
      <SectionLayout bg="">
        <div className="h-[100%] service-style">
          <div className="flex flex-col md:flex-row gap-y-10 md:gap-x-10">
            <div className="flex-[3]">
              <div>
                <div>
                  <h1 className="font-semibold text-[28px] sm:text-[36px] md:text-[54px] lg:text-[72px] xl:text-[80px] leading-tight">
                    {blog.title}
                  </h1>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-2 py-6 text-sm text-gray-500 font-medium">
                  {blog.createdAt && (
                    <span>Published: {formatDate(blog.createdAt)}</span>
                  )}
                  {blog.updatedAt && blog.updatedAt !== blog.createdAt && (
                    <span>|</span>
                  )}
                  {blog.updatedAt && blog.updatedAt !== blog.createdAt && (
                    <span>Updated: {formatDate(blog.updatedAt)}</span>
                  )}
                </div>
                <figure>
                  <Image
                    src={getBlogImage(blog)}
                    alt={getBlogImageAlt(blog)}
                    title={getBlogImageTitle(blog)}
                    width={blog.imageWidth || 2400}
                    height={blog.imageHeight || 2400}
                    className={`w-full rounded-[8px] bg-[#f7f8fb] ${
                      blog.imageFit === "contain"
                        ? "h-auto object-contain"
                        : "aspect-[16/9] object-cover"
                    }`}
                  />
                  {getBlogImageCaption(blog) && (
                    <figcaption className="mt-3 text-sm text-gray-500">
                      {getBlogImageCaption(blog)}
                    </figcaption>
                  )}
                </figure>

                <div className="externallink mt-10">
                  {StaticBlogComponent ? (
                    <StaticBlogComponent />
                  ) : (
                    parser(blog.body || "")
                  )}
                </div>
              </div>
            </div>

            <div className="flex-1 hidden md:block">
              <div className="sticky top-24">
                <BlogNavigation />
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
      <Consultaion />
    </>
  );
};

export default IndividualBlog;

const BlogNavigation = async () => {
  const blogData = await GetAllBlogData({ page: 1, limit: 10 });
  const blogs = [...staticBlogs, ...(blogData?.data || [])];
  return (
    <>
      {blogs
        ?.filter(
          (blog: any) =>
            blog?.published === true && blog?.category?.[0] !== "Job Post",
        )
        ?.map((elem: any, index: number) => (
          <div key={index}>
            <Link
              className="flex gap-5 p-4 mb-4 rounded shadow-md bg-slate-500 "
              href={`/blog/${elem.slug}`}
            >
              <Image
                src={getBlogImage(elem)}
                alt={getBlogImageAlt(elem)}
                width={3109}
                height={1752}
                className="w-[100px] h-[80px] object-cover"
              />
              <p className="!text-xl">{elem.title}</p>
            </Link>
          </div>
        ))}
    </>
  );
};
