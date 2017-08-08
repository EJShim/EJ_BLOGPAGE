import React from 'react'
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Search from 'grommet/components/Search';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import CloudIcon from 'grommet/components/icons/base/Cloud'
import { Link } from 'react-router-dom';


class E_Header extends React.Component{
    render(){
        return(            
            <Header splash={false} float={false} fixed={false} colorIndex='accent-1'>
                <Title>
                    <Link to='/'>EJ</Link>
                </Title>                
                 <Box flex={true} justify='end' direction='row'responsive={false} colorIndex='neutral-1'>                    
                    <Menu colorIndex='neutral-2' responsive={true} direction='row' inline={true} primary={false}>
                    <Link to='/board'>                    
                        Borard                    
                    </Link>
                    <Link to='/portfolio'>                    
                        Portfolio                    
                    </Link>
                    
                    <Link to='/video'>                    
                        Video
                    </Link>
                    <Link to='/Collaboration'>                    
                        Collaboration
                    </Link>
                    </Menu>
                </Box> 
            </Header>
        );
    }
}

export default E_Header;