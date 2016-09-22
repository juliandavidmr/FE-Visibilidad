
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import semilleros from './semilleros';
import dashboard  from './dashboard';
import login  from './login';
import rol from './rol';
import noticia from './noticia';
import actividad from './actividad';
import asignaciontareas from './asignaciontareas';
import correosenviados from './correosenviados';
import cuentacorreo from './cuentacorreo';
import detalletarea from './detalletarea';
import estudiantecurso from './estudiantecurso';
import grupo from './grupo';
import horarioscursos from './horarioscursos';
import integrantesgrupo from './integrantesgrupo';
import lidersemillero from './lidersemillero';
import menuusuario from './menuusuario';
import nivel from './nivel';
import notificacion from './notificacion';
import programa from './programa';
import programassemilleros from './programassemilleros';
import proyectos from './proyectos';
import rolsemillero from './rolsemillero';
import subpermisos from './subpermisos';
import tareas from './tareas';
import tipocurso from './tipocurso';
import tiponoticia from './tiponoticia';
import tiponotificacion from './tiponotificacion';
import tipoactividad from './tipoactividad';
import usuario from './usuario';
import permiso from './permiso';

export default combineReducers({
  routing,
  semilleros,
  dashboard,
  login,
  rol,
  noticia,
  actividad,
  asignaciontareas,
  correosenviados,
  cuentacorreo,
  detalletarea,
  estudiantecurso,
  grupo,
  horarioscursos,
  integrantesgrupo,
  lidersemillero,
  menuusuario,
  nivel,
  notificacion,
  programa,
  programassemilleros,
  proyectos,
  rolsemillero,
  subpermisos,
  tareas,
  tipocurso,
  tiponoticia,
  tiponotificacion,
  tipoactividad,
  usuario,
  permiso
});
