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
