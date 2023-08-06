import Image from "next/image";
import PackageBulletPoint from "./PackageBulletPoint";

const Package = ({ data }: any) => {
  return (
    <div className="w-[30rem] sm:w-[35rem] md:w-full justify-self-center mt-[4rem] md:mt-0">
      <div className="relative flex flex-col items-center gap-4 bg-[#F0F6FE] py-[6rem]">
        <div className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <Image
            src={data.icon}
            alt="option"
            width={200}
            height={200}
            className="w-[9rem] h-auto"
          />
        </div>
        <h4 className="heading-four">{data.title}</h4>
        <p>
          <span className="!text-primary !font-bold heading-secondary">
            ${data.price}
          </span>
          /month
        </p>
      </div>
      <div className="mb-8 px-8 py-12 border-b-[1px] border-[rgba(221,221,221,0.5)] flex justify-center">
        <ul className="flex flex-col gap-4">
          {data.points.map((el: any, i: number) => (
            <PackageBulletPoint point={el} key={i} />
          ))}
        </ul>
      </div>
      <div className="center">
        <button className="btn text-small">Customize My Plan</button>
      </div>
    </div>
  );
};

export default Package;
