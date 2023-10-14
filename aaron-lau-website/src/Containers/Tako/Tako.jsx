import { useState, useReducer } from 'react';
import './Tako.scss'
import { TasksProvider } from './Scenes/TasksContext';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'; 
import AddTask from './Scenes/AddTask';
import TaskList from './Scenes/TaskList';

const Tako = () => {
  const [swimlanes, setSwimlanes] = useState({
    'BLG': "Backlog",
    'TDO': "To Do",
    'PRG': "In Progress",
    'BLK': "Blocked",
    'DON': "Done"
  });
  
  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <TasksProvider>
        <div className='app_Tako-title'>Tako: Task Management</div>
        <AddTask />
        <TaskList />
      </TasksProvider>
    </ErrorBoundary>
  )
};

export default Tako