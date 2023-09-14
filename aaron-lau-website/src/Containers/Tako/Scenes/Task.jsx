import React, { Component, useContext, useId } from 'react';
import { useState } from 'react';
import './Task.jsx';
import './Task.scss';
import Draggable from 'react-draggable';

export default function Task(){
  const key = useId();
  const [Story, setStory] = useState('STY');
  const [Title, setTitle] = useState('New Task');
  const [Description, SetDescription] = useState('');
  const [Status, setStatus] = useState('TDO');
  const [Priority, setPriority] = useState('MED');
  
  const handleTitleInput = e => {
    setTitle(e.target.value);
  };
  const handleDescriptionSubmit = e => {
    SetDescription(e.target.value);
  };
  const handleStatusChange = e => {
    setStatus(e.target.value);
  };
  const handlePriorityChange = e => {
    setPriority(e.target.value);
  };
  const deleteTask = ({
    //TODO: 
    // 1. setup delete task https://stackoverflow.com/questions/43230622/reactjs-how-to-delete-item-from-list
    // 2. Render Tasks in Tako using https://react.dev/learn/rendering-lists#rendering-data-from-arrays and perhaps https://react.dev/learn/render-and-commit
    // 3. Create Example tasks for each project
    // 4. Create new function in Task reflected in Tako just like delete task that will change which swimlane a task appears in when you change it's status, and vice-versa
    // 5. Finish Project view?
    // 6. When switching projects, have a new "story" swimlane appear (or switched to) which shows the tasks for that project
  });
  

  return (
    
      <div  className='Tako' key={key}>
      <div className='header'>
      <button>{Story}-{key}</button>
      <input className='title' type='text' placeholder='New Task' onChange={handleTitleInput} value={Title} />
      <select id={Priority} name="selectedPriority" defaultValue='MED' onChange={handlePriorityChange}>
        <option value='XPD'>EXPEDITE</option>
        <option value='PRI'>PRIORITIZE</option>
        <option value='HGH'>HIGH</option>
        <option value='MED'>MEDIUM</option>
        <option value='LOW'>LOW</option>
        <option value='DPR'>DEPRIORITIZE</option>
      </select>
      </div>
      <div className='body'>
        <label htmlFor={Status}>
          Status 
          <select id={Status} name="selectedStatus" defaultValue='TDO' onChange={handleStatusChange}>
            <option value='BLG'>Backlog</option>
            <option value='TDO'>To Do</option>
            <option value='PRG'>In Progress</option>
            <option value='BLK'>Blocked</option>
            <option value='DON'>Done</option>
          </select>
        </label>
        <div>
          <p className='description' placeholder='describe your task here...' onChange={handleDescriptionSubmit}>{Description}</p>
        </div>
        <div name='footer'>
          <button id='deleteTask' onClick={deleteTask}>Delete</button>
        </div>
      </div>
      </div>
    
  )
};
