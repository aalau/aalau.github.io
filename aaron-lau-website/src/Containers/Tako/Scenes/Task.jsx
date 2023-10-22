import React, { Component, useContext, useEffect, useId } from 'react';
import { useState } from 'react';
import './Task.jsx';
import './Task.scss';
import Draggable from 'react-draggable';

export default function Task({task}, deleteTask, changeTask){
  const { Id, Title, Story, Status, Priority, Description} = task;
  
  return (
      <div  className='Tako' key={Id}>
      <div className='header'>
      <button>{Story}-{Id}</button>
      <input className='title' type='text' placeholder='New Task' value={Title} onChange={changeTask}/>
      <select id={Priority} name="selectedPriority" defaultValue='MED' onChange={changeTask}>
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
          <select id={Status} name="selectedStatus" defaultValue='TDO' onChange={changeTask}>
            <option value='BLG'>Backlog</option>
            <option value='TDO'>To Do</option>
            <option value='PRG'>In Progress</option>
            <option value='BLK'>Blocked</option>
            <option value='DON'>Done</option>
          </select>
        </label>
        <div>
          <p className='description' placeholder='describe your task here...' contentEditable="true" onChange={changeTask}>{Description}</p>
        </div>
        <div name='footer'>
          <button id='deleteTask' onClick={deleteTask}>Delete</button>
        </div>
      </div>
      </div>
    
  )
};
