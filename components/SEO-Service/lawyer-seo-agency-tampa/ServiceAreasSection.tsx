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

export default function ServiceAreasSection() {
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
