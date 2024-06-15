import React from 'react'
import { HeaderImage } from '../section'
import { vision, mission, building } from '../assets'

const contentData = [
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
  return (
    <div>
      <HeaderImage title="About Our Company"/>
      <div>
        <h1>Committed to Excellence</h1>
        <p>In the face of the major shifts shaping the world, where conventional wisdom is being challenged and disruptive technologies are threatening the traditional business models, having a constantly evolving and forward looking strategy is a must to survive. More than ever, business houses needed to be more adaptive and swift in their decisions now, to keep up with the race. To help you cope up with these constant challenges and changes, we bring to you our unique value addition approach to deliver you comprehensive advisory services Emerging Capital is a Boutique Corporate Advisory Firm, led by an elite group of International and Local Senior Ex-Bankers. We are a team of specialist corporate leaders who can not only advise you on what to do, but will also be a part of the delivering the answer. We can help you to make better decisions, build up a strategic roadmap, create a more effective organization and develop impact-driven strategies. We bring in a collective experience of more than 200 years gained in the specialized areas of Corporate Banking, Fund Raising, Capital Planning, Debt Restructuring, Risk Advisory, IPO Advisory, Transaction and M & A support. Headquartered in Dubai, we work with various Governmental Agencies, Top Corporates and Family Trade Houses.</p>
      </div>
      <div>
        <div>
        <img src={vision} />
        <h1>Our Vision</h1>
        <p>Our vision is to be the most trusted and respected corporate advisory firm recognized by our clients for delivering excellence in all aspects of our business. We aim to be the most preferred choice for our clients by providing them with the best in class services and solutions. We strive to be the most admired firm in the industry by our clients, employees, and stakeholders.</p>
        </div>
        <div>
        <img src={mission} />
        <h1>Our Mission</h1>
        <p>Our mission is to provide our clients with the best in class services and solutions that will help them to achieve their business goals. We aim to be the most trusted and respected corporate advisory firm by our clients. We strive to be the most preferred choice for our clients by providing them with the best in class services and solutions. We aim to be the most admired firm in the industry by our clients, employees, and stakeholders.</p>
        </div>
      </div>
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
        <img src={building} alt="tower" className="about-us-page-body-2__container-right_contents-tower"/>
        </div>
    </div>
    </div>
  )
}

export default What