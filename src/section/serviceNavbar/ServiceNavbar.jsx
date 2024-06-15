import React from 'react'
import './serviceNavbar.css'
import { Link } from 'react-router-dom'

const ServiceNavbar = () => {
  return (
    <div className='service-navbar__container'>
        <ul>
          <Link to={'/CustomerSupport'}><li>Customer Support</li></Link>
          <Link to={'/HouseCleaning'}><li>House Cleaning</li></Link>
          <Link to={'/Maintenance'}><li>Maintenance</li></Link>
          <Link to={'/OccupancyRate'}><li>Occupancy Rates</li></Link>
          <Link to={'/PremiumHosting'}><li>Premium Hosting</li></Link>
        </ul>
    </div>
  )
}

export default ServiceNavbar