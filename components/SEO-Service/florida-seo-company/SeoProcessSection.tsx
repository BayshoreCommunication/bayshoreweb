import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Target,
  Compass,
  Settings,
  KeyRound,
  TrendingUp,
  FileCode,
  MapPin,
  Link2,
  BarChart3,
} from "lucide-react";

const processSteps = [
  {
    number: "1",
    Icon: Target,
    title: "Step 1: Define the Business Goal Behind the Search Strategy",
    description:
      "We start entirely with your specific revenue goals and growth targets. Every later marketing decision strictly serves those objectives. Nothing gets wasted chasing vanity metrics that do not positively impact your bottom line.",
  },
  {
    number: "2",
    Icon: Compass,
    title: "Step 2: Map the Florida Competitive Landscape",
    description:
      "We deeply study exactly who competes for your ideal customers in each specific market. You learn precisely where your rivals dominate and where highly profitable openings currently exist for your brand.",
  },
  {
    number: "3",
    Icon: Settings,
    title: "Step 3: Diagnose Technical and Structural Barriers",
    description:
      "We meticulously audit your website crawlability, loading speed, and overall site structure. You receive a clear, prioritized list of exactly what technical flaws are holding back your organic visibility.",
  },
  {
    number: "4",
    Icon: KeyRound,
    title: "Step 4: Build a Demand-Based Keyword Framework",
    description:
      "We build target keywords directly from real search demand and commercial buyer intent. Your new content targets the specific, high-value searches that naturally lead to immediate customer inquiries.",
  },
  {
    number: "5",
    Icon: TrendingUp,
    title: "Step 5: Prioritize Pages With the Highest Revenue Potential",
    description:
      "We rank all your service and location pages by their actual earning potential. Your marketing budget immediately reaches the pages that are most likely to pay back the investment first, ensuring faster ROI.",
  },
  {
    number: "6",
    Icon: FileCode,
    title: "Step 6: Implement Technical and On-Page Improvements",
    description:
      "We fix all foundational technical issues and refine the visible on-page elements. Visitors get faster, clearer, more persuasive pages. Google reads and indexes them far more easily as well.",
  },
  {
    number: "7",
    Icon: MapPin,
    title: "Step 7: Elevate Local and Business Entity Signals",
    description:
      "We perfectly align your Google Business Profile, local directory citations, and website schema markup. Search engines trust your core business details implicitly and show them to local searchers far more confidently.",
  },
  {
    number: "8",
    Icon: Link2,
    title: "Step 8: Expand Authority Through Content and Links",
    description:
      "We consistently publish highly useful content and earn authoritative, relevant backlinks. Your domain authority builds steadily month over month. As a result, your top rankings become highly durable against competitor attacks.",
  },
  {
    number: "9",
    Icon: BarChart3,
    title: "Step 9: Measure Leads Conversions and Search Growth",
    description:
      "We continuously report on concrete leads, actual conversions, and overall search growth. You see exactly what your investment returned in real dollars. We then adjust the ongoing plan based purely on those performance numbers.",
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
                Florida Businesses
              </span>
            </h2>

            <div className="mt-7 h-[2px] w-14 bg-[#FF6F00]" />

            <div className="mt-7 max-w-[380px] space-y-6 text-[16px] leading-8 text-[#081B4B]/75">
              <p>
                A successful search strategy relies on a structured, predictable methodology. Our approach ensures every action directly supports your revenue goals.
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
                              size={34}
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
