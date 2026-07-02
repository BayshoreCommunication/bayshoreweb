"use client";

import Image from "next/image";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  ArrowRight,
  Phone,
  Trophy,
  ShieldCheck,
  MapPinned,
} from "lucide-react";
import Link from "next/link";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) =>
    Math.round(latest).toLocaleString(),
  );

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  useEffect(() => {
    if (!inView) return;

    const controls = animate(count, to, {
      duration: 2.5,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [count, inView, to]);

  return (
    <span ref={ref} className="inline-flex">
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#020B2D] text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/seo-company-wesley-chapel/hero-bg.png"
          alt="SEO Company Wesley Chapel"
          fill
          priority
          className="object-cover object-center"
        />

        {/* <div className="absolute inset-0 bg-[#020B2D]/70" /> */}
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-[1620px] items-center px-8 py-8 md:px-8 md:py-16">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1fr_430px] xl:gap-24">
          {/* Left Content */}
          <div>
            <span className="inline-flex h-14 items-center rounded-full border border-[#FF6F00] px-6  md:text-xl  font-bold tracking-wide text-[#FF6F00] md:h-16 md:px-8">
              Bayshore Communication
            </span>

            <h1 className="mt-6 max-w-[720px] text-[38px] font-extrabold leading-[1.05] sm:text-[52px] md:text-[64px]">
              Law Firm SEO in
              <br />
              Fort Myers,
              <br />
              Florida Attract
              <br />
              More <span className="text-[#FF6F00]">Clients</span> and
              <br />
              Improve Local
              <br />
              Visibility
            </h1>

            <p className="mt-6 max-w-[700px] text-[16px] leading-[1.7] text-white/85 md:text-[18px]">
              Fort Myers attorneys compete for the same clients in the same
              search results. The firm that appears on page one gets the
              consultation request. The firm that does not appear loses that
              opportunity entirely. Bayshore Communication has delivered law
              firm SEO Fort Myers since 2016. We know this market. We know
              what it takes to rank here.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="group relative h-[52px] overflow-hidden rounded-lg bg-[#FF6F00] px-8 font-semibold text-white">
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 ease-out group-hover:translate-x-full" />
                <Link href="#contact">
                <span className="relative flex h-full items-center justify-center gap-3 text-[15px] md:text-[16px]">
                  Request Your SEO Proposal
                  <ArrowRight size={18} />
                </span>
                </Link>
              </button>

              <a
                href="tel:+15095921745"
                className="flex  h-[52px] items-center justify-center gap-3 rounded-lg border border-white/30 bg-white/5 px-8 text-[15px] font-medium text-white backdrop-blur-md transition hover:bg-white/10 md:text-[16px]"
              >
                <Phone size={18} />
                +1 (509) 592-1745
              </a>
            </div>

            {/* Features */}
            <div className="mt-12 grid grid-cols-1 gap-4 text-[15px] font-semibold sm:grid-cols-2 lg:flex lg:gap-8">
              <div className="flex items-center gap-3">
                <Trophy className="h-6 w-6 text-[#FF6F00]" />
                <span>Proven Results</span>
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-[#FF6F00]" />
                <span>White Hat SEO</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPinned className="h-6 w-6 text-[#FF6F00]" />
                <span>Local SEO Expert</span>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="
                relative
                w-full
                max-w-[430px]
                overflow-hidden
                rounded-[24px]
                border
                border-white/20
                bg-white/[0.08]
                p-8
                backdrop-blur-[24px]
                shadow-[0_20px_80px_rgba(0,0,0,0.45)]
                md:p-16
                md:px-16
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_35%)]" />

              <div className="relative z-10">
                <h2 className="text-[46px] font-extrabold leading-none text-[#FF6F00] sm:text-[54px] md:text-[60px]">
                  <Counter to={500} suffix="K+" />
                </h2>

                <p className="mt-3 text-[16px] md:text-[18px] font-medium text-white/80 ">
                  Total leads generated since 2016
                </p>
              </div>

              <div className="relative z-10 my-8 h-px bg-white/20" />

              <div className="relative z-10 grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-[40px] font-extrabold leading-none text-[#FF6F00] md:text-[48px]">
                    <Counter to={70} suffix="+" />
                  </h3>

                  <p className="mt-3 text-[16px] md:text-[18px] text-white/80 ">
                    Clients served
                  </p>
                </div>

                <div className="border-l border-white/20 pl-6">
                  <h3 className="text-[40px] font-extrabold leading-none text-[#FF6F00] md:text-[48px]">
                    <Counter to={200} suffix="%+" />
                  </h3>

                  <p className="mt-3  text-white/80 text-[16px] md:text-[18px]">
                    Revenue growth
                  </p>
                </div>
              </div>

              <div className="relative z-10 my-8 h-px bg-white/20" />

              <div className="relative z-10">
                <h3 className="text-[46px] font-extrabold leading-none text-[#FF6F00] sm:text-[54px] md:text-[60px]">
                  <Counter to={220} suffix="+" />
                </h3>

                <p className="mt-3 text-[16px] font-medium text-white/80 md:text-[18px]">
                  Websites launched since founding
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
