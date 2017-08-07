import React from 'react';
import {Link} from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button, Glyphicon } from 'react-bootstrap';
import styles from './Header.css';

class Header extends React.Component{

    render(){        
        return(
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        
                        <a href="#"><Glyphicon glyph="music" /> EJ</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>

                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">Board</NavItem>
                        <NavItem eventKey={2} href="#">Record</NavItem>
                        <NavItem eventKey={1} href="#">Collaboration App</NavItem>                        
                        <NavDropdown eventKey={3} title="Portfolio" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Video</MenuItem>                        
                            <MenuItem divider />
                            <MenuItem eventKey={3.1}>WebGL</MenuItem>
                        </NavDropdown>
                    </Nav>                    
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;