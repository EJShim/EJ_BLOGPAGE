import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Article from 'grommet/components/Article'
import Button from 'grommet/components/Button'

import { Route, Link } from 'react-router-dom';
import {E_Header, E_Footer, E_Home, E_Video, E_Portfolio, E_Board, E_Collaboration} from 'containers';
import {E_MobileHeader, E_DesktopHeader} from 'components/E_ResHeader';
import {TodoAppDashboard} from 'components';
import UpIcon from 'grommet/components/icons/base/Up';
import DownIcon from 'grommet/components/icons/base/Down';

class Main extends Component {

  constructor(props){
    super(props);

    this.state = {
      mobileNavHeight: 0, 
      mobileOffset: 0, 
      navActive: false
    };
  }

     componentDidMount(){
        window.addEventListener('resize', this._onResize.bind(this));
        this._layout();
    }

    _onResize () {            
        this._layout();
     }

    _layout () {
        if (this._mobileNavRef) {
            const rect = findDOMNode(this._mobileNavRef).getBoundingClientRect();
            this.setState({ mobileNavHeight: rect.height });
        }
    }

    _onHandleMobileMenuButton(){
        this.setState({ navActive: ! this.state.navActive });
    }


  render() {

  const {
    mobileNavHeight, mobileOffset, navActive
  } = this.state;    
  
  const menuData = [
    {name:"Board", path:"/board"}, 
    {name:"Portfolio", path:"/portfolio"}, 
    {name:"Video", path:"/video"}, 
    {name:"Collaboration", path:"/Collaboration"}
  ];

  const menuAnchors = menuData.map((menu, index)=>
    <Link key={index} className="grommetux-anchor" to={menu.path}>
        {menu.name}
    </Link>
  );


    let articleStyle, footerStyle;
    if (! navActive) {
      articleStyle = { transform: `translateY(-${mobileNavHeight}px)` };
      footerStyle = { marginBottom: `-${mobileNavHeight}px`};
    }

    return (
      <App centered={false}>
          <Box full={true}>
            <Article className='home' style={articleStyle}>            
            <E_MobileHeader className='home-mobile' ref={(ref) => this._mobileNavRef = ref} animate={false} menuAnchors={menuAnchors} />            
            
            <Box colorIndex='neutral-2' className='home-mobile' primary={true} align='center' pad={{ between: 'small' }} onClick={() => this._onHandleMobileMenuButton()} >
                {navActive ? <UpIcon /> : <DownIcon />}
                MENU
            </Box>
            
            <E_DesktopHeader className='home-desktop' menuAnchors = {menuAnchors}/>

            
            

              <Route exact path = '/' component={E_Home}/>
              <Route path ='/board' component={TodoAppDashboard}/>
              <Route path ='/portfolio' component={E_Portfolio}/>
              <Route path ='/video' component={E_Video}/>
              <Route path ='/collaboration' component={E_Collaboration}/>


              <E_Footer style={footerStyle}/>
            </Article>
          </Box>                
      </App>
    );
  }
}


export default Main;
