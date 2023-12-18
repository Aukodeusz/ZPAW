// TaskItem.jsx
import React from 'react';

const TaskItem = ({ task, removeTask }) => {
  return (
    <li>
      <span>{task.text}</span>
      <span>{task.date}</span>
      <button onClick={() => removeTask(task.id)}>Usuń</button>
    </li>
  );
};

export default TaskItem;
