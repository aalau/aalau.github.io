import React from 'react'

import { Tako, About, Features, Resume, Header, Footer } from '../Containers';
import { Contact, Brand, Navbar } from '../components';
import './Home.scss';


const Home = () => {
 
  return (
    <div>
        <div className='gradient_bg'>
          <Navbar />
          <Brand />
        </div>
        <center>
          <div className='page'>
            <div className='top'>
              <Header />
            </div>
            <Resume />
            <Tako />
            <div className='foot'>
              <Contact />
            </div>
          </div>
        </center>
        <Footer />
    </div>
  )
}

export default Home

