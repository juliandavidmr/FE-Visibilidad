import { combineReducers } from 'redux';

import {
  LISTAR_ESTUDIANTE_CURSOS,
  VER_ESTUDIANTE_CURSO,
  INSERTAR_ESTUDIANTE_CURSO,
  ELIMINAR_ESTUDIANTE_CURSO,
  ERROR_ACTUALIZAR_ESTUDIANTE_CURSO,
  ERROR_INSERTAR_ESTUDIANTE_CURSO,
  ERROR_ELIMINAR_ESTUDIANTE_CURSO,
  ERROR_LISTAR_ESTUDIANTES_CURSOS,
  SUCCESSFULL_DELETE_ESTUDIANTE_CURSO,
  SUCCESSFULL_INSERT_ESTUDIANTE_CURSO,
  SUCCESSFULL_UPDATE_ESTUDIANTE_CURSO  
} from '../constants/estudiantecurso';

import Immutable from 'immutable';

const initialState = new Immutable.Map({
  data_list_estudiantecurso: [],
  error: null,
  result: false
});

export function estudiantecurso(state = initialState, action) {
  switch (action.type) {
    case LISTAR_SEMILLEROS:
      return state.merge({
        data_list_estudiantecurso: action.response.data,
        error: null,
        result: true
      });
    case INSERTAR_SEMILLERO:
      return state.merge({
        data_list_estudiantecurso: action.response.data, // Valores del registro insertado
        err: null,
        result: true
      });
    default:
      return state;
  }
}

const Reducer = combineReducers({
  estudiantecurso
});

export default Reducer;