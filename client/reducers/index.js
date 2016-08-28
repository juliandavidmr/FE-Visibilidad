
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import todos from './todos';
import semilleros from './semilleros';
import dashboard  from './dashboard';
import login  from './login';

export default combineReducers({
  routing,
  todos,
  semilleros,
  dashboard,
  login
});
