import { services } from "@/components/unique/services/Service";
import { serviceCategories } from "@/config/data";
import { staticBlogs } from "@/components/static-blogs";
import GetAllBlogData from "@/lib/GetAllBlogData";

type Sitemap = Array<{
  url: string;
  lastModified?: string | Date;
  changeFrequency?: string;
  priority?: number;
}>;

export default async function Sitemap(): Promise<Sitemap> {
  const baseUrl = "https://www.bayshorecommunication.com";

  // 1. Static Pages
  const staticPages = [
    "",
    "/about-us",
    "/blog",
    "/career",
    "/case-studies",
    "/company-profile",
    "/contact",
    "/corporate-photoshoot",
    "/customize-plan",
    "/faq",
    "/growth-plan",
    "/industries-we-serve",
    "/marketing-perspectives-form",
    "/our-services",
    "/privacy-policy",
    "/refer-client",
    "/terms-conditions",
    "/printing-package",
    "/printing-package/services",
    "/business-growth",
    "/business-idea",
    "/connect",
    "/giftfromus",
    "/marketing-for-law-firm",
    "/marketing-solutions",
    "/partner-up",
    "/strategy-session",
    
    // SEO Services Pages
    "/brandon-seo-company",
    "/law-firm-seo-fort-myers",
    "/lawyer-seo-agency-tampa",
    "/local-seo-for-lawyers-florida",
    "/local-seo-services-for-small-business-naples-florida",
    "/orlando-law-firm-seo-agency",
    "/plant-city-seo-company",
    "/real-estate-seo-services-in-florida",
    "/seo-company-dunedin",
    "/seo-company-largo-fl",
    "/seo-company-spring-hill",
    "/seo-company-wesley-chapel",
    "/seo-services-for-dentists-in-tampa",
    "/seo-services-for-small-businesses-in-florida",
  ];

  const staticPageUrls: Sitemap = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. Services (Dynamic)
  const serviceUrls: Sitemap = (services || [])
    .map((service) => service.url)
    .filter(Boolean)
    .map((slug) => ({
      url: `${baseUrl}/our-services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    }));

  // 3. Printing Packages (Dynamic)
  const printingPackageUrls: Sitemap = [];
  try {
    for (const categoryKey in serviceCategories) {
      const items = (serviceCategories as any)[categoryKey];
      if (Array.isArray(items)) {
        for (const item of items) {
          if (item && typeof item === "object" && "slug" in item && typeof item.slug === "string") {
            printingPackageUrls.push({
              url: `${baseUrl}/printing-package/services/${item.slug}`,
              lastModified: new Date(),
              changeFrequency: "weekly",
              priority: 0.6,
            });
          }
        }
      }
    }
  } catch (error) {
    console.error("Failed to parse serviceCategories for sitemap:", error);
  }

  // 4. Case Studies
  const caseStudySlugs = [
    "bayshore-communication-case-study-of-apex-advisors",
    "catflix-digital-marketing-case-study",
    "immigration-lawyer-digital-marketing-case-study",
  ];
  const caseStudyUrls: Sitemap = caseStudySlugs.map((slug) => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // 5. Blogs (Static & Dynamic API)
  const staticBlogUrls: Sitemap = (staticBlogs || []).map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  let apiBlogUrls: Sitemap = [];
  try {
    const blogData = await GetAllBlogData({ limit: 100 });
    apiBlogUrls = (blogData?.data || [])
      .filter((blog: any) => blog?.published === true && blog?.slug)
      .map((blog: any) => ({
        url: `${baseUrl}/blog/${blog.slug}`,
        lastModified: blog.updatedAt ? new Date(blog.updatedAt) : new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      }));
  } catch (error) {
    console.error("Failed to fetch blog data for sitemap:", error);
  }

  // Combine all sitemap entries
  const allEntries = [
    ...staticPageUrls,
    ...serviceUrls,
    ...printingPackageUrls,
    ...caseStudyUrls,
    ...staticBlogUrls,
    ...apiBlogUrls,
  ];

  // Remove potential duplicates
  const uniqueUrlsMap = new Map<string, typeof allEntries[0]>();
  for (const entry of allEntries) {
    uniqueUrlsMap.set(entry.url, entry);
  }

  return Array.from(uniqueUrlsMap.values());
}

