import Image from "next/image";
import { CalendarDays } from "lucide-react";

const services = [
  {
    title: "SEO Website Audit",
    image: "/seo-company-wesley-chapel/service-1.png",
    description:
      "We review every technical, structural, and content factor influencing your current Wesley Chapel search performance. Each issue is categorized by impact and prioritized to produce measurable value from the first month.",
  },
  {
    title: "Keyword Research and Search Intent Analysis",
    image: "/seo-company-wesley-chapel/service-2.png",
    description:
      "We map the searches your Wesley Chapel customers perform throughout their buying process. High-intent local terms are identified and assigned to dedicated pages built to rank and convert.",
  },
  {
    title: "On-Page Optimization",
    image: "/seo-company-wesley-chapel/service-3.png",
    description:
      "All titles, meta descriptions, headings, image attributes and internal links, for priority pages, are optimized. We provide a clear \"Why Wesley Chapel\" message for all Wesley Chapel visitors.",
  },
  {
    title: "Technical SEO",
    image: "/seo-company-wesley-chapel/service-4.png",
    description:
      "We will cover crawlability, page speed, Core Web Vitals, structured data, mobile rendering and duplicate content. These are the technical elements on which all the search rankings of Wesley Chapel rely.",
  },
  {
    title: "Local SEO and Map Pack Optimization",
    image: "/seo-company-wesley-chapel/service-5.png",
    description:
      "We optimize your Google Business Profile and build consistent citations across Wesley Chapel directories. Geographic keyword targeting and review strategies improve your map pack position over time.",
  },
  {
    title: "Content Development and Authority Building",
    image: "/seo-company-wesley-chapel/service-6.png",
    description:
      "We produce Wesley Chapel service pages, location pages, and FAQ articles. Every piece answers real questions your customers ask before they decide to buy. Every piece earns search visibility and positions your business as the authoritative local choice in your category.",
  },
  {
    title: "Off-Page SEO and Link Acquisition",
    image: "/seo-company-wesley-chapel/service-7.png",
    description:
      "We secure backlinks from Pasco County publications, local business associations, and authoritative industry sources. Each link strengthens your domain credibility and reinforces your competitive position in Wesley Chapel organic search results.",
  },
  {
    title: "Ask Engine Optimization (AEO)",
    image: "/seo-company-wesley-chapel/service-8.png",
    description:
      "We structure your content to become the source AI platforms reference. When Wesley Chapel residents ask questions on ChatGPT, Perplexity, or Google AI Overviews, your business is cited. Appearing as the cited source in AI-generated answers is the new most-visible position in search.",
  },
  {
    title: "Generative Engine Optimization (GEO)",
    image: "/seo-company-wesley-chapel/service-9.png",
    description:
      "We optimize your content for how generative AI systems summarize and recommend local businesses. When a Wesley Chapel resident asks an AI assistant for local business recommendations, your business should be mentioned.",
  },
  {
    title: "Google Business Profile Management",
    image: "/seo-company-wesley-chapel/service-5.png",
    description:
      "We actively manage your Google Business Profile with regular posts, photo updates, and review response strategies. Consistent management outperforms any one-time setup. A consistently maintained profile outperforms a one-time optimized profile in every local ranking metric over time.",
  },
  {
    title: "Performance Tracking and Monthly Reporting",
    image: "/seo-company-wesley-chapel/service-1.png",
    description:
      "We translate ranking data, traffic, conversions, and Google Business Profile activity into plain-language insights every month. Every report includes a clear strategy recommendation so you always know what your campaign is producing.",
  },
];

export default function SeoServicesSection() {
  return (
    <section className="bg-white py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[430px_minmax(0,1fr)] xl:gap-12 xl:grid-cols-[500px_minmax(0,1040px)] 2xl:gap-14 2xl:grid-cols-[520px_minmax(0,1040px)]">
          {/* Left Content */}
          <div className="lg:sticky lg:top-24 h-fit">
            <span className="text-xl font-semibold uppercase tracking-wider text-[#FF6F00]">
              Our Services
            </span>

            <h2 className="mt-4 text-[36px] font-bold leading-[1.1] text-black md:text-[54px]">
              Complete <span className="text-[#FF6F00]">SEO</span>
              <br />
              Services in
              <br />
              <span className="text-[#FF6F00]">
                Wesley Chapel,
                <br />
                Florida,
              </span>
              <br />
              Crafted for the
              <br />
              AI-Driven Search Era
            </h2>

            <div className="mt-6 h-1 w-20 bg-[#FF6F00]" />

            <div className="mt-8 space-y-6 text-[15px] leading-8 text-black/70 md:text-[16px]">
              <p>
                Search optimization in 2026 demands far more than keyword
                placement on a page. Google&apos;s AI-assisted systems and
                voice-activated tools have changed how Wesley Chapel residents
                find local businesses.
              </p>

              <p>
                Bayshore Communication is the reliable SEO company in Wesley
                Chapel, Florida, that understands this shift. We build
                strategies that perform across traditional rankings, AI answers,
                and every channel your next customer uses.
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
                gap-3
                overflow-hidden
                rounded-md
                bg-[#FF6F00]
                px-6
                font-semibold
                text-white
              "
            >
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 ease-out group-hover:translate-x-full" />

              <span className="relative flex items-center gap-3">
                <CalendarDays size={18} />
                SCHEDULE A FREE CASE REVIEW
              </span>
            </button>
          </div>

          {/* Right Services */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="
                  group
                  grid
                  items-start
                  gap-4
                  rounded-[20px]
                  border
                  border-black/5
                  bg-white
                  p-4
                  md:p-8
                  shadow-[0_4px_20px_rgba(0,0,0,0.04)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]
                  md:grid-cols-[minmax(0,1fr)_350px]
                
                "
              >
                <div>
                  <h3 className="text-[20px] font-bold text-black md:text-[24px]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-[16px] leading-relaxed text-black/70 md:text-[16px] w-full md:max-w-[70%]">
                    {service.description}
                  </p>
                </div>

                <div className="relative  w-full h-[250px]  overflow-hidden rounded-[16px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
