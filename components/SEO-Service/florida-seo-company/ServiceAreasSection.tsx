import Link from "next/link";
import { BriefcaseBusiness, MapPin, Globe } from "lucide-react";

const citiesAndMarkets = [
  "Tampa",
  "Orlando",
  "Miami",
  "Jacksonville",
  "St. Petersburg",
  "Clearwater",
  "Fort Lauderdale",
  "West Palm Beach",
  "Fort Myers",
  "Cape Coral",
  "Sarasota",
  "Bradenton",
  "Lakeland",
  "Naples",
  "Gainesville",
  "Tallahassee",
  "Wesley Chapel",
  "Plant City",
  "Spring Hill",
  "Brandon",
  "New Tampa",
  "Greater Tampa Bay",
];

const floridaRegions = [
  "Tampa Bay",
  "Central Florida",
  "South Florida",
  "Southwest Florida",
  "Northeast Florida",
  "North Florida",
  "Gulf Coast",
  "Greater Orlando",
  "The Florida Panhandle",
];

const industries = [
  "Law firms",
  "Medical practices",
  "Dental practices",
  "Real estate companies",
  "Home service companies",
  "Financial services",
  "Accounting firms",
  "Hospitality businesses",
  "Restaurants",
  "E-commerce companies",
  "Retail businesses",
  "Technology companies",
  "Professional services",
  "Multi-location businesses",
];

const strictRouteMap: Record<string, string> = {
  // Location Matches
  "wesley chapel": "/seo-company-wesley-chapel",
  "spring hill": "/seo-company-spring-hill",
  "brandon": "/brandon-seo-company",
  "plant city": "/plant-city-seo-company",
  "dunedin": "/seo-company-dunedin",
  "largo": "/seo-company-largo-fl",
  "orlando": "/orlando-law-firm-seo-agency",
  "fort myers": "/law-firm-seo-fort-myers",
  "naples": "/local-seo-for-small-businesses-naples",
  "tampa": "/lawyer-seo-agency-tampa",

  // Industry Matches
  "dental practices": "/dental-seo-services-tampa",
  "dental clinics": "/dental-seo-services-tampa",
  "dental": "/dental-seo-services-tampa",

  "real estate companies": "/real-estate-seo-services-florida",
  "real estate agencies": "/real-estate-seo-services-florida",
  "real estate": "/real-estate-seo-services-florida",

  "law firms": "/local-seo-for-lawyers-florida",
  "legal services": "/local-seo-for-lawyers-florida",
  "lawyers": "/local-seo-for-lawyers-florida",

  "small businesses": "/seo-for-small-businesses-florida",
  "professional services": "/seo-for-small-businesses-florida",
};

const getInternalRoute = (name: string): string | undefined => {
  const lower = name.toLowerCase().trim();
  if (strictRouteMap[lower]) return strictRouteMap[lower];
  for (const key of Object.keys(strictRouteMap)) {
    if (lower.includes(key)) {
      return strictRouteMap[key];
    }
  }
  return undefined;
};

export default function ServiceAreasSection() {
  const linkedRoutes = new Set<string>();

  const getUniqueLink = (itemName: string): string | null => {
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
          <span className="text-xl font-bold uppercase tracking-wider text-[#FF6F00]">
            Coverage & Industries
          </span>

          <h2 className="text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] mt-4 font-bold leading-[1.1] text-black">
            Serving Businesses Across{" "}
            <span className="text-[#FF6F00]">Florida</span> and Surrounding Markets
          </h2>

          <div className="mx-auto mt-6 h-1 w-16 bg-[#FF6F00]" />

          <p className="mx-auto mt-8 max-w-[1000px] text-[16px] leading-8 text-black/70 md:text-[20px]">
            Bayshore Communication supports businesses throughout the state from its Tampa base. We never copy one strategy across every location. Each plan reflects that exact market competition, customer behavior, industry demands, and service area.
          </p>
        </div>

        {/* Content Grids */}
        <div className="mt-12 grid gap-8 lg:mt-20 lg:grid-cols-3">
          {/* Column 1: Cities and Markets */}
          <div
            className="
              flex
              flex-col
              rounded-[28px]
              border
              border-black/5
              bg-white
              p-6
              shadow-[0_8px_30px_rgba(0,0,0,0.05)]
              md:p-8
            "
          >
            <div className="flex items-center gap-4">
              <MapPin size={28} className="text-[#FF6F00]" />
              <h3 className="text-[22px] font-bold text-[#081B4B] md:text-[26px]">
                Florida Cities and Markets We Serve
              </h3>
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {citiesAndMarkets.map((city) => {
                const linkUrl = getUniqueLink(city);
                return linkUrl ? (
                  <Link
                    key={city}
                    href={linkUrl}
                    className="rounded-full border border-black/10 bg-white px-4 py-2 text-[14px] font-medium text-[#081B4B] transition-all duration-300 hover:border-[#FF6F00] hover:bg-[#FFF8F3] hover:text-[#FF6F00]"
                  >
                    {city}
                  </Link>
                ) : (
                  <span
                    key={city}
                    className="rounded-full border border-black/10 bg-white px-4 py-2 text-[14px] font-medium text-[#081B4B] transition-all duration-300 hover:border-[#FF6F00] hover:bg-[#FFF8F3]"
                  >
                    {city}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Column 2: Regions We Serve */}
          <div
            className="
              flex
              flex-col
              rounded-[28px]
              border
              border-black/5
              bg-white
              p-6
              shadow-[0_8px_30px_rgba(0,0,0,0.05)]
              md:p-8
            "
          >
            <div className="flex items-center gap-4">
              <Globe size={28} className="text-[#FF6F00]" />
              <h3 className="text-[22px] font-bold text-[#081B4B] md:text-[26px]">
                Florida Regions We Serve
              </h3>
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {floridaRegions.map((region) => (
                <span
                  key={region}
                  className="rounded-full border border-black/10 bg-white px-4 py-2 text-[14px] font-medium text-[#081B4B] transition-all duration-300 hover:border-[#FF6F00] hover:bg-[#FFF8F3]"
                >
                  {region}
                </span>
              ))}
            </div>
          </div>

          {/* Column 3: Industries We Serve */}
          <div
            className="
              flex
              flex-col
              rounded-[28px]
              border
              border-black/5
              bg-white
              p-6
              shadow-[0_8px_30px_rgba(0,0,0,0.05)]
              md:p-8
            "
          >
            <div className="flex items-center gap-4">
              <BriefcaseBusiness size={28} className="text-[#FF6F00]" />
              <h3 className="text-[22px] font-bold text-[#081B4B] md:text-[26px]">
                Industries We Serve
              </h3>
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {industries.map((industry) => {
                const linkUrl = getUniqueLink(industry);
                return linkUrl ? (
                  <Link
                    key={industry}
                    href={linkUrl}
                    className="rounded-full border border-black/10 bg-white px-4 py-2 text-[14px] font-medium text-[#081B4B] transition-all duration-300 hover:border-[#FF6F00] hover:bg-[#FFF8F3] hover:text-[#FF6F00]"
                  >
                    {industry}
                  </Link>
                ) : (
                  <span
                    key={industry}
                    className="rounded-full border border-black/10 bg-white px-4 py-2 text-[14px] font-medium text-[#081B4B] transition-all duration-300 hover:border-[#FF6F00] hover:bg-[#FFF8F3]"
                  >
                    {industry}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
