import axios from 'axios';

import {
  LISTAR_NIVELES,
  VER_NIVEL,
  INSERTAR_NIVEL,
  ELIMINAR_NIVEL,
  ERROR_ACTUALIZAR_NIVEL,
  ERROR_INSERTAR_NIVEL,
  ERROR_ELIMINAR_NIVEL,
  ERROR_LISTAR_NIVELES,
  ERROR_NIVEL,
  SUCCESSFULL_DELETE_NIVEL,
  SUCCESSFULL_INSERT_NIVEL,
  SUCCESSFULL_UPDATE_NIVEL
} from '../constants/nivel';

import {
  NIVEL_GET_NIVELES,
  NIVEL_POST_NIVEL,
  NIVEL_DELETE_NIVEL
} from '../constants/api';

export function errorListar(error) {
  return {
    error,
    type: ERROR_LISTAR_NIVELES
  };
}

export function error_registrar(error) {
  return {
    error,
    type: ERROR_INSERTAR_NIVEL
  };
}

export function nivel_listar_request(response) {
  return dispatch => {
    dispatch({
      response,
      type: LISTAR_NIVELES
    });
  };
}

export function nivel_post_request(response) {
  return dispatch => {
    dispatch({
      response,
      type: SUCCESSFULL_INSERT_NIVEL
    });
  };
}

export function listar() {
  return dispatch =>
    axios.get(NIVEL_GET_NIVELES)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          console.log('Response listar nivel: ', response);

          dispatch(nivel_listar_request(response));
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

export function registrar(nivel_data) {
  console.log('Action data nivel: ', nivel_data);

  return dispatch => {
    axios.post(NIVEL_POST_NIVEL, {
      nvel_idnivel: Math.floor((Math.random() * 800) + 1),
      nvel_nombre: nivel_data.nombre,
      nvel_descripcion: nivel_data.descripcion,
      nvel_estado: nivel_data.estado
    })
      .then(response => {
        if (response.status >= 200 && response.status < 300 && response.data.result) {
          console.log('Response registrar nivel: ', response);
          dispatch(nivel_post_request(response));
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
