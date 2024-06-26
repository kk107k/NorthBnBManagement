import React from 'react';
import './whatSection.css';
import { motion } from 'framer-motion';
import { slideIn, staggerContainer } from '../../../utils/motion';
import { What } from '../../../assets';
import { DescriptionBox } from '../../../components';

const Marketing = () => {
  return (
    <div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className='whatSection__container'
      >
        <DescriptionBox slideDirection='left' heading='What is North.bnb?' subheading='We are the best' text='We are the best at what we do. We provide the best services for our customers. We are the best at what we do. We provide the best services for our customers.' redirect='/what' />
        <div className='whatSection__container-right'>
          <motion.img variants={slideIn('right', 'tween', 0, 1)} src={What} alt='Your Browser Does Not Support Images' />
        </div>
      </motion.div>
    </div>
  );
};

export default Marketing;
