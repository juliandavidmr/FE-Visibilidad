
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import semilleros from './semilleros';
import dashboard  from './dashboard';
import login  from './login';
import noticia from './noticia';
import actividad from './actividad';
import asignaciontareas from './asignaciontareas';
import correosenviados from './correosenviados';
import detalletarea from './detalletarea';
import estudiantecurso from './estudiantecurso';
import grupo from './grupo';
import horarioscursos from './horarioscursos';
import integrantesgrupo from './integrantesgrupo';
import lidersemillero from './lidersemillero';
import menuusuario from './menuusuario';
import notificacion from './notificacion';
import programa from './programa';
import programassemilleros from './programassemilleros';
import proyectos from './proyectos';
import rolsemillero from './rolsemillero';
import tareas from './tareas';
import tipocurso from './tipocurso';
import tiponoticia from './tiponoticia';
import tiponotificacion from './tiponotificacion';
import usuario from './usuario';

export default combineReducers({
  routing,
  semilleros,
  dashboard,
  login,
  noticia,
  actividad,
  asignaciontareas,
  correosenviados,
  detalletarea,
  estudiantecurso,
  grupo,
  horarioscursos,
  integrantesgrupo,
  lidersemillero,
  menuusuario,
  notificacion,
  programa,
  programassemilleros,
  proyectos,
  rolsemillero,
  tareas,
  tipocurso,
  tiponoticia,
  tiponotificacion,
  usuario
});