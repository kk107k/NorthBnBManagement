import React from 'react'
import './contactUs.css'
import { phoneImg, emailImg } from '../../../assets'


const ContactUs = () => {
  return (
    <div className='contact__container-main'>
      <div className='contact__container'>
        <div className='contact__container-left'>
          <div className='contact__container-left_title'>          
            <h1>Get in touch with us</h1>
            <p>Please dont hesitate to drop in an enquiry and we will contact you as soon as possible!</p>
          </div>
          <div className='contact__container-left-details'>
            <a href='tel:+971-58-5885892'>
            <img src={phoneImg} alt="" />
            <p>+97158-588-5892</p>
            </a> 
            </div>
          <div className='contact__container-left-details'> 
            <a href='mailto:marketech@gmail.com'>
            <img src={emailImg} alt="" />
            <p>enquiry@marketech.com</p>
            </a>
            
            </div>
         
        </div>
        <div className='contact__container-right'>
        <form action="https://formsubmit.co/19b5e0e38fedef472914ab41c836d8c0" method="POST" className='contact__container-form'>
      <div className="contact__container-form-contents">
      <div className="contact__container-form-inputs">
      <div className="contact__container-form-name">
      <input type="text" name="name" placeholder='First Name:'  required/>
      <input type="text" name="lastName" placeholder='Last Name:' />
      </div>
      <div className="contact__container-form-contact_info">
      <input type="email" name="email" placeholder='Your Email:' required/>
      <input type="tel" name="phone" pattern="[0-9]{9}" placeholder="+971" maxlength="9"/>     
       </div>
      <div className='contact__container-form-message'>
      <textarea name="message" placeholder='Your Message' required/>
      </div>
      
      <div className="contact__container-form-submit">
      
      <input type="hidden" name="_next" value="http://localhost:3000/contact"></input>
      <input type="hidden" name="_captcha" value="false"></input>
      <input type="submit" value="Send message" />
      </div>
      </div>
      </div>
    </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs