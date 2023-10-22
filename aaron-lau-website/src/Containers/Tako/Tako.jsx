import { useState, useReducer } from 'react';
import './Tako.scss'
import { TasksProvider } from './Scenes/TasksContext';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'; 
import AddTask from './Scenes/AddTask';
import TaskList from './Scenes/TaskList';

const Tako = () => {
  const [tasks, setTasks] = useState(takoTaskSetup);
  const [input, setInput] = useState("");
  const [nextID, setNextId] = useState(100);
  
  function getNewId() {
    const myId = nextID;
    setNextId(1 + myId);
    return myId;
  };
  const releaseId = (task) => {};
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  const updateTask = (taskId, updatedTask) => {
    // Create a copy of the tasks array
    const updatedTasks = tasks.map((task) => {
      // If the task ID matches the ID being updated, return the updated task; otherwise, return the original task
      return task.Id === taskId ? updatedTask : task;
    });

    // Update the state with the modified tasks
    setTasks(updatedTasks);
  };

  function handleSubmit(e) {
    e.preventDefault();

  }

  function handleActivateAddTaskForm(e) {
    const newId = getNewId();
    const newTask = {Id: newId, 'Title': input, 'Story':'TAKO', 'Status':'BLG', 'Priority':'MED', 'Description':'Lorem Ipsum'};
    const newTasks = [...tasks, newTask];
    setInput("");
    setTasks(newTasks);
  }
  function onDeleteTask(task) {
    const updatedTasks = [...tasks].filter((e) => e.Id !== task.Id)
    setTasks(updatedTasks);
  }

  function takoTaskSetup(){
    return [  {'Id':'101', 'Title':'Create Full Task View', 'Story':'TAKO', 'Status':'TDO', 'Priority':'HGH', 'Description':'create view that opens up the whole task'},
              {'Id':'102', 'Title':'Color Coordinate Story', 'Story':'TAKO', 'Status':'TDO', 'Priority':'LOW', 'Description':'Make stories the row version of the status column, and show the difference between using colors'},
              {'Id':'103', 'Title':'Allow multiple Stories', 'Story':'TAKO', 'Status':'PRG', 'Priority':'PRI', 'Description':'Based on project, we can have different stories'},
              {'Id':'104', 'Title':'Build MVP with React', 'Story':'TAKO', 'Status':'DON', 'Priority':'PRI', 'Description':'Build the MVP that shows changes in state based on user input'}
            ]
  }
  function renderTasksBySwimlane(tasks, swimlane){
    const swimlaneTasks = tasks.filter(task => task.Status === swimlane);
    return (
      <>
        { swimlaneTasks.map(task => (
            <Task key={task.Id} task={task} deleteTask={onDeleteTask} onChange={updateTask}></Task>
        ))}
      </>
    )
  }

  return (
    <section className='Tako'>
      <div className='app_Tako-title'>Tako: Task Management</div>
      <div className='Input'>
        <form onSubmit={handleActivateAddTaskForm}>
          <label className='app-Tako-label'>Start a new task: 
            <input 
            className='app_Tako-input'
            type = "text"
            placeholder='Start a New Task'
            onChange={(e) => setInput(e.target.value)}
            value = {input}
            />
          </label>
          <button className='app_Tako-button' type="submit" onSubmit={handleSubmit}>Takoff!</button>
        </form>
      </div>
     
      <section className='app_Tako-DisplayContent'>
        <nav className='app_Tako-ToDo'>To Do<div id='TDO'>
            {renderTasksBySwimlane(tasks,'TDO')}
          </div>
        </nav>
        <nav className='app_Tako-InProgress'>In Progress<div id='PRG'>
        {renderTasksBySwimlane(tasks,'PRG')}
          </div></nav>
        <nav className='app_Tako-Done'>Done<div id='DON'>
        {renderTasksBySwimlane(tasks,'DON')}
          </div></nav>
      </section>
      
    </section>
  )
};

export default Tako


//TODO: 
    // 1. setup delete task https://stackoverflow.com/questions/43230622/reactjs-how-to-delete-item-from-list
    // 2. Render Tasks in Tako using https://react.dev/learn/rendering-lists#rendering-data-from-arrays and perhaps https://react.dev/learn/render-and-commit
    // 3. Create Example tasks for each project
    // 4. Create new function in Task reflected in Tako just like delete task that will change which swimlane a task appears in when you change it's status, and vice-versa
    // 4.1 draggable? https://medium.com/the-andela-way/react-drag-and-drop-7411d14894b9 
    // 5. Finish Project view?
    // 6. When switching projects, have a new "story" swimlane appear (or switched to) which shows the tasks for that project
  
