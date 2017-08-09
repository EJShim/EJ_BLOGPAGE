import React from 'react';
import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section';


class E_Portfolio extends React.Component{
    constructor(props){
        super(props);


        let arr = [];
        for(let i=0 ; i<Math.random()*1000 ; i++ ) arr.push(i);


        this.state = {
            content: arr
        }
    }



    render(){

        const contents = this.state.content.map((idx)=> 
            <Box key={idx} basis='small' primary={true} direction='column' align='center' colorIndex="neutral-3" pad='large' margin='medium'>
                {idx}
            </Box>
        );

        console.log(contents)

        return(
            <Section primary={false} flex={false} colorIndex='grey-2'>
                <h1> Portfolio </h1>
                <Box direction='row' align='center'  pad='large' justify='between' responsive={true} wrap={true}>                                
                    {contents}
                </Box>
            </Section>
        );
    }
}

export default E_Portfolio;