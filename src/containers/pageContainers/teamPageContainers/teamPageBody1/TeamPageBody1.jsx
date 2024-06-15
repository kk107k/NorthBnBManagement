import React from 'react'
import './teamPageBody1.css'
import { TeamComponent } from '../../../../components'
import faisal from '../../../../assets/faisal galadari.png'
import farrukh from '../../../../assets/farrukh siddiqui.png'
import khamis from '../../../../assets/khamis mohamed.png'
import ahmed from '../../../../assets/ahmed saeed.png'

const TeamPageBody1 = () => {
  return (
    <div className='team-page-body-one__container'>
      <div className='team-page-body-one__container-founders'>
      <div>
        <h1>Founding Partner :</h1>
      </div>
      <div className='team-page-body-one__container-component'>
        <TeamComponent img={faisal} text={"Faisal Galadari"} link={"/faisal-galadari"}/>
        <TeamComponent img={farrukh} text={"Farrukh Siddiqui"} link={"/farrukh-siddiqui"}/>  
      </div>
      </div>
      <div className='team-page-body-one__container-advisory'>
      <div>
        <h1>Advisory Board :</h1>
      </div>
      <div className='team-page-body-one__container-component'>
        <TeamComponent img={khamis} text={"Khamis Mohamed Buharoon Al Shamsi"} link={"/khamis-mohamed"}/>
        <TeamComponent img={ahmed} text={"Ahmed Saeed Bin Braik"} link={"/ahmed-saeed"}/>  
      </div>
        </div>
    </div>
  )
}

export default TeamPageBody1