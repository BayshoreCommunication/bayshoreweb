"use client";
import Image from "next/image";
import { ReactNode, useState } from "react";

interface Tab {
  label: ReactNode;
  content: ReactNode;
  link: string;
  activeLink: string;
}

const tabs: Tab[] = [
  {
    label: (
      <>
        Growth <br /> Marketing
      </>
    ),
    content: (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          <div className="rounded-[10px] custom-shadow px-4 py-16 md:p-16">
            <h3 className="heading-tertiary">Growth Marketing</h3>
            <p className="text-base">
              As business competition increases year after year, a strong online
              presence along with growth marketing and strategic planning
              becomes essential to outpace competitors. Our Growth Marketing
              services can turbocharge your brand visibility, engagement, and
              growth. We're a team of experts in SEO, Paid Ads, Social Media,
              Email Marketing, Content that actually makes sense, Digital PR
              (yep, we know people), smart Automation, and even the cool world
              of Influencers. All these fancy terms aside, what we really do is
              make YOUR Business bigger and better in today's digital age.In
              short, we're here to get your brand where you want it to be. No
              fluff, just results.
            </p>
          </div>
          <div className="row-start-1 md:col-start-2">
            <Image
              src="/assets/service/growth-marketing.jpg"
              alt="tab-1"
              width={400}
              height={400}
              className="w-full h-full"
            />
          </div>
        </div>
      </>
    ),
    link: "/assets/expertise.svg",
    activeLink: "/assets/expertise-active.svg",
  },
  {
    label: (
      <>
        Software Solution <br />
        and Development
      </>
    ),
    content: (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          <div className="rounded-[10px] custom-shadow px-4 py-16 md:p-16">
            <h3 className="heading-tertiary">
              Software Solution and Development
            </h3>
            <p className="text-base">
              Meet your tech team at Bayshore Communication. When it comes to
              Web or Software Solutions and Development, we're all about turning
              your ideas into reality. Whether you want to make Android and IOS
              Apps, build eye-catching websites, create seamless ecommerce
              experiences, or even develop cutting-edge SaaS solutions, we have
              the skills and experience to do it. We ensure your project stays
              current, provide visually stunning designs, and conduct thorough
              testing to guarantee flawless performance. We don't just develop,
              we excel in innovation. Join us on your innovation journey with
              Bayshore.
            </p>
          </div>
          <div className="row-start-1 md:col-start-2">
            <Image
              src="/assets/service/design-development.jpg"
              alt="tab-1"
              width={400}
              height={400}
              className="w-full h-full"
            />
          </div>
        </div>
      </>
    ),
    link: "/assets/result.svg",
    activeLink: "/assets/result-active.svg",
  },
  {
    label: (
      <>
        Offshore <br /> Office
      </>
    ),
    content: (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          <div className="rounded-[10px] custom-shadow px-4 py-16 md:p-16">
            <h3 className="heading-tertiary">Offshore Office</h3>
            <p className="text-base">
              Bayshore’s Offshore Office supports are all about helping you to
              expand your business with your own efficient expert team, all
              staying cost-effective. We offer dedicated teams for various tasks
              like development, marketing, bookkeeping, finance, design,
              customer service, virtual assistance, project management, and CRM
              support. Our goal? Boost your efficiency and save you money. With
              our help, you can expand your operations without the usual high
              costs, keeping you ahead of the competition. Say hello to a more
              streamlined, cost effective way of working with Bayshore
              Communication.
            </p>
          </div>
          <div className="row-start-1 md:col-start-2">
            <Image
              src="/assets/service/offshore-office.jpg"
              alt="tab-1"
              width={400}
              height={400}
              className="w-full h-full"
            />
          </div>
        </div>
      </>
    ),
    link: "/assets/tools.svg",
    activeLink: "/assets/tools-active.svg",
  },
  {
    label: (
      <>
        Content <br />
        Development
      </>
    ),
    content: (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          <div className="rounded-[10px] custom-shadow px-4 py-16 md:p-16">
            <h3 className="heading-tertiary">Content Development</h3>
            <p className="text-base">
              Enhancing brand visibility relies on audience engagement, and the
              key to achieving that is creative content. For that, Bayshore
              Communication is your ultimate creative content powerhouse. We
              offer diverse content development services, such as writing
              engaging articles, designing eye-catching social media posts, and
              making attention-grabbing videos. We bring your products to life
              with outstanding 3D visualization and captivating TVC/Ad creative
              ideas. Also, we are your behind-the-scenes experts, helping you
              set the stage for memorable video productions. We turn your vision
              into irresistible content that leaves lasting impressions.
            </p>
          </div>
          <div className="row-start-1 md:col-start-2">
            <Image
              src="/assets/service/content-development.jpg"
              alt="tab-1"
              width={400}
              height={400}
              className="w-full h-full"
            />
          </div>
        </div>
      </>
    ),
    link: "/assets/time.svg",
    activeLink: "/assets/time-active.svg",
  },
];

export default function HomeTabBar() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="md:px-[2rem] ">
      <div className="flex justify-between items-center rounded-[10px] custom-shadow px-[1rem] sm:px-[4rem] md:px-[11rem] py-[1.6rem] gap-2 align-top">
        {tabs.map((tab, index) => (
          <button
            className={`flex flex-col items-center  py-4 px-2 md:px-8 rounded-[10px] cursor-pointer ${
              activeTab === index ? "custom-shadow" : ""
            }`}
            key={index}
            onClick={() => setActiveTab(index)}
          >
            <Image
              src={activeTab === index ? tab.activeLink : tab.link}
              alt="svg-logo"
              width={100}
              height={100}
              className="md:h-[26px] md:w-[26px] h-[14px] w-[14px]"
            />
            <p
              className={`py-2 text-[1.2rem] text-[#A2A2A2]  font-bold  ${
                activeTab === index ? "bg-gray-200" : ""
              }`}
            >
              {tab.label}
            </p>
          </button>
        ))}
      </div>

      <div className="p-4">
        {tabs.map(
          (tab, index) =>
            activeTab === index && (
              <div className="mt-[4rem]" key={index}>
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  );
}
