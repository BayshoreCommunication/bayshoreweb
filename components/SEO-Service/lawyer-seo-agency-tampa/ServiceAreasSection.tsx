import Link from "next/link";
import { BriefcaseBusiness, MapPin } from "lucide-react";

const industries = [
  "Personal Injury Law",
  "Family Law",
  "Criminal Defense",
  "Immigration Law",
  "Divorce Law",
  "Estate Planning and Probate",
  "Business and Corporate Law",
  "Employment Law",
  "Real Estate Law",
  "Bankruptcy Law",
  "Social Security Disability",
  "Workers Compensation",
  "Medical Malpractice",
  "Civil Litigation",
];

const communities = [
  "Downtown Tampa",
  "Westshore and Channelside",
  "South Tampa",
  "Ybor City",
  "Seminole Heights",
  "New Tampa",
  "Carrollwood",
  "Brandon",
  "Riverview",
  "Temple Terrace",
  "Wesley Chapel",
  "Lutz",
  "Land O Lakes",
  "St. Petersburg",
  "Clearwater",
];








const seoKeywords = [
  { prefix: "", suffix: " SEO Company" },
  { prefix: "", suffix: " SEO Agency" },
  { prefix: "", suffix: " SEO Services" },
  { prefix: "", suffix: " SEO Firm" },
  { prefix: "", suffix: " Search Engine Optimization" },
  { prefix: "", suffix: " SEO Marketing Agency" },
  { prefix: "", suffix: " Local SEO Agency" },
  { prefix: "", suffix: " Local SEO Company" },
  { prefix: "", suffix: " Organic SEO Agency" },
  { prefix: "", suffix: " Professional SEO Agency" },
  { prefix: "SEO Services in ", suffix: "" },
  { prefix: "Search Engine Optimization in ", suffix: "" },
];

const getSeoLocationName = (location: string, index: number) => {
  const kw = seoKeywords[index % seoKeywords.length];
  return `${kw.prefix}${location}${kw.suffix}`;
};



const strictRouteMap: Record<string, string> = {
  // 100% Accurate Location Matches ONLY
  "wesley chapel": "/seo-company-wesley-chapel",
  "spring hill": "/seo-company-spring-hill",
  "brandon": "/brandon-seo-company",
  "plant city": "/plant-city-seo-company",
  "dunedin": "/seo-company-dunedin",
  "largo": "/seo-company-largo-fl",
  "orlando": "/orlando-law-firm-seo-agency",
  "fort myers": "/law-firm-seo-fort-myers",
  "naples": "/local-seo-services-for-small-business-naples-florida",
  "tampa": "/lawyer-seo-agency-tampa",

  // 100% Accurate Industry Matches ONLY
  "dental clinics": "/seo-services-for-dentists-in-tampa",
  "dental and orthodontic offices": "/seo-services-for-dentists-in-tampa",
  "dental": "/seo-services-for-dentists-in-tampa",

  "real estate agencies": "/real-estate-seo-services-in-florida",
  "real estate & property management": "/real-estate-seo-services-in-florida",
  "real estate agents and brokerages": "/real-estate-seo-services-in-florida",
  "real estate law": "/real-estate-seo-services-in-florida",
  "real estate & property": "/real-estate-seo-services-in-florida",
  "real estate": "/real-estate-seo-services-in-florida",

  "small businesses": "/seo-services-for-small-businesses-in-florida",
  "small business": "/seo-services-for-small-businesses-in-florida",
  "local businesses": "/seo-services-for-small-businesses-in-florida",

  "legal services & law firms": "/local-seo-for-lawyers-florida",
  "legal services": "/local-seo-for-lawyers-florida",
  "law firms": "/local-seo-for-lawyers-florida",
  "lawyers": "/local-seo-for-lawyers-florida",
  "legal & compliance": "/local-seo-for-lawyers-florida",
  "personal injury attorneys": "/lawyer-seo-agency-tampa",
  "criminal defense lawyers": "/lawyer-seo-agency-tampa",
  "immigration & family law firms": "/local-seo-for-lawyers-florida",
  "property damage & estate attorneys": "/law-firm-seo-fort-myers",
};

const getInternalRoute = (name: any): string | undefined => {
  if (!name) return undefined;
  const str = typeof name === "string" ? name : (name.name || String(name));
  const lower = str.toLowerCase().trim();

  // 1. Direct exact key match
  if (strictRouteMap[lower]) return strictRouteMap[lower];

  // 2. Check key phrase inclusion
  for (const key of Object.keys(strictRouteMap)) {
    if (lower.includes(key)) {
      return strictRouteMap[key];
    }
  }

  // Return undefined for items without 100% accurate match
  return undefined;
};

export default function ServiceAreasSection() {
  const currentPath = "/lawyer-seo-agency-tampa";
  const linkedRoutes = new Set<string>();

  const getUniqueLink = (itemName: any): string | null => {
    const route = getInternalRoute(itemName);
    if (!route || linkedRoutes.has(route)) {
      return null;
    }
    linkedRoutes.add(route);
    return route;
  };
  return (
    <section className="bg-white py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Header */}
        <div className="mx-auto max-w-[1100px] text-center">
          <h2 className="text-[38px] font-bold leading-[1.1] text-black md:text-[52px]">
            Tampa Law Firm SEO
            <br className="hidden md:block" />
            {" "}—{" "}
            <span className="text-[#FF6F00]">
              Practice Areas and Neighborhoods We Serve
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-[1000px] text-[16px] leading-8 text-black/70 md:text-[20px]">
            Bayshore Communication provides lawyer SEO services for Tampa law firms across a wide range of practice areas. Whether your firm focuses on a single specialty or handles multiple areas of law, we build targeted strategies around the specific searches your ideal clients are performing.
          </p>
        </div>

        {/* Content */}
        <div className="mt-12 grid gap-8 lg:mt-20 lg:grid-cols-[1fr_1fr]">
          {/* Left Card */}
          <div
            className="
              rounded-[28px]
              border
              border-black/5
              bg-white
              p-6
              shadow-[0_8px_30px_rgba(0,0,0,0.05)]
              md:p-10
            "
          >
            <div className="flex items-center gap-4">
              <BriefcaseBusiness size={32} className="text-[#FF6F00]" />

              <h3 className="text-[24px] font-bold text-[#081B4B] md:text-[38px]">
                Practice Areas We Serve
              </h3>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {industries.map((item) => {
                const linkUrl = getUniqueLink(item);
                const itemName = typeof item === "string" ? item : (item as any).name;
                return linkUrl ? (
                  <Link
                    key={itemName}
                    href={linkUrl}
                    className="rounded-full border border-black/10 bg-white px-4 py-2 text-[14px] font-medium text-[#081B4B] transition-all duration-300 hover:border-[#FF6F00] hover:bg-[#FFF8F3] hover:text-[#FF6F00]"
                  >
                    {itemName}
                  </Link>
                ) : (
                  <span
                    key={itemName}
                    className="rounded-full border border-black/10 bg-white px-4 py-2 text-[14px] font-medium text-[#081B4B] transition-all duration-300 hover:border-[#FF6F00] hover:bg-[#FFF8F3] hover:text-[#FF6F00]"
                  >
                    {itemName}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Right Card */}
          <div
            className="
              rounded-[28px]
              border
              border-black/5
              bg-white
              p-6
              shadow-[0_8px_30px_rgba(0,0,0,0.05)]
              md:p-10
            "
          >
            <div className="flex items-center gap-4">
              <MapPin size={30} className="text-[#FF6F00]" />

              <h3 className="text-[24px] font-bold text-[#081B4B] md:text-[30px] lg:text-[32px] xl:text-[38px]">
                Tampa Neighborhoods and Surrounding Areas We Serve
              </h3>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {communities.map((community, index) => {
                const text = getSeoLocationName(community, index);
                const linkUrl = getUniqueLink(community);
                return linkUrl ? (
                  <Link
                    key={text}
                    href={linkUrl}
                    className="group flex items-center gap-3 rounded-[16px] border border-black/10 bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6F00] hover:bg-[#FFF8F3] hover:shadow-[0_12px_30px_rgba(255,111,0,0.12)]"
                  >
                    <MapPin size={18} className="text-[#FF6F00] transition-transform duration-300 group-hover:scale-110" />
                    <span className="font-medium text-[#081B4B]">{text}</span>
                  </Link>
                ) : (
                  <div
                    key={text}
                    className="group flex items-center gap-3 rounded-[16px] border border-black/10 bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6F00] hover:bg-[#FFF8F3] hover:shadow-[0_12px_30px_rgba(255,111,0,0.12)]"
                  >
                    <MapPin size={18} className="text-[#FF6F00] transition-transform duration-300 group-hover:scale-110" />
                    <span className="font-medium text-[#081B4B]">{text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
