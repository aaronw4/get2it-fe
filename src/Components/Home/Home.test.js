import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {renderWithRedux, cleanup, fireEvent, screen} from '../../test-utils';
import Home from './Home';
import {createStore} from 'redux';
import moment from 'moment';

afterEach(cleanup);
const today = moment().format('L')
const tomorrow = moment().add(1, 'd').format('L')

it('Displays page elements for Today with no userTasks', () => {
    const store = createStore(() => ({
        timePeriod: 'Today',
        userTasks: [],
        filteredTasks: [],
        categories: [{name: 'Personal'}]
    }))
    const {getAllByText} = renderWithRedux(<Home/>, {store})
    const text = getAllByText(/Today/i)
    expect(text)
    screen.getByText('Or add a new task!')
})

it('Displays page elements for Today and filteredTasks', () => {
    const store = createStore(() => ({
        timePeriod: 'Today',
        userTasks: [
            {date: today, name: 'Task 1'},
            {date: tomorrow, name: 'Task 2'}
        ],
        filteredTasks: [{date: today, name: 'Task 1'}],
        categories: [{name: 'Personal'}]
    }))
    const {getAllByText} = renderWithRedux(<Home/>, {store})
    const text = getAllByText(/Today/i)
    expect(text)
    screen.getByText('Task 1')
})

it('Displays page elements for tomorrow task and filteredTask', () => {
    const store = createStore(() => ({
        timePeriod: 'Today',
        userTasks: [
            {date: today, name: 'Task 1'},
            {date: tomorrow, name: 'Task 2'}
        ],
        filteredTasks: [{date: tomorrow, name: 'Task 2'}],
        categories: [{name: 'Personal'}]
    }))
    const {getAllByText} = renderWithRedux(<Home/>, {store})
    const text = getAllByText(/Tomorrow/i)
    expect(text)
    screen.getByText('Task 2')
})