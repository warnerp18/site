import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Front from '../components/front';
import Work from '../components/work';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Front} />
    <Route path='work' component={Work} />
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
