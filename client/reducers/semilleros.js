
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
    console.log("Holaaaaaaa");
    
    return [{
      msg: "Hola 11111",
      id: 1
    }, {
      msg: "Julian 22222",
      id: 2
    }];
    /*$.get(action, function (result) {
      return result;
    }*/
  }
}, initialState);
