import { useState } from 'react';
import './App.css';

function App() {
  // State for the text input box
  const [inputValue, setInputValue] = useState('');

  // State for the list of tasks
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (inputValue.trim() === '') return;

    setTasks([...tasks, inputValue]);
    setInputValue('');
  };

  const deleteTask = (indexToDelete) => {
    const newTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(newTasks);
  };

  return (
    <div className="app-container">
      <h1>TaskMaster</h1>

      <div className="input-group">
        <input
          type="text"
          placeholder="Enter a task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button
              className="delete-btn"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
