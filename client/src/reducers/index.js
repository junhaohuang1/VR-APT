import { combineReducers } from 'redux';
import { authentication } from './authenticaionReducer.js';
import { registration } from './registrationReducer.js';
import { alert } from './alertReducer.js';

const rootReducer = combineReducers({
  authentication,
  registration,
  alert
});

export default rootReducer;
