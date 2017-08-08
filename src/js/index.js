import '../scss/index';

import React from 'react';
import ReactDOM from 'react-dom';
 import {BrowserRouter} from 'react-router-dom'
import App from 'App';

import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from 'reducers';
import { createStore, applyMiddleware } from 'redux';
const store = createStore(reducers, applyMiddleware(thunk));

const element = document.getElementById('content');


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </Provider>, element);

document.body.classList.remove('loading');
