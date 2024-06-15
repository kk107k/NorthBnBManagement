import React from 'react'
import './contactPageForm.css'

const ContactPageForm = () => {
  return (
    <div className='contact_page__container'>
      <form action="https://formsubmit.co/19b5e0e38fedef472914ab41c836d8c0" method="POST" className='contact_page__container-form'>
      <div className="contact_page__container-form-contents">
      <div className="contact_page__container-form-title">
        <h2>We Love to Hear From You</h2>
        <p>Please call or email contact form and we will be happy to assist you.</p>
      </div>
      <div className="contact_page__container-form-inputs">
      <div className="contact_page__container-form-name">
      <input type="text" name="name" placeholder='First Name:'  required/>
      <input type="text" name="lastName" placeholder='Last Name:' />
      </div>
      <div className="contact_page__container-form-contact_info">
      <input type="email" name="email" placeholder='Your Email:' required/>
      <input type="number" name="phone" placeholder='Your Phone:'/>
      </div>
      <div className="contact_page__container-form-company">
      <input type="text" name="company" placeholder='Your Company:' />
      <input type="text" name="subject" placeholder='Subject:' />
        </div>
      
      <div className='contact_page__container-form-message'>
      <textarea name="message" placeholder='Your Message' required/>
      </div>
      
      <div className="contact_page__container-form-submit">
      
      <input type="hidden" name="_next" value="http://localhost:3000/contact"></input>
      <input type="hidden" name="_captcha" value="false"></input>
      <input type="submit" value="Send message" />
      </div>
      </div>
      </div>
    </form>
    </div>
  )
}

export default ContactPageForm