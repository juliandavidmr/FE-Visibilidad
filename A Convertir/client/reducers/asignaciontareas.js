import { combineReducers } from 'redux';

import {
  LISTAR_ASIGNACION_TAREAS,
  VER_ASIGNACION_TAREA,
  INSERTAR_ASIGNACION_TAREA,
  ELIMINAR_ASIGNACION_TAREA,
  ERROR_ACTUALIZAR_ASIGNACION_TAREA,
  ERROR_INSERTAR_ASIGNACION_TAREA,
  ERROR_ELIMINAR_ASIGNACION_TAREA,
  ERROR_ASIGNACION_TAREA,
  ERROR_LISTAR_ASIGNACION_TAREAS,
  SUCCESSFULL_DELETE_ASIGNACION_TAREA,
  SUCCESSFULL_UPDATE_ASIGNACION_TAREA,
  SUCCESSFULL_INSERT_ASIGNACION_TAREA
} from '../constants/asignaciontareas';

import Immutable from 'immutable';

const initialState = new Immutable.Map({
  data_list_asignaciontareas: [],
  error: null,
  result: false
});

export function asignaciontareas(state = initialState, action) {
  switch (action.type) {
    case LISTAR_ASIGNACION_TAREAS:
      return state.merge({
        data_list_asignaciontareas: action.response.data,
        error: null,
        result: true
      });
    case INSERTAR_ASIGNACION_TAREA:
      return state.merge({
        data_list_asignaciontareas: action.response.data, // Valores del registro insertado
        err: null,
        result: true
      });
    default:
      return state;
  }
}

const Reducer = combineReducers({
  asignaciontareas
});

export default Reducer;