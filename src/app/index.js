import {render} from 'react-dom'
import React  from 'react';
import Main from './Main'
import { Provider } from 'react-redux';
import reducers from 'reducers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createStore, compose } from 'redux';
const store = createStore(reducers);
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Main/>
    </MuiThemeProvider>
  </Provider>
, document.getElementById('app'));
