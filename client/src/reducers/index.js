import { combineReducers } from 'redux';
import { authentication } from './authenticaionReducer.js';
import { registration } from './registrationReducer.js';
import { note } from './noteReducer.js'
import { alert } from './alertReducer.js';
import {modal} from './modalReducer.js';
import {carousel} from './carouselReducer.js'
import { routerReducer } from 'react-router-redux';


const rootReducer = combineReducers({
  authentication,
  registration,
  alert,
  modal,
  note,
  carousel,

  router:routerReducer
});

export default rootReducer;
