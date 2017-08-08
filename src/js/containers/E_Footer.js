import React from 'react';
import Title from 'grommet/components/Title';
import Footer from 'grommet/components/Footer';

class E_Footer extends React.Component{
    render(){
        return(
            <Footer primary={true} appCentered={true} direction="column" align="center" pad="small" colorIndex="grey-1">
                <Title>EJ Shim Footer</Title>                
            </Footer>
        );
    }
}

export default E_Footer;