import React from 'react'
import { useState, Component } from 'react';
import ReactDOM from 'react-dom/client'
import './Tako.scss'
import Task from './Scenes/Task';

const Tako = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = React.useState("")
  const [column, setColumn] = React.useState([])

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = <Task Title={input}/>;
    setTasks([...input].concat(newTask));
    setInput("");
  }
  function deleteTask(id) {
    const updatedTasks = [...tasks].filter((e) => e.id !== id)
    setTasks(updatedTasks);
  }
  function renderTasksBySwimlane(swimlane){
    return [...tasks].filter((task) => task.Status === swimlane);
  }
  function takoTaskSetup(){
    const newTask1 = <Task Title={'Create Full Task View'} Story={'TAKO'} Status={'TDO'} Priority={'HGH'}/>
    const newTask2 = <Task Title={'Color Coordinate Story'} Story={'TAKO'} Status={'TDO'} Priority={'LOW'}/>
    const newTask3 = <Task Title={'Build MVP with React'} Story={'TAKO'} Status={'PRG'} Priority={'PRI'}/>
    setTasks([...tasks].concat(newTask1))//.concat(newTask2).concat(newTask3))
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
        {takoTaskSetup()}
        <nav className='app_Tako-ToDo'>To Do<div id='TDO'>
          {renderTasksBySwimlane('TDO')}
          </div></nav>
        <nav className='app_Tako-InProgress'>In Progress<div id='PRG'>
          {renderTasksBySwimlane('PRG')}
          </div></nav>
        <nav className='app_Tako-Done'>Done<div id='DON'>
          {renderTasksBySwimlane('DON')}
          </div></nav>
      </section>
      
    </section>
  )
}

export default Tako

/* {tasks.forEach((e) => <div key={e.id}>
<div>{e.text} <button onClick={() => deleteTask(e.id)}>X</button></div>
        
</div> 
 )}
 */