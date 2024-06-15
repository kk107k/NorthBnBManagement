import React from 'react'
import './webDev.css'
import { motion } from 'framer-motion';
import { slideIn, staggerContainer } from '../../../utils/motion';
import { Who } from '../../../assets';

const WebDev = () => {
  return (
    <div className='webdev__'>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className='webdev__container'
    >
      <div className='webdev__container-left'>
        <motion.h4 variants={slideIn('left', 'tween', 0, 1)}>Who are we?</motion.h4>
        <motion.h1 variants={slideIn('left', 'tween', 0.4, 1)}>We manage your short-term rentals, hassle-free, for maximum returns.</motion.h1>
        <motion.p variants={slideIn('left', 'tween', 0.8, 1)}>We are a full-service short-term rental management company. We handle everything from listing your property on top rental platforms, managing guest bookings, check-ins, and checkouts, to marketing for higher occupancy. Our maintenance team ensures your property remains in top condition, providing a 5-star guest experience. We offer 24/7 support and an owner’s dashboard for real-time updates, ensuring a completely hassle-free experience for you.</motion.p>
        <motion.button
        className='webdev__container-left-button'
        variants={slideIn('left', 'tween', 0, 1)}
        onClick={() => {
          const pdfUrl = './brochure.pdf';
          const link = document.createElement('a');
          link.href = pdfUrl;
          link.setAttribute('download', 'brochure.pdf');
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
      >
  Download Brochure
</motion.button>
      </div>
      <div className='webdev__container-right'>
        <motion.img variants={slideIn('right', 'tween', 0, 1)} src={Who} alt='webdev' />
      </div>
    </motion.div></div>
  )
}

export default WebDev