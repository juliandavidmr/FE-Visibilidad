import axios from 'axios';

import {
  LISTAR_SUBPERMISOS,
  VER_SUBPERMISO,
  INSERTAR_SUBPERMISO,
  ERROR_ACTUALIZAR_SUBPERMISO,
  ERROR_ELIMINAR_SUBPERMISO,
  ERROR_INSERTAR_SUBPERMISO,
  ERROR_LISTAR_SUBPERMISOS,
  ERROR_SUBPERMISO,
  SUCCESSFULL_DELETE_SUBPERMISO,
  SUCCESSFULL_INSERT_SUBPERMISO,
  SUCCESSFULL_UPDATE_SUBPERMISO
} from '../constants/subpermisos';

import {
  SUBPERMISO_DELETE_SUBPERMISO,
  SUBPERMISO_GET_SUBPERMISO,
  SUBPERMISO_POST_SUBPERMISO
} from '../constants/api';

export function error_listar(error) {
  return {
    error,
    type: ERROR_LISTAR_SUBPERMISOS
  };
}

export function error_post_insert(error) {
  return {
    error,
    type: ERROR_INSERTAR_SUBPERMISO
  };
}

export function subpermiso_listar_request(response) {
  return dispatch => {
    dispatch({
      response,
      type: LISTAR_SUBPERMISOS
    });
  };
}

export function subpermiso_post_request(response) {
  return dispatch => {
    dispatch({
      response,
      type: SUCCESSFULL_INSERT_SUBPERMISO
    });
  };
}

export function listar() {
  return dispatch =>
    axios.get(SUBPERMISO_GET_SUBPERMISO)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          console.log('Response listar subpermisos: ', response);

          dispatch(subpermiso_listar_request(response));
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

export function registrar(subpermisos_data) {
  return dispatch => {
    axios.post(SUBPERMISO_POST_SUBPERMISO, {
      spms_idsubpermiso:  Math.floor((Math.random() * 800) + 1),
      spms_nombresubpermiso: subpermisos_data.nombre,
      spms_icono: subpermisos_data.icono,
      spms_url: subpermisos_data.url,
      prms_fk_idpermiso: subpermisos_data.id_permiso
    })
      .then(response => {
        if (response.status >= 200 && response.status < 300 && !!response.data.result) {
          console.log('Response registrar subpermisos: ', response);
          dispatch(subpermiso_post_request(response));
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