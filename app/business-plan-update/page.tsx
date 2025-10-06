"use client";

import Hero from '@/components/businessPlanUpdate/Hero'
import SmartSolution from '@/components/businessPlanUpdate/SmartSolution'
import WhiteLabel from '@/components/businessPlanUpdate/WhiteLabel'
import Testimonial from '@/components/businessPlanUpdate/Testimonial'
import WhyChooseUs from '@/components/businessPlanUpdate/WhyChooseUs'
import Blueprint from '@/components/businessPlanUpdate/Blueprint'
import React from 'react'
import Calandy from '@/components/businessPlanUpdate/Calandy'
import BayshoreTeam from '@/components/businessPlanUpdate/BayshoreTeam'
import Footer from '@/components/businessPlanUpdate/Footer'
import Marque from '@/components/businessPlanUpdate/Marque';


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