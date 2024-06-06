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
        <div className='absolute top-0 z-10 mr-[420px]'>
          <div className='bg-blue-700 p-12 rounded-full flex items-center justify-center flex-col'>
            <p className=' !text-white text-5xl font-bold text-center'>
              <Count num={100} duration={3} />+
            </p>
            <p className=' !text-white text-xl font-medium text-center mt-2'>
              Marketing
              <br /> Expert
            </p>
          </div>
        </div>

        <div className='absolute bottom-0 left-0 ml-12 mb-32'>
          <div className='bg-blue-400 p-10 rounded-full flex items-center justify-center flex-col'>
            <p className=' !text-white text-5xl font-bold text-center'>
              <Count num={60} duration={3} />+
            </p>
            <p className=' !text-white text-lg font-medium text-center mt-2'>
              Client
            </p>
          </div>
        </div>

        <div className='absolute right-0 mb-40 mr-20'>
          <div className='bg-[#7DD6B6] p-2 rounded-full flex items-center justify-center flex-col w-60 h-60'>
            <p className=' !text-white text-4xl font-bold text-center'>
              <Count num={5123890} duration={3} />+
            </p>
            <p className=' !text-white text-base font-medium !text-center mt-2'>
              Marketing
              <br /> Expert
            </p>
          </div>
        </div>
      </div>

      {/* </motion.div> */}
    </div>
  );
};

export default HeroScrollImage;
