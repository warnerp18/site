import React from 'react';
import ReactDOM from 'react-dom';

import renderRoutes from './routes';

Meteor.startup(()=> {
  ReactDOM.render(renderRoutes, document.getElementById('app'));
});
