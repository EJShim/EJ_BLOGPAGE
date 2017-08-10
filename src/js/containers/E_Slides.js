import React from 'react';
import axios from 'axios'
import Card from 'grommet/components/Card';
import Headline from 'grommet/components/Headline';
import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section'
import E_SlidesLayer from 'components/E_SlidesLayer';

class E_Slides extends React.Component{
    constructor(props){
        super(props);

        this.state={
            dataExists:false,
            slidesList:[],
            layerVisible : false,
            layerSlideId : null
        }
    }

    componentDidMount(){
        axios.get("/api/slides")
        .then(response=>{
            this.setState({
                dataExists:true,
                slidesList:response.data,
                layerVisible : false
            });
        })
        .catch(error=>{
            console.log(error)
        })
    }

    _onClickCard(key){        
        this.setState({
            layerVisible:true,
            layerSlideId:key
        });
    }

    _onCloseLayer(){
        this.setState({layerVisible:false});
    }   


    render(){

        const colors = ['accent-1', 'accent-2', 'neutral-1', 'neutral-2', 'neutral-2-t', 'neutral-3', 'neutral-3-t', 'neutral-4', 'ok'];
        const sizes = ['XSmall', 'Small', 'Medium', 'auto'];


        const layer = <E_SlidesLayer onClose={this._onCloseLayer.bind(this)} sliceID={this.state.layerSlideId}/>
        const contents = this.state.slidesList.map((slide)=>
            <Box onClick={()=>this._onClickCard(slide.id)} colorIndex={colors[Math.round(Math.random()*colors.length+1)]} pad='large' size={sizes[Math.round(Math.random()*sizes.length+1)]}>
                <Headline margin='large'>
                {slide.title}
                </Headline>
            </Box>    
        );

        return(
            <Section primary={false} flex={false} colorIndex='grey-2' pad='large'>
                <Box direction='row' align='center'  justify='between' responsive={true} wrap={true} pad='large'>
                    {contents}
                    {/* <Card onClick={()=>this._onClickCard("oweighsdoim")} thumbnail="img/sample.jpg" label='sample title' />
                    <Card onClick={()=>this._onClickCard("oweighsdoim")} thumbnail="img/sample.jpg" label='sample title' />    
                    <Card onClick={()=>this._onClickCard("oweighsdoim")} thumbnail="img/sample.jpg" label='sample title' />    
                    <Card onClick={()=>this._onClickCard("oweighsdoim")} thumbnail="img/sample.jpg" label='sample title' />    
                    <Card onClick={()=>this._onClickCard("oweighsdoim")} thumbnail="img/sample.jpg" label='sample title' />    
                    <Card onClick={()=>this._onClickCard("oweighsdoim")} thumbnail="img/sample.jpg" label='sample title' />     */}
                </Box>
                {this.state.layerVisible &&  layer }
            </Section>
        );
    }
}

export default E_Slides;