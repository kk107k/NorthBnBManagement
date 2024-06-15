import React from 'react'
import './servicePage.css'
import { HeaderImage, ServiceNavbar, QuickContactComponent,ServicePageComponent } from '../../section'
import { Who } from '../../assets'

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
        heading={'Premium Hosting'} 
        text={'You’ve worked hard to build your business but it doesn’t mean everything is as good as it could be. Perhaps you want to explore new markets, optimise your borrowings and Balance Sheet or undertake a full financial restructuring? Now could be the optimal time to consider that. Our expert teams can help you and walk you through some of the options available. Get in touch to see how.'}
        listText={'With our able Corporate Advisory team, we offer the following services:'}
        image={Who} />    
          </div>
        </div>
        
    </div>
  )
}

export default PremiumHosting