// src/components/TaskList.jsx
import React, { useState } from 'react';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Zadanie 1', createdAt: new Date() },
    { id: 2, text: 'Zadanie 2', createdAt: new Date() },
    { id: 3, text: 'Zadanie 3', createdAt: new Date() },
  ]);

  const handleAddTask = () => {
    const newTask = {
      id: tasks.length + 1,
      text: `Nowe zadanie ${tasks.length + 1}`,
      createdAt: new Date(),
    };
    setTasks([...tasks, newTask]);
  };

  const handleRemoveTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <button onClick={handleAddTask}>Dodaj nowe zadanie</button>
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onRemoveTask={handleRemoveTask} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;