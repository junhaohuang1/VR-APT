import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
export function registration(state = {}, action) {
  switch (action.type) {
    case "USERS_REGISTER_PENDING":
      return {
        ...state,
        registering: true
      };
    case "USERS_REGISTER_FULFILLED":
    history.push("/login")
      return {
        ...state,
        registered: true,
        successMessage: action.payload.data.message
      };
    case "USERS_REGISTER_REJECTED":
      return {
        ...state,
        registered: false,
        error: action.payload.response.data
      };
    default:
      return state
  }
}
