import { BriefcaseBusiness, MapPin } from "lucide-react";

const industries = [
  "Home Services and Contracting",
  "Medical and Healthcare Practices",
  "Real Estate Agencies",
  "Hospitality and Tourism",
  "Professional Consulting",
  "Retail and E-commerce",
  "Health and Wellness Centers",
  "Pet Services and Veterinary Care",
  "Automotive Sales and Repair",
  "Legal and Financial Services",
  "Education and Training",
  "Nonprofit Organizations",
  "Beauty and Salon Services",
  "Event Planning and Venues",
];

const communities = [
  "Tampa",
  "South Tampa",
  "Ybor City",
  "Westshore",
  "Brandon",
  "Riverview",
  "Carrollwood",
  "Temple Terrace",
  "Lutz",
  "Land O Lakes",
  "Hyde Park",
  "Tampa Heights",
  "New Tampa",
  "Citrus Park",
  "Town 'n' Country"
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
              Tampa,
              <br className="hidden md:block" />
              Florida,
            </span>{" "}
            and Surrounding Areas
          </h2>

          <p className="mx-auto mt-8 max-w-[1000px] text-[16px] leading-8 text-black/70 md:text-[20px]">
            Bayshore Communication proudly serves businesses throughout Tampa, Florida, and the wider Hillsborough County region. As a dedicated lawyer seo agency tampa every geo-targeted campaign we build is shaped around where your customers are located and how they search for businesses like yours.
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
                Industries We Serve
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
                    px-4
                    py-3
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
