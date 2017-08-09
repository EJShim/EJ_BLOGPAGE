import React from 'react';
import Layer from 'grommet/components/Layer';

class E_VideoLayer extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        const sourceURL = "https://www.youtube.com/embed/" + this.props.videoID;
        const width = window.innerWidth - 20;
        const height = window.innerHeight - 50;

        console.log(width, height)

        return(
            <Layer closer={true} flush={false} onClose={this.props.onClose}>
                <iframe widht={width} height={height} src={sourceURL} frameborder="0" allowfullscreen />
            </Layer>
        );
    }

}

export default E_VideoLayer;