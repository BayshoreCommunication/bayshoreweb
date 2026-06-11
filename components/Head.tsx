"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Script from "next/script";

const PRODUCTION_URL = "https://www.bayshorecommunication.com";

const getCanonicalBaseUrl = () => {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL;

  if (!appUrl) return PRODUCTION_URL;

  try {
    const parsedUrl = new URL(appUrl);
    const isLocalUrl =
      parsedUrl.hostname === "localhost" || parsedUrl.hostname === "127.0.0.1";

    return isLocalUrl ? PRODUCTION_URL : parsedUrl.origin;
  } catch {
    return PRODUCTION_URL;
  }
};

const Head = () => {
  const pathname = usePathname();

  const url = pathname === "/" ? "" : pathname;
  const canonicalBaseUrl = getCanonicalBaseUrl();

  return (
    <>
      <Script id="txtesdfasdf" strategy="lazyOnload">
        {`
           (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
           new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
           j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
           'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
           })(window,document,'script','dataLayer','GTM-NN7P643');
        `}
      </Script>
      <link rel="canonical" href={`${canonicalBaseUrl}${url}`} />
      <meta
        name="google-site-verification"
        content="4D7c8Md6e4LutBgarRA2BWlVkh_7gW1XdRGya8bW1-g"
      />
    </>
  );
};

export default Head;
