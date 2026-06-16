import Image from "next/image";

const mistakes = [
  {
    image: "/seo-company-wesley-chapel/mistake-1.png",
    title: "Targeting the Wrong Keywords",
    description:
      "A missing, incomplete, or unmonitored Google Business Profile means your firm does not appear in the local map pack. It can prevent your firm from appearing in the local map pack, where most Tampa clients first contact attorneys.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-2.png",
    title: "Neglected Google Business Profile",
    description:
      "More than 60% of people searching for attorneys do it on their phones. A slow or hard-to-handle mobile site loses potential clients within the first few seconds of arrival, before they even see what your firm offers.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-3.png",
    title: "Poor Mobile Experience",
    description:
      "More than 60% of people searching for attorneys do it on their phones. A slow or hard-to-handle mobile site loses potential clients within the first few seconds of arrival, before they even see what your firm offers.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-4.png",
    title: "Thin or Generic Legal Content",
    description:
      "Legal content that is not written around what Tampa residents actually search for fails to rank and fails to convert. Generic practice area descriptions do not speak to the specific questions and concerns of local clients who are ready to hire.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-5.png",
    title: "No Structured Site Architecture",
    description:
      "Without proper internal linking and page structure, search engines cannot clearly identify your most important practice area pages. Those pages then fail to rank even when your firm has the expertise to back them up.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-6.png",
    title: " Zero Local Authority Building",
    description:
      "Without Tampa-specific backlinks and citations, Google lacks sufficient ranking authority signals. Established local competitors continue building authority, making it increasingly difficult for newer firms to compete.",
  },
];

export default function CommonSeoMistakes() {
  return (
    <section className="bg-[#F9FAFA] py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[1fr_380px] lg:items-start">
          <div>
            <h2 className="max-w-[780px] text-[34px] font-bold leading-[1.05] text-black md:text-[52px]">
              Common <span className="text-[#FF6F00]">SEO</span> Mistakes{" "}
              <span className="text-[#FF6F00]">Tampa Law Firms</span>{" "}
              Make
            </h2>
          </div>

          <div>
            <p className="text-[15px] leading-7 text-black/70 md:text-[16px]">
              Many Tampa law firms invest heavily in their website and still fail to attract new clients because of avoidable SEO errors. Here is what is holding most of them back from the first-page rankings their practice deserves.
            </p>
          </div>
        </div>

        {/* Main Image */}
        <div className="mt-10 overflow-hidden rounded-[24px] ">
          <Image
            src="/seo-company-wesley-chapel/common-seo-mistakes-banner.png"
            alt="Common SEO Mistakes"
            width={800}
            height={800}
            className="h-auto w-full object-cover"
          />
        </div>

        {/* Cards */}
        <div className="mt-10 overflow-hidden rounded-[24px] border border-black/5 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {mistakes.map((item, index) => (
              <div
                key={index}
                className="
                  group
                  p-6
                  md:p-8

                  border-b
                  border-black/5

                  xl:border-r

                  transition-all
                  duration-300

                  hover:bg-[#FFF8F3]
                "
              >
                {/* Icon */}
                <div className="mb-5">
                  <div
                    className="
                      inline-flex

                      transition-all
                      duration-500

                      hover:scale-110
                      hover:-translate-y-1
                      hover:drop-shadow-[0_8px_20px_rgba(255,111,0,0.35)]
                    "
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={70}
                      height={70}
                      className="
                        h-16
                        w-16

                        md:h-20
                        md:w-20

                        object-contain
                      "
                    />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="
                    text-[18px]
                    md:text-[20px]

                    font-bold
                    leading-[1.3]

                    text-black
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-4

                    text-[14px]
                    md:text-[15px]

                    leading-7
                    text-black/70
                  "
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <button
            className="
              group
              relative
              overflow-hidden

              h-[52px]

              rounded-md

              bg-[#FF6F00]

              px-8
              md:px-12

              text-[14px]

              font-semibold
              text-white
            "
          >
            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 ease-out group-hover:translate-x-full " />

            <span className="relative flex items-center gap-2 text-[14px]">
              Start Fixing Your Wesley Chapel SEO Today
              <span>→</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
