import axios from 'axios';

import {
  LISTAR_COMPETENCIAS,
  VER_COMPETENCIA,
  INSERTAR_COMPETENCIA,
  ELIMINAR_COMPETENCIA,
  ERROR_ACTUALIZAR_COMPETENCIA,
  ERROR_INSERTAR_COMPETENCIA,
  ERROR_ELIMINAR_COMPETENCIA,
  ERROR_LISTAR_COMPETENCIA,
  ERROR_COMPETENCIA,
  SUCCESSFULL_DELETE_COMPETENCIA,
  SUCCESSFULL_UPDATE_COMPETENCIA,
  SUCCESSFULL_INSERT_COMPETENCIA
} from '../constants/competencia';

import {
  COMPETENCIA_GET_COMPETENCIAS,
  COMPETENCIA_DELETE_COMPETENCIA,
  COMPETENCIA_POST_COMPETENCIA
} from '../constants/api';

export function errorListar(error) {
  return {
    error,
    type: ERROR_LISTAR_COMPETENCIA
  };
}

export function competencia_listar_request(response) {
  return dispatch => {
    dispatch({
      response,
      type: LISTAR_COMPETENCIAS
    });
  };
}

export function competencia_post_request(response) {
  return dispatch => {
    dispatch({
      response,
      type: SUCCESSFULL_INSERT_COMPETENCIA
    });
  };
}

export function listar() {
  return dispatch =>
    axios.get(COMPETENCIA_GET_COMPETENCIAS)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          console.log('Response listar competencia: ', response);

          dispatch(competencia_listar_request(response));
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

export function registrar(competencia_data) {
  return dispatch => 
    axios.post(COMPETENCIA_POST_COMPETENCIA)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          console.log('Response registrar competencia: ', response);
          dispatch(competencia_post_request(response));
        } else {
          const error = new Error(response.statusText);
          error.response = response;

          dispatch(errorListar(error));
        }
      }).catch(error => {
        const err = new Error(error);

        dispatch(errorListar(err));
      });
}