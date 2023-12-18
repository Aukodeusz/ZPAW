// App.jsx
import React, { useState } from 'react';
import TaskList from './TaskList';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Zadanie 1', date: new Date().toLocaleString() },
    { id: 2, text: 'Zadanie 2', date: new Date().toLocaleString() },
    { id: 3, text: 'Zadanie 3', date: new Date().toLocaleString() },
  ]);

  const addTask = (text) => {
    const newTask = {
      id: tasks.length + 1,
      text,
      date: new Date().toLocaleString(),
    };
    setTasks([...tasks, newTask]);
  };

  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Lista Zadań</h1>
      <TaskList tasks={tasks} removeTask={removeTask} />
      <input
        type="text"
        placeholder="Dodaj nowe zadanie"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addTask(e.target.value);
            e.target.value = '';
          }
        }}
      />
    </div>
  );
};

export default App;
