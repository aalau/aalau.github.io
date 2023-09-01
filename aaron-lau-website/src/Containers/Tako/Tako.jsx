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
      {tasks.forEach((e) => <div key={e.id}>
        <div>{e.text} <button onClick={() => deleteTask(e.id)}>X</button></div>
        
        </div> 
         )}
      <section className='DisplayContent'>
      
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