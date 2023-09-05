import React from 'react'
import { useState, Component } from 'react';
import ReactDOM from 'react-dom/client'
import './Tako.scss'
//import { Task } from './Scenes';

const Tako = () => {
  const [tasks, setTasks] = React.useState([])
  const [input, setInput] = React.useState("")
  const [column, setColumn] = React.useState([])
  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      id: new Date().getTime(), //unique value each time its run
      value: input
    };

    setTasks([...input].concat(newTask))
    setInput("")
  }
  function deleteTask(id) {
    //[...tasks].filter((e) => e.id === id ).newTask = null;
    const updatedTasks = [...tasks].filter((e) => e.id !== id)
    setTasks(updatedTasks);
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
      {tasks.forEach((e) => <div key={e.id}>
        <div>{e.text} <button onClick={() => deleteTask(e.id)}>X</button></div>
        
        </div> 
         )}
      <section className='app_Tako-DisplayContent'>
        <nav className='app_Tako-ToDo'>To Do</nav>
        <nav className='app_Tako-InProgress'>In Progress</nav>
        <nav className='app_Tako-Done'>Done</nav>
      </section>
      
    </section>
  )
}

export default Tako

/*
<LeafList Kanban>
          <Leaf Backlog></Leaf>
          <Leaf InProgress></Leaf>
          <Leaf Done></Leaf>
        </LeafList>

*/