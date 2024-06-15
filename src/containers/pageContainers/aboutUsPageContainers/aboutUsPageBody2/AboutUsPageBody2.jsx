import React from 'react'
import './aboutUsPageBody2.css'
import towerImage from '../../../../assets/about us page body 1 pic.png'
import quality from '../../../../assets/about us page quality.png'
import touch from '../../../../assets/about us page touch.png'
import solutions from '../../../../assets/about us page solutions.png'

const contentData = [
  {
    id: 'quality',
    img: quality,
    title: 'We Believe in the Highest Quality',
    text: 'Our Teams work hard for you utilising their years of commercial experience as leaders in their respective fields',
  },
  { 
    img: touch,
    title: 'We Believe in The Personal Touch',
    text: "We not only work for you but with you. That close contact and trusted relationship is critical for a full understanding of the desired solution"
  },
  {
    img: solutions,
    title: "We Believe in Effective Solutions",
    text: "A solution which isn’t practical or in line with your vision will not be adopted to its full potential. Working with you is important in closing your vision with the reality of execution"
  },
  ]

const AboutUsPageBody = () => {
  return (
    <div className='about-us-page-body-2__container'>
      <div className="about-us-page-body-2__container-left_contents">
        <div className="about-us-page-body-2__container-left_contents-title">
          <div className='about-us-page-body-2__container-line'/>
          <h1> Some Reasons to Work Together</h1>
          </div>
        <div className="about-us-page-body-2__container-left_contents-contents">
            {contentData.map((item, index) => {
              return (
                <div className="about-us-page-body-2__container-left_contents-contents-item" key={item.title + index}>
                  <div className="about-us-page-body-2__container-left_contents-contents-item-img">
                  <img src={item.img} alt={item.title} id={item.id}/>
                  </div>
                  <div className='about-us-page-body-2__container-left_contents-contents-body'>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                  </div>
          </div>
          )})}
        </div>
    </div>
    <div className="about-us-page-body-2__container-right_contents">
        <img src={towerImage} alt="tower" className="about-us-page-body-2__container-right_contents-tower"/>
        </div>
    </div>
  )
}

export default AboutUsPageBody