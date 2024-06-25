import React from 'react';
import './homepage.css';
import { earthVideo } from '../../../assets';
import { Link } from 'react-router-dom';
import { VideoDiv } from '../../../components';
import { motion } from 'framer-motion';
import { slideIn, staggerContainer } from '../../../utils/motion';
import { Link as ScrollLink } from 'react-scroll'; // Import react-scroll Link

const Homepage = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className='homepage-container'
    >
      <VideoDiv videoSrc={earthVideo}>
        <motion.h3 variants={slideIn('down', 'tween', 0, 1)}>Bed & Breakfast Management Company</motion.h3>
        <motion.h1 variants={slideIn('down', 'tween', 0, 1)}>We do it all for just <span>15%</span></motion.h1>
        <div>
          <ScrollLink to="services" smooth={true} duration={1000}><motion.button variants={slideIn('down', 'tween', 0, 1)}>Services</motion.button></ScrollLink>
          <ScrollLink to="estimator" smooth={true} duration={1000}><motion.button id='button2' variants={slideIn('down', 'tween', 0, 1)}>Estimate</motion.button></ScrollLink>
        </div>
        <motion.p className='tt' variants={slideIn('down', 'tween', 0, 1)}>We don't make money until you do.<a href='/terms-and-conditions'>Read our terms and conditions</a></motion.p>
        <motion.div className='homepage-scroll-down'>
          <ScrollLink to="contentCreateSection" smooth={true} duration={500}>
            <i className="fa-solid fa-chevron-down" ></i>
          </ScrollLink>
        </motion.div>
      </VideoDiv>
    </motion.div>
  );
}

export default Homepage;
