import { TodoActionTypes, TodoState, ADD_TODO, TOGGLE_TODO, DELETE_TODO, SET_FILTER } from './types';

const initialState: TodoState = {
  todos: [],
  filter: 'all',
};

const todoReducer = (state = initialState, action: TodoActionTypes): TodoState => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filter: action.filter,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id),
      };
    default:
      return state;
  }
};

export default todoReducer;