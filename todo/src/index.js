import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './todoReducer';

import './index.css';
import Todo from './Todo';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Todo />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
