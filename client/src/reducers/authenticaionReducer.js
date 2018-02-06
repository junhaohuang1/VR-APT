import Auth from "../Auth.js";
import { createBrowserHistory } from 'history';
let user = Auth.checkUserLoggedIn();
const initialState = user ? { loggedIn: true, user } : {};
const history = createBrowserHistory();

export function authentication(state = initialState, action) {
  switch (action.type) {
    case "USERS_LOGIN_PENDING":
      return {
        ...state,
        loggingIn: true,
      };
    case "USERS_LOGIN_FULFILLED":
      Auth.authenticateUser(action.payload.data.user)
      history.push("/")
      return ({
        ...state,
        loggedIn: true,
        user: action.payload.data.user.userData,
        successMessage: action.payload.data.message
      }
    );
    case "USERS_LOGIN_REJECTED":
      return {
        ...state,
        loggedIn: false,
        error: action.payload.response.data
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
