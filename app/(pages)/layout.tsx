import Footer from "@/components/universal/Footer";
import Navbar from "@/components/universal/Navbar";
import ModalPopup from "@/components/universal/PopUp/ModalPopUp";
import { LayoutProps } from "@/types/LayoutProps";

const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      {/* <ModalPopup /> */}
      <div className="mt-[8rem] md:mt-[8.5rem] lg:mt-[9.5rem]">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
