import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {renderWithRedux, cleanup, fireEvent} from '../../test-utils';
import Login from './Login';
import { waitForDomChange } from '@testing-library/react';

afterEach(cleanup);

it('renders without crashing', () => {
  renderWithRedux(<Login/>);
});

it('displays header', () => {
  const container = renderWithRedux(<Login/>);
  waitForDomChange({container})
    .then(() => {
      const element = container.getByTestId('loginHeader');
      expect(element).toBeVisible();
    })
    .catch(err => console.log(err))
});
