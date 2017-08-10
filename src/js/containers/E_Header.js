import React from 'react'
import {findDOMNode} from 'react-dom'
import { Link } from 'react-router-dom';
import {E_MobileHeader, E_DesktopHeader} from 'components/E_ResHeader';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import UpIcon from 'grommet/components/icons/base/Up';
import DownIcon from 'grommet/components/icons/base/Down';


class E_Header extends React.Component{

    constructor(props){
        super(props);
        
        this.count = 0;

        this.state = {
            mobileNavHeight: 0, 
            mobileOffset: 0, 
            navActive: false
        };

        this._onResize = this._onResize.bind(this);
        this._layout = this._layout.bind(this);
        
    }

    componentDidMount(){
        window.addEventListener('resize', this._onResize);
        this._layout();
    }

    _onResize () {            
        this._layout();
     }

    _layout () {
        if (this._mobileNavRef) {
            const rect = findDOMNode(this._mobileNavRef).getBoundingClientRect();
            this.setState({ mobileNavHeight: rect.height });

            console.log(this.state.mobileNavHeight)
        }
    }

    _onHandleMobileMenuButton(){
        this.setState({ navActive: ! this.state.navActive });
    }

    render(){
        const {
            mobileNavHeight, mobileOffset, navActive
        } = this.state;        

        
        let articleStyle, footerStyle;
        if (! navActive) {
            articleStyle = { transform: `translateY(-${mobileNavHeight}px)` };
            footerStyle = { marginBottom: `-${mobileNavHeight}px`};
        }

        const mobileStyle = { backgroundPosition: `50% ${50 - mobileOffset}%` };


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


        return(
            <Article style={articleStyle}>
                <E_MobileHeader ref={(ref) => this._mobileNavRef = ref} animate={true} menuAnchors={menuAnchors} />
                <E_DesktopHeader  menuAnchors = {menuAnchors}/>
                
                <Button className='home-mobile' onClick={() => this._onHandleMobileMenuButton()}>
                    <Box align='center' pad={{ between: 'small' }}>
                        {navActive ? <UpIcon /> : <DownIcon />}
                        MENU
                    </Box>
                </Button>   
            </Article>
        );    
    }
}

export default E_Header;