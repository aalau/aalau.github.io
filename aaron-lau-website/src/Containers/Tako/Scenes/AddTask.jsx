import { useState } from 'react';

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  return (
    <>
        <label className='app-Tako-label-title'>Start a new task:
        <input 
            className='app_Tako-title'
            type = "text"
            placeholder='Refactor to .NET 7'
            onChange={(e) => setTitle(e.target.value)}
            value = {Title}
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
        onAddTask(text);
      }}>Takoff!</button>
    </>
  )
}
