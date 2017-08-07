import React from 'react';
import { BrowserRouter, Route, IndexRoute, Switch, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import reducers from 'reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';


// Global State
const store = createStore(reducers, applyMiddleware(thunk));


class App extends React.Component {

    render() {    
        return ( 
            <h1> Hello World </h1>
        );
    }
}

export default App;

//   <Provider store={store}>
//     <BrowserRouter>
//     <div>
//        <Route exact path = "/" component = {Home} />
//    </div>
//    </BrowserRouter>
//  </Provider>