import { combineReducers } from 'redux';

import {
  LISTAR_PROGRAMAS,
  VER_PROGRAMA,
  INSERTAR_PROGRAMA,
  ELIMINAR_PROGRAMA,
  ERROR_ACTUALIZAR_PROGRAMA,
  ERROR_ELIMINAR_PROGRAMA,
  ERROR_INSERTAR_PROGRAMA,
  ERROR_LISTAR_PROGRAMAS,
  SUCCESSFULL_DELETE_PROGRAMA,
  SUCCESSFULL_INSERT_PROGRAMA,
  SUCCESSFULL_UPDATE_PROGRAMA
} from '../constants/programa.js';

import Immutable from 'immutable';

const initialState = new Immutable.Map({
  data_list_programas: [],
  error: null,
  result: false
});

export function programa(state = initialState, action) {
  switch (action.type) {
    case LISTAR_PROGRAMAS:
      return state.merge({
        data_list_programas: action.response.data,
        error: null,
        result: true
      });
    case INSERTAR_PROGRAMA:
      return state.merge({
        data_list_programas: action.response.data, // Valores del registro insertado
        err: null,
        result: true
      });
    default:
      return state;
  }
}

const Reducer = combineReducers({
  programa
});

export default Reducer;