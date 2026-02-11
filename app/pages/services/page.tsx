import ServiceBanner from '@/components/serviceLayout/servicebanner/serviceBanner'
import AboutService from '@/components/serviceLayout/aboutservice/aboutService'
import React from 'react'
import ServiceChoose from '@/components/serviceLayout/servicechoose/ServiceChoose'
import CTA from '@/components/serviceLayout/servicecta/ServiceCta'
import ServiceTrending from '@/components/serviceLayout/servicetrending/ServiceTrending'

const Services = () => {
  return (
   <>
   <ServiceBanner/>
   <AboutService/>
   <ServiceChoose/>
   <CTA/>
   <ServiceTrending/>
   </>
  )
}

export default Services