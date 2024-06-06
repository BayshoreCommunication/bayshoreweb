
"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
  const x = scrollY / 3; // Adjust the divisor to control the movement speed

  return (
    <motion.div
      style={{
        overflow: 'hidden',
        height: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
     <motion.div style={{ width: '75%', height: 'auto' }}
      animate={{ scale, x }}
      transition={{ type: 'spring', stiffness: 300 }}>

      <div>
        <Image
          src="/assets/HeroGifImage/Black-Website-GIF.gif"
          alt="Zoomable"
          className='rounded-xl w-[200px] h-[auto]'
          width={300}
          height={100}         
        />
      </div>

      <div>
        <Image
          src="/assets/HeroGifImage/Graph-GIF.gif"
          alt="Zoomable"
          className='rounded-xl'
          width={300}
          height={100}        
        />
      </div>

      <div>
        <Image
          src="/assets/HeroGifImage/Lines-GIF-with-icons.gif"
          alt="Zoomable"
          className='rounded-xl'
          width={300}
          height={100}         
        />
      </div>

     </motion.div>
    </motion.div>
  );
};




export default HeroScrollImage;
