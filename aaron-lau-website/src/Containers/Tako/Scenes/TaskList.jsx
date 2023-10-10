import { useState } from 'react';

export default function RenderTasksBySwimlane({
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

export function RenderTasks({
    tasks, 
    onChangeTask, 
    onDeleteTask
})
{
    return (
        <ul>
          {tasks.map(task => (
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
