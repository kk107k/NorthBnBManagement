import React from 'react';
import './contactPageInfo.css';
import location from '../../../../assets/location contact us.png';
import phone from '../../../../assets/phone call contact us.png';
import email from '../../../../assets/mail contact us.png';

const ContactPageInfo = () => {
    const infoData = [
        {
            link: "tel:+971-4-5646090",
            img: phone,
            title: 'Contact Details',
            text: '+971-4-56460901',
        },
        {
            id: 'email',
            link: "mailto:inquiry@emcmp.com",
            img: email,
            title: 'Email',
            text: 'inquiry@emcmp.com',
        },
        {
            link: "https://www.google.com/maps/dir//Al+Safa+Buildings+-+Sheikh+Zayed+Rd+-+Dubai+-+United+Arab+Emirates/@25.1776728,55.2106686,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3e5f69e8650a6b71:0x3e8f3a65ac153a10!2m2!1d55.2456883!2d25.1775992",
            img: location,
            title: 'Location',
            text: "Office 123, 1st Floor, Al Mardoof Building, Al Safa 1, Sheikh Zayed Road, Dubai, United Arab Emirates"
        },
    ];

    return (
        <div className='contact-page-info_container'>
            {infoData.map((item, index) => (
                <a href={item.link} id={item.id} key={item.title + index} className="contact-page-info_item" >
                    <img src={item.img} alt="img" />
                    <h1>{item.title}</h1>
                    <p>{item.text}</p>
                </a>
            ))}
        </div>
    );
};

export default ContactPageInfo;
