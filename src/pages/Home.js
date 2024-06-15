import React from 'react'
import { Slider, Meeting, Partners, Marketing, Contact, Content, WebDev, Facts, Packages, Services, Homepage, Testimonials} from '../section'

const Home = () => {
  return (
    <div>
      <Homepage />
      <Slider />
      <Marketing />
      <Content />
      <WebDev />
      <Partners />
      <Services />
      <Testimonials />
      <Meeting />
      <Packages />
      <Contact />

    </div>
  )
}

export default Home