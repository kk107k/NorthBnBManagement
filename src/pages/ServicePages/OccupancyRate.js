import React from 'react'
import './servicePage.css'
import { HeaderImage, ServiceNavbar, QuickContactComponent,ServicePageComponent } from '../../section'
import { ambience1 } from '../../assets'

const OccupancyRate = () => {
  return (
    <div className='service-page__container'>
        <HeaderImage title="Occupancy Rate" />
        <div className='service-page__container-content'>
          <div className='service-page__container-left'>
        <ServiceNavbar />
        <QuickContactComponent />

          </div>
          <div className='sevice-page__container-right'>
        <ServicePageComponent 
        heading={'Maximize Your Property’s Potential'} 
        text={'At CasaBnb Management, we understand that keeping your property occupied is key to maximizing your revenue. Here’s how we achieve high occupancy rates for our clients:'}
        listText={'With our able Corporate Advisory team, we offer the following services:'}
        list={
          <ul>
            <li>Dynamic pricing</li>
            <p>Our advanced pricing algorithms adjust rates based on market demand, local events, and seasonal trends to ensure your property is competitively priced at all times. This strategy attracts more bookings while maximizing your rental income.</p>
            <li>SEO optimization</li>
            <p>We optimize your property listing with targeted keywords and high-quality content to improve its visibility in search results on platforms like Airbnb and Google. This increased visibility translates to more views and higher booking rates.</p>
            <li>Multi-Platform Listing</li>
            <p>We list your property on multiple booking platforms, including Airbnb, VRBO, and Booking.com, to reach a broader audience. This multi-platform approach ensures that your property is exposed to a wide range of potential guests.</p>            
            <li>Targeted marketing campaigns</li>
            <p>Our marketing team runs targeted ad campaigns on social media and search engines to promote your property. These campaigns are designed to reach potential guests who are actively searching for accommodations in your area.</p>
            <li>Professional photography</li>
            <p>High-quality photos make a significant difference in attracting guests. We provide professional photography services to showcase your property in the best light, highlighting its unique features and amenities.</p>
            <li>Guest Communication</li>
            <p>Prompt and professional communication with potential guests helps convert inquiries into bookings. Our team handles all guest communications, ensuring timely responses and a positive experience from the first inquiry to check-out.</p>
          </ul>
        }
        finalText={'By combining these strategies, we ensure that your property stands out in a crowded market and maintains high occupancy rates. Partner with CasaBnb Management to unlock the full potential of your short-term rental property.'}
        image={ambience1} />    
          </div>
        </div>
        
    </div>
  )
}


export default OccupancyRate