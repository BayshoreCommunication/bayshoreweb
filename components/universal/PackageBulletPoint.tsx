import Image from "next/image";
import { FC } from "react";

interface IBulletProps {
  bullet: string;
}

const PackageBulletPoint: FC<IBulletProps> = ({ bullet }) => {
  return (
    <li className="flex items-center gap-4">
      <span>
        <Image
          src="/assets/growth-plan/bulletpoint.svg"
          alt="option"
          width={100}
          height={100}
          className="w-[1.8rem] h-auto"
        />
      </span>
      <span className="text-small">{bullet}</span>
    </li>
  );
};

export default PackageBulletPoint;
