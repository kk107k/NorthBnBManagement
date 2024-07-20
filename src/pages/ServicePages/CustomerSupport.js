import React from 'react'
import './servicePage.css'
import { HeaderImage, ServiceNavbar, QuickContactComponent,ServicePageComponent } from '../../section'
import { ambience2 } from '../../assets'

const CustomerSupport = () => {
  return (
    <div className='service-page__container'>
        <HeaderImage title="24/7 Guest Support" />
        <div className='service-page__container-content'>
          <div className='service-page__container-left'>
        <ServiceNavbar />
        <QuickContactComponent />

          </div>
          <div className='sevice-page__container-right'>
        <ServicePageComponent 
        heading={'Round-the-Clock Assistance for Seamless Stays'} 
        text={'At CasaBnb Management, we understand that providing exceptional guest support is crucial for a successful short-term rental. Our 24/7 guest support service ensures that your guests have a seamless and enjoyable experience from check-in to check-out. Here’s how we provide unparalleled support:'}
        list={
          <ul>
            <li>Immediate Response to Inquiries</li>
            <p>We are available around the clock to answer any questions or concerns your guests may have. Whether it’s a question about the property, check-in instructions, or local recommendations, our team is ready to assist promptly.</p>
            <li>Check-In and Check-Out Assistance</li>
            <p>Our 24/7 support includes helping guests with the check-in and check-out process. We provide clear instructions and are available to troubleshoot any issues that may arise, ensuring a smooth transition for every guest.</p>
            <li>Emergengy Support</li>
            <p>Unexpected situations can occur at any time. Our team is on standby to handle emergencies, such as maintenance issues or urgent guest needs, ensuring that problems are resolved quickly and efficiently.            </p>
            <li>Personalized Guest Exprience</li>
            <p>We strive to make each guest feel welcome and valued. Our team provides personalized assistance, addressing individual needs and preferences to enhance the overall guest experience.            </p>
            <li>Proactive Communication</li>
            <p>We keep in touch with guests throughout their stay, checking in to ensure everything is going well and addressing any potential issues before they become problems. This proactive approach helps maintain high levels of guest satisfaction.</p>
            <li>Handling Special Requests</li>
            <p>Whether it’s arranging for extra amenities, providing local recommendations, or accommodating special requests, our team is dedicated to making each stay as comfortable and enjoyable as possible.</p>
            <li>Multilingual Support</li>
            <p>To cater to international guests, we offer support in multiple languages. This ensures clear and effective communication, making guests from around the world feel at home.            </p>
            <li>Enhancing Guest Reviews</li>
            <p>Exceptional support leads to positive reviews and higher ratings. Our 24/7 guest support service ensures that guests have a memorable experience, increasing the likelihood of positive feedback and repeat bookings.            </p>
          </ul>
        }
        finalText={'By choosing CasaBnb Management, you can rest assured that your guests are in good hands. Our dedicated 24/7 guest support service not only enhances the guest experience but also boosts your property’s reputation and profitability in the competitive short-term rental market.'}
        image={ambience2} />    
          </div>
        </div>
        
    </div>
  )
}

export default CustomerSupport