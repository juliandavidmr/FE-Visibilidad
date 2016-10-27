/**
 * ===============================================================
 *          Archivo Dedicado exclusivamente a la gestión
 *          de variables en el navegador
 * ===============================================================
 */

import * as constant from '../constants/_generic.js';

export function validate_user() {
  return new Promise((resolve, reject) => {

  });
}

/**
 * Obtiene el valor guardado en el refresh token
 * 
 * @export
 */
export function getRefreshToken() {
  GET(constant.LOCALSTORAGE_USER_REFRESHTOKEN);
}

/**
 * Guarda un valor de refresh token en la memoria del navegador 
 * 
 * @export
 * @param {any} data_token_refresh
 */
export function setItemRefreshToken(data_token_refresh) {
  SET(constant.LOCALSTORAGE_USER_REFRESHTOKEN, data_token_refresh);
}


/**
 * Almacena la informacion del usuario que ha iniciado la sesion
 * 
 * @export
 * @param {any} data_user
 */
export function setUser(data_user) {
  SET(constant.LOCALSTORAGE_USER_DATA, data_user);
};


/**
 * Elimina todos los datos del usuario
 * 
 * @export
 */
export function removeUser() {
  SET(constant.LOCALSTORAGE_USER_DATA);
};



// ==============================Metodos de almacenamiento======================================

/**
 * Almacena una variable en el navegador
 * 
 * @param {string} key
 * @param {any} value
 */
function SET(key, value) {
  return new Promise((resolve, reject) => {
    if (typeof (Storage) !== "undefined") {
      // Code for localStorage/sessionStorage.
      localStorage.setItem(key, value);
      resolve(true);
    } else {
      reject(error_msg_incompatible);
      // Sorry! No Web Storage support..
    }
  });
}


/**
 * Obtiene una variable almacenada en el navegador
 * 
 * @param {string} key
 */
function GET(key) {
  return new Promise((resolve, reject) => {
    if (typeof (Storage) !== "undefined") {
      // Code for localStorage/sessionStorage.
      resolve(localStorage.getItem(key));
    } else {
      reject(error_msg_incompatible);
      // Sorry! No Web Storage support..
    }
  });
}

const error_msg_incompatible = {
  error: true,
  msg: 'Navegador no compatible con almacenamiento dinamico.',
  navegadores: {
    chrome: 4,
    firefox: 3.5,
    internet: 8,
    opera: 10.50,
    safari: 4
  }
};


// =============================MEtodos de encriptacion basica=======================================
/**
 * Cifrado de UTF8 a Base64
 * 
 * @param {any} str
 * @returns
 */
function utf8_to_b64(str) {
  return window.btoa(unescape(encodeURIComponent(str)));
}

/**
 * Descifrado de Base64 a UTF8
 * 
 * @param {any} str
 * @returns
 */
function b64_to_utf8(str) {
  return decodeURIComponent(escape(window.atob(str)));
}

/*
utf8_to_b64('✓ à la mode'); // "4pyTIMOgIGxhIG1vZGU="
b64_to_utf8('4pyTIMOgIGxhIG1vZGU='); // "✓ à la mode"
*/