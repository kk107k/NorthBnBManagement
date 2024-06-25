import React, {useEffect} from 'react'

import { Home, TeamPage, ContactPage, CustomerSupport, HouseCleaning, Maintenance, OccupancyRate, PremiumHosting, Services, What, Why } from './pages'
import { Navbar } from './section'
import './App.css'
import { Route, Routes } from "react-router-dom"

const App = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='App'>
    <div className='Navbar'>
        <Navbar />
    </div>
    <div className='other'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contactUs" element={<ContactPage/>} />
            <Route path="/services" element={<Services />} />
            <Route path="/customerSupport" element={<CustomerSupport />} />
            <Route path="/houseCleaning" element={<HouseCleaning />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="/occupancyRate" element={<OccupancyRate />} />
            <Route path="/premiumHosting" element={<PremiumHosting />} />
            <Route path="/what" element={<What />} />
            <Route path="/why" element={<Why />} />
        </Routes>
        </div>
    </div>
  )
}

export default App