import Image from "next/image";
import { FC } from "react";

interface IContent {
  heading: string;
  description: string;
  imgLink: string;
}

export const FLexCol: FC<IContent> = ({ heading, description, imgLink }) => {
  return (
    <>
      <div className="flex flex-col  items-center custom-shadow p-12 gap-6">
        <div>
          <h4 className="heading-four text-center mb-4">{heading}</h4>
          <p className="text-base !text-center">{description}</p>
        </div>
        <div>
          <Image
            src={imgLink}
            alt="option"
            width={300}
            height={300}
            className="w-[6rem] md:w-[8rem] lg:w-[10rem] h-auto"
          />
        </div>
      </div>
    </>
  );
};

export default FLexCol;
