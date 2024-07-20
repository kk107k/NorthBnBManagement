import React from 'react'
import './servicePage.css'
import { HeaderImage, ServiceNavbar, QuickContactComponent,ServicePageComponent } from '../../section'
import { ambience5 } from '../../assets'

const PremiumHosting = () => {
  return (
    <div className='service-page__container'>
        <HeaderImage title="Premium Hosting" />
        <div className='service-page__container-content'>
          <div className='service-page__container-left'>
        <ServiceNavbar />
        <QuickContactComponent />

          </div>
          <div className='sevice-page__container-right'>
        <ServicePageComponent 
        heading={'Elevating Guest Experience to New Heights'} 
        text={'At CasaBnb Management, our Premium Hosting service is designed to provide an exceptional level of hospitality, ensuring that every guest feels valued and pampered. Here’s how our premium hosting service sets your property apart'}
        listText={'With our able esteemed team, we offer the following services:'}
        list={
          <ul>
<li>Personalized Guest Interactions</li>
<p>We offer a personalized approach to guest interactions, ensuring that each guest feels special and well cared for. From the moment they book, we provide tailored communication, addressing their unique needs and preferences.</p>

<li>Welcome Packages</li>
<p>Guests are greeted with thoughtfully curated welcome packages that include local treats, essentials, and a personalized welcome note. This attention to detail creates a memorable first impression.</p>

<li>Top-Tier Amenities</li>
<p>We ensure that your property is equipped with high-quality amenities, such as premium toiletries, luxurious linens, and modern appliances. These touches enhance the comfort and enjoyment of your guests.</p>

<li>Concierge Services</li>
<p>Our concierge team is available to assist guests with a variety of services, including restaurant reservations, tour bookings, and local recommendations. This level of service ensures that guests have an unforgettable stay.</p>

<li>Exclusive Partnerships</li>
<p>We collaborate with local businesses to offer guests exclusive discounts and experiences. From spa treatments to guided tours, these partnerships provide added value and enhance the guest experience.</p>

<li>Enhanced Cleaning and Maintenance</li>
<p>Our premium hosting includes enhanced cleaning protocols and regular maintenance checks to ensure that the property is always in pristine condition. Guests can enjoy a spotless and well-maintained environment throughout their stay.</p>

<li>Special Occasion Services</li>
<p>We help guests celebrate special occasions by arranging surprises such as birthday cakes, anniversary decorations, or romantic setups. This service adds a personal touch and creates lasting memories.</p>

<li>High-Quality Photography and Listing Presentation</li>
<p>We use professional photography and detailed property descriptions to create an attractive and enticing listing. This ensures that your property stands out and attracts discerning travelers.</p>
</ul>
}
        image={ambience5} />    
          </div>
        </div>
        
    </div>
  )
}

export default PremiumHosting