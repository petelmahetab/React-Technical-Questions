import React, { useState, useEffect } from 'react';

function App() {
  // State Variables
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all'); // 'all', 'completed', 'pending'

  // Load mock tasks (like from backend)
  useEffect(() => {
    const initialTasks = [
      { id: 1, text: 'Learn React', completed: true },
      { id: 2, text: 'Build a Project', completed: false }
    ];
    setTasks(initialTasks);
  }, []);

  // Add Task Handler
  const handleAddTask = () => {
    if (input.trim() === '') return;
    const newTask = {
      id: Date.now(),
      text: input,
      completed: false
    };
    setTasks(prev => [...prev, newTask]);
    setInput('');
  };

  // Toggle Completed Status
  const handleToggle = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete Task
  const handleDelete = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  // Filter Tasks
  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h2>📋 Task Manager</h2>

      <input
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        type="text"
        placeholder="Enter task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddTask} style={{ padding: '10px 15px' }}>
        ➕ Add Task
      </button>

      <div style={{ margin: '20px 0' }}>
        <button onClick={() => setFilter('all')} disabled={filter === 'all'}>All</button>
        <button onClick={() => setFilter('completed')} disabled={filter === 'completed'}>Completed</button>
        <button onClick={() => setFilter('pending')} disabled={filter === 'pending'}>Pending</button>
      </div>

      {filteredTasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {filteredTasks.map(task => (
            <li key={task.id} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '10px',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px'
            }}>
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
              </span>
              <div>
                <button onClick={() => handleToggle(task.id)} style={{ marginRight: '10px' }}>
                  {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button onClick={() => handleDelete(task.id)}>🗑️</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
