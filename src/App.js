import React from 'react'

import { Tako, About, Features, Blog, Projects, Resume, Header, Footer, ErrorBoundary } from './Containers';
import { Contact, Brand, Navbar } from './components';
import { BrowserRouter, Router , Routes, Route } from "react-router-dom";
//import './resources';
import './App.scss';


const App = () => {
 
  return (
    <section >
      <div className='gradient_bg'>
        {/*
        <Router>
          
          <Routes>
            <Route exact path='/' element={< App />}></Route> 
            <Route exact path='/projects' element={< Projects />}></Route> 
            <Route exact path='/blog' element={< Blog />}></Route> 
             https://www.geeksforgeeks.org/reactjs-router/# 
          </Routes>
        </Router>
        */}
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
      {/* These will become their own pages.
      <Blog />
      <Projects />*/}
      <Contact />
      </div>
      </div>
      </center>
      <Footer />
      
    </section>
  )
}

export default App