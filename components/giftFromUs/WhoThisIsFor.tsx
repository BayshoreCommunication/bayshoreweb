import { Scale, Briefcase, Stethoscope, Building2 } from "lucide-react";

export default function WhoThisIsFor() {
  return (
    <section className="relative w-full px-8 py-8 md:py-16">
      <div className="relative max-w-[1640px] mx-auto hidden lg:grid grid-cols-[1fr_420px_1fr] items-center gap-x-24">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-40">
          {/* LEFT TOP */}
          <div className="relative ml-auto max-w-[420px] rounded-2xl p-8 shadow-xl bg-gradient-to-br from-white to-[#fff5ef]">
            {/* ICON */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#f97316]">
              <Scale size={48} />
            </div>

            <h3 className="mt-6 mb-2 text-[24px] font-semibold tracking-wide text-gray-900 text-center">
              LAW FIRMS
            </h3>

            <p className="text-[18px] text-gray-600 text-center">
              Build client trust with professional presence and strategic
              positioning.
            </p>
          </div>

          {/* LEFT BOTTOM */}
          <div className="relative ml-auto max-w-[420px] rounded-2xl p-8 shadow-xl bg-gradient-to-br from-white to-[#fff5ef]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#f97316]">
              <Stethoscope size={48} />
            </div>
            <h3 className="mb-2 text-[24px] font-semibold tracking-wide text-gray-900 text-center">
              MEDICAL PRACTICES &amp; MED SPAS
            </h3>
            <p className="text-[18px] text-gray-600 text-center">
              Establish expertise and attract quality patients seeking trusted
              care.
            </p>
          </div>
        </div>

        {/* CENTER CONTENT */}
        <div className="relative text-center">
          <h2 className="text-[20px] lg:text-[36px] xl:text-[38px] font-semibold text-gray-900">
            <span className="text-[#f97316]">Who</span> This Is For
          </h2>
          <p className="mt-3 text-[16px] text-gray-500">
            This package is tailored for established businesses ready to level
            up.
          </p>

          <button className="mt-6 rounded-md bg-[#f97316] px-6 py-3 text-[16px] font-medium text-white shadow hover:bg-orange-600 transition">
            Schedule Call
          </button>

          {/* Vertical connector */}
          <div className="absolute left-1/2 top-full mt-10 h-24 w-px bg-gray-200" />
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-40">
          {/* RIGHT TOP */}
          <div className="relative mr-auto max-w-[420px] rounded-2xl p-8 shadow-xl bg-gradient-to-br from-white to-[#fff5ef]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#f97316]">
              <Briefcase size={48} />
            </div>
            <h3 className="mb-2 text-[24px] font-semibold tracking-wide text-gray-900 text-center">
              LOCAL SERVICE BUSINESSES
            </h3>
            <p className="text-[18px] text-gray-600 text-center">
              Stand out from competitors with professional branding and local
              visibility.
            </p>
          </div>

          {/* RIGHT BOTTOM */}
          <div className="relative mr-auto max-w-[420px] rounded-2xl p-8 shadow-xl bg-gradient-to-br from-white to-[#fff5ef]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#f97316]">
              <Building2 size={48} />
            </div>
            <h3 className="mb-2 text-[24px] font-semibold tracking-wide text-gray-900 text-center">
              ESTABLISHED SMBS (NOT STARTUPS)
            </h3>
            <p className="text-[18px] text-gray-600 text-center ">
              Optimize growth channels and capture untapped market
              opportunities.
            </p>
          </div>
        </div>

        {/* CONNECTING LINES */}
        <div className="pointer-events-none">
          <div className="absolute left-[33%] top-[120px] h-px w-24 bg-gray-200" />
          <div className="absolute right-[33%] top-[120px] h-px w-24 bg-gray-200" />
          <div className="absolute left-[33%] bottom-[120px] h-px w-24 bg-gray-200" />
          <div className="absolute right-[33%] bottom-[120px] h-px w-24 bg-gray-200" />
        </div>
      </div>

      {/* MOBILE */}
      <div className="lg:hidden text-center space-y-6">
        <h2 className="text-[26px] font-semibold">
          <span className="text-orange-500">Who</span> This Is For
        </h2>
        <p className="text-sm text-gray-500">
          This package is tailored for established businesses ready to level up.
        </p>
        <button className="rounded-md bg-[#f97316] px-6 py-3 text-sm font-medium text-white">
          Schedule Call
        </button>
      </div>
    </section>
  );
}
