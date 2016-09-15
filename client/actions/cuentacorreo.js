import axios from 'axios';

import {
  LISTAR_CUENTAS_CORREOS,
  VER_CUENTA_CORREO,
  INSERTAR_CUENTA_CORREO,
  ELIMINAR_CUENTA_CORREO,
  ERROR_ACTUALIZAR_CUENTA_CORREO,
  ERROR_INSERTAR_CUENTA_CORREO,
  ERROR_ELIMINAR_CUENTA_CORREO,
  ERROR_CUENTA_CORREO,
  ERROR_LISTAR_CUENTAS_CORREOS,
  SUCCESSFULL_DELETE_CUENTA_CORREO,
  SUCCESSFULL_INSERT_CUENTA_CORREO,
  SUCCESSFULL_UPDATE_CUENTA_CORREO
} from '../constants/cuentacorreo';

import {
  CUENTA_CORREO_GET_CUENTA_CORREO,
  CUENTA_CORREO_POST_CUENTA_CORREO,
  CUENTA_CORREO_DELETE_CUENTA_CORREO
} from '../constants/api';

export function error_listar(error) {
  return {
    error,
    type: ERROR_LISTAR_CUENTAS_CORREOS
  };
}

export function error_registrar(error) {
  return {
    error,
    type: ERROR_INSERTAR_CUENTA_CORREO
  };
}

export function cuentacorreo_listar_request(response) {
  return dispatch => {
    dispatch({
      response,
      type: LISTAR_CUENTAS_CORREOS
    });
  };
}

export function cuentacorreo_post_request(response) {
  return dispatch => {
    dispatch({
      response,
      type: SUCCESSFULL_INSERT_CUENTA_CORREO
    });
  };
}

export function listar() {
  return dispatch =>
    axios.get(CUENTA_CORREO_GET_CUENTA_CORREO)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          console.log('Response listar cuentacorreo: ', response);

          dispatch(cuentacorreo_listar_request(response));
        } else {
          const error = new Error(response.statusText);
          error.response = response;

          dispatch(error_listar(error));
        }
      }).catch(err => {
        const error = new Error(err);
        dispatch(error_listar(error));
      });
}

export function registrar(cuentacorreo_data) {
  return dispatch => {
    axios.post(CUENTA_CORREO_POST_CUENTA_CORREO)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          console.log('Response registrar cuentacorreo: ', response);
          dispatch(cuentacorreo_post_request(response));
        } else {
          const error = new Error(response.statusText);
          error.response = response;

          dispatch(error_registrar(error));
        }
      }).catch(error => {
        const err = new Error(error);

        dispatch(error_registrar(err));
      });
  };
}