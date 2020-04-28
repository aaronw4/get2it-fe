import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
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
    function Wrapper({component}) {
      return <Provider store={store}>{component}</Provider>
    }  
    return render(component, {wrapper: Wrapper, ...renderOptions})
  }

export {renderWithRedux};
export * from '@testing-library/react';