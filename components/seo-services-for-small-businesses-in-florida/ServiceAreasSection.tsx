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
    icon: HeartPulse,
    title: "Healthcare & Wellness",
    items: [
      "Healthcare & Medical Practices",
      "Fitness & Weight Loss Clinics",
    ],
  },
  {
    icon: Scale,
    title: "Professional Services",
    items: [
      "Legal Services & Law Firms",
      "Accountants & Tax Professionals (CPA firms)",
      "Bookkeepers & Payroll Services",
    ],
  },
  {
    icon: Home,
    title: "Real Estate & Financial",
    items: [
      "Real Estate & Property Management",
      "Financial Services",
    ],
  },
  {
    icon: Store,
    title: "Travel, Hospitality & Retail",
    items: [
      "Travel and Hospitality Businesses",
      "Retail & E-commerce with Physical Presence",
    ],
  },
  {
    icon: Dumbbell,
    title: "B2B & Franchise",
    items: [
      "IT, Web Design & Digital Agencies (B2B)",
      "Franchise Locations (multi-location SEO)",
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

export default function ServiceAreasSection() {
  return (
    <section className="bg-white py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Header */}
        <div className="mx-auto max-w-[1100px] text-center">
          <h2 className="text-[38px] font-bold leading-[1.1] text-black md:text-[52px]">
            Industries and Cities{" "}
            <span className="text-[#FF6F00]">We Serve</span>
          </h2>

          <p className="mx-auto mt-8 max-w-[1000px] text-[16px] leading-8 text-black/70 md:text-[20px]">
            Statewide Florida Coverage Miami · Orlando · Jacksonville · Fort
            Lauderdale · Tampa · St. Petersburg · Sarasota · Naples · Fort
            Myers · West Palm Beach · Boca Raton · Tallahassee · Gainesville ·
            Pensacola · Daytona Beach · Cape Coral · Port St. Lucie · Kissimmee
            · Lakeland · Ocala
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

                            text-[14px]
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
                Tampa Neighborhoods & Areas We Serve
              </h3>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {communities.map((community) => (
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

                  <span className="font-medium text-[#081B4B]">
                    {community}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
