import React from 'react'
import './aboutTable.css'

const AboutTable = ({title, items, img}) => {
  return (
    <div className='about-us-page-body-2__container'>
      <div className="about-us-page-body-2__container-left_contents">
        <div className="about-us-page-body-2__container-left_contents-title">
          <div className='about-us-page-body-2__container-line'/>
          <h1>{title}</h1>
          </div>
        <div className="about-us-page-body-2__container-left_contents-contents">
            {items.map((item, index) => {
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
        <img src={img} alt="tower" className="about-us-page-body-2__container-right_contents-tower"/>
        </div>
    </div>
  )
}

export default AboutTable