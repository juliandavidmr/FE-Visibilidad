import {
  combineReducers
} from 'redux';

import {
  LISTAR_TIPOS_CURSOS,
  VER_TIPO_CURSO,
  INSERTAR_TIPO_CURSO,
  ELIMINAR_TIPO_CURSO,
  ERROR_ACTUALIZAR_TIPO_CURSO,
  ERROR_ELIMINAR_TIPO_CURSO,
  ERROR_TIPO_CURSO,
  ERROR_INSERTAR_TIPO_CURSO,
  SUCCESSFULL_DELETE_TIPO_CURSO,
  SUCCESSFULL_INSERT_TIPO_CURSO,
  SUCCESSFULL_UPDATE_TIPO_CURSO
} from '../constants/tipocurso';

import Immutable from 'immutable';

const initialState = new Immutable.Map({
  data_list_tipocurso: [],
  error: null,
  result: false
});

export function tipocurso(state = initialState, action) {
  switch (action.type) {
    case LISTAR_TIPOS_CURSOS:
      return state.merge({
        data_list_tipocurso: action.response.data,
        error: null,
        result: action.response.data.result
      });
    case INSERTAR_TIPO_CURSO:
      return state.merge({
        data_list_tipocurso: action.response.data,
        error: null,
        result: action.response.data.result
      });
    default:
      return state;
  }
}

const Reducer = combineReducers({
  tipocurso
});

export default Reducer;