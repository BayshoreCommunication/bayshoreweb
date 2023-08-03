import React from "react";
import Package from "./Package";

let bulletData: {
  title: string;
  icon: string;
  price: string;
  points: string[];
}[];

bulletData = [
  {
    title: "SILVER PLAN",
    icon: "/assets/growth-plan/growth-plan-silver.svg",
    price: "2500",
    points: [
      "150 keyphrases optimized",
      "30 pages optimized",
      "6 content, outreach, UX, or CRO assets per quarter",
      "8 custom dashboards",
      "Phone call, lead, and revenue tracking dashboard",
    ],
  },
  {
    title: "GOLD PLAN",
    icon: "/assets/growth-plan/growth-plan-gold.svg",
    price: "5000",
    points: [
      "200 keyphrases optimized",
      "40 pages optimized",
      "12 content, outreach, UX, or CRO assets per quarter",
      "8 custom dashboards",
      "Phone call, lead, and revenue tracking dashboard",
    ],
  },
  {
    title: "DIAMOND PLAN",
    icon: "/assets/growth-plan/growth-plan-diamond.svg",
    price: "8000",
    points: [
      "300 keyphrases optimized",
      "60 pages optimized",
      "24 content, outreach, UX, or CRO assets per quarter",
      "10 custom dashboards",
      "Phone call, lead, and revenue tracking dashboard",
    ],
  },
];

const SectionPackage = () => {
  return (
    <div className="mt-20 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[4rem] items-center">
        {bulletData.map((el: any, i: number) => (
          <Package data={el} key={i} />
        ))}
      </div>
    </div>
  );
};

export default SectionPackage;
