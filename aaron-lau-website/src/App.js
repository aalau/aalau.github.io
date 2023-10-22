import React from 'react'

import { Tako, About, Features, Blog, Projects, Resume, Header, Footer, ErrorBoundary } from './Containers';
import { Contact, Brand, Navbar } from './components';
//import './resources';
import './App.scss';


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
      <Tako />
      {/*<Projects />*/}
      <div className='foot'>
      <Blog />
      <Contact />
      </div>
      </div>
      </center>
      <Footer />
      
    </section>
  )
}

export default App