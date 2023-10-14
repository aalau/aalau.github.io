import React, { Component, useContext, useId } from 'react';
import { useState, useReducer, Fragment } from 'react';
import { TasksContext, TasksDispatchContext } from './TasksContext.jsx';
import './Task.scss';
import Draggable from 'react-draggable';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'; 

export default function Task({ task }) {
  const [focus, setFocus] = useState(false);
  const handleOpen = () => setFocus(true);
  const handleClose = () => setFocus(false);
  const dispatch = useContext(TasksDispatchContext);

  const [title, setTitle] = useState(task.Title);
  const [description, setDescription] = useState(task.Description);
  const [status, setStatus] = useState('BLG');
  const [priority, setPriority] = useState('MED');
  const key = task.Key;

  let taskStatus = (
    <>
      <label htmlFor={task.Status}>
        Status 
        <select value={task.Status} name="selectedStatus" defaultValue='TDO' 
        onChange={setStatus}>
          <option value='BLG'>Backlog</option>
          <option value='TDO'>To Do</option>
          <option value='PRG'>In Progress</option>
          <option value='BLK'>Blocked</option>
          <option value='DON'>Done</option>
        </select>
      </label>
    </>
  );

  let taskPriority = (
    <>
      <label htmlFor={task.Priority}>
        <select value={task.Priority} name="selectedPriority" defaultValue='MED' onChange={setPriority}>
          <option value='PRI'>PRIORITIZE</option>
          <option value='XPD'>EXPEDITE</option>
          <option value='HGH'>HIGH</option>
          <option value='MED'>MEDIUM</option>
          <option value='LOW'>LOW</option>
          <option value='DPR'>DEPRIORITIZE</option>
        </select>
      </label>
    </>
  );

  let taskDescription = (
    <>
      <textarea name='selectedDescription' value={task.Description} onChange={setDescription}></textarea>
    </>
  );

  let taskContent
  if (focus) {
    taskContent = (
      <>
        <div value={task.Title} ></div>
        <button onClick={() => setFocus(false)}>
          Edit
        </button>
        {taskStatus}
        {taskDescription}
        {taskPriority}
      </>
    )
  } else {
    taskContent = (
      <>
        <div className='Tako-Task-clickable' onClick={setFocus(true)}>
        {task.text}
        </div>
      </>
    );


  return (
    <>
    <button onClick={handleOpen}>{task.Story}-{task.Key}</button>
    </>
  );
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function ModalTask({ Title, setTitle, Story, Key, Description, setDescription, Status, setStatus, Priority, setPriority}){
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return(
  <Fragment>
    <button onClick={handleOpen}>{Title}</button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
          <nav>{Story}-{Key}</nav>
          <Typography id="modal-modal-title" variant="h6" component="h2" onChange={setTitle}>
            {Title}
          </Typography>
          </div> 
          <nav className='statusStyle'>
            <select value={Status} name="selectedStatus" defaultValue='TDO' onChange={setStatus}>
              <option value='BLG'>Backlog</option>
              <option value='TDO'>To Do</option>
              <option value='PRG'>In Progress</option>
              <option value='BLK'>Blocked</option>
              <option value='DON'>Done</option>
            </select>
          </nav>
          <div>
            <select value={Priority} name="selectedPriority" defaultValue='MED' onChange={setPriority}>
            <option value='PRI'>PRIORITIZE</option>
            <option value='XPD'>EXPEDITE</option>
            <option value='HGH'>HIGH</option>
            <option value='MED'>MEDIUM</option>
            <option value='LOW'>LOW</option>
            <option value='DPR'>DEPRIORITIZE</option>
            </select>
          </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} onChange={setDescription}>
            {Description}
          </Typography>
        </Box>
    </Modal>
  </Fragment>
  )
};



function testTask({ task, onChange, onDelete }) {
  let taskContent;
  if (focus) {
    taskContent = (
      <Fragment>
        <input
          value={task.Title}
          onChange={e => {
            onChange({
              ...task,
              Title: e.target.value
            });
          }} />
        <button onClick={() => setFocus(false)}>
          Save
        </button>
      </Fragment>
    );
  } else {
    taskContent = (
      <>
        {task.Title}
        <button onClick={() => setFocus(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={e => {
          onChange({
            ...task,
            done: e.target.checked
          });
        }}
      />
      {taskContent}
      <button onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </label>
  );
  }
};



//TODO: 
    // 1. setup delete task https://stackoverflow.com/questions/43230622/reactjs-how-to-delete-item-from-list
    // 2. Render Tasks in Tako using https://react.dev/learn/rendering-lists#rendering-data-from-arrays and perhaps https://react.dev/learn/render-and-commit or https://www.codevertiser.com/editable-text-field-in-table-using-reactjs/
    // 3. Create Example tasks for each project
    // 4. Create new function in Task reflected in Tako just like delete task that will change which swimlane a task appears in when you change it's status, and vice-versa
    // 4.1 draggable? https://medium.com/the-andela-way/react-drag-and-drop-7411d14894b9 
    // 5. Finish Project view?
    // 6. When switching projects, have a new "story" swimlane appear (or switched to) which shows the tasks for that project
    // https://medium.com/swlh/usereducer-form-example-16675fa60229
    // 7. customizable status by project {draft, in progress, waiting for approval, changes requested, approved, live, archived, do not use, no status}, move progress to new variable that logs work/time spent/ progress bar; 