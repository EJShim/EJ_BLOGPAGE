import React from 'react';
import {connect} from 'react-redux';
import Title from 'grommet/components/Title';
import Footer from 'grommet/components/Footer';

class E_Footer extends React.Component{
    render(){
        if(!this.props.UIManager.footerVisible) return null;
        
        return(
            <Footer colorIndex='accent-1' primary={true} appCentered={true} direction="column" align="center" pad="small" colorIndex="grey-1">
                <Title>EJ Shim Footer</Title>                
            </Footer>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        UIManager: state.UIManager
    };
}

let mapDispatchToProps = (dispatch) => {
    return {        
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(E_Footer);