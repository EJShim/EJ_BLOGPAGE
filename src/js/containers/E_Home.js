import React from 'react';
import Box from 'grommet/components/Box';
import Columns from 'grommet/components/Columns';
import Meter from 'grommet/components/Meter';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Headline from 'grommet/components/Headline';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';
import Heading from 'grommet/components/Heading';

import CloudIcon from 'grommet/components/icons/base/Cloud'




class E_Home extends React.Component{

    render(){
        return(
            <div>                    
            <Article scrollStep={false}>
                <Hero background={<Image src='/img/sample-img.png' fit='cover' full={true} />} backgroundColorIndex='dark' size='large'>
                    <Box direction='row' justify='center' align='center'>
                        
                        <Box basis='xsmall' align='end' pad='medium' />                                                      
                            <Card heading='EJ' description='hhaha.'label='react'  link={<Anchor href='#' primary={true} label='Link' />} />
                            <Box basis='1/2' align='start' pad='medium'/>                            
                        </Box>
                </Hero>
                                
                <Section pad='large' justify='center' align='center' full='vertical' colorIndex='grey-4'>
                    <Headline margin='none'>
                       Board
                    </Headline>
                </Section>
                <Section pad='large' justify='center' align='center' full='vertical' colorIndex='accent-2'>
                    <Headline margin='none'>
                    Portfolio
                    </Headline>
                </Section>            
                <Section pad='large' justify='center' align='center' full='vertical' colorIndex='neutral-1-t'>
                    <Headline margin='none'>
                    Videos
                    </Headline>
                </Section>
                <Section pad='large' justify='center' align='center' full='vertical' colorIndex='neutral-2'>
                    <Headline margin='none'>
                    Slides
                    </Headline>
                </Section>
                <Section pad='large' justify='center' align='center' full='vertical' colorIndex='grey-4'>
                    <Headline margin='none'>
                        Collaboration
                    </Headline>
                </Section>                                
            </Article>    
            </div>          
        );
    }
};

export default E_Home;

