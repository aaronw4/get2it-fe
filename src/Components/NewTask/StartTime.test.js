import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRedux, cleanup} from '../../test-utils';
import TimeSelectForm from './StartTime';

afterEach(cleanup);

it('Displays clock img', () => {
    const {getByTestId} = renderWithRedux(<TimeSelectForm/>)
    getByTestId(/clockImg/i)
});