import axios from 'axios';

import * as constant from '../constants/_generic';

export default store => next => action => {
  console.log("Ejecutando accion: ", action);

  watcher(action, next).then(result => {
    return next(action);
  }).catch(err => {
    console.log('Denegando acceso a', action.type);

    action.type = constant.DENEGAR;
    return next(action);
  });
};

function watcher(action) {
  return new Promise((resolve, reject) => {
    var type = action.type + "";

    if (type.indexOf('@@') !== -1) { // incluye type === '@@router/LOCATION_CHANGE' 
      return resolve(true);
    } else {
      switch (type) {
        case '':
          return resolve(true);
        default:
          return reject(true);
      }
    }
  });
}

function utf8_to_b64(str) {
  return window.btoa(unescape(encodeURIComponent(str)));
}

function b64_to_utf8(str) {
  return decodeURIComponent(escape(window.atob(str)));
}

/*

utf8_to_b64('✓ à la mode'); // "4pyTIMOgIGxhIG1vZGU="
b64_to_utf8('4pyTIMOgIGxhIG1vZGU='); // "✓ à la mode"

*/