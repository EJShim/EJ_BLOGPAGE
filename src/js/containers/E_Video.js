import React from 'react';
import axios from 'axios';
import Section from 'grommet/components/Section';
import Card from 'grommet/components/Card';
import Box from 'grommet/components/Box';
import E_VideoLayer from 'components/E_VideoLayer';
class E_Video extends React.Component{
    constructor(props){
        super(props);

        this.state={
            dataExists:false,
            videoList:[],
            layerVisible : false,
            layerVideoId : null
        }
    }

    componentDidMount(){
        let that = this;

        axios.get("/api/video")
        .then(response=>{
            this.setState({
                dataExists:true,
                videoList:response.data,
                layerVisible : false
            });

        })
        .catch(error=>{
            console.log(error)
        })
    }


    _onClickCard(youtubeKey){
        console.log(youtubeKey);        
        this.setState({
            layerVisible:true,
            layerVideoId:youtubeKey
        });
    }

    _onCloseLayer(){
        this.setState({layerVisible:false});
    }   


    render(){
        const layer = <E_VideoLayer onClose={this._onCloseLayer.bind(this)} videoID={this.state.layerVideoId}/>
        const contents = this.state.videoList.map((video)=>
            <Card onClick={()=>this._onClickCard(video.id)} thumbnail={video.image} label={video.title} />    
        );
        return(
            <Section primary={false} flex={false} colorIndex='grey-2' padding='large'>
                <h1> Video </h1>
                
                <Box direction='row' align='center'  justify='between' responsive={true} wrap={true} margin='large'>           
                    {contents}
                </Box>
                {this.state.layerVisible &&  layer }
            </Section>
        );
    }
};

export default E_Video;