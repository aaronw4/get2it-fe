import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {renderWithRedux} from '../test-utils';
import App from './App';

it('renders without crashing', () => {
    renderWithRedux(<App/>)
})