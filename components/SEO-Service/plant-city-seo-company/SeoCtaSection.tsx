import Link from "next/link";
import Image from "next/image";

export default function SeoCtaSection() {
  return (
    <section className="">
      <div className="mx-auto max-w-screen">
        <div className="relative overflow-hidden">
          {/* Background Image */}
          <Image
            src="/seo-company-wesley-chapel/cta-bg.png"
            alt="SEO CTA Background"
            fill
            className="object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#081B4B]/70" />

          {/* Content */}
          <div className="relative z-10 flex min-h-[320px] flex-col items-center justify-center px-6 py-12 text-center md:min-h-[420px]">
            <h2 className="max-w-[1200px] text-[38px] font-bold leading-[1.15] text-white md:text-[52px]">
              Your Search for the Right Plant City Florida SEO Company Ends Here
            </h2>

            <p className="mt-5 max-w-[760px] text-[15px] leading-7 text-white/90 md:text-[18px] md:leading-8">
              Bayshore Communication has built SEO strategies for businesses across medical, law, tax, real estate, travel, retail and more services. At our Plant City SEO company we understand Hillsborough County search behavior, local buyer psychology and technical standards. We bring all of that to every campaign and results show up in rankings, traffic and revenue.
            </p>

            <Link href="#contact">


            <button
              className="
                group
                relative
                mt-8
                inline-flex
                h-[52px]
                items-center
                justify-center
                overflow-hidden
                rounded-md
                bg-[#FF6F00]
                px-8
                font-semibold
                text-white
                md:px-12
              "
            >
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 ease-out group-hover:translate-x-full" />

              <span className="relative">Get My Custom SEO Proposal</span>
            </button>


            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
