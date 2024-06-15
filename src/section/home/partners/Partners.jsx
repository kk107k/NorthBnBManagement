import React from 'react'
import './partners.css'
import { bookingLogo, dubizzleLogo, agodaLogo, propertyfinderLogo, vrboLogo, rentalsCaLogo, airbnbLogo } from '../../../assets'

const Partners = () => {
  return (
    <div className='partners_main_container container'>
        <h1>We list your properties wherever customers look</h1>
        <h4>Besides marketing your home on all social platforms, we optimize and sync your listing across all the major booking websites.</h4>
        <div className='partners_main_container_logos'>
            <img src={bookingLogo}></img>
            <img src={dubizzleLogo}></img>
            <img src={agodaLogo}></img>
            <img src={propertyfinderLogo}></img>
            <img src={vrboLogo}></img>
            <img src={rentalsCaLogo}></img>
            <img src={airbnbLogo}></img>
        </div>
    </div>
  )
}

export default Partners