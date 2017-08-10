import React from 'react';
import {findDOMNode} from 'react-dom';
import {connect} from 'react-redux';
import Section from 'grommet/components/Section';
import Split from 'grommet/components/Split'
import Box from 'grommet/components/Box';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Menu from 'grommet/components/Menu';
import Title from 'grommet/components/Title';
import Button from 'grommet/components/Button';
import Anchor from 'grommet/components/Anchor';

import {toggleFooter} from 'actions/UIAction';



class E_Collaboration extends React.Component{
    constructor(props){
        super(props);
    }   

    componentWillMount(){
        //Hide Footer
        this.props.toggleFooter(false);
    }
    componentDidMount(){
        //Set Render Window
        let renWin = findDOMNode(this.renWin)
        this.props.manager.SetRenderWindow(renWin)        
    }

    componentWillUnmount(){        
        //Remove Render Window
        this.props.manager.RemoveRenderWindow();        
        //Show Footer
        this.props.toggleFooter(true);
    }


    _onImportMesh(){
        console.log("Import Mesh");
    }

    _onDrawCutting(){
        console.log("Draw Cutting");
    }

    _onThird(){
        console.log("Third")
    }


    render(){
        return(
            <Section colorIndex='neutral-1' primary={true} flex={true} pad='none'>
                <Split fixed={false}  separator = {true} flex='right'>
                    
                        <Box flex='grow' justify='start'>
                            <Menu primary={true} size='small'>
                                <Anchor onClick={this._onImportMesh.bind(this)} className='active'>
                                    Import Mesh
                                </Anchor>
                                <Anchor onClick={this._onDrawCutting.bind(this)} >
                                    Draw Cutting
                                </Anchor>
                                <Anchor onClick={this._onThird.bind(this)}>
                                    Reder from DB(temp)
                                </Anchor>
                            </Menu>
                        </Box>                        
                    
                    <Box full='vertical'  ref={(el) => { this.renWin = el; }} />
                </Split>                                 
            
            </Section>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        manager: state.Manager.manager
    };
}


let mapDispatchToProps = (dispatch) => {
    return {
        toggleFooter: (visible) => {
            return dispatch(toggleFooter(visible));
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(E_Collaboration);