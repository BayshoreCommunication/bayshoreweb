import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    number: "01",
    icon: "/seo-company-wesley-chapel/card-icon-1.png",
    title: "Ads Stop, Traffic Stops",
    description:
      "Paid ads stop working the moment your advertising budget is paused or reduced.",
  },
  {
    number: "02",
    icon: "/seo-company-wesley-chapel/card-icon-2.png",
    title: "Competitors Rank Above You",
    description:
      "Competitor practices with optimized websites appear above you in every relevant search result.",
  },
  {
    number: "03",
    icon: "/seo-company-wesley-chapel/card-icon-3.png",
    title: "Patients Never Find You",
    description:
      "Patients never reach your booking page because they cannot find your listing online.",
  },
  {
    number: "04",
    icon: "/seo-company-wesley-chapel/card-icon-1.png",
    title: "Weak Map Pack Presence",
    description:
      "Weak local map pack presence means nearby patients walk past you digitally every day.",
  },
  {
    number: "05",
    icon: "/seo-company-wesley-chapel/card-icon-2.png",
    title: "No Trust Signals",
    description:
      "Without reviews and authority signals, patients choose better-ranked competitors without hesitation.",
  },
];

export default function WhyLosingCustomers() {
  return (
    <section className="bg-[#FAFAFA] py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Heading */}
        <div className="max-w-[820px]">
          <h2 className="text-[38px] font-bold leading-[1.05] text-black sm:text-[48px]">
            Why Tampa Dental
            <br />
            Practices Are Losing Patients
            <br />
            <span className="text-[#FF6F00]">Without SEO</span>
          </h2>
          <p className="mt-6 text-[16px] leading-8 text-black/70 md:text-[18px]">
            Tampa is one of Florida&apos;s fastest-growing cities with new dental practices opening monthly. Patients across South Tampa, Westchase, Brandon, and Carrollwood search Google before booking anywhere. Over 77% of patients research a dental provider online before they ever call.
          </p>
          <p className="mt-6 text-[16px] font-bold leading-8 text-black md:text-[18px]">
            What poor search visibility is costing Tampa dental practices every week:
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.number}
              className="
                group
                rounded-[24px]
                bg-white
                p-6
                md:p-8

                shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                transition-all
                duration-500

                hover:-translate-y-2
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
              "
            >
              {/* Top */}
              <div className="flex items-start justify-between">
                <span className="text-[48px] font-bold leading-none text-[#FF6F00]">
                  {card.number}
                </span>

                <div
                  className="
                    transition-all
                    duration-500
                    group-hover:scale-110
                  "
                >
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={60}
                    height={60}
                    className="h-[60px] w-[60px] object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-8 text-[24px] font-bold leading-[1.25] text-black">
                {card.title}
              </h3>

              {/* Description */}
              <p className="mt-6 text-[16px] leading-8 text-black/70">
                {card.description}
              </p>

              {/* Link */}
              <Link
                href="#"
                className="
                  mt-10
                  inline-flex
                  items-center
                  gap-2

                  font-semibold
                  text-[#FF6F00]

                  transition-all
                  duration-300

                  hover:gap-3
                "
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
