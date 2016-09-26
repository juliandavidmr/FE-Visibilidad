import { combineReducers } from 'redux';

import {
  LISTAR_SEMILLEROS,
  VER_SEMILLERO,
  INSERTAR_SEMILLERO,
  ELIMINAR_SEMILLERO,
  ERROR_ACTUALIZAR_SEMILLERO,
  ERROR_INSERTAR_SEMILLERO,
  ERROR_ELIMINAR_SEMILLERO,
  SUCCESSFULL_DELETE_SEMILLERO,
  SUCCESSFULL_UPDATE_SEMILLERO,
  SUCCESSFULL_INSERT_SEMILLERO,
  ERROR_LISTAR_SEMILLERO
} from '../constants/semilleros';

import Immutable from 'immutable';

const initialState = new Immutable.Map({
  data_list_semilleros: [],
  error: null,
  result: false
});

export function semillero(state = initialState, action) {
  switch (action.type) {
    case LISTAR_SEMILLEROS:
      return state.merge({
        data_list_semilleros: action.response.data,
        error: null,
        result: true
      });
    case INSERTAR_SEMILLERO:
      return state.merge({
        data_list_semilleros: action.response.data, // Valores del registro insertado
        err: null,
        result: true
      });
    default:
      return state;
  }
}

const Reducer = combineReducers({
  semillero
});

export default Reducer;