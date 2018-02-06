import axios from 'axios';
import Auth from '../Auth.js'

const login = (email,password) => (dispatch) => (
  dispatch({
    type: "USERS_LOGIN",
    payload: axios.post('/auth/login', {
      email: email,
      password: password
    })
  })
);

function logout() {
    Auth.deauthenticateUser();
    return { type: "USERS_LOGOUT" };
}

const signup = (name, email,password) => (dispatch) => (
  dispatch({
    type: "USERS_REGISTER",
    payload: axios.post('/auth/signup', {
      name: name,
      email: email,
      password: password
    })
  })
);


export const userActions = {
    login,
    logout,
    signup
};
