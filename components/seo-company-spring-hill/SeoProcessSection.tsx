import Image from "next/image";
import {
  ArrowRight,
  ChartNoAxesColumnIncreasing,
  FileText,
  KeyRound,
  MapPin,
  SearchCheck,
  Settings,
  SquareActivity,
  SquarePen,
  Target,
} from "lucide-react";

const processSteps = [
  {
    number: "1",
    Icon: Target,
    title: "Discovery and Business Goal Alignment",
    description:
      "We start by developing a thorough understanding of your business. Your service areas, customer profile, current search standing, competitive environment in Spring Hill, Florida, and measurable growth targets all inform every strategic decision that follows.",
  },
  {
    number: "2",
    Icon: ChartNoAxesColumnIncreasing,
    title: "Spring Hill Competitive Landscape Mapping",
    description:
      "We analyze the business's ranking for your target search terms. However, we check their keyword positions, content structures, backlink sources, and local signals to show gaps your business can fill.",
  },
  {
    number: "3",
    Icon: KeyRound,
    title: "Targeted Keyword Architecture",
    description:
      "We build a complete keyword framework organized around buyer intent, service category, and Spring Hill, Florida geographic specificity. Every keyword selected connects your website with a consumer who is in an active decision-making state.",
  },
  {
    number: "4",
    Icon: FileText,
    title: "Website and On-Page Refinement",
    description:
      "Service pages, core landing pages, and the site architecture are set up to meet Google's standards. Local visitors' expectations on every on-page element are checked before content or link-building work starts.",
  },
  {
    number: "5",
    Icon: Settings,
    title: "Technical Remediation",
    description:
      "Every crawl barrier, indexing error, duplicate content issue, and structural weakness affecting your Spring Hill, Florida, website's search performance is identified and resolved. Load speed, mobile responsiveness, and schema implementation are all addressed in this phase.",
  },
  {
    number: "6",
    Icon: MapPin,
    title: "Local Presence Build and Verification",
    description:
      "Your Google Business Profile, local directory citations, and location-specific content are developed, standardized, and strengthened. We ensure Google has every signal needed to rank your Spring Hill, Florida, business confidently in maps and local search.",
  },
  {
    number: "7",
    Icon: SquarePen,
    title: "Authoritative Content Production",
    description:
      "We develop locally relevant, in-depth content that speaks directly to the questions and purchase considerations of Spring Hill, Florida, consumers. Every piece is created to rank in search results and to position your business as the recognized authority in its category.",
  },
  {
    number: "8",
    Icon: SquareActivity,
    title: "Link and Authority Development",
    description:
      "Quality backlinks and brand references are earned from credible Hernando County and Florida-wide sources. Each acquired link strengthens your domain authority and reinforces your standing as a reliable Spring Hill, Florida, business in Google's evaluation.",
  },
  {
    number: "9",
    Icon: SearchCheck,
    title: "Monthly Performance Analysis and Strategy Refinement",
    description:
      "Continuous improvement is built into every Spring Hill, Florida, engagement we manage. Ranking data, traffic trends, lead volume, and ROI are reviewed every month and used to refine the active strategy.",
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
                Spring Hill
                <br />
                Florida Businesses
              </span>
            </h2>

            <div className="mt-7 h-[2px] w-14 bg-[#FF6F00]" />

            <div className="mt-7 max-w-[380px] space-y-6 text-[16px] leading-8 text-[#081B4B]/75">
              <p>
                Predictable SEO results require a repeatable process. Bayshore Communication uses a nine-phase methodology for every Spring Hill, Florida, engagement. Each phase builds value that compounds throughout the campaign.
              </p>
            </div>

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
                Start Your Campaign
                <ArrowRight size={18} />
              </span>
            </button>
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
