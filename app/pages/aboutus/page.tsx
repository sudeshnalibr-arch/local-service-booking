import AboutApproach from "@/components/aboutuslayout/aboutapproach/aboutApproach"
import AboutBanner from "@/components/aboutuslayout/aboutbanner/aboutBanner"
import AboutChoose from "@/components/aboutuslayout/aboutchoose/aboutChoose"
import AboutElectric from "@/components/aboutuslayout/aboutelectric/aboutElectric"
import AboutEstimate from "@/components/aboutuslayout/aboutestimate/aboutEstimate"


const aboutUsPage = () => {
  return (
    <>
    <AboutBanner/>
    <AboutApproach/>
    <AboutElectric/>
    <AboutEstimate/>
    <AboutChoose/>
    </>
  )
}

export default aboutUsPage