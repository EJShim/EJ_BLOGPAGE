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
            <Header size='small' splash={false} float={false} fixed={false} colorIndex='neutral-1'>
                <Box colorIndex='neutral-1' >
                    <Title>
                        <Link className="grommetux-anchor" to='/'>EJ</Link>
                    </Title>                
                </Box>
                 <Box flex={true} justify='between' direction='row'responsive={false} colorIndex='neutral-1' margin='small' alignContent='between'>                    
                    <Menu fill={false} size='small' responsive={true} direction='row' inline={true} primary={false}>  
                        <Link className="grommetux-anchor active" to='/board'>
                            Board  
                        </Link>
                        
                        <Link className="grommetux-anchor" to='/portfolio'>                    
                            Portfolio                    
                        </Link>
                        
                        <Link className="grommetux-anchor" to='/video'>                    
                            Video
                        </Link>
                        
                        <Link className="grommetux-anchor" to='/Collaboration'>                    
                            Collaboration
                        </Link>
                    </Menu>
                </Box> 
            </Header>
        );
    }
}

export default E_Header;