import React from 'react';
import Layer from 'grommet/components/Layer';
import Box from 'grommet/components/Box';

class E_SlidesLayer extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        
        const sourceURL = "//slides.com/soulrommel/"+ this.props.sliceID +"/embed"
        const width = window.innerWidth - 50;
        const height = window.innerHeight - 10; 
        return(            
            <Layer closer={true} flush={true} onClose={this.props.onClose}>   
                <Box full='horizontal' colorIndex='grey-2'>                    
                    <iframe src={sourceURL} width={width} height={height} scrolling="no" /> 
                </Box>
            </Layer>
            
        );
    }

}

export default E_SlidesLayer;