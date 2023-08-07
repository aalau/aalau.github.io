import React from 'react'

import { Tako, About, Features, Blog, Projects, Resume, Header, Footer } from './Containers';
import { Contact, Brand, Navbar } from './components';


const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
        <Brand />
      </div>
      <center>
      <div className='top'>
      <Header />
      </div>
      <Resume />
      <hr></hr>
      <Tako />
      <hr></hr>
      <Projects />
      <Contact />
      <Blog />
      </center>
      <Footer />
    </div>
  )
}

export default App