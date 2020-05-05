import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRedux, cleanup, fireEvent, screen, waitFor } from '../../test-utils';
import {createStore} from 'redux';
import Register from './Register';

afterEach(cleanup);

it('displays all page elements', () => {
    renderWithRedux(<Register/>)
    screen.getByAltText('Get2It Logo')
    screen.getByText('Sign Up')
    screen.getByPlaceholderText('Display Name')
    screen.getByPlaceholderText('Email')
    screen.getByTestId('passwordInput')
    screen.getByPlaceholderText('Confirm Password')
    screen.getByText('Create Account')
    screen.getByText('ALREADY HAVE AN ACCOUNT?')
    screen.getByText('SIGN IN')
});

it('doesnt display spinner', () => {
    const {queryByTestId} = renderWithRedux(<Register/>)
    expect(queryByTestId(/spinnerImg/i)).toBeNull()
});
  
it('does display spinner when loading', () => {
    const store = createStore(() => ({isLoading: true}))
    const {getByTestId} = renderWithRedux(<Register/>, {store})
    getByTestId(/spinnerImg/i)
});

it('changes displayName value when typed in input field', () => {
    const {getByPlaceholderText} = renderWithRedux(<Register/>)
    const name = getByPlaceholderText(/Display Name/i)
    fireEvent.change(name, {target: {value: 'Aaron'}})
    expect(displayName.value).toBe('Aaron')
});

it('changes email value when typed in input field', () => {
    const {getByPlaceholderText} = renderWithRedux(<Register/>)
    const email = getByPlaceholderText(/Email/i)
    fireEvent.change(email, {target: {value: 'aaron@email.com'}})
    expect(email.value).toBe('aaron@email.com')
});

it('changes password value when typed in input field', () => {
    const {getByTestId} = renderWithRedux(<Register/>)
    const password = getByTestId(/passwordInput/i)    
    fireEvent.change(password, {target: {value: 'password'}})
    expect(password.value).toBe('password')
});

it('changes confirmedPass value when typed in input field', () => {
    const {getByPlaceholderText} = renderWithRedux(<Register/>)
    const confirmPW = getByPlaceholderText(/Confirm Password/i)
    fireEvent.change(confirmPW, {target: {value: 'password'}})
    expect(confirmedPass.value).toBe('password')
});

it('warns you of missing field', async () => {
    const {getByText, getByPlaceholderText} = renderWithRedux(<Register/>)
    const submit = getByText('Create Account')
    fireEvent.click(submit)
    await waitFor(() => getByPlaceholderText('DISPLAY NAME IS REQUIRED!'))
    await waitFor(() => getByPlaceholderText('EMAIL IS REQUIRED!'))
    await waitFor(() => getByPlaceholderText('PASSWORD IS REQUIRED!'))
    await waitFor(() => getByPlaceholderText('PLEASE CONFIRM YOUR PASSWORD'))
})

it('warns you if password is too short', async () => {    
    const {getByTestId, getByText} = renderWithRedux(<Register/>)       
    const password = getByTestId(/passwordInput/i) 
    const submit = getByText('Create Account')   
    fireEvent.change(password, {target: {value: 'pass'}})    
    fireEvent.click(submit)
    await waitFor(() => getByText('PASSWORD MUST BE 8 CHARACTERS OR LONGER'))    
});

it('Sign Up button has a link to register page', () => {
    const {getByText} = renderWithRedux(<Register/>)
    const link = getByText(/SIGN IN/i)
    expect(link).toHaveAttribute('href', '/login')
});
