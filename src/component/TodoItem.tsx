import React from 'react';
import { useDispatch } from 'react-redux';
import { Checkbox, Button } from 'antd';
import { deleteTodo, toggleTodo } from '../redux/actions';
import { Todo } from '../redux/types';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id) as any);
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id) as any);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
      <Checkbox checked={todo.completed} onChange={handleToggle} />
      <div style={{ marginLeft: '8px', flexGrow: 1 }}>
        <h3 style={{ margin: 0 }}>{todo.title}</h3>
        {todo.description && <p style={{ margin: 0 }}>{todo.description}</p>}
      </div>
      <Button type="link" danger onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
};

export default TodoItem;