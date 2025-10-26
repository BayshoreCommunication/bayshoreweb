"use client";

import Hero from '@/components/partnerUp/Hero'
import SmartSolution from '@/components/partnerUp/SmartSolution'
import WhiteLabel from '@/components/partnerUp/WhiteLabel'
import Testimonial from '@/components/partnerUp/Testimonial'
import WhyChooseUs from '@/components/partnerUp/WhyChooseUs'
import Blueprint from '@/components/partnerUp/Blueprint'
import React from 'react'
import Calandy from '@/components/partnerUp/Calandy'
import BayshoreTeam from '@/components/partnerUp/BayshoreTeam'
import Footer from '@/components/partnerUp/Footer'
import Marque from '@/components/partnerUp/Marque';


const page = () => {
  return (
    <div>
      <Hero />
      <Marque />
      <WhiteLabel />
      <SmartSolution />
      <Testimonial />
      {/* <WhyChooseUs /> */}
      <Blueprint />
      <Calandy />
      <BayshoreTeam />
      <Footer />
    </div>
  )
}

export default page