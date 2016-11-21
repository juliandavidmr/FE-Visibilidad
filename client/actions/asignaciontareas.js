import axios from 'axios';

import {
  LISTAR_ASIGNACION_TAREAS,
  VER_ASIGNACION_TAREA,
  INSERTAR_ASIGNACION_TAREA,
  ELIMINAR_ASIGNACION_TAREA,
  ERROR_ACTUALIZAR_ASIGNACION_TAREA,
  ERROR_INSERTAR_ASIGNACION_TAREA,
  ERROR_ELIMINAR_ASIGNACION_TAREA,
  ERROR_ASIGNACION_TAREA,
  ERROR_LISTAR_ASIGNACION_TAREAS,
  SUCCESSFULL_DELETE_ASIGNACION_TAREA,
  SUCCESSFULL_UPDATE_ASIGNACION_TAREA,
  SUCCESSFULL_INSERT_ASIGNACION_TAREA
} from '../constants/asignaciontareas';

import {
  ASIGNACION_TAREAS_GET_ASIGNACION_TAREAS,
  ASIGNACION_TAREAS_POST_ASIGNACION_TAREA,
  ASIGNACION_TAREAS_DELETE_ASIGNACION_TAREA
} from '../constants/api';

export function errorListar(error) {
  return {
    error,
    type: ERROR_LISTAR_ASIGNACION_TAREAS
  };
}

export function error_post_insert(error) {
  return {
    error,
    type: ERROR_INSERTAR_ASIGNACION_TAREA
  };
}

export function asignacion_tareas_listar_Request(response) {
  return dispatch => {
    dispatch({
      response,
      type: LISTAR_ASIGNACION_TAREAS
    });
  };
}

export function asignacion_tareas_post_request(response) {
  return dispatch => {
    dispatch({
      response,
      type: SUCCESSFULL_INSERT_ASIGNACION_TAREA
    });
  };
}

export function listar() {
  return dispatch =>
    axios.get(ASIGNACION_TAREAS_GET_ASIGNACION_TAREAS)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          console.log('Response listar asignaciontareas: ', response);
          dispatch(asignacion_tareas_listar_Request(response));
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