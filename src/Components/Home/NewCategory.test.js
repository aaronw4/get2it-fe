import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {renderWithRedux, cleanup, fireEvent, screen} from '../../test-utils';
import NewCategory from './NewCategory';

afterEach(cleanup);

it('Displays page elements', () => {
    renderWithRedux(<NewCategory/>)
    screen.getByText('Add New Category')
    screen.getByText('New Category Name:')
    screen.getByText('Submit')
});

it('Submit has type submit', () => {
    const {getByText} = renderWithRedux(<NewCategory/>)
    const submit = getByText(/Submit/i)
    expect(submit).toHaveAttribute('type','submit')
});