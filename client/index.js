
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

/**
 * Paginas
 */
import Container from './containers/container.jsx';
import About from './containers/About';
import App from './containers/App';
import Eventos from './containers/Eventos';
import Index from './containers/Index';
import Header from './containers/Header';
import Login from './containers/Login';

import Rol from './containers/DashBoard/Childrens/Rol/index.jsx';
import ListarRoles from './containers/DashBoard/Childrens/Rol/Listar.container.jsx';
import InsertarRol from './containers/DashBoard/Childrens/Rol/Insertar.container.jsx';

import Nivel from './containers/DashBoard/Childrens/Nivel/index.jsx';
import InsertarNivel from './containers/DashBoard/Childrens/Nivel/Insertar.container.jsx';
import ListarNiveles from './containers/DashBoard/Childrens/Nivel/Listar.container.jsx';

import TipoCurso from './containers/DashBoard/Childrens/TipoCurso/index.jsx';
import InsertarTipoCurso from './containers/DashBoard/Childrens/TipoCurso/Insertar.container.jsx';
import ListarTiposCursos from './containers/DashBoard/Childrens/TipoCurso/Listar.container.jsx';

import NoMatch from './containers/NoMatch'; // 404 o no encontrado

/*                DashBoard
*/
import DashBoard from './containers/DashBoard';

import configure from './store';

const store = configure();
const history = syncHistoryWithStore(browserHistory, store);

const basename = '/';

ReactDOM.render(
  <Provider store={store} onUpdate={() => window.scrollTo(0, 0) }>
    <Router history={history}>

      <Route path={basename} component={Header}>
        <IndexRoute component={Index}/>

        <Route path="/acercade" component={About}/>
        <Route path="/eventos" component={Eventos}>
          <Route path="recientes" component={About}/>
        </Route>
        <Route path="/noticias" component={Eventos}/>
      </Route>

      <Route path="dashboard" component={DashBoard}>
        <Route path="rol" component={Rol}>
          <Route path="listar" component={ListarRoles}/>
          <Route path="insertar" component={InsertarRol}/>
        </Route>

        <Route path="registrar" component={Eventos}>
          <Route path="publicacion" component={About}/>
        </Route>

        <Route path="nivel" component={Nivel}>
          <Route path="insertar" component={InsertarNivel} />
          <Route path="listar" component={ListarNiveles} />
        </Route>

        <Route path="tipocurso" component={TipoCurso}>
          <Route path="insertar" component={InsertarTipoCurso} />
          <Route path="listar" component={ListarTiposCursos} />
        </Route>

      </Route>

      <Route path="login" component={Login}></Route>
      <Route path="*" component={NoMatch}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
