import History from "@/components/unique/about/History";
import AboutUs from "@/components/universal/AboutUs";
import SectionHeader from "@/components/universal/SectionHeader";
import SectionLayout from "@/components/universal/SectionLayout";
import { Metadata } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";

export const metadata: Metadata = {
  title: "About-Bayshore Communication",
  description:
    "Are you looking for a communication partner who can help you create a lasting impression on digital market? Browse our website and fulfill your dream with Bayshore.",
};

const page = () => {
  return (
    <>
      <div className="relative">
        {/* <div className="absolute w-32 h-32 rounded-full top-[18%] left-[38%] bg-primary"></div> */}
        <Image
          src="/assets/about-us.png"
          alt="swop"
          width={2400}
          height={2400}
          className="w-full h-auto"
        />
      </div>
      <SectionLayout bg="">
        <h2 className="heading-secondary text-center">Our Story</h2>
        {/* <p className="text-base mb-4">
          Bayshore Communication has an outstanding communication team that acts
          as the foundation for their digital marketing, web service, and brand
          support activities. Their communication team, made up of highly
          skilled experts, is adept at developing strong connections and
          efficiently communicating messages to their clients. They thrive at
          forming strategic alliances, comprehending customer needs, and
          maintaining open lines of communication to enable seamless
          collaboration.
        </p>
        <p className="text-base">
          {" "}
          {`  This diversified team brings a variety of knowledge and experience to
the table, with competence in digital marketing, social media
management, site building, SEO specialization, graphic design, content
writing, client handling, and paralegal support. Bayshore
Communication's remarkable communication abilities, combined with an
excellent understanding of the industry, enable them to generate
impressive outcomes and provide outstanding support to their clients.`}
        </p> */}

        <p className="text-base mb-4">
          A joyful &quot;Ahoy there!&quot; as you sail into the enthralling
          world of Bayshore Communication, where dreams come true and creative
          thinking runs wild. We are a lot more than a digital marketing agency;
          we are a story of resilience, passion, and the remarkable journeys of
          three exceptional individuals. Allow us to introduce ourselves—Arjo
          Neel, the compassionate connection builder; Salman Hossain, the
          digital virtuoso; and Huraira Shishir, the guiding light of wisdom.{" "}
        </p>

        <p className="text-base mb-4">
          In a world filled with challenges and limited resources, we embarked
          on a remarkable quest to turn our dreams into reality. Arjo Neel, with
          an empathetic touch, weaves webs of trust that transcend mere business
          transactions. His genuine warmth and attentive listening forge bonds
          that stand the test of time, creating relationships that are as
          meaningful as they are impactful.{" "}
        </p>

        <p className="text-base mb-4">
          Salman Hossain, the master of digital wonders, brings to life the
          realm of innovation. With his limitless creativity and technical
          brilliance, He crafts digital symphonies that captivate hearts and
          minds. Each flick of his digital brush breathes life into campaigns
          that leave audiences spellbound, showcasing the magic that technology
          can weave.
        </p>

        <p className="text-base mb-4">
          {" "}
          Guiding our path is Huraira Shishir, a sage guardian whose wisdom
          spans decades. Her invaluable experience steers us through the complex
          maze of business, illuminating the way forward with strategic
          brilliance. Her counsel ensures that every decision we make is
          grounded in insight and foresight, paving the way for our collective
          success.{" "}
        </p>

        <p className="text-base mb-4">
          Together, we have overcome adversity and transformed Bayshore
          Communication into a sanctuary of dreams. Our unwavering commitment to
          our clients and partners has led us to create a family united by a
          shared vision. We understand that our success lies not only in
          delivering exceptional results, but also in fostering connections that
          transcend the business world.{" "}
        </p>

        <p className="text-base mb-4">
          At Bayshore Communication, we believe that inspiration and creativity
          are at the heart of every successful endeavor. Our story is not just
          about us—it is about you, our cherished clients. We cordially invite
          you to come along with us on this marvelous journey., where we combine
          our expertise with your aspirations to bring your visions to life.{" "}
        </p>

        <p className="text-base mb-4">
          Beyond the services we offer, we strive to inspire. Our genuine
          passion for what we do drives us to break new ground that surpasses
          expectations. We are dedicated to developing unique and tailored
          strategies that reflect the personality of your brand and resonate
          with the people you want to reach.
        </p>
      </SectionLayout>

      <SectionLayout bg="">
        <SectionHeader
          heading="Our Team"
          text=" By being available to our clients, we can respond to their concerns
          and questions and carry out our duty for keeping our clients
          up-to-date about the case."
        />

        <div className="mt-8">
          <div className="grid  md:w-full grid-cols-1 md:grid-cols-3 gap-16 xl:gap-[10rem] max-w-[1000px] mx-auto px-4">
            {cardContent.map((el: any, i: number) => (
              <Card el={el} key={i} />
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-[4rem] gap-8">
            {cardContentS.map((el: any, i: number) => (
              <CardSmall el={el} key={i} />
            ))}
          </div>
        </div>
      </SectionLayout>

      <AboutUs />

      <SectionLayout bg="">
        <SectionHeader
          heading="Our History"
          text="By being available to our clients, we can respond to their concerns and questions and carry out our duty for keeping our clients up-to-date about the case."
        />
        <History />
      </SectionLayout>
    </>
  );
};

export default page;

let cardContent: {
  img: string;
  name: string;
  destination: string;
}[];

cardContent = [
  {
    img: "/assets/about/salman.png",
    name: "SALMAN H SAIKOTE",
    destination: "CHIEF TECHNOLOGY OFFICER (CTO)",
  },
  {
    img: "/assets/about/huraira.png",
    name: "HURAIRA SHISHIR",
    destination: "CHIEF EXECUTIVE OFFICER (CEO)",
  },
  {
    img: "/assets/about/neel.png",
    name: "ARJO NEEL",
    destination: "DIGITAL MARKETING  STRATEGIST CONSULTENT",
  },
];

const Card = ({ el }: any) => {
  return (
    <div className=" flex flex-col items-center gap-3 custom-shadow py-8  px-4  w-[26rem] lg:w-[30rem] justify-self-center">
      <Image
        src={el.img}
        alt={el.name}
        width={400}
        height={400}
        className="w-[20rem] h-auto"
      />
      <h4 className="heading-four mt-[1rem]">{el.name}</h4>
      <p className="text-small !text-center">{el.destination}</p>
      <div className="flex items-center gap-2">
        <BsLinkedin className="text-[#5A5A5A] w-[18px] h-auto" />
        <FaTwitterSquare className="text-[#5A5A5A] w-[20px] h-auto" />
        <FaWhatsappSquare className="text-[#5A5A5A] w-[20px] h-auto" />
        <MdMarkEmailUnread className="text-[#5A5A5A] w-[24px] h-auto" />
      </div>
    </div>
  );
};

let cardContentS: {
  img: string;
  name: string;
  destination: string;
}[];

cardContentS = [
  {
    img: "/assets/about/romiz.png",
    name: "ASHRAF UJJAMAN",
    destination: "CHIEF OPERATING OFFICER (COO)",
  },
  {
    img: "/assets/about/sadit.png",
    name: "SADIT AHSAN",
    destination: "SENIOR GRAPHICS DESIGNER",
  },
  {
    img: "/assets/about/razon.png",
    name: "REZAUL KARIM",
    destination: "DIGITAL ADS EXPERT",
  },
  {
    img: "/assets/about/rakib.png",
    name: "RAKIBUL ISLAM",
    destination: "SENIOR DEVELOPER",
  },
  {
    img: "/assets/about/orpita.png",
    name: "ORPITA HAQUE",
    destination: "SENIOR DEVELOPER",
  },
  {
    img: "/assets/about/abdullah.png",
    name: "ABDULLAH ISHA",
    destination: "WEB DEVELOPER",
  },
  {
    img: "/assets/about/towhidul.png",
    name: "TOWHIDUL ISLAM",
    destination: "APP DEVELOPER",
  },
  {
    img: "/assets/about/fardin.png",
    name: "FARDIN KHAN",
    destination: "APP DEVELOPER",
  },
  {
    img: "/assets/about/abrar.png",
    name: "ABRAR FAHIM",
    destination: "APP DEVELOPER",
  },
  {
    img: "/assets/about/milon.png",
    name: "Nuruzaman Milon",
    destination: "FRONTEND DEVELOPER",
  },
  {
    img: "/assets/about/amena.png",
    name: "Amena Islam Rimi",
    destination: "CHIEF OPERATING OFFICER (COO)",
  },
  {
    img: "/assets/about/monira.png",
    name: "MONIRA ISLAM",
    destination: "JUNIOR DIGITAL MARKETER",
  },
  {
    img: "/assets/about/raju.png",
    name: "RAJU AHMED",
    destination: "DIGITAL ADS EXPERT",
  },
  {
    img: "/assets/about/nazmul.png",
    name: "NAZMUL HOSSAIN",
    destination: "SENIOR DEVELOPER",
  },
  {
    img: "/assets/about/elishah.png",
    name: "Elishah Hillaria",
    destination: "SENIOR DEVELOPER",
  },
];

const CardSmall = ({ el }: any) => {
  return (
    <div className="  flex flex-col items-center gap-3 custom-shadow py-4 px-4">
      <Image
        src={el.img}
        alt={el.name}
        width={400}
        height={400}
        className="w-[120px] h-auto"
      />
      <h5 className="heading-five mt-[5px]">{el.name}</h5>
      <p className="text-xsmall !text-center">{el.destination}</p>
      <div className="flex items-center gap-2">
        <BsLinkedin className="text-[#5A5A5A] w-[1.8rem] h-auto" />
        <FaTwitterSquare className="text-[#5A5A5A] w-[2rem] h-auto" />
        <FaWhatsappSquare className="text-[#5A5A5A] w-[2rem] h-auto" />
        <MdMarkEmailUnread className="text-[#5A5A5A] w-[2.4rem] h-auto" />
      </div>
    </div>
  );
};
