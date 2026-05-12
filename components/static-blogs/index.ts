import CtaOptimizationBlog, {
  howMinorCtaChangesBlog,
} from "./blogs/how-minor-cta-changes";

export const staticBlogs = [howMinorCtaChangesBlog];

export const getStaticBlogBySlug = (slug: string) =>
  staticBlogs.find((blog) => blog.slug === slug);

export const staticBlogComponents = {
  [howMinorCtaChangesBlog.slug]: CtaOptimizationBlog,
};
