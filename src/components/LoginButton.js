import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import util from '../styles/Utilities.module.css';

export default function LoginButton() {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return <div>
        {!isAuthenticated && 
            (<div className={util.text}
                onClick={() => loginWithRedirect()}>Login</div>)
        }
    </div>;
}
