import React from 'react'
import { Slider, Estimator, Meeting, Partners, WhatSection, Contact, WhySection, Brochure, Facts, Packages, Services, Homepage, Testimonials, Footer} from '../section'

const Home = () => {
  return (
    <div>
      <Homepage />
      <WhatSection />
      <WhySection />
      <Brochure />
      <Partners />
      <Services />
      <Testimonials />
      <Meeting />
      <Packages />
      <Contact />
      <Estimator />
      <Footer />
    </div>
  )
}

export default Home