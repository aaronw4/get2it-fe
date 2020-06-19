import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {renderWithRedux, cleanup, screen} from '../../test-utils';
import Date from './Date';

afterEach(cleanup);

it('Displays page elements', () => {
    renderWithRedux(<Date/>)
    screen.getByPlaceholderText('Date')
})