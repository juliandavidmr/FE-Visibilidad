
import { handleActions } from 'redux-actions';

const initialState = [{
  msg: "Hola",
  id: 1
}, {
  msg: "Julian",
  id: 2
}];

export default handleActions({
  'fetch semilleros' (state, action) {
    return [{
      msg: "Hola",
      id: 1
    }, {
      msg: "Julian",
      id: 2
    }]
    /*$.get(action, function (result) {
      return result;
    }*/
  }
}, initialState);
