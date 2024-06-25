import React from 'react'
import './services.css'
import { Link } from 'react-router-dom'
import {servicesData} from '../../../constants'

const Services = () => {
  
  return (
    <div className='services__container color_bg-lightblue container' id='services'>
      <div className='services__container-text'> 
        <h1>What You Get with</h1>
        <h2>North.bnb's Short Term Management Service</h2>
        <p>Our all-inclusive services maximize your earnings while you don't lift a finger</p>
      </div>
      <div className='services__container-cards'>
  {servicesData.map((service, index) => (
    
    <div className='services__container-cards-box'>
    <Link to={service.link} key={service.title + index}>
      <div className='services__container-cards-items'>
        {service.img && (
          <div className='services__container-cards-items-img'>
            <img src={service.img} alt={service.title} />
          </div>
        )}
        <div className='services_container-cards-items-text'> 
        <h1>{service.title}</h1>
        <p>{service.text}</p>
        </div>

      </div>
    </Link>
    </div>
  ))}
</div>
          <div />
          <div />  
    </div>
  )
}

export default Services