import {
  combineReducers
} from 'redux';

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

import Immutable from 'immutable';

const initialState = new Immutable.Map({
  data_list_menuusuario: [],
  error: null,
  result: false
});

export function menuusuario(state = initialState, action) {
  switch (action.type) {
    case LISTAR_MENUS_USUARIOS:
      return state.merge({
        data_list_menuusuario: action.response.data,
        error: null,
        result: action.response.data.result
      });
    case INSERTAR_MENU_USUARIO:
      return state.merge({
        data_list_menuusuario: action.response.data,
        error: null,
        result: action.response.data.result
      });
    default:
      return state;
  }
}

const Reducer = combineReducers({
  menuusuario
});

export default Reducer;