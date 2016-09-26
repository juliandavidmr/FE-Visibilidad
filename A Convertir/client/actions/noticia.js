import axios from 'axios';

import {
  VER_NOTICIA,
  INSERTAR_NOTICIA,
  ELIMINAR_NOTICIA,
  LISTAR_NOTICIAS,
  ERROR_INSERTAR_NOTICIA,
  ERROR_ACTUALIZAR_NOTICIA,
  ERROR_ELIMINAR_NOTICIA,
  ERROR_LISTAR_NOTICIAS,
  ERROR_NOTICIA,
  SUCCESSFULL_INSERT_NOTICIA,
  SUCCESSFULL_UPDATE_NOTICIA,
  SUCCESSFULL_DELETE_NOTICIA
} from '../constants/noticia';

import {
  NOTICIA_GET_NOTICIAS,
  NOTICIA_POST_NOTICIA,
  NOTICIA_DELETE_NOTICIA
} from '../constants/api';

export function errorListar(error) {
  return {
    error,
    type: ERROR_LISTAR_NOTICIAS
  };
}

export function noticia_listar_request(response) {
  return dispatch => {
    dispatch({
      response,
      type: LISTAR_NOTICIAS
    });
  };
}

export function noticia_post_request(response) {
  return dispatch => {
    dispatch({
      response,
      type: SUCCESSFULL_INSERT_NOTICIA
    });
  };
}

export function listar() {
  return dispatch =>
    axios.get(NOTICIA_GET_NOTICIAS)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          console.log('Response listar NOTICIAs: ', response);

          dispatch(noticia_listar_request(response));
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


export function registrar(noticia_data) {
  return dispatch => {
    axios.post(NOTICIA_POST_NOTICIA)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          console.log('Response registrar noticia: ', response);
          dispatch(noticia_post_request(response));
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