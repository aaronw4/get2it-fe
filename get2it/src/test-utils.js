import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import {render} from '@testing-library/react';
import {initialState as reducerInitialState, reducer} from './reducer';

function renderWithRedux(
    component, 
    {
      initialState = reducerInitialState, 
      store = createStore(reducer, initialState),
      ...renderOptions
    } = {}
  ) {
    function Wrapper({children}) {
      return (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
      )}  
    return render(component, {wrapper: Wrapper, ...renderOptions})
  }

export {renderWithRedux};
export * from '@testing-library/react';