import {render} from 'react-dom'
import React  from 'react';
import Main from './Main'
import { Provider } from 'react-redux';
import reducers from 'reducers';
import { createStore, compose } from 'redux';

const store = createStore(reducers);

render(
  <Provider store={store}>
      <Main/>
  </Provider>

  
, document.getElementById('app'));
