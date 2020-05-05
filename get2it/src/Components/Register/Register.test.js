import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRedux, cleanup, fireEvent, screen } from '../../test-utils';
import {createStore} from 'redux';
import Register from './Register';
import App from '../App';

afterEach(cleanup);

it('displays all page elements', () => {
    renderWithRedux(<Register/>)

})
