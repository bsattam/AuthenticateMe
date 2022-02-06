import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import styles from '../styles/Login.module.css';
import styles2 from '../styles/Utilities.module.css';
import name from '../images/name.svg';

export default function Login() {
const { loginWithRedirect } = useAuth0();
  return( 
  <div className={`d-flex flex-column 
  align-items-center ${styles2.text2}`}>
        <div className={`${styles.heading} display-2`}>Welcome</div>
        <div className={`${styles2.fontSize1} w-75 text-center`}>This website helps the user authenticate using OAuth0</div>
        <div className={`my-2`}>So, what are you waiting for?</div>
        <div className={`${styles2.fontSize2}`}>Let's get started!</div>
        <div onClick={()=>{loginWithRedirect()}}>
            <img src={name} className={`${styles.nameImage} mt-5 p-2`}/>
        </div>
    </div>
  )
}
