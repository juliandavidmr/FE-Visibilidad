import fetch from 'isomorphic-fetch';
import { handleActions } from 'redux-actions';

const initialState = [
  {
    msg: "Hola",
    id: 1
  }, {
    msg: "Julian",
    id: 2
  }
];


export default handleActions({
  'signin' (state, action) {
    console.log("Signin");

    setTimeout(() => {
      console.log('Hola');

      // Aqui hay que poner un despachador o algun return que funcione 
    }, 1000);

    return {
      data: 'un dato del reducer dashboard.js',
      date: (new Date()).toTimeString()
    };
    /*$.get(action, function (result) {
      return result;
    }*/
  }
}, initialState);