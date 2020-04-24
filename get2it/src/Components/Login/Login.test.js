import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from './Login';

test('renders without crashing', () => {
    render(<Login/>);
  });