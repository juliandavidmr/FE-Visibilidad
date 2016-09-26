import axios from 'axios';

import {
  LISTAR_TIPOS_ACTIVIDADES,
  VER_TIPO_ACTIVIDAD,
  INSERTAR_TIPO_ACTIVIDAD,
  ELIMINAR_TIPO_ACTIVIDAD,
  ERROR_ACTUALIZAR_TIPO_ACTIVIDAD,
  ERROR_ELIMINAR_TIPO_ACTIVIDAD,
  ERROR_INSERTAR_TIPO_ACTIVIDAD,
  ERROR_LISTAR_TIPOS_ACTIVIDADES,
  ERROR_TIPO_ACTIVIDAD,
  SUCCESSFULL_DELETE_TIPO_ACTIVIDAD,
  SUCCESSFULL_INSERT_TIPO_ACTIVIDAD,
  SUCCESSFULL_UPDATE_TIPO_ACTIVIDAD  
} from '../constants/tipoactividad.js';

import {
  TIPOACTIVIDAD_GET_TIPOACTIVIDAD,
  TIPOACTIVIDAD_DELETE_TIPOACTIVIDAD,
  TIPOACTIVIDAD_POST_TIPOACTIVIDAD
} from '../constants/api';

export function error_listar(error) {
  return {
    error,
    type: ERROR_LISTAR_TIPOS_ACTIVIDADES
  };
}

export function error_post_insert(error) {
  return {
    error,
    type: ERROR_INSERTAR_TIPO_ACTIVIDAD
  };
}

export function tipoactividad_listar_request(response) {
  return dispatch => {
    dispatch({
      response,
      type: LISTAR_TIPOS_ACTIVIDADES
    });
  };
}

export function tipoactividad_post_request(response) {
  return dispatch => {
    dispatch({
      response,
      type: SUCCESSFULL_INSERT_TIPO_ACTIVIDAD
    });
  };
}

export function listar() {
  return dispatch =>
    axios.get(SUBPERMISO_GET_SUBPERMISO)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          console.log('Response listar subpermisos: ', response);

          dispatch(tipoactividad_listar_request(response));
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
          dispatch(tipoactividad_post_request(response));
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