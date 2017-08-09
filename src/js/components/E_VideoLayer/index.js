import React from 'react';
import Layer from 'grommet/components/Layer';


class E_VideoLayer extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <Layer closer={true} flush={false} onClose={this.props.onClose}>
                {this.props.videoID}
            </Layer>
        );
    }

}

export default E_VideoLayer;