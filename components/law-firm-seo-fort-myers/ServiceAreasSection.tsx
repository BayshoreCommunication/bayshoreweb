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
