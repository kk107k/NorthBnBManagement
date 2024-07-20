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
        <DescriptionBox slideDirection='left' heading='What are Short-term rentals?' subheading='Flexible booking' text='Short-term rentals are properties rented out for short durations, often to travelers and tourists, through platforms like Airbnb and VRBO. These rentals offer flexibility and comfort for guests.' redirect='/what' />
        <div className='whatSection__container-right'>
          <motion.img variants={slideIn('right', 'tween', 0, 1)} src={What} alt='Your Browser Does Not Support Images' />
        </div>
      </motion.div>
    </div>
  );
};

export default Marketing;
