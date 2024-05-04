export interface Todo {
    id: number;
    title: string;
    description?: string;
    completed: boolean;
  }
  
  export interface TodoState {
    todos: Todo[];
    filter: 'all' | 'completed' | 'incomplete';
  }
  
  export const SET_FILTER = 'SET_FILTER';
  export const ADD_TODO = 'ADD_TODO';
  export const TOGGLE_TODO = 'TOGGLE_TODO';
  export const DELETE_TODO = 'DELETE_TODO';
  
  interface SetFilterAction {
    type: typeof SET_FILTER;
    filter: 'all' | 'completed' | 'incomplete';
  }
  
  interface AddTodoAction {
    type: typeof ADD_TODO;
    todo: Todo;
  }
  
  interface ToggleTodoAction {
    type: typeof TOGGLE_TODO;
    id: number;
  }
  
  interface DeleteTodoAction {
    type: typeof DELETE_TODO;
    id: number;
  }
  
  export type TodoActionTypes = SetFilterAction | AddTodoAction | ToggleTodoAction | DeleteTodoAction;