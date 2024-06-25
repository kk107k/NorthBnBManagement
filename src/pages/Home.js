import React from 'react'
import { Slider, Estimator, Meeting, Partners, Marketing, Contact, Content, WebDev, Facts, Packages, Services, Homepage, Testimonials} from '../section'

const Home = () => {
  return (
    <div>
      <Homepage />
      <Marketing />
      <Content />
      <WebDev />
      <Partners />
      <Services />
      <Testimonials />
      <Meeting />
      <Packages />
      <Contact />
      <Estimator />
    </div>
  )
}

export default Home