
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onTaskClick, removeTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onTaskClick={onTaskClick}
          removeTask={removeTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
