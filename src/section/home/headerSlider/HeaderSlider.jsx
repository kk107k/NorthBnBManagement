import React from 'react';
// Import Swiper React components
// Import Swiper styles
import { apartment, cleaner, consultation, management } from '../../../assets';

import '../../../motion.css';
import './headerSlider.css';
import { Link } from 'react-router-dom';

// import required modules

export default function HeaderSlider() {
  return (
    <swiper-container pagination="true" pagination-clickable="true" navigation="true" space-between="0"
    loop="true" autoplay-delay="5000" autoplay-disable-on-interaction="false">
    <swiper-slide><img src={apartment} alt="" />
    <div className='slider-image__container-right-row'>
      <div className='slider-image__container-right-left'>
        <img src={cleaner} alt=''/>
      </div>
    <div className="slider-image__container-right">
    <div>
        <h1>Property Cleaning and Maintenance</h1>
      </div>
      <div>
        <p>We Maintain, Clean & Prepare your Property for every rent</p>
      </div>
      <div className='slider-image_button'>
        <Link to={'/fill'}>Services</Link>
      </div>
      </div>
      </div></swiper-slide>
    <swiper-slide><img src={management} alt="" />
    <div className="slider-image__container">
    <div>
        <h1>Professional Owners Portal</h1>
      </div>
      <div>
        <p>We provide you with a Easy-To-Use dashboard to check your analytics with your finger-tips</p>
      </div>
      <div className='slider-image_button'>
        <Link to={'/fill1'}>Dashboard</Link>
      </div>
      </div></swiper-slide>
    <swiper-slide><img src={consultation} alt="" />
    <div className="slider-image__container-right-w">
      <div>
        <h1>Consultation</h1>
      </div>
      <div>
        <p>We Provide Free Consultation On Short-term Rentals at your convenience</p>
      </div>
      <div className='slider-image_button'>
        <Link to={'/fill'}>Contact Us</Link>
      </div>
      </div></swiper-slide>
  </swiper-container>

  );
}
