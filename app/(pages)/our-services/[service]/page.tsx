import { services } from "@/components/unique/services/Service";
import SectionLayout from "@/components/universal/SectionLayout";
import Parser from "html-react-parser";
import Image from "next/image";
import AboutUs from "@/components/universal/AboutUs";
import Consultaion from "@/components/universal/Consultaion";
import Hero from "@/components/universal/Hero";
import Info from "@/components/universal/Info";
import ServiceTabBar from "@/components/unique/ServiceTabBar";
import { BoostService } from "@/components/universal/Boost";
import SectionPackage from "@/components/universal/SectionPackage";
import ServicePrice from "@/components/unique/services/ServicePrice";
import { useParams } from "next/navigation";

//  Home Hero section
let hero: {
  heading: string;
  description: string;
}[];

hero = [
  {
    heading: "Empower Your Business with Innovative Marketing Solutions",
    description: `Bayshore Communication is a digital marketing company that offers web and app 
    development, SEO and online advertising, social media and email marketing, 
    content creation and distribution, UI/UX, graphics, video production, and 
    influencer marketing services. We provide innovative and practical solutions to 
    help you expand your company globally and accomplish your goals.`,
  },
];

const Page = ({ params }: { params: { service: string } }) => {
  const parameter = params.service;
  const individualService = services.filter((elem) => elem.url === parameter);
  const individualHomeTabBar = individualService.map((el) => el.homeTabBar)[0];
  // const params=useParams()
  // console.log("parameter ", parameter);

  return (
    <>
      <Hero
        heading={individualService.map((elem, index) => elem.topHeroLeftTitle)}
        description={individualService.map(
          (elem, index) => elem.topHeroLeftDescription
        )}
      />
      <div>
        <Info />
      </div>
      <div>
        {individualService.map((elem, index) => (
          <div key={index}>
            <SectionLayout bg="">
              <div className="h-[100%] service-style">
                <div className="py-8">
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
                      <div className="rounded-[10px] px-4 pb-16 ">
                        <h2>{elem.title}</h2>
                        {elem.shortDescription}
                      </div>
                      <div className="row-start-1 md:col-start-2">
                        <Image
                          src={elem.heroImg}
                          alt="tab-1"
                          width={400}
                          height={400}
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                  </>
                </div>
                <ServiceTabBar individualHomeTabBar={individualHomeTabBar} />
                {Parser(elem.description1)}
                <ServicePrice url={parameter}/>
                {/* <h1>check</h1> */}
                {Parser(elem.description2)}
                <div className="my-16">
                  <BoostService
                    heading=" Need a boost for you business? Get your FREE Quote Today!"
                    btnText="Send us a proposal"
                  />
                </div>

                {Parser(elem.description3)}
              </div>
            </SectionLayout>
            <Info />
            <SectionLayout bg="">
              <div className="h-[100%] service-style">
                <div className="py-8">
                  {Parser(elem.description4)}
                  <Consultaion />
                  {Parser(elem.description5)}
                  {Parser(elem.description6)}
                  {Parser(elem.description7)}
                  {Parser(elem.description8)}
                  {Parser(elem.description9)}
                  {Parser(elem.description10)}
                  {Parser(elem.description11)}
                  {Parser(elem.description12)}
                  {Parser(elem.description13)}
                  {Parser(elem.description14)}
                  {Parser(elem.description15)}
                </div>
              </div>
            </SectionLayout>
            <AboutUs />
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;

export async function generateMetadata({
  params,
}: {
  params: { service: string };
}) {
  const parameter = params.service;
  const individualService = services.filter((elem) => elem.url === parameter);
  return {
    title: `${individualService.map((elem, index) => elem.topHeroLeftTitle)}`,
    description: `${
      individualService.map((elem, index) => elem.metaDescription)[0]
    }`,
  };
}
