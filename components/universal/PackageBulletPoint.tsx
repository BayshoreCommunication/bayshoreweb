import Image from "next/image";
import { FC } from "react";

const PackageBulletPoint = ({ point }: any) => {
  return (
    <li className="flex items-start gap-4 ">
      <span className=" flex-[10%]">
        <Image
          src="/assets/growth-plan/bulletpoint.svg"
          alt="option"
          width={100}
          height={100}
          className="w-[1.8rem] h-[1.8rem]"
        />
      </span>
      <span className="text-small flex-[90%] !text-left ">{point}</span>
    </li>
  );
};

export default PackageBulletPoint;
