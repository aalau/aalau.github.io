import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Task from '../src/Containers/Tako/Scenes/Task';

// Mock the necessary functions
const deleteTaskMock = jest.fn();
const changeTaskMock = jest.fn();

const sampleTask = {
  Id: 1,
  Title: 'Sample Task',
  Story: 'ST1',
  Status: 'TDO',
  Priority: 'HGH',
  Description: 'Sample description',
};

test('renders Task component', () => {
  const { getByText, getByPlaceholderText } = render(
    <Task task={sampleTask} deleteTask={deleteTaskMock} changeTask={changeTaskMock} />
  );

  // Check if essential elements are rendered
  expect(getByText(`${sampleTask.Story}-${sampleTask.Id}`)).toBeInTheDocument();
  expect(getByPlaceholderText('New Task')).toBeInTheDocument();
  expect(getByText('HIGH')).toBeInTheDocument();
  expect(getByText('To Do')).toBeInTheDocument();
  expect(getByPlaceholderText('describe your task here...')).toBeInTheDocument();
  expect(getByText('Delete')).toBeInTheDocument();
});

test('calls changeTask when input value changes', () => {
  const { getByPlaceholderText } = render(
    <Task task={sampleTask} deleteTask={deleteTaskMock} changeTask={changeTaskMock} />
  );

  const titleInput = getByPlaceholderText('New Task');
  fireEvent.change(titleInput, { target: { value: 'Updated Task' } });

  // Check if changeTaskMock is called with the correct arguments
  expect(changeTaskMock).toHaveBeenCalledWith(expect.objectContaining({ target: { value: 'Updated Task' } }));
});

test('calls deleteTask when delete button is clicked', () => {
  const { getByText } = render(
    <Task task={sampleTask} deleteTask={deleteTaskMock} changeTask={changeTaskMock} />
  );

  const deleteButton = getByText('Delete');
  fireEvent.click(deleteButton);

  // Check if deleteTaskMock is called with the correct arguments
  expect(deleteTaskMock).toHaveBeenCalledWith(sampleTask.Id);
});
