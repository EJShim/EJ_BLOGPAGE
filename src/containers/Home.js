import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

import styles from './Home.css';

class Home extends React.Component{
    render(){
        return(
            <div>
                <Jumbotron className={styles.main}>
                    <h1> EJ Blog</h1>
                    <p>Building EJ Blog Template</p>
                    <p><Button bsStyle="primary">Learn more</Button></p>
                </Jumbotron>
                
                <div className="alert alert-success" role="alert">
                    <strong>Well done!</strong> You successfully read this important alert message.
                </div>
                <div className="alert alert-info" role="alert">
                    <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
                </div>
                <div className="alert alert-warning" role="alert">
                    <strong>Warning!</strong> Better check yourself, you're not looking too good.
                </div>
                <div className="alert alert-danger" role="alert">
                    <strong>Oh snap!</strong> Change a few things up and try submitting again.
                </div>
            </div>
        );
        
    }
};

export default Home;