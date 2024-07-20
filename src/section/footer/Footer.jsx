import React from 'react'
import './footer.css'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { logoBlack } from '../../assets';
import {useState, useEffect} from 'react'
const arrow = <i class="fa-solid fa-caret-right"></i>



const Footer = () => {
  

    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
  
    const [data, setData]=useState([]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
    
      const data = {
        name,
        email,
      };
    
      axios.post('https://sheet.best/api/sheets/d155445f-6083-458d-98c9-92b6dd2c3403', data)
        .then(response => {
          setName('');
          setEmail('');
        })
        .catch(error => {
          if (error.response && error.response.status === 404) {
            console.log(error);
          } else {
            console.log(error);
          }
        });
    }
    const getData = () => {
      axios.get('https://sheet.best/api/sheets/e7a8bead-e947-4de5-9421-8e17433a3fff')
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          if (error.response && error.response.status === 404) {
            console.error('Error: Request failed with status code 404');
          } else {
            console.error('An error occurred:', error);
          }
        });
    }
    
  
    useEffect(()=>{
      getData();
    },[data])


  return (
    <div className='footer__container'>
      <div className='footer__container-content'>
        <div className='footer__container-content-content'>
        <div className='footer__container-content-information'>
          <div className='footer__container-content-information-logo'>
          <img src={logoBlack} id='logo' />
          </div>
            <div className='footer__container-content-information-location'>
                <a href='https://www.google.com/maps/dir//Al+Safa+Buildings+-+Sheikh+Zayed+Rd+-+Dubai+-+United+Arab+Emirates/@25.1776728,55.2106686,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3e5f69e8650a6b71:0x3e8f3a65ac153a10!2m2!1d55.2456883!2d25.1775992?entry=ttu'>
                <i class="fa-regular fa-location-dot" style={{color: '#ffffff'}}></i>
                <p>
                    Office 123, 1st Floor,
                    Mardoof Building, Al Safa 1,
                    Sheikh Zayed Road,
                    Dubai,
                    United Arab Emirates
                    </p>
                    </a>
              </div>
              <div className='footer__container-content-information-phone'>
                <a href='tel:+971-4-564%206090%20%20%20'>
                  <i class="fa-regular fa-phone"></i>
                  <p>+971-4-564 6090</p>
                  </a>
              </div>
              <div className='footer__container-content-information-email'>
                <a href='mailto:inquiry@emcmp.com'>
                <i class="fa-regular fa-envelope"></i>
                  <p>inquiry@emcmp.com</p>
                  </a>
              </div>
              <div className='footer__container-content-information-linkedin'>
              <a href='https://www.linkedin.com/company/emcmpuae/' id='linkedin'>
              <i class="fa-brands fa-linkedin"></i>
              </a>
              </div>
        </div>
        <div className='footer__container-content-service-and-link-and-newsletter'>
        <div className='footer__container-content-services'>
          <h1>Our Services</h1>
          <Link to='/corporate-advisory'>{arrow} <p>Corporate Advisory</p></Link>
          <Link to='/corporate-finance'>{arrow} <p>Corporate Finance</p></Link>
          <Link to='/risk-advisory'>{arrow} <p>Risk Advisory</p></Link>
          <Link to='/Strategic-CEO-and-CFO-Services'>{arrow} <p>Strategic CEO & CFO Services</p></Link>
          <Link to='/Transation-Management-And-M-And-A'>{arrow} <p>Transaction Management and M & A</p></Link>
          <Link to='/ESG-Services'>{arrow} <p>ESG services</p></Link>
          <Link to='/Technology'>{arrow} <p>Technology</p></Link>
          </div>
        <div className='footer__container-content-links'>
          <h1>Quick Links</h1>
          <Link to='/'>{arrow} <p>Home</p></Link>
          <Link to='/about'>{arrow} <p>About</p></Link>
          <Link to='/team'>{arrow} <p>Teams</p></Link>
          <Link to='/contact'>{arrow} <p>Contact Us</p></Link>
        </div>
        
        <div className='footer__container-content-newsletter'>
          <h1>Newsletter</h1>
          <form onSubmit={handleSubmit}>
          <input placeholder='Name' name='name' required 
          onChange={(e)=>setName(e.target.value)}
          value={name}></input>
          <input placeholder='Email' name='email' required
          onChange={(e)=>setEmail(e.target.value)}
          value={email}></input>
          <div className='footer__container-content-newsletter-button'>
          <button type='submit'>Submit</button>
          </div>
          </form>
          </div>
          </div>
        </div>
        </div>
        <div className='footer__container-bottom'>
        EMCMP © ALL RIGHTS RESERVED
        </div>
    </div>
  )
}

export default Footer