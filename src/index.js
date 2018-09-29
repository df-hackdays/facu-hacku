import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux';


import reducers from './reducers'; // this exports rootReducer!!!

function configureStore(initialState) {
  let middlewares = [thunk]
  return createStore(reducers, initialState, applyMiddleware(...middlewares))
}

ReactDOM.render(
  <Provider store={configureStore({})}>
    <App />
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
