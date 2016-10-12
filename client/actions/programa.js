import axios from 'axios';

import {
  LISTAR_PROGRAMAS,
  VER_PROGRAMA,
  INSERTAR_PROGRAMA,
  ELIMINAR_PROGRAMA,
  ERROR_ACTUALIZAR_PROGRAMA,
  ERROR_ELIMINAR_PROGRAMA,
  ERROR_INSERTAR_PROGRAMA,
  ERROR_LISTAR_PROGRAMAS,
  SUCCESSFULL_DELETE_PROGRAMA,
  SUCCESSFULL_INSERT_PROGRAMA,
  SUCCESSFULL_UPDATE_PROGRAMA
} from '../constants/programa.js';

import {
  PROGRAMA_DELETE_PROGRAMA,
  PROGRAMA_GET_PROGRAMAS,
  PROGRAMA_POST_PROGRAMA
} from '../constants/api.js';

function error_listar(error) {
  return {
    error,
    type: ERROR_LISTAR_PROGRAMAS
  };
}

function error_post_insert(error) {
  return {
    error,
    type: ERROR_INSERTAR_PROGRAMA
  };
}

function programa_listar_request(response) {
  return dispatch => {
    dispatch({
      response,
      type: LISTAR_PROGRAMAS
    });
  };
}

function programa_post_request(response) {
  return dispatch => {
    dispatch({
      response,
      type: SUCCESSFULL_INSERT_PROGRAMA
    });
  };
}

export function listar() {
  return dispatch =>
    axios.get(PROGRAMA_GET_PROGRAMAS)
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        console.log('Response listar permisos: ', response);

        dispatch(programa_listar_request(response));
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

export function registrar(programa_data) {
  return dispatch => {
    axios.post(PROGRAMA_POST_PROGRAMA, {
        prog_idprograma: Math.floor((Math.random() * 800) + 1),
        prog_nombre: programa_data.nombre
      })
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          console.log('Response registrar programa: ', response);
          dispatch(programa_post_request(response));
        } else {
          const error = new Error(response.statusText);
          error.response = response;

          dispatch(error_post_insert(error));
        }
      }).catch(error => {
        const err = new Error(error);

        dispatch(error_post_insert(err));
      });
  };
}