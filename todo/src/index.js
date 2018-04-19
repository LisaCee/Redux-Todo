import React from 'react';
import createStore from 'redux';
import Provider from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const store = createStore(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>
, document.getElementById('root'));

