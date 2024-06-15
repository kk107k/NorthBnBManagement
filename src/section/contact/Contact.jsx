import React from 'react'
import './contact.css'
import { infoData } from '../../constants'

const Contact = () => {
  return (
    <div className='contact-page_container-main'>
      <div className='contact-page-info_container'>
            {infoData.map((item, index) => (
                <a href={item.link} id={item.id} key={item.title + index} className="contact-page-info_item" >
                    <video src={item.img} alt="video" autoPlay loop muted  />
                    <h1>{item.title}</h1>
                    <p>{item.text}</p>
                </a>
            ))}
        </div>
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
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.3126911129975!2d55.28181217394948!3d25.226391030520336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f698983d196a1%3A0x66c0650dd26e87da!2sFairmont%20Dubai!5e0!3m2!1sen!2sae!4v1705001385701!5m2!1sen!2sae" width="100%" height="350" style={{ border: 'none' }} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Contact