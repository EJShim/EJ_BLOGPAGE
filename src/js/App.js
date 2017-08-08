import React, { Component } from 'react';
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import {TodoAppDashboard} from 'components';
import {Route, IndexRoute, Switch, Link } from 'react-router-dom';


import {E_Header, E_Footer, E_Home, E_Video, E_Portfolio, E_Board, E_Collaboration} from 'containers';

class Main extends Component {
  render() {
    return (
      <App centered={false}>          
          <Box full={true}>
            <E_Header/>
            <Route exact path = '/' component={E_Home}/>
            <Route path ='/board' component={E_Board}/>
            <Route path ='/portfolio' component={TodoAppDashboard}/>
            <Route path ='/video' component={E_Video}/>
            <Route path ='/collaboration' component={E_Collaboration}/>            
            <E_Footer/>        
          </Box>                
      </App>
    );
  }
}

export default Main;
