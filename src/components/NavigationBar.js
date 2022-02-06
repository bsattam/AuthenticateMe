import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import styles from '../styles/NavigationBar.module.css';
import logo from '../images/logo.svg';

export default function NavigationBar() {
    const { isLoading } = useAuth0();
    
    return (
        <Navbar expand="lg"  className={styles.navigation}>
            <Container>
                <Navbar.Brand href='/'>
                    <img src={logo} className={styles.logo}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                {
                    !isLoading && (
                    <Nav className="ms-auto">
                        <Nav.Link><LoginButton/></Nav.Link>
                        <Nav.Link><LogoutButton/></Nav.Link>
                    </Nav>
                    )
                }

                </Navbar.Collapse>
            </Container>
        </Navbar>
        )
}
