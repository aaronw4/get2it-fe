import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {renderWithRedux, cleanup, fireEvent, screen} from '../../test-utils';
import Profile from './Profile';
import { createStore } from 'redux';

afterEach(cleanup);

it('displays page elements', () => {
    const store = createStore(() => ({
        userData: {displayName: 'Batman'}
    }))
    renderWithRedux(<Profile/>, {store})
    screen.getAllByText(/Batman/i)
    screen.getByText(/Update Profile/i)
});

it('Update Profile button has type submit', () => {
    const store = createStore(() => ({
        userData: {displayName: 'Batman'}
    }))
    const {getByText} = renderWithRedux(<Profile/>, {store})
    const button = getByText(/Update Profile/i)
    expect(button).toHaveAttribute('type', 'submit')
})

it('Button should have background grey', () => {
    const store = createStore(() => ({
        userData: {displayName: 'Batman'}
    }))
    const {getByText} = renderWithRedux(<Profile/>, {store})
    const button = getByText(/Update Profile/i)
    expect(button).toHaveStyle('color: ButtonText')
})
