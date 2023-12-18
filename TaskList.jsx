// TaskList.jsx
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, removeTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} removeTask={removeTask} />
      ))}
    </ul>
  );
};

export default TaskList;
