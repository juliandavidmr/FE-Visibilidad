import { combineReducers } from 'redux';

import {
  LISTAR_NIVELES,
  VER_NIVEL,
  INSERTAR_NIVEL,
  ELIMINAR_NIVEL,
  ERROR_ACTUALIZAR_NIVEL,
  ERROR_INSERTAR_NIVEL,
  ERROR_ELIMINAR_NIVEL,
  ERROR_LISTAR_NIVELES,
  ERROR_NIVEL,
  SUCCESSFULL_DELETE_NIVEL,
  SUCCESSFULL_INSERT_NIVEL,
  SUCCESSFULL_UPDATE_NIVEL
} from '../constants/nivel';

import Immutable from 'immutable';

const initialState = new Immutable.Map({
  data_list_nivel: [],
  error: null,
  result: false
});

export function nivel(state = initialState, action) {
  switch (action.type) {
    case LISTAR_NIVELES:
      return state.merge({
        data_list_nivel: action.response.data,
        error: null,
        result: true
      });
    case INSERTAR_NIVEL:
      return state.merge({
        data_list_nivel: action.response.data, // Valores del registro insertado
        err: null,
        result: true
      });
    default:
      return state;
  }
}

const Reducer = combineReducers({
  nivel
});

export default Reducer;