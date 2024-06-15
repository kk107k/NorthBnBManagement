import React from 'react'
import './industriesPageBody1.css'
import burj from '../../../../assets/industries page burj khalifa.png'

const IndustriesPageBody1 = () => {
  return (
    <div className='industries-page-body-one__container'>
      <div className='industries-page-body-one__container_left'>
        <img src={burj} alt="" />
      </div>
      <div className='industries-page-body-one__container_right'>
        <div className='industries-page-body-one__container_right-content'>
          <div className='industries-page-body-one-line'/>
          <h1>Expertise in industrial solutions</h1>
        </div>
        <div className='industries-page-body-one__container_right-text'>
          <p>We have dedicated Teams by Industry using our expertise and experience across those sectors to assist you. In many cases our people have worked in those sectors directly or have developed expertise through decades of involvement with clients like you.</p>
        </div>
      </div>
    </div>
  )
}

export default IndustriesPageBody1