import Footer from "@/components/businessIdea/Footer";
import Header from "@/components/marketing-for-law-firm/Header";
import LeftSide from "@/components/marketing-for-law-firm/LeftSide";
import RightSideBar from "@/components/marketing-for-law-firm/shared/RightSideBar";
import React from "react";
import BayshoreTeam from "@/components/businessIdea/BayshoreTeam";

const page = () => {
  return (
    <div>
      <Header />
      <div className="max-w-[1460px] mx-auto px-8 flex flex-col lg:flex-row gap-32">
        {/* LEFT CONTENT */}
        <LeftSide />

        {/* RIGHT SIDEBAR */}
        <RightSideBar />
      </div>
      <BayshoreTeam />
      <Footer />
    </div>
  );
};

export default page;
