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
    title: "Home Services",
    items: [
      "HVAC, Plumbing, Electrical and Roofing",
      "General Contractors and Home Builders",
    ],
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    items: [
      "Medical Practices and Healthcare Providers",
      "Dental and Orthodontic Offices",
    ],
  },
  {
    icon: Scale,
    title: "Professional Services",
    items: [
      "Law Firms and Legal Practices",
      "Financial Advisors and Accounting Firms",
      "Real Estate Agents and Brokerages",
      "Insurance Brokers and Agencies",
    ],
  },
  {
    icon: Store,
    title: "Consumer Businesses",
    items: [
      "Restaurants and Food Service Businesses",
      "Retail Shops and E-Commerce Brands",
      "Auto Repair Shops and Dealerships",
    ],
  },
  {
    icon: Dumbbell,
    title: "Wellness & Fitness",
    items: ["Fitness Studios and Wellness Providers"],
  },
];

const communities = [
  "Wesley Chapel (Wiregrass, Seven Oaks, Meadow Pointe)",
  "Land O' Lakes",
  "Zephyrhills",
  "Lutz",
  "New Tampa",
  "Odessa",
  "Dade City",
  "San Antonio, Pasco County",
  "Spring Hill",
  "Epperson and Mirada Communities",
  "Greater Pasco County",
  "North Hillsborough County",
];

export default function ServiceAreasSection() {
  return (
    <section className="bg-white py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Header */}
        <div className="mx-auto max-w-[1100px] text-center">
          <h2 className="text-[38px] font-bold leading-[1.1] text-black md:text-[52px]">
            Serving Businesses Across{" "}
            <span className="text-[#FF6F00]">
              Wesley Chapel,
              <br className="hidden md:block" />
              Florida,
            </span>{" "}
            and Surrounding Areas
          </h2>

          <p className="mx-auto mt-8 max-w-[1000px] text-[16px] leading-8 text-black/70 md:text-[20px]">
            Bayshore Communication serves businesses throughout Wesley Chapel,
            Florida, and the wider Pasco County and North Hillsborough region.
            Our strategies are built around the communities where your customers
            live and search.
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
                Communities We Cover
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
