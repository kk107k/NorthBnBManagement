import React from 'react'
import './teamPageBody2.css'
import { TeamComponent } from '../../../../components'
import jeremy from '../../../../assets/jeremy shaw.png'
import george from '../../../../assets/george abraham.png'
import pillai from '../../../../assets/a s pillai.png'
import rupa from '../../../../assets/rupa shyamraj.png'
import yousif from '../../../../assets/yousif al suwaidi.png'
import mona from '../../../../assets/mona zeineldin.png'
import zahid from '../../../../assets/zahid rashid.png'
import kaj from '../../../../assets/kaj christenson.png'
import gareth from '../../../../assets/gareth watts.png'
import badr from '../../../../assets/badr soueidan.png'

const TeamPageBody2 = () => {
  return (
    <div className='team-page-body-two__container'>
      <div className='team-page-body2__title'>
        <h1>Execution Team :</h1>
        </div>
      <div className='team-page-body2__content'>
        <TeamComponent img={jeremy} text={"Jeremy Shaw FCA"} link={"/jeremy-shaw"}/>
        <TeamComponent img={george} text={"George Abraham"} link={"/george-abraham"}/>
        <TeamComponent img={pillai} text={"A S Pillai"} link={"/A-S-pillai"} />
        <TeamComponent img={rupa} text={"Rupa Shyamraj"} link={"/rupa-shyamraj"} />
        <TeamComponent img={yousif} text={"Yousif Al Suwaidi"} link={"/yousif-al-suwaidi"} />
        <TeamComponent img={mona} text={"Mona Zeineldin"} link={"/mona-zeineldin"} />
        <TeamComponent img={zahid} text={"Zahid Rashid"} link={"/zahid-rashid"} />
        <TeamComponent img={kaj} text={"Kaj Christenson"} link={"/kaj-christenson"} />
        <TeamComponent img={gareth} text={"Gareth Watts"} link={"/gareth-watts"} />
        <TeamComponent img={badr} text={"Badr Soueidan"} link={"/badr-soueidan"} />
        </div>
    </div>
  )
}

export default TeamPageBody2