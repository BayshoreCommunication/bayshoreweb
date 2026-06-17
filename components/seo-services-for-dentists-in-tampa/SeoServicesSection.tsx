import Image from "next/image";
import { CalendarDays } from "lucide-react";

const services = [
  {
    title: "Local SEO and Google Business Profile Optimization",
    image: "/seo-company-wesley-chapel/service-5.png",
    description:
      "We take care of your entire Google Business Profile from initial setup and optimization through to active daily management. Our local map pack strategy focuses heavily on specific Tampa neighborhoods and the surrounding Hillsborough County area to put your practice on the map.",
  },
  {
    title: "Keyword Research and On-Page Optimization",
    image: "/seo-company-wesley-chapel/service-2.png",
    description:
      "We dig deep into local data to find out what Tampa patients are saying when they&apos;re prepared to make an appointment. After reviewing each service page, location listing, and related material across your site, corrections are applied where needed. Title tags, meta descriptions, headers, and internal linking get tuned so they align smoothly.",
  },
  {
    title: "Technical SEO",
    image: "/seo-company-wesley-chapel/service-4.png",
    description:
      "Our team will work to clear your site of crawl issues and broken links and enhance your website structure. We ensure your website follows Core Web Vitals requirements to load immediately on both desktop and mobile devices. We also apply structured data and schema markup to canvas you in AI search and rich snippets.",
  },
  {
    title: "Content Strategy and Authority Building",
    image: "/seo-company-wesley-chapel/service-3.png",
    description:
      "We produce content for patients from a wide variety of dental and cosmetic procedures to implants all the way to orthodontics. By publishing regular blog posts, we build your topical authority and capture people searching for answers. This content is intentionally designed to rank well in traditional search engines as well as newer AI search overviews.",
  },
  {
    title: "Link Building and Digital PR",
    image: "/seo-company-wesley-chapel/service-7.png",
    description:
      "Backlinks arrive through established Tampa businesses, alongside support from well-regarded dental sites. Progress builds slowly, domain strength rises as a result. Rankings hold more firmly under such conditions, maintained across extended periods.",
  },
  {
    title: "Review Management and Reputation SEO",
    image: "/seo-company-wesley-chapel/service-8.png",
    description:
      "We put systems in place to help you collect more genuine positive reviews from your patients. We also actively monitor your online reputation and provide timely responses that build trust with potential patients while boosting your local search authority.",
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
              Services for
              <br />
              <span className="text-[#FF6F00]">
                Tampa Dental
                <br />
                Practices,
              </span>
              <br />
              Crafted for the
              <br />
              AI-Driven Search Era
            </h2>

            <div className="mt-6 h-1 w-20 bg-[#FF6F00]" />

            <div className="mt-8 space-y-6 text-[15px] leading-8 text-black/70 md:text-[16px]">
              <p>
                Modern dental SEO goes far beyond keyword placement and standard link building tactics alone. Our SEO services for dentists in Tampa cover every layer of search visibility, from technical foundations to authority-driven content.
              </p>

              <p>
                Bayshore Communication builds each service component around what Tampa patients actually search for online.
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
