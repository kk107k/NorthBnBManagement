import React from 'react';
import { Link } from 'react-router-dom';
import './marketing.css';
import { motion } from 'framer-motion';
import { slideIn, staggerContainer } from '../../../utils/motion';
import { What } from '../../../assets';

const Marketing = () => {
  return (
    <div className='marketing__'>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className='marketing__container'
      >
        <div className='marketing__container-left'>
          <motion.h4 variants={slideIn('left', 'tween', 0, 1)}>What are short term rentals?</motion.h4>
          <motion.h1 variants={slideIn('left', 'tween', 0.4, 1)}>Rent properties for days, maximize income.</motion.h1>
          <motion.p variants={slideIn('left', 'tween', 0.8, 1)}>
            Short-term rentals allow you to rent out your property for a few days or weeks, offering higher income potential compared to long-term leases. Listed on platforms like Airbnb, they attract travelers seeking unique, flexible accommodations, providing you with greater control and profitability.
          </motion.p>
          <Link to="/What">
            <motion.button className='marketing__container-left-button' variants={slideIn('left', 'tween', 0, 1)}>
              Learn more
            </motion.button>
          </Link>
        </div>
        <div className='marketing__container-right'>
          <motion.img variants={slideIn('right', 'tween', 0, 1)} src={What} alt='marketing' />
        </div>
      </motion.div>
    </div>
  );
};

export default Marketing;
