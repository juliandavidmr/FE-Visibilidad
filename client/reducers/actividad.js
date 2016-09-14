import {
  combineReducers
} from 'redux';

import {
  LISTAR_ACTIVIDADES,
  VER_ACTIVIDAD,
  INSERTAR_ACTIVIDAD,
  ELIMINAR_ACTIVIDAD,
  ERROR_ACTUALIZAR_ACTIVIDAD,
  ERROR_ELIMINAR_ACTIVIDAD,
  ERROR_INSERTAR_ACTIVIDAD,
  SUCCESSFULL_DELETE_ACTIVIDAD,
  SUCCESSFULL_INSERT_ACTIVIDAD,
  SUCCESSFULL_UPDATE_ACTIVIDAD
} from '../constants/actividad';

import Immutable from 'immutable';

const initialState = new Immutable.Map({
  data_list_actividades: [],
  error: null,
  result: false
});

export function actividad(state = initialState, action) {
  switch (action.type) {
    case LISTAR_ACTIVIDADES:
      return state.merge({
        data_list_actividades: action.response.data,
        error: null,
        result: action.response.data.result
      });
    case INSERTAR_ACTIVIDAD:
      return state.merge({
        data_list_actividades: action.response.data,
        error: null,
        result: action.response.data.result
      });
    default:
      return state;
  }
}

const Reducer = combineReducers({
  actividad
});

export default Reducer;