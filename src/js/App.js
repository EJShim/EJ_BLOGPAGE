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
import Responsive from 'grommet/utils/Responsive';
import { Route, Link } from 'react-router-dom';
import {E_Header, E_Footer, E_Home, E_Video, E_Portfolio, E_Board, E_Collaboration, E_Slides} from 'containers';
import {E_MobileHeader, E_DesktopHeader} from 'components/E_ResHeader';
import {TodoAppDashboard} from 'components';
import UpIcon from 'grommet/components/icons/base/Up';
import DownIcon from 'grommet/components/icons/base/Down';

class Main extends Component {

  constructor(props){
    super(props);

    this._onResponsive = this._onResponsive.bind(this);
    this.state = {
      mobileMenuHeight:0,
      mobileNavHeight: 0, 
      mobileOffset: 0, 
      navActive: false,      
    };
  }

  componentDidMount(){
    window.addEventListener('resize', this._onResize.bind(this));
    this._responsive = Responsive.start(this._onResponsive);
    this._layout();
  }

  componentWillUnmount(){
    this._responsive.stop();
  }

  _onResize () {     
    this._layout();
  }

  _onResponsive(small){    
    this.setState({
      isMobile:small
    });
  }

    _layout () {
      if (this._mobileNavRef) {
        let dom = findDOMNode(this._mobileNavRef);    
        const rect = dom.getBoundingClientRect();
        let menudom = findDOMNode(this._mobileMenuRef);
        const menurect = menudom.getBoundingClientRect();    
        
        this.setState({ 
          mobileNavHeight: rect.height,
          mobileMenuHeight: menurect.height
        });
      }
    }

    _onHandleMobileMenuButton(){
      let menudom = findDOMNode(this._mobileMenuRef);
      const menurect = menudom.getBoundingClientRect();
        this.setState({ 
          navActive: ! this.state.navActive, 
          mobileMenuHeight: menurect.height 
        });
    }


  render() {

  const {
    mobileMenuHeight, mobileNavHeight, mobileOffset, navActive
  } = this.state;    
  
  const menuData = [
    {name:"Board", path:"/board", component:E_Board}, 
    {name:"Portfolio", path:"/portfolio", component:E_Portfolio}, 
    {name:"Video", path:"/video", component:E_Video},     
    {name:"Slides", path:"/slides", component:E_Slides},
    {name:"Collaboration", path:"/Collaboration", component:E_Collaboration}
  ];

  const menuAnchors = menuData.map((menu, index)=>
    <Link key={index} className="grommetux-anchor" to={menu.path}>
        {menu.name}
    </Link>
  );

  const routerElements = menuData.map((menu, index)=>
    <Route key={index} path = {menu.path} component={menu.component}/>
  );


    let articleStyle, contentStyle;
    if (!navActive) {
      articleStyle = { transform: `translateY(-${mobileNavHeight}px)` };     
    }

    if(this.state.isMobile){
      contentStyle = { height: mobileMenuHeight };
    }
    return (
      <App centered={false} inline={true}>
        <Article className='home'>        
          <Box full={true}>
            <Box style={contentStyle} colorIndex='neutral-2'>
              <Article className='home home-mobile' style={articleStyle}>
                <E_MobileHeader  ref={(ref) => this._mobileNavRef = ref} animate={false} menuAnchors={menuAnchors} />            
                <Box ref={(ref) => this._mobileMenuRef = ref} full='horizontal' colorIndex='neutral-1' primary={true} align='center' pad={{ between: 'small' }} onClick={() => this._onHandleMobileMenuButton()} >
                    {navActive ? <UpIcon /> : <DownIcon />}
                    MENU
                </Box>
              </Article>            
            </Box>              
            <E_DesktopHeader className='home-desktop' menuAnchors = {menuAnchors}/>
            
            <Route exact path = '/' component={E_Home}/>
            {routerElements}            
            <E_Footer/>
          </Box>
        </Article>        
      </App>
    );
  }
}


export default Main;
