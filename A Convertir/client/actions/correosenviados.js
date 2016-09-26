import axios from 'axios';

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

import {
  CORREO_ENVIADO_DELETE_CORREO_ENVIADO,
  CORREO_ENVIADO_GET_CORREOS_ENVIADOS,
  CORREO_ENVIADO_POST_CORREO_ENVIADO
} from '../constants/api';

export function errorListar(error) {
  return {
    error,
    type: ERROR_LISTAR_CORREOS_ENVIADOS
  };
}

export function correoenviado_listar_request(response) {
  return dispatch => {
    dispatch({
      response,
      type: LISTAR_CORREOS_ENVIADOS
    });
  };
}

export function correoenviado_post_request(response) {
  return dispatch => {
    dispatch({
      response,
      type: SUCCESSFULL_INSERT_CORREO_ENVIADO
    });
  };
}

export function listar() {
  return dispatch =>
    axios.get(CORREO_ENVIADO_GET_CORREOS_ENVIADOS)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          console.log('Response listar correosenviados: ', response);

          dispatch(correoenviado_listar_request(response));
        } else {
          const error = new Error(response.statusText);
          error.response = response;

          dispatch(errorListar(error));
        }
      }).catch(err => {
        const error = new Error(err);
        dispatch(errorListar(error));
      });
}

export function registrar(correosenviado_data) {
  return dispatch => {
    axios.post(CORREO_ENVIADO_POST_CORREO_ENVIADO)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          console.log('Response registrar correosenviados: ', response);
          dispatch(correoenviado_post_request(response));
        } else {
          const error = new Error(response.statusText);
          error.response = response;

          dispatch(errorListar(error));
        }
      }).catch(error => {
        const err = new Error(error);

        dispatch(errorListar(err));
      });
  };
}