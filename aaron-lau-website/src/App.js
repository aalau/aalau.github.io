import React from 'react'

import { Tako, About, Features, Blog, Projects, Resume, Header, Footer } from './Containers';
import { Contact, Brand, Navbar } from './components';


const App = () => {
  return (
    <section >
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
      <hr></hr>
      <Tako />
      <hr></hr>
      <Projects />
      <div className='foot'>
      <Contact />
      <Blog />
      <Footer />
      </div>
      </div>
      </center>
      
    </section>
  )
}

export default App