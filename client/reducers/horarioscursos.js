import { combineReducers } from 'redux';

import {
  LISTAR_HORARIOS_CURSOS,
  VER_HORARIO_CURSO,
  INSERTAR_HORARIO_CURSO,
  ELIMINAR_HORARIO_CURSO,
  ERROR_ACTUALIZAR_HORARIO_CURSO,
  ERROR_INSERTAR_HORARIO_CURSO,
  ERROR_ELIMINAR_HORARIO_CURSO,
  ERROR_LISTAR_HORARIOS_CURSOS,
  SUCCESSFULL_DELETE_HORARIO_CURSO,
  SUCCESSFULL_UPDATE_HORARIO_CURSO,
  SUCCESSFULL_INSERT_HORARIO_CURSO
} from '../constants/horarioscursos';

import Immutable from 'immutable';

const initialState = new Immutable.Map({
  data_list_horarioscursos: [],
  error: null,
  result: false
});

export function horarioscursos(state = initialState, action) {
  switch (action.type) {
    case LISTAR_HORARIOS_CURSOS:
      return state.merge({
        data_list_horarioscursos: action.response.data,
        error: null,
        result: true
      });
    case INSERTAR_HORARIO_CURSO:
      return state.merge({
        data_list_horarioscursos: action.response.data, // Valores del registro insertado
        err: null,
        result: true
      });
    default:
      return state;
  }
}

const Reducer = combineReducers({
  horarioscursos
});

export default Reducer;