import ContactUsBanner from '@/components/contactuslayout/contactusbanner/contactUsBanner'
import ContactUsContact from '@/components/contactuslayout/contactuscontact/contactUsContact'
import ContactUsForm from '@/components/contactuslayout/contactusform/contactUsForm'
import ContactUsImageCard from '@/components/contactuslayout/contactusimgcard/contactUsImgCard'
import ContactUsMap from '@/components/contactuslayout/contactusmap/contactUsMap'
import React from 'react'

export default function contactUsPage() {
  return (
    <div>
      <ContactUsBanner/>
      <ContactUsContact/>
      <ContactUsForm/>
      <ContactUsMap/>
      <ContactUsImageCard/>
    </div>
  )
}
