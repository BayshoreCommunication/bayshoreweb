import Link from "next/link";
import {
  ArrowRight,
  ChartColumnIncreasing,
  FileText,
  Link2,
  Settings,
  Sparkles,
  Store,
} from "lucide-react";

type PackageKey = "launch" | "scale" | "dominate";

type PackageColumn = {
  key: PackageKey;
  title: string;
  subtitle: string;
  price: string;
  popular?: boolean;
  cta: string;
};

type FeatureRow = {
  title: string;
  icon: typeof Store;
  items: string[];
  values: Record<PackageKey, string[]>;
};

const packageColumns: PackageColumn[] = [
  {
    key: "launch",
    title: "FOUNDATION",
    subtitle: "Get Discovered",
    price: "$1,500",
    cta: "Contact Us To Get Started",
  },
  {
    key: "scale",
    title: "AUTHORITY",
    subtitle: "Grow Your Presence",
    price: "$2,500",
    cta: "Contact Us To Get Started",
    popular: true,
  },
  {
    key: "dominate",
    title: "DOMINANCE",
    subtitle: "Market Leadership",
    price: "$4,000",
    cta: "Contact Us To Get Started",
  },
];

const featureRows: FeatureRow[] = [
  {
    title: "Google Business Profile",
    icon: Store,
    items: [
      "Initial Setup",
      "Full Management",
      "Advanced Management",
    ],
    values: {
      launch: ["Included", "Not Included", "Not Included"],
      scale: ["Included", "Included", "Not Included"],
      dominate: ["Included", "Included", "Included"],
    },
  },
  {
    title: "Target Keywords",
    icon: Settings,
    items: [
      "Keyword Coverage",
      "Optimized Service Pages",
      "Technical SEO Audit",
    ],
    values: {
      launch: ["Up to 15", "2 / month", "One-Time"],
      scale: ["Up to 35", "4 / month", "Quarterly"],
      dominate: ["Unlimited", "8 / month", "Monthly"],
    },
  },
  {
    title: "Citation & Links",
    icon: FileText,
    items: [
      "Local Citation Building",
      "Link Building",
      "AI Search Optimization",
    ],
    values: {
      launch: ["20 / month", "5 links/mo", "Basic"],
      scale: ["50 / month", "15 links/mo", "Standard"],
      dominate: ["Unlimited", "30 links/mo", "Advanced"],
    },
  },
  {
    title: "Reporting & Support",
    icon: ChartColumnIncreasing,
    items: [
      "Monthly Report",
      "Account Manager",
    ],
    values: {
      launch: ["Standard", "Shared"],
      scale: ["Detailed", "Dedicated"],
      dominate: ["Executive Dashboard", "Senior Dedicated"],
    },
  },
];

const getValueTone = (value: string) => {
  if (value === "Not Included") return "text-black/35";
  return "text-[#081B4B]";
};

function PackagePricingCard({ pkg }: { pkg: PackageColumn }) {
  return (
    <div
      className={`group rounded-[24px] border bg-white p-4 shadow-[0_10px_30px_rgba(8,27,75,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6F00]/40 hover:shadow-[0_18px_45px_rgba(255,111,0,0.14)] active:scale-[0.99] ${
        pkg.popular
          ? "border-[#FF6F00]/35 ring-1 ring-[#FF6F00]/10"
          : "border-black/5"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-[21px] font-bold uppercase tracking-[0.04em] text-[#FF6F00]">
              {pkg.title}
            </h3>

            {pkg.popular ? (
              <span className="rounded-full bg-[#FF6F00] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                Most Popular
              </span>
            ) : null}
          </div>

          <p className="mt-1 text-[14px] font-medium text-[#081B4B]/75">
            {pkg.subtitle}
          </p>
        </div>

        <div className="text-right">
          <div className="text-[12px] font-medium text-black/45">From</div>
          <div className="mt-1 flex items-end justify-end gap-1">
            <span className="text-[32px] font-bold leading-none text-[#FF6F00]">
              {pkg.price}
            </span>
            <span className="pb-[1px] text-[13px] font-medium text-[#081B4B]/70">
              / month
            </span>
          </div>
        </div>
      </div>

      <Link
        href="#contact"
        className="group relative mt-4 inline-flex h-[48px] w-full items-center justify-center overflow-hidden rounded-full bg-[#FF6F00] px-5 text-[14px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
      >
        <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 ease-out group-hover:translate-x-full" />
        <span className="relative flex items-center gap-2">
          {pkg.cta}
          <ArrowRight size={16} />
        </span>
      </Link>
    </div>
  );
}

function PackageFeatureCard({
  row,
  pkg,
}: {
  row: FeatureRow;
  pkg: PackageColumn;
}) {
  const Icon = row.icon;

  return (
    <div className="rounded-[18px] border border-black/5 bg-[#FCFCFC] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FF6F00]/25 hover:bg-[#FFF7F1] hover:shadow-[0_12px_30px_rgba(255,111,0,0.08)]">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFF4EC] text-[#FF6F00]">
          <Icon size={18} strokeWidth={2} />
        </div>

        <div className="min-w-0 flex-1">
          <h4 className="text-[14px] font-bold uppercase leading-[1.25] tracking-[0.02em] text-[#FF6F00]">
            {row.title}
          </h4>

          <ul className="mt-2 space-y-1.5">
            {row.items.map((item, itemIndex) => {
              const value = row.values[pkg.key][itemIndex];

              return (
                <li
                  key={`${row.title}-${pkg.key}-${itemIndex}`}
                  className="flex items-start gap-2 text-[12px] leading-5 text-[#081B4B]/72"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF6F00]" />
                  <span className="min-w-0 flex-1">{item}</span>
                  <span
                    className={`shrink-0 text-right font-medium ${getValueTone(value)}`}
                  >
                    {value}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function SeoPackagesSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1500px] px-4 md:px-8">
        <div className="text-center">
          <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#FF6F00] md:text-[15px]">
            SEO PACKAGES
          </p>

          <h2 className="mx-auto mt-4 max-w-[1180px] text-[32px] font-bold leading-[1.08] text-[#081B4B] md:text-[50px]">
            SEO Packages for Fort Myers Law Firms
          </h2>

          <p className="mx-auto mt-4 max-w-[960px] text-[15px] leading-7 text-black/60 md:text-[18px]">
            The following tiers are our standard packages for law firm SEO in
            Fort Myers. All packages include a discovery session, SEO audit,
            competitive analysis, and onboarding. Contact us to discuss a
            custom plan tailored to your firm.
          </p>
        </div>

        <div className="mt-10 space-y-8 lg:hidden">
          {packageColumns.map((pkg) => (
            <div key={`mobile-${pkg.key}`} className="space-y-4">
              <PackagePricingCard pkg={pkg} />

              <div className="space-y-3">
                {featureRows.map((row) => (
                  <PackageFeatureCard
                    key={`${pkg.key}-${row.title}`}
                    row={row}
                    pkg={pkg}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 hidden overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:block">
          <div className="min-w-[1180px] rounded-[28px] border border-black/5 bg-white shadow-[0_18px_60px_rgba(8,27,75,0.06)]">
            <div className="grid grid-cols-[320px_repeat(3,minmax(0,1fr))] items-start">
              <div className="sticky left-0 z-30 border-r border-black/5 bg-white px-6 pb-8 pt-10">
                <span className="text-[16px] font-bold uppercase tracking-[0.14em] text-[#081B4B]">
                  Overview
                </span>
              </div>

              {packageColumns.map((pkg) => (
                <div
                  key={pkg.key}
                  className="px-3 pb-6 pt-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(255,111,0,0.10)]"
                >
                  <div
                    className={`flex h-full min-h-[214px] flex-col rounded-[22px] border bg-white px-6 py-6 text-center shadow-[0_10px_30px_rgba(8,27,75,0.05)] ${
                      pkg.popular ? "" : "border-black/5"
                    }`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <h3 className="text-[22px] font-bold uppercase tracking-[0.04em] text-[#FF6F00]">
                        {pkg.title}
                      </h3>

                      {pkg.popular ? (
                        <span className="rounded-full bg-[#FF6F00] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                          Most Popular
                        </span>
                      ) : null}
                    </div>

                    <p className="mt-1 text-[15px] font-medium text-[#081B4B]/75">
                      {pkg.subtitle}
                    </p>

                    <div className="mt-3 text-[14px] font-medium text-black/45">
                      From
                    </div>

                    <div className="mt-1 flex items-end justify-center gap-1">
                      <span className="text-[40px] font-bold leading-none text-[#FF6F00]">
                        {pkg.price}
                      </span>
                      <span className="pb-[2px] text-[15px] font-medium text-[#081B4B]/70">
                        / month
                      </span>
                    </div>

                    <Link
                      href="#contact"
                      className="group relative mt-4 inline-flex h-[48px] items-center justify-center overflow-hidden rounded-full bg-[#FF6F00] px-6 text-[14px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 ease-out group-hover:translate-x-full" />
                      <span className="relative flex items-center gap-2">
                        {pkg.cta}
                        <ArrowRight size={16} />
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="divide-y divide-black/5">
              {featureRows.map((row) => {
                const Icon = row.icon;

                return (
                  <div
                    key={row.title}
                    className="grid grid-cols-[320px_repeat(3,minmax(0,1fr))] items-stretch transition-colors duration-300 hover:bg-[#FFF7F1]/35"
                  >
                    <div className="sticky left-0 z-20 border-r border-black/5 bg-white px-5 py-5 md:px-6 md:py-6">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF4EC] text-[#FF6F00]">
                          <Icon size={22} strokeWidth={2} />
                        </div>

                        <div>
                          <h3 className="text-[16px] font-bold uppercase leading-[1.25] tracking-[0.02em] text-[#FF6F00] md:text-[17px]">
                            {row.title}
                          </h3>

                          <ul className="mt-2 space-y-1 text-[13px] leading-5 text-[#081B4B]/72 md:text-[14px] md:leading-6">
                            {row.items.map((item, itemIndex) => (
                              <li key={`${row.title}-${itemIndex}`}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {packageColumns.map((pkg) => (
                      <div
                        key={`${row.title}-${pkg.key}`}
                        className="px-4 py-5 text-center md:px-6 md:py-6"
                      >
                        <div className="space-y-1.5">
                          {row.values[pkg.key].map((value, valueIndex) => (
                            <p
                              key={`${row.title}-${pkg.key}-${valueIndex}`}
                              className={`text-[14px] font-medium leading-6 md:text-[15px] ${getValueTone(value)}`}
                            >
                              {value}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-[320px_repeat(3,minmax(0,1fr))] items-center border-t border-black/5">
              <div className="sticky left-0 z-20 border-r border-black/5 bg-white px-6 py-6" />

              {packageColumns.map((pkg) => (
                <div
                  key={`${pkg.key}-footer`}
                  className="flex justify-center px-4 py-6 transition-all duration-300 hover:bg-[#FFF7F1]/35"
                >
                  <Link
                    href="#contact"
                    className="group relative inline-flex h-[48px] items-center justify-center overflow-hidden rounded-full bg-[#FF6F00] px-6 text-[14px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 ease-out group-hover:translate-x-full" />
                    <span className="relative flex items-center gap-2">
                      {pkg.cta}
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mx-auto mt-4 max-w-[980px] text-center text-[13px] leading-6 text-black/55">
          All packages include a discovery session, SEO audit, competitive
          analysis, and onboarding. Contact us to discuss a custom plan
          tailored to your firm.
        </p>
      </div>
    </section>
  );
}
