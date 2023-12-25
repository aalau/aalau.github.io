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

  const handleTaskUpdate = (target) => {
    // Perform some modification to the task, for example, changing a property
    let modifiedTask;
    if(target == 'Title'){modifiedTask = { ...task, Title: target.value };}
    if(target == 'Priority'){modifiedTask = { ...task, Priority: target.value };}
    if(target == 'Status'){modifiedTask = { ...task, Status: target.value };}
    if(target == 'Story'){modifiedTask = { ...task, Story: target.value };}
    if(target == 'Description'){modifiedTask = { ...task, Story: target.value };}
    // Call the updateTasks function to update the tasks array
    changeTask(modifiedTask);
  };


  return (
    <Card className='task' key={Id}>
      <span className='header'>
      <Chip className='story' label={Story+"-"+Id}  onClick={handleOpen}></Chip>
      <input className='title' type='text' placeholder='New Task' value={Title} onChange={handleTaskUpdate}/>
      </span>
        <div>
        <Select id={Priority} size='small' name="selectedPriority" defaultValue={Priority} onChange={handleTaskUpdate}>
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
            <Select id={Status} size='small' name="selectedStatus" defaultValue={Status} onChange={handleTaskUpdate}>
              <MenuItem value='BLG'>Backlog</MenuItem>
              <MenuItem value='TDO'>To Do</MenuItem>
              <MenuItem value='PRG'>In Progress</MenuItem>
              <MenuItem value='BLK'>Blocked</MenuItem>
              <MenuItem value='DON'>Done</MenuItem>
            </Select>
          </label>
          <div>
            <Typography className='description' placeholder='describe your task here...' contentEditable="true" onChange={handleTaskUpdate}>{Description}</Typography>
          </div>
          <div name='footer'>
            <Button id='deleteTask' onClick={() => deleteTask(this.Task.Id)}>Delete</Button>
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
              <input className='title' type='text' placeholder='New Task' value={Title} onChange={handleTaskUpdate}/>
              <Divider orientation="vertical" flexItem/> 
              <Select id={Priority} size='small' name="selectedPriority" defaultValue={Priority} onChange={handleTaskUpdate}>
                <MenuItem value='XPD'>EXPEDITE</MenuItem>
                <MenuItem value='PRI'>PRIORITIZE</MenuItem>
                <MenuItem value='HGH'>HIGH</MenuItem>
                <MenuItem value='MED'>MEDIUM</MenuItem>
                <MenuItem value='LOW'>LOW</MenuItem>
                <MenuItem value='DPR'>DEPRIORITIZE</MenuItem>
              </Select>
              <label>
                Status 
                <Select id={Status} size='small' name="selectedStatus" defaultValue={Status} onChange={handleTaskUpdate}>
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
