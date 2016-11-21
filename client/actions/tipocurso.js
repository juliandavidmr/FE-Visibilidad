import axios from 'axios';

import {
  LISTAR_TIPOS_CURSOS,
  VER_TIPO_CURSO,
  INSERTAR_TIPO_CURSO,
  ELIMINAR_TIPO_CURSO,
  ERROR_ACTUALIZAR_TIPO_CURSO,
  ERROR_ELIMINAR_TIPO_CURSO,
  ERROR_INSERTAR_TIPO_CURSO,
  ERROR_LISTAR_TIPOS_CURSOS,
  ERROR_TIPO_CURSO,
  SUCCESSFULL_DELETE_TIPO_CURSO,
  SUCCESSFULL_INSERT_TIPO_CURSO,
  SUCCESSFULL_UPDATE_TIPO_CURSO
} from '../constants/tipocurso';

import {
  TIPO_CURSO_GET_TIPOS_CURSO,
  TIPO_CURSO_DELETE_TIPO_CURSO,
  TIPO_CURSO_POST_TIPO_CURSO
} from '../constants/api';

export function error_listar(error) {
  return {
    error,
    type: ERROR_LISTAR_TIPOS_CURSOS
  };
}

export function error_registrar(error) {
  return {
    error,
    type: ERROR_INSERTAR_TIPO_CURSO
  };
}

export function tipocurso_listar_request(response) {
  return {
    response,
    type: LISTAR_TIPOS_CURSOS
  };
}

export function tipocurso_post_request(response) {
  return dispatch => {
    dispatch({
      response,
      type: SUCCESSFULL_INSERT_TIPO_CURSO
    });
  };
}

export function listar() {
  return dispatch =>
    axios.get(TIPO_CURSO_GET_TIPOS_CURSO)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          console.log('Response listar tipocurso: ', response);

          dispatch(tipocurso_listar_request(response));
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