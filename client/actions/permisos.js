import axios from 'axios';

import {
  LISTAR_PERMISOS,
  VER_PERMISO,
  INSERTAR_PERMISO,
  ELIMINAR_PERMISO,
  ERROR_ACTUALIZAR_PERMISO,
  ERROR_INSERTAR_PERMISO,
  ERROR_ELIMINAR_PERMISO,
  ERROR_LISTAR_PERMISO,
  SUCCESSFULL_DELETE_PERMISO,
  SUCCESSFULL_INSERT_PERMISO,
  SUCCESSFULL_UPDATE_PERMISO
} from '../constants/permisos';

import {
  PERMISO_GET_PERMISO,
  PERMISO_DELETE_PERMISO,
  PERMISO_POST_PERMISO
} from '../constants/api';

export function error_listar(error) {
  return {
    error,
    type: ERROR_LISTAR_PERMISO
  };
}

export function error_post_insert(error) {
  return {
    error,
    type: ERROR_INSERTAR_PERMISO
  };
}

export function permiso_listar_request(response) {
  return dispatch => {
    dispatch({
      response,
      type: LISTAR_PERMISOS
    });
  };
}

export function permiso_post_request(response) {
  return dispatch => {
    dispatch({
      response,
      type: SUCCESSFULL_INSERT_PERMISO
    });
  };
}

export function listar() {
  return dispatch =>
    axios.get(PERMISO_GET_PERMISO)
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        console.log('Response listar permisos: ', response);

        dispatch(permiso_listar_request(response));
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

export function registrar(permiso_data) {
  return dispatch => {
    axios.post(PERMISO_POST_PERMISO, {
        prms_idpermiso: Math.floor((Math.random() * 800) + 1),
        prms_nombrepermiso: permiso_data.nombre,
        prms_icono: permiso_data.icono
      })
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          console.log('Response registrar permisos: ', response);
          dispatch(permiso_post_request(response));
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