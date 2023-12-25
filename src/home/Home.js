import React from 'react'

import { Tako, About, Features, Resume, Header, Footer, Projects } from '../Containers';
import { Contact, Brand, Navbar } from '../components';
import './Home.scss';
import { Divider } from '@mui/material';


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
            <Divider sx={{ borderRadius: 2, margin: 7 }}/>
            <Tako />
            <Divider sx={{ borderRadius: 2, margin: 7 }} />
            <Projects />
          </div>
        </center>
        <Footer />
    </div>
  )
}

export default Home

