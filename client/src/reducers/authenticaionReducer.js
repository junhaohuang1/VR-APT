import Auth from "../Auth.js"
let user = Auth.checkUserLoggedIn();
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case "USERS_LOGIN_PENDING":
      return {
        ...state,
        loggingIn: true,
      };
    case "USERS_LOGIN_FULFILLED":
      Auth.authenticateUser(action.payload.data.user)
      return ({
        ...state,
        loggedIn: true,
        user: action.payload.data.user.userData,
      }
    );
    case "USERS_LOGIN_REJECTED":
      return {
        ...state,
        loggedIn: false
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
