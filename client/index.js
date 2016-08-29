
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

import App from './containers/App';
import Index from './containers/Index';
import DashBoard from './containers/DashBoard';
import Login from './containers/Login';
import NoMatch from './containers/NoMatch';

import configure from './store';

const store = configure();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Index}></Route>
      <Route path="dashboard" component={DashBoard}></Route>
      <Route path="login" component={Login}></Route>
      <Route path="*" component={NoMatch}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
