//import styles
import 'grommet/scss/vanilla/index';


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from 'reducers';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, IndexRoute, Switch, Link } from 'react-router-dom';
import App from 'grommet/components/App';
import Value from 'grommet/components/Value';
import {E_Header, E_Footer, E_Home, E_Video, E_Portfolio, E_Board} from 'containers'

const store = createStore(reducers, applyMiddleware(thunk));


class Main extends Component {
  render() {
    return (
      <Provider store = {store}>
      <BrowserRouter>
      <App centered={false} inline={false}>       
        <E_Header/>       
        
          <div>
            <Route exact path ='/' component={E_Home}/>
            <Route path ='/board' component={E_Board}/>
            <Route path ='/portfolio' component={E_Portfolio}/>
            <Route path ='/video' component={E_Video}/>          
          </div>
        
        <E_Footer/>
      </App>
      </BrowserRouter>
      </Provider>
    );
  }
};




let element = document.getElementById('content');
ReactDOM.render(React.createElement(Main), element);

document.body.classList.remove('loading');
