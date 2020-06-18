import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {renderWithRedux, cleanup, screen, fireEvent} from '../../test-utils'
import NewTasks from './NewTask';
import {createStore} from 'redux';

afterEach(cleanup);

it('Displays page elements', () => {
    const store = createStore(() => ({categories: [{name: 'Personal'}]}))
    renderWithRedux(<NewTasks/>, {store})
    screen.getByText('Add New Task')
    screen.getByPlaceholderText('Date')
    screen.getByText('START')
    screen.getByText('END')
    screen.getByText('New Task Name:')
    screen.getByText('Category: Personal')
    screen.getByText('Complete')
});

it('Changes taskName value when typed in input field', () => {
    const store = createStore(() => ({categories: [{name: 'Personal'}]}))
    const {getByTestId} = renderWithRedux(<NewTasks/>, {store})
    const taskName = getByTestId('newTaskInput')
    fireEvent.change(taskName, {target: {value: 'Task2'}})
    expect(taskName.value).toBe('Task2')
});

it('Complete button has type submit', () => {
    const store = createStore(() => ({categories: [{name: 'Personal'}]}))
    const {getByText} = renderWithRedux(<NewTasks/>, {store})
    const button = getByText(/Complete/i)
    expect(button).toHaveAttribute('type','submit')
});