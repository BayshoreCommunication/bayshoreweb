import Image from "next/image";
import { CalendarDays } from "lucide-react";

const services = [
  {
    title: "SEO Audit",
    image: "/seo-company-wesley-chapel/service-1.png",
    description:
      "Every element of your website is evaluated against what search engines currently reward and what they currently penalize. The findings are organized into a ranked action plan so the most impactful improvements happen at the right time.",
  },
  {
    title: "Keyword Research",
    image: "/seo-company-wesley-chapel/service-2.png",
    description:
      "We go beyond monthly search volume to understand the purchasing intent sitting behind every term we select for your campaign. Why each keyword is a valuable part of your strategy is because they're keywords that bring people who are willing to spend money to your business.",
  },
  {
    title: "On-Page SEO",
    image: "/seo-company-wesley-chapel/service-3.png",
    description:
      "The titles, headings, metadescriptions, internal link paths and image metadata are all optimized with accuracy. Each page on your site is a purposeful ranking asset instead of a bunch of text and pictures.",
  },
  {
    title: "Technical SEO",
    image: "/seo-company-wesley-chapel/service-4.png",
    description:
      "Crawlability, rendering, page speed, mobile responsive, schema implementation and index coverage are all analyzed and fixed. Sites that are easy to process are rewarded by search engines and we ensure that your site fulfills all current technical needs.",
  },
  {
    title: "Off-Page SEO",
    image: "/seo-company-wesley-chapel/service-7.png",
    description:
      "We earn backlinks from sources that carry genuine topical and geographic relevance to your Largo business and market. Each link strengthens the domain-level trust signals that determine how confidently search engines rank your pages.",
  },
  {
    title: "Local SEO",
    image: "/seo-company-wesley-chapel/service-5.png",
    description:
      "Your Google Business Profile, Largo-area directory listings, and location-optimized content are all developed with purpose. The objective is map pack visibility and neighborhood-level organic rankings for the searches that bring real revenue.",
  },
  {
    title: "E-Commerce SEO",
    image: "/seo-company-wesley-chapel/service-6.png",
    description:
      "Structured data, faceted navigation and category hierarchies, plus optimized product listings, will all generate traffic with intent to buy. We treat every product page as an individual ranking and conversion opportunity within your overall site architecture.",
  },
  {
    title: "Ask Engine Optimization (AEO)",
    image: "/seo-company-wesley-chapel/service-8.png",
    description:
      "AI assistants and answer engines now field millions of local service queries that never result in a traditional search click. AEO positions your content as the authoritative source these platforms draw from when generating their direct responses.",
  },
  {
    title: "Generative Engine Optimization (GEO)",
    image: "/seo-company-wesley-chapel/service-9.png",
    description:
      "Large language models now recommend businesses by name inside conversational AI responses and AI-generated overviews. GEO ensures your brand is structured, cited, and semantically aligned to earn those mentions across major AI platforms.",
  },
  {
    title: "Shopify SEO",
    image: "/seo-company-wesley-chapel/service-6.png",
    description:
      "Shopify carries platform-specific constraints around URL structures, duplicate content, and metadata that require specialized handling. We resolve those constraints and build a keyword and content architecture that drives qualified traffic to your store.",
  },
  {
    title: "YouTube SEO",
    image: "/seo-company-wesley-chapel/service-3.png",
    description:
      "Video content is increasingly surfaced in standard Google results as well as within YouTube's own discovery algorithm. We optimize every metadata element and build keyword-informed content structures that grow channel visibility steadily.",
  },
  {
    title: "Amazon SEO",
    image: "/seo-company-wesley-chapel/service-2.png",
    description:
      "Amazon search operates through its own proprietary ranking algorithm with distinct signals that differ entirely from Google. We optimize listing content, backend terms, and conversion-supporting elements to improve your product's visibility and sales rate.",
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
                Largo,
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
                The search landscape has changed dramatically for the worse in three years and the divide between ready and not-so-ready businesses continues to grow. The delivery of answers, building of trust, and the kind of businesses that are recommended have been revolutionized by the use of AI-powered platforms.
              </p>

              <p>
                As a seo company largo fl, Bayshore Communication builds strategies that perform across both traditional search and AI-driven discovery.
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
