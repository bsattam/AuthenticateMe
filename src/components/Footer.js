import React from 'react';
import styles from '../styles/Footer.module.css';
import utils from '../styles/Utilities.module.css';


export default function Footer() {
  return (
  <a className={`${styles.footer} text-secondary
      text-center`} href='https://github.com/bsattam'>
      Created By: Sattam Bandyopadhyay
  </a>
  )
}
