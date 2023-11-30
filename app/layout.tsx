import { ReactNode } from "react";
import "./globals.css";
import Facebook from "@/components/universal/MessengerChatBot";
import Head from "@/components/Head";
import Script from "next/script";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <Head />
      <body>
        <Script id="txtesdfasdf" strategy="lazyOnload">
          {`
           <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NN7P643"
           height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        `}
        </Script>
        {children}
        <Facebook />
      </body>
    </html>
  );
};

export default RootLayout;
