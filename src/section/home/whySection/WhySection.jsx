import React from 'react';
import './whySection.css';
import { motion } from 'framer-motion';
import { slideIn, staggerContainer } from '../../../utils/motion';
import { DescriptionBox } from '../../../components';
import { Why } from '../../../assets';

const ContentCreate = () => {
  return (
    <div id="contentCreateSection" className='content__'>
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
        <DescriptionBox slideDirection='right' heading='Why do short term rentals?' subheading='Significant gain' text='Short-term renting allows YOU to optimize pricing, respond to market trends, and maximize occupancy rates, ultimately boosting overall profitability.' redirect='/Why' />
      </motion.div>
    </div>
  );
}

export default ContentCreate;
