import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function TrustedBy() {
  // Define the content as an array for easier duplication
  const services = [
    "MOBILE APP",
    "•",
    "SEO",
    "•",
    "EMAIL MARKETING",
    "•",
    "UI/UX DESIGN",
    "•",
    "PAID ADVERTISING",
    "•",
    "SOCIAL MEDIA MARKETING",
    "MOBILE APP",
    "•",
    "SEO",
    "•",
    "EMAIL MARKETING",
    "•",
    "UI/UX DESIGN",
    "•",
    "PAID ADVERTISING",
    "•",
    "SOCIAL MEDIA MARKETING",
  ];

  // Duplicate logos for the bottom marquee similarly
  const logos = [
    "/image/marquee/sabbir-nasir.png",
    "/image/marquee/apex.png",
    "/image/marquee/rob.png",
    "/image/marquee/dxg.png",
    "/image/marquee/trip-law.png",
    "/image/marquee/super.png",
    "/image/marquee/tiki.png",
    "/image/marquee/law.png",
    "/image/marquee/sabbir-nasir.png",
    "/image/marquee/apex.png",
    "/image/marquee/rob.png",
    "/image/marquee/dxg.png",
    "/image/marquee/trip-law.png",
    "/image/marquee/super.png",
    "/image/marquee/tiki.png",
    "/image/marquee/law.png",
    
    
  ];

  return (
    <div className="w-full bg-white py-32 text-center">
      {/* Title */}
      <h2 className="text-3xl md:text-[36px] font-bold mb-24">
        TRUSTED <span className="text-[#FE641A]">BY</span>
      </h2>

      {/* Top Marquee - Black Services */}
      <div className="transform -rotate-[7deg] scale-100 translate-y-1/2">
        <Marquee speed={60} gradient={false} className="w-screen">
          <div className="flex space-x-10 text-white bg-[#1b1b1b] py-16 text-[14px] md:text-base font-medium uppercase tracking-wide w-full">
            {[...services, ...services].map((item, i) => (
              <span key={i} className={item === "•" ? "text-[#FE641A]" : ""}>
                {item}
              </span>
            ))}
          </div>
        </Marquee>
      </div>

      {/* Bottom Marquee - Orange Logos */}
      <div className="transform rotate-[7deg] scale-100 mt-6 translate-y-2/5">
        <Marquee speed={50} gradient={false} direction="right" className="w-screen">
          <div className="flex items-center space-x-16 bg-orange-500  w-full">
            {[...logos, ...logos].map((src, i) => (
              <Image key={i} src={src} alt={`Logo ${i + 1}`} width={100} height={40} />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}
