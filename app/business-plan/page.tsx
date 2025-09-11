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
        <Hero></Hero>
        <Marque></Marque>
        <WhiteLabel></WhiteLabel>
        <SmartSolution></SmartSolution>
        <Testimonial></Testimonial>
        <WhyChooseUs></WhyChooseUs>
        <Blueprint></Blueprint>
        <Calandy></Calandy>
        <BayshoreTeam></BayshoreTeam>
        <Footer></Footer>
        
    </div>
  )
}

export default page