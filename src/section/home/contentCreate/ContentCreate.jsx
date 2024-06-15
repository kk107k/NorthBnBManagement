import React from 'react'
import './contentCreate.css'
import { motion } from 'framer-motion';
import { slideIn, staggerContainer } from '../../../utils/motion';
import { Why } from '../../../assets';
import { Link } from 'react-router-dom';


const ContentCreate = () => {
  return (
    <div className='content__'>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className='content__container'
    >
      <div className='content__container-left'>
        <motion.img variants={slideIn('left', 'tween', 0, 1)} src={Why} alt='content' />
      </div>
      <div className='content__container-right'>
        <motion.h4 variants={slideIn('right', 'tween', 0, 1)}>Why Do Short-term Leasing?</motion.h4>
        <motion.h1 variants={slideIn('right', 'tween', 0.4, 1)}>Higher income, flexible scheduling, and diverse guest experiences.</motion.h1>
        <motion.p variants={slideIn('right', 'tween', 0.8, 1)}>Short-term rentals offer the potential for higher income compared to traditional long-term leases, with the flexibility to adjust pricing and availability. They attract a diverse range of guests, providing unique and rewarding hosting experiences. This approach allows you to maximize your property’s profitability and maintain greater control.</motion.p>
        <Link to='/Why'>
        <motion.button className='content__container-right-button' variants={slideIn('right', 'tween', 0, 1)}>Learn more</motion.button>
      </Link>
      </div>
      
    </motion.div></div>
  )
}

export default ContentCreate