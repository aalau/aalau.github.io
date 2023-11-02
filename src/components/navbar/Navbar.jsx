import React from 'react';
import './navbar.scss';
import Image from '../../resources/A.png';
import { Link } from  'react-router-dom';

const element = document.getElementById("Contact");
const links = ['projects','blog'];

const handleClick = () => {
  if(element != null){
    element.scrollIntoView({ behavior: "smooth", block: "end" })
  }
  else{
    console.log("Connect!")
  }
}


const Navbar = () => {
  return (
    <nav className='app_navbar'>
      <div className='app_navbar-logo'>
        <img className='logo' src={Image} alt="logo" />
      </div>
      <ul className='app_navbar-links'>
        {links.map((item) => 
        (<li className='app_flex p-text'
        key={`link-${item}`}>
          <div />
          <a href={`#${item}`}>{item}</a>
        </li>
        ))}
        <li>
          <button className='app_navbar-button' onClick={handleClick}>Connect</button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar