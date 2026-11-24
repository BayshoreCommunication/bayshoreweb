import fs from "fs";
import path from "path";
import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { services } from "@/components/unique/services/Service";
import { serviceCategories } from "@/config/data";
import { caseindv } from "@/config/caseStudies";
import { staticBlogs } from "@/components/static-blogs";
import GetAllBlogData from "@/lib/GetAllBlogData";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const BASE_URL = "https://www.bayshorecommunication.com";

/**
 * Single deploy/build date used as `lastModified` for every sitemap entry.
 * Determined at runtime from the compiled build artifacts (.next/BUILD_ID is
 * written once per `next build`), so every deployed version reports its own
 * deploy time instead of per-file mtimes or request-time dates.
 */
function getDeployDate(): Date {
  const distDir = process.env.NEXT_DIST_DIR || ".next";
  const deployMarkerCandidates = [
    path.join(process.cwd(), distDir, "BUILD_ID"),
    path.join(process.cwd(), distDir, "server", "app-paths-manifest.json"),
  ];
  for (const markerPath of deployMarkerCandidates) {
    try {
      const stat = fs.statSync(markerPath);
      if (stat.isFile()) return stat.mtime;
    } catch {
      // marker not found, try next candidate
    }
  }
  // Dev server / fresh checkout: fall back to current time
  return new Date();
}

const DEPLOY_DATE: Date = getDeployDate();

type SitemapEntry = MetadataRoute.Sitemap[number] & {
  changeFrequency?: string;
  priority?: number;
};

const EXCLUDED_SEGMENTS = new Set(["api", "private", "(auth)"]);
const PAGE_FILE_NAMES = new Set(["page.tsx", "page.ts", "page.jsx", "page.js"]);

const FALLBACK_STATIC_PAGES = [
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
  "/bayshore-solutions",
  "/bayshore-solutions/contact",
  "/bayshore-solutions/get-started",
  "/bayshore-solutions/solutions",
  "/bayshoresolutions",
  "/lawyer-lead-generation-naples",
  "/legal-lead-generation-florida",
  "/local-lead-generation-florida",
  "/brandon-seo-company",
  "/dental-seo-services-tampa",
  "/florida-seo-company",
  "/law-firm-seo-fort-myers",
  "/lawyer-seo-agency-tampa",
  "/local-seo-for-lawyers-florida",
  "/local-seo-for-small-businesses-naples",
  "/orlando-law-firm-seo-agency",
  "/plant-city-seo-company",
  "/real-estate-seo-services-florida",
  "/seo-company-dunedin",
  "/seo-company-largo-fl",
  "/seo-company-spring-hill",
  "/seo-company-wesley-chapel",
  "/seo-for-small-businesses-florida",
];

function isRouteGroup(segment: string): boolean {
  return segment.startsWith("(") && segment.endsWith(")");
}

function isDynamicSegment(segment: string): boolean {
  return segment.startsWith("[") && segment.endsWith("]");
}

function isHiddenOrIgnored(segment: string): boolean {
  return (
    segment.startsWith("_") ||
    segment.startsWith(".") ||
    EXCLUDED_SEGMENTS.has(segment)
  );
}

function discoverRoutesFromAppManifest(): Array<{
  route: string;
  lastModified: Date;
}> {
  const distDir = process.env.NEXT_DIST_DIR || ".next";
  const manifestPath = path.join(
    process.cwd(),
    distDir,
    "server",
    "app-paths-manifest.json"
  );
  if (!fs.existsSync(manifestPath)) {
    return [];
  }

  try {
    const manifestStat = fs.statSync(manifestPath);
    const manifest = JSON.parse(
      fs.readFileSync(manifestPath, "utf-8")
    ) as Record<string, string>;
    const routes: Array<{ route: string; lastModified: Date }> = [];

    for (const key of Object.keys(manifest)) {
      if (!key.endsWith("/page")) continue;
      const rawSegments = key.split("/").filter(Boolean);
      rawSegments.pop(); // remove trailing "page"

      if (
        rawSegments.some(
          (seg) => isHiddenOrIgnored(seg) || isDynamicSegment(seg)
        )
      ) {
        continue;
      }

      const urlSegments = rawSegments.filter((seg) => !isRouteGroup(seg));
      const route = urlSegments.length > 0 ? `/${urlSegments.join("/")}` : "";
      routes.push({ route, lastModified: manifestStat.mtime });
    }

    return routes;
  } catch {
    return [];
  }
}

function discoverStaticAppRoutes(): Array<{ route: string; lastModified: Date }> {
  const appDir = path.join(process.cwd(), "app");
  if (!fs.existsSync(appDir)) {
    const manifestRoutes = discoverRoutesFromAppManifest();
    if (manifestRoutes.length > 0) {
      return manifestRoutes;
    }
    const now = new Date();
    return FALLBACK_STATIC_PAGES.map((route) => ({ route, lastModified: now }));
  }

  const discovered: Array<{ route: string; lastModified: Date }> = [];

  const walk = (dir: string, urlSegments: string[]) => {
    let entries: fs.Dirent[];
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }

    for (const entry of entries) {
      if (entry.isFile() && PAGE_FILE_NAMES.has(entry.name)) {
        const route = urlSegments.length > 0 ? `/${urlSegments.join("/")}` : "";
        let lastModified = new Date();
        try {
          lastModified = fs.statSync(path.join(dir, entry.name)).mtime;
        } catch {
          // fallback to current date
        }
        discovered.push({ route, lastModified });
        continue;
      }

      if (!entry.isDirectory()) continue;
      if (isHiddenOrIgnored(entry.name) || isDynamicSegment(entry.name)) {
        continue;
      }

      const nextSegments = isRouteGroup(entry.name)
        ? urlSegments
        : [...urlSegments, entry.name];
      walk(path.join(dir, entry.name), nextSegments);
    }
  };

  walk(appDir, []);
  if (discovered.length > 0) {
    return discovered;
  }

  const manifestRoutes = discoverRoutesFromAppManifest();
  return manifestRoutes.length > 0
    ? manifestRoutes
    : FALLBACK_STATIC_PAGES.map((route) => ({ route, lastModified: new Date() }));
}

function normalizeUrl(urlOrPath: string): string {
  const trimmed = urlOrPath.trim();
  if (!trimmed) return BASE_URL;

  let fullUrl = trimmed.startsWith("http")
    ? trimmed
    : `${BASE_URL}${trimmed.startsWith("/") ? "" : "/"}${trimmed}`;

  try {
    const parsed = new URL(fullUrl);
    if (parsed.hostname === "bayshorecommunication.com") {
      parsed.hostname = "www.bayshorecommunication.com";
    }
    if (parsed.pathname !== "/" && parsed.pathname.endsWith("/")) {
      parsed.pathname = parsed.pathname.slice(0, -1);
    }
    fullUrl = parsed.toString();
    if (parsed.pathname === "/" && fullUrl.endsWith("/")) {
      fullUrl = fullUrl.slice(0, -1);
    }
  } catch {
    // keep constructed string if URL parsing fails
  }

  return fullUrl;
}

async function fetchAllPublishedApiBlogs(): Promise<any[]> {
  const limit = 100;
  const maxPages = 50;
  const firstPage = await GetAllBlogData({ page: 1, limit });
  const allBlogs: any[] = Array.isArray(firstPage?.data) ? [...firstPage.data] : [];

  const totalPages = Math.min(
    Number(firstPage?.pagination?.totalPages) || 1,
    maxPages
  );

  if (totalPages > 1) {
    const pageRequests: Promise<Awaited<ReturnType<typeof GetAllBlogData>>>[] = [];
    for (let page = 2; page <= totalPages; page++) {
      pageRequests.push(GetAllBlogData({ page, limit }));
    }
    const results = await Promise.all(pageRequests);
    for (const res of results) {
      if (Array.isArray(res?.data)) {
        allBlogs.push(...res.data);
      }
    }
  }

  return allBlogs.filter(
    (blog) => blog?.published === true && typeof blog?.slug === "string" && blog.slug.trim() !== ""
  );
}

export default async function Sitemap(): Promise<SitemapEntry[]> {
  // Opt out of static build caching in Next.js 13.4.5 so new CMS blogs/URLs appear on every request
  headers();

  // 1. Auto-discovered App Router Static Pages
  const staticPageUrls: SitemapEntry[] = discoverStaticAppRoutes().map(
    ({ route }) => ({
      url: normalizeUrl(route),
      lastModified: DEPLOY_DATE,
      changeFrequency: "weekly",
      priority: route === "" ? 1.0 : 0.8,
    })
  );

  // 2. Dynamic Services (/our-services/[service])
  const serviceUrls: SitemapEntry[] = (services || [])
    .map((service) => service.url)
    .filter(Boolean)
    .map((slug) => ({
      url: normalizeUrl(`/our-services/${slug}`),
      lastModified: DEPLOY_DATE,
      changeFrequency: "weekly",
      priority: 0.7,
    }));

  // 3. Dynamic Printing Packages (/printing-package/services/[slug])
  const printingPackageUrls: SitemapEntry[] = [];
  try {
    for (const categoryKey in serviceCategories) {
      const items = (serviceCategories as Record<string, unknown>)[categoryKey];
      if (Array.isArray(items)) {
        for (const item of items) {
          if (
            item &&
            typeof item === "object" &&
            "slug" in item &&
            typeof item.slug === "string" &&
            item.slug.trim() !== ""
          ) {
            printingPackageUrls.push({
              url: normalizeUrl(`/printing-package/services/${item.slug}`),
              lastModified: DEPLOY_DATE,
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

  // 4. Dynamic Case Studies (/case-studies/[slug])
  const caseStudyUrls: SitemapEntry[] = (caseindv || [])
    .map((item) => item.url)
    .filter(Boolean)
    .map((rawSlug) => ({
      url: normalizeUrl(
        `/case-studies/${rawSlug.trim().replace(/\s+/g, "-").toLowerCase()}`
      ),
      lastModified: DEPLOY_DATE,
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  // 5. Static Blogs (/blog/[slug])
  const staticBlogUrls: SitemapEntry[] = (staticBlogs || [])
    .filter((blog) => blog?.published !== false && blog?.slug)
    .map((blog) => {
      const canonical =
        "canonical" in blog &&
        typeof blog.canonical === "string" &&
        blog.canonical.trim() !== ""
          ? blog.canonical
          : `/blog/${blog.slug}`;

      return {
        url: normalizeUrl(canonical),
        lastModified: DEPLOY_DATE,
        changeFrequency: "weekly",
        priority: 0.7,
      };
    });

  // 6. Dynamic API Blogs (/blog/[slug]) - all published pages
  let apiBlogUrls: SitemapEntry[] = [];
  try {
    const publishedApiBlogs = await fetchAllPublishedApiBlogs();
    apiBlogUrls = publishedApiBlogs.map((blog) => {
      const target =
        typeof blog?.canonical === "string" && blog.canonical.trim() !== ""
          ? blog.canonical
          : `/blog/${blog.slug}`;

      return {
        url: normalizeUrl(target),
        lastModified: DEPLOY_DATE,
        changeFrequency: "weekly",
        priority: 0.7,
      };
    });
  } catch (error) {
    console.error("Failed to fetch blog data for sitemap:", error);
  }

  // Combine & deduplicate while preserving order
  const allEntries = [
    ...staticPageUrls,
    ...serviceUrls,
    ...printingPackageUrls,
    ...caseStudyUrls,
    ...staticBlogUrls,
    ...apiBlogUrls,
  ];

  const uniqueUrlsMap = new Map<string, SitemapEntry>();
  for (const entry of allEntries) {
    uniqueUrlsMap.set(entry.url, entry);
  }

  return Array.from(uniqueUrlsMap.values());
}
