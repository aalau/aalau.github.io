import React, { Component, useContext, useEffect, useId } from 'react';
import { useState } from 'react';
import './Task.scss'
import Chip from '@mui/material/Chip';
import Modal from '@mui/material/Modal';
import Drawer from '@mui/material/Drawer';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography'; 
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Stack from '@mui/material/Stack';
import { Divider } from '@mui/material';

export default function Task({task, deleteTask, changeTask }){
  const { Id, Title, Story, Status, Priority, Description} = task;
  // on open, show full task view
  // on drag, highlight swimlanes and hide other tasks
  // on release (of drag), set task status to swimlane task ended in, or if outside reset to last position
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [detailedDescription, setDetailedDescription] = useState(Description);

  const handleOpen = () => {
    setDrawerOpen(true);
  };

  const handleClose = () => {
    setDrawerOpen(false);
  };

  const handleDetailedDescriptionChange = (value) => {
    setDetailedDescription(value);
  };

  const handleTaskUpdate = (e) => {
    console.debug(e);
    console.debug(e.target);
    changeTask(e);
    // Perform some modification to the task, for example, changing a property
    //changeTask(task => {return{...task,[event.target.name]: event.target.value}})
    //changeTask(task.Id,event);
  };

  const handleTitleChange = (e) => {
    const newTask = {'Id':Id, 'Title':e.target.value, 'Story':Story, 'Status':Status, 'Priority':Priority, 'Description':Description}
    changeTask(newTask)
  }
  const handlePriorityChange = (e) => {
    const newTask = {'Id':Id, 'Title':Title, 'Story':Story, 'Status':Status, 'Priority':e.target.value, 'Description':Description}
    changeTask(newTask)
  }
  const handleStatusChange = (e) => {
    const newTask = {'Id':Id, 'Title':Title, 'Story':Story, 'Status':e.target.value, 'Priority':Priority, 'Description':Description}
    changeTask(newTask)
  }
  const handleDescriptionChange = (e) => {
    const newTask = {'Id':Id, 'Title':Title, 'Story':Story, 'Status':Status, 'Priority':Priority, 'Description':e.target.value}
    changeTask(newTask)
  }

  return (
    <Card className='task' key={Id}>
      <span className='header'>
      <Chip className='story' label={Story+"-"+Id}  onClick={handleOpen}></Chip>
      <input className='title' type='text' placeholder='New Task' value={Title} onChange={handleTitleChange}/>
      </span>
        <div>
        <Select id={Priority} size='small' name="selectedPriority" defaultValue={Priority} onChange={handlePriorityChange}>
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
            <Select id={Status} size='small' name="selectedStatus" defaultValue={Status} onChange={handleStatusChange}>
              <MenuItem value='BLG'>Backlog</MenuItem>
              <MenuItem value='TDO'>To Do</MenuItem>
              <MenuItem value='PRG'>In Progress</MenuItem>
              <MenuItem value='BLK'>Blocked</MenuItem>
              <MenuItem value='DON'>Done</MenuItem>
            </Select>
          </label>
          <div>
            <Typography className='description' placeholder='describe your task here...' contentEditable="true" onChange={handleDescriptionChange}>{Description}</Typography>
          </div>
          <div name='footer'>
            <Button id='deleteTask' onClick={deleteTask}>Delete</Button>
          </div>
          </div>
          </div>

          <Drawer className='drawer' anchor="bottom" open={drawerOpen} onClose={handleClose} PaperProps={{
            sx: { left: '20%',
              right: '20%',
              top: '50%'},
            square: false,
          }}>
          <div>
            <Stack direction="row">
              <Chip className='story' label={Story+"-"+Id}  onClick={handleClose} flexItem></Chip>
              <input className='title' type='text' placeholder='New Task' value={Title} onChange={handleTitleChange}/>
              <Divider orientation="vertical" flexItem/> 
              <Select id={Priority} size='small' name="selectedPriority" defaultValue={Priority} onChange={handlePriorityChange}>
                <MenuItem value='XPD'>EXPEDITE</MenuItem>
                <MenuItem value='PRI'>PRIORITIZE</MenuItem>
                <MenuItem value='HGH'>HIGH</MenuItem>
                <MenuItem value='MED'>MEDIUM</MenuItem>
                <MenuItem value='LOW'>LOW</MenuItem>
                <MenuItem value='DPR'>DEPRIORITIZE</MenuItem>
              </Select>
              <label>
                Status 
                <Select id={Status} size='small' name="selectedStatus" defaultValue={Status} onChange={handleStatusChange}>
                  <MenuItem value='BLG'>Backlog</MenuItem>
                  <MenuItem value='TDO'>To Do</MenuItem>
                  <MenuItem value='PRG'>In Progress</MenuItem>
                  <MenuItem value='BLK'>Blocked</MenuItem>
                  <MenuItem value='DON'>Done</MenuItem>
                </Select>
              </label>
            </Stack>
            <Typography variant="h6">Task Details</Typography>
            <ReactQuill value={detailedDescription} onChange={handleDetailedDescriptionChange} />
            <Divider orientation="vertical" flexItem/>
          </div>
        </Drawer>
    </Card>
  )
};
