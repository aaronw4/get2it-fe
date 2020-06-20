import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {renderWithRedux, cleanup, fireEvent, screen} from '../../test-utils';
import Menu from './Menu';

afterEach(cleanup);

it('Displays hamburger menu.', () => {
    const {getByTestId} = renderWithRedux(<Menu/>)
    getByTestId(/menu/i)
})