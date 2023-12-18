// src/components/TaskItem.jsx
import React from 'react';

const TaskItem = ({ task, onRemoveTask }) => {
  const handleRemove = () => {
    onRemoveTask(task.id);
  };

  return (
    <li>
      <div>{task.text}</div>
      <div>Utworzono: {task.createdAt.toLocaleString()}</div>
      <button onClick={handleRemove}>Usuń</button>
    </li>
  );
};

export default TaskItem;