import CtaOptimizationBlog, {
  howMinorCtaChangesBlog,
} from "./blogs/how-minor-cta-changes";
import ConversionTrackingBasicsBlog, {
  conversionTrackingBasicsBlog,
} from "./blogs/how-to-measure-what's-really-driving-revenue-online";
import EvergreenContentStrategyBlog, {
  evergreenContentStrategyBlog,
} from "./blogs/evergreen-content-strategy";

export const staticBlogs = [
  evergreenContentStrategyBlog,
  conversionTrackingBasicsBlog,
  howMinorCtaChangesBlog,
];

export const getStaticBlogBySlug = (slug: string) =>
  staticBlogs.find((blog) => blog.slug === slug);

export const staticBlogComponents = {
  [evergreenContentStrategyBlog.slug]: EvergreenContentStrategyBlog,
  [conversionTrackingBasicsBlog.slug]: ConversionTrackingBasicsBlog,
  [howMinorCtaChangesBlog.slug]: CtaOptimizationBlog,
};
