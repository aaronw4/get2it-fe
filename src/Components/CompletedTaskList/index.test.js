import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {renderWithRedux, cleanup, screen, fireEvent} from '../../test-utils';
import CompletedTaskList from './index';
import {createStore} from 'redux'

afterEach(cleanup);

it('Displays page title', () => {
    renderWithRedux(<CompletedTaskList/>)
    screen.getByText('COMPLETED TASKS')
});

it('Displays completed task', () => {
    const store = createStore(() => ({
        userTasks: [{date: 'Today', name: 'Task 1', status: true, id: 1}]
    }))
    renderWithRedux(<CompletedTaskList/>, {store})
    screen.getByText('Today')
    screen.getByText('Task 1')
});

it('Does not display task when not completed', () => {
    const store = createStore(() => ({
        userTasks: [{date: 'Today', name: 'Task 1', status: false, id: 1}]
    }))
    const {queryByText} = renderWithRedux(<CompletedTaskList/>, {store})
    const date = queryByText(/Today/i)
    const task = queryByText(/Task 1/i)
    expect(date).toBeNull()
    expect(task).toBeNull()
})

it('Displays Re-use button when completed task exists', () => {
    const store = createStore(() => ({
        userTasks: [{date: 'Today', name: 'Task 1', status: true, id: 1}]
    }))
    renderWithRedux(<CompletedTaskList/>, {store})
    screen.getByText('Re-Use')
});

it('Does not displays Re-use button when no completed task exists', () => {
    const store = createStore(() => ({
        userTasks: [{date: 'Today', name: 'Task 1', status: false, id: 1}]
    }))
    const {queryByText} = renderWithRedux(<CompletedTaskList/>, {store})
    const button = queryByText(/Re-Use/i)
    expect(button).toBeNull()
});

it('Has no background color.', () => {
    const store = createStore(() => ({
        userTasks: [{date: 'Today', name: 'Task 1', status: true, id: 1}]
    }))
    const {getByText} = renderWithRedux(<CompletedTaskList/>, {store})
    const button = getByText(/Re-Use/i)
    expect(button).toHaveStyle('background-color: null')
});

it('Re-Use button is a link to editCompletedtaskModal', () => {
    const store = createStore(() => ({
        userTasks: [{date: 'Today', name: 'Task 1', status: true, id: 1}]
    }))
    const {getByTestId} = renderWithRedux(<CompletedTaskList/>, {store})
    const button = getByTestId('taskLink')
    expect(button).toHaveAttribute('href', '/editCompletedtaskModal/1')
});
