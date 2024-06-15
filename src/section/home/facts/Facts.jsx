import React from 'react'
import './facts.css'
import {motion} from 'framer-motion'
import {staggerContainer} from '../../../utils/motion'

const Facts = () => {
  return (
    <div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className='facts__container-main'>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
          </div>
          <div class="flip-card-back">
            <h1>Bisma Amir</h1>
            <p>Professional idiot</p>
            <p>and the cutest thing ever</p>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Facts