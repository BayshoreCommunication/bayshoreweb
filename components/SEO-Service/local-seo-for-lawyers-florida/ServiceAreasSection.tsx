import {
  BriefcaseBusiness,
  Home,
  HeartPulse,
  Scale,
  Store,
  Dumbbell,
  MapPin,
  Building2,
  Landmark,
  TrendingUp,
  Plane,
  ShoppingBag,
} from "lucide-react";

const businessTypes = [
  {
    icon: HeartPulse,
    title: "Healthcare & Medical Practices",
    items: [
      "Medical Practices and Healthcare Providers",
      "Dental and Orthodontic Offices",
    ],
  },
  {
    icon: Scale,
    title: "Legal Services & Law Firms",
    items: [
      "Personal Injury Attorneys",
      "Criminal Defense Lawyers",
      "Immigration & Family Law Firms",
      "Property Damage & Estate Attorneys",
    ],
  },
  {
    icon: TrendingUp,
    title: "Accountants & Tax Professionals (CPA firms)",
    items: [
      "CPA Firms & Tax Professionals",
      "Bookkeepers & Payroll Services",
    ],
  },
  {
    icon: Home,
    title: "Real Estate & Property Management",
    items: [
      "Real Estate Agents and Brokerages",
      "Property Management Companies",
    ],
  },
  {
    icon: Plane,
    title: "Travel and Hospitality Businesses",
    items: [
      "Hotels & Vacation Rentals",
      "Tour Operators & Travel Agencies",
    ],
  },
  {
    icon: Landmark,
    title: "Financial Services",
    items: [
      "Financial Advisors & Planners",
      "Insurance Brokers & Agencies",
    ],
  },
  {
    icon: Dumbbell,
    title: "Fitness & Weight Loss Clinics",
    items: ["Fitness Studios and Wellness Providers", "Weight Loss Clinics"],
  },
  {
    icon: Building2,
    title: "IT, Web Design & Digital Agencies (B2B)",
    items: [
      "IT & Technology Companies (B2B)",
      "Franchise Locations (multi-location SEO)",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-commerce with Physical Presence",
    items: [
      "Retail Shops with Storefronts",
      "E-commerce Brands with Physical Locations",
    ],
  },
];

const tampaNeighborhoods = [
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

const floridaCities = [
  "Miami",
  "Orlando",
  "Jacksonville",
  "Fort Lauderdale",
  "Tampa",
  "St. Petersburg",
  "Sarasota",
  "Naples",
  "Fort Myers",
  "West Palm Beach",
  "Boca Raton",
  "Tallahassee",
  "Gainesville",
  "Pensacola",
  "Daytona Beach",
  "Cape Coral",
  "Port St. Lucie",
  "Kissimmee",
  "Lakeland",
  "Ocala",
];

export default function ServiceAreasSection() {
  return (
    <section className="bg-white py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Header */}
        <div className="mx-auto max-w-[1100px] text-center">
          <h2 className="text-[38px] font-bold leading-[1.1] text-black md:text-[52px]">
            Cities and Practice Areas{" "}
            <span className="text-[#FF6F00]">We Serve</span>
          </h2>

          <p className="mx-auto mt-8 max-w-[1000px] text-[16px] leading-8 text-black/70 md:text-[20px]">
            Bayshore Communication serves law firms throughout Florida. Our
            strategies are built around the communities where your clients live,
            search, and need legal help most.
          </p>
        </div>

        {/* Content */}
        <div className="mt-12 grid gap-8 lg:mt-20 lg:grid-cols-[1.7fr_1fr]">
          {/* Left Card - Business Types */}
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

              <h3 className="text-[24px] font-bold text-[#081B4B] md:text-[32px]">
                Practice Areas & Industries
              </h3>
            </div>

            <div className="mt-10 grid gap-10 md:grid-cols-2">
              {businessTypes.map((category, index) => {
                const Icon = category.icon;

                return (
                  <div key={index}>
                    <div className="flex items-center gap-3">
                      <Icon size={22} className="text-[#FF6F00]" />

                      <h4 className="text-[16px] font-bold text-[#081B4B] md:text-[18px]">
                        {category.title}
                      </h4>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-3">
                      {category.items.map((item) => (
                        <span
                          key={item}
                          className="
                            rounded-full
                            border
                            border-black/10
                            bg-white
                            px-4
                            py-2

                            text-[13px]
                            font-medium
                            text-[#081B4B]

                            transition-all
                            duration-300

                            hover:border-[#FF6F00]
                            hover:bg-[#FFF8F3]
                            hover:text-[#FF6F00]
                          "
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Card - Locations */}
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

              <h3 className="text-[24px] font-bold text-[#081B4B] md:text-[28px]">
                Tampa Neighborhoods & Areas We Serve
              </h3>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {tampaNeighborhoods.map((community) => (
                <div
                  key={community}
                  className="
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
                  "
                >
                  <MapPin
                    size={18}
                    className="
                      text-[#FF6F00]
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />

                  <span className="font-medium text-[#081B4B] text-[13px]">
                    {community}
                  </span>
                </div>
              ))}
            </div>

            {/* Florida Cities */}
            <div className="mt-10">
              <h4 className="text-[20px] font-bold text-[#081B4B] md:text-[22px]">
                Statewide Florida Coverage
              </h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {floridaCities.map((city) => (
                  <span
                    key={city}
                    className="
                      rounded-full
                      border
                      border-[#FF6F00]/30
                      bg-[#FFF8F3]
                      px-3
                      py-1.5
                      text-[13px]
                      font-medium
                      text-[#FF6F00]
                      transition-all
                      duration-300
                      hover:bg-[#FF6F00]
                      hover:text-white
                    "
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
