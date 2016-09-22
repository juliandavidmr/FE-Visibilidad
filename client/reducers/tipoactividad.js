import {
  combineReducers
} from 'redux';

import {
  LISTAR_TIPOS_ACTIVIDADES,
  VER_TIPO_ACTIVIDAD,
  INSERTAR_TIPO_ACTIVIDAD,
  ELIMINAR_TIPO_ACTIVIDAD,
  ERROR_ACTUALIZAR_TIPO_ACTIVIDAD,
  ERROR_ELIMINAR_TIPO_ACTIVIDAD,
  ERROR_INSERTAR_TIPO_ACTIVIDAD,
  ERROR_LISTAR_TIPOS_ACTIVIDADES,
  ERROR_TIPO_ACTIVIDAD,
  SUCCESSFULL_DELETE_TIPO_ACTIVIDAD,
  SUCCESSFULL_INSERT_TIPO_ACTIVIDAD,
  SUCCESSFULL_UPDATE_TIPO_ACTIVIDAD  
} from '../constants/tipoactividad.js';

import Immutable from 'immutable';

const initialState = new Immutable.Map({
  data_list_tipoactividades: [],
  error: null,
  result: false
});

export function tipotipoactividad(state = initialState, action) {
  switch (action.type) {
    case LISTAR_TIPOS_CURSOS:
      return state.merge({
        data_list_tipoactividades: action.response.data,
        error: null,
        result: action.response.data.result
      });
    case INSERTAR_TIPO_CURSO:
      return state.merge({
        data_list_tipoactividades: action.response.data,
        error: null,
        result: action.response.data.result
      });
    default:
      return state;
  }
}

const Reducer = combineReducers({
  tipotipoactividad
});

export default Reducer;