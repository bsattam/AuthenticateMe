import React from 'react';
import styles from '../styles/Footer.module.css';
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { IconContext } from "react-icons";


export default function Footer() {
  return (
    <div className={`${styles.footer} `}>

      <div className={`d-flex justify-content-evenly align-items-center m-auto ${styles.width}`}>
        
        <a className={`text-secondary text-center`} 
        href='https://bsattam.github.io/Portfolio/' target="_blank" rel="noreferrer">
          Created By: Sattam Bandyopadhyay
        </a>

        <IconContext.Provider value={{color: '#8bb4b2'}}>
          <a href='https://www.linkedin.com/in/sattam-bandyopadhyay/' target="_blank" rel="noreferrer"><BsLinkedin/></a>
          <a href='https://github.com/bsattam' target="_blank" rel="noreferrer"><BsGithub/></a>
        </IconContext.Provider>
        
      </div>
    </div>
  ) 
}
