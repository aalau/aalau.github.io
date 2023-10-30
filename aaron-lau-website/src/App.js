import React from 'react'

import { Tako, About, Features, Blog, Projects, Resume, Header, Footer, ErrorBoundary } from './Containers';
import { Contact, Brand, Navbar } from './components';
import { BrowserRouter, Router , Routes, Route } from "react-router-dom";
import './resources';
import './App.scss';


const App = () => {
 
  return (
    <section >
      <div className='gradient_bg'>
        <Router>
          <Navbar />
          <Routes>
            {/* https://www.geeksforgeeks.org/reactjs-router/# */}
          </Routes>
        </Router>
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
      <Blog />
      {/*<Projects />*/}
      <Contact />
      </div>
      </div>
      </center>
      <Footer />
      
    </section>
  )
}

export default App