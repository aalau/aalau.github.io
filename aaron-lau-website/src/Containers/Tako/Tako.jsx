import React from 'react'
import { useState, useReducer, Component } from 'react';
import ReactDOM from 'react-dom/client'
import './Tako.scss'
import Task,{ModalTask} from './Scenes/Task';
import TaskReducer from './Scenes/taskReducer';

const Tako = () => {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  const currentTask = tasks.find((t) => t.id === tasks.seletedId);

  return (
    <section className='Tako'>
      <div className='app_Tako-title'>Tako: Task Management</div>
      <div className='Input'>
        <AddTask onAddTask={handleAddTask}/>
      </div>
     
      
    </section>
  )
}

export default Tako

/*
<section className='app_Tako-DisplayContent'>
        <nav className='app_Tako-ToDo'>To Do<div id='TDO'>
          {
}
          <ModalTask Title={'Create Full Task View'} Story={'TAKO'} key={1} Status={'PRG'} Priority={'HGH'} Description={'Build out tasks for the website project to show how '} isActive={true}>Create Full Task View</ModalTask>
          </div>
        </nav>
        <nav className='app_Tako-InProgress'>In Progress<div id='PRG'>
          <Task Title={'Build MVP with React'} Story={'TAKO'} key={3} Status={'PRG'} Priority={'PRI'} isActive={false}/>
          </div></nav>
        <nav className='app_Tako-Done'>Done<div id='DON'>
        
          </div></nav>
      </section>

*/