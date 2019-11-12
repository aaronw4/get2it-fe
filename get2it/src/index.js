import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './Components/App.js';
import { BrowserRouter } from 'react-router-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import { autoRehydrate, persistStore } from 'redux-persist'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

const store = createStore(
  reducer,

  compose(
    applyMiddleware(thunk),
    autoRehydrate(),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  )
)

const persistedStore = persistStore(store)

ReactDOM.render(
  <Provider store={persistedStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
