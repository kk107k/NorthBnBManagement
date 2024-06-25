import React, { useState } from 'react';
import './packages.css';

const Packages = () => {
  const [marketing, setMarketing] = useState(false);
  const [webDevelopment, setWebDevelopment] = useState(false);
  const [graphicDesign, setGraphicDesign] = useState(false);
  const [webManagement, setWebManagement] = useState(false);
  const [socialMediaMarketing, setSocialMediaMarketing] = useState(false);
  const [contentCreation, setContentCreation] = useState('');
  const [customerService, setCustomerService] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleMarketingChange = () => {
    setMarketing(!marketing);
    if (!webDevelopment && !graphicDesign && !webManagement && !socialMediaMarketing) {
      setWebDevelopment(false);
      setGraphicDesign(false);
      setWebManagement(false);
      setSocialMediaMarketing(false);
    }
  };

  const handleWebDevelopmentChange = () => {
    setWebDevelopment(!webDevelopment);
    if (!marketing && !graphicDesign && !webManagement && !socialMediaMarketing) {
      setMarketing(false);
      setGraphicDesign(false);
      setWebManagement(false);
      setSocialMediaMarketing(false);
    }
  };

  const handleGraphicDesignChange = () => {
    setGraphicDesign(!graphicDesign);
    if (!marketing && !webDevelopment && !webManagement && !socialMediaMarketing) {
      setMarketing(false);
      setWebDevelopment(false);
      setWebManagement(false);
      setSocialMediaMarketing(false);
    }
  };

  const handleWebManagementChange = () => {
    setWebManagement(!webManagement);
    if (!marketing && !webDevelopment && !graphicDesign && !socialMediaMarketing) {
      setMarketing(false);
      setWebDevelopment(false);
      setGraphicDesign(false);
      setSocialMediaMarketing(false);
    }
  };

  const handleSocialMediaMarketingChange = () => {
    setSocialMediaMarketing(!socialMediaMarketing);
    if (!marketing && !webDevelopment && !graphicDesign && !webManagement) {
      setMarketing(false);
      setWebDevelopment(false);
      setGraphicDesign(false);
      setWebManagement(false);
    }
  };

  const handleContentCreationChange = (e) => {
    setContentCreation(e.target.value);
  };

  const handleCustomerServiceChange = (e) => {
    setCustomerService(e.target.value);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const getWeightedResult = () => {
    const weightMap = {
      false: 0,
      true: 500,
    };

    const weightMap2 = {
      false: 0,
      true: 600,
    };

    const weightMap3 = {
      false: 0,
      true: 700,
    };

    const weightMap4 = {
      false: 0,
      true: 800,
    };

    const weightMapContent = {
      '10': 1000,
      '15': 1500,
      '20': 2000,
    };

    const weightMapCustomerService = {
      '15': 1500,
      '25': 2500,
    };

    const weightMapOption = {
      'option1': 300, // Adjust weights as needed
      'option2': 400,
      'option3': 500,
    };

    let totalWeight =
      weightMap[marketing] +
      weightMap2[webDevelopment] +
      weightMap3[graphicDesign] +
      weightMap4[webManagement] +
      weightMap[socialMediaMarketing];

    if (contentCreation) {
      totalWeight += weightMapContent[contentCreation];
    }

    if (customerService) {
      totalWeight += weightMapCustomerService[customerService];
    }

    if (selectedOption) {
      totalWeight += weightMapOption[selectedOption];
    }

    return `Estimated Cost: AED ${totalWeight}`;
  };

  return (
    <div className='package__container-main container' id='estimator'>
      <form action="https://formsubmit.co/19b5e0e38fedef472914ab41c836d8c0" method="POST" className='package__container-form'>
      <div className='package__container-left'>      
        <h1>Get A Price Estimate</h1>
        <b>STEP 1:</b>
        <p> Create your desired package tailored to your needs.</p>
        <b>STEP 2:</b>
        <p> Send us your desired package.</p>
        <b>STEP 3:</b>
        <p> We will get back to you within 24 hours and create a perfect package for you.</p>
        <div className='package__container-info'>
          <input type="text" name="name" placeholder='First Name:'  required/>
          
          <input type="text" name="email" placeholder='Email or Phone number:' required/>
          </div>
          <div className="contact__container-form-submit">
            <input type="hidden" name="_next" value="http://localhost:3000/contact" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="submit" value="Send Message" />
          </div>
      </div>
      
      <div className='package__container-right'>
        
          <h2>Price Calculator</h2>
          <div className="checkbox-wrapper-10">
            <input name='Marketing:' className="tgl tgl-flip" id="cb1" type="checkbox" checked={marketing} onChange={handleMarketingChange} />
            Marketing
            <label className="tgl-btn" data-tg-off="Nope" data-tg-on="Yeah!" htmlFor="cb1"></label>
          </div>
          <hr></hr>
          <div className="checkbox-wrapper-10">
            <input className="tgl tgl-flip" id="cb2" name='Web development:' type="checkbox" checked={webDevelopment} onChange={handleWebDevelopmentChange} />
            Web Development
            <label className="tgl-btn" data-tg-off="Nope" data-tg-on="Yeah!" htmlFor="cb2"></label>
          </div>
          <hr></hr>
          <div className="checkbox-wrapper-10">
            <input className="tgl tgl-flip" id="cb3" name='Graphic Design' type="checkbox" checked={graphicDesign} onChange={handleGraphicDesignChange} />
            Graphic Design
            <label className="tgl-btn" data-tg-off="Nope" data-tg-on="Yeah!" htmlFor="cb3"></label>
          </div>
          <hr></hr>
          <div className="checkbox-wrapper-10">
            <input className="tgl tgl-flip" id="cb4" name='Web Management' type="checkbox" checked={webManagement} onChange={handleWebManagementChange} />
            Website Management
            <label className="tgl-btn" data-tg-off="Nope" data-tg-on="Yeah!" htmlFor="cb4"></label>
          </div>
          <hr></hr>
          <div className="checkbox-wrapper-10">
            <input className="tgl tgl-flip" id="cb5" name='Social Media Marketing' type="checkbox" checked={socialMediaMarketing} onChange={handleSocialMediaMarketingChange}/>
            Social Media Management
            <label className="tgl-btn" data-tg-off="Nope" data-tg-on="Yeah!" htmlFor="cb5"></label>
          </div>
          <hr></hr>
          <div className="list-choice-container">
          <div className="list-choice">
            <div className='list-choice-left'>
            <div className="list-choice-title">Content Creation</div>
            <div className="list-choice-objects">
            <div className="list-choice-objects-left">
              <label>
                <input type="radio" name="contentCreation" value="10" onChange={handleContentCreationChange} />
                <span>10 videos</span>
              </label>
              <label>
                <input type="radio" name="contentCreation" value="15" onChange={handleContentCreationChange} />
                <span>15 videos</span>
              </label>
              <label>
                <input type="radio" name="contentCreation" value="20" onChange={handleContentCreationChange} />
                <span>20 videos</span>
              </label>
              </div>
            </div>
          </div>
          </div>
          <div className="list-choice">
            <div className='list-choice-right'>
            <div className="list-choice-title">Customer Service</div>
            <div className="list-choice-objects">
              <div className='list-choice-objects-right'>
              <label>
                <input type="radio" name="customerService" value="15" onChange={handleCustomerServiceChange} />
                <span>Social Media</span>
              </label>
              <label>
                <input type="radio" name="customerService" value="15" onChange={handleCustomerServiceChange} />
                <span>Call Center</span>
              </label>
              <label>
                <input type="radio" name="customerService" value="25" onChange={handleCustomerServiceChange} />
                <span>Both</span>
              </label>
              
            </div>
          </div>
          </div>
          </div>
    </div>
          <p className='package__result-container'>{getWeightedResult()}</p>
        
      </div></form>
    </div>
  );
};

export default Packages;
