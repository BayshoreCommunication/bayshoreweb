'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Count from '@/components/Count';

const HeroScrollImage = () => {
  // const [scrollY, setScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   // Cleanup event listener on component unmount
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // Calculate the scale and x position based on scroll position
  // const scale = 1 + scrollY / 1000; // Adjust the divisor to control the zoom speed
  // const x = scrollY / 3; // Adjust the divisor to control the movement speed

  return (
    <div
      // style={{
      //   overflow: 'hidden',
      //   height: '60vh',
      //   display: 'flex',
      //   alignItems: 'center',
      //   justifyContent: 'center',
      // }}
      className='my-14'
    >
      {/* <motion.div
        style={{ width: '75%', height: 'auto' }}
        animate={{ scale, x }}
        transition={{ type: 'spring', stiffness: 300 }}
      > */}
      {/* <Count num={data.value} duration={3} /> */}

      <div className='flex justify-center items-center relative'>
        <video
          width={700}
          height={600}
          className='w-full h-auto py-5'
          autoPlay
          preload='auto'
          loop
          muted
        >
          <source src='/assets/hero-video.mp4' type='video/mp4' />
        </video>

        <div className='absolute top-0 z-10 mr-[50%]'>
          <div className='bg-[#3E7BE2] p-8 rounded-full flex items-center justify-center flex-col lg:w-48 lg:h-48 w-[70px] h-[70px] animated-circle-one'>
            <p className=' !text-white lg:text-5xl text-2xl font-bold text-center'>
              <Count num={100} duration={3} />+
            </p>
            <p className=' !text-white lg:text-xl text-lg font-medium text-center '>
              Marketing
              <br /> Expert
            </p>
          </div>
        </div>

        <div className='absolute bottom-0 left-0 ml-[3%] mb-[11%]'>
          <div className='bg-[#699BEF] p-10 rounded-full flex items-center justify-center flex-col  lg:w-36 lg:h-36 w-[50px] h-[50px] animated-circle-two'>
            <p className=' !text-white lg:text-[28px] text-[16px] font-bold text-center'>
              <Count num={60} duration={3} />+
            </p>
            <p className=' !text-white lg:text-lg text-[10px] font-medium text-center md:mt-[-10px] mt-[-8px]'>
              Client
            </p>
          </div>
        </div>

        <div className='absolute right-0 mb-[13%] mr-[5%]'>
          <div className='bg-[#7DD6B6] p-2 rounded-full flex items-center justify-center flex-col md:w-52 md:h-52 w-[80px] h-[80px] animated-circle-three'>
            <p className=' !text-white lg:text-3xl text-xl font-bold text-center'>
              <Count num={5123890} duration={3} />+
            </p>
            <p className=' !text-white lg:text-xl text-sm font-medium text-center'>
              Lead
              <br /> Generated
            </p>
          </div>
        </div>
      </div>

      {/* </motion.div> */}
    </div>
  );
};

export default HeroScrollImage;
