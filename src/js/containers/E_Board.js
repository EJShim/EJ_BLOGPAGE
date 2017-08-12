import React from 'react';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';

class E_Board extends React.Component{
    constructor(props){
        super(props);

        this.state={
            dataExists:false
        };
    }
    render(){
        return(
            <Article flex={!this.state.dataExists}>
                <Section  colorIndex='grey-2' pad='large'>
                    <h1> Input </h1>
                </Section>
                <Section flex={!this.state.dataExists}  colorIndex='neutral-4' pad='large'>
                    <h1> Board </h1>
                </Section>
            </Article>
        );
    }
}

export default E_Board;