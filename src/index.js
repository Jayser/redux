import React from 'react'
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store/configureStore';
import routes from './routes';

import App from './features/App';
const MOUNT_NODE = document.getElementById('app');

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <App store={ store } routes={ routes } history={ history } />,
  MOUNT_NODE
);
