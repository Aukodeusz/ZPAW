// App.jsx
import React, { useState } from 'react';
import TaskList from './TaskList';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Zadanie 1', date: new Date().toLocaleString() },
    { id: 2, text: 'Zadanie 2', date: new Date().toLocaleString() },
    { id: 3, text: 'Zadanie 3', date: new Date().toLocaleString() },
  ]);

  const handleTaskClick = (clickedTask) => {
    console.log('Kliknięto zadanie:', clickedTask);
    // Obsługa kliknięcia w zadanie (przekazanie danych z dziecka do rodzica)
  };

  const handleRemoveTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    console.log('Usunięto zadanie o ID:', taskId);
    // Obsługa usuwania zadania (przekazanie danych z dziecka do rodzica)
  };

  return (
    <div>
      <h1>Lista Zadań</h1>
      <TaskList tasks={tasks} onTaskClick={handleTaskClick} removeTask={handleRemoveTask} />
      <input
        type="text"
        placeholder="Dodaj nowe zadanie"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            const newTask = {
              id: tasks.length + 1,
              text: e.target.value,
              date: new Date().toLocaleString(),
            };
            setTasks([...tasks, newTask]);
            e.target.value = '';
          }
        }}
      />
    </div>
  );
};

export default App;
