import React from 'react'
import './homepage.css'
import { earthVideo } from '../../../assets'

const Homepage = () => {
  return (
    <div className='video-container'>
        <video className="video-background" src={earthVideo} autoPlay loop muted/>
        <div className="text-container">
            <h1 className="text-container">Make More Money with Short Term Rentals</h1>
            </div>
    </div>
  )
}

export default Homepage