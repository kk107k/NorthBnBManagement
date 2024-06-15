import React, { useEffect } from 'react';
import './meeting.css'

const Meeting = () => {
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute(
      'src',
      'https://assets.calendly.com/assets/external/widget.js'
    );
    head.appendChild(script);
  }, []);
  return (
    <div>
      <div className='meeting_main_container'>        
        <h1>Book a free meeting with us</h1>
        <p>Please use the calendar to book a 30 minute private consultation on your property</p>
        </div>
        <div className='calendly-container'>
          <div class="calendly-inline-widget" data-url="https://calendly.com/kia-uae-dubai/30min?primary_color=F29267" ></div>
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
        </div>
    </div>
  );
};


export default Meeting