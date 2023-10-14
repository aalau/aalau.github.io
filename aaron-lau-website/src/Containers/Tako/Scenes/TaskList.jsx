import { useState, useContext } from 'react';
import { TasksContext, TasksDispatchContext } from './TasksContext';
import Task from './Task.jsx'


export function RenderTasksBySwimlane({
  tasks,
  swimlane,
  onChangeTask,
  onDeleteTask
}) {
  return (
    <ul>
      {(tasks.filter(task => task.status === swimlane)).map(task => (
        <li key={task.id}>
          <Task
            task={task}
            onChange={onChangeTask}
            onDelete={onDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
}

export default function TaskList() {
    const tasks = useContext(TasksContext);
    return (
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <Task task={task} />
          </li>
        ))}
      </ul>
    );
  }
  
