// "use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Facebook from "@/components/universal/MessengerChatBot";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <Head>
        <meta
          name="description"
          content="Are you looking for a communication partner who can help you create a lasting impression on digital market? Browse our website and fulfill your dream with Bayshore. "
        />
      </Head> */}
      <body>
        {children}
        <Facebook />
      </body>
    </html>
  );
}
