import React, { useMemo } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete }) => {
  const sortedTodos = useMemo(() => {
    return todos.slice().sort((a, b) => a.completed - b.completed);
  }, [todos]);

  return (
    <ul>
      {sortedTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
      ))}
    </ul>
  );
};

export default TodoList;
