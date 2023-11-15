import React from 'react'
import { Home } from './home';
import { Blog, Projects, Tako } from './Containers';
import { Article, Contact, Brand, Navbar } from './components';
import { Routes, Route, Link } from 'react-router-dom';
//import './resources';
import './App.scss';


const App = () => {
 
  return (
    <div>
     
     <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/Tako" element={<Tako />}>
        </Route>
        <Route path="/Projects" element={<Projects />}>
        </Route>
        <Route path="/Blog" element={<Blog />}>
        </Route>
        <Route path="/Blog/Article" element={<Article />}>
        </Route>
        <Route path="/Contact" element={<Contact />}>
        </Route>
    </Routes>
    </div>
      
  )
}

export default App