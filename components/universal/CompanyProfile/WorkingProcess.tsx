import React from "react";
import SectionLayout from "../SectionLayout";
import Image from "next/image";

const WorkingProcess = () => {
  return (
    <div className="overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/company-profile/working-process.png"
        alt="Background Image"
        width={1920}
        height={1080}
      />
    </div>
  );
};

export default WorkingProcess;