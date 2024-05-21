
"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroScrollImage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate the scale and x position based on scroll position
  const scale = 1 + scrollY / 1000; // Adjust the divisor to control the zoom speed
  const x = scrollY / 4; // Adjust the divisor to control the movement speed

  return (
    <motion.div
      style={{
        overflow: 'hidden',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <motion.img
        src="/assets/demo.svg" // Replace with your image URL
        alt="Zoomable"
        style={{ width: '70%', height: 'auto' }}
        animate={{ scale, x }}
        transition={{ type: 'spring', stiffness: 300 }}
      />
    </motion.div>
  );
};




export default HeroScrollImage;
