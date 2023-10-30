import React from 'react';
import './navbar.scss';
import Image from '../../resources/A.png';
import App from '../../App.js'

const element = document.getElementById("Contact");


const Navbar = () => {
  return (
    <nav className='app_navbar'>
      <div className='app_navbar-logo'>
        <img className='logo' src={Image} alt="logo" />
      </div>
      <ul className='app_navbar-links'>
        {['projects','writing']
        .map((item) => 
        (<li className='app_flex p-text'
        key={`link-${item}`}>
          <div />
          <a href={`#${item}`}>{item}</a>
        </li>
        ))}
        <li>
          <button className='app_navbar-button' onClick=
          {
            //() => console.log('contact!')
            
            () => element.scrollIntoView({ behavior: "smooth", block: "end" })
          }>Connect</button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar