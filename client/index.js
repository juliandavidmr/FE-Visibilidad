
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

/**
 * Paginas
 */
import About from './containers/About';
import App from './containers/App';
import Eventos from './containers/Eventos';
import Index from './containers/Index';
import Header from './containers/Header';
import Login from './containers/Login';

import NoMatch from './containers/NoMatch'; // 404 o no encontrado

/*                DashBoard
*/
import DashBoard from './containers/DashBoard';
import * as ChildrensDashboard from './containers/DashBoard/childrens';

import configure from './store';

const store = configure();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>

      <Route path="/" component={Header}>
        <Route path="/index" component={Index}/>
        <Route path="/acercade" component={About}/>
        <Route path="/eventos" component={Eventos}>
          <Route path="recientes" component={About}/>
        </Route>
        <Route path="/noticias" component={Eventos}/>
      </Route>

      <Route path="dashboard" component={DashBoard}>
        <Route path="*" component={ChildrensDashboard.Content}/>

        <Route path="/registrar" component={Eventos}>
          <Route path="publicacion" component={About}/>
        </Route>
        <Route path="/ver" component={Eventos}>
          <Route path="publicacion" component={About}/>
        </Route>
      </Route>

      <Route path="login" component={Login}></Route>
      <Route path="*" component={NoMatch}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
