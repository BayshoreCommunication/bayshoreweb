import Footer from "@/components/universal/Footer";
import Navbar from "@/components/universal/Navbar";
import ModalPopup from "@/components/universal/PopUp/ModalPopUp";
import { LayoutProps } from "@/types/LayoutProps";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      {/* <ModalPopup /> */}
      <div className="mt-[72px]">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
