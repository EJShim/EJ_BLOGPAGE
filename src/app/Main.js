import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Home, Header} from 'containers';

class App extends Component {
  render(){
    return(
      <div>            
        <Header/>
        <Home/>
      </div>
    );  
  }
};

const mapStateToProps = (state) => {
  //const {  browser, responsiveDrawer } = state;
  return {

  };
};

const mapDispatchToProps = (dispatch) => {

  return {

  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);