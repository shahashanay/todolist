import React from 'react';
import { useSelector } from 'react-redux';
import { Todo, TodoState } from '../redux/types';
import TodoItem from './TodoItem';

const TodoList = () => {
  const filter = useSelector((state: TodoState) => state.filter); // ดึงค่า filter จากสถานะ

  const todos = useSelector((state: any) => {
    switch (filter) {
      case 'completed':
        return state.todos.filter((todo:Todo) => todo.completed);
      case 'incomplete':
        return state.todos.filter((todo:Todo ) => !todo.completed);
      default:
        return state.todos;
    }
  });

  return (
    <div>
      {todos.map((todo:Todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
