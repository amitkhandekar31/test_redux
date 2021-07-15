import { applyMiddleware, combineReducers } from '@reduxjs/toolkit';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import colorReducer from '../redux/reducer/color';
import mySaga from '../redux/sagas';

// optional steps
const enhancers = [];

const sagaMiddleware = createSagaMiddleware()
// create middleware array
const middleware = [
  sagaMiddleware
];

// mount it on the Store
const appReducer = combineReducers({
  colorReducer
})

const composedEnhancers = composeWithDevTools(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  appReducer,
  {},
  composedEnhancers
)

// then run the saga
sagaMiddleware.run(mySaga)

export default store;
