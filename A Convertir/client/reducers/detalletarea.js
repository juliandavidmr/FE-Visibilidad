import { combineReducers } from 'redux';

import {
  LISTAR_DETALLE_TAREAS,
  VER_DETALLE_TAREA,
  INSERTAR_DETALLE_TAREA,
  ELIMINAR_DETALLE_TAREA,
  ERROR_ACTUALIZAR_DETALLE_TAREA,
  ERROR_INSERTAR_DETALLE_TAREA,
  ERROR_ELIMINAR_DETALLE_TAREA,
  ERROR_LISTAR_DETALLE_TAREA,
  SUCCESSFULL_DELETE_DETALLE_TAREA,
  SUCCESSFULL_INSERT_DETALLE_TAREA,
  SUCCESSFULL_UPDATE_DETALLE_TAREA,
  ERROR_DETALLE_TAREA
} from '../constants/detalletarea';

import Immutable from 'immutable';

const initialState = new Immutable.Map({
  data_list_detalletarea: [],
  error: null,
  result: false
});

export function detalletarea(state = initialState, action) {
  switch (action.type) {
    case LISTAR_DETALLE_TAREAS:
      return state.merge({
        data_list_detalletarea: action.response.data,
        error: null,
        result: true
      });
    case INSERTAR_DETALLE_TAREA:
      return state.merge({
        data_list_detalletarea: action.response.data, // Valores del registro insertado
        err: null,
        result: true
      });
    default:
      return state;
  }
}

const Reducer = combineReducers({
  detalletarea
});

export default Reducer;