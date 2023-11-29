import { ReactNode } from "react";
import "./globals.css";
import Facebook from "@/components/universal/MessengerChatBot";
import Head from "@/components/Head";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <Head />
      <body>
        {children}
        <Facebook />
      </body>
    </html>
  );
};

export default RootLayout;
