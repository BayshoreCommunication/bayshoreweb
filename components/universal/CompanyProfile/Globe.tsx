import SectionLayout from "../SectionLayout";
import Image from "next/image";

const GlobeClients = () => {
  return (
    <SectionLayout bg="pt-16">
      <div>
        <h2 className="text-white text-center text-[28px] md:text-40px lg:text-[50px] px-14 font-medium uppercase mb-8">
          Worked with{" "}
          <span className="text-[#FF7422] text-3xl md:text-5xl lg:text-8xl">
            Partners
          </span>{" "}
          Across The Globe
        </h2>
        <Image
          src="/assets/company-profile/globe-clients-map.png"
          alt="globe map"
          width={1920}
          height={850}
        ></Image>
      </div>
    </SectionLayout>
  );
};

export default GlobeClients;
