import { TodoActionTypes, ADD_TODO, TOGGLE_TODO, DELETE_TODO, SET_FILTER } from './types';
import { Todo } from './types';

export const setFilter = (filter: 'all' | 'completed' | 'incomplete'): TodoActionTypes => ({
  type: SET_FILTER,
  filter,
});

export const addTodo = (todo: Todo): TodoActionTypes => ({
  type: ADD_TODO,
  todo,
});

export const toggleTodo = (id: number): TodoActionTypes => ({
  type: TOGGLE_TODO,
  id,
});

export const deleteTodo = (id: number): TodoActionTypes => ({
  type: DELETE_TODO,
  id,
});
