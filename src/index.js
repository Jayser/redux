import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store/configureStore';
import routes from './routes';
import DevTools from './DevTools';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={ store }>
    <div>
      <Router history={ history } routes={ routes } />
      { process.env.NODE_ENV === 'production' ? null : <DevTools /> }
    </div>
  </Provider>,
  document.getElementById('app')
);
