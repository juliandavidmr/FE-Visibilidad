import { combineReducers } from 'redux';

import {
  LISTAR_CORREOS_ENVIADOS,
  VER_CORREOS_ENVIADOS,
  INSERTAR_CORREO_ENVIADO,
  ERROR_ACTUALIZAR_CORREO_ENVIADO,
  ERROR_INSERTAR_CORREO_ENVIADO,
  ERROR_ELIMINAR_CORREO_ENVIADO,
  ERROR_LISTAR_CORREOS_ENVIADOS,
  SUCCESSFULL_DELETE_CORREO_ENVIADO,
  SUCCESSFULL_INSERT_CORREO_ENVIADO,
  SUCCESSFULL_UPDATE_CORREO_ENVIADO,
  ERROR_CORREOS_ENVIADOS
} from '../constants/correosenviados';

import Immutable from 'immutable';

const initialState = new Immutable.Map({
  data_list_correosenviados: [],
  error: null,
  result: false
});

export function correosenviados(state = initialState, action) {
  switch (action.type) {
    case LISTAR_CORREOS_ENVIADOS:
      return state.merge({
        data_list_correosenviados: action.response.data,
        error: null,
        result: true
      });
    case INSERTAR_CORREO_ENVIADO:
      return state.merge({
        data_list_correosenviados: action.response.data, // Valores del registro insertado
        err: null,
        result: true
      });
    default:
      return state;
  }
}

const Reducer = combineReducers({
  correosenviados
});

export default Reducer;
