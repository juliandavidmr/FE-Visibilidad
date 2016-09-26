import { combineReducers } from 'redux';

import {
  LISTAR_SUBPERMISOS,
  VER_SUBPERMISO,
  INSERTAR_SUBPERMISO,
  ERROR_ACTUALIZAR_SUBPERMISO,
  ERROR_ELIMINAR_SUBPERMISO,
  ERROR_INSERTAR_SUBPERMISO,
  ERROR_LISTAR_SUBPERMISOS,
  ERROR_SUBPERMISO,
  SUCCESSFULL_DELETE_SUBPERMISO,
  SUCCESSFULL_INSERT_SUBPERMISO,
  SUCCESSFULL_UPDATE_SUBPERMISO
} from '../constants/subpermisos';

import Immutable from 'immutable';

const initialState = new Immutable.Map({
  data_list_subpermisos: [],
  error: null,
  result: false
});

export function subpermisos(state = initialState, action) {
  switch (action.type) {
    case LISTAR_SUBPERMISOS:
      return state.merge({
        data_list_subpermisos: action.response.data,
        error: null,
        result: false
      });
    case INSERTAR_SUBPERMISO:
      return state.merge({
        data_list_subpermisos: action.response.data, // Valores del registro insertado
        error: null,
        result: false
      });
    default:
      return state;
  }
}

const Reducer = combineReducers({
  subpermisos
});

export default Reducer;