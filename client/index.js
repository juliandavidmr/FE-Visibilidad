
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

/**
 * Paginas
 */
import Index from './containers/Index';
import Container from './containers/container.jsx';
import About from './containers/About';
import Eventos from './containers/Eventos';
import Header from './containers/Header';
import Login from './containers/Login';

import NoMatch from './containers/NoMatch'; // 404 o no encontrado

import configure from './store';

const store = configure();
const history = syncHistoryWithStore(browserHistory, store);

const basename = '/';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>

      <Route path={basename} component={Header}>
        <IndexRoute component={Index}/>

        <Route path="/acercade" component={About}/>
        <Route path="/eventos" component={Eventos}>
          <Route path="recientes" component={About}/>
        </Route>
        <Route path="/noticias" component={Eventos}/>
      </Route>     

      <Route path="login" component={ Login }></Route>
      <Route path="*" component={ NoMatch }/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
