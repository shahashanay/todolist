// App.tsx
import React from 'react';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';
import TodoFilter from './component/TodoFilter';
import './App.css';

const App =  () => {
  return (
    <main>
        <h1  style={{ textAlign: 'center' }}>Todo List</h1>
      <div  className='box-todo'>

        <TodoForm />
        <TodoFilter />
        <TodoList />
      </div>
    </main>
  );
};

export default App;