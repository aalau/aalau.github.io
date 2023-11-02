import React from 'react'
import './about.scss'
import Image from '../../resources/aaron-lau-in-center-cropped.jpg';

const About = () => {
  return (
    <div className='app_about app_flex'>
      <div className='image'>
        <img className = 'my_image' src={Image} alt='headshot profile'/>
      </div>
    </div>
  )
}

export default About