let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case "USERS_LOGIN_PENDING":
      return {
        loggingIn: true,
        user: action.user
      };
    case "USERS_LOGIN_FULFILLED":
      return {
        loggedIn: true,
        user: action.user
      };
    case "USERS_LOGIN_REJECTED":
      return {};
    case "USERS_LOGOUT":
      return {};
    default:
      return state
  }
}
