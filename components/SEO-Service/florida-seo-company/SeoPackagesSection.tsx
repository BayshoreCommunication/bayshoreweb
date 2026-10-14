import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";

type PackageData = {
  tier: string;
  targetMarket: string;
  idealFor: string;
  price: string;
  popular?: boolean;
  features: string[];
};

const packages: PackageData[] = [
  {
    tier: "Local Foundation",
    targetMarket: "Single City or Neighborhood",
    idealFor: "Local shops and single-location service providers",
    price: "$1,000 to $2,500 monthly",
    features: [
      "Google Business Profile optimization",
      "Local citation cleanup",
      "Basic on-page SEO",
      "Monthly performance reporting",
      "Keyword & ranking tracking",
      "Dedicated account management",
    ],
  },
  {
    tier: "Regional Growth",
    targetMarket: "Multiple Cities or County-wide",
    idealFor: "Multi-location practices and regional contractors",
    price: "$2,500 to $5,000 monthly",
    popular: true,
    features: [
      "Comprehensive on-page and technical SEO",
      "Aggressive content creation",
      "Targeted link building",
      "Advanced local map strategies",
      "Full schema markup implementation",
      "Conversion rate optimization",
      "Priority monthly strategy review",
    ],
  },
  {
    tier: "Statewide Authority",
    targetMarket: "Across Florida",
    idealFor: "E-commerce, large law firms, and statewide services",
    price: "$5,000 to $10,000 plus monthly",
    features: [
      "Enterprise technical SEO",
      "Generative search optimization (GEO/AEO)",
      "High-authority digital PR & editorial backlinks",
      "Conversion rate optimization (CRO)",
      "Multi-region content hubs & city pages",
      "Custom competitive gap analysis",
      "Weekly performance monitoring & strategy",
    ],
  },
];

export default function SeoPackagesSection() {
  return (
    <section className="bg-[#F8FAFC] py-16 md:py-32" id="packages">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Header */}
        <div className="mx-auto max-w-[900px] text-center">
          <span className="text-xl font-bold uppercase tracking-wider text-[#FF6F00]">
            Pricing & Plans
          </span>

          <h2 className="text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] mt-4 font-bold leading-[1.1] text-[#081B4B]">
            SEO Packages for{" "}
            <span className="text-[#FF6F00]">Florida Businesses</span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-16 bg-[#FF6F00]" />

          <p className="mx-auto mt-6 max-w-[800px] text-[16px] leading-8 text-black/70 md:text-[20px]">
            Every business needs a different level of support. Choose the package that matches your market and growth goals. Final pricing is confirmed after your audit.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.tier}
              className={`
                relative
                flex
                flex-col
                rounded-[28px]
                border
                bg-white
                p-8
                shadow-[0_8px_30px_rgba(0,0,0,0.05)]
                transition-all
                duration-500
                hover:-translate-y-2
                md:p-10
                ${
                  pkg.popular
                    ? "border-[#FF6F00] shadow-[0_20px_50px_rgba(255,111,0,0.12)] ring-2 ring-[#FF6F00]/20"
                    : "border-black/5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.09)]"
                }
              `}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FF6F00] px-5 py-1.5 text-[13px] font-bold tracking-wide text-white shadow-md">
                    <Sparkles size={14} />
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Title & Market */}
              <div>
                <h3 className="text-[26px] font-extrabold text-[#081B4B]">
                  {pkg.tier}
                </h3>

                <p className="mt-2 text-[14px] font-bold uppercase tracking-wider text-[#FF6F00]">
                  Target Market: {pkg.targetMarket}
                </p>

                <p className="mt-3 text-[15px] leading-relaxed text-black/70">
                  <span className="font-semibold text-black">Ideal For:</span> {pkg.idealFor}
                </p>
              </div>

              {/* Price */}
              <div className="mt-6 border-y border-black/10 py-6">
                <span className="text-[13px] font-bold uppercase text-black/50">
                  Investment
                </span>
                <p className="mt-1 text-[26px] font-extrabold text-[#081B4B] sm:text-[30px]">
                  {pkg.price}
                </p>
              </div>

              {/* Features List */}
              <div className="mt-6 flex-grow">
                <span className="text-[14px] font-bold text-[#081B4B]">
                  Core Features Included:
                </span>

                <ul className="mt-4 space-y-3.5">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FFF4EC] text-[#FF6F00]">
                        <Check size={13} strokeWidth={3} />
                      </div>
                      <span className="text-[15px] leading-snug text-black/75">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-4">
                <Link href="#contact" className="block">
                  <button
                    className={`
                      group
                      relative
                      flex
                      h-[52px]
                      w-full
                      items-center
                      justify-center
                      gap-2
                      overflow-hidden
                      rounded-xl
                      font-bold
                      transition-all
                      duration-300
                      ${
                        pkg.popular
                          ? "bg-[#FF6F00] text-white shadow-[0_8px_20px_rgba(255,111,0,0.3)] hover:shadow-[0_12px_28px_rgba(255,111,0,0.4)]"
                          : "border-2 border-[#081B4B] bg-transparent text-[#081B4B] hover:bg-[#081B4B] hover:text-white"
                      }
                    `}
                  >
                    <span>Request Proposal</span>
                    <ArrowRight size={17} />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
