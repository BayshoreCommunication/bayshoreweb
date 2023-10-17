import HomeLogoLoop from "@/components/unique/Home/HomeLogoLoop";
import LogoSlide from "@/components/unique/Home/HomeLogoSlider";
import HomeServiceCard from "@/components/unique/Home/HomeServiceCard";
import Progress from "@/components/unique/Home/Progress";
import HomeTabBar from "@/components/unique/HomeTabBar";
import AboutUs from "@/components/universal/AboutUs";
import Boost from "@/components/universal/Boost";
import Footer from "@/components/universal/Footer";
import Footer2 from "@/components/universal/Footer2";
import HeroLeft, { HeroForm } from "@/components/universal/HeroLeft";
import Info from "@/components/universal/Info";
import Navbar from "@/components/universal/Navbar";
import Results from "@/components/universal/Results";
import SectionHeader from "@/components/universal/SectionHeader";
import SectionLayout from "@/components/universal/SectionLayout";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Bayshore Communication",
  description:
    "Welcome to Bayshore Communication!! Grow your brand or business with us. Whether you need digital marketing services, or software solutions, we've you covered.",
};

const page = () => {
  return (
    <>
      <Navbar />
      <SectionLayout bg="bg-[#F4F4F4]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-[72px] items-center">
          <div>
            <p className="text-[2rem] text-center md:text-start text-[#3E7BE2] mb-[1.5rem] lg:mb-[2.5rem]">
              {hero[0].text}
            </p>
            <HeroLeft
              heading={hero[0].heading}
              description={hero[0].description}
            />
          </div>
          <div className="px-[2rem] sm:px-[6rem] md:px-0">
            <Image
              src="/assets/demo.svg"
              alt="marketing"
              width={800}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </SectionLayout>

      {/* Logo section */}
      <SectionLayout bg="">
        <HomeLogoLoop />
      </SectionLayout>
      {/* Tailored */}
      <SectionLayout bg="">
        <SectionHeader
          heading="Tailored business solutions for your unique needs"
          text="We deliver results that exceed your expectations, marketing needs,
            goals and fits your budget. Our expertise, creativity, and passion
            will make your business shine."
        />
        <div className="mt-8">
          <HomeTabBar />
        </div>
      </SectionLayout>

      {/* Boost */}

      <Boost
        heading="Need a boost for you business? Get your FREE Quote Today!"
        btnText="Send us a proposal"
      />
      {/* Campaigns */}
      <SectionLayout bg="">
        <SectionHeader
          heading="Drive results through innovative digital marketing campaigns"
          text="Enhance your online presence and reach more customers with Bayshore Communication. We provides an extensive digital marketing services that work in synergy to create, engage, and convert leads. Plus, our exclusive tech-powered tools give you an edge over the competition."
        />
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2  mb-8 gap-8 lg:gap-[5rem] px-2 sm:px-[10vw] md:px-0 justify-between ">
            <HomeServiceCard
              imgLink="/assets/web.svg"
              title="Growth marketing"
              box={Box1}
            />
            <HomeServiceCard
              imgLink="/assets/data.svg"
              title="Software solution and development"
              box={Box2}
            />
            <HomeServiceCard
              imgLink="/assets/analytics.svg"
              title="Offshore Office"
              box={Box3}
            />
            <HomeServiceCard
              imgLink="/assets/note.svg"
              title="Content development"
              box={Box4}
            />
          </div>
        </div>
      </SectionLayout>
      {/* info */}
      <Info />
      {/* Benefits */}
      <SectionLayout bg="bg-[#F4F4F4]">
        <div className="flex flex-col items-center">
          <h2 className="heading-secondary !text-center">
            Benefits of Choosing Us
          </h2>
          <p className="text-[1.5rem] !text-center max-w-[622px] mx-auto mb-10">
            We offer creative solutions, data-driven strategies, and measurable
            results for your digital marketing needs. Choose us and grow your
            business online.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-16 items-center">
          <div className="">
            <h3 className="heading-tertiary">
              Get Advantage and Access to <br /> Our Tools and Expertise
            </h3>
            <p className="text-[1.5rem] text-[gray]">
              Unlock excellence with Bayshore Communication&apos;s core
              services. From Growth Marketing to Software Solution and
              Development, Offshore Office, and Content Development, we&apos;re
              your path to exceptional results. Don&apos;t settle for less – our
              cutting-edge tools and experienced team will help you achieve your
              digital marketing goals faster and easier. Get ahead of the
              competition by getting in touch with us today, and experience the
              difference in our comprehensive approach.
            </p>
          </div>
          <div className=" flex flex-col gap-8 lg:gap-12 md:pl-[5rem] sm:px-[15vw] md:px-0">
            <Progress
              title="Growth marketing"
              bg="bg-[#FFBF45]"
              border="border-[#FFBF45]"
              percentage="w-[90%]"
              percentageVal="90%"
              percentageValpx="left-[84%]"
            />
            <Progress
              title="Software solution and development"
              bg="bg-[#3A7EEE]"
              border="border-[#3A7EEE]"
              percentage="w-[96%]"
              percentageVal="96%"
              percentageValpx="left-[90%]"
            />
            <Progress
              title="Offshore Office"
              bg="bg-[#6C6C6C]"
              border="border-[#6C6C6C]"
              percentage="w-[92%]"
              percentageVal="92%"
              percentageValpx="left-[86%]"
            />
            <Progress
              title="Content development"
              bg="bg-[#50C878]"
              border="border-[#50C878]"
              percentage="w-[88%]"
              percentageVal="88%"
              percentageValpx="left-[82%]"
            />
          </div>
        </div>
      </SectionLayout>
      {/* Marketing */}
      <SectionLayout bg="">
        <div className="flex flex-col items-center">
          <h2 className="heading-secondary ">
            Integrated Marketing, Design and Development
          </h2>
          <p className="text-base !text-center max-w-[622px] mx-auto mb-10">
            Marketing, design, and development in one place. We create stunning
            online solutions for your brand. Contact us today and get started.
          </p>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-2 md:grid-cols-4  gap-[4rem] sm:gap-[2rem] md:gap-[4rem] lg:gap-[8rem] ">
            {links.map((el: any, i: number) => (
              <LogosM el={el} key={i} />
            ))}
          </div>
        </div>
      </SectionLayout>
      {/* about us */}
      <AboutUs />
      {/*  Result */}
      <Results heading="We Have Some Amazing Results" />
      <Footer />
    </>
  );
};

export default page;

const Box1: any = [
  "SEO",
  "Paid Advertising",
  "Social media marketing",
  "Email Marketing",
  "Marketing Automation",
  "Content Marketing",
  "Digital PR",
  "Influencer Marketing",
];

const Box2: any = [
  "Android App Development",
  "IOS App Development",
  "Website Development",
  "Ecommerce Development",
  "SaaS Development",
  "Prototype",
  "Update and Maintenance",
  "UI/UX",
];

const Box3: any = [
  "Own Development Team",
  "Own Marketing Team",
  "Graphics Design",
  "Call Center",
  "Bookkeeping and Finance Team",
  "Virtual Assistant",
  "Project Management",
  "CRM",
];

const Box4: any = [
  "Video Production",
  "Video Editing",
  "Article Writing",
  "Social Media Post Design",
  "Motion Graphics",
  "3D product visualization",
  "TVC/ Ad Creative Design",
  "Video Production Setup",
];

//  Home Hero section
let hero: {
  text: string;
  heading: string;
  description: string;
}[];

hero = [
  {
    text: "Ease Your Business Challenges With our expertise.",
    heading: "Get your own workforce for your business",
    description: `Bayshore Communication is your all-in-one partner for accelerating business growth. With a dynamic range of services spanning Growth Marketing, Software Solutions, Offshore Office Support, and Content Development, we empower business owners to thrive in the digital era. Experience a seamless journey towards excellence and discover endless possibilities – where your vision meets innovation!`,
  },
];

let links: {
  link: string;
  alt: string;
  text: string;
}[];

links = [
  {
    link: "/assets/icons-for-web/analyze-and-Measure-Results.png",
    alt: "analyze-and-Measure-Results",
    text: "Analyze and Measure Results",
  },
  {
    link: "/assets/icons-for-web/conversion-optimization.png",
    alt: "conversion-optimization",
    text: "Conversion Optimization",
  },

  {
    link: "/assets/icons-for-web/Define.png",
    alt: "Define",
    text: "Define",
  },

  {
    link: "/assets/icons-for-web/engage.png",
    alt: "engage",
    text: "Engage",
  },

  {
    link: "/assets/icons-for-web/seo-sem.png",
    alt: "seo-sem",
    text: "Seo and Sem",
  },

  {
    link: "/assets/icons-for-web/strategy.png",
    alt: "strategy",
    text: "Strategy",
  },

  {
    link: "/assets/icons-for-web/target-audience.png",
    alt: "target-audience",
    text: "Target Audience",
  },
  {
    link: "/assets/icons-for-web/ui-ux.png",
    alt: "ui-ux",
    text: "UI UX",
  },
];

const LogosM = ({ el }: any) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className=" px-[5vw] sm:px-[5rem] md:px-[5.5rem] center">
        <Image
          src={el.link}
          alt={el.alt}
          width={600}
          height={600}
          className="w-[50%] sm:w-[50%] h-auto"
        />
      </div>
      <h4 className="heading-four text-center text-cut-2">{el.text}</h4>
    </div>
  );
};
