import React from 'react';
import './App.css';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import reducer from './reducers';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

import registerServiceWorker from './registerServiceWorker';

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}


const store = createStore(reducer, applyMiddleware(...middleware))
render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();
