import React, {useEffect} from 'react'
import { HeaderImage } from '../section'
import { BigTextBox, SmallTextBox, AboutTable, LeftAlignedTextBox } from '../components'
import { vision, mission, building, Who } from '../assets'
import { motion } from 'framer-motion';
import { slideIn, staggerContainer } from '../utils/motion';


const items = [
  {
    id: 'quality',
    title: 'We Believe in the Highest Quality',
    text: 'Our Teams work hard for you utilising their years of commercial experience as leaders in their respective fields',
  },
  { 
    title: 'We Believe in The Personal Touch',
    text: "We not only work for you but with you. That close contact and trusted relationship is critical for a full understanding of the desired solution"
  },
  {
    title: "We Believe in Effective Solutions",
    text: "A solution which isn’t practical or in line with your vision will not be adopted to its full potential. Working with you is important in closing your vision with the reality of execution"
  },
  ]

const What = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeaderImage title="About Our Company"/>
      <motion.div className='container'
       variants={staggerContainer}
       initial="hidden"
       whileInView="show"
       viewport={{ once: false, amount: 0.25 }}>
      <BigTextBox title={"Our Excellence"} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}/>
      <div className='flex-row'>
        <SmallTextBox img={vision} title="Our Vision" text="Our vision is to be the most trusted and respected corporate advisory firm by our clients. We strive to be the most preferred choice for our clients by providing them with the best in class services and solutions. We aim to be the most admired firm in the industry by our clients, employees, and stakeholders." />
        <span className='vertical-line'/>
        <SmallTextBox img={mission} title="Our Mission" text="Our mission is to provide our clients with the best in class services and solutions. We aim to be the most preferred choice for our clients by providing them with the best in class services and solutions. We aim to be the most admired firm in the industry by our clients, employees, and stakeholders." />
      </div>
      <AboutTable title="Our Core Values" items={items} img={building}/>
      <div className='flex-row'>
      <motion.img variants={slideIn('left', 'tween', 0, 1)} src={Who} alt='content' style={{width: 50 + '%', marginRight: 20 + 'px'}}/>
      <LeftAlignedTextBox title="Our Promise" text="Our promise is to provide you with the best in class services and solutions. We aim to be the most preferred choice for our clients by providing them with the best in class services and solutions. We aim to be the most admired firm in the industry by our clients, employees, and stakeholders."/>
      </div>
    </motion.div>

    </div>
  )
}

export default What