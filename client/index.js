
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

import NoMatch from './containers/NoMatch'; // 404 o no encontrado

import configure from './store';

const store = configure();
const history = syncHistoryWithStore(browserHistory, store);

const basename = '/Visibilidad';

console.log('=> Basename: ', basename);
console.log('=>> pathname: ',  window.location.pathname);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>

      <Route path={basename} component={Header}>
        <IndexRoute component={Index}/>

        <Route path="acercade" component={About}/>
        <Route path="eventos" component={Eventos}/>
        <Route path="recientes" component={About}/>
        <Route path="noticias" component={Eventos}/>
      </Route>

      <Route path="*" component={ NoMatch }/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
