import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Input } from 'antd';
import { addTodo } from '../redux/actions';

const TodoForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    dispatch(addTodo({
      id: Date.now(),
      title,
      description,
      completed: false,
    }) as any);
    setTitle('');
    setDescription('');
  };

  return (
    <div style={{ marginBottom: '16px' }}>
      <Input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginBottom: '8px' }}
      />
      <Input.TextArea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ marginBottom: '8px' }}
      />
   <Button disabled={!title} type="primary" onClick={handleSubmit}>Add</Button>
    </div>
  );
};

export default TodoForm;
