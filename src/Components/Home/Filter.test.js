import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {renderWithRedux, cleanup, fireEvent, screen} from '../../test-utils';
import Filter from './Filter';

afterEach(cleanup);
it('Displays page elements', () => {
    renderWithRedux(<Filter/>)
    screen.getByText('Today')
    screen.getByText('Tomorrow')
    screen.getByText('Beyond')
    screen.getByText('Past')
    screen.getByText('Categories')
})

it('Category button has a link to add category page', () => {
    const {getByText} = renderWithRedux(<Filter/>)
    const link = getByText('+')
    expect(link).toHaveAttribute('href', '/newCategory')
})
