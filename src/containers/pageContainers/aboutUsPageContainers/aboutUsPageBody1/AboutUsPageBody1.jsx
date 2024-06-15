import React from 'react'
import './aboutUsPageBody1.css'
import vision from '../../../../assets/about us page vision.png'
import mission from '../../../../assets/about us page mission.png'


const AboutUsPageBody1 = () => {
  return (
    <div className='about-us-page-body-one__container'>
      <div className='about-us-page-body-one__container_vision'>
        <img src={vision} alt="" />
        <h1>Our Vision</h1>
        <p>To provide truly the best, independent advise to all our customers across the region in an impartial, open and honest way. We are here to serve our customers, both present and future in building a sustainably optimistic future for all. Adhering to core values of integrity and transparency we put the needs of our customers first.</p>
      </div>
      <div className='about-us-page-body-one__container-line' />
      <div className='about-us-page-body-one__container_mission'>
        <img src={mission} alt="" />
        <h1>Our Mission</h1>
        <p>Our Mission is to be THE GO-TO truly independent Boutique Corporate Finance house in the Gulf and to set the standard for others to aim for.</p>
      </div>
    </div>
  )
}

export default AboutUsPageBody1