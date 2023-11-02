import React, { useState } from 'react';
import './TaskForm.scss';

function TaskForm({ input, addTask }) {
    const [task, setTask] = useState({ title: input, description: '', status: 'BLG', priority: 'LOW' });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addTask(task); // Pass the new task to the parent component
      setTask({ title: '', description: '', status: 'BLG', priority: 'LOW' }); // Clear the form
    };
  
    return (
      <form className='app_TaskForm' onSubmit={handleSubmit}>
        
        <label className='app_TaskForm-title'>Task:
        <input 
          className='app_TaskForm-input'
          type="text"
          placeholder="Task title"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
        
        <select className='app_TaskForm-select' id={task.status} name="selectedStatus" defaultValue='BLG' onChange={(e) => setTask({ ...task, status: e.target.value })}>
            <option value='BLG'>Backlog</option>
            <option value='TDO'>To Do</option>
            <option value='PRG'>In Progress</option>
            <option value='BLK'>Blocked</option>
            <option value='DON'>Done</option>
        </select>
        </label>
        <div>
        <textarea
          className='app_TaskForm-textarea'
          placeholder="Task description"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />
        </div>
        <div className='app_TaskForm-Footer'>
        <select className='app_TaskForm-select' id={task.priority} name="selectedPriority" defaultValue='LOW' onChange={(e) => setTask({ ...task, priority: e.target.value })}>
            <option value='XPD'>EXPEDITE</option>
            <option value='PRI'>PRIORITIZE</option>
            <option value='HGH'>HIGH</option>
            <option value='MED'>MEDIUM</option>
            <option value='LOW'>LOW</option>
            <option value='DPR'>DEPRIORITIZE</option>
        </select>
        <button className='app_TaskForm-Button' type="submit">Create Task</button>
        </div>
        
      </form>
    );
  }
  export default TaskForm;