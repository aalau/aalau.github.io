import React, { Component, useContext, useEffect, useId } from 'react';
import { useState } from 'react';
import './Task.scss';
import Chip from '@mui/material/Chip';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography'; 
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';

export default function Task({task}, deleteTask, changeTask){
  const { Id, Title, Story, Status, Priority, Description} = task;
  // on open, show full task view
  // on drag, highlight swimlanes and hide other tasks
  // on release (of drag), set task status to swimlane task ended in, or if outside reset to last position
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.debug('inside of a task');

  return (
    <Card className='task' key={Id}>
      <span className='header'>
      <Chip className='story' label={Story+"-"+Id}  onClick={handleOpen}></Chip>
      <input className='title' type='text' placeholder='New Task' value={Title} onChange={() => changeTask}/>
      </span>
        <div>
        <Select id={Priority} size='small' name="selectedPriority" defaultValue={Priority} onChange={changeTask}>
          <MenuItem value='XPD'>EXPEDITE</MenuItem>
          <MenuItem value='PRI'>PRIORITIZE</MenuItem>
          <MenuItem value='HGH'>HIGH</MenuItem>
          <MenuItem value='MED'>MEDIUM</MenuItem>
          <MenuItem value='LOW'>LOW</MenuItem>
          <MenuItem value='DPR'>DEPRIORITIZE</MenuItem>
        </Select>
        <div className='body'>
          <label>
            Status 
            <Select id={Status} size='small' name="selectedStatus" defaultValue={Status} onChange={changeTask}>
              <MenuItem value='BLG'>Backlog</MenuItem>
              <MenuItem value='TDO'>To Do</MenuItem>
              <MenuItem value='PRG'>In Progress</MenuItem>
              <MenuItem value='BLK'>Blocked</MenuItem>
              <MenuItem value='DON'>Done</MenuItem>
            </Select>
          </label>
          <div>
            <Typography className='description' placeholder='describe your task here...' contentEditable="true" onChange={changeTask}>{Description}</Typography>
          </div>
          <div name='footer'>
            <Button id='deleteTask' onClick={() => deleteTask(this.Task.Id)}>Delete</Button>
          </div>
          </div>
          </div>
    </Card>
  )
};


  /*
    <div  className='task' key={Id}>
      <div className='header'>
      <button>{Story}-{Id}</button>
      <input className='title' type='text' placeholder='New Task' value={Title} onChange={() => changeTask(this.Task.Id,)}/>
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
          <button id='deleteTask' onClick={() => deleteTask(this.Task.Id)}>Delete</button>
        </div>
      </div>
      </div>
  */
