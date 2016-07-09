import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Front from '../components/front';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Front}>
    </Route>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});

