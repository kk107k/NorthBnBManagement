import React from 'react'
import './smallText.css'

const SmallText = ({title, text, img}) => {
  return (
    <div className='small_text_container'>
        <img src={img} />
        <h1>{title}</h1>
        <p>{text}</p>
    </div>
  )
}

export default SmallText