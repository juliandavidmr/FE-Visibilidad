import axios from 'axios';

import {
  LISTAR_ACTIVIDADES,
  VER_ACTIVIDAD,
  INSERTAR_ACTIVIDAD,
  ELIMINAR_ACTIVIDAD,
  ERROR_ACTUALIZAR_ACTIVIDAD,
  ERROR_INSERTAR_ACTIVIDAD,
  ERROR_ELIMINAR_ACTIVIDAD,
  ERROR_ACTIVIDAD,
  ERROR_LISTAR_ACTIVIDAD,
  SUCCESSFULL_DELETE_ACTIVIDAD,
  SUCCESSFULL_UPDATE_ACTIVIDAD,
  SUCCESSFULL_INSERT_ACTIVIDAD
} from '../constants/actividad';

import {
  ACTIVIDAD_DELETE_ACTIVIDAD,
  ACTIVIDAD_GET_ACTIVIDADES,
  ACTIVIDAD_POST_ACTIVIDAD
} from '../constants/api';

export function error_listar(error) {
  return {
    error,
    type: ERROR_LISTAR_ACTIVIDAD
  };
}

export function actividad_listar_request(response) {
  return dispatch => {
    dispatch({
      response,
      type: LISTAR_ACTIVIDADES
    });
  };
}

export function actividad_post_request(response) {
  return dispatch => {
    dispatch({
      response,
      type: SUCCESSFULL_INSERT_ACTIVIDAD
    });
  };
}

export function listar() {
  return dispatch => {
    axios.get(ACTIVIDAD_GET_ACTIVIDADES)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          console.log('Response listar actividades: ', response);

          dispatch(actividad_listar_request(response));
        } else {
          const error = new Error(response.statusText);
          error.response = response;

          dispatch(error_listar(error));
        }
      }).catch(err => {
        const error = new Error(err);
        dispatch(error_listar(error));
      });
  };
}