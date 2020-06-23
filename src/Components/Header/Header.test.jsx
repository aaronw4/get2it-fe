import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {renderWithRedux, cleanup, fireEvent, screen} from '../../test-utils';
import Header from './Header';
import {createStore} from 'redux';
import moment from 'moment'

afterEach(cleanup);
const today = moment().format('LL');
const time = moment().format('LT')
const userTasks = [];
const userData = {username: 'Bob'};

it('diplays page elements', () => {
    const store = createStore(() => ({        
        userData: {username: 'Bob'},
        userTasks: [],
        time: 6
    }))
    renderWithRedux(
        <Header userTasks={userTasks} userData={userData}/>, 
        {store}
    )
    screen.queryByText('Good')
    screen.getByText(today)
    screen.getByText(time)
});

it('Task count has link to taskList page', () => {
    const store = createStore(() => ({        
        userData: {username: 'Bob'},
        userTasks: [],
        time: 6
    }))
    const {getByTestId} = renderWithRedux(
        <Header userTasks={userTasks} userData={userData}/>, 
        {store}
    )
    const taskCount = getByTestId('taskCount')
    expect(taskCount).toHaveAttribute('href', '/taskList')
});