import React, { useState, useCallback } from 'react';
import TodoList from './TodoList';

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Learn Optimization', completed: false },
    { id: 3, text: 'Learn PHP', completed: false },
  ]);
  const [newTodo, setNewTodo] = useState('');

  const toggleComplete = useCallback((id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const addTodo = () => {
    setTodos([...todos, { id: todos.length + 1, text: newTodo, completed: false }]);
    setNewTodo('');
  };

  return (
    <div>
      <h1>My Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new task"
      />
      <button onClick={addTodo}>Add</button>
      <TodoList todos={todos} toggleComplete={toggleComplete} />
    </div>
  );
};

export default TodoApp;
