"use client";
import React, { useState } from "react";
import MarketingPerspectivesFormPreview from "./MarketingPerspectivesFormPreview";
import MarketingPerspectivesFormCustomized from "./MarketingPerspectivesFormCustomized";

const MarketingPerspectivesFrom = () => {
  const [
    marketingPerspectivesFormDataDetails,
    setMarketingPerspectivesFormDataDetails,
  ] = useState({});

  const [marketingPerspectivesFormShow, setMarketingPerspectivesFormShow] =
    useState(false);

  return (
    <div>
      {marketingPerspectivesFormShow ? (
        <div>
          <MarketingPerspectivesFormPreview
            marketingPerspectivesFormDataDetails={
              marketingPerspectivesFormDataDetails
            }
          />
        </div>
      ) : (
        <div>
          <MarketingPerspectivesFormCustomized
            setMarketingPerspectivesFormDataDetails={
              setMarketingPerspectivesFormDataDetails
            }
          />
          <div className="flex justify-center mt-10 mb-20">
            <button
              onClick={() =>
                setMarketingPerspectivesFormShow(!marketingPerspectivesFormShow)
              }
              className="!py-4 md:!py-4 flex items-center gap-2 sm:gap-4 md:gap-8 px-[3rem] justify-center md:justify-start border-2 bg-primary border-primary rounded-full hover:rounded-full text-white hover:bg-transparent hover:text-primary a-button"
            >
              Preview
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MarketingPerspectivesFrom;
