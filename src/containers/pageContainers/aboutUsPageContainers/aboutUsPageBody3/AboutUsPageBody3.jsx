import React from 'react'
import './aboutUsPageBody3.css'
import aboutUsBodyPic from '../../../../assets/about us page body 1 pic2.png'

const AboutUsPageBody3 = () => {
  return (
    <div className='about-us-page-body-3__container'>
      <div className='about-us-page-body-2__container_pic'>
        <img src={aboutUsBodyPic} alt="" />
        </div>
        <div className='about-us-page-body-2__container_content'>
          <div className='about-us-page-body-2__container_line' />
          <div className='about-us-page-body-2__container_content-title'>
            <h1>Our Unique Approach to Solutions</h1>
            <p>Our collective Teamwork pooling specialists from across multiple disciplines ensures you always have a Global view, even if initially you may think you don’t require that. We bring the innovation, that “out of the box” thinking which only a broad based team can deliver.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutUsPageBody3