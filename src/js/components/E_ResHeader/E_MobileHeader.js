import React from 'react'
import Section from 'grommet/components/Section';
import Menu from 'grommet/components/Menu';
import Animate from 'grommet/components/Animate';

class E_MobileHeader extends React.Component{
     render () {        
        const {animate, menuAnchors} = this.props;

        let contents = (
            <Section justify='center' align='center' pad={{vertical: 'large'}} colorIndex='neutral-1' className={this.props.className}>
                <Menu primary={true} align='center'>
                    {menuAnchors}
                </Menu>
            </Section>
        );

        if (animate) {
            contents = (
                <Animate visible='scroll' keep={true} enter={{ animation: 'fade', duration: 1000, delay: 100 }}>
                    {contents}
                </Animate>
            );
        }
        return contents;
    }
}


export default E_MobileHeader;