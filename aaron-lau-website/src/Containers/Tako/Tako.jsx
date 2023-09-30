import React from 'react'
import { useState, Component } from 'react';
import ReactDOM from 'react-dom/client'
import './Tako.scss'
import Task from './Scenes/Task';

const Tako = () => {
  const [tasks, setTasks] = useState(takoTaskSetup);
  const [activeIndex, setActiveIndex] = useState(0); //which task is displayed?
  const [input, setInput] = React.useState("")

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = <Task Title={input}/>;
    setTasks([...input].concat(<Task></Task>));
    setInput("");
  }
  function deleteTask(id) {
    const updatedTasks = [...tasks].filter((e) => e.id !== id)
    setTasks(updatedTasks);
  }
  
  function takoTaskSetup(){
    const newTask1 = <Task Title={'Create Full Task View'} Story={'TAKO'} key={1} Status={'PRG'} Priority={'HGH'} isActive={true}/>
    const newTask2 = <Task Title={'Color Coordinate Story'} Story={'TAKO'} key={2} Status={'TDO'} Priority={'LOW'} isActive={false}/>
    const newTask3 = <Task Title={'Build MVP with React'} Story={'TAKO'} key={3} Status={'PRG'} Priority={'PRI'} isActive={false}/>
    return Array(newTask1,newTask2,newTask3);
  }
  

  return (
    <section className='Tako'>
      <div className='app_Tako-title'>Tako: Task Management</div>
      <div className='Input'>
        <form onSubmit={handleSubmit}>
          <label className='app-Tako-label'>Start a new task: 
            <input 
            className='app_Tako-input'
            type = "text"
            placeholder='Refactor to .NET 7'
            onChange={(e) => setInput(e.target.value)}
            value = {input}
            />
          </label>
          <button className='app_Tako-button' type="submit">Takoff!</button>
        </form>
      </div>
     
      <section className='app_Tako-DisplayContent'>
        <nav className='app_Tako-ToDo'>To Do<div id='TDO'>
          {//tasks.filter(({task}) => task.Status === 'TDO')}
}
          <Task Title={'Create Full Task View'} Story={'TAKO'} key={1} Status={'PRG'} Priority={'HGH'} Description={'Build out tasks for the website project to show how '} isActive={true}>Create Full Task View</Task>
          </div>
        </nav>
        <nav className='app_Tako-InProgress'>In Progress<div id='PRG'>
        
          </div></nav>
        <nav className='app_Tako-Done'>Done<div id='DON'>
        
          </div></nav>
      </section>
      
    </section>
  )
}

export default Tako
