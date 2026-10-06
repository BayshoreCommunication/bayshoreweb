import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChartNoAxesColumnIncreasing,
  FileText,
  KeyRound,
  MapPin,
  Settings,
  SquareActivity,
  SquarePen,
  Target,
} from "lucide-react";

const processSteps = [
  {
    number: "1",
    Icon: Target,
    title: "Discovery and Competitive Market Analysis",
    description:
      "We audit your current site, map your Florida market competition, and identify where the highest value lead opportunities actually exist.",
  },
  {
    number: "2",
    Icon: ChartNoAxesColumnIncreasing,
    title: "Keyword and Search Intent Research",
    description:
      "We identify what buyers, sellers, and investors in your specific Florida markets are actually searching, not what generic tools suggest.",
  },
  {
    number: "3",
    Icon: SquareActivity,
    title: "Technical SEO Correction",
    description:
      "Before beginning on content or links, we fix crawl issues, then address indexing shortfalls. We solve mobile inaccuracies, along with sluggish performance patterns.",
  },
  {
    number: "4",
    Icon: KeyRound,
    title: "On Page Optimization",
    description:
      "Each target page gets updated title tags, header structure, internal linking, and schema that Google and AI systems can read correctly.",
  },
  {
    number: "5",
    Icon: FileText,
    title: "Content Development and Publishing",
    description:
      "We build and publish neighborhood pages, market reports, and FAQ content designed to rank for the searches that drive inquiries.",
  },
  {
    number: "6",
    Icon: Settings,
    title: "Editorial Link Acquisition",
    description:
      "We earn backlinks from trusted Florida outlets and national real estate publications to steadily grow your domain authority.",
  },
  {
    number: "7",
    Icon: MapPin,
    title: "AI and GEO Content Structuring",
    description:
      "We built content and references to lead Google AI Overviews, ChatGPT, and Perplexity to recognize your brand as trustworthy and worth citing.",
  },
  {
    number: "8",
    Icon: SquarePen,
    title: "Monthly Reports and Strategy Updates",
    description:
      "Our monthly reports cover ranking shifts, visitor numbers, and lead generation. Our strategy adjustments follow evidence revealed through performance patterns.",
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
                Florida Real Estate
                <br />
                Businesses
              </span>
            </h2>

            <div className="mt-7 h-[2px] w-14 bg-[#FF6F00]" />

            <div className="mt-7 max-w-[380px] space-y-6 text-[16px] leading-8 text-[#081B4B]/75">
              <p>
                Our work process for real estate SEO services in Florida is
                straightforward. We only produce results when the process behind
                them is structured and consistently executed.
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
