import Image from "next/image";
import PackageBulletPoint from "./PackageBulletPoint";

const PackageService = ({ data , title} : any) => {
  return (
    <div className="w-[50rem] sm:w-[35rem] md:w-full justify-self-center mt-[4rem] md:mt-0 h-full flex flex-col justify-between">
      <div>
        <div className=" relative flex flex-col items-center gap-8 bg-[#F0F6FE] py-[6rem]   ">
          <div className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%]">
            {/* <Image
              src={data.icon}
              alt="option"
              width={200}
              height={200}
              className="w-[9rem] h-auto"
            /> */}
          </div>
          <h4 className="heading-tertiary">{title}</h4>
          {/* <p>
            <span className="!text-primary !font-bold heading-secondary">
              ${data.price}
            </span>
            /month
          </p> */}
        </div>
        <div className="mb-8 px-8 py-12 flex justify-center">
          <ul className="flex flex-col gap-4">
            {data.map((el: any, i: number) => (
              <PackageBulletPoint point={el} key={i} />
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center border-t-[1px] border-[rgba(221,221,221,0.5)] pt-3">
        <div className="center">
          <button className="btn text-small">Customize My Plan</button>
        </div>
      </div>
    </div>
  );
};

export default PackageService;
