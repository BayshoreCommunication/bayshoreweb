import {
  BarChart3,
  SearchCheck,
  TrendingUp,
  MapPin,
  DollarSign,
  Award,
  CheckCircle2,
} from "lucide-react";

const caseStudies = [
  {
    icon: SearchCheck,
    title: "Page-One Visibility for High-Value Search Terms",
    description:
      "For The Catflix, a dedicated cat-care content and e-commerce site, one highly competitive target keyword successfully reached position one on Google for US users. Another important target reached position three. Both outstanding results come directly from our published Catflix case study.",
  },
  {
    icon: TrendingUp,
    title: "Organic Search Growth That Reaches Qualified Customers",
    description:
      "Triplaw, a specialized immigration law firm, worked directly with Bayshore on in-depth keyword research, meta tag optimization, structured data implementation, and mobile site optimization. The primary goal was achieving wider reach among people urgently seeking immigration help. The full, detailed case study of their success appears on our website.",
  },
  {
    icon: MapPin,
    title: "Stronger Engagement From Local Search",
    description:
      "Apex Advisors, an established financial advisory firm, had a Google listing completely buried under local competitors. Bayshore entirely reworked the local listing and actively managed its incoming reviews. The published case study proudly reports the listing now appears front and center when people actively search for those financial services.",
  },
  {
    icon: DollarSign,
    title: "Revenue Growth Supported by Improved Organic Visibility",
    description:
      "The Apex case study also explicitly credits organic search, alongside targeted ads and email marketing, for a steady, reliable new client flow. Results always depend on each specific market and its local competition level. We never promise a typical outcome, but we consistently apply the strategies most likely to generate revenue.",
  },
  {
    icon: Award,
    title: "500,000 Plus Leads Generated Since 2016",
    description:
      "Across our extensive digital marketing work, Bayshore has successfully generated over half a million leads for clients since 2016. That immense experience spans over 70 distinct clients and the successful launch of more than 220 custom websites.",
  },
];

const roiPoints = [
  {
    bold: "Reach customers actively searching for your services",
    text: "by targeting users exactly when they type their pain points into Google. This precise timing dramatically increases the chances of converting a searcher into a buyer.",
  },
  {
    bold: "Increase qualified organic traffic",
    text: "by aligning your website content with high-intent keywords. The visitors landing on your site are pre-qualified and actively evaluating vendors for an upcoming purchase.",
  },
  {
    bold: "Generate more calls and inquiries",
    text: "because visibility on page one and in the Google Local Pack removes friction. Optimized contact forms and clear calls to action help turn increased traffic into more phone inquiries and scheduled appointments.",
  },
  {
    bold: "Reduce reliance on paid advertising",
    text: "as digital advertising costs continue to rise across Florida. A strong organic presence allows you to scale back expensive ad spend while maintaining or even growing your overall lead volume.",
  },
  {
    bold: "Build long-term search visibility",
    text: "that acts as digital equity. A well-optimized page can hold a top position and generate free traffic for years with only minor maintenance, unlike ad campaigns that vanish the second you stop paying.",
  },
  {
    bold: "Improve your website as a customer acquisition asset.",
    text: "SEO forces your website to become faster, easier to navigate, and more informative. A strong online presence helps capture and convert potential customers across multiple marketing channels.",
  },
  {
    bold: "Enhance customer acquisition efficiency",
    text: "since organic traffic functions as a permanent asset once the foundational optimization is complete. Your overall cost per acquisition drops significantly over time, widening your profit margins.",
  },
  {
    bold: "Expand into additional Florida markets",
    text: "through a strategic campaign that systematically builds location-specific pages. This effectively opens up new digital storefronts in neighboring cities and counties without the steep cost of physical expansion.",
  },
];

export default function SeoRoiSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Part 1: Real Results */}
        <div className="text-center">
          <div
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-black/10
              bg-white
              px-5
              py-3
            "
          >
            <div
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-[#FF6F00]
              "
            >
              <BarChart3 size={18} className="text-white" />
            </div>

            <span className="font-bold text-[#081B4B]">VERIFIED PERFORMANCE</span>
          </div>

          <h2 className="text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] mx-auto mt-8 max-w-[1100px] font-bold leading-[1.1] text-[#081B4B]">
            Real Results for Real{" "}
            <span className="text-[#FF6F00]">Florida Businesses</span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-16 bg-[#FF6F00]" />

          <p className="mx-auto mt-8 max-w-[900px] text-[16px] leading-8 text-black/70 md:text-[20px]">
            We measure our success by the tangible growth our clients achieve. These case studies highlight how targeted organic strategies deliver measurable returns.
          </p>
        </div>

        {/* Results Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  rounded-[24px]
                  border
                  border-black/5
                  bg-white
                  p-6
                  md:p-8
                  shadow-[0_8px_30px_rgba(0,0,0,0.05)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)]
                  flex
                  flex-col
                "
              >
                <div className="flex gap-5 items-start">
                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-[72px]
                      w-[72px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#FFF4EC]
                      transition-all
                      duration-500
                      group-hover:scale-110
                    "
                  >
                    <Icon
                      size={36}
                      className="text-[#FF6F00]"
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Divider */}
                  <div className="w-px self-stretch bg-[#FF6F00]/20" />

                  {/* Content */}
                  <div>
                    <h3 className="text-[19px] font-bold leading-[1.3] text-[#081B4B]">
                      {item.title}
                    </h3>

                    <div className="mt-3 h-[2px] w-10 bg-[#FF6F00]" />
                  </div>
                </div>

                <p className="mt-5 text-[15px] leading-7 text-black/65 flex-grow">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Part 2: ROI of SEO */}
        <div className="mt-20 border-t border-black/10 pt-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,1.3fr)] items-start">
            <div>
              <span className="text-xl font-bold uppercase tracking-wider text-[#FF6F00]">
                THE ROI OF SEO
              </span>
              <h2 className="text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] mt-4 font-bold leading-[1.15] text-[#081B4B]">
                The ROI of SEO for Florida Businesses
              </h2>
              <p className="mt-6 text-[15px] leading-8 text-black/70 md:text-[17px]">
                SEO transforms search traffic into long-term commercial equity. Explore how targeted organic optimization generates compounding returns for companies across Florida.
              </p>
            </div>

            <div className="space-y-4 rounded-2xl bg-[#FFF8F3] p-8 md:p-10 border border-[#FF6F00]/10">
              {roiPoints.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF6F00] text-white text-[12px] font-bold mt-0.5">
                    ✓
                  </span>
                  <p className="text-[15px] md:text-[16px] leading-relaxed text-[#081B4B]">
                    <strong className="font-bold text-[#081B4B]">{item.bold}</strong> {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
