import React from 'react'
import { useState } from 'react';
import ReactDOM from 'react-dom/client'
import './Tako.scss'
//import { Task } from './Scenes';

const Tako = () => {
  const [tasks, setTasks] = React.useState([])
  const [input, setInput] = React.useState("")
  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      id: new Date().getTime(), //unique value each time its run
      text: input,
      completed: false,
    }

    setTasks([...input].concat(newTask))
    setInput("")
  }
  function deleteTask(id) {
    const updatedTasks = [...tasks].filter((e) => e.id !== id)
    setTasks(updatedTasks)
  }

  return (
    <div className='Tako'>
      <div>Tako: Task Management</div>
      <div className='Input'>
        <form onSubmit={handleSubmit}>
          <label>Start a new task: 
            <input 
            type = "text"
            placeholder='Refactor to .NET 7'
            onChange={(e) => setInput(e.target.value)}
            value = {input}
            />
          </label>
          <button className='app_Tako-button' type="submit">Takoff!</button>
        </form>
      </div>
      {tasks.map((e) => <div key={e.id}>
        <div>{e.text}</div>
        <button onClick={() => deleteTask(e.id)}>X</button>
        </div> 
         )}
        
      <div className='Kanban'>
        <div className='Backlog-column'></div>
        <div className='InProgress-column'></div>
        <div className='Blocked-column'></div>
        <div className='Done-column'></div>
      </div>
    </div>
  )
}

export default Tako