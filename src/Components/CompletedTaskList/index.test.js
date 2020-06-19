import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {renderWithRedux, cleanup, screen} from '../../test-utils';
import CompletedTaskList from './index';

afterEach(cleanup);

it('Displays hamburger menu.', () => {
    renderWithRedux(<CompletedTaskList/>)
    screen.getByText('COMPLETED TASKS')
})