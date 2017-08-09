import React from 'react';
import Layer from 'grommet/components/Layer';
import Box from 'grommet/components/Box';

class E_VideoLayer extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        const sourceURL = "https://www.youtube.com/embed/" + this.props.videoID;
        const width = window.innerWidth - 30;
        const height = window.innerHeight - 30; 
        return(            
            <Layer closer={true} flush={true} onClose={this.props.onClose}>   
                <Box full='horizontal'>             
                    <iframe widht={width} height={height} src={sourceURL} frameborder="0" allowfullscreen />                
                </Box>
            </Layer>
            
        );
    }

}

export default E_VideoLayer;