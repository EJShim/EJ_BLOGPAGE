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
            <Article scrollStep={true}>
                <Section pad='large' justify='center' align='center' full='vertical' colorIndex='grey-4'>
                    <Hero background={<Image src='/img/sample.jpg' fit='cover' full={true} />} backgroundColorIndex='dark'>
                        <Box direction='row' justify='center' align='center'>
                            <Box basis='1/2' align='end' pad='medium' />
                            <Box basis='1/2' align='start' pad='medium'>
                                <Heading margin='none'>
                                    Sample Heading
                                </Heading>
                            </Box>
                        </Box>
                    </Hero>
                </Section>

                <Section pad='large' justify='center' align='center' full='vertical'>
                    <Headline margin='none'>
                    Section 1
                    </Headline>
                </Section>
                <Section pad='large' justify='center' align='center' full='vertical' colorIndex='grey-4'>
                    <Headline margin='none'>
                    Section 2
                    </Headline>
                </Section>
                <Section pad='large' justify='center' align='center' full='vertical'>
                    <Headline margin='none'>
                    Section 3
                    </Headline>
                </Section>
                <Section pad='large' justify='center' align='center' full='vertical' colorIndex='grey-4'>
                    <Headline margin='none'>
                        Section 4
                    </Headline>
                </Section>
                <Section pad='large' justify='center' align='center' full='vertical'>
                    <Headline margin='none'>
                        Section 5                                            
                    </Headline>
                </Section>
            </Article>              
        );
    }
};

export default E_Home;
