import { combineReducers } from 'redux';

import {
  LISTAR_GRUPOS,
  VER_GRUPO,
  INSERTAR_GRUPO,
  ELIMINAR_GRUPO,
  ERROR_ACTUALIZAR_GRUPO,
  ERROR_INSERTAR_GRUPO,
  ERROR_ELIMINAR_GRUPO,
  SUCCESSFULL_DELETE_GRUPO,
  SUCCESSFULL_UPDATE_GRUPO,
  SUCCESSFULL_INSERT_GRUPO,
  ERROR_LISTAR_GRUPOS
} from '../constants/grupo';

import Immutable from 'immutable';

const initialState = new Immutable.Map({
  data_list_grupo: [],
  error: null,
  result: false
});

export function grupo(state = initialState, action) {
  switch (action.type) {
    case LISTAR_GRUPOS:
      return state.merge({
        data_list_grupo: action.response.data,
        error: null,
        result: true
      });
    case INSERTAR_GRUPO:
      return state.merge({
        data_list_grupo: action.response.data, // Valores del registro insertado
        err: null,
        result: true
      });
    default:
      return state;
  }
}

const Reducer = combineReducers({
  grupo
});

export default Reducer;