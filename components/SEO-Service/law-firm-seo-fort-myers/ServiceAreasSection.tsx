import Link from "next/link";
import {
  BriefcaseBusiness,
  Home,
  HeartPulse,
  Scale,
  Store,
  Dumbbell,
  MapPin,
} from "lucide-react";

const businessTypes = [
  {
    icon: Home,
    title: "Personal Injury",
    items: [
      "Car crashes or auto accidents",
      "Slip and fall, wrongful death, and premises liability",
    ],
  },
  {
    icon: HeartPulse,
    title: "Family Law",
    items: [
      "Divorce, Child custody, Alimony",
      "Adoption, Domestic violence",
    ],
  },
  {
    icon: Scale,
    title: "Criminal Defense",
    items: [
      "DUI, felony and misdemeanor defense",
      "Juvenile law and expungement",
    ],
  },
  {
    icon: Store,
    title: "Real Property Law",
    items: [
      "Real Property Transactions and Title Disputes",
      "Foreclosure Defense",
    ],
  },
  {
    icon: Dumbbell,
    title: "Estate Planning & Business Law",
    items: [
      "Wills and Trusts, Guardianship, Probate",
      "Formation of entities, Contracts, Commercial Litigation",
      "Immigration Law: Family petitions, work visas, naturalization",
      "Workers compensation and employer disputes",
    ],
  },
];

const communities = [
  "Fort Myers: Downtown, McGregor, Gateway, Iona",
  "Cape Coral: Largest city in Lee County by population",
  "Bonita Springs: High-growth residential and commercial corridor",
  "Estero: Rapidly expanding community south of Fort Myers",
  "Lehigh Acres: One of Lee County\u2019s most populous communities",
  "Fort Myers Beach: Tourism, property, and personal injury",
  "Sanibel and Captiva: Estate and real property law needs",
  "Naples and Collier County: Adjacent high-income legal markets",
  "Immokalee: Immigration and labor law demand",
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
  return (
    <section className="bg-white py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Header */}
        <div className="mx-auto max-w-[1100px] text-center">
          <h2 className="text-[38px] font-bold leading-[1.1] text-black md:text-[52px]">
            Fort Myers Law Firm SEO -{" "}
            <span className="text-[#FF6F00]">
              Practice Areas
              <br className="hidden md:block" />
            </span>{" "}
            and Surrounding Areas We Serve
          </h2>

          <p className="mx-auto mt-8 max-w-[1000px] text-[16px] leading-8 text-black/70 md:text-[20px]">
            Specialized SEO services across major practice areas and throughout
            Lee County.
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
                Practice Areas We Support
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
                      {category.items.map((item) => (
                        <Link key={item} href={getInternalRoute(item)} className="
                            rounded-full
                            border
                            border-black/10
                            bg-white
                            px-4
                            py-2

                            text-[14px]
                            font-medium
                            text-[#081B4B]

                            transition-all
                            duration-300

                            hover:border-[#FF6F00]
                            hover:bg-[#FFF8F3]
                            hover:text-[#FF6F00]
                          ">{item}</Link>
                      ))}
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
              {communities.map((community, index) => (
                <Link key={getSeoLocationName(community, index)} href={getInternalRoute(community)} className="
                    group

                    flex
                    items-center
                    gap-3

                    rounded-[16px]
                    border
                    border-black/10

                    bg-white

                    px-5
                    py-4

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-[#FF6F00]
                    hover:bg-[#FFF8F3]
                    hover:shadow-[0_12px_30px_rgba(255,111,0,0.12)]
                  ">
                  <MapPin
                    size={18}
                    className="
                      text-[#FF6F00]
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />

                  <span className="font-medium text-[#081B4B]">{getSeoLocationName(community, index)}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
