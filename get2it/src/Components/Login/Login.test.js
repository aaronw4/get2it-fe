import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {renderWithRedux, cleanup, fireEvent, screen} from '../../test-utils';
import Login from './Login';

afterEach(cleanup);

it('renders without crashing', () => {
  renderWithRedux(<Login/>);
});

it('displays header2', ()  => {
  renderWithRedux(<Login/>);
  screen.getByText('Sign In');
})
