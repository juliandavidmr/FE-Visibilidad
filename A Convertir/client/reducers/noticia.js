import { combineReducers } from 'redux';

import {
  VER_NOTICIA,
  INSERTAR_NOTICIA,
  ELIMINAR_NOTICIA,
  LISTAR_NOTICIAS,
  ERROR_INSERTAR_NOTICIA,
  ERROR_ACTUALIZAR_NOTICIA,
  ERROR_ELIMINAR_NOTICIA,
  ERROR_LISTAR_NOTICIAS,
  ERROR_NOTICIA,
  SUCCESSFULL_INSERT_NOTICIA,
  SUCCESSFULL_UPDATE_NOTICIA,
  SUCCESSFULL_DELETE_NOTICIA
} from '../constants/noticia';

import Immutable from 'immutable';

const initialState = new Immutable.Map({
  data_list_noticias: [],
  error: null,
  result: false
});

export function noticia(state = initialState, action) {
  switch (action.type) {
    case LISTAR_NOTICIAS:
      return state.merge({
        data_list_noticias: action.response.data,
        error: null,
        result: true
      });
    case INSERTAR_NOTICIA:
      return state.merge({
        data_list_noticias: action.response.data,
        error: true,
        result: true
      });
    default:
      return state;
  }
}

const Reducer = combineReducers({
  noticia
});

export default Reducer;