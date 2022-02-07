import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import styles from '../styles/NavigationBar.module.css';
import util from '../styles/Utilities.module.css';
import logo from '../images/logo.svg';
import { BsThreeDotsVertical } from "react-icons/bs";
import { IconContext } from "react-icons";

export default function NavigationBar() {
    const { loginWithRedirect, isLoading, isAuthenticated, logout } = useAuth0();
    
    return (
        <Navbar expand="lg"  className={styles.navigation}>
            <Container>

                <Navbar.Brand href='/'>
                    <img  alt='' src={logo} className={styles.logo}/>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <IconContext.Provider value={{color: '#8bb4b2'}}>
                        <BsThreeDotsVertical/>
                    </IconContext.Provider>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                {
                    !isLoading && (
                    <Nav className="ms-auto">

                        { !isAuthenticated && <>
                        <Nav.Link className={`me-3`}>
                            <div className={`${util.text} ${styles.navButton}`}
                            onClick={() => loginWithRedirect()}>
                                Login
                            </div>
                        </Nav.Link>
                        </> }

                        { isAuthenticated && <>
                        <Nav.Link className={`me-3`}>
                            <div className={`${util.text} ${styles.navButton} `}
                                onClick={()=>logout()}>
                                Log Out
                            </div>
                        </Nav.Link>
                        </> }

                        <Nav.Link className={`${util.text} ${styles.navButton}`}
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
