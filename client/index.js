
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

/**
 * Paginas
 */
import Login from './containers/Login';

import Bienvenida from './containers/DashBoard/Childrens/Bienvenida';

// Rol
import Rol from './containers/DashBoard/Childrens/Rol/index.jsx';
import ListarRoles from './containers/DashBoard/Childrens/Rol/Listar.container.jsx';
import InsertarRol from './containers/DashBoard/Childrens/Rol/Insertar.container.jsx';

// Nivel
import Nivel from './containers/DashBoard/Childrens/Nivel/index.jsx';
import InsertarNivel from './containers/DashBoard/Childrens/Nivel/Insertar.container.jsx';
import ListarNiveles from './containers/DashBoard/Childrens/Nivel/Listar.container.jsx';

// Tipo de curso
import TipoCurso from './containers/DashBoard/Childrens/TipoCurso/index.jsx';
import InsertarTipoCurso from './containers/DashBoard/Childrens/TipoCurso/Insertar.container.jsx';
import ListarTiposCursos from './containers/DashBoard/Childrens/TipoCurso/Listar.container.jsx';

// Permiso
import Permiso from './containers/DashBoard/Childrens/Permiso/index.jsx';
import InsertarPermiso from './containers/DashBoard/Childrens/Permiso/Insertar.container.jsx';
import ListarPermiso from './containers/DashBoard/Childrens/Permiso/Listar.container.jsx';

// SubPermiso
import Subpermiso from './containers/DashBoard/Childrens/Subpermiso/index.jsx';
import InsertarSubpermiso from './containers/DashBoard/Childrens/Subpermiso/Insertar.container.jsx';
import ListarSubpermiso from './containers/DashBoard/Childrens/Subpermiso/Listar.container.jsx';

// Tipo actividad
import TipoActividad from './containers/DashBoard/Childrens/TipoActividad/index.jsx';
import InsertarTipoActividad from './containers/DashBoard/Childrens/TipoActividad/Insertar.container.jsx';
import ListarTipoActividad from './containers/DashBoard/Childrens/TipoActividad/Listar.container.jsx';

// Menu usuario
import MenuUsuario from './containers/DashBoard/Childrens/MenuUsuario/index.jsx';
import InsertarMenuUsuario from './containers/DashBoard/Childrens/MenuUsuario/Insertar.container.jsx';
import ListarMenuUsuario from './containers/DashBoard/Childrens/MenuUsuario/Listar.container.jsx';

import NoMatch from './containers/NoMatch'; // 404 o no encontrado

/*                DashBoard
*/
import DashBoard from './containers/DashBoard';

import configure from './store';

const store = configure();
const history = syncHistoryWithStore(browserHistory, store);

const basename = '/dashboard';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>

      <Route path={basename} component={DashBoard}>
        <IndexRoute component={Bienvenida}/>

        <Route path="rol" component={Rol}>
          <Route path="listar" component={ListarRoles}/>
          <Route path="insertar" component={InsertarRol}/>
        </Route>

        <Route path="nivel" component={Nivel}>
          <Route path="insertar" component={InsertarNivel} />
          <Route path="listar" component={ListarNiveles} />
        </Route>

        <Route path="tipocurso" component={TipoCurso}>
          <Route path="insertar" component={InsertarTipoCurso} />
          <Route path="listar" component={ListarTiposCursos} />
        </Route>

        <Route path="actividad" component={TipoActividad}>
          <Route path="insertartipo" component={InsertarTipoActividad} />
          <Route path="listartipos" component={ListarTipoActividad} />
        </Route>

        <Route path="permiso" component={Permiso}>
          <Route path="insertar" component={InsertarPermiso} />
          <Route path="listar" component={ListarPermiso} />
        </Route>

        <Route path="menuusuario" component={MenuUsuario}>
          <Route path="insertar" component={InsertarMenuUsuario} />
          <Route path="listar" component={ListarMenuUsuario} />
        </Route>

        <Route path="subpermiso" component={Subpermiso}>
          <Route path="insertar" component={InsertarSubpermiso} />
          <Route path="listar" component={ListarSubpermiso} />
          <Route path="ver/:spId" component={ListarSubpermiso}/>
        </Route>

        <Route path="login" component={Login}></Route>
        <Route path="*" component={NoMatch}/>

      </Route>

    </Router>
  </Provider>,
  document.getElementById('root')
);
