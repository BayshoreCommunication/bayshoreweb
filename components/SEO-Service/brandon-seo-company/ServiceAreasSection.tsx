import Link from "next/link";
import {
  BriefcaseBusiness,
  Home,
  HeartPulse,
  Scale,
  Store,
  MapPin,
} from "lucide-react";

const businessTypes = [
  {
    icon: HeartPulse,
    title: "Healthcare & Wellness",
    items: [
      "Healthcare & Medical Practices",
      "Fitness & Weight Loss Clinics",
    ],
  },
  {
    icon: Scale,
    title: "Legal & Professional Services",
    items: [
      "Legal Services & Law Firms",
      "Accountants & Tax Professionals (CPA firms)",
      "Bookkeepers & Payroll Services",
      "Financial Services",
    ],
  },
  {
    icon: Home,
    title: "Real Estate & Property",
    items: [
      "Real Estate & Property Management",
    ],
  },
  {
    icon: Store,
    title: "Retail & Hospitality",
    items: [
      "Travel and Hospitality Businesses",
      "Retail & E-commerce with Physical Presence",
      "Franchise Locations (multi-location SEO)",
    ],
  },
  {
    icon: BriefcaseBusiness,
    title: "B2B & Technology",
    items: [
      "IT, Web Design & Digital Agencies (B2B)",
    ],
  },
];

const communities = [
  "Downtown Tampa",
  "Ybor City",
  "Channelside",
  "Hyde Park",
  "South Tampa",
  "Seminole Heights",
  "Tampa Heights",
  "West Tampa",
  "East Tampa",
  "New Tampa",
  "Harbour Island",
  "Davis Islands",
  "Ballast Point",
  "Bayshore Beautiful",
  "Beach Park",
  "Palma Ceia",
  "Westchase",
  "Carrollwood",
  "University Square",
  "FishHawk Ranch",
  "Tampa Palms",
  "Rocky Point",
  "Greater Tampa Bay Area & Surrounding Communities",
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



const internalRouteMap: Record<string, string> = {
  // Cities / Locations
  "brandon": "/brandon-seo-company",
  "plant city": "/plant-city-seo-company",
  "dunedin": "/seo-company-dunedin",
  "largo": "/seo-company-largo-fl",
  "spring hill": "/seo-company-spring-hill",
  "wesley chapel": "/seo-company-wesley-chapel",
  "orlando": "/orlando-law-firm-seo-agency",
  "fort myers": "/law-firm-seo-fort-myers",
  "naples": "/local-seo-services-for-small-business-naples-florida",
  "tampa": "/lawyer-seo-agency-tampa",
  "clearwater": "/seo-company-largo-fl",
  "st. petersburg": "/seo-company-dunedin",
  "st petersburg": "/seo-company-dunedin",
  "palm harbor": "/seo-company-dunedin",
  "pinellas park": "/seo-company-largo-fl",
  "riverview": "/brandon-seo-company",
  "fishhawk ranch": "/brandon-seo-company",
  "lutz": "/seo-company-wesley-chapel",
  "land o lakes": "/seo-company-wesley-chapel",
  "miami": "/local-seo-for-lawyers-florida",
  "jacksonville": "/seo-services-for-small-businesses-in-florida",
  "fort lauderdale": "/local-seo-for-lawyers-florida",
  "west palm beach": "/real-estate-seo-services-in-florida",
  "boca raton": "/local-seo-for-lawyers-florida",
  "tallahassee": "/local-seo-for-lawyers-florida",
  "gainesville": "/seo-services-for-small-businesses-in-florida",
  "pensacola": "/seo-services-for-small-businesses-in-florida",
  "daytona beach": "/real-estate-seo-services-in-florida",
  "cape coral": "/law-firm-seo-fort-myers",
  "port st. lucie": "/seo-services-for-small-businesses-in-florida",
  "kissimmee": "/orlando-law-firm-seo-agency",
  "lakeland": "/plant-city-seo-company",
  "ocala": "/seo-services-for-small-businesses-in-florida",
  "polk county": "/plant-city-seo-company",
  "ybor city": "/lawyer-seo-agency-tampa",
  "channelside": "/lawyer-seo-agency-tampa",
  "hyde park": "/lawyer-seo-agency-tampa",
  "south tampa": "/lawyer-seo-agency-tampa",
  "seminole heights": "/lawyer-seo-agency-tampa",
  "tampa heights": "/lawyer-seo-agency-tampa",
  "west tampa": "/lawyer-seo-agency-tampa",
  "east tampa": "/lawyer-seo-agency-tampa",
  "new tampa": "/lawyer-seo-agency-tampa",
  "harbour island": "/lawyer-seo-agency-tampa",
  "davis islands": "/lawyer-seo-agency-tampa",
  "ballast point": "/lawyer-seo-agency-tampa",
  "bayshore beautiful": "/lawyer-seo-agency-tampa",
  "beach park": "/lawyer-seo-agency-tampa",
  "palma ceia": "/lawyer-seo-agency-tampa",
  "westchase": "/seo-company-wesley-chapel",
  "carrollwood": "/seo-company-wesley-chapel",
  "university square": "/seo-company-wesley-chapel",
  "tampa palms": "/seo-company-wesley-chapel",
  "rocky point": "/lawyer-seo-agency-tampa",

  // Industries / Practice Areas
  "legal": "/local-seo-for-lawyers-florida",
  "law": "/local-seo-for-lawyers-florida",
  "lawyers": "/local-seo-for-lawyers-florida",
  "attorney": "/local-seo-for-lawyers-florida",
  "legal & compliance": "/local-seo-for-lawyers-florida",
  "legal services & law firms": "/local-seo-for-lawyers-florida",
  "legal & professional services": "/local-seo-for-lawyers-florida",
  "personal injury law": "/lawyer-seo-agency-tampa",
  "family law": "/lawyer-seo-agency-tampa",
  "criminal defense": "/lawyer-seo-agency-tampa",
  "immigration law": "/local-seo-for-lawyers-florida",
  "divorce law": "/lawyer-seo-agency-tampa",
  "estate planning and probate": "/law-firm-seo-fort-myers",
  "business and corporate law": "/orlando-law-firm-seo-agency",
  "employment law": "/local-seo-for-lawyers-florida",
  "real estate law": "/real-estate-seo-services-in-florida",
  "bankruptcy law": "/lawyer-seo-agency-tampa",
  "civil litigation": "/lawyer-seo-agency-tampa",
  "medical malpractice": "/lawyer-seo-agency-tampa",
  "social security disability": "/local-seo-for-lawyers-florida",
  "workers compensation": "/lawyer-seo-agency-tampa",

  "dental": "/seo-services-for-dentists-in-tampa",
  "dental clinics": "/seo-services-for-dentists-in-tampa",
  "healthcare & medical practices": "/seo-services-for-dentists-in-tampa",
  "chiropractic centers": "/seo-services-for-dentists-in-tampa",
  "fitness & weight loss clinics": "/seo-services-for-dentists-in-tampa",

  "real estate": "/real-estate-seo-services-in-florida",
  "real estate agencies": "/real-estate-seo-services-in-florida",
  "real estate & property management": "/real-estate-seo-services-in-florida",
  "real estate & property": "/real-estate-seo-services-in-florida",
  "property & hospitality": "/real-estate-seo-services-in-florida",

  "small business": "/seo-services-for-small-businesses-in-florida",
  "small businesses": "/seo-services-for-small-businesses-in-florida",
  "local business": "/seo-services-for-small-businesses-in-florida",
  "local businesses": "/seo-services-for-small-businesses-in-florida",
  "retail & e-commerce with physical presence": "/seo-services-for-small-businesses-in-florida",
  "retail & consumer": "/seo-services-for-small-businesses-in-florida",
  "retail & hospitality": "/seo-services-for-small-businesses-in-florida",
  "b2b & franchise": "/seo-services-for-small-businesses-in-florida",
  "b2b & technology": "/seo-services-for-small-businesses-in-florida",
  "b2b & consumer brands": "/seo-services-for-small-businesses-in-florida",
  "travel and hospitality businesses": "/seo-services-for-small-businesses-in-florida",
  "accountants & tax professionals (cpa firms)": "/seo-services-for-small-businesses-in-florida",
  "bookkeepers & payroll services": "/seo-services-for-small-businesses-in-florida",
  "financial services": "/seo-services-for-small-businesses-in-florida",
  "it, web design & digital agencies (b2b)": "/seo-services-for-small-businesses-in-florida",
  "franchise locations (multi-location seo)": "/seo-services-for-small-businesses-in-florida",
};

const getInternalRoute = (name: any, defaultRoute: string = "/seo-services-for-small-businesses-in-florida"): string => {
  if (!name) return defaultRoute;
  const str = typeof name === "string" ? name : (name.name || String(name));
  const lower = str.toLowerCase().trim();
  if (internalRouteMap[lower]) return internalRouteMap[lower];

  for (const key of Object.keys(internalRouteMap)) {
    if (lower.includes(key) || key.includes(lower)) {
      return internalRouteMap[key];
    }
  }
  return defaultRoute;
};

export default function ServiceAreasSection() {
  const currentPath = "/brandon-seo-company";
  const linkedRoutes = new Set<string>();

  const getUniqueLink = (itemName: any): string | null => {
    const route = getInternalRoute(itemName);
    if (!route || route === currentPath || linkedRoutes.has(route)) {
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
            Serving Businesses Across{" "}
            <span className="text-[#FF6F00]">
              Brandon,
              <br className="hidden md:block" />
              Florida,
            </span>{" "}
            and Surrounding Areas
          </h2>

          <p className="mx-auto mt-8 max-w-[1000px] text-[16px] leading-8 text-black/70 md:text-[20px]">
            Bayshore Communication serves businesses throughout Brandon,
            Florida, and the wider Tampa Bay area. Our strategies are built around the communities where your customers live and search.
          </p>
        </div>

        {/* Content */}
        <div className="mt-12 grid gap-8 lg:mt-20 lg:grid-cols-[1.7fr_1fr]">
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
                Business Types We Serve
              </h3>
            </div>

            <div className="mt-10 grid gap-10 md:grid-cols-2">
              {businessTypes.map((category, index) => {
                const Icon = category.icon;

                return (
                  <div key={index}>
                    <div className="flex items-center gap-3">
                      <Icon size={22} className="text-[#FF6F00]" />

                      <h4 className="text-[18px] font-bold text-[#081B4B] md:text-[22px]">
                        {category.title}
                      </h4>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-3">
                      {category.items.map((item) => {
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

              <h3 className="text-[24px] font-bold text-[#081B4B] md:text-[38px]">
                Communities We Cover
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

        {/* Statewide Florida Coverage */}
        <div className="mt-16 border-t border-black/5 pt-12 text-center">
          <h4 className="text-[18px] font-bold uppercase tracking-[0.14em] text-[#081B4B]">
            Statewide Florida Coverage
          </h4>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3 text-[14px] font-semibold text-[#081B4B]/70 md:text-[16px]">
            {[
              "Miami", "Orlando", "Jacksonville", "Fort Lauderdale", "Tampa",
              "St. Petersburg", "Sarasota", "Naples", "Fort Myers", "West Palm Beach",
              "Boca Raton", "Tallahassee", "Gainesville", "Pensacola", "Daytona Beach",
              "Cape Coral", "Port St. Lucie", "Kissimmee", "Lakeland", "Ocala"
            ].map((city, index, arr) => (
              <span key={city} className="flex items-center gap-3">
                {(() => {
                  const text = getSeoLocationName(city, index);
                  const linkUrl = getUniqueLink(city);
                  return linkUrl ? (
                    <Link href={linkUrl} className="hover:text-[#FF6F00] transition-colors">{text}</Link>
                  ) : (
                    <span className="hover:text-[#FF6F00] transition-colors">{text}</span>
                  );
                })()}
                {index < arr.length - 1 && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF6F00]" />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
