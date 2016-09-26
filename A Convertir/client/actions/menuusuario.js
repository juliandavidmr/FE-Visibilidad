import axios from 'axios';

import {
  LISTAR_MENUS_USUARIOS,
  VER_MENU_USUARIO,
  INSERTAR_MENU_USUARIO,
  ERROR_ACTUALIZAR_MENU_USUARIO,
  ERROR_ELIMINAR_MENU_USUARIO,
  ERROR_INSERTAR_MENU_USUARIO,
  ERROR_LISTAR_MENUS_USUARIOS,
  ERROR_MENU_USUARIO,
  SUCCESSFULL_DELETE_MENU_USUARIO,
  SUCCESSFULL_INSERT_MENU_USUARIO,
  SUCCESSFULL_UPDATE_MENU_USUARIO
} from '../constants/menuusuario.js';

import {
  MENU_USUARIO_DELETE_MENU_USUARIO,
  MENU_USUARIO_GET_MENUS_USUARIO,
  MENU_USUARIO_POST_MENU_USUARIO
} from '../constants/api';

export function error_listar(error) {
  return {
    error,
    type: ERROR_LISTAR_MENUS_USUARIOS
  };
}

export function error_post_insert(error) {
  return {
    error,
    type: ERROR_INSERTAR_MENU_USUARIO
  };
}

export function menu_usuario_listar_request(response) {
  return dispatch => {
    dispatch({
      response,
      type: LISTAR_MENUS_USUARIOS
    });
  };
}

export function menu_usuario_post_request(response) {
  return dispatch => {
    dispatch({
      response,
      type: SUCCESSFULL_INSERT_MENU_USUARIO
    });
  };
}

export function listar() {
  return dispatch =>
    axios.get(MENU_USUARIO_GET_MENUS_USUARIO)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          console.log('Response listar menuusuario: ', response);

          dispatch(menu_usuario_listar_request(response));
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
    axios.post(MENU_USUARIO_POST_MENU_USUARIO, {
      rol_fk_idrol: subpermisos_data.id_rol,
      spms_fk_idsubpermiso: subpermisos_data.id_subpermiso,
      musr_estado: subpermisos_data.estado || 'T'
    })
      .then(response => {
        if (response.status >= 200 && response.status < 300 && !!response.data.result) {
          console.log('Response registrar menuusuario: ', response);
          dispatch(menu_usuario_post_request(response));
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