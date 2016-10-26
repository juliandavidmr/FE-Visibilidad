import axios from 'axios';

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

import {
  EVENTO_GET_EVENTOS,
  EVENTO_DELETE_EVENTO,
  EVENTO_POST_EVENTO
} from '../constants/api';

function error_listar(error) {
  return {
    error,
    type: ERROR_LISTAR_EVENTO
  };
}

function evento_listar_request(response) {
  return dispatch => {
    dispatch({
      response,
      type: LISTAR_EVENTOS
    });
  };
}

function actividad_post_request(response) {
  return dispatch => {
    dispatch({
      response,
      type: SUCCESSFULL_INSERT_EVENTO
    });
  };
}

export function listar() {
  return dispatch => {
    axios.get(EVENTO_GET_EVENTOS)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          console.log('Response listar eventos: ', response);

          dispatch(evento_listar_request(response));
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

export function registrar(evento_data) {
  return dispatch =>
    axios.post(EVENTO_POST_EVENTO, evento_data)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          console.log('Response registrar evento: ', response);
          dispatch(actividad_post_request(response));
        } else {
          const error = new Error(response.statusText);
          error.response = response;

          dispatch(error_listar(error));
        }
      }).catch(error => {
        const err = new Error(error);

        dispatch(error_listar(err));
      });
}