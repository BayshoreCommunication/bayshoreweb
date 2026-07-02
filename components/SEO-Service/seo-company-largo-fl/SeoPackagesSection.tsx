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
    title: "STARTER",
    subtitle: "Local Foundation",
    price: "Custom Quote",
    cta: "Contact Us To Get Started",
  },
  {
    key: "scale",
    title: "GROWTH",
    subtitle: "Market Authority",
    price: "Custom Quote",
    cta: "Contact Us To Get Started",
    popular: true,
  },
  {
    key: "dominate",
    title: "ENTERPRISE",
    subtitle: "Full Domination",
    price: "Custom Quote",
    cta: "Contact Us To Get Started",
  },
];

const featureRows: FeatureRow[] = [
  {
    title: "SEO Audit",
    icon: Settings,
    items: ["Technical Audit"],
    values: {
      launch: ["Complete Technical Audit"],
      scale: ["Complete Technical Audit"],
      dominate: ["Complete Technical Audit"],
    },
  },
  {
    title: "Keyword Research",
    icon: ChartColumnIncreasing,
    items: ["Targeting Scope"],
    values: {
      launch: ["Largo Local Targeting"],
      scale: ["In-Depth Local Targeting"],
      dominate: ["Full Competitive Coverage"],
    },
  },
  {
    title: "Google Business Profile",
    icon: Store,
    items: ["Management Strategy"],
    values: {
      launch: ["Initial Setup and Optimization"],
      scale: ["Active Profile Management"],
      dominate: ["Full Reputation Strategy"],
    },
  },
  {
    title: "On-Page SEO",
    icon: FileText,
    items: ["Optimization Volume"],
    values: {
      launch: ["Up to 10 Pages"],
      scale: ["Up to 20 Pages"],
      dominate: ["Entire Website"],
    },
  },
  {
    title: "Technical SEO",
    icon: Settings,
    items: ["Service Level"],
    values: {
      launch: ["Priority Fixes"],
      scale: ["Advanced Remediation"],
      dominate: ["Continuous Technical Care"],
    },
  },
  {
    title: "Off-Page SEO",
    icon: Link2,
    items: ["Link Quality & Type"],
    values: {
      launch: ["Directory Citations"],
      scale: ["Citations and Niche Links"],
      dominate: ["Digital PR and Authority Links"],
    },
  },
  {
    title: "Content Creation",
    icon: FileText,
    items: ["Monthly Output"],
    values: {
      launch: ["Not Included"],
      scale: ["4 Pieces Monthly"],
      dominate: ["6 or More Pieces Monthly"],
    },
  },
  {
    title: "AI Optimization",
    icon: Sparkles,
    items: ["AEO & GEO Coverage"],
    values: {
      launch: ["Foundation Level"],
      scale: ["Standard Coverage"],
      dominate: ["Full Platform Optimization"],
    },
  },
  {
    title: "Competitor Monitoring",
    icon: ChartColumnIncreasing,
    items: ["Tracking Frequency"],
    values: {
      launch: ["Quarterly Review"],
      scale: ["Monthly Tracking"],
      dominate: ["Real-Time Intelligence"],
    },
  },
  {
    title: "Conversion Optimization",
    icon: Sparkles,
    items: ["CRO Integration"],
    values: {
      launch: ["Not Included"],
      scale: ["Not Included"],
      dominate: ["Fully Integrated"],
    },
  },
  {
    title: "Account Management",
    icon: Store,
    items: ["Support Level"],
    values: {
      launch: ["Shared Team"],
      scale: ["Priority Access"],
      dominate: ["Dedicated Senior Manager"],
    },
  },
  {
    title: "Reporting",
    icon: ChartColumnIncreasing,
    items: ["Frequency"],
    values: {
      launch: ["Monthly"],
      scale: ["Bi-Weekly"],
      dominate: ["Weekly"],
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
          {pkg.price !== "Custom Quote" && (
            <div className="text-[12px] font-medium text-black/45">From</div>
          )}
          <div className="mt-1 flex items-end justify-end gap-1">
            <span className="text-[32px] font-bold leading-none text-[#FF6F00]">
              {pkg.price}
            </span>
            {pkg.price !== "Custom Quote" && (
              <span className="pb-[1px] text-[13px] font-medium text-[#081B4B]/70">
                / month
              </span>
            )}
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
            SEO Packages for Largo Florida Businesses
          </h2>

          <p className="mx-auto mt-4 max-w-[960px] text-[15px] leading-7 text-black/60 md:text-[18px]">
            Bayshore Communication offers three structured packages calibrated to different stages of business growth in Largo. Each package is built to be adjusted as your goals, competitive environment, and market position evolve over time.
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

                    {pkg.price !== "Custom Quote" && (
                      <div className="mt-3 text-[14px] font-medium text-black/45">
                        From
                      </div>
                    )}

                    <div className="mt-1 flex items-end justify-center gap-1">
                      <span className="text-[40px] font-bold leading-none text-[#FF6F00]">
                        {pkg.price}
                      </span>
                      {pkg.price !== "Custom Quote" && (
                        <span className="pb-[2px] text-[15px] font-medium text-[#081B4B]/70">
                          / month
                        </span>
                      )}
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
          All packages are adjusted based on your Largo industry,
          competitive environment, and growth objectives. Contact Bayshore
          Communication for a proposal built specifically around your business
          needs.
        </p>
      </div>
    </section>
  );
}
