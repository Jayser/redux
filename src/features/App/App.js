import React, { PropTypes } from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import DevTools from '../../DevTools';

const App = ({ store, routes, history }) => (
  <Provider store={ store }>
    <div>
      <Router history={ history } routes={ routes } />
      { __PROD__ ? null : <DevTools /> }
    </div>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
  routes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default App;
