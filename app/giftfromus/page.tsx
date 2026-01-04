import React from 'react'
import Header from '../../components/giftFromUs/Header'
import HeroSection from '@/components/giftFromUs/HeroSection' 
import TopMarquee from '@/components/giftFromUs/TopMarquee'
import WhatYouWillReceive from '@/components/giftFromUs/WhatYouWillReceive'
import WhyDoingThis from '@/components/giftFromUs/WhyDoingThis'

const page = () => {
  return (
    <div>
        <Header />
        <HeroSection />
        <TopMarquee />
        <WhatYouWillReceive />
        <WhyDoingThis />
    </div>
  )
}

export default page