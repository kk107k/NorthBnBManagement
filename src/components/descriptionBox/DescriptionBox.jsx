import React from 'react'
import './descriptionBox.css'
import {motion} from 'framer-motion'
import { slideIn, staggerContainer } from '../../utils/motion'
import { Link } from 'react-router-dom'


const DescriptionBox = ({heading, subheading, text, slideDirection, redirect}) => {
  return (
    <div className='description__container-right'
    variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}>
        <motion.h4 variants={slideIn(slideDirection,'tween',0, 1)}>{heading}</motion.h4>
        <motion.h1 variants={slideIn(slideDirection,'tween',0.4, 1)}>{subheading}</motion.h1>
        <motion.p variants={slideIn(slideDirection,'tween',0.8, 1)}>{text}</motion.p>
        <Link to={redirect}>
            <motion.button className='description__container-right-button' variants={slideIn(slideDirection, 'tween', 0.8, 1)}>Learn more</motion.button>
          </Link>
    </div>
  )
}

export default DescriptionBox