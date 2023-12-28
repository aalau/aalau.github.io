import React from 'react';
import './navbar.scss';
import Image from '../../resources/A.png';
import { Link } from  'react-router-dom';
import Contact from '../contact/Contact';

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
        <Link to="/">
          <img className='logo' src={Image} alt="logo" />
        </Link>
      </div>
         <ul id="navigation" className='app_navbar-links'>
             <li className='app_flex p-text'>
                 <Link to="/Tako">Tako</Link>
             </li>
             {/*<li className='app_flex p-text'>
                 <Link to="/Projects">Projects</Link>
             </li>
             <li className='app_flex p-text'>
                 <Link to="/Blog">Blog</Link>
  </li>*/}
             <li className='app_flex p-button'>
                <Contact className='app_navbar-button'></Contact>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar