import { useState, useContext } from 'react';
import { TasksDispatchContext } from './TasksContext.jsx';
import './../Tako.scss';

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [nextId, setCurrentMaxId] = useState(1);
  const dispatch = useContext(TasksDispatchContext);

  function getNextId(){
    const returnId = setCurrentMaxId;
    setCurrentMaxId(nextId + 1);
    return returnId; // error checking for ids?
  }

  return (
    <>
        <label className='app-Tako-label-title'>Start a new task:
        <input 
            className='app_Tako-title'
            type = "text"
            placeholder='Refactor to .NET 7'
            onChange={(e) => setTitle(e.target.value)}
            value = {title}
        /></label>
        <label className='app_Tako-label-description'>
        <input
            className='app_Tako-description'
            type = "text"
            placeholder='give a brief description of your task here...'
            onChange={(e) => setText(e.target.value)}
            value = {text}
        /></label>
        <button onClick={() => {
        setText('');
        dispatch({
            type: 'added',
            id: nextId++,
            Title: title,
            Description: text
        });
      }}>Takoff!</button>
    </>
  )
}
