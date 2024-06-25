import React from 'react'
import './bigText.css'

const BigText = ({title, text}) => {
  return (
    <div className='big_text_container'>
        <h1>{title}</h1>
        <p>{text}</p>
    </div>
  )
}

export default BigText