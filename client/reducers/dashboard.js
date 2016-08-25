
import { handleActions } from 'redux-actions';

const initialState = [{
  msg: "Hola",
  id: 1
}, {
  msg: "Julian",
  id: 2
}];

export default handleActions({
  'signin' (state, action) {
    console.log("Signin");
    
    return [{
      data: "un dato del reducer dashboard.js"
    }];
    /*$.get(action, function (result) {
      return result;
    }*/
  }
}, initialState);
