"use client";
import React, { useEffect, useState } from "react";
import Typist from "react-typist";

interface ScrollAnimatedTextProps {
  textContent: string;
}

const AnimateText: React.FC<ScrollAnimatedTextProps> = ({ textContent }) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled and has not scrolled before
      if (window.scrollY > 0 && !hasScrolled) {
        // Set hasScrolled to true to prevent further animations
        setHasScrolled(true);
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  return (
    <div>
      {hasScrolled && (
        <Typist>
          {/* Your text or HTML content goes here */}
          <div>{textContent}</div>
        </Typist>
      )}
    </div>
  );
};

export default AnimateText;
