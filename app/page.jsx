import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import WhatWeDoSection from "../components/WhatWeDoSection"
import ResultsSection from "../components/ResultsSection"
import Testimonials from "../components/Testimonials"
import ClientLogos from "../components/ClientLogos"

export default function Home() {
  
  return (
    <>
      <main className="syne">
        <HeroSection />
        <WhatWeDoSection />
        <ResultsSection />
        <Testimonials />
        <ClientLogos />
      </main>
    </>
  )
}
