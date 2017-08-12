import React from 'react'
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Search from 'grommet/components/Search';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import HomeIcon from 'grommet/components/icons/base/Home'
import { Link } from 'react-router-dom';


class E_DesktopHeader extends React.Component{
    render(){
        return(
             <Header size='small' splash={false} float={false} fixed={false} colorIndex='neutral-1' className={this.props.className}>                
                <Box pad={{horizontal:'large'}}>
                    <Link className="grommetux-anchor" to='/'>
                        <Title>
                            <HomeIcon/>
                        </Title>
                    </Link>
                </Box>
                 <Box flex={true} pad={{horizontal:'large'}} justify='end' direction='row'responsive={false} colorIndex='neutral-1' margin='small' alignContent='between'>                    
                    <Menu fill={false} size='small' label='menu' responsive={false} direction='row' inline={true} primary={false}>  
                      {this.props.menuAnchors}
                    </Menu>
                </Box> 
            </Header>
        )
    }
}


export default E_DesktopHeader;