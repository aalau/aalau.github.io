import React from 'react'
import { useState } from 'react';
import './Task.scss'


const Task = () => {
  const [title, setTitle] = useState(0);
  const [description, setDescription] = useState(0);
  return (
    <div className='task'>
      <div className='title-border'>
        <input name="title"></input>
        <div className='priority'></div>
      </div>
      <div className='description-border'>
        <p className='description'>Write about your task here...</p>
      </div>
      <div className='status'>Backlog</div>
      <div className='linked-task-type'></div>
      <div className='linked-task'></div>

    </div>
  )
}

export default Task