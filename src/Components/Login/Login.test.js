import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {renderWithRedux, cleanup, fireEvent, screen} from '../../test-utils';
import Login from './Login';
import { createStore } from 'redux';

afterEach(cleanup);

it('displays all page elements', ()  => {
  renderWithRedux(<Login/>)
  screen.getByText('Sign In')
  screen.getByAltText('get2it')
  screen.getByPlaceholderText('email')
  screen.getByPlaceholderText('Password')
  screen.getByText('Show Password')
  screen.getByText('Login')
  screen.getByText("DON'T HAVE AN ACCOUNT?")
  screen.getByText('SIGN UP')
});

it('doesnt display spinner', () => {
  const {queryByTestId} = renderWithRedux(<Login/>)
  expect(queryByTestId(/spinnerImg/i)).toBeNull()
});

it('does display spinner when loading', () => {
  const store = createStore(() => ({isLoading: true}))
  const {getByTestId} = renderWithRedux(<Login/>, {store})
  getByTestId(/spinnerImg/i)
})

it('changes email value when typed in input field', () => {
  const {getByPlaceholderText} = renderWithRedux(<Login/>)
  const email = getByPlaceholderText(/email/i)
  fireEvent.change(email, {target: {value: 'Aaron'}})
  expect(email.value).toBe('Aaron')
});

it('changes password value when typed in input field', () => {
  const {getByPlaceholderText} = renderWithRedux(<Login/>)
  const password = getByPlaceholderText(/password/i)
  fireEvent.change(password, {target: {value: 'password'}})
  expect(password.value).toBe('password')
});

it('password has type password as default', () => {
  const {getByPlaceholderText} = renderWithRedux(<Login/>)
  const password = getByPlaceholderText(/password/i)
  expect(password).toHaveAttribute('type','password')
});

it('password has type text after clicking on Show Password', () => {
  const {getByPlaceholderText, getByText} = renderWithRedux(<Login/>)
  const password = getByPlaceholderText(/password/i)
  const button = getByText(/Show Password/i)
  fireEvent.click(button)
  expect(password).toHaveAttribute('type','text')
});

it('password has type password after clicking Show Password then Hide Password', () => {
  const {getByPlaceholderText, getByText} = renderWithRedux(<Login/>)
  const password = getByPlaceholderText(/password/i)
  const button = getByText(/Show Password/i)
  fireEvent.click(button)
  fireEvent.click(button)
  expect(password).toHaveAttribute('type','password')
});

it('Sign Up button has a link to register page', () => {
  const {getByText} = renderWithRedux(<Login/>)
  const link = getByText(/SIGN UP/i)
  expect(link).toHaveAttribute('href', '/register')
});

it('logs in has type submit', () => {  
  const {getByText} = renderWithRedux(<Login/>)
  const login = getByText(/Login/i)
  expect(login).toHaveAttribute('type','submit')
})