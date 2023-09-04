"use client";
import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
// starts

interface progress {
  title: string;
  bg: string;
  border: string;
  percentage: string;
  percentageVal: string;
  percentageValpx: string;
}
const Progress = ({
  title,
  bg,
  border,
  percentage,
  percentageVal,
  percentageValpx,
}: progress) => {
  const [hasPlayed, setHasPlayed] = useState(false);

  const handleVisibilityChange = (isVisible: any) => {
    if (isVisible && !hasPlayed) {
      setHasPlayed(true);
    }
  };
  return (
    <VisibilitySensor onChange={handleVisibilityChange} delayedCall>
      <div>
        {" "}
        <h5 className="text-headingPrimary mb-3">{title}</h5>
        <div
          className={`h-[2.5rem] rounded-[10px] w-full border-2 ${border} relative`}
        >
          <div
            className={`absolute ${
              hasPlayed ? percentage : "w-0"
            } rounded-[4px] h-full ${bg} top-0 left-0 transition-all duration-1000`}
          ></div>
          <p
            className={`absolute ${percentageValpx} z-10 top-[50%] translate-y-[-50%] font-semibold !text-[#f4f4f4] text-[1.5rem]`}
          >
            {percentageVal}
          </p>
          {/* <div
            className={`border-2 rounded-full ${border} h-[72px] w-[72px] absolute top-0 right-0 translate-y-[-40%]`}
          ></div> */}
        </div>
      </div>
    </VisibilitySensor>
  );
};

export default Progress;
