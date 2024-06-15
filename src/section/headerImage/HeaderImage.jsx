import React from 'react';
import './headerImage.css';
import { headerImage } from '../../assets';

const HeaderImage = ({ title }) => {
  return (
    <div className='headerImage__container'>
      <div className='headerImage__container-content'>
        <img src={headerImage} alt='Header' />
        <div className='headerImage__container-title'>
          <h1 className='image-title'>{title}</h1>        
        </div>
      </div>
    </div>
  );
}

export default HeaderImage;
