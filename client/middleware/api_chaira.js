import axios from 'axios';
import * as storage from './storage';

/**
 * ===============================================================
 *      Todas las operaciones del api de chaira
 * ===============================================================
 */

// Direccion del api de chaira
var api_url = "http://chaira.udla.edu.co/api";

/**
 * Obtiene el valor de un parametro en la url
 */
getParameterByName = (name_param = 'code') => {
  name_param = name_param.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name_param + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};

/**
 * Realizar peticion para actualizar 
 */
refreshToken = () => {
  axios.post(api_url + "/oauth2/authorize.asmx/refreshToken", {
      grant_type: "refresh_token",
      refresh_token: storage.getRefreshToken(),
      client_id: "159453327395",
      state: "any state"
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

/**
 * Inicializa 
 */
init = (
  client_id = "159453327395"
) => {
  axios.post(api_url + "/oauth2/authorize.asmx/token", {
      grant_type: "authorization_code",
      code: undefined, // Aqui va el codigo se que captura en el navegador
      redirect_uri: "http://localhost:8081/callback",
      client_id: client_id,
      client_secret: "nm0rlweo35q4v7rpw6rl29gj1d7p4y",
      state: "cyz"
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};


//oauth2/resource.asmx/scope
//public_profile
//private_profile