// TaskItem.jsx
import React from 'react';

const TaskItem = ({ task, onTaskClick, removeTask }) => {
  return (
    <li onClick={() => onTaskClick(task)}>
      <span>{task.text}</span>
      <span>{task.date}</span>
      <button onClick={() => removeTask(task.id)}>Usuń</button>
    </li>
  );
};

export default TaskItem;
