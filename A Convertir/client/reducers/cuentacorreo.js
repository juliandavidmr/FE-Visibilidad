import { combineReducers } from 'redux';

import {
  LISTAR_CUENTAS_CORREOS,
  VER_CUENTA_CORREO,
  INSERTAR_CUENTA_CORREO,
  ELIMINAR_CUENTA_CORREO,
  ERROR_ACTUALIZAR_CUENTA_CORREO,
  ERROR_INSERTAR_CUENTA_CORREO,
  ERROR_ELIMINAR_CUENTA_CORREO,
  ERROR_LISTAR_CUENTAS_CORREOS,
  ERROR_CUENTA_CORREO,
  SUCCESSFULL_DELETE_CUENTA_CORREO,
  SUCCESSFULL_INSERT_CUENTA_CORREO,
  SUCCESSFULL_UPDATE_CUENTA_CORREO  
} from '../constants/cuentacorreo';

import Immutable from 'immutable';

const initialState = new Immutable.Map({
  data_list_cuentacorreo: [],
  error: null,
  result: false
});

export function semillero(state = initialState, action) {
  switch (action.type) {
    case LISTAR_CUENTAS_CORREOS:
      return state.merge({
        data_list_semilleros: action.response.data,
        error: null,
        result: true
      });
    case INSERTAR_CUENTA_CORREO:
      return state.merge({
        data_list_semilleros: action.response.data, // Valores del registro insertado
        err: null,
        result: true
      });
    default:
      return state;
  }
}

const Reducer = combineReducers({
  semillero
});

export default Reducer;