import Footer from "@/components/universal/Footer";
import Navbar from "@/components/universal/Navbar";
import React from "react";

export const metadata = {
  title:
    "Bayshore Communication is your all-in-one partner for accelerating business growth",
  description:
    "Welcome to Bayshore Communication!! Grow your brand or business with us. Whether you need digital marketing services, or software solutions, we've you covered.",
  metadataBase: new URL("https://www.bayshorecommunication.com"),
  alternates: {
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    images: "/opengraph-image.jpg",
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="mt-[8rem] md:mt-[8.5rem] lg:mt-[9.5rem]">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
