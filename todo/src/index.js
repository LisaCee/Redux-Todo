import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import {todoReducer} from './reducers/rootReducer';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


const store = createStore(todoReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())





ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>
, document.getElementById('root'));

