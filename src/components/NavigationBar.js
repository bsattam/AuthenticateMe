import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import styles from '../styles/NavigationBar.module.css';
import util from '../styles/Utilities.module.css';
import logo from '../images/logo.svg';

export default function NavigationBar() {
    const { loginWithRedirect, isLoading, isAuthenticated, logout } = useAuth0();
    
    return (
        <Navbar expand="lg"  className={styles.navigation}>
            <Container>
                <Navbar.Brand href='/'>
                    <img  alt='' src={logo} className={styles.logo}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" 
                className={styles.navToggleButton}/>
                <Navbar.Collapse id="basic-navbar-nav">
                {
                    !isLoading && (
                    <Nav className="ms-auto">
                        { !isAuthenticated && <>
                        <Nav.Link className={`{styles.navButton} me-3`}>
                            <div className={util.text}
                            onClick={() => loginWithRedirect()}>
                                Login
                            </div>
                        </Nav.Link>
                        </> }
                        { isAuthenticated && <>
                        <Nav.Link className={`{styles.navButton} me-3`}>
                            <div className={util.text}
                                onClick={()=>logout()}>
                                Log Out
                            </div>
                        </Nav.Link>
                        </> }
                        <Nav.Link className={`${util.text}`}
                        href='https://github.com/bsattam/AuthenticateMe'>
                            Github
                        </Nav.Link>
                    </Nav>
                    )
                }

                </Navbar.Collapse>
            </Container>
        </Navbar>
        )
}
