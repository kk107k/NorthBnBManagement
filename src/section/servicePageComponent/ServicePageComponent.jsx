import React from 'react'
import './servicePageComponent.css'

const ServicePageComponent = ({heading,text,text2,listText,list,finalText,image}) => {
  return (
    <div className='service-page-component__container'>
      <h2>{heading}</h2>
      <p>{text}</p>
      <p>{text2}</p>
      <p>{listText}</p>
      <p>{list}</p>
      <p>{finalText}</p>
      <img src={image} />
    </div>
  )
}

export default ServicePageComponent