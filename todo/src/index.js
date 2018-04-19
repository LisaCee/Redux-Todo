import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoreducer from './Reducer';
// import components
import registerServiceWorker from './registerServiceWorker';

const store = createstore(todoreducer);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
