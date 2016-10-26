import {
  combineReducers
} from 'redux';

import {
  LISTAR_EVENTOS,
  VER_EVENTO,
  INSERTAR_EVENTO,
  ELIMINAR_EVENTO,
  ERROR_ACTUALIZAR_EVENTO,
  ERROR_ELIMINAR_EVENTO,
  ERROR_INSERTAR_EVENTO,
  ERROR_LISTAR_EVENTO,
  SUCCESSFULL_DELETE_EVENTO,
  SUCCESSFULL_INSERT_EVENTO,
  SUCCESSFULL_UPDATE_EVENTO
} from '../constants/evento.js';

import Immutable from 'immutable';


const initialState = new Immutable.Map({
  data_list_eventos: [],
  error: null,
  result: false
});

export function evento(state = initialState, action) {
  switch (action.type) {
    case LISTAR_EVENTOS:
      return state.merge({
        data_list_eventos: action.response.data,
        error: null,
        result: action.response.data.result
      });
    case INSERTAR_EVENTO:
      return state.merge({
        data_list_eventos: action.response.data,
        error: null,
        result: action.response.data.result
      });
    default:
      return state;
  }
}

const Reducer = combineReducers({
  evento
});

export default Reducer;