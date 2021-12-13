import React from 'react';
import ReactDOM from 'react-dom';
import AppWithHooks from './components/AppWithHooks';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <AppWithHooks />
  </Provider>,
  document.getElementById('root')
);
