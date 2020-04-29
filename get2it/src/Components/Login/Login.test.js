import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {renderWithRedux, cleanup, fireEvent, screen} from '../../test-utils';
import Login from './Login';

afterEach(cleanup);

it('displays header', ()  => {
  renderWithRedux(<Login/>);
  screen.getByText('Sign In');
});

it('inputs email', () => {
  const {getByPlaceholderText} = renderWithRedux(<Login/>)
  const email = getByPlaceholderText(/email/i)
  fireEvent.change(email, {target: {value: 'Aaron'}})
  expect(email.value).toBe('Aaron')
});

it('inputs password', () => {
  const {getByPlaceholderText} = renderWithRedux(<Login/>)
  const password = getByPlaceholderText(/password/i)
  fireEvent.change(password, {target: {value: 'pass'}})
  expect(password.value).toBe('pass')
});

it('password has type password', () => {
  const {getByPlaceholderText} = renderWithRedux(<Login/>)
  const password = getByPlaceholderText(/password/i)
  expect(password).toHaveAttribute('type','password')
});

it('click on Show Password, button has type text', () => {
  const {getByPlaceholderText, getByText} = renderWithRedux(<Login/>)
  const password = getByPlaceholderText(/password/i)
  const button = getByText(/Show Password/i)
  fireEvent.click(button)
  expect(password).toHaveAttribute('type','text')
});

it('click on Show Password then click on Hide Password, button has type password', () => {
  const {getByPlaceholderText, getByText} = renderWithRedux(<Login/>)
  const password = getByPlaceholderText(/password/i)
  const button = getByText(/Show Password/i)
  fireEvent.click(button)
  fireEvent.click(button)
  expect(password).toHaveAttribute('type','password')
});

it('has a link to register', () => {
  const {getByText} = renderWithRedux(<Login/>)
  const link = getByText(/SIGN UP/i)
  expect(link).toHaveAttribute('href', '/register')
});