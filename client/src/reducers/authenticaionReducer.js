import Auth from "../Auth.js";
import {store} from "../store.js";
import { push } from 'react-router-redux';

let user = Auth.checkUserLoggedIn();
const initialState = user ? ({
  loggedIn: true,
  errors:{},
  successMessage:"",
  email: '',
  password: ''
  }) :
({
  loggedIn: false,
  errors:{},
  successMessage:"",
  email: '',
  password: ''
});

export function authentication(state = initialState, action) {
  switch (action.type) {
    case "SIGNIN_FORM_UPDATE_VALUE_FULFILLED":
    return {
      ...state,
      [action.key]: action.value
    };
    case "USERS_LOGIN_PENDING":
      return {
        ...state,
        loggingIn: true,
        successMessage: "",
      };
    case "USERS_LOGIN_FULFILLED":
      Auth.authenticateUser(action.payload.data.user)
      store.dispatch(push('/'))
      return ({
        ...state,
        loggedIn: true,
        loggingIn: false,
        userData: action.payload.data.user.userData,
        errors:{},
        email: '',
        password: ''
      }
    );
    case "USERS_LOGIN_REJECTED":
      return {
        ...state,
        loggingIn: false,
        loggedIn: false,
        errors: action.payload.response.data
      };
    case "USERS_LOGOUT":
      return {
        ...state,
        loggedIn: false
      };
    default:
      return state
  }
}
