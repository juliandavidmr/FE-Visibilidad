import axios from 'axios';

import { LOGGED_FAILED, LOGIN_ATTEMPT, LOGGED_SUCCESSFULLY } from '../constants/login';

export function loginError(error) {
  return { error, type: LOGGED_FAILED };
}

// You'll have a side effect here so (dispatch) => {} form is a good idea
export function loginSuccess(response) {
  return dispatch => {
    dispatch({ response, type: LOGGED_SUCCESSFULLY });
    // router.transitionTo('/dashboard');
  };
}

export function loginRequest(email, password) {
  const user = { email: email, password: password };
  return { user, type: LOGIN_ATTEMPT };
}

export function login(userData) {
  console.log('data user: ', userData);

  return dispatch =>
    axios.get('http://45.55.50.95:3000/api/allComerciantes')
      .then(function (response) {
        if (response.status >= 200 && response.status < 300) {
          console.log('Response =', response);
          dispatch(loginSuccess(response));
        } else {
          const error = new Error(response.statusText);
          error.response = response;
          dispatch(loginError(error));
          throw error;
        }
      })
      .catch(function (error) {
        console.log(error);

        const err = new Error(error);
        error.response = response;
        dispatch(loginError(error));
        throw error;
      });
}