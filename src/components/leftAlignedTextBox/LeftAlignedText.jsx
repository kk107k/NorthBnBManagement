import React from 'react'
import './leftAlignedText.css'

const LeftAlignedText = ({title, text}) => {
  return (
    <div className='left_aligned_text_container'>
        <h1>{title}</h1>
        <p>{text}</p>
    </div>
  )
}

export default LeftAlignedText