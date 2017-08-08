import React from 'react'
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';

class E_Header extends React.Component{
    render(){
        return(            
            <Header direction="row" justify="between" size="large" pad={{ horizontal: 'medium' }}>
                <Title>Header!!</Title>          
            </Header>
        );
    }
}

export default E_Header;