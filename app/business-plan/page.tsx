"use client";

import Hero from '@/components/businessPlan/Hero'
import SmartSolution from '@/components/businessPlan/SmartSolution'
import WhiteLabel from '@/components/businessPlan/WhiteLabel'
import Testimonial from '@/components/businessPlan/Testimonial'
import WhyChooseUs from '@/components/businessPlan/WhyChooseUs'
import Blueprint from '@/components/businessPlan/Blueprint'
import React from 'react'
import Calandy from '@/components/businessPlan/Calandy'
import BayshoreTeam from '@/components/businessPlan/BayshoreTeam'
import Footer from '@/components/businessPlan/Footer'
import Marque from '@/components/businessPlan/Marque';


const page = () => {
  return (
    <div>
      <Hero />
      <Marque />
      <WhiteLabel />
      <SmartSolution />
      <Testimonial />
      <WhyChooseUs />
      <Blueprint />
      <Calandy />
      <BayshoreTeam />
      <Footer />

    </div>
  )
}

export default page