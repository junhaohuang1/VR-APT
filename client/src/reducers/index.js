import { combineReducers } from 'redux';
import { authentication } from './authenticaionReducer.js';
import { registration } from './registrationReducer.js';
import { alert } from './alertReducer.js';
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  authentication,
  registration,
  alert,
  routing:routerReducer
});

export default rootReducer;
