import React from 'react'
import './servicePage.css'
import { HeaderImage, ServiceNavbar, QuickContactComponent,ServicePageComponent } from '../../section'
import { ambience4 } from '../../assets'

const Maintenance = () => {
  return (
    <div className='service-page__container'>
        <HeaderImage title="Maintenance" />
        <div className='service-page__container-content'>
          <div className='service-page__container-left'>
        <ServiceNavbar />
        <QuickContactComponent />

          </div>
          <div className='sevice-page__container-right'>
        <ServicePageComponent 
        heading={'Ensure Your Property Stays in Perfect Condition'} 
        text={'At CasaBnb Management, we understand that maintaining your property is essential for guest satisfaction and long-term profitability. Here’s how our comprehensive maintenance services help keep your property in top condition'}
        list={
          <ul>
            <li>
            Routine Inspections
            </li>
            <p>
            Regular inspections are conducted to identify and address potential issues before they become major problems. This proactive approach helps maintain the quality and safety of your property.
            </p>
            <li>
            Emergency Repairs
            </li>
            <p>
            Unexpected issues can arise at any time. Our team is available 24/7 to handle emergency repairs, ensuring minimal disruption to your guests and protecting your property from further damage.
            </p>
            <li>
            Preventative Maintenance
            </li>
            <p>
            We schedule regular maintenance tasks, such as HVAC servicing, plumbing checks, and electrical inspections, to prevent breakdowns and extend the lifespan of your property’s systems and appliances.

            </p>
            <li>
            Minor Repairs and Upkeep
            </li>
            <p>
            From fixing leaky faucets to replacing light bulbs, we take care of all the small repairs that keep your property running smoothly. Our team ensures that every detail is attended to, enhancing the overall guest experience.

            </p>
            <li>
            Major Repairs and Renovations
            </li>
            <p>
            When larger repairs or renovations are needed, we coordinate and oversee the entire process. We work with trusted contractors to ensure high-quality work is completed on time and within budget.

            </p>
            <li>
            Guest Communication
            </li>
            <p>
            We promptly address maintenance requests from guests, ensuring their stay is comfortable and hassle-free. Our efficient handling of issues leads to positive reviews and repeat bookings.
            </p>
            <li>
            Regular Updates
            </li>
            <p>
            We provide you with regular updates on the condition of your property, including reports on completed maintenance tasks and any upcoming needs. This transparency allows you to stay informed and plan accordingly.
            </p>
          </ul>
        }
        finalText={'By partnering with CasaBnb Management, you can rest assured that your property is well-maintained and always guest-ready. Our dedicated maintenance services not only enhance the guest experience but also protect your investment, ensuring long-term success in the short-term rental market.'}
        image={ambience4} />    
          </div>
        </div>
        
    </div>
  )
}

export default Maintenance