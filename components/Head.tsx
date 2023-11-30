"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Head = () => {
  const pathname = usePathname();

  const url = pathname === "/" ? "" : pathname;

  return (
    <head>
      <link rel="canonical" href={process.env.NEXT_PUBLIC_APP_URL + url} />
    </head>
  );
};

export default Head;
