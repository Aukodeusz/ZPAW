// src/App.jsx
import React, { useState } from 'react';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Przykładowe zadanie 1', createdAt: new Date() },
    { id: 2, text: 'Przykładowe zadanie 2', createdAt: new Date() },
    { id: 3, text: 'Przykładowe zadanie 3', createdAt: new Date() },
  ]);
  const [newTaskText, setNewTaskText] = useState('');

  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleAddTask = () => {
    const newTask = {
      id: tasks.length + 1,
      text: newTaskText,
      createdAt: new Date(),
    };

    setTasks([...tasks, newTask]);
    setNewTaskText('');
  };

  return (
    <div>
      <h1>Lista Zadań</h1>
      <input
        type="text"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
      />
      <button onClick={handleAddTask}>Dodaj Zadanie</button>
      <TaskList tasks={tasks} onDelete={handleDelete} />
    </div>
  );
};

export default App;
