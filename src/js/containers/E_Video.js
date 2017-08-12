import React from 'react';
import axios from 'axios';
import Section from 'grommet/components/Section';
import Card from 'grommet/components/Card';
import Box from 'grommet/components/Box';
import E_VideoLayer from 'components/E_VideoLayer';
import Spinning from 'grommet/components/icons/Spinning';
import Animate from 'grommet/components/Animate';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';


class E_Video extends React.Component{
    constructor(props){
        super(props);

        this.state={
            dataExists:false,
            videoList:[],
            listRange:5,
            layerVideoId : null,
            layerVisible : false
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

    _onMoreTile(){
        this.setState({
            listRange:this.state.listRange+5,
        });
        console.log(this.state.listRange, this.state.videoList.length);
    }


    render(){
        const layer = <E_VideoLayer visible={this.state.layerVisible} onClose={this._onCloseLayer.bind(this)} videoID={this.state.layerVideoId}/>

        const vidList = this.state.videoList.slice(0,this.state.listRange);
        const contents = vidList.map((video)=>
            <Animate visible={true} enter={{"animation": "fade", "duration": 1500, "delay": 0}} keep={true}>
                <Tile>
                    <Card onClick={()=>this._onClickCard(video.id)} thumbnail={video.image} label={video.title} />    
                </Tile>
            </Animate>
        );

        let contentElement = (
            <Box pad='xlarge' align='center'>
                <p> Loading </p>
                <Spinning size='large'/>
            </Box>
        );
         
        if(this.state.dataExists){
            let loadmore = true;
            if(this.state.listRange >= this.state.videoList.length) loadmore = false;
            contentElement = (                
                <Tiles fill={true} onMore={ loadmore ? ()=>this._onMoreTile() : null }>
                    {contents}
                </Tiles>                
            );
        }   
        
        return(
            <Section flex={!this.state.dataExists} colorIndex='grey-2' pad='large'>
                <h1> Video </h1>                
                {contentElement}                
                {this.state.layerVisible &&  layer }
            </Section>
        );
    }
};

export default E_Video;