import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoForm from './component/TodoForm';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { addTodo } from './redux/actions';

const mockStore = configureStore([]);

describe('TodoForm', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  test('renders TodoForm component', () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <TodoForm />
      </Provider>
    );

    const titleInput = getByPlaceholderText('Title');
    const descriptionInput = getByPlaceholderText('Description');
    const addButton = getByText('Add');

    expect(titleInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  test('submits form with correct values', () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <TodoForm />
      </Provider>
    );

    const titleInput = getByPlaceholderText('Title');
    const descriptionInput = getByPlaceholderText('Description');
    const addButton = getByText('Add');

    fireEvent.change(titleInput, { target: { value: 'Test Title' } });
    fireEvent.change(descriptionInput, { target: { value: 'Test Description' } });
    fireEvent.click(addButton);

    expect(store.getActions()).toEqual([
      addTodo({
        id: expect.any(Number),
        title: 'Test Title',
        description: 'Test Description',
        completed: false,
      }),
    ]);
  });

  test('disables button when title is empty', () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <TodoForm />
      </Provider>
    );

    const titleInput = getByPlaceholderText('Title');
    const descriptionInput = getByPlaceholderText('Description');
    const addButton = getByText('Add').closest('button');
    expect(addButton).toBeDisabled();
    fireEvent.change(descriptionInput, { target: { value: 'Test Description' } });
    expect(addButton).toBeDisabled();
    fireEvent.change(titleInput, { target: { value: 'Test Title' } });

    expect(addButton).not.toBeDisabled();
  });
});
