import fetch from 'isomorphic-fetch';
import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

const initialState = new Immutable.Map({
  email: '',
  password: '',
  isLoggingIn: false,
  isLoggedIn: false,
  error: null
});


export default handleActions({
  'signin'(state, action) {
    console.log("Signin, state: ", state);

    return state.merge({
      email: 'anlijudavid',
      password: '',
      isLoggingIn: false,
      isLoggedIn: false,
      error: null
    });

    /*return dispatch => {
      dispatch({ data: 'data cualquiera', type: 'LOGIN' });
    };*/

    /* return {
       data: 'un dato del reducer dashboard.js',
       date: (new Date()).toTimeString()
     };*/
    /*$.get(action, function (result) {
      return result;
    }*/
  }
}, initialState);