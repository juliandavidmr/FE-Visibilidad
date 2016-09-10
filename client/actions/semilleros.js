import axios from 'axios';

import {
  LISTAR_SEMILLEROS,
  VER_SEMILLERO,
  INSERTAR_SEMILLERO,
  ELIMINAR_SEMILLERO,
  ERROR_ACTUALIZAR_SEMILLERO,
  ERROR_INSERTAR_SEMILLERO,
  ERROR_ELIMINAR_SEMILLERO,
  SUCCESSFULL_DELETE_SEMILLERO,
  SUCCESSFULL_UPDATE_SEMILLERO,
  SUCCESSFULL_INSERT_SEMILLERO,
  ERROR_LISTAR_SEMILLERO
} from '../constants/semilleros';

import {
  SEMILLERO_GET_SEMILLEROS,
  SEMILLERO_POST_SEMILLERO
} from '../constants/api';

export function errorListar(error) {
  return {
    error,
    type: ERROR_LISTAR_SEMILLERO
  };
}

export function semillero_listar_request(response) {
  return dispatch => {
    dispatch({
      response,
      type: LISTAR_SEMILLEROS
    });
  };
}

export function semillero_post_request(response) {
  return dispatch => {
    dispatch({
      response,
      type: SUCCESSFULL_INSERT_SEMILLERO
    });
  };
}

export function listar() {
  return dispatch =>
    axios.get(SEMILLERO_GET_SEMILLEROS)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          console.log('Response listar semilleros: ', response);

          dispatch(semillero_listar_request(response));
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

export function registrar(semillero_data) {
  return dispatch => {
    axios.post(SEMILLERO_POST_SEMILLERO)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          console.log('Response registrar semillero: ', response);
          dispatch(semillero_post_request(response));
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