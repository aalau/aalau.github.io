import { useState, useEffect } from 'react';
import './Tako.scss'
import Task from './Scenes/Task.jsx'
import TaskForm from './Scenes/TaskForm.jsx'
import TaskList from './Scenes/TaskList';
import Dialog from '@mui/material/Dialog';
import { WidthFull } from '@mui/icons-material';

const Tako = () => {
  const [tasks, setTasks] = useState(takoTaskSetup);
  const [input, setInput] = useState("");
  const [nextID, setNextId] = useState(100);
  const [open, setOpenNewTask] = useState(false);

  const handleClickOpen = () => {
    setOpenNewTask(true);
  };
  const handleClose = () => {
    setOpenNewTask(false);
  };
  
  function getNewId() {
    const myId = nextID;
    setNextId(myId => myId + 1);
    return myId;
  };
  //const releaseId = (task) => {}; todo: memory management!
  
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    //force re-render of swimlanes
    
  };

  //https://stackoverflow.com/questions/40795906/onchange-event-for-react-child-component-to-update-state
  const onChange= (field, value) => {
    // parent class change handler is always called with field name and value
    this.setState({[field]: value});
  };
  
  function changeTask (updatedTask, Id=updatedTask.Id){
    // changeTask(task => {return{...task,[event.target.name]: event.target.value}})
    setTasks((tasks) => {
      const updatedTasks = tasks.map((task) => {
        
        // If the task ID matches the ID being updated, return the updated task; otherwise, return the original task
        return task.Id === Id ? updatedTask : task;
      });
      return updatedTasks;
    });
    
  };

  function handleSubmit(e) {
    e.preventDefault();
    handleClickOpen();
  }

  const deleteById = id => {
    setTasks(oldvalues => {
      return oldvalues.filter((e) => e.Id != id)
    })
  }


  function takoTaskSetup(){
    return [  {'Id':'101', 'Title':'Create Full Task View', 'Story':'TAKO', 'Status':'TDO', 'Priority':'HGH', 'Description':'create view that opens up the whole task'},
              {'Id':'102', 'Title':'Color Coordinate Story', 'Story':'TAKO', 'Status':'TDO', 'Priority':'LOW', 'Description':'Make stories the row version of the status column, and show the difference between using colors'},
              {'Id':'103', 'Title':'Allow multiple Stories', 'Story':'TAKO', 'Status':'PRG', 'Priority':'PRI', 'Description':'Based on project, we can have different stories'},
              {'Id':'104', 'Title':'Build MVP with React', 'Story':'TAKO', 'Status':'DON', 'Priority':'PRI', 'Description':'Build the MVP that shows changes in state based on user input'}
            ]
  }
  function renderTasksBySwimlane(swimlane){
    if (!tasks) {
      console.debug('Tasks array is undefined');
      return null; // or you can return some default content or an empty array
    }
    console.debug(tasks)
      const swimlaneTasks = tasks.filter((t) => 
      {
        if (typeof t === 'undefined'){
          console.debug('undefined task: '+ t)
          return false;
        }
        return (t.Status === swimlane)
      }); //this is our error. tasks is undefined here
      console.debug('render tasks by swimlane ' + swimlane + ': ' + swimlaneTasks);

      return (
        <>
          { swimlaneTasks.map(task => (
              <Task key={task.Id} task={task} deleteTask={() => deleteById(task.Id)} changeTask={(e) => changeTask(e)}></Task>
              
          ))}
        </>
      )
  }

  return (
    <center>
      <section className='app_Tako'>
      
      <div className='app_Tako-title'>Tako: Task Management</div>
      <Dialog className='app_Tako-Dialog-NewTask' open={open} onClose={handleClose}>
          <TaskForm input={input} addTask={addTask}></TaskForm>
      </Dialog>
      <div className='Input'>
        <form onSubmit={handleSubmit}>
          <label className='app-Tako-label'>Start a new task: 
            <input 
            className='app_Tako-input'
            type = "text"
            placeholder='Start a New Task'
            onChange={(e) => setInput(e.target.value)}
            value = {input}
            />
          </label>
          <button className='app_Tako-button' type="submit">Takoff!</button>
        </form>
      </div>
     
      <section className='app_Tako-DisplayContent'>
        <nav className='app_Tako-ToDo'>To Do<div id='TDO'>
          {renderTasksBySwimlane('TDO')}
          </div>
        </nav>
        <nav className='app_Tako-InProgress'>In Progress<div id='PRG'>
          {renderTasksBySwimlane('PRG')}
          </div></nav>
        <nav className='app_Tako-Done'>Done<div id='DON'>
          {renderTasksBySwimlane('DON')}
          </div></nav>
      </section>
      </section>
    </center>
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
  
