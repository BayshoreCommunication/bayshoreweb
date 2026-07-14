import CtaOptimizationBlog, {
  howMinorCtaChangesBlog,
} from "./blogs/how-minor-cta-changes";
import HowMuchDoSeoServicesCostBlog, {
  howMuchDoSeoServicesCostBlog,
} from "./blogs/how-much-do-seo-services-cost";
import ConversionTrackingBasicsBlog, {
  conversionTrackingBasicsBlog,
} from "./blogs/how-to-measure-what's-really-driving-revenue-online";
import EvergreenContentStrategyBlog, {
  evergreenContentStrategyBlog,
} from "./blogs/evergreen-content-strategy";
import LocalBrandTrustSignalsBlog, {
  localBrandTrustSignalsBlog,
} from "./blogs/local-brand-trust-signals";
import FirstClickVsLastClickAttributionMarketingBlog, {
  firstClickVsLastClickAttributionMarketingBlog,
} from "./blogs/first-click-vs-last-click-attribution-marketing";
import FormOptimizationBlog, {
  smallFieldTweaksBlog,
} from "./blogs/small-field-tweaks-that-reduce-drop-off-instantly";
import HowExpertiseBasedContentBuildsTrustBlog, {
  howExpertiseBasedContentBuildsTrustBlog,
} from "./blogs/how-expertise-based-content-builds-trust-faster-than-ads";
import HowMuchDoesItCostToDevelopAWebsiteBlog, {
  howMuchDoesItCostToDevelopAWebsiteBlog,
} from "./blogs/How Much Does It Cost to Develop a Website";
import DifferenceBetweenWebsiteDesignAndWebsiteDevelopmentBlog, {
  differenceBetweenWebsiteDesignAndWebsiteDevelopmentBlog,
} from "./blogs/Difference Between Website Design and Website Development";

export const staticBlogs = [
  howExpertiseBasedContentBuildsTrustBlog,
  smallFieldTweaksBlog,
  howMuchDoSeoServicesCostBlog,
  firstClickVsLastClickAttributionMarketingBlog,
  localBrandTrustSignalsBlog,
  evergreenContentStrategyBlog,
  conversionTrackingBasicsBlog,
  howMinorCtaChangesBlog,
  howMuchDoesItCostToDevelopAWebsiteBlog,
  differenceBetweenWebsiteDesignAndWebsiteDevelopmentBlog,
].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

export const getStaticBlogBySlug = (slug: string) =>
  staticBlogs.find((blog) => blog.slug === slug);

export const staticBlogComponents = {
  [howMuchDoSeoServicesCostBlog.slug]: HowMuchDoSeoServicesCostBlog,
  [firstClickVsLastClickAttributionMarketingBlog.slug]:
    FirstClickVsLastClickAttributionMarketingBlog,
  [localBrandTrustSignalsBlog.slug]: LocalBrandTrustSignalsBlog,
  [evergreenContentStrategyBlog.slug]: EvergreenContentStrategyBlog,
  [conversionTrackingBasicsBlog.slug]: ConversionTrackingBasicsBlog,
  [howMinorCtaChangesBlog.slug]: CtaOptimizationBlog,
  [smallFieldTweaksBlog.slug]: FormOptimizationBlog,
  [howExpertiseBasedContentBuildsTrustBlog.slug]:
    HowExpertiseBasedContentBuildsTrustBlog,
  [howMuchDoesItCostToDevelopAWebsiteBlog.slug]:
    HowMuchDoesItCostToDevelopAWebsiteBlog,
  [differenceBetweenWebsiteDesignAndWebsiteDevelopmentBlog.slug]:
    DifferenceBetweenWebsiteDesignAndWebsiteDevelopmentBlog,
};


