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
import WhyShouldIHireADigitalMarketingAgencyBlog, {
  whyShouldIHireADigitalMarketingAgencyBlog,
} from "./blogs/why-should-i-hire-a-digital-marketing-agency";
import LocalVsOrganicSeoDifferencesBlog, {
  localVsOrganicSeoDifferencesBlog,
} from "./blogs/local-vs-organic-seo-differences";
import WhatIsOrganicSeoServicesPageOneRankingsBlog, {
  whatIsOrganicSeoServicesPageOneRankingsBlog,
} from "./blogs/what-is-organic-seo-services-page-one-rankings";
import HowMuchDoesKeywordResearchCostIn2026Blog, {
  howMuchDoesKeywordResearchCostIn2026Blog,
} from "./blogs/how-much-does-keyword-research-cost-in-2026";

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
  whyShouldIHireADigitalMarketingAgencyBlog,
  localVsOrganicSeoDifferencesBlog,
  whatIsOrganicSeoServicesPageOneRankingsBlog,
  howMuchDoesKeywordResearchCostIn2026Blog,
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
  [whyShouldIHireADigitalMarketingAgencyBlog.slug]:
    WhyShouldIHireADigitalMarketingAgencyBlog,
  [localVsOrganicSeoDifferencesBlog.slug]: LocalVsOrganicSeoDifferencesBlog,
  [whatIsOrganicSeoServicesPageOneRankingsBlog.slug]:
    WhatIsOrganicSeoServicesPageOneRankingsBlog,
  [howMuchDoesKeywordResearchCostIn2026Blog.slug]:
    HowMuchDoesKeywordResearchCostIn2026Blog,
};



