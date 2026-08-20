import Link from "next/link";
import { BriefcaseBusiness, MapPin } from "lucide-react";

const industries = [
  "Legal & Compliance",
  "Dental Clinics",
  "Chiropractic Centers",
  "Real Estate Agencies",
  "Small Businesses",
  "Local Businesses",
];

const floridaCities: { name: string; href?: string }[] = [
  { name: "Clearwater" },
  { name: "Tampa", href: "/lawyer-seo-agency-tampa" },
  { name: "Orlando", href: "/orlando-law-firm-seo-agency" },
  { name: "Polk County" },
  { name: "Brandon", href: "/brandon-seo-company" },
  { name: "Plant City", href: "/plant-city-seo-company" },
  { name: "Wesley Chapel", href: "/seo-company-wesley-chapel" },
  { name: "Spring Hill", href: "/seo-company-spring-hill" },
  { name: "Fort Lauderdale" },
  { name: "St. Petersburg" },
  { name: "Palm Harbor" },
  { name: "Dunedin", href: "/seo-company-dunedin" },
  { name: "Pinellas Park" },
  { name: "Tallahassee" },
  { name: "West Palm Beach" },
  { name: "Pembroke Pines" },
  { name: "Hollywood" },
  { name: "Gainesville" },
  { name: "Pompano Beach" },
  { name: "Lakeland" },
  { name: "North Port/Sarasota" },
  { name: "Temple Terrace" },
  { name: "Town ‘n’ Country" },
  { name: "Oldsmar" },
  { name: "Largo", href: "/seo-company-largo-fl" },
  { name: "Fort Myers", href: "/law-firm-seo-fort-myers" },
  { name: "Naples", href: "/local-seo-services-for-small-business-naples-florida" },
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
        </div>

        {/* Content Grid */}
        <div className="mt-12 grid gap-8 lg:mt-20 lg:grid-cols-[1fr_1.2fr]">
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
                Industries We Work With
              </h3>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {industries.map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full
                    border
                    border-black/10
                    bg-white
                    px-5
                    py-3
                    text-[15px]
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
                Statewide Florida Coverage
              </h3>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {floridaCities.map((city) =>
                city.href ? (
                  <Link
                    key={city.name}
                    href={city.href}
                    className="
                      group
                      flex
                      items-center
                      gap-2.5
                      rounded-[16px]
                      border
                      border-black/10
                      bg-white
                      px-4
                      py-3
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:border-[#FF6F00]
                      hover:bg-[#FFF8F3]
                      hover:shadow-[0_8px_20px_rgba(255,111,0,0.12)]
                    "
                  >
                    <MapPin
                      size={16}
                      className="
                        shrink-0
                        text-[#FF6F00]
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    />

                    <span className="text-[14px] font-medium text-[#081B4B] transition-colors group-hover:text-[#FF6F00]">
                      {city.name}
                    </span>
                  </Link>
                ) : (
                  <div
                    key={city.name}
                    className="
                      group
                      flex
                      items-center
                      gap-2.5
                      rounded-[16px]
                      border
                      border-black/10
                      bg-white
                      px-4
                      py-3
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:border-[#FF6F00]
                      hover:bg-[#FFF8F3]
                      hover:shadow-[0_8px_20px_rgba(255,111,0,0.12)]
                    "
                  >
                    <MapPin
                      size={16}
                      className="
                        shrink-0
                        text-[#FF6F00]
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    />

                    <span className="text-[14px] font-medium text-[#081B4B]">
                      {city.name}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}