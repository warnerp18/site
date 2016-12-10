import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Front from '../components/front';
import Work from '../components/work';
import Pics from '../components/pics';
import imageGalleries from '../components/imageGalleries.js';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Front} />
    <Route path='/work' component={Work} />
    <Route path='/gallery' component={imageGalleries} />
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});

