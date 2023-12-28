import React from 'react'
import { Home } from './home';
import { TakoFull, ProjectsFull, BlogFull} from './Containers';
import { Article } from './components';
import { Routes, Route, Link } from 'react-router-dom';
//import './resources';
import './App.scss';


const App = () => {
 
  return (
    <div>
     
     <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/Tako" element={<TakoFull />}>
        </Route>
        <Route path="/Projects" element={<ProjectsFull />}>
        </Route>
        <Route path="/Blog" element={<BlogFull />}>
        </Route>
        <Route path="/Blog/Article" element={<Article />}>
        </Route>
    </Routes>
    </div>
      
  )
}

export default App