import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChartNoAxesColumnIncreasing,
  KeyRound,
  MapPin,
  SearchCheck,
  Settings,
  SquareActivity,
  SquarePen,
} from "lucide-react";

const processSteps = [
  {
    number: "1",
    Icon: ChartNoAxesColumnIncreasing,
    title: "Discovery and Competitive Analysis",
    description:
      "We map search environment for Plant City businesses. Competitor keyword gaps, backlink profiles and current ranking data show achievable growth and ranking opportunities.",
  },
  {
    number: "2",
    Icon: SquareActivity,
    title: "Technical Site Audit",
    description:
      "Every technical issue on client's website gets documented. Crawl problems and page speed issues increase ranking penalties when unaddressed.",
  },
  {
    number: "3",
    Icon: KeyRound,
    title: "Local and National Keyword Strategy",
    description:
      "Bayshore builds keyword plan covering both Plant City specific queries and broader Hillsborough County and Florida market terms. Each keyword is mapped to specific page and specific conversion goal.",
  },
  {
    number: "4",
    Icon: Settings,
    title: "On-Page Optimization",
    description:
      "Service pages, location pages and key conversion content get updated for search intent. Businesses receive page by page revisions across every practice area.",
  },
  {
    number: "5",
    Icon: SquarePen,
    title: "Content Development",
    description:
      "We produce content based on target clients’ searches. From Q&As and guide blogs to service explanations, each piece is related to real queries and real buyer type.",
  },
  {
    number: "6",
    Icon: MapPin,
    title: "Link Acquisition and Authority Building",
    description:
      "We pursue backlinks from credible Florida based sources, Hillsborough County directories, and vertical specific publications. Our process moves domain authority in a measurable direction.",
  },
  {
    number: "7",
    Icon: SearchCheck,
    title: "Monthly Reporting and Strategy Refinement",
    description:
      "Plant City clients receive monthly reporting showing keyword movement, traffic shifts and lead volume changes. Strategy updates come from real data.",
  },
];

export default function SeoProcessSection() {
  return (
    <section className="relative bg-[#FBFBFB] py-16 md:py-32">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-[420px] w-[420px] md:h-[600px] md:w-[600px]">
        <Image
          src="/seo-company-wesley-chapel/process-pattern.png"
          alt=""
          fill
          className="object-contain object-left-bottom opacity-60"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1620px] px-8 md:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[460px_minmax(0,1fr)] xl:grid-cols-[500px_minmax(0,1fr)] lg:gap-12">
          {/* Left Content */}
          <div className="h-fit lg:sticky lg:top-24">
            <span className="text-xl font-bold uppercase tracking-wider text-[#FF6F00]">
              Our Process
            </span>

            <h2 className="mt-4 text-[38px] font-bold leading-[1.08] text-[#081B4B] md:text-[48px]">
              Our Proven
              <br />
              SEO Process for
              <br />
              <span className="text-[#FF6F00]">
                Plant City
                <br />
                Florida Businesses
              </span>
            </h2>

            <div className="mt-7 h-[2px] w-14 bg-[#FF6F00]" />

            <div className="mt-7 max-w-[380px] space-y-6 text-[16px] leading-8 text-[#081B4B]/75">
              <p>
                Our process for SEO services is built around our client&apos;s specific industry, competitive position, and revenue targets.
              </p>
            </div>

            <Link href="#contact">
            <button
              className="
                group
                relative
                mt-10
                flex
                h-[52px]
                items-center
                justify-center
                overflow-hidden
                rounded-md
                bg-[#FF6F00]
                px-8
                font-semibold
                text-white
              "
            >
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative flex items-center gap-3">
                Start Your SEO Campaign
                <ArrowRight size={18} />
              </span>
            </button>
            </Link>
          </div>

          {/* Right Timeline */}
          <div className="relative">
            <div className="relative">
              {/* Desktop Line */}
              <div className="absolute left-5 top-0 hidden h-full w-[2px] bg-[#FF6F00]/20 lg:block" />

              <div className="space-y-4">
                {processSteps.map((step) => {
                  const Icon = step.Icon;

                  return (
                    <div
                      key={step.number}
                      className="relative flex gap-4 lg:gap-5"
                    >
                      {/* Number */}
                      <div className="relative z-10 flex shrink-0 flex-col items-center">
                        <div
                          className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            bg-[#FF6F00]
                            
                            font-bold
                            text-white
                            shadow-[0_4px_12px_rgba(255,111,0,0.28)]
                          "
                        >
                          {step.number}
                        </div>
                      </div>

                      {/* Card */}
                      <div
                        className="
                          group
                          flex-1
                          rounded-[10px]
                          border
                          border-black/5
                          bg-white
                          p-6
                          shadow-[0_4px_18px_rgba(0,0,0,0.05)]
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]
                          md:px-10
                          md:py-8
                        "
                      >
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
                          <div
                            className="
                              flex
                              h-[64px]
                              w-[64px]
                              shrink-0
                              items-center
                              justify-center
                              rounded-full
                              bg-[#FFF4EC]
                            "
                          >
                            <Icon
                              size={36}
                              strokeWidth={1.8}
                              className="
                                text-[#FF6F00]
                                transition-all
                                duration-500
                                group-hover:scale-110
                                group-hover:rotate-3
                              "
                            />
                          </div>

                          <div>
                            <h3 className="text-[18px] font-bold leading-tight text-[#081B4B] md:text-[20px]">
                              {step.title}
                            </h3>

                            <p className="mt-2 text-[14px] leading-6 text-[#081B4B]/70 md:text-[15px]">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
