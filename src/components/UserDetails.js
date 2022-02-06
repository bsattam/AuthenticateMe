import React from 'react';
import styles from '../styles/UserDetails.module.css';
import utils from '../styles/Utilities.module.css';
import { useAuth0 } from '@auth0/auth0-react';

export default function UserDetails() {
    const { user, logout } = useAuth0();

    const {name, picture, email, nickname} = user;
    return ( 
            <div className={`d-flex flex-column align-items-center
                justify-content-between w-75 h-75 ${utils.text2}`}>
                <div className={`text-center display-4 ${styles.heading}`}>
                    Authenticated Successfully!
                </div>
                <div className={`d-flex flex-column justify-content-evenly
                    flex-md-row align-items-center w-100`}>
                    <div className={`my-2 my-md-5`}>
                        <img alt='' src={`${picture}`} className='rounded-circle'
                        width='150' height='150'/>
                    </div>
                    <div className={`my-3 ${utils.fontSize1}`}>
                        <div>Name: <span>{name}</span></div>
                        <div>Email: <span>{email}</span></div>
                        <div>Nickname: <span>{nickname}</span></div>
                    </div>
                </div>
                <div className={`${styles.logOutButton} p-2 text-center`}
                    onClick={() => {logout()}}>
                    Log Out
                </div>
            </div>
        )
}
