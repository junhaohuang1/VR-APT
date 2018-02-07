import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
const initialState = {
  name:"",
  email: '',
  password: '',
  errors:{},
  successMessage:"",
}
export function registration(state = initialState, action) {
  switch (action.type) {
    case "SIGNUP_FORM_UPDATE_VALUE_FULFILLED":
    return {
      ...state,
      [action.key]: action.value
    };
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
        successMessage: action.payload.data.message,
        errors:{},
        name:"",
        email: '',
        password: '',
      };
    case "USERS_REGISTER_REJECTED":
      return {
        ...state,
        registering: false,
        registered: false,
        errors: action.payload.response.data,
        successMessage:""
      };
    default:
      return state
  }
}
