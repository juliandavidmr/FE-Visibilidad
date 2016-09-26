import {
  combineReducers
} from 'redux';

import {
  LISTAR_PERMISOS,
  VER_PERMISO,
  INSERTAR_PERMISO,
  ELIMINAR_PERMISO,
  ERROR_ACTUALIZAR_PERMISO,
  ERROR_INSERTAR_PERMISO,
  ERROR_ELIMINAR_PERMISO,
  ERROR_LISTAR_PERMISO,
  SUCCESSFULL_DELETE_PERMISO,
  SUCCESSFULL_INSERT_PERMISO,
  SUCCESSFULL_UPDATE_PERMISO
} from '../constants/permisos';

import Immutable from 'immutable';

const initialState = new Immutable.Map({
  data_list_permisos: [],
  error: null,
  result: false
});

export function permiso(state = initialState, action) {
  switch (action.type) {
    case LISTAR_PERMISOS:
      return state.merge({
        data_list_permisos: action.response.data,
        error: null,
        result: action.response.data.result
      });
    case INSERTAR_PERMISO:
      return state.merge({
        data_list_permisos: action.response.data,
        error: null,
        result: action.response.data.result
      });
    default:
      return state;
  }
}

const Reducer = combineReducers({
  permiso
});

export default Reducer;