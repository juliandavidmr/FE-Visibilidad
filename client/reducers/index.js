
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import todos from './todos'
import semilleros from './semilleros';

export default combineReducers({
  routing,
  todos,
  semilleros
})
