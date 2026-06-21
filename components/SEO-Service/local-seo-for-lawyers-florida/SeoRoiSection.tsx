import {
  ChartNoAxesCombined,
  BadgeDollarSign,
  ShieldCheck,
  Handshake,
  PiggyBank,
  Users,
  BarChart3,
  Target,
  TrendingUp,
  Percent,
  Star,
} from "lucide-react";

const realResultsCards = [
  {
    icon: Target,
    title: "Massive Visibility in Google Search Results",
    description:
      "Using local SEO strategies results in up to 296% increase in GBP impressions annually.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Higher Conversion Rates",
    description:
      "Visibility of optimized Map Pack led to 1.5 times more calls, 3 times more website visits and 6 times more direction requests.",
  },
  {
    icon: BadgeDollarSign,
    title: "Increased Qualified Leads",
    description:
      "Law firms that target local SEO such as \"automobile accident attorney near me,\" attract clients who need urgent counsel.",
  },
  {
    icon: ShieldCheck,
    title: "Improved Legal Market Position",
    description:
      "Strategic local SEO ranks law firms in the top \"Map Pack\" results and builds community trust.",
  },
  {
    icon: Handshake,
    title: "Enhanced Reputation across Florida",
    description:
      "Constantly managing GBP and local reviews boosts credibility and approximately 171% rise in Map search visibility.",
  },
];

const roiCards = [
  {
    icon: TrendingUp,
    title: "Increase Targeted Traffic",
    description:
      "Local SEO generates over 400% more highly targeted traffic from Florida clients.",
  },
  {
    icon: Percent,
    title: "High Conversion Rates",
    description:
      "Local SEO achieves approx 14% conversion rate that's higher than 1–2% for paid ads.",
  },
  {
    icon: Users,
    title: "Google Business Profile (GBP)",
    description:
      "Optimized GBP profiles contribute 36% to local rankings.",
  },
  {
    icon: BadgeDollarSign,
    title: "Case Acquisition Cost",
    description:
      "Focusing on specific niches like Miami immigration or Gulf Coast estate planning lowers case acquisition costs.",
  },
  {
    icon: PiggyBank,
    title: "Long-Term Value",
    description:
      "Local SEO offers more sustainable and compounding traffic than costly billboard and TV advertising.",
  },
];

function RoiCard({ item }: { item: { icon: typeof Target; title: string; description: string } }) {
  const Icon = item.icon;
  return (
    <div
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
      "
    >
      <div className="flex gap-5">
        <div
          className="
            flex
            h-[88px]
            w-[88px]
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
          <Icon size={42} className="text-[#FF6F00]" strokeWidth={1.8} />
        </div>

        <div className="w-px bg-[#FF6F00]/20" />

        <div>
          <h3 className="text-[22px] font-bold leading-[1.3] text-[#081B4B]">
            {item.title}
          </h3>

          <div className="mt-4 h-[3px] w-12 bg-[#FF6F00]" />

          <p className="mt-5 text-[15px] leading-8 text-black/65">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SeoRoiSection() {
  return (
    <div>
      {/* ── Section 1: Real Results ── */}
      <section className="bg-white py-6 md:py-20">
        <div className="mx-auto max-w-[1620px] px-8 md:px-8">
          {/* Header */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-5 py-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF6F00]">
                <BarChart3 size={18} className="text-white" />
              </div>
              <span className="font-bold text-[#081B4B]">REAL RESULTS</span>
            </div>

            <h2 className="mx-auto mt-8 max-w-[1100px] text-[38px] font-bold leading-[1.1] text-[#081B4B] md:text-[52px]">
              Real Results of Using Local SEO
              <br />
              <span className="text-[#FF6F00]">for Florida Law Firms</span>
            </h2>

            <div className="mx-auto mt-6 h-1 w-16 bg-[#FF6F00]" />

            <p className="mx-auto mt-8 max-w-[900px] text-[16px] leading-8 text-black/60 md:text-[20px]">
              Bayshore Communication provides exceptional local SEO for lawyers
              Florida achieving immense growth in Google Business Profile
              impressions and more user interactions, enhancing client leads
              significantly.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {realResultsCards.map((item, index) => (
              <RoiCard key={index} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2: The ROI ── */}
      <section className="bg-[#F8FAFC] py-6 md:py-20 md:mb-16">
        <div className="mx-auto max-w-[1620px] px-8 md:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-5 py-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF6F00]">
                <Star size={18} className="text-white" />
              </div>
              <span className="font-bold text-[#081B4B]">THE ROI OF LOCAL SEO</span>
            </div>

            <h2 className="mx-auto mt-8 max-w-[1100px] text-[38px] font-bold leading-[1.1] text-[#081B4B] md:text-[52px]">
              The ROI of Local SEO for
              <br />
              <span className="text-[#FF6F00]">Florida Law Firms</span>
            </h2>

            <div className="mx-auto mt-6 h-1 w-16 bg-[#FF6F00]" />

            <p className="mx-auto mt-8 max-w-[900px] text-[16px] leading-8 text-black/60 md:text-[20px]">
              Reach up to 85% of potential clients for your law firm with
              Bayshore Communications&apos; local SEO for lawyers Florida. Our
              localized content, review strategy and consistent NAP bring in
              high-intent clients. We guarantee a profitable long-term
              investment and up to a 43% increase in qualified consultations for
              your company.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {roiCards.map((item, index) => (
              <RoiCard key={index} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
