import { combineReducers } from 'redux';

import {
  LISTAR_ROLES,
  VER_ROL,
  INSERTAR_ROL,
  ELIMINAR_ROL,
  ERROR_ACTUALIZAR_ROL,
  ERROR_INSERTAR_ROL,
  ERROR_ELIMINAR_ROL,
  ERROR_ROL
} from '../constants/rol';

import * as constant from '../constants/_generic';

import Immutable from 'immutable';

const initialState = new Immutable.Map({
  data_list_roles: [],
  error: null,
  result: false
});

function rol(state = initialState, action) {
  switch (action.type) {
    case LISTAR_ROLES:
      return state.merge({
        data_list_roles: action.response.data,
        result: action.response.data.result || false
      });
    case INSERTAR_ROL:
      return state.merge({
        data_list_roles: action.response.data,
        result: action.response.data.result || false
      });
    case constant.DENEGAR:
      return state.merge({
        error: constant.MESSAGE
      });
    default:
      return state;
  }
}

const Reducer = combineReducers({
  rol
});

export default Reducer;
