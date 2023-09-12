import React, { Component, useContext, useId } from 'react';
import { useState } from 'react';
import './Task.jsx';
import './Task.scss';
import Draggable from 'react-draggable';

export default function Task(){
  const key = useId;
  const [Story, setStory] = useState('STY')
  const [Title, setTitle] = useState('New Task');
  const [Description, SetDescription] = useState('');
  const [Status, setStatus] = useState('TDO');
  const [Priority, setPriority] = useState('MED')
  
  const handleTitleInput = e => {
    setTitle(e.target.value);
  };
  const handleDescriptionSubmit = e => {
    SetDescription(e.target.value);
  };
  

  return (
    
      <div  className='Tako' key={key}>
      <div className='header'>
      <button>{Story}-{key}</button>
      <input className='title' type='text' placeholder='New Task' onChange={handleTitleInput} value={Title} />
      <select id={Priority} name="selectedPriority" defaultValue='MED'>
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
          <select id={Status} name="selectedStatus" defaultValue='TDO'>
            <option value='BLG'>Backlog</option>
            <option value='TDO'>To Do</option>
            <option value='PRG'>In Progress</option>
            <option value='BLK'>Blocked</option>
            <option value='DON'>Done</option>
          </select>
        </label>
        <div>
          <p className='description' placeholder='describe your task here...'>{Description}</p>
        </div>
      </div>
      </div>
    
  )
};
