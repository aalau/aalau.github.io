import { createContext, useReducer } from 'react';

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        Title: action.title,
        Status: 'BLG',
        Priority: 'MED',
        Story: 'TAKO',
        Description: action.description
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      return tasks;
      // TODO: add error handling here
    }
  }
}

const initialTasks = [
  { id: 100, Title: 'Add Reducer to Tako', Status: 'DON', Priority: 'PRI', Story: 'TAKO', Description: 'Using a Reducer instead of setState makes managing state for all tasks more straightforward'},
  { id: 101, Title: 'Add backend to Tako', Status: 'TDO', Priority: 'HGH', Story: 'TAKO', Description: 'A backend in Node.js or c# allowing submission of new tasks by outside users and creation of their own stories' },
  { id: 102, Title: 'Add Story based Swimlanes to Tako', Status: 'BLG', Priority: 'MED', Story: 'TAKO', Description: 'Story based swimlanes will allow users to always know which story a task falls under and see differences between their projects using Stories' },
  { id: 103, Title: 'Change swimlane on rerender', Status: 'PRG', Priority: 'HGH', Story: 'TAKO', Description: 'Change which swimlane a task appears in when updating status'}
];


