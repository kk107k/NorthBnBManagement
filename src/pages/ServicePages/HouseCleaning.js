import React from 'react'
import './servicePage.css'
import { HeaderImage, ServiceNavbar, QuickContactComponent,ServicePageComponent } from '../../section'
import { ambience3 } from '../../assets'

const HouseCleaning = () => {
  return (
    <div className='service-page__container'>
        <HeaderImage title="House Cleaning" />
        <div className='service-page__container-content'>
          <div className='service-page__container-left'>
        <ServiceNavbar />
        <QuickContactComponent />

          </div>
          <div className='sevice-page__container-right'>
        <ServicePageComponent 
        heading={'Spotless Accommodations for Happy Guests'} 
        text={'At CasaBnb Management, we believe that cleanliness is a cornerstone of guest satisfaction and property success. Our professional cleaning and housekeeping services are designed to keep your property immaculate and inviting for every guest. Here’s how we achieve exceptional standards of cleanliness'}
        list={
          <ul>
            <li>
            Thorough Cleaning Between Guests
            </li>
            <p>
            Our team performs comprehensive cleanings after each guest checks out, ensuring every corner of your property is spotless. We clean and sanitize all areas, including bedrooms, bathrooms, kitchens, and living spaces.
            </p>
            <li>
            High-Quality Cleaning Products
            </li>
            <p>
            We use top-quality, eco-friendly cleaning products that are safe for both guests and the environment. These products ensure a deep clean and fresh atmosphere, enhancing the guest experience.

            </p>
            <li>
            Linen and Towel Service
            </li>
            <p>
            Fresh linens and towels are provided for every new guest. Our team ensures that all bedding and towels are professionally laundered and perfectly presented, contributing to a luxurious and comfortable stay.

            </p>
            <li>
            Regular Deep Cleanings
            </li>
            <p>
            In addition to standard cleanings, we schedule regular deep cleanings to maintain the highest standards of hygiene. These thorough cleanings tackle areas that require extra attention, ensuring long-term cleanliness and upkeep.

            </p>
            <li>
            Inspection and Quality Control
            </li>
            <p>
            After each cleaning, a detailed inspection is conducted to ensure our high standards are met. This quality control process guarantees that no detail is overlooked and that the property is ready to impress new guests.

            </p>
            <li>
            Mid-Stay Cleanings
            </li>
            <p>
            For longer stays, we offer mid-stay cleaning services to keep the property fresh and comfortable throughout the guest’s visit. This service can be customized based on the guest’s preferences and needs.

            </p>
            <li>
            Guest Communication
            </li>
            <p>
            We handle all guest inquiries related to cleaning and housekeeping promptly and professionally. Our responsive approach ensures that any issues are quickly resolved, leading to positive reviews and repeat bookings.

            </p>
            <li>
            Customized Cleaning Plans
            </li>
            <p>
            We understand that each property is unique. Our cleaning services can be tailored to meet your specific requirements and preferences, ensuring that your property is maintained exactly the way you want it.

            </p>
          </ul>
          }
          finalText={'By choosing CasaBnb Management, you can be confident that your property will always be in pristine condition. Our meticulous cleaning and housekeeping services not only enhance the guest experience but also protect your property’s reputation and ensure ongoing success in the short-term rental market.'}
        image={ambience3} />    
          </div>
        </div>
        
    </div>
  )
}

export default HouseCleaning