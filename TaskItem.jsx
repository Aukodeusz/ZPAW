// src/components/TaskItem.jsx
import React from 'react';
import { format } from 'date-fns';

const TaskItem = ({ task, onDelete }) => {
  const formattedDate = format(new Date(task.createdAt), 'yyyy-MM-dd HH:mm:ss');

  return (
    <div>
      <span>{task.text}</span>
      <span style={{ marginLeft: '10px' }}>({formattedDate})</span>
      <button onClick={() => onDelete(task.id)}>Usuń</button>
    </div>
  );
};

export default TaskItem;
